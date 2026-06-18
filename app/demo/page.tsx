"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../components/Logo";
import AuthModal from "../components/AuthModal";

const LINKS = [
  { label: "Découvrir", href: "/#feed" },
  { label: "Upload", href: "/upload" },
  { label: "Contrat", href: "/contrat" },
  { label: "Démo", href: "/demo" },
];

// ─── DONNÉES FICTIVES ───────────────────────────────────────────────

const ARTISTE_DEMO = {
  nom: "Karim Dali",
  role: "Rappeur",
  avatar: "KD",
  ville: "Paris, France",
  bio: "Rappeur indépendant depuis 2019. Style trap mélancolique, textes introspectifs.",
  acapellas: 4,
  collabs: 2,
  streams: 18400,
};

const BEATMAKER_DEMO = {
  nom: "TrapBeatz93",
  role: "Beatmaker",
  avatar: "TB",
  ville: "Aubervilliers, France",
  bio: "Producteur autodidacte. Spécialiste trap FR et drill UK. 3 ans de prod.",
  beats: 12,
  collabs: 3,
  streams: 34200,
};

const ACAPELLAS = [
  { id: 1, artist: "Karim Dali", title: "Dans ma tête", genre: "Trap", bpm: 140, mood: "Sombre", langue: "FR", duration: "1:42", plays: 1240, contrat: "standard", open: true },
  { id: 2, artist: "Yasmine B.", title: "Lumière froide", genre: "RnB", bpm: 95, mood: "Mélancolique", langue: "FR", duration: "2:10", plays: 876, contrat: "personnalisé", open: true },
  { id: 3, artist: "Sami Flow", title: "On the block", genre: "Drill", bpm: 145, mood: "Agressif", langue: "EN", duration: "1:58", plays: 2103, contrat: "standard", open: true },
  { id: 4, artist: "Lina M.", title: "Quelque part", genre: "Afro", bpm: 108, mood: "Positif", langue: "FR", duration: "2:24", plays: 654, contrat: "personnalisé", open: false },
];

const COLLABS = [
  { id: 1, titre: "Dans ma tête", rappeur: "Karim Dali", beatmaker: "TrapBeatz93", statut: "publié", streams: 8420, revenus: 34.20, genre: "Trap", date: "Mars 2026" },
  { id: 2, titre: "Lumière froide", rappeur: "Yasmine B.", beatmaker: "BeatsByNour", statut: "en cours", streams: 0, revenus: 0, genre: "RnB", date: "En production" },
  { id: 3, titre: "Saisons", rappeur: "Ines R.", beatmaker: "TrapBeatz93", statut: "publié", streams: 12300, revenus: 49.80, genre: "Pop", date: "Fév. 2026" },
];

// ─── COMPOSANTS ─────────────────────────────────────────────────────

