"use client";
import { useEffect, useState } from "react";

export default function AnimatedNumber({ value, duration = 2000, format = (n) => n.toLocaleString("en-US"), prefix = "", suffix = "" }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return (
    <span className="tabular-nums">
      {prefix}
      {format(n)}
      {suffix}
    </span>
  );
}
