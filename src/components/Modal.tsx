import { useState, useEffect, useRef } from "react";
import { TarotCard } from "./TarotCard";
import type { TarotCard as TarotCardType } from "../data/tarot";
import { toRoman, ELEMENT_GLYPH } from "../data/tarot";
import "./Modal.css";

interface ModalProps {
  card: TarotCardType | null;
  onClose: () => void;
}

export function Modal({ card, onClose }: ModalProps) {
  const [reversed, setReversed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset reversed state and manage focus when card changes
  useEffect(() => {
    if (!card) return;
    setReversed(false);
    // Focus the close button when modal opens
    requestAnimationFrame(() => closeRef.current?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card, onClose]);

  if (!card) return null;

  const isMajor = card.type === "major";
  const roman = isMajor
    ? toRoman(card.n)
    : card.n <= 10
    ? toRoman(card.n)
    : (card as Extract<TarotCardType, { type: "minor" }>).rank;

  const about = isMajor
    ? `${card.name} ist Teil der großen Arkana — der zweiundzwanzig archetypischen Stationen einer Seelenreise. Sie spricht von ${card.keywords?.[0]?.toLowerCase() ?? "einer Erfahrung"} als Ereignis von Gewicht.`
    : `${card.name} gehört zu den ${(card as Extract<TarotCardType, { type: "minor" }>).suitName} und ist mit dem Element ${card.element} verbunden. Die kleinen Arkana beschreiben die Bewegungen des Alltags — kleine Schritte, die zusammen ein Leben formen.`;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Kartendetail: ${card.name}`}
      ref={overlayRef}
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Modal schließen"
        >
          ×
        </button>

        {/* Left column: card + toggle */}
        <div className="modal-card-col">
          <TarotCard card={card} flipped reversed={reversed} />
          <div className="modal-toggles">
            <button
              className={`filter${!reversed ? " active" : ""}`}
              onClick={() => setReversed(false)}
              aria-pressed={!reversed}
            >
              Aufrecht
            </button>
            <button
              className={`filter${reversed ? " active" : ""}`}
              onClick={() => setReversed(true)}
              aria-pressed={reversed}
            >
              Umgekehrt
            </button>
          </div>
        </div>

        {/* Right column: details */}
        <div className="modal-body">
          <div className="modal-roman">
            {isMajor ? "GROSSES ARKANUM · " : "KLEINES ARKANUM · "}{roman}
          </div>
          <h1 className="modal-title">{card.name}</h1>

          {card.keywords.length > 0 && (
            <div className="keywords" aria-label="Schlüsselworte">
              {card.keywords.map((k) => (
                <span key={k} className="kw">{k}</span>
              ))}
            </div>
          )}

          <div className="modal-meta">
            <div className="meta-item">
              <span className="k">Element</span>
              <span className="v">
                <span className="glyph" aria-hidden>{ELEMENT_GLYPH[card.element]}</span>
                {card.element}
              </span>
            </div>
            {isMajor && "planet" in card && (
              <div className="meta-item">
                <span className="k">Planet</span>
                <span className="v">{(card as Extract<TarotCardType, { type: "major" }>).planet}</span>
              </div>
            )}
            {"glyph" in card && (
              <div className="meta-item">
                <span className="k">Zeichen</span>
                <span className="v gold" style={{ fontSize: 24, fontVariantEmoji: "text" } as React.CSSProperties}>{card.glyph}&#xFE0E;</span>
              </div>
            )}
            {!isMajor && (
              <div className="meta-item">
                <span className="k">Farbe</span>
                <span className="v">{(card as Extract<TarotCardType, { type: "minor" }>).suitName}</span>
              </div>
            )}
          </div>

          <div className="meaning-block">
            <h4>{reversed ? "Umgekehrt" : "Aufrecht"}</h4>
            <p>{reversed ? card.rev : card.up}</p>
          </div>
          <div className="meaning-block">
            <h4>Über die Karte</h4>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
