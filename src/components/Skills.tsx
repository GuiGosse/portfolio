type Level = "expert" | "avançado" | "intermediário";

const LEVEL_COLOR: Record<Level, string> = {
  expert: "var(--neon-primary)",
  avançado: "var(--gold-bright)",
  intermediário: "rgba(255,255,255,0.3)",
};

const CATS = [
  {
    title: "FRONTEND",
    items: [
      { name: "HTML/CSS/JS", level: "expert" as Level },
      { name: "React", level: "expert" as Level },
      { name: "Vue.js", level: "intermediário" as Level },
      { name: "Tailwind", level: "avançado" as Level },
      { name: "Bootstrap", level: "avançado" as Level },
      { name: "TSX", level: "intermediário" as Level },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { name: "Laravel", level: "expert" as Level },
      { name: "PHP", level: "expert" as Level },
      { name: "Node.js", level: "intermediário" as Level },
    ],
  },
  {
    title: "BANCOS DE DADOS",
    items: [
      { name: "MySQL", level: "avançado" as Level },
      { name: "MongoDB", level: "intermediário" as Level },
    ],
  },
  {
    title: "FERRAMENTAS",
    items: [
      { name: "Git", level: "expert" as Level },
      { name: "Docker", level: "intermediário" as Level },
    ],
  },
  {
    title: "MARKETING",
    items: [
      { name: "SEO", level: "expert" as Level },
      { name: "GA4", level: "avançado" as Level },
      { name: "GSC", level: "avançado" as Level },
    ],
  },
  {
    title: "OUTRAS",
    items: [
      { name: "WordPress", level: "expert" as Level },
      { name: "Canva", level: "intermediário" as Level },
      { name: "Power BI", level: "intermediário" as Level },
      { name: "N8N", level: "intermediário" as Level }
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-10 py-32" style={{ background: "linear-gradient(180deg, transparent, rgba(7,20,16,0.6), transparent)" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="sec-label reveal">// 002 — STACK TECNOLÓGICO</div>
        <h2 className="reveal font-display font-black leading-[1] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          Arsenal <span style={{ color: "var(--neon-primary)" }}>técnico</span>
        </h2>

        <div className="reveal flex items-center gap-5 mb-16 font-mono text-[0.65rem] tracking-widest">
          {(["expert", "avançado", "intermediário"] as Level[]).map(l => (
            <span key={l} className="flex items-center gap-1.5 opacity-70">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: LEVEL_COLOR[l] }} />
              {l.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATS.map((c, ci) => (
            <div key={c.title} className="holo-card hud-clip p-6 reveal" style={{ animationDelay: `${ci * 80}ms` }}>
              <div className="font-mono text-[0.7rem] tracking-[0.3em] mb-4" style={{ color: "var(--gold-bright)" }}>
                {String(ci + 1).padStart(2, "0")} / {c.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {c.items.map((it, i) => (
                  <span
                    key={it.name}
                    className="chip flex items-center gap-1.5"
                    style={{ animation: `fadeUp 0.5s ${ci * 100 + i * 50}ms backwards` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: LEVEL_COLOR[it.level] }} />
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
