"use client";

import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ padding: "80px 24px 72px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          background: "rgba(29,185,84,0.08)", border: "1px solid rgba(29,185,84,0.25)",
          borderRadius: 20, padding: "6px 18px",
          fontSize: 11, color: "#1DB954", fontWeight: 700,
          marginBottom: 28, letterSpacing: "0.08em",
        }}>
          INFRASTRUCTURE LÉGALE DE COLLABORATION MUSICALE
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 900,
          lineHeight: 1.1, marginBottom: 24, color: "#fff",
        }}>
          La voix du rappeur.<br />
          <span style={{ color: "#1DB954" }}>Le beat du producteur.</span><br />
          Un contrat automatique.
        </h1>

        <p style={{
          fontSize: 17, color: "#666", lineHeight: 1.75,
          maxWidth: 560, margin: "0 auto 40px",
        }}>
          Les rappeurs uploadent leurs acapellas. Les beatmakers créent l&apos;instrumentale.
          beatlink. génère le contrat, distribue le morceau et partage les revenus — automatiquement.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "#1DB954", color: "#000", border: "none",
            borderRadius: 28, padding: "14px 34px",
            fontSize: 15, fontWeight: 800, cursor: "pointer",
            transition: "opacity 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Commencer gratuitement
          </button>
          <button style={{
            background: "transparent", color: "#fff",
            border: "1px solid #2a2a2a", borderRadius: 28, padding: "14px 34px",
            fontSize: 15, fontWeight: 600, cursor: "pointer",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#1DB954")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#2a2a2a")}
            onClick={() => document.getElementById("feed")?.scrollIntoView({ behavior: "smooth" })}
          >
            Voir les acapellas ↓
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 56,
          marginTop: 64, flexWrap: "wrap",
        }}>
          {[
            ["1 200+", "Artistes"],
            ["340", "Collabs actives"],
            ["89", "Morceaux publiés"],
            ["15%", "Commission beatlink."],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#1DB954" }}>{n}</div>
              <div style={{ fontSize: 12, color: "#444", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{
        background: "#0d0d0d", borderTop: "1px solid #161616",
        borderBottom: "1px solid #161616", padding: "64px 24px",
        marginBottom: 64,
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, textAlign: "center", marginBottom: 8, color: "#fff" }}>
            Comment ça marche ?
          </h2>
          <p style={{ color: "#444", textAlign: "center", marginBottom: 48, fontSize: 14 }}>
            Du contrat au streaming en 4 étapes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { n: "01", icon: "🎤", title: "Upload de l'acapella", desc: "Le rappeur pose sa voix brute et définit ses conditions. Le contrat est généré automatiquement." },
              { n: "02", icon: "📄", title: "Signature du contrat", desc: "Le beatmaker télécharge l'acapella et signe le contrat en un clic. Tout est cadré avant la création." },
              { n: "03", icon: "🎹", title: "Création du beat", desc: "Le beatmaker compose l'instrumentale autour de la voix, avec ou sans aide de l'IA." },
              { n: "04", icon: "🚀", title: "Publication & revenus", desc: "Le morceau est distribué sur Spotify, Deezer, TikTok. Les revenus sont partagés automatiquement." },
            ].map(step => (
              <div key={step.n} style={{
                background: "#111", border: "1px solid #1a1a1a",
                borderRadius: 14, padding: 24,
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
                <div style={{ fontSize: 10, color: "#1DB954", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>
                  ÉTAPE {step.n}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "#fff" }}>{step.title}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEED */}
      <div id="feed"><Feed /></div>

      {/* CTA BAS DE PAGE */}
      <section style={{
        background: "#0d0d0d", borderTop: "1px solid #161616",
        padding: "64px 24px", textAlign: "center",
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12, color: "#fff" }}>
          Prêt à créer ?
        </h2>
        <p style={{ color: "#555", fontSize: 15, marginBottom: 32 }}>
          Accès gratuit. Aucun abonnement. Tu partages uniquement quand tu gagnes.
        </p>
        <button style={{
          background: "#1DB954", color: "#000", border: "none",
          borderRadius: 28, padding: "14px 40px",
          fontSize: 15, fontWeight: 800, cursor: "pointer",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Rejoindre beatlink. gratuitement
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "28px 32px", borderTop: "1px solid #111",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <Logo size="sm" />
        <p style={{ color: "#2a2a2a", fontSize: 12, margin: 0 }}>
          © 2026 beatlink. — Paris, France
        </p>
        <p style={{ color: "#2a2a2a", fontSize: 12, margin: 0 }}>
          contact@beatlink.fr
        </p>
      </footer>
    </div>
  );
}
