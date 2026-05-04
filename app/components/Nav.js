"use client";

import { useState, useEffect } from "react";

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 10 L10 22 L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="22" cy="11" r="2.5" fill="var(--terracotta)" />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#belief" },
    { label: "Programs", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Get involved", href: "#cta" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: scrolled ? "14px 0" : "24px 0",
      background: scrolled ? "rgba(245, 241, 232, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}>
        <a href="#top" style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontFamily: "var(--display)",
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "var(--forest)",
        }}>
          <Logo />
          <span>LAW Foundation</span>
        </a>

        <div className="nav-links" style={{
          display: "flex",
          alignItems: "center",
          gap: 36,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--forest)",
              opacity: 0.8,
              transition: "opacity 0.2s",
            }}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#cta" className="btn btn-dark" style={{ padding: "10px 20px", fontSize: 14 }}>
          Donate
          <span style={{ fontSize: 12 }}>→</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
