import React from "react";

const STEPS = [
  {
    number: "01",
    icon: "💡",
    title: "Describe Your Idea",
    body: "Just tell us what you want to build and who it's for. That's all we need.",
  },
  {
    number: "02",
    icon: "🔍",
    title: "Agents Research Everything",
    body: "We simultaneously scrape Reddit, Product Hunt, Google, and many more sources — finding real customer pain points, competitors, market size, and what's already been tried.",
  },
  {
    number: "03",
    icon: "📋",
    title: "Get Your Full Report",
    body: "A founder-grade validation report with 10 sections hits your inbox in under 15 minutes. Market sizing, risks, forecasts, competitor gaps — everything.",
  },
];

const SOURCES = ["Reddit", "Product Hunt", "Google", "G2", "Trustpilot", "+ many more"];

export default function HowItWorks() {
  return (
    <section
      data-testid="how-it-works-section"
      id="how-it-works"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {/* Heading Block */}
        <div style={{ textAlign: "center" }}>
          <p
            data-testid="how-eyebrow"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              color: "var(--accent-orange)",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            The Process
          </p>

          <h2
            data-testid="how-heading"
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
            From idea to insight in minutes.
          </h2>

          <p
            data-testid="how-subtext"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--text-muted)",
              maxWidth: "480px",
              margin: "0 auto",
              marginBottom: "72px",
              lineHeight: 1.6,
            }}
          >
            No forms to fill about competitors. No manual research. Just your idea.
          </p>
        </div>

        {/* Steps Row */}
        <div data-testid="steps-row" className="steps-row">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className="glass-card step-card" style={{ padding: "32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "var(--accent-orange)",
                    letterSpacing: "1px",
                    margin: 0,
                    marginBottom: "16px",
                  }}
                >
                  {step.number}
                </p>
                <div style={{ fontSize: "28px", marginBottom: "12px", lineHeight: 1 }}>
                  {step.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: "normal",
                    color: "var(--text-primary)",
                    margin: 0,
                    marginBottom: "10px",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </div>

              {/* Connector between cards */}
              {i < STEPS.length - 1 && (
                <div className="step-connector" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Sources Callout */}
        <div
          data-testid="sources-callout"
          style={{
            marginTop: "56px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--text-muted)",
            }}
          >
            Sources we scrape:
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {SOURCES.map((source) => (
              <span
                key={source}
                data-testid={`source-pill-${source.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "100px",
                  padding: "6px 14px",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {source}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
