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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.95)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a1a1a",
      }}>
        {/* Barre principale */}
        <div style={{
          height: 64, padding: "0 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 12,
        }}>
          <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}><Logo /></a>

          {/* Liens desktop */}
          <div className="nav-desktop" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {LINKS.map(link => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]) && link.href.split("#")[0] !== "/");
              return (
                <a key={link.href} href={link.href} style={{
                  textDecoration: "none", padding: "6px 14px", borderRadius: 20, fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#1DB954" : "#888",
                  background: active ? "rgba(29,185,84,0.08)" : "transparent",
                  border: active ? "1px solid rgba(29,185,84,0.2)" : "1px solid transparent",
                  transition: "all 0.2s",
                }}>
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Boutons auth desktop */}
          <div className="nav-desktop" style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            <button onClick={() => setModal("login")} style={{
              background: "transparent", border: "1px solid #2a2a2a",
              color: "#fff", borderRadius: 24, padding: "8px 18px",
              fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}>Connexion</button>
            <button onClick={() => setModal("signup")} style={{
              background: "#1DB954", border: "none",
              color: "#000", borderRadius: 24, padding: "8px 18px",
              fontSize: 13, fontWeight: 700, cursor: "pointer",
            }}>Rejoindre</button>
          </div>

          {/* Hamburger mobile */}
          <button
            className="nav-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent", border: "1px solid #2a2a2a",
              color: "#fff", borderRadius: 8, padding: "8px 12px",
              fontSize: 18, cursor: "pointer", lineHeight: 1,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="nav-mobile" style={{
            borderTop: "1px solid #1a1a1a",
            padding: "12px 20px 20px",
            display: "flex", flexDirection: "column", gap: 4,
          }}>
            {LINKS.map(link => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]) && link.href.split("#")[0] !== "/");
              return (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                  textDecoration: "none", padding: "12px 16px", borderRadius: 10, fontSize: 15,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#1DB954" : "#ccc",
                  background: active ? "rgba(29,185,84,0.08)" : "transparent",
                }}>
                  {link.label}
                </a>
              );
            })}
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button onClick={() => { setModal("login"); setMenuOpen(false); }} style={{
                flex: 1, background: "transparent", border: "1px solid #2a2a2a",
                color: "#fff", borderRadius: 24, padding: "10px",
                fontSize: 14, fontWeight: 500, cursor: "pointer",
              }}>Connexion</button>
              <button onClick={() => { setModal("signup"); setMenuOpen(false); }} style={{
                flex: 1, background: "#1DB954", border: "none",
                color: "#000", borderRadius: 24, padding: "10px",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}>Rejoindre</button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
      `}</style>

      {modal && <AuthModal mode={modal} onClose={() => setModal(null)} onSwitch={m => setModal(m)} />}
    </>
  );
}
