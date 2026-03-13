/**
 * Smoothly scrolls to a page section by element id.
 * The offset compensates for the sticky navbar height (80px).
 */
export function scrollToSection(id: string, offset = 80): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