function DemoNavbar() {
  const [modal, setModal] = useState<null | "login" | "signup">(null);
  const pathname = usePathname();

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a1a1a",
        height: 64, padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
      }}>
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}><Logo /></a>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {LINKS.map(link => {
            const active = pathname === link.href;
            return (
              <a key={link.href} href={link.href} style={{
                textDecoration: "none", padding: "6px 16px", borderRadius: 20, fontSize: 13,
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

        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <button onClick={() => setModal("login")} style={{
            background: "transparent", border: "1px solid #2a2a2a", color: "#fff",
            borderRadius: 24, padding: "8px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer",
          }}>Connexion</button>
          <button onClick={() => setModal("signup")} style={{
            background: "#1DB954", border: "none", color: "#000",
            borderRadius: 24, padding: "8px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
          }}>Rejoindre</button>
        </div>
      </nav>
      {modal && <AuthModal mode={modal} onClose={() => setModal(null)} onSwitch={m => setModal(m)} />}
    </>
  );
}

function DemoBanner() {
  return (
    <div style={{
      background: "rgba(29,185,84,0.08)", border: "1px solid rgba(29,185,84,0.2)",
      borderRadius: 12, padding: "12px 20px", marginBottom: 32,
      display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
    }}>
      <span style={{ fontSize: 16 }}>👀</span>
      <p style={{ fontSize: 13, color: "#1DB954", margin: 0, fontWeight: 600 }}>
        Mode démonstration — toutes les données sont fictives
      </p>
      <p style={{ fontSize: 13, color: "#555", margin: 0 }}>
        Cette page simule l&apos;expérience réelle de beatlink. pour les rappeurs et beatmakers.
      </p>
    </div>
  );
}

function Waveform({ playing }: { playing: boolean }) {
  const heights = [35, 60, 80, 100, 75, 55, 40, 65, 90, 70, 45];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 28, flex: 1 }}>
      {heights.map((h, i) => (
        <div key={i} className={playing ? "bar" : ""} style={{
          width: 3,
          height: playing ? `${h}%` : `${h * 0.35}%`,
          backgroundColor: playing ? "#1DB954" : "#2a2a2a",
          borderRadius: 2,
          transition: "height 0.3s, background-color 0.3s",
          animationDelay: `${i * 0.1}s`,
        }} />
      ))}
    </div>
  );
}

function AcapellaCard({ track }: { track: typeof ACAPELLAS[0] }) {
  const [playing, setPlaying] = useState(false);
  const [showContrat, setShowContrat] = useState(false);
  const [beatCree, setBeatCree] = useState(false);

  return (
    <div style={{
      background: "#111", border: "1px solid #1e1e1e",
      borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 14,
      transition: "border-color 0.2s",
    }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#1DB954")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e1e1e")}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 15, color: "#fff", margin: 0 }}>{track.title}</p>
          <p style={{ fontSize: 13, color: "#666", margin: "3px 0 0" }}>{track.artist}</p>
        </div>
        <span style={{
          background: track.open ? "rgba(29,185,84,0.12)" : "#1a1a1a",
          color: track.open ? "#1DB954" : "#555",
          border: `1px solid ${track.open ? "#1DB954" : "#2a2a2a"}`,
          borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600,
        }}>
          {track.open ? "Ouvert" : "En cours"}
        </span>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={() => setPlaying(!playing)} style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          background: playing ? "#1DB954" : "#1a1a1a",
          border: `1px solid ${playing ? "#1DB954" : "#2a2a2a"}`,
          color: playing ? "#000" : "#fff",
          fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {playing ? "⏸" : "▶"}
        </button>
        <Waveform playing={playing} />
        <span style={{ fontSize: 12, color: "#444" }}>{track.duration}</span>
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {[track.genre, track.mood, track.langue, `${track.bpm} BPM`].map(tag => (
          <span key={tag} style={{
            background: "#181818", border: "1px solid #252525",
            borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#888",
          }}>{tag}</span>
        ))}
        <span style={{
          background: track.contrat === "standard" ? "#0d1a0d" : "#1a1000",
          color: track.contrat === "standard" ? "#1DB954" : "#cc9900",
          border: `1px solid ${track.contrat === "standard" ? "#1a3a1a" : "#332200"}`,
          borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600,
        }}>
          {track.contrat === "standard" ? "Contrat standard" : "Contrat perso"}
        </span>
      </div>

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
              borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer",
            }}>
              Créer un beat →
            </button>
          </div>
        )}
      </div>

      {showContrat && (
        <div style={{ background: "#0d1a0d", border: "1px solid #1a3a1a", borderRadius: 10, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, color: "#1DB954", fontWeight: 700, margin: "0 0 8px" }}>Aperçu du contrat</p>
          <p style={{ fontSize: 12, color: "#888", margin: "0 0 6px" }}>En téléchargeant cette acapella, tu acceptes :</p>
          {[
            `${track.artist} reçoit 45% des revenus nets`,
            "Le beatmaker reçoit 40% des revenus nets",
            "beatlink. perçoit 15% de commission",
            `Crédit obligatoire : "[Titre] feat. ${track.artist}"`,
            "Distribution via beatlink. sur toutes les plateformes",
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 4 }}>
              <span style={{ color: "#1DB954", fontSize: 11, marginTop: 1 }}>✓</span>
              <span style={{ fontSize: 12, color: "#666" }}>{c}</span>
            </div>
          ))}
          {beatCree ? (
            <div style={{ marginTop: 12, background: "#061206", border: "1px solid #1DB954", borderRadius: 10, padding: "12px 16px", textAlign: "center" }}>
              <p style={{ fontSize: 16, margin: "0 0 4px" }}>✅</p>
              <p style={{ fontSize: 12, fontWeight: 800, color: "#1DB954", margin: "0 0 4px" }}>Contrat signé — Acapella téléchargée</p>
              <p style={{ fontSize: 11, color: "#555", margin: 0 }}>Dans la vraie app, le fichier serait dans ta bibliothèque.</p>
              <button onClick={() => { setBeatCree(false); setShowContrat(false); }} style={{
                marginTop: 10, background: "transparent", color: "#555",
                border: "1px solid #2a2a2a", borderRadius: 20, padding: "5px 14px", fontSize: 11, cursor: "pointer",
              }}>Recommencer la démo</button>
            </div>
          ) : (
            <button onClick={() => {
              setBeatCree(true);
              const date = new Date().toLocaleDateString("fr-FR");
              const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Contrat beatlink. — ${track.title}</title><style>body{font-family:Georgia,serif;max-width:700px;margin:40px auto;padding:0 24px;color:#111;line-height:1.7}h1{font-size:22px;border-bottom:2px solid #1DB954;padding-bottom:10px}h2{font-size:15px;margin-top:28px;color:#1DB954}p,li{font-size:14px}footer{margin-top:40px;font-size:12px;color:#888;border-top:1px solid #ddd;padding-top:12px}</style></head><body><h1>Contrat de licence standard beatlink.</h1><p><strong>Acapella :</strong> ${track.title} — ${track.artist}<br><strong>Genre :</strong> ${track.genre} · ${track.bpm} BPM<br><strong>Date :</strong> ${date}</p><h2>Article 1 — Autorisation</h2><p>${track.artist} autorise tout beatmaker enregistré sur beatlink. à utiliser cette acapella pour créer un morceau musical original.</p><h2>Article 2 — Répartition des revenus</h2><ul><li>${track.artist} (Rappeur) : <strong>45%</strong> des revenus nets</li><li>Beatmaker : <strong>40%</strong> des revenus nets</li><li>beatlink. (commission plateforme) : <strong>15%</strong> des revenus nets</li></ul><h2>Article 3 — Crédit obligatoire</h2><p>Le morceau final doit être crédité : <em>"[Titre] feat. ${track.artist}"</em></p><h2>Article 4 — Distribution</h2><p>Le morceau sera distribué automatiquement via beatlink. sur Spotify, Deezer, Apple Music, TikTok et toutes plateformes partenaires.</p><h2>Article 5 — Versements</h2><p>Les revenus sont versés mensuellement via le tableau de bord beatlink. Les seuils minimaux et délais sont précisés dans les CGU beatlink.</p><h2>Article 6 — Droit applicable</h2><p>Le présent contrat est soumis au droit français. En cas de litige, les tribunaux de Paris sont seuls compétents.</p><h2>Article 7 — Signature électronique</h2><p>L'acceptation en ligne vaut signature au sens de l'article 1125 du Code civil. Le contrat est archivé automatiquement par beatlink.</p><footer>beatlink. — contrat généré le ${date} · Version démo · nassimlkh@gmail.com</footer></body></html>`;
              const blob = new Blob([html], { type: "text/html" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `contrat-beatlink-${track.title.replace(/\s+/g, "-").toLowerCase()}.html`;
              a.click();
              URL.revokeObjectURL(url);
            }} style={{
              background: "#1DB954", color: "#000", border: "none", borderRadius: 10,
              padding: "9px 20px", fontSize: 12, fontWeight: 800, cursor: "pointer",
              width: "100%", marginTop: 12,
            }}>
              Accepter le contrat et télécharger
            </button>
          )}
        </div>
      )}
    </div>
  );
}

