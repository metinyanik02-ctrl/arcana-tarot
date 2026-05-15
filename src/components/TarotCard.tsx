import "./TarotCard.css";
import type { TarotCard as TarotCardType, Suit } from "../data/tarot";
import { toRoman } from "../data/tarot";

// ─── Suit ornament SVGs ───────────────────────────────────────────
function SuitOrnament({ suit }: { suit: Suit }) {
  const stroke = "var(--gold-deep)";
  if (suit === "wands") return (
    <svg viewBox="0 0 60 60" className="suit-ornament" aria-hidden>
      <line x1="30" y1="6" x2="30" y2="54" stroke={stroke} strokeWidth="1" />
      <circle cx="30" cy="8" r="3" fill={stroke} />
      <path d="M14 30 L30 14 L46 30 L30 46 Z" stroke={stroke} strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  );
  if (suit === "cups") return (
    <svg viewBox="0 0 60 60" className="suit-ornament" aria-hidden>
      <path d="M18 22 Q30 38 42 22" stroke={stroke} strokeWidth="1" fill="none" />
      <line x1="30" y1="34" x2="30" y2="46" stroke={stroke} strokeWidth="1" />
      <line x1="22" y1="46" x2="38" y2="46" stroke={stroke} strokeWidth="1" />
    </svg>
  );
  if (suit === "swords") return (
    <svg viewBox="0 0 60 60" className="suit-ornament" aria-hidden>
      <line x1="30" y1="6" x2="30" y2="50" stroke={stroke} strokeWidth="1" />
      <line x1="20" y1="40" x2="40" y2="40" stroke={stroke} strokeWidth="1" />
      <circle cx="30" cy="52" r="2" fill={stroke} />
    </svg>
  );
  if (suit === "pentacles") return (
    <svg viewBox="0 0 60 60" className="suit-ornament" aria-hidden>
      <polygon
        points="30,10 35.9,26.2 53,26.2 39.1,36.5 44.5,52.8 30,42.5 15.5,52.8 20.9,36.5 7,26.2 24.1,26.2"
        stroke={stroke} strokeWidth="0.8" fill="none"
      />
    </svg>
  );
  return null;
}

// Force Unicode text presentation (VS15) to prevent OS emoji color rendering
const VS15 = "︎";

// ─── Art panels ───────────────────────────────────────────────────
function MajorArt({ glyph }: { glyph: string }) {
  return (
    <div className="card-art">
      <div className="ring-outer" />
      <div className="ticks" />
      <div className="ring-inner" />
      <span className="card-glyph">{glyph}{VS15}</span>
    </div>
  );
}

function MinorArt({ card }: { card: TarotCardType & { type: "minor" } }) {
  const isCourt = card.n >= 11;
  const courtLabel = card.n === 11 ? "P" : card.n === 12 ? "Kn" : card.n === 13 ? "R" : "K";
  return (
    <div className="card-art">
      <div className="ring-outer" />
      <div className="ticks" />
      <div className="ring-inner" />
      <SuitOrnament suit={card.suit} />
      {isCourt ? (
        <span className="card-glyph" style={{ fontSize: "54%" }}>{courtLabel}</span>
      ) : (
        <span className="card-glyph" style={{ fontSize: card.n > 5 ? "40%" : "60%" }}>{card.glyph}{VS15}</span>
      )}
    </div>
  );
}

// ─── TarotCard ────────────────────────────────────────────────────
interface TarotCardProps {
  card: TarotCardType;
  flipped?: boolean;
  reversed?: boolean;
  onClick?: () => void;
}

export function TarotCard({ card, flipped = true, reversed = false, onClick }: TarotCardProps) {
  const isMajor = card.type === "major";
  const roman = isMajor
    ? toRoman(card.n)
    : card.n <= 10
    ? toRoman(card.n)
    : (card as TarotCardType & { type: "minor" }).rank;
  const suitTag = isMajor ? "MAJOR" : (card as TarotCardType & { type: "minor" }).suitName;

  const ariaLabel = flipped
    ? `${card.name}${reversed ? ", umgekehrt" : ""}`
    : "Verdeckte Tarotkarte";

  return (
    <button
      className={`card${flipped ? " flipped" : ""}${reversed ? " reversed" : ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ background: "none", border: "none", padding: 0, display: "block", width: "100%" }}
    >
      <div className="card-inner">
        {/* Back face — visible when flipped=false */}
        <div className="card-face" aria-hidden={flipped}>
          <div className="card-back-art">
            <div className="card-back-mark">✦</div>
          </div>
        </div>

        {/* Front face — pre-rotated 180°, visible when flipped=true */}
        <div className="card-face card-face-front" aria-hidden={!flipped}>
          <div className="card-frame">
            <div className="card-top">
              <span className="roman">{roman}</span>
              <span className="suit-tag">{suitTag}</span>
            </div>
            <div className="card-art-wrap">
              {isMajor
                ? <MajorArt glyph={(card as TarotCardType & { type: "major" }).glyph} />
                : <MinorArt card={card as TarotCardType & { type: "minor" }} />
              }
            </div>
            <div className="card-name">{card.name}</div>
            <div className="card-bot">
              <span className="roman">{roman}</span>
              <span className="suit-tag">{suitTag}</span>
            </div>
          </div>
          <div className="card-corners">
            <span aria-hidden />
            <span aria-hidden />
          </div>
        </div>
      </div>
    </button>
  );
}
