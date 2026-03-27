# Scrutin — Startup Idea Validation Tool

## Original Problem Statement
Build the Scrutin brand (startup idea validation SaaS) using React + CRA + JavaScript + Tailwind CSS.

## Architecture
- Frontend: React (CRA) + JavaScript + Tailwind CSS
- Backend: FastAPI + MongoDB (not yet used)
- Fonts: Google Fonts — Instrument Serif + Inter (400, 500, 600)

## Phase 1 — Implemented (2026-03-27)
### Design System (`index.css`)
- CSS variables: `--bg-primary`, `--bg-surface`, `--text-primary`, `--text-muted`, `--border-subtle`, `--border-glass`, `--accent-white`, `--font-display`, `--font-body`
- Utility classes: `.glass-card`, `.btn-glass`, `.btn-primary`
- Mobile responsive navbar CSS at breakpoint 767px

### Navbar Component (`src/components/Navbar.js`)
- Logo: "Scrutin®" — Instrument Serif 26px, letter-spacing -0.5px
- Center nav links (desktop): How it Works / Sample Report / Pricing / About — Inter 13px muted, hover to white
- Right CTA: "View Sample Report" — `.btn-glass` pill button
- Mobile: hamburger toggles glass-card dropdown with all links + CTA
- All interactive elements have `data-testid` attributes
- `index.html`: Google Fonts link for Instrument Serif + Inter

## Prioritized Backlog

### P0 — Core Pages
- Hero section with headline + idea submission input
- How It Works section
- Sample Report page (mock data)
- Pricing section

### P1 — Features
- Idea validation report generation (AI integration)
- Email capture / waitlist

### P2 — Polish
- Page transitions / animations
- SEO meta tags
- Footer
