"use client";

import Logo from "../components/Logo";

export default function ContratPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.9)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a1a1a",
        height: 64, padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="/" style={{ textDecoration: "none" }}><Logo /></a>
        <span style={{ fontSize: 13, color: "#444" }}>Contrat de licence standard</span>
      </nav>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px 100px" }}>

        {/* En-tête */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 2, justifyContent: "center", marginBottom: 16 }}>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#1DB954" }}>beat</span>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>link</span>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#1DB954" }}>.</span>
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>
            CONTRAT DE LICENCE DE COLLABORATION MUSICALE
          </h1>
          <p style={{ fontSize: 13, color: "#555", margin: 0 }}>
            Version 1.0 — Contrat standard beatlink. — Droit français applicable
          </p>
        </div>

        <ContratCorps />

        {/* Bouton imprimer */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button
            onClick={() => window.print()}
            style={{
              background: "transparent", color: "#fff",
              border: "1px solid #2a2a2a", borderRadius: 24,
              padding: "12px 28px", fontSize: 13, fontWeight: 600,
              cursor: "pointer", marginRight: 12,
            }}
          >
            Imprimer / Sauvegarder en PDF
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{
        fontSize: 13, fontWeight: 800, color: "#1DB954",
        textTransform: "uppercase", letterSpacing: "0.08em",
        margin: "0 0 12px", paddingBottom: 8,
        borderBottom: "1px solid #1a1a1a",
      }}>
        {titre}
      </h2>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.8, margin: "0 0 10px" }}>
      {children}
    </p>
  );
}

function Article({ n, titre, children }: { n: string; titre: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: 14, fontWeight: 800, color: "#fff", margin: "0 0 10px" }}>
        Article {n} — {titre}
      </h3>
      {children}
    </div>
  );
}

