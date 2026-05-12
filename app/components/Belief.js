export default function Belief() {
  return (
    <section id="about" className="in-view" style={{
      padding: "140px 0",
      background: "var(--ink)",
      color: "var(--white)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at top right, rgba(196,30,42,0.15), transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div className="belief-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 80,
          alignItems: "start",
        }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--red)" }}>
              About Us
            </span>
            <p style={{
              marginTop: 32,
              fontSize: 14,
              letterSpacing: "0.04em",
              opacity: 0.7,
              lineHeight: 1.7,
            }}>
              At LAW FOUNDATION, we&apos;re driven by a simple yet powerful belief.
              These four words guide everything we do — from the scholarships we
              award to the women we mentor.
            </p>
          </div>

          <div>
            <h2 className="display" style={{
              fontSize: "clamp(40px, 5.6vw, 84px)",
              lineHeight: 1.04,
              marginBottom: 0,
            }}>
              <span style={{ color: "var(--white)" }}>Economic</span><br />
              <span style={{ color: "var(--white)" }}>empowerment</span><br />
              <span style={{ color: "var(--white)", opacity: 0.4 }}>and</span>{" "}
              <span className="serif italic" style={{ color: "var(--red)" }}>education</span>{" "}
              <span style={{ color: "var(--white)" }}>can</span><br />
              <span style={{ color: "var(--white)" }}>change</span>{" "}
              <span className="serif italic" style={{ color: "var(--white)" }}>lives</span>
              <span style={{ color: "var(--red)" }}>.</span>
            </h2>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .belief-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
