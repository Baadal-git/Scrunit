import React from "react";

const MARQUEE_TEXT =
  "REDDIT SCRAPING · PRODUCT HUNT · GOOGLE SEARCH · COMPETITOR ANALYSIS · MARKET SIZING · RISK AUDIT · CUSTOMER PROFILING · 18-MONTH FORECAST · FOUNDER-GRADE REPORT · ";

const STATS = [
  { number: "10",     label: "Sections Per Report" },
  { number: "15 MIN", label: "Average Delivery" },
  { number: "4+",     label: "Live Sources Scraped" },
  { number: "100%",   label: "Built For Founders" },
];

const REPORT_ITEMS = [
  "Market sizing",
  "Real competitors",
  "Customer pain points",
  "Risk flags",
  "18-month forecast",
  "Honest verdict",
  "Competitive gaps",
  "Pricing signals",
  "Demand validation",
  "Go / No-Go summary",
];

const scrollToForm = () => {
  const form = document.querySelector('[data-testid="hero-form"]');
  if (form) form.scrollIntoView({ behavior: "smooth" });
};

export default function About() {
  return (
    <>
      <section data-testid="about-section" id="about">

        {/* ── Part A: Opening Statement ── */}
        <div style={{ padding: "120px 24px 80px", maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            data-testid="about-opening"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 7vw, 84px)",
              fontWeight: "normal",
              color: "var(--text-primary)",
              letterSpacing: "-2px",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            Most ideas don't fail at launch.{" "}
            <span style={{ color: "var(--accent-orange)" }}>They fail before it.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              maxWidth: "440px",
              margin: 0,
              marginTop: "36px",
              marginLeft: "clamp(0px, 28%, 280px)",
            }}
          >
            Founders spend months building what the market never asked for.
            Not because they weren't smart — because nobody told them the
            truth early enough.
          </p>
        </div>

        {/* ── Marquee (full-width) ── */}
        <div
          data-testid="about-marquee"
          style={{
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

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

          {/* ── Part B: What we do — asymmetric 2-col prose ── */}
          <div className="about-two-col" style={{ padding: "88px 0 72px" }}>
            <div className="about-col-label">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "var(--accent-orange)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  margin: 0,
                }}
              >
                What We Do
              </p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "19px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              We deploy AI agents{" "}
              <span style={{ color: "var(--text-primary)" }}>simultaneously</span>{" "}
              across Reddit, Product Hunt, Google, and competitor review sites.
              Not one at a time.{" "}
              <span style={{ color: "var(--text-primary)" }}>All at once.</span>{" "}
              Finding real customer pain, pricing signals, and competitive gaps —
              before you write a single line of code.
            </p>
          </div>

          {/* ── Part C: Typographic poster moment ── */}
          <div style={{ paddingBottom: "88px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 10vw, 116px)",
                fontWeight: "normal",
                color: "var(--text-primary)",
                letterSpacing: "-3px",
                lineHeight: 0.88,
                margin: 0,
              }}
            >
              Real signal.
              <br />
              <span style={{ color: "var(--accent-orange)" }}>Not guesswork.</span>
            </h2>
          </div>

          {/* ── Part D: Stats — raw, no containers ── */}
          <div data-testid="about-stats" className="stat-row">
            {STATS.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="stat-item">
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(44px, 5.5vw, 68px)",
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
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      marginTop: "10px",
                      marginBottom: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
                {i < STATS.length - 1 && <div className="stat-divider" />}
              </React.Fragment>
            ))}
          </div>

          {/* ── Part E: What you get — 2-col label + tag cloud ── */}
          <div className="about-two-col" style={{ paddingBottom: "88px" }}>
            <div className="about-col-label">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "var(--accent-orange)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  margin: 0,
                }}
              >
                What You Get
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.7,
                  margin: 0,
                  marginBottom: "20px",
                }}
              >
                A 10-section founder-grade report. In your inbox in under 15 minutes.
                No fluff. No templates. Real data.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {REPORT_ITEMS.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "100px",
                      padding: "7px 16px",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Part F: Closing CTA ── */}
          <div
            data-testid="about-closing"
            style={{ textAlign: "center", paddingBottom: "120px" }}
          >
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
