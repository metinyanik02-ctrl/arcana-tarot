import { useState, useMemo } from "react";
import { TarotCard } from "./TarotCard";
import type { TarotCard as TarotCardType } from "../data/tarot";
import { ALL_CARDS } from "../data/tarot";
import "./Gallery.css";

type FilterKey = "all" | "major" | "wands" | "cups" | "swords" | "pentacles";

const FILTERS: { key: FilterKey; label: string; glyph: string }[] = [
  { key: "all",       label: "Alle 78",      glyph: "✦" },
  { key: "major",     label: "Major Arcana", glyph: "☉" },
  { key: "wands",     label: "Stäbe",        glyph: "🜂" },
  { key: "cups",      label: "Kelche",       glyph: "🜄" },
  { key: "swords",    label: "Schwerter",    glyph: "🜁" },
  { key: "pentacles", label: "Münzen",       glyph: "🜃" },
];

interface GalleryProps {
  onOpen: (card: TarotCardType) => void;
}

export function Gallery({ onOpen }: GalleryProps) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const cards = useMemo(() => {
    if (filter === "all") return ALL_CARDS;
    if (filter === "major") return ALL_CARDS.filter((c) => c.type === "major");
    return ALL_CARDS.filter((c) => c.type === "minor" && c.suit === filter);
  }, [filter]);

  return (
    <section className="section" id="gallery">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">II · Bibliothek</span>
          <h2>Die achtundsiebzig Pforten</h2>
          <p className="muted gallery-sub">
            Berühre eine Karte, um ihre Stimme zu hören. Jede trägt eine
            Bedeutung aufrecht — und eine andere im Umkehrlicht.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Karten filtern">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
            >
              <span className="glyph" aria-hidden>{f.glyph}</span>
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        <div className="gallery" role="list" aria-label="Tarotkarten Galerie">
          {cards.map((card, i) => {
            const key = `${card.type}-${card.type === "minor" ? card.suit : "M"}-${card.n}-${i}`;
            return (
              <div className="gallery-item" key={key} role="listitem">
                <TarotCard card={card} flipped onClick={() => onOpen(card)} />
                <div className="card-label">{card.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
