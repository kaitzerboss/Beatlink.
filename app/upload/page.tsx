"use client";

import { useState, useRef } from "react";
import Logo from "../components/Logo";

type ContratType = "standard" | "personnalise";
type Genre = "Trap" | "Drill" | "RnB" | "Afro" | "Pop" | "Soul" | "";
type Mood = "Sombre" | "Mélancolique" | "Agressif" | "Positif" | "Motivant" | "Nostalgique" | "";
type Langue = "FR" | "EN" | "ES" | "AR" | "";

const SPLIT_STANDARD = { rappeur: 45, beatmaker: 40, beatlink: 15 };

export default function UploadPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [titre, setTitre] = useState("");
  const [genre, setGenre] = useState<Genre>("");
  const [mood, setMood] = useState<Mood>("");
  const [langue, setLangue] = useState<Langue>("");
  const [bpm, setBpm] = useState("");
  const [contrat, setContrat] = useState<ContratType>("standard");
  const [splitRappeur, setSplitRappeur] = useState(45);
  const [splitBeatmaker, setSplitBeatmaker] = useState(40);
  const [clauseExclu, setClauseExclu] = useState(false);
  const [clauseCredit, setClauseCredit] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const splitBeatlink = 100 - splitRappeur - splitBeatmaker;
  const splitValid = splitBeatlink >= 10 && splitBeatlink <= 20;

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("audio/")) setFile(f);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  }

  const canStep2 = file && titre && genre && mood && langue && bpm;
  const canStep3 = contrat === "standard" || (contrat === "personnalise" && splitValid);

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div style={{ fontSize: 56, marginBottom: 24 }}>🎤</div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 12 }}>
            Acapella mise en ligne !
          </h1>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, marginBottom: 32 }}>
            <strong style={{ color: "#1DB954" }}>{titre}</strong> est maintenant disponible dans le feed.
            Les beatmakers peuvent la découvrir, signer le contrat et créer autour de ta voix.
          </p>
          <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 14, padding: 20, marginBottom: 28, textAlign: "left" }}>
            <p style={{ fontSize: 12, color: "#555", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Résumé du contrat</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ color: "#888" }}>Type</span>
                <span style={{ color: "#fff", fontWeight: 600 }}>{contrat === "standard" ? "Contrat standard beatlink." : "Contrat personnalisé"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ color: "#888" }}>Ta part (rappeur)</span>
                <span style={{ color: "#1DB954", fontWeight: 700 }}>{contrat === "standard" ? SPLIT_STANDARD.rappeur : splitRappeur}%</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ color: "#888" }}>Part beatmaker</span>
                <span style={{ color: "#fff", fontWeight: 600 }}>{contrat === "standard" ? SPLIT_STANDARD.beatmaker : splitBeatmaker}%</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ color: "#888" }}>Commission beatlink.</span>
                <span style={{ color: "#fff", fontWeight: 600 }}>{contrat === "standard" ? SPLIT_STANDARD.beatlink : splitBeatlink}%</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button onClick={() => { setSubmitted(false); setStep(1); setFile(null); setTitre(""); }} style={{
              background: "#1DB954", color: "#000", border: "none", borderRadius: 24,
              padding: "12px 28px", fontSize: 14, fontWeight: 800, cursor: "pointer",
            }}>
              Uploader une autre acapella
            </button>
            <a href="/" style={{
              background: "transparent", color: "#fff", border: "1px solid #2a2a2a",
              borderRadius: 24, padding: "12px 28px", fontSize: 14, fontWeight: 600,
              textDecoration: "none", display: "inline-flex", alignItems: "center",
            }}>
              Voir le feed
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.9)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a1a1a",
        height: 64, padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="/" style={{ textDecoration: "none" }}><Logo /></a>
        <span style={{ fontSize: 13, color: "#444" }}>Upload acapella</span>
      </nav>

      <div style={{ maxWidth: 620, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Étapes */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 40 }}>
          {[
            { n: 1, label: "Fichier audio" },
            { n: 2, label: "Informations" },
            { n: 3, label: "Contrat" },
          ].map((s, i) => (
            <div key={s.n} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : "none" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: step === s.n ? "#1DB954" : step > s.n ? "#0d4020" : "#1a1a1a",
                  border: `2px solid ${step === s.n ? "#1DB954" : step > s.n ? "#1DB954" : "#2a2a2a"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700,
                  color: step === s.n ? "#000" : step > s.n ? "#1DB954" : "#444",
                }}>
                  {step > s.n ? "✓" : s.n}
                </div>
                <span style={{ fontSize: 11, color: step === s.n ? "#1DB954" : "#444", whiteSpace: "nowrap" }}>{s.label}</span>
              </div>
              {i < 2 && (
                <div style={{
                  flex: 1, height: 1, background: step > s.n ? "#1DB954" : "#1a1a1a",
                  margin: "0 8px", marginBottom: 18,
                }} />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1 — FICHIER */}
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: 0 }}>Upload ton acapella</h1>
              <p style={{ fontSize: 14, color: "#555", margin: "8px 0 0" }}>
                Voix brute uniquement — sans beat, sans effets. MP3, WAV ou FLAC.
              </p>
            </div>

            <div
              onDragOver={e => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
              style={{
                border: `2px dashed ${dragging ? "#1DB954" : file ? "#1DB954" : "#2a2a2a"}`,
                borderRadius: 16, padding: "48px 24px",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: 12, cursor: "pointer",
                background: dragging ? "rgba(29,185,84,0.05)" : file ? "rgba(29,185,84,0.03)" : "#0d0d0d",
                transition: "all 0.2s", textAlign: "center",
              }}
            >
              <input ref={fileRef} type="file" accept="audio/*" style={{ display: "none" }} onChange={handleFile} />
              <div style={{ fontSize: 40 }}>{file ? "🎵" : "🎤"}</div>
              {file ? (
                <>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#1DB954", margin: 0 }}>{file.name}</p>
                  <p style={{ fontSize: 12, color: "#555", margin: 0 }}>{(file.size / 1024 / 1024).toFixed(1)} MB · Cliquer pour changer</p>
                </>
              ) : (
                <>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#fff", margin: 0 }}>Glisse ton fichier ici</p>
                  <p style={{ fontSize: 13, color: "#555", margin: 0 }}>ou clique pour parcourir — MP3, WAV, FLAC</p>
                </>
              )}
            </div>

            {file && (
              <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 12, padding: "14px 16px" }}>
                <p style={{ fontSize: 12, color: "#555", margin: "0 0 6px" }}>Aperçu</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24 }}>🎵</div>
                  <div>
                    <p style={{ fontSize: 13, color: "#fff", margin: 0, fontWeight: 600 }}>{file.name}</p>
                    <p style={{ fontSize: 12, color: "#555", margin: "2px 0 0" }}>{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setStep(2)}
              disabled={!file}
              style={{
                background: file ? "#1DB954" : "#1a1a1a",
                color: file ? "#000" : "#444",
                border: "none", borderRadius: 24,
                padding: "13px", fontSize: 14, fontWeight: 800,
                cursor: file ? "pointer" : "not-allowed",
                transition: "all 0.2s", width: "100%",
              }}
            >
              Continuer →
            </button>
          </div>
        )}

        {/* STEP 2 — INFOS */}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: 0 }}>Informations</h1>
              <p style={{ fontSize: 14, color: "#555", margin: "8px 0 0" }}>
                Ces infos aident les beatmakers à trouver ton acapella.
              </p>
            </div>

            {[
              { label: "Titre du morceau", value: titre, set: setTitre, placeholder: "Ex : Dans ma tête" },
              { label: "BPM (optionnel)", value: bpm, set: setBpm, placeholder: "Ex : 140" },
            ].map(f => (
              <div key={f.label}>
                <label style={{ fontSize: 13, color: "#888", display: "block", marginBottom: 6 }}>{f.label}</label>
                <input
                  type="text"
                  value={f.value}
                  onChange={e => f.set(e.target.value)}
                  placeholder={f.placeholder}
                  style={{
                    width: "100%", background: "#111", border: "1px solid #222",
                    borderRadius: 12, padding: "12px 16px",
                    color: "#fff", fontSize: 14, outline: "none",
                  }}
                />
              </div>
            ))}

            {[
              { label: "Genre", value: genre, set: setGenre, options: ["", "Trap", "Drill", "RnB", "Afro", "Pop", "Soul"] },
              { label: "Mood", value: mood, set: setMood, options: ["", "Sombre", "Mélancolique", "Agressif", "Positif", "Motivant", "Nostalgique"] },
              { label: "Langue", value: langue, set: setLangue, options: ["", "FR", "EN", "ES", "AR"] },
            ].map(f => (
              <div key={f.label}>
                <label style={{ fontSize: 13, color: "#888", display: "block", marginBottom: 6 }}>{f.label}</label>
                <select
                  value={f.value}
                  onChange={e => f.set(e.target.value as never)}
                  style={{
                    width: "100%", background: "#111", border: "1px solid #222",
                    borderRadius: 12, padding: "12px 16px",
                    color: f.value ? "#fff" : "#555", fontSize: 14, outline: "none", cursor: "pointer",
                  }}
                >
                  <option value="">Sélectionner…</option>
                  {f.options.filter(Boolean).map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}

            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button onClick={() => setStep(1)} style={{
                flex: 1, background: "transparent", color: "#fff",
                border: "1px solid #2a2a2a", borderRadius: 24,
                padding: "13px", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}>
                ← Retour
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!canStep2}
                style={{
                  flex: 2, background: canStep2 ? "#1DB954" : "#1a1a1a",
                  color: canStep2 ? "#000" : "#444",
                  border: "none", borderRadius: 24,
                  padding: "13px", fontSize: 14, fontWeight: 800,
                  cursor: canStep2 ? "pointer" : "not-allowed",
                }}
              >
                Continuer →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — CONTRAT */}
        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: 0 }}>Choisis ton contrat</h1>
              <p style={{ fontSize: 14, color: "#555", margin: "8px 0 0" }}>
                Chaque beatmaker signera ce contrat avant de télécharger ton acapella.
              </p>
            </div>

            {/* Contrat standard */}
            <div
              onClick={() => setContrat("standard")}
              style={{
                background: contrat === "standard" ? "#0d1a0d" : "#111",
                border: `2px solid ${contrat === "standard" ? "#1DB954" : "#1e1e1e"}`,
                borderRadius: 14, padding: 20, cursor: "pointer", transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: 0 }}>Contrat standard beatlink.</p>
                  <p style={{ fontSize: 12, color: "#555", margin: "3px 0 0" }}>Recommandé — simple et accepté par tous</p>
                </div>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  border: `2px solid ${contrat === "standard" ? "#1DB954" : "#333"}`,
                  background: contrat === "standard" ? "#1DB954" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, color: "#000",
                }}>
                  {contrat === "standard" && "✓"}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { label: "Toi", val: `${SPLIT_STANDARD.rappeur}%`, green: true },
                  { label: "Beatmaker", val: `${SPLIT_STANDARD.beatmaker}%`, green: false },
                  { label: "beatlink.", val: `${SPLIT_STANDARD.beatlink}%`, green: false },
                ].map(s => (
                  <div key={s.label} style={{
                    flex: 1, background: "#1a1a1a", borderRadius: 10,
                    padding: "10px 12px", textAlign: "center",
                  }}>
                    <p style={{ fontSize: 18, fontWeight: 900, color: s.green ? "#1DB954" : "#fff", margin: 0 }}>{s.val}</p>
                    <p style={{ fontSize: 11, color: "#555", margin: "3px 0 0" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrat personnalisé */}
            <div
              onClick={() => setContrat("personnalise")}
              style={{
                background: contrat === "personnalise" ? "#1a1000" : "#111",
                border: `2px solid ${contrat === "personnalise" ? "#cc9900" : "#1e1e1e"}`,
                borderRadius: 14, padding: 20, cursor: "pointer", transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: contrat === "personnalise" ? 16 : 0 }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: 0 }}>Contrat personnalisé</p>
                  <p style={{ fontSize: 12, color: "#555", margin: "3px 0 0" }}>Fixe tes propres conditions de split</p>
                </div>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  border: `2px solid ${contrat === "personnalise" ? "#cc9900" : "#333"}`,
                  background: contrat === "personnalise" ? "#cc9900" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, color: "#000",
                }}>
                  {contrat === "personnalise" && "✓"}
                </div>
              </div>

              {contrat === "personnalise" && (
                <div onClick={e => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { label: `Ta part (rappeur) — ${splitRappeur}%`, value: splitRappeur, set: setSplitRappeur, min: 30, max: 70 },
                    { label: `Part beatmaker — ${splitBeatmaker}%`, value: splitBeatmaker, set: setSplitBeatmaker, min: 20, max: 60 },
                  ].map(s => (
                    <div key={s.label}>
                      <p style={{ fontSize: 13, color: "#888", margin: "0 0 6px" }}>{s.label}</p>
                      <input
                        type="range" min={s.min} max={s.max} value={s.value}
                        onChange={e => s.set(Number(e.target.value))}
                        style={{ width: "100%", accentColor: "#1DB954" }}
                      />
                    </div>
                  ))}

                  <div style={{
                    background: splitValid ? "#0d1a0d" : "#1a0a0a",
                    border: `1px solid ${splitValid ? "#1a3a1a" : "#3a1a1a"}`,
                    borderRadius: 10, padding: "10px 14px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Commission beatlink. (fixe)</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: splitValid ? "#1DB954" : "#cc4444" }}>
                      {splitBeatlink}%
                    </span>
                  </div>

                  {!splitValid && (
                    <p style={{ fontSize: 12, color: "#cc4444", margin: 0 }}>
                      La commission beatlink. doit être entre 10% et 20%. Ajuste les sliders.
                    </p>
                  )}

                  <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 12, color: "#666", margin: 0, fontWeight: 600 }}>Clauses optionnelles</p>
                    {[
                      { id: "exclu", val: clauseExclu, set: setClauseExclu, label: "Acapella exclusive", desc: "Un seul beatmaker peut utiliser cette acapella" },
                      { id: "credit", val: clauseCredit, set: setClauseCredit, label: "Crédit obligatoire", desc: "Mon nom doit apparaître sur toutes les plateformes" },
                    ].map(c => (
                      <div key={c.id} onClick={() => c.set(!c.val)} style={{
                        display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer",
                      }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 1,
                          background: c.val ? "#1DB954" : "transparent",
                          border: `2px solid ${c.val ? "#1DB954" : "#333"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 11, color: "#000",
                        }}>
                          {c.val && "✓"}
                        </div>
                        <div>
                          <p style={{ fontSize: 13, color: "#fff", margin: 0, fontWeight: 600 }}>{c.label}</p>
                          <p style={{ fontSize: 12, color: "#555", margin: "2px 0 0" }}>{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button onClick={() => setStep(2)} style={{
                flex: 1, background: "transparent", color: "#fff",
                border: "1px solid #2a2a2a", borderRadius: 24,
                padding: "13px", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}>
                ← Retour
              </button>
              <button
                onClick={() => setSubmitted(true)}
                disabled={!canStep3}
                style={{
                  flex: 2, background: canStep3 ? "#1DB954" : "#1a1a1a",
                  color: canStep3 ? "#000" : "#444",
                  border: "none", borderRadius: 24,
                  padding: "13px", fontSize: 14, fontWeight: 800,
                  cursor: canStep3 ? "pointer" : "not-allowed",
                }}
              >
                Publier l&apos;acapella
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
