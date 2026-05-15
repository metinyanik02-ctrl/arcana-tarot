import { useMemo } from "react";
import "./Starfield.css";

interface Star {
  top: number;
  left: number;
  dur: number;
  delay: number;
  size: number;
}

interface StarfieldProps {
  count?: number;
}

export function Starfield({ count = 80 }: StarfieldProps) {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }, () => ({
        top:   Math.random() * 100,
        left:  Math.random() * 100,
        dur:   2 + Math.random() * 5,
        delay: Math.random() * 4,
        size:  Math.random() * 1.6 + 0.6,
      })),
    [count],
  );

  return (
    <div className="starfield" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            top:    `${s.top}%`,
            left:   `${s.left}%`,
            width:  `${s.size}px`,
            height: `${s.size}px`,
            "--dur":   `${s.dur}s`,
            "--delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
