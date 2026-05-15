import "./Nav.css";

interface NavLink {
  id: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: "hero",    label: "Auftakt" },
  { id: "daily",   label: "Tageskarte" },
  { id: "gallery", label: "Die Karten" },
  { id: "lexikon", label: "Lexikon" },
];

interface NavProps {
  activeSection: string;
  onJump: (id: string) => void;
}

export function Nav({ activeSection, onJump }: NavProps) {
  return (
    <nav className="nav shell" aria-label="Hauptnavigation">
      <div className="brand" aria-label="Arcana">
        <span className="brand-mark" aria-hidden>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="12" cy="12" r="6"  stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M12 2 L12 22 M2 12 L22 12" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </span>
        <span>ARCANA</span>
      </div>

      <ul className="nav-links" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              className={`nav-link${activeSection === link.id ? " active" : ""}`}
              onClick={() => onJump(link.id)}
              aria-current={activeSection === link.id ? "true" : undefined}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-symbols" aria-hidden>☾ ☿ ♀ ♁</div>
    </nav>
  );
}
