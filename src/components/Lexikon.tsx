import "./Lexikon.css";

const TERMS = [
  { t: "Arkanum",      d: "lat. „Geheimnis“. Die Karten teilen sich in 22 große und 56 kleine Arkana." },
  { t: "Spread",       d: "Eine Auslegung — die Anordnung gezogener Karten in einer bedeutungstragenden Form." },
  { t: "Signifikator", d: "Eine Karte, die den Fragenden oder die Frage symbolisch repräsentiert." },
  { t: "Querulator",   d: "Der Fragende selbst. Mittelalterlich: derjenige, der die Karten befragt." },
  { t: "Umkehrlicht",  d: "Eine umgekehrt gezogene Karte — gespiegelte Bedeutung, oft innerlich oder blockiert." },
  { t: "Hofkarten",    d: "Page, Ritter, Königin, König — Personen oder Aspekte des Selbst." },
];

export function Lexikon() {
  return (
    <section className="section" id="lexikon">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">III &middot; Glossarium</span>
          <h2>Vokabular der Auflage</h2>
        </div>
        <dl className="lexikon-grid">
          {TERMS.map((x) => (
            <div key={x.t} className="lexikon-entry">
              <dt className="lexikon-term">
                <span className="lexikon-dot" aria-hidden="true" />
                {x.t}
              </dt>
              <dd className="muted lexikon-def">{x.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
