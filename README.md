# BEOM Pilot - AI & Business Automation Solutions

A premium business website for an AI and automation solutions company, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Premium dark/light theme with Midnight Blue (#1E1E2F), Neon Purple (#8A2BE2), and Ice White (#F4F6FC)
- **Bilingual Support**: English (primary) and Arabic with RTL support
- **Single-Page Layout**: Smooth scroll navigation through all sections
- **Reusable Components**: Modular React components
- **Animations**: Subtle Framer Motion animations
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile
- **Working Contact Form**: Client-side form with validation

## Sections

1. Hero - Strong value proposition with CTAs
2. Why Automation - 5 benefit cards
3. Impact - Before/After comparison
4. Services - 6 automation service cards
5. Use Cases - Practical business examples
6. Projects - 3 case studies with results
7. Process - 4-step consultation process
8. Contact - Form + contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
cd beom-pilot

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk, Material Symbols Outlined

## Project Structure

```
beom-pilot/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WhyAutomation.tsx
│   ├── BeforeAfter.tsx
│   ├── ServicesOverview.tsx
│   ├── UseCases.tsx
│   ├── FeaturedProjects.tsx
│   ├── Process.tsx
│   ├── ContactForm.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── context/
│   └── LanguageContext.tsx
├── lib/
│   ├── content-en.ts
│   └── content-ar.ts
└── package.json
```

## Contact

- Email: omardief204@gmail.com
- Phone: +20 127 299 1153
