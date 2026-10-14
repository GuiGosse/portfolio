import { HoloCard } from "./HoloCard";

type Project = {
  n: string;
  title: string;
  type: "private" | "demo";
  stack: string[];
  desc: string;
  metric: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Motor de Automação de Contratos",
    type: "private",
    stack: ["Laravel", "PHPWord", "MySQL"],
    desc: "Sistema interno para geração automática de contratos em DOCX/PDF usando templates dinâmicos.",
    metric: "Até 2h economizadas por contrato",
  },
  {
    n: "02",
    title: "Automatizador de Conteúdo Social",
    type: "private",
    stack: ["Laravel", "JavaScript", "html2canvas"],
    desc: "Geração dinâmica de imagens para redes sociais e publicação automatizada via API.",
    metric: "Publicação automatizada",
  },
  {
    n: "03",
    title: "Gerador HTML de Posts",
    type: "private",
    stack: ["Laravel", "React", "Tailwind", "Redis"],
    desc: "Geração de estruturas HTML para campanhas de e-mail marketing no RD Station.",
    metric: "Ao menos 30 min economizados por dia",
  },
  {
    n: "04",
    title: "Defender Planet Store",
    type: "demo",
    stack: ["React", "Tailwind", "TypeScript"],
    desc: "Landing page para uma loja de eletrônicos.",
    metric: "Demonstração interativa",
    link: "https://guigosse.github.io/defender-planet-store/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">

        {/* Cabeçalho */}
        <div className="mb-12 md:mb-16">
          <div className="sec-label reveal">
            // 003 — PROJETOS
          </div>

          <h2
            className="reveal font-display font-black leading-[1]"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            Projetos{" "}
            <span style={{ color: "var(--gold-bright)" }}>
              Realizados
            </span>
          </h2>

          <p
            className="mt-5 max-w-2xl text-sm leading-relaxed md:text-base"
            style={{ color: "var(--text-dim)" }}
          >
            Sistemas e soluções desenvolvidos para automatizar processos,
            resolver problemas reais e criar experiências digitais.
          </p>
        </div>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          {PROJECTS.map((project) => (
            <HoloCard
              key={project.n}
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
                {project.n}
              </div>

              {/* Tipo de projeto */}
              <div className="relative z-10 mb-6">
                <span
                  className="font-mono text-[0.7rem] tracking-[0.2em]"
                  style={{ color: "var(--text-dim)" }}
                >
                  {project.type === "demo"
                    ? "DEMONSTRAÇÃO PÚBLICA"
                    : "PROJETO PRIVADO"}
                </span>
              </div>

              {/* Título */}
              <h3
                className="relative z-10 mb-5 font-display text-2xl font-bold md:text-3xl"
                style={{
                  color: "var(--text-primary, #E8FFF0)",
                }}
              >
                {project.title}
              </h3>

              {/* Tecnologias */}
              <div className="relative z-10 mb-5 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
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
                {project.desc}
              </p>

              {/* Resultado e ação */}
              <div
                className="relative z-10 mt-auto border-t pt-5"
                style={{
                  borderColor: "rgba(0,255,127,0.15)",
                }}
              >
                <div
                  className="mb-2 font-mono text-[0.6rem] tracking-[0.2em]"
                  style={{ color: "var(--text-dim)" }}
                >
                  DESTAQUE
                </div>

                <p
                  className="font-mono text-sm leading-relaxed"
                  style={{ color: "var(--gold-bright)" }}
                >
                  {project.metric}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-widest hover:underline"
                    style={{ color: "var(--neon-primary)" }}
                  >
                    ABRIR DEMO →
                  </a>
                )}
              </div>
            </HoloCard>
          ))}
        </div>
      </div>
    </section>
  );
}
