"use client";

import { useState } from "react";
import Logo from "./Logo";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [modal, setModal] = useState<null | "login" | "signup">(null);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a1a1a",
        height: 64, padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Logo />

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setModal("login")} style={{
            background: "transparent", border: "1px solid #2a2a2a",
            color: "#fff", borderRadius: 24, padding: "8px 22px",
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
            color: "#000", borderRadius: 24, padding: "8px 22px",
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
