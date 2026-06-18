"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import AuthModal from "./AuthModal";

const LINKS = [
  { label: "Découvrir", href: "/#feed" },
  { label: "Charts", href: "/charts" },
  { label: "Upload", href: "/upload" },
  { label: "Contrat", href: "/contrat" },
  { label: "Démo", href: "/demo" },
];

export default function Navbar() {
  const [modal, setModal] = useState<null | "login" | "signup">(null);
  const pathname = usePathname();

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a1a1a",
        height: 64, padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16,
      }}>
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}><Logo /></a>

        {/* Liens centraux */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {LINKS.map(link => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]) && link.href.split("#")[0] !== "/");
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  padding: "6px 16px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#1DB954" : "#888",
                  background: active ? "rgba(29,185,84,0.08)" : "transparent",
                  border: active ? "1px solid rgba(29,185,84,0.2)" : "1px solid transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "#1a1a1a";
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.color = "#888";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Boutons auth */}
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <button onClick={() => setModal("login")} style={{
            background: "transparent", border: "1px solid #2a2a2a",
            color: "#fff", borderRadius: 24, padding: "8px 20px",
            fontSize: 13, fontWeight: 500, cursor: "pointer",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#1DB954")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#2a2a2a")}
          >
            Connexion
          </button>
          <button onClick={() => setModal("signup")} style={{
            background: "#1DB954", border: "none",
            color: "#000", borderRadius: 24, padding: "8px 20px",
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Rejoindre
          </button>
        </div>
      </nav>

      {modal && <AuthModal mode={modal} onClose={() => setModal(null)} onSwitch={m => setModal(m)} />}
    </>
  );
}
