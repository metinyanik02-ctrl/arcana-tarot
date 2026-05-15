import { useState, useEffect, useRef } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Daily } from "./components/Daily";
import { Gallery } from "./components/Gallery";
import { Modal } from "./components/Modal";
import { Lexikon } from "./components/Lexikon";
import { Footer } from "./components/Footer";
import type { TarotCard } from "./data/tarot";

const SECTION_IDS = ["hero", "daily", "gallery", "lexikon"] as const;

export function App() {
  const [open, setOpen] = useState<TarotCard | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollY = useRef(0);

  // Section observer — highlights active nav link
  useEffect(() => {
    const els = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Lock body scroll while modal is open (position:fixed preserves scroll on iOS)
  useEffect(() => {
    if (open) {
      scrollY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = "100%";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY.current);
      };
    }
  }, [open]);

  function jump(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  }

  return (
    <>
      <Nav activeSection={activeSection} onJump={jump} />
      <main>
        <Hero />
        <Daily onOpen={setOpen} />
<Gallery onOpen={setOpen} />
        <Lexikon />
      </main>
      <Footer />
      <Modal card={open} onClose={() => setOpen(null)} />
    </>
  );
}
