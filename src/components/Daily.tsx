import { useState, useEffect } from "react";
import { TarotCard } from "./TarotCard";
import type { TarotCard as TarotCardType } from "../data/tarot";
import { ALL_CARDS, dailyIndex } from "../data/tarot";
import "./Daily.css";

interface DailyProps {
  onOpen: (card: TarotCardType) => void;
}

export function Daily({ onOpen }: DailyProps) {
  const [idx, setIdx] = useState(dailyIndex);
  const [flipped, setFlipped] = useState(false);
  const [reversed, setReversed] = useState(false);

  const card = ALL_CARDS[idx];

  // Start face-down, flip after 900ms on mount
  useEffect(() => {
    const t = setTimeout(() => setFlipped(true), 900);
    return () => clearTimeout(t);
  }, []);

  function draw() {
    setFlipped(false);
    setTimeout(() => {
      setIdx(Math.floor(Math.random() * ALL_CARDS.length));
      setReversed(Math.random() < 0.3);
      setTimeout(() => setFlipped(true), 250);
    }, 450);
  }

  return (
    <section className="section" id="daily">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">I · Auflage des Tages</span>
          <h2>Die Karte, die heute zu dir spricht</h2>
          <div className="divider" aria-hidden>☽ &nbsp;&nbsp; ✦ &nbsp;&nbsp; ☉</div>
        </div>

        <div className="daily">
          <div className="daily-card-wrap">
            <TarotCard
              card={card}
              flipped={flipped}
              reversed={reversed}
              onClick={() => flipped ? onOpen(card) : setFlipped(true)}
            />
          </div>

          <div className="daily-body">
            <div className="eyebrow">{reversed ? "Umgekehrt" : "Aufrecht"}</div>
            <h2 className="daily-title">{card.name}</h2>
            <p className="daily-meaning">{reversed ? card.rev : card.up}</p>

            <div className="daily-meta">
              {card.element && (
                <div className="daily-meta-item">
                  Element · <b>{card.element}</b>
                </div>
              )}
              {"planet" in card && card.planet && (
                <div className="daily-meta-item">
                  Planet · <b>{card.planet}</b>
                </div>
              )}
              <div className="daily-meta-item">
                Arkanum · <b>{card.type === "major" ? "Groß" : "Klein"}</b>
              </div>
            </div>

            <div className="daily-actions">
              <button className="btn" onClick={draw}>Neu ziehen</button>
              <button className="btn btn-ghost" onClick={() => onOpen(card)}>
                Bedeutung lesen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
