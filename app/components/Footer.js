function FooterCol({ title, links }) {
  return (
    <div>
      <h4 style={{
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--terracotta)",
        marginBottom: 16,
        fontWeight: 500,
      }}>
        {title}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(l => (
          <li key={l}>
            <a href="#" style={{
              fontSize: 14,
              color: "var(--cream)",
              opacity: 0.78,
              transition: "opacity 0.2s",
            }}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{
      background: "var(--forest-deep)",
      color: "var(--cream)",
      paddingTop: 64,
      paddingBottom: 32,
      borderTop: "1px solid rgba(245,241,232,0.08)",
    }}>
      <div className="container">
        <div style={{
          paddingBottom: 48,
          borderBottom: "1px solid rgba(245,241,232,0.12)",
          overflow: "hidden",
        }}>
          <div className="display" style={{
            fontSize: "clamp(48px, 10vw, 140px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            color: "var(--cream)",
            whiteSpace: "nowrap",
          }}>
            LAW{" "}
            <span className="serif italic" style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
              foundation
            </span>
          </div>
        </div>

        <div className="footer-bottom" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
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

          <FooterCol title="Programs" links={[
            "Scholarship Fund", "Empowerment (LES)", "Mentorship", "Young Female Conference",
          ]} />
          <FooterCol title="Get Involved" links={[
            "Donate", "Volunteer", "Apply", "Partner with us",
          ]} />
          <FooterCol title="Contact" links={[
            "hello@lawfoundation.org", "Press inquiries", "Newsletter", "Annual report",
          ]} />
        </div>

        <div style={{
          marginTop: 56,
          paddingTop: 24,
          borderTop: "1px solid rgba(245,241,232,0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 12,
          color: "rgba(245,241,232,0.55)",
        }}>
          <span>© {new Date().getFullYear()} LAW Foundation. Empowering through education.</span>
          <span style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ opacity: 0.7 }}>Privacy</a>
            <a href="#" style={{ opacity: 0.7 }}>Terms</a>
            <a href="#" style={{ opacity: 0.7 }}>Instagram</a>
            <a href="#" style={{ opacity: 0.7 }}>LinkedIn</a>
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
