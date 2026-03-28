import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const MARKETS = ["Global", "United States", "India", "Europe", "Southeast Asia"];

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "8px",
};

export default function HeroSection({ setShowAuthModal }) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    idea: "",
    targetCustomer: "",
    market: "Global",
    email: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'
  const [fieldErrors, setFieldErrors] = useState({ idea: "", email: "" });
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (fieldErrors[field]) setFieldErrors((prev) => ({ ...prev, [field]: "" }));
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gate: must be logged in
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const errors = { idea: "", email: "" };
    if (!form.idea.trim()) errors.idea = "This field is required";
    if (!form.email.trim()) errors.email = "This field is required";
    if (errors.idea || errors.email) { setFieldErrors(errors); return; }

    setStatus("loading");
    setSubmitError("");

    try {
      const res = await fetch(
        "https://hook.eu1.make.com/bwsn9u3ejjcpv34psl0p7h3wtfe2j63t",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idea: form.idea,
            customer: form.targetCustomer || "",
            geography: form.market,
            email: form.email,
            user_id: user ? user.id : null,
          }),
        }
      );
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("idle");
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("idle");
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      data-testid="hero-section"
      style={{
        paddingTop: "72px",
        paddingBottom: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* 1. Tag Pill */}
      <div
        data-testid="hero-tag-pill"
        className="btn-glass"
        style={{
          padding: "8px 18px",
          fontSize: "12px",
          fontFamily: "var(--font-body)",
          color: "var(--text-muted)",
          marginBottom: "32px",
          pointerEvents: "none",
          gap: "6px",
        }}
      >
        <span style={{ color: "var(--accent-orange)", fontSize: "10px" }}>●</span>
        {" "}AI-powered · Multi-agent research · 10 min delivery
      </div>

      {/* 2. H1 Headline */}
      <h1
        data-testid="hero-headline"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 8vw, 88px)",
          lineHeight: 0.95,
          letterSpacing: "-2px",
          fontWeight: "normal",
          margin: 0,
          maxWidth: "820px",
        }}
      >
        <span style={{ color: "var(--text-primary)" }}>Know if your idea is </span>
        <span style={{ color: "var(--accent-orange)" }}>worth building.</span>
      </h1>

      {/* 3. Subtext */}
      <p
        data-testid="hero-subtext"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "17px",
          lineHeight: 1.7,
          color: "var(--text-muted)",
          maxWidth: "560px",
          marginTop: "24px",
          marginBottom: 0,
        }}
      >
        Scrutin scrapes Reddit, Product Hunt, and Google — analyzes competitors,
        sizes your market, identifies risks, and delivers a founder-grade
        validation report in under 15 minutes.{" "}
        <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Free.</span>
      </p>

      {/* 4. Form Card or Confirmation */}
      {status === "success" ? (
        <ConfirmationCard email={form.email} />
      ) : (
        <form
          data-testid="hero-form"
          onSubmit={handleSubmit}
          className="glass-card"
          style={{
            width: "100%",
            maxWidth: "580px",
            marginTop: "48px",
            padding: "32px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Field 1 — Startup Idea */}
          <div>
            <label htmlFor="idea" style={labelStyle}>
              Your Startup Idea
            </label>
            <textarea
              id="idea"
              data-testid="input-idea"
              className="hero-input"
              rows={3}
              placeholder="Describe your idea in 2-3 sentences. What problem does it solve?"
              value={form.idea}
              onChange={handleChange("idea")}
            />
            {fieldErrors.idea && (
              <p data-testid="error-idea" style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#c8622a", margin: 0, marginTop: "6px" }}>
                {fieldErrors.idea}
              </p>
            )}
          </div>

          {/* Field 2 — Target Customer */}
          <div>
            <label htmlFor="targetCustomer" style={labelStyle}>
              Target Customer{" "}
              <span style={{ color: "var(--text-muted)", textTransform: "none", letterSpacing: 0, fontSize: "11px" }}>
                (optional)
              </span>
            </label>
            <input
              id="targetCustomer"
              data-testid="input-target-customer"
              className="hero-input"
              type="text"
              placeholder="E.g. Early-stage SaaS founders, solo consultants..."
              value={form.targetCustomer}
              onChange={handleChange("targetCustomer")}
            />
          </div>

          {/* Field 3 — Market + Email (two columns) */}
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="market" style={labelStyle}>
                Market
              </label>
              <select
                id="market"
                data-testid="input-market"
                className="hero-input hero-select"
                value={form.market}
                onChange={handleChange("market")}
              >
                {MARKETS.map((m) => (
                  <option key={m} value={m} style={{ background: "#1e1810", color: "#fff" }}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="email" style={labelStyle}>
                Your Email
              </label>
              <input
                id="email"
                data-testid="input-email"
                className="hero-input"
                type="email"
                placeholder="founder@gmail.com"
                value={form.email}
                onChange={handleChange("email")}
              />
              {fieldErrors.email && (
                <p data-testid="error-email" style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#c8622a", margin: 0, marginTop: "6px" }}>
                  {fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            data-testid="submit-btn"
            className="btn-primary"
            disabled={status === "loading"}
            style={{
              width: "100%",
              padding: "14px 24px",
              fontSize: "15px",
              justifyContent: "center",
              marginTop: "16px",
              opacity: status === "loading" ? 0.6 : 1,
              cursor: status === "loading" ? "not-allowed" : "pointer",
            }}
          >
            {status === "loading" ? "Launching agents..." : "Validate My Idea →"}
          </button>

          {/* Submit error */}
          {submitError && (
            <p data-testid="submit-error" style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#c8622a", margin: 0, textAlign: "center" }}>
              {submitError}
            </p>
          )}

          {/* Below-button note */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Report delivered to your inbox in ~15 minutes
          </p>
        </form>
      )}
    </section>
  );
}

function ConfirmationCard({ email }) {
  return (
    <div
      data-testid="confirmation-card"
      className="glass-card"
      style={{
        width: "100%",
        maxWidth: "580px",
        marginTop: "48px",
        padding: "48px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
    >
      <span style={{ fontSize: "40px", lineHeight: 1 }}>⚡</span>
      <h2
        data-testid="confirmation-heading"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "28px",
          fontWeight: 700,
          color: "var(--text-primary)",
          margin: 0,
          letterSpacing: "-0.5px",
        }}
      >
        Agents deployed.
      </h2>
      <p
        data-testid="confirmation-body"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          lineHeight: 1.7,
          color: "var(--text-muted)",
          margin: 0,
          maxWidth: "400px",
        }}
      >
        We're scraping Reddit, Product Hunt, and Google. Your report is being generated and will land in{" "}
        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{email}</span>{" "}
        within 15 minutes.
      </p>
    </div>
  );
}
