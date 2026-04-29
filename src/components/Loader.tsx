import { useEffect, useState } from "react";

const STAGES = ["COMPILANDO", "MINIFICANDO", "OTIMIZANDO", "PRONTO"];

export function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [stage, setStage] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 6 + 2;
      if (p >= 100) { p = 100; clearInterval(id); }
      setPct(Math.floor(p));
      setStage(Math.min(STAGES.length - 1, Math.floor((p / 100) * STAGES.length)));
    }, 60);
    const t = setTimeout(() => {
      setExit(true);
      setTimeout(onDone, 700);
    }, 2400);
    return () => { clearInterval(id); clearTimeout(t); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ background: "#010A03", pointerEvents: exit ? "none" : "auto" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1/2 transition-transform duration-700"
        style={{ background: "#010A03", transform: exit ? "translateY(-100%)" : "none" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 transition-transform duration-700"
        style={{ background: "#010A03", transform: exit ? "translateY(100%)" : "none" }}
      />
      <div className="relative text-center" style={{ transition: "opacity .3s", opacity: exit ? 0 : 1 }}>
        <div
          className="font-display text-7xl md:text-8xl font-black tracking-wider"
          style={{ color: "var(--neon-primary)", textShadow: "0 0 30px rgba(0,255,127,0.7)" }}
        >
          GG
        </div>
        <div className="mt-8 w-64 h-1 mx-auto" style={{ background: "rgba(255,215,0,0.15)" }}>
          <div
            className="h-full transition-all duration-150"
            style={{ width: `${pct}%`, background: "var(--gold-bright)", boxShadow: "0 0 12px var(--gold-bright)" }}
          />
        </div>
        <div className="mt-3 font-mono text-sm" style={{ color: "var(--gold-bright)" }}>
          {String(pct).padStart(3, "0")}%
        </div>
        <div className="mt-2 font-mono text-xs tracking-[0.4em]" style={{ color: "var(--text-dim)" }}>
          {STAGES[stage]}
        </div>
      </div>
    </div>
  );
}
