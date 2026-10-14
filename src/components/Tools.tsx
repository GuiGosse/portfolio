
import { ToolCard, type Tool, type ToolStatus } from "./ToolCard";

const STATUS_CONFIG: Record<
  ToolStatus,
  { label: string; color: string; animate?: boolean }
> = {
  available: {
    label: "DISPONÍVEL",
    color: "var(--neon-primary)",
  },
  beta: {
    label: "BETA",
    color: "var(--neon-secondary)",
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

const TOOLS: Tool[] = [
  {
    n: "01",
    title: "Gerenciamento de investimento",
    stack: ["Laravel", "React", "Supabase", "Tailwind CSS"],
    desc: "Gerencie investimentos com outras pessoas.",
    metric: "Controle de capital individual de um bem comum",
    status: "beta",
    image: "/portfolio/images/tools/guinvest-login.webp",
    gallery: [
      "/portfolio/images/tools/guinvest-dashboard.webp",
      "/portfolio/images/tools/guinvest-relatorios.webp",
      "/portfolio/images/tools/guinvest-transations.webp",
    ],
    link: "https://guinvest.vercel.app/",
    linkLabel: "ACESSAR",
  },
  {
    n: "02",
    title: "[Ferramenta em fase de deploy]",
    stack: ["A Definir"],
    desc: "A descrever",
    metric: "",
    status: "coming-soon",
  },
   {
    n: "03",
    title: "[Ferramenta em fase de deploy]",
    stack: ["A Definir"],
    desc: "A descrever",
    metric: "",
    status: "coming-soon",
  },
];



export function Tools() {
  return (
    <section id="tools" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {TOOLS.map((tool) => (
            <ToolCard
              key={tool.n}
              tool={tool}
              statusInfo={STATUS_CONFIG[tool.status]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
