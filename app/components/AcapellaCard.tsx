"use client";

import { useState } from "react";

export type Acapella = {
  id: number;
  artist: string;
  title: string;
  genre: string;
  bpm: number;
  mood: string;
  langue: string;
  duration: string;
  plays: number;
  contrat: "standard" | "personnalisé";
  open: boolean;
};

function Waveform({ playing }: { playing: boolean }) {
  const heights = [35, 60, 80, 100, 75, 55, 40];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 32, flex: 1 }}>
      {heights.map((h, i) => (
        <div
          key={i}
          className={playing ? "bar" : ""}
          style={{
            width: 3,
            height: playing ? `${h}%` : `${h * 0.35}%`,
            backgroundColor: playing ? "#1DB954" : "#333",
            borderRadius: 2,
            transition: "height 0.3s, background-color 0.3s",
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

function SignerForm({ track, onSigne }: { track: Acapella; onSigne: () => void }) {
  const [coche, setCoche] = useState(false);
  return (
    <div style={{ marginTop: 12 }}>
      <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={coche}
          onChange={e => setCoche(e.target.checked)}
          style={{ marginTop: 2, accentColor: "#1DB954", width: 14, height: 14, flexShrink: 0 }}
        />
        <span style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>
          J&apos;ai lu et j&apos;accepte le contrat standard beatlink. pour l&apos;acapella <strong style={{ color: "#fff" }}>{track.title}</strong> — valeur juridique d&apos;une signature manuscrite (art. 1125 Code civil)
        </span>
      </label>
      <button
        onClick={onSigne}
        disabled={!coche}
        style={{
          background: coche ? "#1DB954" : "#1a1a1a",
          color: coche ? "#000" : "#444",
          border: "none", borderRadius: 10,
          padding: "9px 20px", fontSize: 12, fontWeight: 800,
          cursor: coche ? "pointer" : "not-allowed",
          width: "100%", marginTop: 10,
          transition: "all 0.2s",
        }}
      >
        Signer et télécharger la voix
      </button>
    </div>
  );
}

export default function AcapellaCard({ track }: { track: Acapella }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showContrat, setShowContrat] = useState(false);
  const [beatCree, setBeatCree] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111",
        border: `1px solid ${hovered ? "#1DB954" : "#1e1e1e"}`,
        borderRadius: 16, padding: 20,
        display: "flex", flexDirection: "column", gap: 14,
        transition: "border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 15, color: "#fff", margin: 0 }}>{track.title}</p>
          <p style={{ fontSize: 13, color: "#666", margin: "3px 0 0" }}>{track.artist}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          <span style={{
            background: track.open ? "rgba(29,185,84,0.12)" : "#1a1a1a",
            color: track.open ? "#1DB954" : "#555",
            border: `1px solid ${track.open ? "#1DB954" : "#2a2a2a"}`,
            borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600,
          }}>
            {track.open ? "Ouvert" : "En cours"}
          </span>
          <span style={{
            background: track.contrat === "standard" ? "#0d1a0d" : "#1a1000",
            color: track.contrat === "standard" ? "#1DB954" : "#cc9900",
            border: `1px solid ${track.contrat === "standard" ? "#1a3a1a" : "#332200"}`,
            borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 600,
          }}>
            {track.contrat === "standard" ? "Contrat standard" : "Contrat perso"}
          </span>
        </div>
      </div>

      {/* Player */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button
          onClick={() => setPlaying(!playing)}
          style={{
            width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
            background: playing ? "#1DB954" : "#1a1a1a",
            border: `1px solid ${playing ? "#1DB954" : "#2a2a2a"}`,
            color: playing ? "#000" : "#fff",
            fontSize: 13, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
        >
          {playing ? "⏸" : "▶"}
        </button>
        <Waveform playing={playing} />
        <span style={{ fontSize: 12, color: "#444", flexShrink: 0 }}>{track.duration}</span>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {[track.genre, track.mood, track.langue, `${track.bpm} BPM`].map(tag => (
          <span key={tag} style={{
            background: "#181818", border: "1px solid #252525",
            borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#888",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "#444" }}>{track.plays.toLocaleString("fr-FR")} écoutes</span>
        {track.open && (
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setShowContrat(!showContrat)} style={{
              background: "transparent", color: "#888", border: "1px solid #2a2a2a",
              borderRadius: 20, padding: "6px 14px", fontSize: 12, cursor: "pointer",
            }}>
              Voir le contrat
            </button>
            <button onClick={() => setShowContrat(true)} style={{
              background: "#1DB954", color: "#000", border: "none",
              borderRadius: 20, padding: "7px 16px",
              fontSize: 12, fontWeight: 700, cursor: "pointer",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Créer un beat →
            </button>
          </div>
        )}
      </div>

      {showContrat && (
        <div style={{ background: "#0d1a0d", border: "1px solid #1a3a1a", borderRadius: 10, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, color: "#1DB954", fontWeight: 700, margin: "0 0 8px" }}>Aperçu du contrat</p>
          {[
            `${track.artist} reçoit 45% des revenus nets`,
            "Le beatmaker reçoit 40% des revenus nets",
            "beatlink. perçoit 15% de commission",
            `Crédit obligatoire : "[Titre] feat. ${track.artist}"`,
            "Distribution via beatlink. sur toutes les plateformes",
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 4 }}>
              <span style={{ color: "#1DB954", fontSize: 11 }}>✓</span>
              <span style={{ fontSize: 12, color: "#666" }}>{c}</span>
            </div>
          ))}

          <a href="/contrat" target="_blank" style={{
            display: "inline-block", marginTop: 10, fontSize: 12, color: "#1DB954",
            textDecoration: "underline", cursor: "pointer",
          }}>
            Voir le contrat complet →
          </a>

          {beatCree ? (
            <div style={{ marginTop: 12, background: "#061206", border: "1px solid #1DB954", borderRadius: 10, padding: "12px 16px", textAlign: "center" }}>
              <p style={{ fontSize: 16, margin: "0 0 4px" }}>✅</p>
              <p style={{ fontSize: 12, fontWeight: 800, color: "#1DB954", margin: "0 0 4px" }}>Contrat signé — Acapella téléchargée</p>
              <p style={{ fontSize: 11, color: "#555", margin: 0 }}>Le fichier vocal est dans tes téléchargements.</p>
              <button onClick={() => { setBeatCree(false); setShowContrat(false); }} style={{
                marginTop: 10, background: "transparent", color: "#555",
                border: "1px solid #2a2a2a", borderRadius: 20, padding: "5px 14px", fontSize: 11, cursor: "pointer",
              }}>Recommencer</button>
            </div>
          ) : (
            <SignerForm track={track} onSigne={() => {
              setBeatCree(true);
              const date = new Date().toLocaleDateString("fr-FR");
              const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Contrat beatlink. — ${track.title}</title><style>body{font-family:Georgia,serif;max-width:700px;margin:40px auto;padding:0 24px;color:#111;line-height:1.7}h1{font-size:22px;border-bottom:2px solid #1DB954;padding-bottom:10px}h2{font-size:15px;margin-top:28px;color:#1DB954}p,li{font-size:14px}footer{margin-top:40px;font-size:12px;color:#888;border-top:1px solid #ddd;padding-top:12px}</style></head><body><h1>Contrat de licence standard beatlink.</h1><p><strong>Acapella :</strong> ${track.title} — ${track.artist}<br><strong>Date de signature :</strong> ${date}</p><h2>Article 1 — Autorisation</h2><p>${track.artist} autorise l'utilisation de cette acapella pour créer un morceau musical.</p><h2>Article 2 — Répartition des revenus</h2><ul><li>${track.artist} : 45% des revenus nets</li><li>Beatmaker : 40% des revenus nets</li><li>beatlink. : 15% de commission</li></ul><h2>Article 3 — Crédit</h2><p>Crédit obligatoire : "[Titre] feat. ${track.artist}"</p><h2>Article 4 — Droit applicable</h2><p>Droit français — Tribunaux de Paris compétents. Signature électronique valide (art. 1125 Code civil).</p><footer>beatlink. — signé le ${date}</footer></body></html>`;
              const blob = new Blob([html], { type: "text/html" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `contrat-beatlink-${track.title.replace(/\s+/g, "-").toLowerCase()}.html`;
              a.click();
              URL.revokeObjectURL(url);
            }} />
          )}
        </div>
      )}
    </div>
  );
}
