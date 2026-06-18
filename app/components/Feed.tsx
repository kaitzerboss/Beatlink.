"use client";

import { useState } from "react";
import AcapellaCard, { Acapella } from "./AcapellaCard";

const DATA: Acapella[] = [
  { id: 1, artist: "Karim Dali", title: "Dans ma tête", genre: "Trap", bpm: 140, mood: "Sombre", langue: "FR", duration: "1:42", plays: 1240, contrat: "standard", open: true },
  { id: 2, artist: "Yasmine B.", title: "Lumière froide", genre: "RnB", bpm: 95, mood: "Mélancolique", langue: "FR", duration: "2:10", plays: 876, contrat: "personnalisé", open: true },
  { id: 3, artist: "Sami Flow", title: "On the block", genre: "Drill", bpm: 145, mood: "Agressif", langue: "EN", duration: "1:58", plays: 2103, contrat: "standard", open: true },
  { id: 4, artist: "Lina M.", title: "Quelque part", genre: "Afro", bpm: 108, mood: "Positif", langue: "FR", duration: "2:24", plays: 654, contrat: "personnalisé", open: true },
  { id: 5, artist: "Jordan K.", title: "Never enough", genre: "Trap", bpm: 138, mood: "Motivant", langue: "EN", duration: "1:35", plays: 1890, contrat: "standard", open: true },
  { id: 6, artist: "Ines R.", title: "Saisons", genre: "Pop", bpm: 120, mood: "Nostalgique", langue: "FR", duration: "2:05", plays: 432, contrat: "standard", open: false },
];

const GENRES = ["Tous", "Trap", "Drill", "RnB", "Afro", "Pop"];
const MOODS = ["Tous", "Sombre", "Mélancolique", "Agressif", "Positif", "Motivant", "Nostalgique"];
const LANGUES = ["Toutes", "FR", "EN"];

const selectStyle: React.CSSProperties = {
  background: "#0a0a0a", border: "1px solid #222", borderRadius: 10,
  padding: "9px 14px", color: "#888", fontSize: 13, outline: "none", cursor: "pointer",
};

export default function Feed() {
  const [genre, setGenre] = useState("Tous");
  const [mood, setMood] = useState("Tous");
  const [langue, setLangue] = useState("Toutes");
  const [search, setSearch] = useState("");

  const filtered = DATA.filter(t => {
    if (genre !== "Tous" && t.genre !== genre) return false;
    if (mood !== "Tous" && t.mood !== mood) return false;
    if (langue !== "Toutes" && t.langue !== langue) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.artist.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: "#fff" }}>Acapellas disponibles</h2>
        <p style={{ color: "#444", fontSize: 14, margin: "6px 0 0" }}>
          Chaque acapella est accompagnée d&apos;un contrat signable en un clic.
        </p>
      </div>

      {/* Filtres */}
      <div style={{
        background: "#111", border: "1px solid #1a1a1a", borderRadius: 14,
        padding: "16px 20px", marginBottom: 24,
        display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center",
      }}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            ...selectStyle, flex: "1 1 180px", minWidth: 160,
            color: "#fff",
          }}
        />
        <select value={genre} onChange={e => setGenre(e.target.value)} style={selectStyle}>
          {GENRES.map(g => <option key={g}>{g}</option>)}
        </select>
        <select value={mood} onChange={e => setMood(e.target.value)} style={selectStyle}>
          {MOODS.map(m => <option key={m}>{m}</option>)}
        </select>
        <select value={langue} onChange={e => setLangue(e.target.value)} style={selectStyle}>
          {LANGUES.map(l => <option key={l}>{l}</option>)}
        </select>
        <span style={{ fontSize: 12, color: "#333", marginLeft: "auto" }}>
          {filtered.length} acapella{filtered.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Grille */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#333", fontSize: 14 }}>
          Aucune acapella ne correspond à ces filtres.
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 14,
        }}>
          {filtered.map(t => <AcapellaCard key={t.id} track={t} />)}
        </div>
      )}
    </section>
  );
}
