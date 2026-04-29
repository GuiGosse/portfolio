import { useEffect, useRef, useState } from "react";
import { HoloCard } from "./HoloCard";

const PROJECTS = [
  {
    n: "01",
    title: "Motor de Automação de Contratos",
    stack: ["Laravel", "phpWord", "PHP", "MySQL"],
    desc: "Sistema interno para geração automática de contratos em DOCX/PDF via templates dinâmicos. Resultado: −2h por contrato.",
    metric: "2h economizadas por contrato",
    status: "PUBLICADO",
    link: "https://github.com/GuiGosse",
  },
  {
    n: "02",
    title: "Automatizador de Conteúdo Social",
    stack: ["Laravel", "JavaScript", "html2canvas", "APIs Sociais"],
    desc: "Geração dinâmica de imagens para redes sociais com publicação automatizada via API. Liberou a equipe de design para tarefas criativas.",
    metric: "100% de publicação automatizada",
    status: "PUBLICADO",
    link: "https://github.com/GuiGosse",
  },
  {
    n: "03",
    title: "[EM DESENVOLVIMENTO]",
    stack: ["Em breve"],
    desc: "Próximo projeto sendo compilado...",
    metric: "fique ligado",
    status: "EM ANDAMENTO",
    placeholder: true,
  },
  {
    n: "04",
    title: "[EM DESENVOLVIMENTO]",
    stack: ["Em breve"],
    desc: "Próximo projeto sendo compilado...",
    metric: "fique ligado",
    status: "EM ANDAMENTO",
    placeholder: true,
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  // distance in px the track needs to translate horizontally
  const [maxX, setMaxX] = useState(0);
  // total vertical scroll length to allocate to this section
  const [scrollLen, setScrollLen] = useState(0);

  useEffect(() => {
    const compute = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackWidth = track.scrollWidth;
      const viewportW = window.innerWidth;
      const distance = Math.max(0, trackWidth - viewportW);
      setMaxX(distance);
      // each "screen" of horizontal distance ~= one screen of vertical scroll
      setScrollLen(distance);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sec = sectionRef.current;
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        const vh = window.innerHeight;
        // section total height = vh (sticky viewport) + scrollLen
        const total = sec.offsetHeight - vh;
        if (total <= 0) {
          setProgress(0);
          return;
        }
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        setProgress(scrolled / total);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollLen]);

  const translate = -progress * maxX;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100vh + ${scrollLen}px)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 mb-10">
          <div className="sec-label reveal">// 003 — PROJETOS</div>
          <h2 className="reveal font-display font-black leading-[1]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Trabalhos <span style={{ color: "var(--gold-bright)" }}>selecionados</span>
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 px-6 md:px-10 will-change-transform"
            style={{
              width: "max-content",
              transform: `translate3d(${translate}px, 0, 0)`,
              transition: "transform 0.1s linear",
            }}
          >
            {PROJECTS.map(p => (
              <HoloCard key={p.n} className="w-[80vw] sm:w-[480px] md:w-[520px] p-8 md:p-10 relative shrink-0">
                <div className="absolute right-4 top-4 font-display font-black select-none pointer-events-none" style={{ fontSize: "9rem", lineHeight: 1, color: "var(--gold-bright)", opacity: 0.06 }}>
                  {p.n}
                </div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="font-mono text-[0.7rem] tracking-[0.3em]" style={{ color: "var(--text-dim)" }}>PROJETO / {p.n}</span>
                  <span
                    className={`font-mono text-[0.65rem] tracking-widest px-2 py-1 ${p.status === "EM ANDAMENTO" ? "blink" : ""}`}
                    style={{
                      color: p.status === "EM ANDAMENTO" ? "var(--gold-bright)" : "var(--neon-primary)",
                      border: `1px solid ${p.status === "EM ANDAMENTO" ? "var(--gold-bright)" : "var(--neon-primary)"}`,
                    }}
                  >[{p.status}]</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 relative z-10" style={{ color: p.placeholder ? "var(--text-dim)" : "var(--text-primary, #E8FFF0)" }}>
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                  {p.stack.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: "rgba(232,255,240,0.75)" }}>{p.desc}</p>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="font-mono text-[0.6rem] tracking-widest" style={{ color: "var(--text-dim)" }}>DESTAQUE</div>
                    <div className="font-mono text-sm" style={{ color: "var(--gold-bright)" }}>{p.metric}</div>
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="font-mono text-xs tracking-widest hover:underline" style={{ color: "var(--neon-primary)" }}>
                      GITHUB →
                    </a>
                  )}
                </div>
              </HoloCard>
            ))}
          </div>
        </div>

        {/* Neon progress bar (substitui o scroll horizontal manual) */}
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 mt-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[0.65rem] tracking-[0.3em]" style={{ color: "var(--text-dim)" }}>
              {String(Math.round(progress * (PROJECTS.length - 1)) + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
            <div className="flex-1 h-[2px] relative overflow-hidden" style={{ background: "rgba(0,255,127,0.12)" }}>
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${progress * 100}%`,
                  background: "linear-gradient(90deg, var(--neon-primary), var(--neon-hot))",
                  boxShadow: "0 0 12px var(--neon-primary)",
                }}
              />
            </div>
            <span className="font-mono text-[0.65rem] tracking-[0.3em]" style={{ color: "var(--neon-primary)" }}>
              ROLAR ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
