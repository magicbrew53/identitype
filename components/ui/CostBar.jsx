"use client";
import { useEffect, useState } from "react";

export default function CostBar({ label, percent, color, delay = 0 }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(percent), delay);
    return () => clearTimeout(t);
  }, [percent, delay]);
  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm uppercase tracking-wider font-bold text-black">
          {label}
        </span>
        <span className="text-sm font-bold text-black tabular-nums">
          {Math.round(width)}%
        </span>
      </div>
      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            backgroundColor: color,
            transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}
