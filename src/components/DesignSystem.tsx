import "./DesignSystem.css";

const SWATCHES = [
  { name: "Tinte",     hex: "#07050d", bg: "#07050d", fg: "var(--parchment)" },
  { name: "Pflaume",   hex: "#3a1a4a", bg: "#3a1a4a", fg: "var(--parchment)" },
  { name: "Gold",      hex: "#c9a96e", bg: "#c9a96e", fg: "var(--ink)" },
  { name: "Pergament", hex: "#e8dcc0", bg: "#e8dcc0", fg: "var(--ink)" },
];

export function DesignSystem() {
  return (
    <section className="section" id="system">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">II · Atelier</span>
          <h2>Sprache des Decks</h2>
          <p className="muted ds-intro">
            Vier Töne, zwei Stimmen, ein Vokabular aus astrologischen Zeichen.
            Das Vertraute soll sich in den Karten wiederfinden.
          </p>
        </div>

        <div className="ds-grid">
          {SWATCHES.map((s) => (
            <div
              key={s.name}
              className="swatch"
              style={{ background: s.bg, color: s.fg, borderColor: "rgba(255,255,255,0.1)" }}
            >
              <span className="sw-name">{s.name}</span>
              <span className="sw-hex">{s.hex.toUpperCase()}</span>
            </div>
          ))}
        </div>

        <div className="ds-type-row">
          <div>
            <div className="eyebrow eyebrow-dim ds-type-label">Display · Cormorant Garamond</div>
            <div className="ds-specimen-display">Aa Æ ʃ</div>
            <div className="muted ds-specimen-quote">
              „Was unten ist, ist wie das, was oben ist."
            </div>
          </div>
          <div>
            <div className="eyebrow eyebrow-dim ds-type-label">Inschrift · Cinzel</div>
            <div className="ds-specimen-caps">ARCANUM · LUX</div>
            <div className="muted ds-specimen-note">
              Verwendet für Überschriften in Versalien, Bildunterschriften und
              kleine Inschriften am Rand der Karten.
            </div>
          </div>
          <div>
            <div className="eyebrow eyebrow-dim ds-type-label">Symbolik</div>
            <div className="ds-glyphs">
              {["☉","☽","☿","♀","♂","♃","♄","♅","♆","♇"].map((g) => (
                <span key={g}>{g}</span>
              ))}
            </div>
            <div className="ds-glyphs ds-glyphs-zodiac">
              {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((g) => (
                <span key={g}>{g}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
