"use client";

import { useState } from "react";

const programs = [
  {
    num: "01",
    tag: "Scholarship",
    title: "LAW Scholarship Fund",
    body: "To support needy students with school supplies and financial aid to help them chase their dreams.",
    audience: "For students in primary, secondary & tertiary education",
    accent: "var(--terracotta)",
  },
  {
    num: "02",
    tag: "Empowerment",
    title: "LAW Empowerment Support",
    sub: "(LES)",
    body: "Empowering SMEs through financial support to boost their businesses and drive growth.",
    audience: "For small business owners & entrepreneurs",
    accent: "var(--forest)",
  },
  {
    num: "03",
    tag: "Mentorship",
    title: "LAW Mentorship",
    body: "To provide guidance and mentorship for young people to help them stay focused and motivated.",
    audience: "For young people seeking direction",
    accent: "var(--terracotta)",
  },
  {
    num: "04",
    tag: "Conference",
    title: "LAW Young Female Conference",
    body: "Flagship female conference for young people from 16 years and above.",
    audience: "For young women, 16+",
    accent: "var(--forest)",
    isFlagship: true,
  },
];

function ProgramCard({ program, index }) {
  const [hover, setHover] = useState(false);
  const dark = program.accent === "var(--forest)";

  return (
    <article
      className="in-view"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transitionDelay: `${index * 60}ms`,
        background: dark ? "var(--forest)" : "var(--cream)",
        color: dark ? "var(--cream)" : "var(--forest)",
        borderRadius: 8,
        padding: "40px 36px",
        minHeight: 380,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(.2,.7,.2,1), box-shadow 0.4s ease, opacity 0.9s, transform 0.9s",
        boxShadow: hover ? "0 24px 48px -12px rgba(11,61,46,0.18)" : "0 0 0 rgba(0,0,0,0)",
      }}
    >
      {program.isFlagship && (
        <div style={{
          position: "absolute",
          top: 24,
          right: 24,
          background: "var(--terracotta)",
          color: "var(--cream)",
          padding: "4px 10px",
          borderRadius: 999,
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}>
          Flagship
        </div>
      )}

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 48,
      }}>
        <span className="serif italic" style={{
          fontSize: 56,
          fontWeight: 400,
          color: program.accent,
          opacity: dark ? 0.95 : 0.85,
          lineHeight: 1,
        }}>
          {program.num}
        </span>
        <span style={{
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: dark ? "rgba(245,241,232,0.7)" : "var(--terracotta)",
          fontWeight: 500,
        }}>
          {program.tag}
        </span>
      </div>

      <h3 className="display" style={{
        fontSize: 36,
        lineHeight: 1.05,
        marginBottom: 16,
        color: dark ? "var(--cream)" : "var(--forest)",
      }}>
        {program.title}
        {program.sub && (
          <span className="serif italic" style={{
            display: "block",
            fontSize: 22,
            opacity: 0.6,
            marginTop: 4,
          }}>
            {program.sub}
          </span>
        )}
      </h3>

      <p style={{
        fontSize: 16,
        lineHeight: 1.55,
        color: dark ? "rgba(245,241,232,0.78)" : "var(--ink-muted)",
        marginBottom: 24,
        maxWidth: 440,
      }}>
        {program.body}
      </p>

      <div style={{
        marginTop: "auto",
        paddingTop: 24,
        borderTop: dark ? "1px solid rgba(245,241,232,0.18)" : "1px solid var(--line)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}>
        <span style={{
          fontSize: 13,
          color: dark ? "rgba(245,241,232,0.65)" : "var(--ink-muted)",
        }}>
          {program.audience}
        </span>
        <a href="#cta" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          fontWeight: 500,
          color: dark ? "var(--cream)" : "var(--forest)",
          letterSpacing: "-0.01em",
          opacity: hover ? 1 : 0.85,
          transition: "opacity 0.2s, transform 0.3s",
          transform: hover ? "translateX(2px)" : "translateX(0)",
        }}>
          Apply or refer
          <span style={{
            display: "inline-flex",
            width: 26, height: 26,
            borderRadius: 999,
            background: program.accent,
            color: "var(--cream)",
            alignItems: "center", justifyContent: "center",
            fontSize: 12,
          }}>→</span>
        </a>
      </div>
    </article>
  );
}

export default function Programs() {
  return (
    <section id="programs" style={{
      padding: "120px 0 140px",
      background: "var(--bone)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container">
        <div className="programs-header in-view" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "end",
          marginBottom: 80,
        }}>
          <div>
            <span className="eyebrow">Our Programs</span>
            <h2 className="display" style={{
              fontSize: "clamp(44px, 6vw, 92px)",
              color: "var(--forest)",
              marginTop: 24,
            }}>
              Four ways we{" "}
              <span className="serif italic" style={{ color: "var(--terracotta)" }}>show up</span>.
            </h2>
          </div>
          <div style={{ paddingBottom: 12 }}>
            <p style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--ink-muted)",
              maxWidth: 460,
            }}>
              Each program targets a different chapter of someone&apos;s journey —
              from the schoolbook a child needs today to the conference that
              will shape a young woman&apos;s tomorrow.
            </p>
          </div>
        </div>

        <div className="programs-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
        }}>
          {programs.map((p, i) => (
            <ProgramCard key={p.num} program={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .programs-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .programs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
