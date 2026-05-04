export default function Hero() {
  return (
    <section id="top" style={{
      position: "relative",
      minHeight: "100vh",
      paddingTop: 140,
      paddingBottom: 80,
      background: "var(--cream)",
      overflow: "hidden",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute",
        top: "8%",
        right: "-8%",
        width: 620,
        height: 620,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(217,119,66,0.18) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div className="reveal" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 80,
          flexWrap: "wrap",
          gap: 20,
        }}>
          <span className="eyebrow">A Non-Profit Foundation</span>
          <span style={{
            fontSize: 13,
            color: "var(--ink-muted)",
            fontVariantNumeric: "tabular-nums",
          }}>
            Est. for impact &nbsp;·&nbsp; Education × Economic Empowerment
          </span>
        </div>

        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 60,
          alignItems: "end",
        }}>
          <div className="reveal" style={{ animationDelay: "0.1s" }}>
            <h1 className="display" style={{
              fontSize: "clamp(42px, 6vw, 96px)",
              color: "var(--forest)",
              marginBottom: 32,
            }}>
              Empowering<br />
              through{" "}
              <span className="serif italic" style={{ color: "var(--terracotta)" }}>
                education
              </span>
              <span style={{ color: "var(--terracotta)" }}>.</span>
            </h1>

            <p style={{
              maxWidth: 560,
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--ink-muted)",
              marginBottom: 40,
            }}>
              Economic empowerment and education can change lives. We&apos;re driven by passion
              and a desire to make a difference. Someone helped us — now we&apos;re helping others.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#cta" className="btn btn-primary">
                Donate to a student
                <span>→</span>
              </a>
              <a href="#programs" className="btn btn-ghost">
                Explore our programs
              </a>
            </div>
          </div>

          <div className="hero-right reveal" style={{ animationDelay: "0.25s" }}>
            <div style={{
              aspectRatio: "4/5",
              borderRadius: 6,
              marginBottom: 16,
              overflow: "hidden",
              position: "relative",
            }}>
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1"
                alt="Young student beneficiary smiling"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="photo-tag">Photo · Beneficiary spotlight</div>
            </div>
            <p style={{
              fontSize: 13,
              lineHeight: 1.5,
              color: "var(--ink-muted)",
              fontStyle: "italic",
              maxWidth: 320,
            }}>
              &ldquo;A society where opportunities and education is accessible to all.&rdquo;
              <span style={{ display: "block", marginTop: 6, fontStyle: "normal", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--forest)" }}>
                — Our Vision
              </span>
            </p>
          </div>
        </div>

        <div style={{
          marginTop: 80,
          paddingTop: 28,
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          color: "var(--ink-muted)",
          gap: 20,
          flexWrap: "wrap",
        }}>
          <span>↓ &nbsp; Scroll to learn what drives us</span>
          <span style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--forest)", fontStyle: "italic" }}>
            Four programs · One mission
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-right { max-width: 360px; }
        }
      `}</style>
    </section>
  );
}