function ContratCorps() {
  return (
    <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, padding: "36px 40px" }}>

      <Section titre="Préambule">
        <P>
          Le présent contrat (ci-après « le Contrat ») est conclu entre les parties identifiées lors de leur inscription sur la plateforme beatlink., éditée par la société beatlink. SAS, ci-après désignée « la Plateforme ».
        </P>
        <P>
          Le Contrat a pour objet d&apos;encadrer la collaboration musicale entre un artiste interprète (ci-après « le Rappeur ») et un producteur musical (ci-après « le Beatmaker »), dans le cadre de la création d&apos;un enregistrement sonore (ci-après « l&apos;Œuvre »).
        </P>
        <P>
          Le Contrat prend effet au moment où le Beatmaker télécharge l&apos;acapella mise à disposition par le Rappeur sur la Plateforme, valant acceptation sans réserve des présentes conditions.
        </P>
      </Section>

      <Section titre="Article 1 — Définitions">
        <Article n="1.1" titre="L'Acapella">
          <P>
            Désigne l&apos;enregistrement vocal brut déposé par le Rappeur sur la Plateforme, composé exclusivement de sa voix, sans instrumentale ni traitement sonore significatif. L&apos;Acapella constitue la propriété exclusive du Rappeur, qui garantit en être l&apos;unique titulaire des droits ou disposer de toutes les autorisations nécessaires.
          </P>
        </Article>
        <Article n="1.2" titre="L'Instrumentale">
          <P>
            Désigne la composition musicale créée par le Beatmaker autour de l&apos;Acapella. L&apos;Instrumentale constitue la propriété exclusive du Beatmaker, qui garantit en être l&apos;unique auteur et compositeur, libre de tout droit de tiers.
          </P>
        </Article>
        <Article n="1.3" titre="L'Œuvre">
          <P>
            Désigne l&apos;enregistrement final résultant de l&apos;assemblage de l&apos;Acapella et de l&apos;Instrumentale, constituant une œuvre de collaboration au sens de l&apos;article L. 113-2 du Code de la propriété intellectuelle français.
          </P>
        </Article>
        <Article n="1.4" titre="Les Revenus Nets">
          <P>
            Désigne l&apos;ensemble des sommes perçues par la Plateforme au titre de l&apos;exploitation de l&apos;Œuvre (streaming, téléchargements, synchronisation, droits voisins), déduction faite des frais de distribution, des commissions des plateformes de diffusion, et de toute taxe applicable.
          </P>
        </Article>
      </Section>

      <Section titre="Article 2 — Objet du contrat">
        <P>
          Par le présent Contrat, le Rappeur autorise le Beatmaker à utiliser son Acapella pour créer l&apos;Instrumentale et assembler l&apos;Œuvre finale. Cette autorisation est accordée à titre non exclusif, pour le monde entier, pour la durée légale de protection des droits d&apos;auteur.
        </P>
        <P>
          En contrepartie, le Beatmaker s&apos;engage à respecter l&apos;intégrité de l&apos;Acapella, à créditer le Rappeur sur toutes les plateformes de diffusion, et à partager les revenus générés par l&apos;Œuvre selon les modalités définies à l&apos;Article 4.
        </P>
      </Section>

      <Section titre="Article 3 — Droits accordés">
        <Article n="3.1" titre="Droits accordés au Beatmaker">
          <P>Le Rappeur accorde au Beatmaker le droit de :</P>
          <P>— Utiliser l&apos;Acapella pour créer l&apos;Instrumentale et assembler l&apos;Œuvre ;</P>
          <P>— Distribuer et exploiter l&apos;Œuvre sur toutes les plateformes de streaming (Spotify, Apple Music, Deezer, YouTube Music, TikTok, etc.) via la Plateforme beatlink. ;</P>
          <P>— Promouvoir l&apos;Œuvre sur les réseaux sociaux, en mentionnant systématiquement le Rappeur en tant que co-créateur ;</P>
          <P>— Percevoir sa quote-part des revenus générés, selon la répartition définie à l&apos;Article 4.</P>
        </Article>
        <Article n="3.2" titre="Droits réservés au Rappeur">
          <P>Le Rappeur conserve :</P>
          <P>— La pleine propriété de son Acapella originale ;</P>
          <P>— Le droit de retirer son Acapella du catalogue de la Plateforme pour toute nouvelle utilisation, sans que cela n&apos;affecte l&apos;Œuvre déjà publiée ;</P>
          <P>— Le droit de faire figurer l&apos;Œuvre sur sa propre page artiste sur les plateformes de streaming, sous réserve d&apos;accord du Beatmaker ;</P>
          <P>— Le droit moral sur son interprétation, qui est inaliénable et imprescriptible conformément à l&apos;article L. 121-1 du Code de la propriété intellectuelle.</P>
        </Article>
        <Article n="3.3" titre="Droits réservés à beatlink.">
          <P>
            La Plateforme conserve le droit d&apos;assurer la distribution de l&apos;Œuvre, de percevoir les revenus générés pour les redistribuer selon les modalités du présent Contrat, et d&apos;afficher l&apos;Œuvre dans le catalogue beatlink. à des fins promotionnelles.
          </P>
        </Article>
      </Section>

      <Section titre="Article 4 — Répartition des revenus">
        <Article n="4.1" titre="Répartition standard">
          <P>
            Les Revenus Nets générés par l&apos;Œuvre sont répartis comme suit, sauf accord contraire formalisé dans un contrat personnalisé signé entre les parties via la Plateforme :
          </P>
          <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, padding: "16px 20px", margin: "12px 0" }}>
            {[
              { label: "Rappeur", pct: "45%", detail: "au titre de sa contribution vocale et de la mise à disposition de son acapella" },
              { label: "Beatmaker", pct: "40%", detail: "au titre de la composition musicale et de la production de l'instrumentale" },
              { label: "beatlink.", pct: "15%", detail: "au titre des services de mise en relation, génération des contrats et distribution" },
            ].map(r => (
              <div key={r.label} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: "#1DB954", minWidth: 44 }}>{r.pct}</span>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{r.label}</span>
                  <span style={{ fontSize: 12, color: "#555" }}> — {r.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </Article>
        <Article n="4.2" titre="Versement des revenus">
          <P>
            Les revenus sont collectés par beatlink. auprès des plateformes de diffusion et versés aux parties selon le calendrier suivant : versement mensuel, dans les 30 jours suivant la réception des paiements des plateformes. Tout solde inférieur à 10 € est reporté au mois suivant.
          </P>
        </Article>
        <Article n="4.3" titre="Transparence">
          <P>
            Chaque partie dispose d&apos;un accès à un tableau de bord individuel sur la Plateforme permettant de consulter en temps réel les streams générés, les revenus perçus et les versements effectués, ventilés par plateforme de diffusion.
          </P>
        </Article>
      </Section>

      <Section titre="Article 5 — Crédits et attribution">
        <P>
          L&apos;Œuvre doit être créditée sur toutes les plateformes de diffusion sous la forme suivante :
        </P>
        <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, padding: "14px 20px", margin: "12px 0" }}>
          <p style={{ fontSize: 13, color: "#fff", fontStyle: "italic", margin: 0 }}>
            [Titre de l&apos;Œuvre] — [Nom du Beatmaker] feat. [Nom du Rappeur]
          </p>
        </div>
        <P>
          Les métadonnées de l&apos;enregistrement doivent mentionner : compositeur (Beatmaker), auteur-interprète (Rappeur), producteur (Beatmaker), distribué via beatlink.
        </P>
        <P>
          Aucune des parties ne peut modifier, supprimer ou altérer les crédits de l&apos;Œuvre sans l&apos;accord écrit de l&apos;autre partie et de la Plateforme.
        </P>
      </Section>

      <Section titre="Article 6 — Garanties et déclarations">
        <Article n="6.1" titre="Garanties du Rappeur">
          <P>Le Rappeur déclare et garantit que :</P>
          <P>— Il est l&apos;unique titulaire des droits sur son Acapella ou dispose de toutes les autorisations nécessaires ;</P>
          <P>— L&apos;Acapella ne contient aucun élément protégé par des droits de tiers sans autorisation (samples, extraits musicaux tiers) ;</P>
          <P>— L&apos;Acapella ne contient aucun contenu illicite, diffamatoire, haineux ou portant atteinte aux droits de tiers ;</P>
          <P>— Il dispose de la pleine capacité juridique pour conclure le présent Contrat.</P>
        </Article>
        <Article n="6.2" titre="Garanties du Beatmaker">
          <P>Le Beatmaker déclare et garantit que :</P>
          <P>— Il est l&apos;unique auteur et compositeur de l&apos;Instrumentale ;</P>
          <P>— L&apos;Instrumentale ne contient aucun sample ou élément protégé sans autorisation ;</P>
          <P>— L&apos;Instrumentale ne porte pas atteinte aux droits de propriété intellectuelle de tiers ;</P>
          <P>— Il dispose de la pleine capacité juridique pour conclure le présent Contrat.</P>
        </Article>
      </Section>

      <Section titre="Article 7 — Responsabilité">
        <P>
          Chaque partie est seule responsable de la véracité des garanties qu&apos;elle a formulées. En cas de réclamation d&apos;un tiers liée à l&apos;apport d&apos;une partie (Acapella ou Instrumentale), la partie concernée s&apos;engage à défendre beatlink. et l&apos;autre partie, et à prendre en charge l&apos;intégralité des frais et indemnités qui en résulteraient.
        </P>
        <P>
          beatlink. ne saurait être tenu responsable des différends entre les parties concernant la qualité artistique de l&apos;Œuvre, dès lors que les obligations contractuelles prévues au présent Contrat ont été respectées.
        </P>
      </Section>

      <Section titre="Article 8 — Durée et résiliation">
        <Article n="8.1" titre="Durée">
          <P>
            Le présent Contrat est conclu pour la durée légale de protection des droits d&apos;auteur, soit 70 ans après le décès du dernier auteur survivant, conformément à l&apos;article L. 123-1 du Code de la propriété intellectuelle.
          </P>
        </Article>
        <Article n="8.2" titre="Résiliation pour faute">
          <P>
            En cas de manquement grave d&apos;une partie à ses obligations (non-paiement répété, violation des garanties, atteinte au droit moral), l&apos;autre partie peut notifier la résiliation du Contrat par écrit via la Plateforme, après mise en demeure restée sans effet pendant 15 jours.
          </P>
          <P>
            La résiliation n&apos;affecte pas les droits acquis : les revenus générés jusqu&apos;à la date de résiliation restent dus selon la répartition prévue.
          </P>
        </Article>
        <Article n="8.3" titre="Retrait de l'Œuvre">
          <P>
            Le retrait de l&apos;Œuvre des plateformes de diffusion requiert l&apos;accord écrit des deux parties et de beatlink. Les revenus générés antérieurement au retrait restent acquis et sont versés selon les échéances normales.
          </P>
        </Article>
      </Section>

      <Section titre="Article 9 — Loi applicable et juridiction compétente">
        <P>
          Le présent Contrat est régi par le droit français. En cas de litige relatif à son interprétation ou à son exécution, les parties s&apos;engagent à rechercher une solution amiable dans un délai de 30 jours.
        </P>
        <P>
          À défaut de résolution amiable, tout litige sera soumis à la compétence exclusive des tribunaux de Paris, nonobstant pluralité de défendeurs ou appel en garantie.
        </P>
      </Section>

      <Section titre="Article 10 — Divers">
        <Article n="10.1" titre="Intégralité de l'accord">
          <P>
            Le présent Contrat constitue l&apos;intégralité de l&apos;accord entre les parties concernant son objet et remplace tout accord antérieur, oral ou écrit.
          </P>
        </Article>
        <Article n="10.2" titre="Modifications">
          <P>
            Toute modification du présent Contrat doit faire l&apos;objet d&apos;un avenant écrit signé par les deux parties via la Plateforme. beatlink. se réserve le droit de modifier ses conditions générales avec un préavis de 30 jours notifié aux parties.
          </P>
        </Article>
        <Article n="10.3" titre="Indépendance des clauses">
          <P>
            Si une clause du présent Contrat était déclarée nulle ou inapplicable, les autres clauses resteraient en vigueur et la clause nulle serait remplacée par la disposition légale la plus proche de l&apos;intention des parties.
          </P>
        </Article>
        <Article n="10.4" titre="Acceptation électronique">
          <P>
            Conformément aux articles 1125 et suivants du Code civil français relatifs au contrat électronique, l&apos;acceptation du présent Contrat par voie électronique (clic de validation sur la Plateforme) a la même valeur juridique qu&apos;une signature manuscrite.
          </P>
        </Article>
      </Section>

      {/* Signature */}
      <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 28, marginTop: 8 }}>
        <p style={{ fontSize: 13, color: "#555", textAlign: "center", margin: "0 0 20px" }}>
          En téléchargeant l&apos;acapella, le Beatmaker reconnaît avoir lu, compris et accepté l&apos;intégralité des présentes conditions.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {["Le Rappeur", "Le Beatmaker"].map(p => (
            <div key={p} style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 10, padding: "16px 20px" }}>
              <p style={{ fontSize: 12, color: "#555", margin: "0 0 8px" }}>{p}</p>
              <p style={{ fontSize: 13, color: "#888", margin: 0, fontStyle: "italic" }}>Acceptation électronique via beatlink.</p>
              <p style={{ fontSize: 12, color: "#333", margin: "6px 0 0" }}>Date : générée automatiquement</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <p style={{ fontSize: 12, color: "#333", margin: 0 }}>
            beatlink. SAS — Paris, France — contact@beatlink.fr
          </p>
        </div>
      </div>

    </div>
  );
}
