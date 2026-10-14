import { CountUp } from "./CountUp";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-32">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="sec-label">// 001 — SOBRE</div>
          <h2 className="font-display font-black leading-[1] mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Código que<br />
            <span style={{ color: "var(--gold-bright)", textShadow: "0 0 24px rgba(255,215,0,0.3)" }}>resolve</span> problemas
          </h2>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-primary, #E8FFF0)", opacity: 0.85 }}>
            Desenvolvedor web com foco em performance e experiência do usuário. Atualmente responsável pelo departamento de TI da <span style={{ color: "var(--neon-primary)" }}>Canal Solar</span>, onde construo soluções que economizam horas de trabalho e escalam com o negócio.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { v: 6, suf: "+", l: "anos de experiência" },
              { v: 6, suf: "hs+", l: "economizadas/contrato" },
              { v: 0, suf: "∞", l: "linhas de código", literal: "∞" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display font-black text-4xl md:text-5xl" style={{ color: "var(--neon-primary)" }}>
                  {s.literal ? s.literal : <CountUp end={s.v} suffix={s.suf} />}
                </div>
                <div className="mt-2 font-mono text-[0.7rem] tracking-widest uppercase" style={{ color: "var(--text-dim)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex justify-center lg:justify-end">
          <div className="relative w-72 h-80 md:w-80 md:h-96 hud-clip glow-pulse" style={{ background: "linear-gradient(135deg, rgba(0,255,127,0.15), rgba(255,215,0,0.1))", border: "1px solid var(--neon-primary)" }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <img 
                src="./src/public/image/me.jpg" 
                alt="Foto de perfil" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="scan-line" />
            <div className="absolute top-3 right-3 flex items-center gap-2 font-mono text-[0.65rem] tracking-widest" style={{ color: "var(--neon-primary)" }}>
              <span className="w-2 h-2 rounded-full blink" style={{ background: "var(--neon-primary)", boxShadow: "0 0 8px var(--neon-primary)" }} />
              ONLINE
            </div>
            <div className="absolute bottom-3 left-3 font-mono text-[0.65rem] tracking-widest" style={{ color: "var(--gold-bright)" }}>ID://0x47</div>
          </div>
        </div>
      </div>
    </section>
  );
}