type ArtisteData = { nom: string; role: string; avatar: string; ville: string; bio: string; collabs: number; streams: number; acapellas?: number; beats?: number };

function ProfilCard({ artiste, type }: { artiste: ArtisteData; type: "rappeur" | "beatmaker" }) {
  return (
    <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 16, padding: 24 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
          background: type === "rappeur" ? "rgba(29,185,84,0.15)" : "rgba(100,100,255,0.15)",
          border: `2px solid ${type === "rappeur" ? "#1DB954" : "#6666ff"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, fontWeight: 800, color: type === "rappeur" ? "#1DB954" : "#8888ff",
        }}>
          {artiste.avatar}
        </div>
        <div>
          <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>{artiste.nom}</p>
          <span style={{
            display: "inline-block", marginTop: 4,
            background: type === "rappeur" ? "rgba(29,185,84,0.12)" : "rgba(100,100,255,0.12)",
            color: type === "rappeur" ? "#1DB954" : "#8888ff",
            border: `1px solid ${type === "rappeur" ? "#1DB954" : "#6666ff"}`,
            borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700,
          }}>
            {artiste.role}
          </span>
          <p style={{ fontSize: 12, color: "#555", margin: "4px 0 0" }}>{artiste.ville}</p>
        </div>
      </div>

      <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6, margin: "0 0 20px" }}>{artiste.bio}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {(type === "rappeur"
          ? [{ n: artiste.acapellas ?? 0, l: "Acapellas" }, { n: artiste.collabs, l: "Collabs" }, { n: (artiste.streams / 1000).toFixed(1) + "k", l: "Streams" }]
          : [{ n: artiste.beats ?? 0, l: "Beats" }, { n: artiste.collabs, l: "Collabs" }, { n: (artiste.streams / 1000).toFixed(1) + "k", l: "Streams" }]
        ).map(s => (
          <div key={s.l} style={{ background: "#1a1a1a", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
            <p style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: 0 }}>{s.n}</p>
            <p style={{ fontSize: 11, color: "#555", margin: "3px 0 0" }}>{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardCard() {
  return (
    <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 16, padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: 0 }}>Tableau de bord</h3>
        <span style={{ fontSize: 11, color: "#555" }}>Juin 2026</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Revenus ce mois", val: "84,00 €", green: true },
          { label: "Streams totaux", val: "20 720", green: false },
          { label: "Collabs actives", val: "2", green: false },
          { label: "Prochain versement", val: "1er juillet", green: false },
        ].map(s => (
          <div key={s.label} style={{ background: "#1a1a1a", borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, color: "#555", margin: "0 0 4px" }}>{s.label}</p>
            <p style={{ fontSize: 18, fontWeight: 800, color: s.green ? "#1DB954" : "#fff", margin: 0 }}>{s.val}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, color: "#555", margin: "0 0 10px", fontWeight: 600 }}>Collaborations</p>
      {COLLABS.map(c => (
        <div key={c.id} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 0", borderBottom: "1px solid #1a1a1a",
        }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>{c.titre}</p>
            <p style={{ fontSize: 11, color: "#555", margin: "2px 0 0" }}>{c.rappeur} × {c.beatmaker}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{
              display: "inline-block",
              background: c.statut === "publié" ? "rgba(29,185,84,0.12)" : "#1a1a00",
              color: c.statut === "publié" ? "#1DB954" : "#cc9900",
              border: `1px solid ${c.statut === "publié" ? "#1DB954" : "#cc9900"}`,
              borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700,
            }}>
              {c.statut}
            </span>
            {c.streams > 0 && (
              <p style={{ fontSize: 11, color: "#555", margin: "4px 0 0" }}>
                {c.streams.toLocaleString("fr-FR")} streams · {c.revenus.toFixed(2)} €
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── PAGE PRINCIPALE ────────────────────────────────────────────────

type Tab = "feed" | "profils" | "dashboard" | "contrat";

export default function DemoPage() {
  const [tab, setTab] = useState<Tab>("feed");
  const [contratSigne, setContratSigne] = useState(false);

  const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id: "feed", label: "Feed acapellas", emoji: "🎤" },
    { id: "profils", label: "Profils artistes", emoji: "👤" },
    { id: "dashboard", label: "Dashboard revenus", emoji: "📊" },
    { id: "contrat", label: "Contrat en action", emoji: "📄" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <DemoNavbar />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>
        <DemoBanner />

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 8px" }}>
            Démonstration beatlink.
          </h1>
          <p style={{ fontSize: 14, color: "#555", margin: 0 }}>
            Explore toutes les fonctionnalités comme si tu étais un vrai utilisateur.
          </p>
        </div>

        {/* Onglets */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background: tab === t.id ? "#1DB954" : "#111",
              color: tab === t.id ? "#000" : "#888",
              border: `1px solid ${tab === t.id ? "#1DB954" : "#2a2a2a"}`,
              borderRadius: 24, padding: "8px 18px", fontSize: 13, fontWeight: tab === t.id ? 700 : 500,
              cursor: "pointer", transition: "all 0.2s",
            }}>
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {/* FEED */}
        {tab === "feed" && (
          <div>
            <p style={{ fontSize: 13, color: "#555", marginBottom: 20 }}>
              Ce que voit un beatmaker quand il parcourt les acapellas disponibles. Il peut écouter, lire le contrat et télécharger en un clic.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
              {ACAPELLAS.map(t => <AcapellaCard key={t.id} track={t} />)}
            </div>
          </div>
        )}

        {/* PROFILS */}
        {tab === "profils" && (
          <div>
            <p style={{ fontSize: 13, color: "#555", marginBottom: 20 }}>
              Chaque artiste a un profil public. Le rappeur et le beatmaker sont liés sur chaque collaboration.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
              <ProfilCard artiste={ARTISTE_DEMO} type="rappeur" />
              <ProfilCard artiste={BEATMAKER_DEMO as unknown as ArtisteData} type="beatmaker" />
            </div>
          </div>
        )}

        {/* DASHBOARD */}
        {tab === "dashboard" && (
          <div>
            <p style={{ fontSize: 13, color: "#555", marginBottom: 20 }}>
              Chaque artiste voit ses streams, revenus et collaborations en temps réel. Les versements sont automatiques chaque mois.
            </p>
            <div style={{ maxWidth: 560 }}>
              <DashboardCard />
            </div>
          </div>
        )}

        {/* CONTRAT EN ACTION */}
        {tab === "contrat" && (
          <div style={{ maxWidth: 600 }}>
            <p style={{ fontSize: 13, color: "#555", marginBottom: 20 }}>
              Voici ce que voit le beatmaker avant de télécharger une acapella. Le contrat est signé électroniquement en un clic.
            </p>
            <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 16, padding: 28 }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>Dans ma tête</p>
              <p style={{ fontSize: 13, color: "#666", margin: "0 0 20px" }}>Acapella de Karim Dali · Trap · 140 BPM · 1:42</p>

              <div style={{ background: "#0d1a0d", border: "1px solid #1a3a1a", borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#1DB954", margin: "0 0 12px" }}>
                  📄 Contrat de licence standard beatlink.
                </p>
                {[
                  "Karim Dali autorise l'utilisation de son acapella pour créer un beat",
                  "Le morceau final sera crédité : [Titre] feat. Karim Dali",
                  "Répartition des revenus : 45% Karim Dali / 40% Beatmaker / 15% beatlink.",
                  "Distribution automatique sur Spotify, Deezer, Apple Music, TikTok",
                  "Versement mensuel des revenus via beatlink.",
                  "Droit français applicable — Tribunaux de Paris compétents",
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ color: "#1DB954", fontSize: 12, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{c}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#1a1a1a", borderRadius: 10, padding: "12px 16px", marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Ta part estimée si 10 000 streams</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#1DB954" }}>≈ 17,20 €</span>
              </div>

              {contratSigne ? (
                <div style={{
                  background: "#0d1a0d", border: "1px solid #1DB954",
                  borderRadius: 12, padding: "16px 20px", textAlign: "center",
                }}>
                  <p style={{ fontSize: 22, margin: "0 0 8px" }}>✅</p>
                  <p style={{ fontSize: 14, fontWeight: 800, color: "#1DB954", margin: "0 0 4px" }}>
                    Contrat signé — Acapella téléchargée
                  </p>
                  <p style={{ fontSize: 12, color: "#666", margin: 0 }}>
                    Dans la vraie app, le fichier serait dans ta bibliothèque et le contrat archivé automatiquement.
                  </p>
                  <button onClick={() => setContratSigne(false)} style={{
                    marginTop: 12, background: "transparent", color: "#555",
                    border: "1px solid #2a2a2a", borderRadius: 20,
                    padding: "6px 16px", fontSize: 12, cursor: "pointer",
                  }}>
                    Recommencer la démo
                  </button>
                </div>
              ) : (
                <>
                  <button onClick={() => setContratSigne(true)} style={{
                    background: "#1DB954", color: "#000", border: "none", borderRadius: 12,
                    padding: "14px", fontSize: 14, fontWeight: 800, cursor: "pointer", width: "100%",
                    transition: "opacity 0.2s",
                  }}>
                    ✓ Accepter le contrat et télécharger l&apos;acapella
                  </button>
                  <p style={{ fontSize: 11, color: "#444", textAlign: "center", margin: "10px 0 0" }}>
                    En cliquant, tu acceptes le contrat standard beatlink. v1.0 — valeur juridique d&apos;une signature manuscrite (art. 1125 Code civil)
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
