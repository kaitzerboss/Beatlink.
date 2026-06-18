const pptxgen = require("pptxgenjs");

const BG_DARK = "0a0a0a";
const BG_CARD = "111111";
const BG_LIGHT = "F5F5F5";
const GREEN = "1DB954";
const WHITE = "FFFFFF";
const GRAY = "888888";
const BORDER = "222222";

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "beatlink. — Pitch Deck";

// ─── SLIDE 1 — TITRE ───────────────────────────────────────────────
let s1 = pres.addSlide();
s1.background = { color: BG_DARK };

s1.addText([
  { text: "beat", options: { color: GREEN, bold: true } },
  { text: "link", options: { color: WHITE, bold: true } },
  { text: ".", options: { color: GREEN, bold: true } },
], { x: 1, y: 1.4, w: 8, h: 1.2, fontSize: 72, align: "center" });

s1.addText(
  "L'infrastructure légale qui transforme les remixes\nnon autorisés en source de revenus partagés",
  { x: 1, y: 2.9, w: 8, h: 1, fontSize: 16, color: GRAY, align: "center", valign: "top" }
);

const tags = [
  { label: "MUSIC TECH", x: 2.6 },
  { label: "FRANCE 2026", x: 4.3 },
  { label: "PRÉ-SEED", x: 6.1 },
];
tags.forEach(t => {
  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: t.x, y: 4.2, w: 1.5, h: 0.38,
    fill: { color: "1a1a1a" },
    line: { color: BORDER, width: 1 },
    rectRadius: 0.1,
  });
  s1.addText(t.label, {
    x: t.x, y: 4.2, w: 1.5, h: 0.38,
    fontSize: 10, color: GREEN, align: "center", valign: "middle",
    charSpacing: 2,
  });
});

s1.addNotes("Pitch d'ouverture. Laisser le logo parler. Pas besoin de tout expliquer tout de suite.");

// ─── SLIDE 2 — LE PROBLÈME ──────────────────────────────────────────
let s2 = pres.addSlide();
s2.background = { color: BG_DARK };

s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 0.3, w: 1.5, h: 0.35,
  fill: { color: "2a0a0a" }, line: { color: "aa2222", width: 1 }, rectRadius: 0.1,
});
s2.addText("LE PROBLÈME", {
  x: 0.4, y: 0.3, w: 1.5, h: 0.35,
  fontSize: 9, color: "dd4444", align: "center", valign: "middle", bold: true, charSpacing: 1,
});

s2.addText("Des milliards de streams générés.\nZéro revenu capté légalement.", {
  x: 0.4, y: 0.85, w: 9.2, h: 1.1, fontSize: 26, color: WHITE, bold: true,
});

const problems = [
  "Des milliers de beatmakers utilisent des acapellas de rappeurs signés pour créer des remixes sur TikTok et YouTube",
  "Les labels bloquent le contenu ou saisissent 100% des revenus — les créateurs arrêtent de produire",
  "Ce n'est pas du piratage — c'est un manque à gagner structurel pour toute l'industrie",
];

problems.forEach((p, i) => {
  const y = 2.2 + i * 0.95;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y, w: 9.2, h: 0.78,
    fill: { color: "150505" }, line: { color: "331111", width: 1 }, rectRadius: 0.08,
  });
  s2.addShape(pres.shapes.OVAL, {
    x: 0.65, y: y + 0.28, w: 0.18, h: 0.18,
    fill: { color: "aa2222" }, line: { color: "aa2222", width: 0 },
  });
  s2.addText(p, {
    x: 1.05, y, w: 8.3, h: 0.78,
    fontSize: 13, color: "cccccc", valign: "middle",
  });
});

s2.addNotes("Expliquer le problème clairement. Insister sur 'manque à gagner' — ce n'est pas du piratage.");

// ─── SLIDE 3 — LE MARCHÉ ────────────────────────────────────────────
let s3 = pres.addSlide();
s3.background = { color: BG_DARK };

s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 0.3, w: 1.5, h: 0.35,
  fill: { color: "1a1200" }, line: { color: "997700", width: 1 }, rectRadius: 0.1,
});
s3.addText("LE MARCHÉ", {
  x: 0.4, y: 0.3, w: 1.5, h: 0.35,
  fontSize: 9, color: "ccaa00", align: "center", valign: "middle", bold: true, charSpacing: 1,
});

