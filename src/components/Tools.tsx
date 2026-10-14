import { HoloCard } from "./HoloCard";

type ToolStatus = "available" | "development" | "coming-soon";

type Tool = {
  n: string;
  title: string;
  stack: string[];
  desc: string;
  metric: string;
  status: ToolStatus;
  link?: string;
  linkLabel?: string;
};

const TOOLS: Tool[] = [
  {
    n: "01",
    title: "Automação de Contratos",
    stack: ["Laravel", "PHPWord", "MySQL"],
    desc: "Gera contratos em DOCX e PDF a partir de modelos dinâmicos, reduzindo o trabalho manual e padronizando documentos.",
    metric: "Até 2h economizadas por contrato",
    status: "available",
  },
  {
    n: "02",
    title: "Automação de Redes Sociais",
    stack: ["Laravel", "JavaScript", "APIs"],
    desc: "Automatiza a criação de imagens para publicações e integra o processo de divulgação com APIs de redes sociais.",
    metric: "Menos tarefas manuais na publicação",
    status: "available",
  },
  {
    n: "03",
    title: "Gerador de Conteúdo HTML",
    stack: ["Laravel", "React", "Tailwind CSS", "Redis"],
    desc: "Gera estruturas HTML para campanhas de e-mail marketing, facilitando a criação de conteúdos compatíveis com o fluxo de trabalho do RD Station.",
    metric: "Mais agilidade na produção de campanhas",
    status: "development",
  },
  {
    n: "04",
    title: "Gerador de Relatórios",
    stack: ["Python", "Pandas", "Excel"],
    desc: "Consolida dados e automatiza a geração de relatórios para reduzir tarefas repetitivas e facilitar a análise de informações.",
    metric: "Menos tempo na preparação de relatórios",
    status: "coming-soon",
  },
];

const STATUS_CONFIG: Record<
  ToolStatus,
  { label: string; color: string; animate?: boolean }
> = {
  available: {
    label: "DISPONÍVEL",
    color: "var(--neon-primary)",
  },
  development: {
    label: "EM DESENVOLVIMENTO",
    color: "var(--gold-bright)",
    animate: true,
  },
  "coming-soon": {
    label: "EM BREVE",
    color: "var(--text-dim)",
  },
};

export function Tools() {
  return (
    <section id="tools" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Cabeçalho */}
        <div className="mb-12 md:mb-16">
          <div className="sec-label reveal">
            // 004 — FERRAMENTAS
          </div>

          <h2
            className="reveal font-display font-black leading-[1]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Ferramentas{" "}
            <span style={{ color: "var(--gold-bright)" }}>
              que facilitam
            </span>
          </h2>

          <p
            className="mt-5 max-w-2xl text-sm leading-relaxed md:text-base"
            style={{ color: "var(--text-dim)" }}
          >
            Automações e utilitários criados para simplificar processos,
            eliminar tarefas repetitivas e aumentar a produtividade.
          </p>
        </div>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {TOOLS.map((tool) => {
            const status = STATUS_CONFIG[tool.status];

            return (
              <HoloCard
                key={tool.n}
                className="relative flex h-full flex-col p-7 md:p-8"
              >
                {/* Número decorativo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-3 select-none font-display text-[7rem] font-black leading-none"
                  style={{
                    color: "var(--gold-bright)",
                    opacity: 0.06,
                  }}
                >
                  {tool.n}
                </div>

                {/* Identificação e status */}
                <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span
                    className="font-mono text-[0.7rem] tracking-[0.2em]"
                    style={{ color: "var(--text-dim)" }}
                  >
                    FERRAMENTA / {tool.n}
                  </span>

                  <span
                    className="inline-flex items-center gap-2 border px-2 py-1 font-mono text-[0.6rem] tracking-wider"
                    style={{
                      color: status.color,
                      borderColor: status.color,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: status.color,
                        ...(status.animate
                          ? { animation: "blink 1.5s infinite" }
                          : {}),
                      }}
                    />
                    {status.label}
                  </span>
                </div>

                {/* Nome */}
                <h3
                  className="relative z-10 mb-5 font-display text-2xl font-bold"
                  style={{ color: "var(--text-primary, #E8FFF0)" }}
                >
                  {tool.title}
                </h3>

                {/* Tecnologias */}
                <div className="relative z-10 mb-5 flex flex-wrap gap-2">
                  {tool.stack.map((technology) => (
                    <span key={technology} className="chip">
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Descrição */}
                <p
                  className="relative z-10 mb-8 flex-1 text-sm leading-relaxed"
                  style={{ color: "rgba(232,255,240,0.75)" }}
                >
                  {tool.desc}
                </p>

                {/* Benefício */}
                <div
                  className="relative z-10 mt-auto border-t pt-5"
                  style={{ borderColor: "rgba(0,255,127,0.15)" }}
                >
                  <div
                    className="mb-2 font-mono text-[0.6rem] tracking-[0.2em]"
                    style={{ color: "var(--text-dim)" }}
                  >
                    PRINCIPAL BENEFÍCIO
                  </div>

                  <p
                    className="font-mono text-sm leading-relaxed"
                    style={{ color: "var(--gold-bright)" }}
                  >
                    {tool.metric}
                  </p>

                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-widest hover:underline"
                      style={{ color: "var(--neon-primary)" }}
                    >
                      {tool.linkLabel ?? "ACESSAR"} →
                    </a>
                  )}
                </div>
              </HoloCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}