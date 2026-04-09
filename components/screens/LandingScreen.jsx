"use client";
import FadeIn from "@/components/ui/FadeIn";
import { SCARF_DOMAINS } from "@/lib/scenarios";

export default function LandingScreen({ onBegin }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-3xl mx-auto text-center">
      <FadeIn delay={100}>
        <p className="uppercase tracking-[0.25em] text-xs font-bold text-brand-orange mb-8">
          The Psychological Safety Simulation
        </p>
      </FadeIn>

      <FadeIn delay={300}>
        <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-8">
          Your best people are doing the math on whether to stay.
        </h1>
      </FadeIn>

      <FadeIn delay={700}>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl">
          A 5-minute experience inside one employee's Tuesday. Four ordinary
          moments. No yelling. No policy violations. And yet — by the end —
          unmistakable how much the environment costs the organization every
          single day.
        </p>
      </FadeIn>

      <FadeIn delay={850}>
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-10">
          An Identitype Group experience
        </p>
      </FadeIn>

      <FadeIn delay={1000}>
        <button
          onClick={onBegin}
          className="bg-brand-orange hover:opacity-90 text-white font-bold px-10 py-4 text-lg rounded-sm tracking-wide transition-opacity"
        >
          Begin the simulation →
        </button>
      </FadeIn>

      <FadeIn delay={1300}>
        <div className="flex gap-2 mt-16">
          {Object.values(SCARF_DOMAINS).map((d) => (
            <span
              key={d.name}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: d.color }}
              title={d.name}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 tracking-wide">
          © Identitype Group
        </p>
      </FadeIn>
    </div>
  );
}
