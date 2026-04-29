import { useEffect, useRef, useState } from "react";
import { Terminal } from "./Terminal";
import { GlitchText } from "./GlitchText";

function InteractiveCube() {
  const [rot, setRot] = useState({ x: -15, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const drag = useRef({ active: false, lastX: 0, lastY: 0, x: -15, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    let prev = performance.now();
    const tick = (now: number) => {
      if (!drag.current.active) {
        drag.current.y += (now - prev) * (360 / 22000);
        setRot({ x: drag.current.x, y: drag.current.y });
      }
      prev = now;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current!);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!drag.current.active) return;
      drag.current.y += (e.clientX - drag.current.lastX) * 0.5;
      drag.current.x = Math.max(-80, Math.min(80, drag.current.x - (e.clientY - drag.current.lastY) * 0.5));
      drag.current.lastX = e.clientX;
      drag.current.lastY = e.clientY;
      setRot({ x: drag.current.x, y: drag.current.y });
    };
    const onUp = () => { drag.current.active = false; setDragging(false); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  return (
    <div
      className="cube-stage select-none"
      style={{ cursor: dragging ? "grabbing" : "grab" }}
      onMouseDown={e => {
        drag.current.active = true;
        drag.current.lastX = e.clientX;
        drag.current.lastY = e.clientY;
        setDragging(true);
        setInteracted(true);
      }}
    >
      <div
        className="cube"
        style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`, animation: "none" }}
      >
        <div className="face f1">React</div>
        <div className="face f2">Vue.js</div>
        <div className="face f3">Node.js</div>
        <div className="face f4">Laravel</div>
        <div className="face f5">MySQL</div>
        <div className="face f6">Docker</div>
      </div>
      <p
        className="font-mono text-[0.6rem] tracking-[0.25em] mt-5 transition-opacity duration-700"
        style={{ color: "var(--neon-primary)", opacity: interacted ? 0 : 0.8 }}
      >
        ↖ arraste para girar
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-10 pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <div className="sec-label">// desenvolvedor full-stack</div>
          <h1
            className="font-display font-black leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "var(--text-primary, #E8FFF0)" }}
          >
            <GlitchText text="GUILHERME" /><br />
            <span style={{ color: "var(--neon-primary)", textShadow: "0 0 30px rgba(0,255,127,0.4)" }}>
              <GlitchText text="GOSSE" />
            </span>
          </h1>
          <div className="mt-8">
            <Terminal />
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn-neon">→ Ver Projetos</a>
            <a href="https://github.com/GuiGosse" target="_blank" rel="noreferrer" className="btn-neon gold">→ GitHub</a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center bob">
          <InteractiveCube />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ color: "var(--text-dim)" }}>
        <span className="font-mono text-[0.65rem] tracking-[0.4em] [writing-mode:vertical-rl]">SCROLL</span>
        <div className="relative w-px h-16 overflow-hidden" style={{ background: "rgba(0,255,127,0.15)" }}>
          <div className="absolute w-px h-8" style={{ background: "var(--neon-primary)", animation: "scroll-down 2s linear infinite", boxShadow: "0 0 8px var(--neon-primary)" }} />
        </div>
      </div>
    </section>
  );
}
