import React from "react";
import { Link } from "react-router-dom";

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
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "22px",
          color: "rgba(255,255,255,0.35)",
          textDecoration: "none",
          letterSpacing: "-0.5px",
          marginBottom: "56px",
        }}
      >
        Scrutin<sup style={{ fontSize: "11px", verticalAlign: "super", lineHeight: 0 }}>®</sup>
      </Link>

      {/* Checkmark */}
      <div
        data-testid="confirm-checkmark"
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
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
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
