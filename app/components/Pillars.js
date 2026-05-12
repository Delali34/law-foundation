export default function Pillars() {
  const items = [
    {
      label: "Objective",
      body: "To provide economic opportunities and educational support to needy individuals, enabling them to reach their full potential and contribute positively.",
      glyph: "01",
    },
    {
      label: "Mission",
      body: "Empowering women and young people through education and economic opportunities, fostering a cycle of kindness and support, and creating opportunities for a brighter future.",
      glyph: "02",
    },
    {
      label: "Vision",
      body: "A society where opportunities and education is accessible to all, and individuals can rise above their circumstances to make a meaningful impact.",
      glyph: "03",
    },
  ];

  return (
    <section style={{
      padding: "140px 0 100px",
      background: "var(--white)",
    }}>
      <div className="container">
        <div className="in-view" style={{
          maxWidth: 760,
          marginBottom: 80,
        }}>
          <span className="eyebrow">What guides us</span>
          <h2 className="display" style={{
            fontSize: "clamp(40px, 5.4vw, 76px)",
            color: "var(--ink)",
            marginTop: 24,
          }}>
            Three statements,<br />
            one cycle of{" "}
            <span className="serif italic" style={{ color: "var(--red)" }}>kindness</span>.
          </h2>
        </div>

        <div className="pillars-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
        }}>
          {items.map((item, i) => (
            <article key={item.label} className="in-view" style={{
              transitionDelay: `${i * 80}ms`,
              background: "var(--off-white)",
              borderRadius: 8,
              padding: "40px 32px 36px",
              position: "relative",
              border: "1px solid var(--line)",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 64,
              }}>
                <span style={{
                  fontFamily: "var(--display)",
                  fontSize: 14,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--red)",
                }}>
                  {item.label}
                </span>
                <span className="serif italic" style={{
                  fontSize: 28,
                  color: "var(--ink)",
                  opacity: 0.2,
                }}>
                  {item.glyph}
                </span>
              </div>

              <p style={{
                fontFamily: "var(--display)",
                fontSize: 22,
                lineHeight: 1.35,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                fontWeight: 400,
                marginTop: "auto",
              }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
