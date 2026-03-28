import React, { useState } from "react";
import { supabase } from "../lib/supabase";

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: "14px",
  padding: "12px 16px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "8px",
};

export default function AuthModal({ onClose }) {
  const [mode, setMode] = useState("login");
  const [fields, setFields] = useState({ email: "", password: "", confirmPassword: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'email_sent'
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setFields((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!fields.email.trim() || !fields.password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (mode === "signup" && fields.password !== fields.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (mode === "signup" && fields.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setStatus("loading");

    if (mode === "login") {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: fields.email.trim(),
        password: fields.password,
      });
      if (authError) {
        setStatus("idle");
        setError(authError.message);
      } else {
        onClose();
      }
    } else {
      const { error: authError } = await supabase.auth.signUp({
        email: fields.email.trim(),
        password: fields.password,
      });
      if (authError) {
        setStatus("idle");
        setError(authError.message);
      } else {
        setStatus("email_sent");
      }
    }
  };

  const switchMode = () => {
    setMode((m) => (m === "login" ? "signup" : "login"));
    setError("");
    setStatus("idle");
    setFields({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <div
      data-testid="auth-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        data-testid="auth-modal"
        className="glass-card"
        style={{ width: "100%", maxWidth: "420px", padding: "40px" }}
      >
        {status === "email_sent" ? (
          /* ── Email confirmation sent ── */
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "40px", lineHeight: 1 }}>📬</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "26px",
                fontWeight: "normal",
                color: "var(--text-primary)",
                margin: "16px 0 12px",
                letterSpacing: "-0.5px",
              }}
            >
              Check your inbox.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              We sent a confirmation link to{" "}
              <span style={{ color: "var(--text-primary)" }}>{fields.email}</span>.
              Click it to activate your account, then log in.
            </p>
            <button
              onClick={switchMode}
              style={{
                marginTop: "24px",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--accent-orange)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Back to Log In
            </button>
          </div>
        ) : (
          <>
            {/* ── Heading ── */}
            <h2
              data-testid="auth-modal-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: "normal",
                color: "var(--text-primary)",
                margin: 0,
                marginBottom: "28px",
                letterSpacing: "-0.5px",
              }}
            >
              {mode === "login" ? "Welcome back." : "Create your account."}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  data-testid="auth-email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange("email")}
                  placeholder="founder@gmail.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.28)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              {/* Password */}
              <div>
                <label style={labelStyle}>Password</label>
                <input
                  data-testid="auth-password"
                  type="password"
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  value={fields.password}
                  onChange={handleChange("password")}
                  placeholder="••••••••"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.28)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              {/* Confirm Password (signup only) */}
              {mode === "signup" && (
                <div>
                  <label style={labelStyle}>Confirm Password</label>
                  <input
                    data-testid="auth-confirm-password"
                    type="password"
                    autoComplete="new-password"
                    value={fields.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    placeholder="••••••••"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.28)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
              )}

              {/* Error */}
              {error && (
                <p
                  data-testid="auth-error"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "#c8622a",
                    margin: 0,
                  }}
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                data-testid="auth-submit"
                type="submit"
                className="btn-primary"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "13px 24px",
                  fontSize: "14px",
                  justifyContent: "center",
                  marginTop: "4px",
                  opacity: status === "loading" ? 0.6 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading"
                  ? "Please wait..."
                  : mode === "login"
                  ? "Log In"
                  : "Create Account"}
              </button>
            </form>

            {/* Toggle mode */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-muted)",
                textAlign: "center",
                marginTop: "20px",
                marginBottom: 0,
              }}
            >
              {mode === "login" ? "Don't have an account? " : "Already have an account? "}
              <button
                data-testid="auth-mode-toggle"
                onClick={switchMode}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--accent-orange)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textDecoration: "underline",
                }}
              >
                {mode === "login" ? "Sign up" : "Log in"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
