import React from "react";

const MARQUEE_TEXT =
  "REDDIT SCRAPING · PRODUCT HUNT · GOOGLE SEARCH · COMPETITOR ANALYSIS · MARKET SIZING · RISK AUDIT · CUSTOMER PROFILING · 18-MONTH FORECAST · FOUNDER-GRADE REPORT · ";

const STATS = [
  { number: "10",     label: "SECTIONS PER REPORT" },
  { number: "15 MIN", label: "AVERAGE DELIVERY" },
  { number: "4+",     label: "LIVE SOURCES SCRAPED" },
  { number: "100%",   label: "BUILT FOR FOUNDERS" },
];

const scrollToForm = () => {
  const form = document.querySelector('[data-testid="hero-form"]');
  if (form) form.scrollIntoView({ behavior: "smooth" });
};

export default function About() {
  return (
    <>
      <section
        data-testid="about-section"
        id="about"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          {/* ── Part 1: Opening Statement ── */}
          <div data-testid="about-opening">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 6vw, 72px)",
                fontWeight: "normal",
                color: "var(--text-primary)",
                letterSpacing: "-2px",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Most ideas don't fail at launch.{" "}
              <span style={{ color: "var(--accent-orange)" }}>
                They fail before it.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.8,
                maxWidth: "480px",
                marginTop: "28px",
                marginBottom: 0,
                marginLeft: "clamp(0px, 4vw, 40px)",
              }}
            >
              Founders spend months building things the market never asked for.
              Not because they weren't smart — because nobody told them the
              truth early enough.
            </p>
          </div>

        </div>

        {/* ── Part 2: Marquee Strip (full width) ── */}
        <div
          data-testid="about-marquee"
          style={{
            margin: "72px 0",
            background: "rgba(255,255,255,0.03)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "18px 0",
            overflow: "hidden",
          }}
        >
          <div className="marquee-track">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  paddingRight: "64px",
                }}
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: "1000px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>

          {/* ── Part 3: Editorial Cards ── */}
          <div data-testid="about-cards" className="about-cards">

            {/* Card 1 — The Problem */}
            <div className="glass-card" style={{ flex: 1, padding: "32px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "72px",
                  color: "rgba(255,255,255,0.06)",
                  lineHeight: 1,
                  margin: 0,
                  marginBottom: "-16px",
                }}
              >
                01
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  color: "var(--accent-orange)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  margin: 0,
                }}
              >
                The Problem
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginTop: "16px",
                  marginBottom: 0,
                }}
              >
                Founders burn months and money building what nobody wants.
                Validation is an afterthought.
              </p>
            </div>

            {/* Card 2 — What We Do */}
            <div
              className="glass-card"
              style={{
                flex: 1,
                padding: "32px",
                borderLeft: "3px solid var(--accent-orange)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "72px",
                  color: "rgba(255,255,255,0.06)",
                  lineHeight: 1,
                  margin: 0,
                  marginBottom: "-16px",
                }}
              >
                02
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  color: "var(--accent-orange)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  margin: 0,
                }}
              >
                What We Do
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginTop: "16px",
                  marginBottom: 0,
                }}
              >
                We send agents across the internet simultaneously. Reddit
                threads. Product Hunt comments. Google results. Competitor
                review pages. Real signal, not guesswork.
              </p>
            </div>

            {/* Card 3 — What You Get */}
            <div className="glass-card" style={{ flex: 1, padding: "32px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "72px",
                  color: "rgba(255,255,255,0.06)",
                  lineHeight: 1,
                  margin: 0,
                  marginBottom: "-16px",
                }}
              >
                03
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  color: "var(--accent-orange)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  margin: 0,
                }}
              >
                What You Get
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginTop: "16px",
                  marginBottom: 0,
                }}
              >
                A 10-section founder-grade report. Market size. Real
                competitors. Customer pain points. Risk flags. 18-month
                forecast. Honest verdict.
              </p>
            </div>

          </div>

          {/* ── Part 4: Stat Row ── */}
          <div data-testid="about-stats" className="stat-row">
            {STATS.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="stat-item">
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(48px, 6vw, 72px)",
                      color: "var(--text-primary)",
                      fontWeight: "normal",
                      letterSpacing: "-2px",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      marginTop: "8px",
                      marginBottom: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="stat-divider" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ── Part 5: Closing + CTA ── */}
          <div data-testid="about-closing" style={{ textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: "normal",
                color: "var(--text-primary)",
                letterSpacing: "-1.5px",
                margin: 0,
                marginBottom: "12px",
                lineHeight: 1.1,
              }}
            >
              Your idea deserves an honest answer.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "36px",
              }}
            >
              Free. No credit card. 15 minutes.
            </p>
            <button
              data-testid="about-cta-btn"
              className="btn-primary"
              onClick={scrollToForm}
              style={{ padding: "16px 48px", fontSize: "15px" }}
            >
              Validate My Idea Free →
            </button>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        data-testid="footer"
        style={{
          backgroundColor: "#0d0b08",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "28px 40px",
        }}
      >
        <div className="footer-row">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Scrutin<sup style={{ fontSize: "10px" }}>®</sup>
          </span>

          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © 2025 Scrutin. All rights reserved.
          </span>

          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
