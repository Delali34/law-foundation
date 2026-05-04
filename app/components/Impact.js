export default function Impact() {
  const stats = [
    { num: "04", label: "Programs running", sub: "Scholarship · LES · Mentorship · Conference" },
    { num: "16+", label: "Conference age", sub: "Young women welcomed" },
    { num: "100%", label: "Mission-driven", sub: "No barrier to potential" },
    { num: "∞", label: "Cycle of kindness", sub: "Pay-it-forward model" },
  ];

  return (
    <section id="impact" style={{
      background: "var(--cream)",
      padding: "140px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container">
        <div className="in-view" style={{ maxWidth: 1080, marginBottom: 100 }}>
          <span style={{
            fontFamily: "var(--display)",
            fontSize: 120,
            color: "var(--terracotta)",
            lineHeight: 0.5,
            display: "inline-block",
            marginBottom: 12,
          }}>
            &ldquo;
          </span>
          <p className="display" style={{
            fontSize: "clamp(34px, 4.4vw, 64px)",
            color: "var(--forest)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}>
            Someone helped us, and now we&apos;re{" "}
            <span className="serif italic" style={{ color: "var(--terracotta)" }}>
              helping others
            </span>.
          </p>
          <p style={{
            marginTop: 24,
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
          }}>
            — The LAW Foundation Promise
          </p>
        </div>

        <div className="in-view stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "40px 28px",
              borderRight: i < 3 ? "1px solid var(--line)" : "none",
            }}>
              <div className="display" style={{
                fontSize: 64,
                color: "var(--forest)",
                marginBottom: 8,
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--forest)",
                marginBottom: 4,
              }}>
                {s.label}
              </div>
              <div style={{
                fontSize: 12,
                color: "var(--ink-muted)",
                lineHeight: 1.4,
              }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) { border-bottom: 1px solid var(--line); }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
          .stats-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
