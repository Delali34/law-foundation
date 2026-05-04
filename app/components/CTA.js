"use client";

import { useState } from "react";

const tabs = [
  { key: "donate", label: "Donate", body: "Fund a scholarship, support an SME, or sponsor a mentorship cohort. Every contribution moves a student forward.", cta: "Make a donation" },
  { key: "volunteer", label: "Volunteer", body: "Mentor a young person, help run the annual conference, or share your professional skills with a small business owner.", cta: "Apply to volunteer" },
  { key: "apply", label: "Apply", body: "If you are a student, an SME, or a young person looking for guidance — we'd love to hear your story and see how we can help.", cta: "Start an application" },
  { key: "partner", label: "Partner", body: "Schools, businesses and organizations: collaborate with us on the LAW Young Female Conference and beyond.", cta: "Become a partner" },
];

export default function CTA() {
  const [active, setActive] = useState("donate");
  const current = tabs.find(t => t.key === active);

  return (
    <section id="cta" style={{
      padding: "140px 0",
      background: "var(--forest-deep)",
      color: "var(--cream)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute",
        bottom: "-20%",
        left: "-10%",
        width: 700,
        height: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(217,119,66,0.18) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div className="cta-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}>
          <div className="in-view">
            <span className="eyebrow" style={{ color: "var(--terracotta)" }}>
              Get involved
            </span>
            <h2 className="display" style={{
              fontSize: "clamp(48px, 6.4vw, 96px)",
              marginTop: 24,
              marginBottom: 32,
              lineHeight: 1.02,
            }}>
              Join the{" "}
              <span className="serif italic" style={{ color: "var(--terracotta)" }}>
                cycle
              </span>{" "}
              of kindness.
            </h2>
            <p style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(245,241,232,0.78)",
              maxWidth: 480,
            }}>
              Whether you&apos;re funding a future, mentoring a young woman, or
              applying for support yourself — there&apos;s a place for you here.
            </p>
          </div>

          <div className="in-view" style={{
            background: "var(--cream)",
            color: "var(--forest)",
            borderRadius: 8,
            padding: "36px 36px 32px",
            transitionDelay: "120ms",
          }}>
            <div role="tablist" style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 32,
              borderBottom: "1px solid var(--line)",
              paddingBottom: 12,
            }}>
              {tabs.map(t => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={active === t.key}
                  onClick={() => setActive(t.key)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 500,
                    background: active === t.key ? "var(--forest)" : "transparent",
                    color: active === t.key ? "var(--cream)" : "var(--forest)",
                    transition: "all 0.2s",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <p key={current.key} className="reveal" style={{
              fontFamily: "var(--display)",
              fontSize: 24,
              lineHeight: 1.35,
              color: "var(--forest)",
              marginBottom: 32,
              minHeight: 130,
            }}>
              {current.body}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn btn-primary">
                {current.cta}
                <span>→</span>
              </button>
              <a href="mailto:hello@lawfoundation.org" style={{
                fontSize: 14,
                color: "var(--forest)",
                opacity: 0.75,
                textDecoration: "underline",
                textUnderlineOffset: 4,
              }}>
                Or email us directly
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
