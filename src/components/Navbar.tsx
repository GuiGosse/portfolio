import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Projetos" },
  { id: "experience", label: "Experiência" },
  { id: "contact", label: "Contato" },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*";

function DecryptLink({ label, href }: { label: string; href: string }) {
  const [text, setText] = useState(label);
  const scramble = () => {
    let i = 0;
    const id = setInterval(() => {
      setText(label.split("").map((c, idx) => idx < i ? c : CHARS[Math.floor(Math.random() * CHARS.length)]).join(""));
      i++;
      if (i > label.length) { clearInterval(id); setText(label); }
    }, 40);
  };
  return (
    <a
      href={href}
      onMouseEnter={scramble}
      className="font-mono text-xs tracking-[0.2em] uppercase transition-colors hover:text-[color:var(--neon-primary)]"
      style={{ color: "var(--text-dim)" }}
    >
      {text}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-[900] transition-all"
        style={{
          background: scrolled ? "rgba(3,15,6,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,255,127,0.12)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#hero" className="font-display text-2xl font-black tracking-wider" style={{ color: "var(--neon-primary)", textShadow: "0 0 12px rgba(0,255,127,0.5)" }}>
            GG<span style={{ color: "var(--gold-bright)" }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(l => <DecryptLink key={l.id} label={l.label} href={`#${l.id}`} />)}
          </div>
          <a href="#contact" className="hidden md:inline-flex btn-neon gold !py-2 !px-4 text-[0.7rem]">Contrate-me</a>
          <button
            className="md:hidden font-mono text-2xl"
            style={{ color: "var(--neon-primary)" }}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >≡</button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[950] flex flex-col items-center justify-center gap-8" style={{ background: "rgba(1,10,3,0.97)", backdropFilter: "blur(12px)" }}>
          <button
            className="absolute top-6 right-6 font-mono text-3xl"
            style={{ color: "var(--neon-primary)" }}
            onClick={() => setOpen(false)}
          >×</button>
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl tracking-wider"
              style={{ color: "var(--neon-primary)", animation: `fadeUp 0.5s ${i * 0.08}s backwards` }}
            >{l.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
