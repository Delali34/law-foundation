export default function Footer() {
  return (
    <footer id="contact" style={{
      background: "var(--ink)",
      color: "var(--white)",
      paddingTop: 64,
      paddingBottom: 32,
    }}>
      <div className="container">
        <div style={{
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          overflow: "hidden",
        }}>
          <div className="display" style={{
            fontSize: "clamp(48px, 10vw, 140px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            color: "var(--white)",
            whiteSpace: "nowrap",
          }}>
            LAW{" "}
            <span className="serif italic" style={{ color: "var(--red)", fontStyle: "italic" }}>
              foundation
            </span>
          </div>
        </div>

        <div className="footer-bottom" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 40,
          marginTop: 48,
        }}>
          <div>
            <p style={{
              fontFamily: "var(--display)",
              fontSize: 18,
              lineHeight: 1.4,
              maxWidth: 320,
              marginBottom: 16,
            }}>
              Empowering through education.
            </p>
            <p style={{
              fontSize: 13,
              opacity: 0.6,
              lineHeight: 1.6,
              maxWidth: 320,
            }}>
              A non-profit foundation working to make economic opportunities
              and education accessible to all.
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--red)",
              marginBottom: 16,
              fontWeight: 500,
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["About", "Objective", "Mission", "Vision", "The Founder"].map(l => (
                <li key={l}>
                  <a href={l === "The Founder" ? "#founder" : "#about"} style={{
                    fontSize: 14,
                    color: "var(--white)",
                    opacity: 0.78,
                    transition: "opacity 0.2s",
                  }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--red)",
              marginBottom: 16,
              fontWeight: 500,
            }}>
              Contact
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["info@thelawfoundationgh.com"].map(l => (
                <li key={l}>
                  <a href="#" style={{
                    fontSize: 14,
                    color: "var(--white)",
                    opacity: 0.78,
                    transition: "opacity 0.2s",
                  }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          marginTop: 56,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 12,
          color: "rgba(255,255,255,0.55)",
        }}>
          <span>© {new Date().getFullYear()} LAW Foundation. Empowering through education.</span>
          <span style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ opacity: 0.7 }}>Privacy</a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .footer-bottom {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .footer-bottom {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
