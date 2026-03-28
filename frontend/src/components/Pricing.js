import React from "react";

const FREE_FEATURES = [
  "1 validation report",
  "Market sizing + competitor analysis",
  "10-section founder report",
  "Delivered to your inbox in 15 minutes",
  "No credit card required",
];

const PRO_FEATURES = [
  "Unlimited validation reports",
  "Ad intelligence — competitor ad analysis",
  "Reverse-engineered ad angles for your idea",
  "Priority report delivery (under 10 minutes)",
  "Early access to new features",
];

const scrollToForm = () => {
  const form = document.querySelector('[data-testid="hero-form"]');
  if (form) form.scrollIntoView({ behavior: "smooth" });
};

export default function Pricing() {
  return (
    <section
      data-testid="pricing-section"
      id="pricing"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Heading Block */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p
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
            Pricing
          </p>
          <h2
            data-testid="pricing-heading"
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
            Simple, honest pricing.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            Start free. Upgrade when you're ready.
          </p>
        </div>

        {/* Pricing Cards Row */}
        <div className="pricing-row">

          {/* ── Card 1: Free ── */}
          <div
            data-testid="pricing-card-free"
            className="glass-card pricing-card"
            style={{ padding: "36px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "rgba(255,255,255,0.4)",
                margin: 0,
                marginBottom: "12px",
              }}
            >
              Free
            </p>

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "48px",
                color: "var(--text-primary)",
                fontWeight: "normal",
                margin: 0,
                lineHeight: 1,
              }}
            >
              ₹0
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
                marginTop: "6px",
                marginBottom: "28px",
              }}
            >
              to get started
            </p>

            <hr
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                border: "none",
                marginBottom: "24px",
              }}
            />

            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {FREE_FEATURES.map((f) => (
                <li
                  key={f}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 2,
                  }}
                >
                  → {f}
                </li>
              ))}
            </ul>

            <button
              data-testid="pricing-free-cta"
              className="btn-glass"
              onClick={scrollToForm}
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "13px 24px",
                fontSize: "14px",
                marginTop: "32px",
                boxSizing: "border-box",
              }}
            >
              Get My Free Report
            </button>
          </div>

          {/* ── Card 2: Pro ── */}
          <div
            data-testid="pricing-card-pro"
            className="pricing-card"
            style={{
              background: "rgba(200,98,42,0.06)",
              border: "1px solid rgba(200,98,42,0.35)",
              borderRadius: "20px",
              padding: "36px",
              position: "relative",
            }}
          >
            {/* Most Popular badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--accent-orange)",
                color: "#ffffff",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "5px 14px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
              }}
            >
              Most Popular
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "var(--accent-orange)",
                margin: 0,
                marginBottom: "12px",
              }}
            >
              Pro
            </p>

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "48px",
                color: "var(--text-primary)",
                fontWeight: "normal",
                margin: 0,
                lineHeight: 1,
              }}
            >
              ₹999
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
                marginTop: "6px",
                marginBottom: "28px",
              }}
            >
              per month
            </p>

            <hr
              style={{
                height: "1px",
                background: "rgba(200,98,42,0.2)",
                border: "none",
                marginBottom: "24px",
              }}
            />

            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {PRO_FEATURES.map((f) => (
                <li
                  key={f}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 2,
                  }}
                >
                  → {f}
                </li>
              ))}
            </ul>

            <button
              data-testid="pricing-pro-cta"
              className="btn-primary"
              onClick={scrollToForm}
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "13px 24px",
                fontSize: "14px",
                marginTop: "32px",
                boxSizing: "border-box",
              }}
            >
              Start Pro
            </button>
          </div>

        </div>

        {/* Below-cards note */}
        <p
          data-testid="pricing-note"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
            marginTop: "24px",
            marginBottom: 0,
          }}
        >
          All prices in INR. Cancel anytime. Reports are non-refundable once generated.
        </p>

      </div>
    </section>
  );
}
