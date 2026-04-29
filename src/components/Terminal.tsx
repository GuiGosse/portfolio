import { useEffect, useState } from "react";

const LINES = [
  "Inicializando sistema...",
  "React ✓  Wordpress ✓  HTML/CSS/JS ✓  Laravel ✓",
  "Localização: Paulínia, SP — Brasil",
  "Status: DISPONÍVEL PARA OPORTUNIDADES",
];

export function Terminal() {
  const [shown, setShown] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let i = 0, j = 0;
    let typingId: ReturnType<typeof setInterval>;
    const next = () => {
      if (i >= LINES.length) return;
      j = 0;
      typingId = setInterval(() => {
        j++;
        setCurrent(LINES[i].slice(0, j));
        if (j >= LINES[i].length) {
          clearInterval(typingId);
          setShown(s => [...s, LINES[i]]);
          setCurrent("");
          i++;
          setTimeout(next, 350);
        }
      }, 22);
    };
    setTimeout(next, 700);
    return () => clearInterval(typingId);
  }, []);

  return (
    <div className="terminal hud-clip max-w-xl">
      {shown.map((l, idx) => (
        <div key={idx}><span className="prompt">&gt; </span>{l}</div>
      ))}
      {current && <div><span className="prompt">&gt; </span>{current}<span className="blink">▌</span></div>}
      {shown.length === LINES.length && <div><span className="prompt">&gt; </span><span className="blink">▌</span></div>}
    </div>
  );
}
