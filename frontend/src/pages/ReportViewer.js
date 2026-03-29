import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { supabase } from "../lib/supabase";

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const mdComponents = {
  h1: ({ children }) => (
    <h1 style={{ fontFamily: "var(--font-display)", color: "#fff", fontWeight: "normal", fontSize: "clamp(26px, 4vw, 38px)", letterSpacing: "-1px", margin: "40px 0 16px", lineHeight: 1.1 }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ fontFamily: "var(--font-display)", color: "#fff", fontWeight: "normal", fontSize: "clamp(22px, 3vw, 30px)", letterSpacing: "-0.5px", margin: "40px 0 14px", lineHeight: 1.1 }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--accent-orange)", textTransform: "uppercase", letterSpacing: "0.8px", margin: "32px 0 12px", fontWeight: 600 }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", marginTop: 0 }}>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul style={{ fontFamily: "var(--font-body)", fontSize: "15px", paddingLeft: "20px", margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol style={{ fontFamily: "var(--font-body)", fontSize: "15px", paddingLeft: "20px", margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong style={{ color: "#ffffff", fontWeight: 600 }}>{children}</strong>
  ),
  hr: () => (
    <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "32px 0" }} />
  ),
};

function LoadingSkeleton() {
  return (
    <div style={{ minHeight: "100vh", background: "#120f0a" }}>
      <div style={{ padding: "14px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(18,15,10,0.9)" }} />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px", display: "flex", flexDirection: "column", gap: "18px" }}>
        {[90, 55, 70, 40, 80, 50, 65].map((w, i) => (
          <div
            key={i}
            style={{
              height: i === 0 ? "36px" : i === 1 ? "22px" : "15px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "4px",
              width: `${w}%`,
              animation: `skeleton-pulse 1.5s ease-in-out ${i * 0.1}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#120f0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--text-primary)", fontWeight: "normal", margin: 0, marginBottom: "14px", letterSpacing: "-1px" }}>
        Report not found.
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", marginBottom: "28px" }}>
        This report may have been deleted or you don't have access.
      </p>
      <Link
        to="/dashboard"
        style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--accent-orange)", textDecoration: "none" }}
      >
        ← Back to My Reports
      </Link>
    </div>
  );
}

export default function ReportViewer() {
  const { id } = useParams();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    supabase
      .from("reports")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error }) => {
        if (error || !data) setNotFound(true);
        else setReport(data);
        setLoading(false);
      });
  }, [id]);

  const handleShare = async () => {
    try {
      await supabase.from("reports").update({ is_public: true }).eq("id", id);
      await navigator.clipboard.writeText(window.location.href);
    } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return <LoadingSkeleton />;
  if (notFound) return <NotFound />;

  return (
    <div data-testid="report-viewer" style={{ minHeight: "100vh", background: "#120f0a" }}>

      {/* Sticky top bar */}
      <div
        className="top-bar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(18,15,10,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/dashboard"
          data-testid="back-to-dashboard"
          style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          ← My Reports
        </Link>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            data-testid="share-btn"
            className="share-btn btn-glass"
            onClick={handleShare}
            style={{ padding: "8px 18px", fontSize: "13px", minWidth: "96px" }}
          >
            {copied ? "Link copied!" : "Share"}
          </button>
          <button
            data-testid="export-btn"
            className="export-btn btn-glass"
            onClick={() => window.print()}
            style={{ padding: "8px 18px", fontSize: "13px" }}
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Report content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px 100px" }}>

        {/* Report header */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--accent-orange)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
          Validation Report
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "normal", color: "var(--text-primary)", letterSpacing: "-1.5px", margin: "0 0 20px", lineHeight: 1.1 }}>
          {report.idea}
        </h1>

        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
          {report.geography && (
            <span style={{ background: "rgba(200,98,42,0.1)", border: "1px solid rgba(200,98,42,0.3)", borderRadius: "100px", padding: "4px 14px", fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--accent-orange)" }}>
              {report.geography}
            </span>
          )}
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            {formatDate(report.created_at)}
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.2)" }}>
            Generated by Scrutin
          </span>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "48px" }} />

        {/* Markdown content */}
        <div data-testid="report-content">
          <ReactMarkdown components={mdComponents}>
            {(() => {
  try {
    const parsed = JSON.parse(report.report_content);
    return parsed.text || report.report_content;
  } catch {
    return report.report_content;
  }
})()}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
