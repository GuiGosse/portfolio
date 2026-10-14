const ITEMS = [
  {
    period: "2022 → 2026",
    title: "Desenvolvedor · Canal Solar",
    place: "Campinas, SP",
    desc: "Responsável pelo departamento de TI. Desenvolvimento de soluções internas, automações e sistemas web.",
    tag: " Ferramentas de produtividade · Automação de contratos · Automação de mídias sociais · Responsável pelos sites",
   // badge: "ATUAL",
  },
  {
    period: "2022",
    title: "Graduação em Sistemas de Informação",
    place: "PUC-Campinas",
    desc: "Formação focada em desenvolvimento, banco de dados e arquitetura de sistemas.",
  },
  {
    period: "2022 — 2023",
    title: "Cursos Avançados",
    place: "Udemy · B7Web",
    desc: "Web Moderno Completo · WordPress · PHP · jQuery — aprofundamento em stack full-stack moderna.",
  },
  {
    period: "2013",
    title: "Técnico em Administração",
    place: "Meu Colégio",
    desc: "Base técnica em gestão e processos de negócio.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-10 py-32">
      <div className="max-w-[1100px] mx-auto">
        <div className="sec-label reveal">// 005 — TRAJETÓRIA</div>
        <h2 className="reveal font-display font-black leading-[1] mb-20" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          Linha do <span style={{ color: "var(--neon-primary)" }}>tempo</span>
        </h2>

        <div className="relative">
          <div className="tl-line hidden md:block" />
          <div className="space-y-16">
            {ITEMS.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <div key={i} className="md:grid md:grid-cols-2 md:gap-12 items-center reveal">
                  <div className={`${left ? "md:order-1 md:text-right md:pr-8" : "md:order-3 md:pl-8"}`}>
                    <div className="holo-card hud-clip p-6 inline-block text-left max-w-md">
                      <div className="font-mono text-[0.7rem] tracking-[0.3em] mb-2" style={{ color: "var(--gold-bright)" }}>
                        {it.period}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-1" style={{ color: "var(--text-primary, #E8FFF0)" }}>{it.title}</h3>
                      <div className="font-mono text-xs mb-3" style={{ color: "var(--neon-primary)" }}>{it.place}</div>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(232,255,240,0.7)" }}>{it.desc}</p>
                      {it.tag && <div className="mt-3 font-mono text-[0.7rem]" style={{ color: "var(--text-dim)" }}>{it.tag}</div>}
                      {it.badge && (
                        <div className="mt-3 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-widest px-2 py-1 blink" style={{ color: "var(--neon-primary)", border: "1px solid var(--neon-primary)" }}>
                          ● {it.badge}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden md:flex md:order-2 justify-center">
                    <div className="tl-dot" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
