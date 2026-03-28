import React from "react";

const COMPETITORS = [
  {
    name: "IdeaProof",
    funding: "$2.1M Seed",
    tagline: "50-criteria idea scoring with competitor SWOT",
    hate: "Reports feel templated, not specific to my idea",
  },
  {
    name: "ValidatorAI",
    funding: "Bootstrapped",
    tagline: "Real-time market research for startup ideas",
    hate: "Too surface-level, doesn't give actionable next steps",
  },
  {
    name: "Ideabuddy",
    funding: "$800K Pre-seed",
    tagline: "Business plan builder with validation layer",
    hate: "Overwhelming UI, takes hours to get any output",
  },
];

const SCORES = [
  { label: "Problem Severity", score: "8/10" },
  { label: "Market Size", score: "7/10" },
  { label: "Competitive Openness", score: "9/10" },
  { label: "Execution Feasibility", score: "7/10" },
  { label: "Timing", score: "9/10" },
];

const eyebrowStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  color: "var(--accent-orange)",
  margin: 0,
};

const dividerStyle = {
  height: "1px",
  background: "rgba(255,255,255,0.06)",
  border: "none",
  margin: "20px 0",
};

const subsectionLabelStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  color: "rgba(255,255,255,0.35)",
  margin: 0,
  marginBottom: "16px",
};

const fullReportBadge = (
  <span
    style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "100px",
      padding: "6px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      color: "rgba(255,255,255,0.3)",
      whiteSpace: "nowrap",
    }}
  >
    Full Report
  </span>
);

function CardOverlay() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "90px",
        background: "linear-gradient(to bottom, transparent, #120f0a)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "18px",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        🔒 Full section available in your report
      </span>
    </div>
  );
}

export default function SampleReport() {
  const handleScrollToForm = () => {
    const form = document.querySelector('[data-testid="hero-form"]');
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="sample-report-section"
      id="sample-report"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Heading Block */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ ...eyebrowStyle, marginBottom: "16px" }}>Sample Report</p>
          <h2
            data-testid="sample-report-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: "normal",
              color: "var(--text-primary)",
              letterSpacing: "-1.5px",
              margin: 0,
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            What you'll receive.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--text-muted)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Every report covers 10 sections. Here's a preview of two.
          </p>
        </div>

        {/* ── Card 1: Competitive Landscape ── */}
        <div
          data-testid="card-competitive"
          className="glass-card"
          style={{
            padding: "32px",
            marginBottom: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Card header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <p style={{ ...eyebrowStyle, marginBottom: "6px" }}>Section 03</p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  fontWeight: "normal",
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                Competitive Landscape
              </h3>
            </div>
            {fullReportBadge}
          </div>

          <hr style={dividerStyle} />

          {/* Direct Competitors */}
          <p style={subsectionLabelStyle}>Direct Competitors</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {COMPETITORS.map((c) => (
              <div key={c.name}>
                {/* Name + funding row */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {c.name}
                  </span>
                  <span
                    style={{
                      background: "rgba(200,98,42,0.15)",
                      border: "1px solid rgba(200,98,42,0.3)",
                      borderRadius: "100px",
                      padding: "3px 10px",
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      color: "var(--accent-orange)",
                    }}
                  >
                    {c.funding}
                  </span>
                </div>
                {/* Tagline */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                    marginBottom: "6px",
                  }}
                >
                  {c.tagline}
                </p>
                {/* What customers hate */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: "rgba(220,60,60,0.1)",
                      border: "1px solid rgba(220,60,60,0.2)",
                      borderRadius: "100px",
                      padding: "2px 10px",
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      color: "rgba(220,100,100,0.8)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    What customers hate:
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.4)",
                      fontStyle: "italic",
                      lineHeight: 1.5,
                    }}
                  >
                    "{c.hate}"
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gap identified */}
          <div style={{ marginTop: "24px" }}>
            <p style={{ ...subsectionLabelStyle, marginBottom: "12px" }}>Competitive Gap Identified</p>
            <div
              style={{
                background: "rgba(200,98,42,0.08)",
                border: "1px solid rgba(200,98,42,0.2)",
                borderRadius: "12px",
                padding: "16px 20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                No existing tool combines live multi-source scraping with AI-generated competitor gap
                analysis in a single automated pipeline. Most require manual input of competitors —
                Scrutin discovers them automatically.
              </p>
            </div>
          </div>

          {/* Bottom overlay */}
          <div style={{ height: "48px" }} />
          <CardOverlay />
        </div>

        {/* ── Card 2: The Verdict ── */}
        <div
          data-testid="card-verdict"
          className="glass-card"
          style={{
            padding: "32px",
            marginBottom: "56px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Card header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <p style={{ ...eyebrowStyle, marginBottom: "6px" }}>Section 10</p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  fontWeight: "normal",
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                The Verdict
              </h3>
            </div>
            {fullReportBadge}
          </div>

          <hr style={dividerStyle} />

          {/* Score grid */}
          <div className="score-grid">
            {SCORES.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    letterSpacing: "0.4px",
                    margin: 0,
                    marginBottom: "6px",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    color: "var(--text-primary)",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {s.score}
                </p>
              </div>
            ))}
          </div>

          {/* Overall verdict badge */}
          <div
            data-testid="verdict-badge"
            style={{
              background: "rgba(200,98,42,0.12)",
              border: "1px solid rgba(200,98,42,0.3)",
              borderRadius: "12px",
              padding: "20px 28px",
              marginTop: "24px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "var(--accent-orange)",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                margin: 0,
                marginBottom: "8px",
              }}
            >
              Overall Verdict
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "36px",
                color: "var(--text-primary)",
                letterSpacing: "-1px",
                margin: 0,
                lineHeight: 1,
              }}
            >
              STRONG GO
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                marginTop: "8px",
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              Strong timing, clear competitive gap, and validated customer pain.
              The wedge is well-defined.
            </p>
          </div>

          {/* Bottom overlay */}
          <div style={{ height: "40px" }} />
          <CardOverlay />
        </div>

        {/* CTA Row */}
        <div
          data-testid="sample-report-cta"
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "20px",
            }}
          >
            Your full report includes all 10 sections.
          </p>
          <button
            data-testid="sample-report-cta-btn"
            className="btn-primary"
            onClick={handleScrollToForm}
            style={{
              padding: "14px 32px",
              fontSize: "15px",
              justifyContent: "center",
            }}
          >
            Validate My Idea Free →
          </button>
        </div>

      </div>
    </section>
  );
}
