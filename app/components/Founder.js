export default function Founder() {
  return (
    <section id="founder" style={{
      padding: "140px 0",
      background: "var(--off-white)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container">
        <div className="in-view" style={{ marginBottom: 80 }}>
          <span className="eyebrow">The Founder</span>
          <h2 className="display" style={{
            fontSize: "clamp(40px, 5.4vw, 76px)",
            color: "var(--ink)",
            marginTop: 24,
          }}>
            Dr. Lawrencia Abena{" "}
            <span className="serif italic" style={{ color: "var(--red)" }}>Wurah</span>
          </h2>
        </div>

        <div className="founder-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 64,
          alignItems: "start",
        }}>
          {/* Intro */}
          <div className="in-view">
            <p style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--ink-muted)",
              marginBottom: 32,
            }}>
              Dr. Lawrencia Abena Wurah is a distinguished Ghanaian banker, development finance
              professional, and strategic leader with extensive experience spanning both commercial
              and development banking.
            </p>
            <p style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--ink-muted)",
            }}>
              She is widely recognized for her ability to connect strategy, capital, and impact
              to drive sustainable economic growth.
            </p>
          </div>

          {/* Details */}
          <div>
            {/* Professional Background */}
            <div className="in-view" style={{
              marginBottom: 48,
              paddingBottom: 48,
              borderBottom: "1px solid var(--line)",
            }}>
              <h3 style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: 20,
                fontWeight: 500,
              }}>
                Professional Background
              </h3>
              <p style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--ink-muted)",
                marginBottom: 20,
              }}>
                Dr. Wurah currently serves as the Head of Strategic Sector Development at Development
                Bank Ghana, where she leads high-impact initiatives aimed at unlocking growth across key
                sectors including ICT, agribusiness, and manufacturing.
              </p>
              <p style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ink)",
                marginBottom: 12,
              }}>
                In this role, she is responsible for:
              </p>
              <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 15,
                color: "var(--ink-muted)",
                lineHeight: 1.55,
              }}>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Identifying and structuring bankable investment opportunities
                </li>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Building strategic partnerships with financial institutions and ecosystem stakeholders
                </li>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Designing financing frameworks that promote inclusive and sustainable economic transformation
                </li>
              </ul>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ink-muted)",
                marginTop: 20,
              }}>
                Prior to joining DBG, she spent over a decade with Société Générale Ghana as a
                Relationship Manager, where she successfully managed retail portfolios and supported
                business growth through tailored financial solutions.
              </p>
            </div>

            {/* Education */}
            <div className="in-view" style={{
              marginBottom: 48,
              paddingBottom: 48,
              borderBottom: "1px solid var(--line)",
            }}>
              <h3 style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: 20,
                fontWeight: 500,
              }}>
                Education & Academic Excellence
              </h3>
              <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 15,
                color: "var(--ink-muted)",
                lineHeight: 1.55,
                marginBottom: 20,
              }}>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Doctorate in Strategic Management and Leadership Practice — OTHM UK
                </li>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  MBA in Marketing
                </li>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  BSc in Marketing
                </li>
              </ul>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ink-muted)",
                marginBottom: 16,
              }}>
                Her doctoral research focused on &ldquo;The Effect of Team Productivity on Organisational
                Performance,&rdquo; offering practical insights into leadership effectiveness and institutional performance.
              </p>
              <p style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ink)",
                marginBottom: 12,
              }}>
                Recognitions:
              </p>
              <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 15,
                color: "var(--ink-muted)",
                lineHeight: 1.55,
                marginBottom: 16,
              }}>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Leadership and Organisational Performance Excellence Award
                </li>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Resilience and Perseverance Award
                </li>
              </ul>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ink-muted)",
              }}>
                She is currently pursuing a PhD in Strategy and Innovation and MSc in Development Finance.
              </p>
            </div>

            {/* Leadership & Impact */}
            <div className="in-view" style={{
              marginBottom: 48,
              paddingBottom: 48,
              borderBottom: "1px solid var(--line)",
            }}>
              <h3 style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: 20,
                fontWeight: 500,
              }}>
                Leadership & Impact
              </h3>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ink-muted)",
                marginBottom: 16,
              }}>
                Dr. Wurah is known for her strong commitment to national development through:
              </p>
              <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 15,
                color: "var(--ink-muted)",
                lineHeight: 1.55,
                marginBottom: 16,
              }}>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Driving strategic sector financing particularly within Ghana&apos;s digital economy
                </li>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Advancing financial inclusion and enterprise development
                </li>
                <li style={{ paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                  Championing youth and women empowerment through mentorship and advocacy
                </li>
              </ul>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ink-muted)",
              }}>
                Her work directly contributes to broader national priorities such as innovation,
                job creation, and sustainable economic growth.
              </p>
            </div>

            {/* Public Engagement & Personal */}
            <div className="in-view founder-bottom" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}>
              <div>
                <h3 style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginBottom: 20,
                  fontWeight: 500,
                }}>
                  Public Engagement
                </h3>
                <ul style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 15,
                  color: "var(--ink-muted)",
                  lineHeight: 1.55,
                }}>
                  <li style={{ paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                    Leadership and governance platforms
                  </li>
                  <li style={{ paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                    Philanthropy and community development initiatives
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginBottom: 20,
                  fontWeight: 500,
                }}>
                  Personal Attributes
                </h3>
                <ul style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 15,
                  color: "var(--ink-muted)",
                  lineHeight: 1.55,
                }}>
                  <li style={{ paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                    Dynamic and results driven
                  </li>
                  <li style={{ paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                    Deeply passionate about national development
                  </li>
                  <li style={{ paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                    Strong advocate for continuous learning
                  </li>
                  <li style={{ paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--red)" }}>•</span>
                    Committed to delivering lasting impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .founder-bottom {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
