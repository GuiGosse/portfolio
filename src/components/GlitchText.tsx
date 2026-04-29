import { useEffect, useRef, useState } from "react";

const GLITCH_CHARS = ["█", "▓", "▒", "░", "■", "@", "#", "%"];

export function GlitchText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const [display, setDisplay] = useState(text);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let alive = true;
    const loop = () => {
      const delay = 4000 + Math.random() * 2000;
      setTimeout(() => {
        if (!alive) return;
        setActive(true);
        const arr = text.split("");
        const idxs = [Math.floor(Math.random() * arr.length), Math.floor(Math.random() * arr.length)];
        idxs.forEach(i => { if (arr[i] !== " ") arr[i] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]; });
        setDisplay(arr.join(""));
        setTimeout(() => { setDisplay(text); setActive(false); loop(); }, 150);
      }, delay);
    };
    loop();
    return () => { alive = false; };
  }, [text]);

  return (
    <span
      ref={ref}
      data-text={display}
      className={`glitch ${active ? "is-glitching" : ""} ${className ?? ""}`}
      style={style}
    >
      {display}
    </span>
  );
}
