import React from "react";
import { Link } from "react-router-dom";

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.6); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes drawCheck {
    from { stroke-dashoffset: 50; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes ringPulse {
    0%   { box-shadow: 0 0 0 0px rgba(200,98,42,0.35); }
    60%  { box-shadow: 0 0 0 14px rgba(200,98,42,0); }
    100% { box-shadow: 0 0 0 0px rgba(200,98,42,0); }
  }
  .confirm-logo {
    animation: fadeUp 0.6s ease both;
    animation-delay: 0s;
  }
  .confirm-ring {
    animation: scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both,
               ringPulse 1.2s ease 0.6s both;
    animation-delay: 0.2s, 0.6s;
  }
  .confirm-heading {
    animation: fadeUp 0.6s ease both;
    animation-delay: 0.55s;
  }
  .confirm-subtext {
    animation: fadeUp 0.6s ease both;
    animation-delay: 0.75s;
  }
  .confirm-check-path {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: drawCheck 0.45s ease forwards;
    animation-delay: 0.45s;
  }
`;

export default function ConfirmPage() {
  return (
    <div
      data-testid="confirm-page"
      style={{
        minHeight: "100vh",
        backgroundColor: "#120f0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <style>{styles}</style>

      {/* Logo */}
      <Link
        to="/"
        className="confirm-logo"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "24px",
          color: "rgba(255,255,255,0.85)",
          textDecoration: "none",
          letterSpacing: "-0.5px",
          marginBottom: "56px",
          display: "inline-block",
        }}
      >
        Scrutin<sup style={{ fontSize: "11px", verticalAlign: "super", lineHeight: 0 }}>®</sup>
      </Link>

      {/* Checkmark ring */}
      <div
        data-testid="confirm-checkmark"
        className="confirm-ring"
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          border: "2px solid rgba(200,98,42,0.5)",
          background: "rgba(200,98,42,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            className="confirm-check-path"
            d="M6 16L13 23L26 9"
            stroke="#c8622a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1
        data-testid="confirm-heading"
        className="confirm-heading"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "42px",
          fontWeight: "normal",
          color: "var(--text-primary)",
          letterSpacing: "-1.5px",
          margin: 0,
          marginBottom: "16px",
          lineHeight: 1.05,
        }}
      >
        Email confirmed.
      </h1>

      {/* Subtext */}
      <p
        data-testid="confirm-subtext"
        className="confirm-subtext"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "var(--text-muted)",
          lineHeight: 1.7,
          maxWidth: "380px",
          margin: 0,
        }}
      >
        You're all set. You can close this tab and continue on the original window.
      </p>
    </div>
  );
}
