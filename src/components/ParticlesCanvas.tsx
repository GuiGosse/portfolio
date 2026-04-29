import { useEffect, useRef } from "react";

const TOKENS = ["React", "const", "=>", "</>", "{}", "async", "await", "null", "true", "0x1A", "npm", "git", "Vue", "Node", "Laravel", "MySQL", "useState", "fetch", "$_", "//", "[]", "===", "void"];

export function ParticlesCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0;
    const isMobile = window.innerWidth < 768;
    const N = isMobile ? 28 : 80;

    type P = { x: number; y: number; vx: number; vy: number; t: string; c: string; o: number; ph: number };
    let parts: P[] = [];

    const colors = () => {
      const r = Math.random();
      if (r < 0.7) return "rgba(0,255,127,";
      if (r < 0.9) return "rgba(255,215,0,";
      return "rgba(0,255,204,";
    };

    const init = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(1, 1);
      parts = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (0.15 + Math.random() * 0.25) * devicePixelRatio,
        vy: (0.1 + Math.random() * 0.2) * devicePixelRatio,
        t: TOKENS[Math.floor(Math.random() * TOKENS.length)],
        c: colors(),
        o: 0.15 + Math.random() * 0.2,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX * devicePixelRatio;
      mouse.current.y = e.clientY * devicePixelRatio;
    };

    let raf = 0;
    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${12 * devicePixelRatio}px JetBrains Mono, monospace`;
      for (const p of parts) {
        // drift
        p.x += p.vx + Math.sin((frame + p.ph * 60) * 0.01) * 0.3;
        p.y += p.vy;
        // mouse repel
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const d2 = dx * dx + dy * dy;
        const R = 120 * devicePixelRatio;
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d / R) * 2;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
        if (p.x > w + 20) p.x = -20;
        if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; }
        ctx.fillStyle = p.c + p.o + ")";
        ctx.fillText(p.t, p.x, p.y);
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", onMove);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" style={{ mixBlendMode: "screen" }} />;
}
