import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

function SkeletonCard() {
  return (
    <div className="glass-card" style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", gap: "16px" }}>
        <div style={{ height: "18px", flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "4px", animation: "skeleton-pulse 1.5s ease-in-out infinite" }} />
        <div style={{ height: "18px", width: "80px", flexShrink: 0, background: "rgba(255,255,255,0.04)", borderRadius: "4px", animation: "skeleton-pulse 1.5s ease-in-out infinite 0.2s" }} />
      </div>
      <div style={{ height: "14px", width: "100px", background: "rgba(255,255,255,0.04)", borderRadius: "100px", animation: "skeleton-pulse 1.5s ease-in-out infinite 0.4s" }} />
    </div>
  );
}

export default function Dashboard({ setShowAuthModal }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("reports")
      .select("id, idea, geography, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setReports(data || []);
        setLoading(false);
      });
  }, [user]);

  const handleValidateClick = () => {
    navigate("/");
    setTimeout(() => {
      const form = document.querySelector('[data-testid="hero-form"]');
      if (form) form.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Navbar setShowAuthModal={setShowAuthModal} />

      <div
        data-testid="dashboard"
        style={{ maxWidth: "720px", margin: "0 auto", padding: "64px 24px" }}
      >
        {/* Heading */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          color: "var(--accent-orange)",
          marginBottom: "12px",
        }}>
          My Reports
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: "normal",
          color: "var(--text-primary)",
          letterSpacing: "-1.5px",
          margin: 0,
          marginBottom: "8px",
        }}>
          Your validation reports.
        </h1>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "var(--text-muted)",
          marginBottom: "48px",
        }}>
          Logged in as{" "}
          <span style={{ color: "var(--text-primary)" }}>{user?.email}</span>
        </p>

        {/* States */}
        {loading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[0, 1, 2].map((i) => <SkeletonCard key={i} />)}
          </div>
        ) : reports.length === 0 ? (
          /* Empty state */
          <div style={{ textAlign: "center", padding: "72px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>📋</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: "normal",
              color: "var(--text-primary)",
              margin: 0,
              marginBottom: "10px",
              letterSpacing: "-0.5px",
            }}>
              No reports yet.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-muted)",
              marginBottom: "28px",
            }}>
              Submit your first idea to get started.
            </p>
            <button
              data-testid="dashboard-validate-btn"
              className="btn-primary"
              onClick={handleValidateClick}
              style={{ padding: "12px 28px", fontSize: "14px" }}
            >
              Validate an Idea →
            </button>
          </div>
        ) : (
          /* Report cards */
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {reports.map((report) => (
              <div
                key={report.id}
                data-testid={`report-card-${report.id}`}
                onClick={() => navigate(`/report/${report.id}`)}
                className="glass-card"
                style={{ padding: "24px", cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {/* Top row: idea + date */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "14px" }}>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#ffffff",
                    margin: 0,
                    flex: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {report.idea}
                  </p>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}>
                    {formatDate(report.created_at)}
                  </span>
                </div>

                {/* Bottom row: geography pill + link */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    background: "rgba(200,98,42,0.1)",
                    border: "1px solid rgba(200,98,42,0.3)",
                    borderRadius: "100px",
                    padding: "3px 12px",
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "var(--accent-orange)",
                  }}>
                    {report.geography || "Global"}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--accent-orange)",
                  }}>
                    View Report →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
