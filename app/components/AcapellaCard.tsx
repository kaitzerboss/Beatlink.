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

export default function AcapellaCard({ track }: { track: Acapella }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

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
          <button style={{
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
        )}
      </div>
    </div>
  );
}
