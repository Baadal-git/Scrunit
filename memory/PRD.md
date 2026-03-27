# Scrutin — Startup Idea Validation Tool

## Original Problem Statement
Build the Scrutin brand (startup idea validation SaaS) using React + CRA + JavaScript + Tailwind CSS.

## Architecture
- Frontend: React (CRA) + JavaScript + Tailwind CSS
- Backend: FastAPI + MongoDB (not yet used)
- Fonts: Google Fonts — Instrument Serif + Inter (400, 500, 600)

## Phase 1 — Implemented (2026-03-27)
### Design System (`index.css`)
- CSS variables: `--bg-primary` (#120f0a warm brown-black), `--bg-surface`, `--text-primary`, `--text-muted`, `--border-subtle`, `--border-glass`, `--accent-white`, `--accent-orange` (#c8622a), `--font-display`, `--font-body`
- Utility classes: `.glass-card`, `.btn-glass`, `.btn-primary`, `.hero-input`, `.hero-select`
- Mobile responsive navbar CSS at breakpoint 767px

### Navbar Component (`src/components/Navbar.js`)
- Logo: "Scrutin®" — Instrument Serif 26px, letter-spacing -0.5px
- Center nav links (desktop): How it Works / Sample Report / Pricing / About — Inter 13px muted, hover to white
- Right CTA: "View Sample Report" — `.btn-glass` pill button
- Mobile: hamburger toggles glass-card dropdown with all links + CTA

## Phase 2 — Implemented (2026-03-27)
### HeroSection Component (`src/components/HeroSection.js`)
- Tag pill: glass pill with orange dot, "AI-powered · Multi-agent research · 10 min delivery"
- H1: "Know if your idea is " (white) + "worth building." (--accent-orange), Instrument Serif clamp(48px,8vw,88px), line-height 0.95, letter-spacing -2px
- Subtext: Inter 17px muted with "Free." in white bold, max-width 560px
- Form card (.glass-card, max-width 580px): idea textarea (3 rows), target customer input (optional), market dropdown + email (2-col)
- Submit button: "Validate My Idea →" full-width .btn-primary
- Form states: idle → loading ("Launching agents...", disabled) → success (ConfirmationCard ⚡ "Agents deployed.")
- Validation: idea + email required, inline error on empty submit
- NOTE: Form submission is MOCKED (1800ms setTimeout, no real API call)

## Phase 3 — Implemented (2026-03-27)
### HowItWorks Component (`src/components/HowItWorks.js`)
- Eyebrow "THE PROCESS" in --accent-orange, Inter 11px uppercase
- H2 "From idea to insight in minutes." — Instrument Serif, clamp(36px,5vw,56px), letter-spacing -1.5px
- Subtext — Inter 16px muted
- 3 step cards in horizontal flex row (.glass-card), stacks vertically on mobile via `.steps-row` CSS class
- Each card: orange step number (01/02/03), 28px icon, Instrument Serif title, Inter body
- Vertical 1px connector lines between cards (rgba(255,255,255,0.06)), hidden on mobile
- Sources callout: "Sources we scrape:" label + 6 pills (Reddit, Product Hunt, Google, G2, Trustpilot, + many more)
- Added `.steps-row`, `.step-card`, `.step-connector` CSS classes to index.css

## Prioritized Backlog

### P0 — Core Pages
- Sample Report page (mock data)
- Pricing section

### P1 — Features
- Real idea validation API (connect form to backend)
- Email delivery integration (SendGrid / Resend)

### P2 — Polish
- Page transitions / animations
- SEO meta tags
- Footer
