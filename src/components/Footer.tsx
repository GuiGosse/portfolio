export function Footer() {
  return (
    <footer className="relative px-6 md:px-10 py-12 mt-16" style={{ borderTop: "1px solid rgba(0,255,127,0.2)" }}>
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl font-black" style={{ color: "var(--neon-primary)" }}>GG<span style={{ color: "var(--gold-bright)" }}>.</span></div>
          <div className="mt-3 font-mono text-xs" style={{ color: "var(--text-dim)" }}>// construindo a web, um commit por vez</div>
        </div>
        <div>
          <div className="font-mono text-[0.7rem] tracking-[0.3em] mb-3" style={{ color: "var(--gold-bright)" }}>NAVEGAÇÃO</div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            {[
              { id: "about", label: "Sobre" },
              { id: "skills", label: "Habilidades" },
              { id: "projects", label: "Projetos" },
              { id: "experience", label: "Experiência" },
              { id: "contact", label: "Contato" },
            ].map(l => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-[color:var(--neon-primary)] transition-colors" style={{ color: "var(--text-dim)" }}>→ {l.label}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-mono text-[0.7rem] tracking-[0.3em] mb-3" style={{ color: "var(--gold-bright)" }}>REDES</div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <a href="https://github.com/goguih" target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon-primary)]" style={{ color: "var(--text-dim)" }}>→ github.com/goguih</a>
            <a href="https://github.com/GuiGosse" target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon-primary)]" style={{ color: "var(--text-dim)" }}>→ github.com/GuiGosse</a>
            <span style={{ color: "var(--text-dim)" }}> Paulínia, SP — Brasil</span>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center font-mono text-[0.7rem]" style={{ color: "var(--text-dim)" }}>
        © 2026 Guilherme Gosse · Codado com ♥ e muita cafeína<br />
        Feito no Brasil 🇧🇷
      </div>
    </footer>
  );
}
