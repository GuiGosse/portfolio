import { useState } from "react";

export function Contact() {
  const [toast, setToast] = useState("");
  const copy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setToast("Copiado! ✓");
    setTimeout(() => setToast(""), 2000);
  };

  const items = [
    { label: "E-mail", value: "guilhermegosse@gmail.com", action: "Copiar →", onClick: () => copy("guilhermegosse@gmail.com") },
    { label: "GitHub", value: "github.com/GuiGosse", action: "Visitar →", href: "https://github.com/GuiGosse" },
    { label: "Telefone", value: "(19) 99154-8377", action: "WhatsApp →", href: "https://wa.me/5519991548377" },
  ];

  return (
    <section id="contact" className="relative px-6 md:px-10 py-32 min-h-screen flex items-center">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ opacity: 0.04 }}
      >
        <span className="font-display font-black whitespace-nowrap" style={{ fontSize: "20vw", color: "var(--neon-primary)" }}>
          GUILHERME
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <div className="sec-label reveal">// 006 — CONTATO</div>
          <h2 className="font-display font-black leading-[0.95] tracking-tight" style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}>
            <span className="block reveal">VAMOS</span>
            <span className="block reveal" style={{ color: "var(--neon-primary)", animationDelay: "150ms" }}>CONSTRUIR</span>
            <span className="block reveal" style={{ color: "var(--gold-bright)", animationDelay: "300ms" }}>ALGO.</span>
          </h2>
          <p className="mt-8 text-lg max-w-xl mx-auto reveal" style={{ color: "rgba(232,255,240,0.7)", animationDelay: "450ms" }}>
            Aberto a oportunidades, freelas e projetos interessantes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((it, i) => {
            const Comp: any = it.href ? "a" : "button";
            return (
              <Comp
                key={it.label}
                href={it.href}
                target={it.href ? "_blank" : undefined}
                rel={it.href ? "noreferrer" : undefined}
                onClick={it.onClick}
                className="holo-card hud-clip p-7 text-left block reveal group"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="font-mono text-[0.7rem] tracking-[0.3em] mb-3" style={{ color: "var(--gold-bright)" }}>{it.label}</div>
                <div className="font-display text-base md:text-lg font-bold mb-6 break-all" style={{ color: "var(--text-primary, #E8FFF0)" }}>{it.value}</div>
                <div className="font-mono text-xs tracking-widest transition-all group-hover:translate-x-1" style={{ color: "var(--neon-primary)" }}>
                  {it.action}
                </div>
              </Comp>
            );
          })}
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1100] px-6 py-3 font-mono text-sm hud-clip" style={{ background: "rgba(1,10,3,0.95)", border: "1px solid var(--neon-primary)", color: "var(--neon-primary)", boxShadow: "0 0 24px rgba(0,255,127,0.4)" }}>
          {toast}
        </div>
      )}
    </section>
  );
}