s3.addText("Un marché massif, non adressé.", {
  x: 0.4, y: 0.85, w: 9.2, h: 0.7, fontSize: 26, color: WHITE, bold: true,
});

const stats = [
  { n: "1 Md+", label: "vidéos musicales\ncréées sur TikTok\nchaque mois" },
  { n: "40%", label: "du contenu TikTok\nutilise de la musique\nnon licenciée" },
  { n: "0 €", label: "reversés aux\ncréateurs de remixes\naujourd'hui" },
];

stats.forEach((s, i) => {
  const x = 0.5 + i * 3.1;
  s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y: 1.8, w: 2.9, h: 2.4,
    fill: { color: "111111" }, line: { color: BORDER, width: 1 }, rectRadius: 0.12,
  });
  s3.addText(s.n, {
    x, y: 2.0, w: 2.9, h: 0.9,
    fontSize: 40, color: GREEN, bold: true, align: "center",
  });
  s3.addText(s.label, {
    x, y: 3.0, w: 2.9, h: 1.0,
    fontSize: 12, color: GRAY, align: "center",
  });
});

s3.addText("Le rap français est la 2ème scène rap mondiale après les USA.", {
  x: 0.4, y: 4.7, w: 9.2, h: 0.4,
  fontSize: 12, color: "555555", align: "center", italic: true,
});

s3.addNotes("Ces chiffres montrent l'ampleur du problème. Le marché existe déjà — il n'est juste pas capté.");

// ─── SLIDE 4 — LA SOLUTION ──────────────────────────────────────────
let s4 = pres.addSlide();
s4.background = { color: BG_DARK };

s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 0.3, w: 1.5, h: 0.35,
  fill: { color: "0a1a0a" }, line: { color: GREEN, width: 1 }, rectRadius: 0.1,
});
s4.addText("LA SOLUTION", {
  x: 0.4, y: 0.3, w: 1.5, h: 0.35,
  fontSize: 9, color: GREEN, align: "center", valign: "middle", bold: true, charSpacing: 1,
});

s4.addText("beatlink. — le contrat avant la création.", {
  x: 0.4, y: 0.85, w: 9.2, h: 0.7, fontSize: 24, color: WHITE, bold: true,
});

const steps = [
  { n: "01", text: "Le rappeur uploade son acapella et fixe ses conditions — le contrat est prêt avant qu'un beat existe" },
  { n: "02", text: "Le beatmaker choisit une acapella et signe le contrat automatiquement en la téléchargeant — en un clic" },
  { n: "03", text: "Le morceau final est distribué automatiquement sur Spotify, Deezer, TikTok — les deux artistes crédités" },
  { n: "04", text: "Les revenus sont partagés automatiquement à chaque stream entre rappeur, beatmaker et beatlink." },
];

steps.forEach((step, i) => {
  const y = 1.8 + i * 0.85;
  s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y, w: 9.2, h: 0.72,
    fill: { color: "0d1a0d" }, line: { color: "1a3a1a", width: 1 }, rectRadius: 0.08,
  });
  s4.addText(step.n, {
    x: 0.55, y, w: 0.6, h: 0.72,
    fontSize: 18, color: GREEN, bold: true, valign: "middle",
  });
  s4.addText(step.text, {
    x: 1.3, y, w: 8.1, h: 0.72,
    fontSize: 13, color: "cccccc", valign: "middle",
  });
});

s4.addNotes("C'est le cœur du produit. Simple, automatique, légal. Insister sur 'le contrat avant la création'.");

// ─── SLIDE 5 — MODÈLE ÉCONOMIQUE ────────────────────────────────────
let s5 = pres.addSlide();
s5.background = { color: BG_DARK };

s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 0.3, w: 2.2, h: 0.35,
  fill: { color: "001a33" }, line: { color: "0066aa", width: 1 }, rectRadius: 0.1,
});
s5.addText("MODÈLE ÉCONOMIQUE", {
  x: 0.4, y: 0.3, w: 2.2, h: 0.35,
  fontSize: 9, color: "4499cc", align: "center", valign: "middle", bold: true, charSpacing: 1,
});

