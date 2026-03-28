import React, { useState } from "react";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Sample Report", href: "#sample-report" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      data-testid="navbar"
      style={{ position: "relative", zIndex: 10, width: "100%" }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "24px 32px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          data-testid="navbar-logo"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "26px",
            color: "var(--text-primary)",
            letterSpacing: "-0.5px",
            fontWeight: "normal",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          Scrutin<sup style={{ fontSize: "12px", verticalAlign: "super", lineHeight: 0 }}>®</sup>
        </a>

        {/* Center nav links — desktop only */}
        <ul
          data-testid="navbar-links"
          className="navbar-links-desktop"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <a
          href="#sample-report"
          data-testid="navbar-cta"
          className="btn-glass"
          style={{ padding: "10px 22px", fontSize: "13px" }}
        >
          View Sample Report
        </a>

        {/* Mobile hamburger */}
        <button
          data-testid="navbar-mobile-menu-btn"
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text-primary)",
                borderRadius: "2px",
                transition: "transform 0.2s, opacity 0.2s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          data-testid="navbar-mobile-menu"
          className="glass-card"
          style={{
            margin: "0 16px 16px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--text-muted)",
                textDecoration: "none",
                padding: "6px 0",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#sample-report"
            className="btn-glass"
            onClick={() => setMenuOpen(false)}
            style={{ padding: "10px 22px", fontSize: "13px", marginTop: "4px" }}
          >
            View Sample Report
          </a>
        </div>
      )}

      {/* Mobile styles handled in index.css */}
    </nav>
  );
}
