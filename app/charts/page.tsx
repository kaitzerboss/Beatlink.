"use client";

import Navbar from "../components/Navbar";

const TOP_SONS = [
  { rank: 1, titre: "Saisons", artiste: "Ines R.", beatmaker: "TrapBeatz93", genre: "Pop", streams: 12300, evolution: +2400, hot: true },
  { rank: 2, titre: "Dans ma tête", artiste: "Karim Dali", beatmaker: "TrapBeatz93", genre: "Trap", streams: 8420, evolution: +1100, hot: true },
  { rank: 3, titre: "Lumière froide", artiste: "Yasmine B.", beatmaker: "BeatsByNour", genre: "RnB", streams: 6780, evolution: +890, hot: false },
  { rank: 4, titre: "On the block", artiste: "Sami Flow", beatmaker: "DrillKingz", genre: "Drill", streams: 5310, evolution: +430, hot: false },
  { rank: 5, titre: "Quelque part", artiste: "Lina M.", beatmaker: "SunBeats", genre: "Afro", streams: 4900, evolution: +670, hot: false },
  { rank: 6, titre: "Nuit blanche", artiste: "Karim Dali", beatmaker: "BeatsByNour", genre: "Trap", streams: 3760, evolution: -120, hot: false },
  { rank: 7, titre: "Soleil levant", artiste: "Ines R.", beatmaker: "SunBeats", genre: "Afro", streams: 3200, evolution: +210, hot: false },
  { rank: 8, titre: "freestyle 93", artiste: "Sami Flow", beatmaker: "TrapBeatz93", genre: "Drill", streams: 2890, evolution: +55, hot: false },
];

const TOP_ARTISTES = [
  { rank: 1, nom: "TrapBeatz93", role: "Beatmaker", avatar: "TB", ville: "Aubervilliers", streams: 34200, collabs: 3, evolution: +8400 },
  { rank: 2, nom: "Karim Dali", role: "Rappeur", avatar: "KD", ville: "Paris", streams: 18400, collabs: 2, evolution: +3500 },
  { rank: 3, nom: "BeatsByNour", role: "Beatmaker", avatar: "BN", ville: "Lyon", streams: 16200, collabs: 2, evolution: +2100 },
  { rank: 4, nom: "Ines R.", role: "Rappeuse", avatar: "IR", ville: "Marseille", streams: 15500, collabs: 2, evolution: +4200 },
  { rank: 5, nom: "Yasmine B.", role: "Rappeuse", avatar: "YB", ville: "Paris", streams: 12300, collabs: 1, evolution: +1800 },
  { rank: 6, nom: "Sami Flow", role: "Rappeur", avatar: "SF", ville: "Bordeaux", streams: 10800, collabs: 2, evolution: +980 },
];

const MOIS = "Juin 2026";

function RankBadge({ rank }: { rank: number }) {
  const colors: Record<number, { bg: string; color: string }> = {
    1: { bg: "#FFD700", color: "#000" },
    2: { bg: "#C0C0C0", color: "#000" },
    3: { bg: "#CD7F32", color: "#fff" },
  };
  const style = colors[rank] ?? { bg: "var(--border)", color: "var(--text-3)" };
  return (
    <div style={{
      width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
      background: style.bg, color: style.color,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13, fontWeight: 900,
    }}>
      {rank}
    </div>
  );
}

function Evolution({ val }: { val: number }) {
  const up = val >= 0;
  return (
    <span style={{
      fontSize: 11, fontWeight: 700,
      color: up ? "var(--accent)" : "#cc4444",
    }}>
      {up ? "▲" : "▼"} {Math.abs(val).toLocaleString("fr-FR")}
    </span>
  );
}

export default function ChartsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
            color: "var(--accent)", background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)", borderRadius: 20,
            padding: "4px 12px", display: "inline-block", marginBottom: 14,
          }}>
            CLASSEMENTS
          </span>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "var(--text)", margin: "0 0 8px" }}>
            Top beatlink. — {MOIS}
          </h1>
          <p style={{ fontSize: 14, color: "var(--text-3)", margin: 0 }}>
            Les morceaux et artistes les plus streamés sur la plateforme ce mois-ci.
          </p>
        </div>

        <div className="charts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

          {/* TOP SONS */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "var(--text)", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 8 }}>
              🎵 Top sons du mois
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TOP_SONS.map(s => (
                <div key={s.rank} style={{
                  background: "var(--bg-card)", border: `1px solid ${s.rank <= 3 ? "var(--accent-border)" : "var(--border)"}`,
                  borderRadius: 12, padding: "14px 16px",
                  display: "flex", alignItems: "center", gap: 14,
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = s.rank <= 3 ? "var(--accent-border)" : "var(--border)")}
                >
                  <RankBadge rank={s.rank} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {s.titre}
                      </p>
                      {s.hot && (
                        <span style={{ fontSize: 10, background: "rgba(255,80,0,0.12)", color: "#ff5000", border: "1px solid rgba(255,80,0,0.3)", borderRadius: 20, padding: "1px 7px", fontWeight: 700, flexShrink: 0 }}>
                          🔥 HOT
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 12, color: "var(--text-3)", margin: "2px 0 0" }}>
                      {s.artiste} × {s.beatmaker} · <span style={{ color: "var(--text-4)" }}>{s.genre}</span>
                    </p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", margin: 0 }}>
                      {s.streams.toLocaleString("fr-FR")}
                    </p>
                    <Evolution val={s.evolution} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TOP ARTISTES */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "var(--text)", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 8 }}>
              🎤 Top artistes du mois
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TOP_ARTISTES.map(a => (
                <div key={a.rank} style={{
                  background: "var(--bg-card)", border: `1px solid ${a.rank <= 3 ? "var(--accent-border)" : "var(--border)"}`,
                  borderRadius: 12, padding: "14px 16px",
                  display: "flex", alignItems: "center", gap: 14,
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = a.rank <= 3 ? "var(--accent-border)" : "var(--border)")}
                >
                  <RankBadge rank={a.rank} />
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                    background: a.role === "Beatmaker" ? "rgba(100,100,255,0.15)" : "var(--accent-bg)",
                    border: `1px solid ${a.role === "Beatmaker" ? "#4444cc" : "var(--accent)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 800,
                    color: a.role === "Beatmaker" ? "#8888ff" : "var(--accent)",
                  }}>
                    {a.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: 0 }}>{a.nom}</p>
                    <p style={{ fontSize: 12, color: "var(--text-3)", margin: "2px 0 0" }}>
                      {a.role} · {a.ville} · {a.collabs} collab{a.collabs > 1 ? "s" : ""}
                    </p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", margin: 0 }}>
                      {a.streams.toLocaleString("fr-FR")}
                    </p>
                    <Evolution val={a.evolution} />
                  </div>
                </div>
              ))}
            </div>

            {/* Mini stat card */}
            <div style={{
              marginTop: 20, background: "var(--accent-bg)", border: "1px solid var(--accent-border)",
              borderRadius: 12, padding: "16px 20px",
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12,
            }}>
              {[
                { label: "Streams ce mois", val: "102 110" },
                { label: "Collabs actives", val: "12" },
                { label: "Revenus générés", val: "408 €" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: 900, color: "var(--accent)", margin: 0 }}>{s.val}</p>
                  <p style={{ fontSize: 10, color: "var(--text-3)", margin: "3px 0 0" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
