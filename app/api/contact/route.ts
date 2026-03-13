import { NextRequest, NextResponse } from "next/server";

// Server-side only — these vars are NOT exposed to the browser
const WEBHOOK_URL    = process.env.WEBHOOK_URL    ?? "";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET ?? "";

export async function POST(req: NextRequest) {
  // ── 1. Parse incoming body ──────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // ── 2. Basic server-side validation ────────────────────────────────
  const name    = String(body.name    ?? "").trim();
  const email   = String(body.email   ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();
  const phone   = String(body.phone   ?? "").trim();

  const errors: string[] = [];
  if (!name    || name.length    < 2)   errors.push("Name is too short.");
  if (!email   || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Email is invalid.");
  if (!message || message.length < 10)  errors.push("Message is too short.");
  if (name.length    > 100) errors.push("Name is too long.");
  if (email.length   > 254) errors.push("Email is too long.");
  if (phone.length   > 20)  errors.push("Phone number is too long.");
  if (company.length > 100) errors.push("Company name is too long.");
  if (message.length > 2000) errors.push("Message is too long.");

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, error: errors[0] },
      { status: 422 }
    );
  }

  // ── 3. Configuration check ─────────────────────────────────────────
  if (!WEBHOOK_URL) {
    console.error("[contact] WEBHOOK_URL env var is not set.");
    return NextResponse.json(
      { success: false, error: "Server is not configured. Please contact us directly." },
      { status: 503 }
    );
  }

  // ── 4. Forward to n8n with a 15-second timeout ─────────────────────
  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), 15_000);

  try {
    const n8nResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(WEBHOOK_SECRET ? { "x-webhook-secret": WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    clearTimeout(timeoutId);

    // Try to parse n8n's structured response
    let n8nResult: { success?: boolean; error?: string } = {};
    try {
      n8nResult = await n8nResponse.json();
    } catch {
      // n8n returned non-JSON — use HTTP status to decide
    }

    if (n8nResponse.ok && n8nResult.success !== false) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json(
      { success: false, error: n8nResult.error ?? "Could not send your message. Please try again." },
      { status: n8nResponse.status }
    );

  } catch (err: unknown) {
    clearTimeout(timeoutId);

    if (err instanceof Error && err.name === "AbortError") {
      console.error("[contact] n8n webhook timed out after 15s.");
      return NextResponse.json(
        { success: false, error: "The server took too long to respond. Please try again." },
        { status: 504 }
      );
    }

    console.error("[contact] Unexpected error forwarding to n8n:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