s5.addText("On gagne quand nos artistes gagnent.", {
  x: 0.4, y: 0.85, w: 9.2, h: 0.7, fontSize: 24, color: WHITE, bold: true,
});

s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 1.75, w: 9.2, h: 2.9,
  fill: { color: "111111" }, line: { color: BORDER, width: 1 }, rectRadius: 0.12,
});

const splits = [
  { label: "Rappeur", pct: 45, bar: 7.0 },
  { label: "Beatmaker", pct: 40, bar: 6.2 },
  { label: "beatlink.", pct: 15, bar: 2.3 },
];

splits.forEach((s, i) => {
  const y = 2.05 + i * 0.78;
  s5.addText(s.label, {
    x: 0.7, y, w: 1.6, h: 0.5,
    fontSize: 14, color: WHITE, valign: "middle",
  });
  s5.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: y + 0.14, w: s.bar, h: 0.22,
    fill: { color: GREEN, transparency: i * 20 },
    line: { color: "000000", width: 0 },
  });
  s5.addText(`${s.pct}%`, {
    x: 9.0, y, w: 0.5, h: 0.5,
    fontSize: 14, color: WHITE, bold: true, align: "right", valign: "middle",
  });
});

s5.addText("Accès 100% gratuit. Commission uniquement sur les revenus générés.\nDans le contrat personnalisé, le split rappeur/beatmaker est modifiable — la commission beatlink. reste fixe.", {
  x: 0.4, y: 4.75, w: 9.2, h: 0.6,
  fontSize: 11, color: "555555", align: "center",
});

s5.addNotes("Modèle simple : on ne gagne que si les artistes gagnent. Aucun abonnement, aucune barrière à l'entrée.");

// ─── SLIDE 6 — CE QU'ON CHERCHE ─────────────────────────────────────
let s6 = pres.addSlide();
s6.background = { color: BG_DARK };

s6.addText("Un premier partenaire\npour prouver le modèle.", {
  x: 0.4, y: 0.5, w: 9.2, h: 1.3, fontSize: 28, color: WHITE, bold: true,
});

s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 2.0, w: 9.2, h: 1.2,
  fill: { color: "0a1a0a" }, line: { color: GREEN, width: 2 }, rectRadius: 0.12,
});
s6.addText("Accord pilote label — 6 mois", {
  x: 0.7, y: 2.1, w: 8.8, h: 0.38,
  fontSize: 15, color: GREEN, bold: true,
});
s6.addText("5 à 10 titres du catalogue ouverts aux remixes licenciés. Données réelles, revenus partagés dès le premier stream.", {
  x: 0.7, y: 2.5, w: 8.5, h: 0.55,
  fontSize: 12, color: "aaaaaa",
});

s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 3.35, w: 9.2, h: 1.2,
  fill: { color: "111111" }, line: { color: BORDER, width: 1 }, rectRadius: 0.12,
});
s6.addText("Investissement pré-seed", {
  x: 0.7, y: 3.45, w: 8.8, h: 0.38,
  fontSize: 15, color: WHITE, bold: true,
});
s6.addText("Pour finaliser la plateforme, recruter un profil juridique et lancer les premiers accords de distribution.", {
  x: 0.7, y: 3.85, w: 8.5, h: 0.55,
  fontSize: 12, color: "aaaaaa",
});

s6.addText([
  { text: "beat", options: { color: GREEN, bold: true } },
  { text: "link", options: { color: WHITE, bold: true } },
  { text: ".", options: { color: GREEN, bold: true } },
], { x: 0.4, y: 4.9, w: 3, h: 0.45, fontSize: 20 });

s6.addText("contact@beatlink.fr  ·  Paris, France  ·  2026", {
  x: 4, y: 4.9, w: 5.7, h: 0.45,
  fontSize: 11, color: "444444", align: "right", valign: "middle",
});

s6.addNotes("Conclure sur l'appel à l'action. On cherche un pilote, pas un chèque. Rester accessible.");

// ─── EXPORT ──────────────────────────────────────────────────────────
pres.writeFile({ fileName: "/Users/lakehalnassim/Desktop/beatlink-pitch.pptx" })
  .then(() => console.log("✅ Fichier créé : Desktop/beatlink-pitch.pptx"))
  .catch(err => console.error("Erreur :", err));
