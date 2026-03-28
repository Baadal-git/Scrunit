import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard({ setShowAuthModal }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Navbar setShowAuthModal={setShowAuthModal} />
      <div
        data-testid="dashboard"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            color: "var(--accent-orange)",
            marginBottom: "16px",
          }}
        >
          My Reports
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: "normal",
            color: "var(--text-primary)",
            letterSpacing: "-1.5px",
            margin: 0,
            marginBottom: "16px",
          }}
        >
          Your validation reports.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--text-muted)",
            marginBottom: "48px",
          }}
        >
          Logged in as{" "}
          <span style={{ color: "var(--text-primary)" }}>{user?.email}</span>
        </p>

        <div
          className="glass-card"
          style={{
            padding: "48px 32px",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
            fontSize: "15px",
          }}
        >
          Your submitted reports will appear here. Dashboard coming in the next phase.
        </div>
      </div>
    </div>
  );
}
