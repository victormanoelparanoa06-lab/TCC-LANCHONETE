import { useMemo } from "react";
import "./HamburguerRain.css";

function HamburguerRain({ quantidade = 30 }) {
  const hamburgueres = useMemo(
    () =>
      Array.from({ length: quantidade }, (_, i) => ({
        id: i,
        left: Math.random() * 100,        // posição horizontal (%)
        delay: Math.random() * 1,         // atraso até começar a cair (s)
        duration: 2 + Math.random() * 1.5, // duração da queda (s)
        size: 24 + Math.random() * 32,    // tamanho (px)
      })),
    [quantidade]
  );

  return (
    <div className="burger-rain" aria-hidden="true">
      {hamburgueres.map((h) => (
        <span
          key={h.id}
          className="burger-rain__item"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          🍔
        </span>
      ))}
    </div>
  );
}

export default HamburguerRain;