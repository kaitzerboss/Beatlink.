"use client";

import { useState } from "react";
import Logo from "./Logo";

type Mode = "login" | "signup";

export default function AuthModal({
  mode,
  onClose,
  onSwitch,
}: {
  mode: Mode;
  onClose: () => void;
  onSwitch: (m: Mode) => void;
}) {
  const [role, setRole] = useState<"rappeur" | "beatmaker">("rappeur");

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#111", border: "1px solid #222",
          borderRadius: 20, padding: 36, width: "100%", maxWidth: 400,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <Logo />
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#555", fontSize: 24, cursor: "pointer", lineHeight: 1 }}>×</button>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4, color: "#fff" }}>
          {mode === "signup" ? "Créer un compte" : "Se connecter"}
        </h2>
        <p style={{ color: "#555", fontSize: 13, marginBottom: 24 }}>
          {mode === "signup" ? "Rejoins la communauté beatlink." : "Content de te revoir."}
        </p>

        {mode === "signup" && (
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {(["rappeur", "beatmaker"] as const).map(r => (
              <button key={r} onClick={() => setRole(r)} style={{
                flex: 1, padding: "11px 0", borderRadius: 12, fontSize: 13, fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s",
                background: role === r ? "#1DB954" : "#1a1a1a",
                color: role === r ? "#000" : "#666",
                border: `1px solid ${role === r ? "#1DB954" : "#2a2a2a"}`,
              }}>
                {r === "rappeur" ? "🎤 Rappeur" : "🎹 Beatmaker"}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {mode === "signup" && (
            <input type="text" placeholder="Nom d'artiste" style={{
              background: "#0a0a0a", border: "1px solid #222", borderRadius: 12,
              padding: "12px 16px", color: "#fff", fontSize: 14, outline: "none", width: "100%",
            }} />
          )}
          <input type="email" placeholder="Email" style={{
            background: "#0a0a0a", border: "1px solid #222", borderRadius: 12,
            padding: "12px 16px", color: "#fff", fontSize: 14, outline: "none", width: "100%",
          }} />
          <input type="password" placeholder="Mot de passe" style={{
            background: "#0a0a0a", border: "1px solid #222", borderRadius: 12,
            padding: "12px 16px", color: "#fff", fontSize: 14, outline: "none", width: "100%",
          }} />
          <button style={{
            background: "#1DB954", color: "#000", border: "none", borderRadius: 12,
            padding: "13px", fontSize: 14, fontWeight: 800, cursor: "pointer", marginTop: 4,
            transition: "opacity 0.2s", width: "100%",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {mode === "signup" ? "Créer mon compte" : "Se connecter"}
          </button>
        </div>

        <p style={{ color: "#444", fontSize: 12, textAlign: "center", marginTop: 20 }}>
          {mode === "signup" ? (
            <>Déjà un compte ?{" "}
              <button onClick={() => onSwitch("login")} style={{ background: "none", border: "none", color: "#1DB954", cursor: "pointer", fontSize: 12 }}>
                Se connecter
              </button>
            </>
          ) : (
            <>Pas encore de compte ?{" "}
              <button onClick={() => onSwitch("signup")} style={{ background: "none", border: "none", color: "#1DB954", cursor: "pointer", fontSize: 12 }}>
                S&apos;inscrire
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
