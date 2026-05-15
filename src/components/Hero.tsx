import { Starfield } from "./Starfield";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <Starfield count={80} />
      <div className="shell hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow">78 Karten · Eine Sprache</span>
        </div>
        <h1>Arcana</h1>
        <p className="hero-sub">
          Ein Studium der großen und kleinen Arkana — Symbole, Bedeutung
          und das, was zwischen den Karten liegt.
        </p>
        <div className="hero-ornament" aria-hidden>
          ☉ &nbsp; ☾ &nbsp; ✦ &nbsp; ☿ &nbsp; ♀
        </div>
      </div>
    </section>
  );
}
