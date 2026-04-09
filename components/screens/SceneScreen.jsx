"use client";
import { useState, useEffect } from "react";
import FadeIn from "@/components/ui/FadeIn";
import DomainTag from "@/components/ui/DomainTag";
import { SCARF_DOMAINS } from "@/lib/scenarios";
import { addCosts, brainState } from "@/lib/costs";

export default function SceneScreen({
  scene,
  sceneIndex,
  totalScenes,
  costs,
  onChoice,
  onAdvance,
}) {
  const [selected, setSelected] = useState(null);
  const [showMonologue, setShowMonologue] = useState(false);
  const domain = SCARF_DOMAINS[scene.domain];

  // brain state should reflect the choice once made
  const liveCosts = selected ? addCosts(costs, selected.costs) : costs;
  const brain = brainState(liveCosts);

  useEffect(() => {
    if (selected) {
      const t = setTimeout(() => setShowMonologue(true), 800);
      return () => clearTimeout(t);
    }
  }, [selected]);

  const pickChoice = (choice) => {
    if (selected) return;
    setSelected(choice);
    onChoice(choice);
  };

  return (
    <div className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs uppercase tracking-widest font-bold text-gray-500">
          Scene {sceneIndex + 1} / {totalScenes}
        </span>
        <span
          className="text-xs uppercase tracking-widest font-bold"
          style={{ color: brain.color }}
        >
          ● {brain.label}
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 mb-10">
        {Array.from({ length: totalScenes }).map((_, i) => (
          <span
            key={i}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === sceneIndex ? 40 : 20,
              backgroundColor: i <= sceneIndex ? domain.color : "#E5E7EB",
            }}
          />
        ))}
      </div>

      <FadeIn delay={100}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <DomainTag name={domain.name} color={domain.color} />
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {scene.negBehavior}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={250}>
        <p className="text-xs uppercase tracking-[0.25em] font-bold text-black mb-6">
          {scene.setting}
        </p>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="text-lg leading-relaxed text-gray-900 whitespace-pre-line mb-10">
          {scene.narrative}
        </div>
      </FadeIn>

      {!selected && (
        <FadeIn delay={700}>
          <div className="space-y-3">
            {scene.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => pickChoice(choice)}
                className="w-full text-left border-2 border-gray-200 hover:border-black px-5 py-4 rounded-sm transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">{choice.label}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black">
                    {choice.type}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>
      )}

      {selected && (
        <div className="mt-2">
          <FadeIn delay={50}>
            <div
              className="border-l-4 bg-gray-50 px-6 py-5 mb-6"
              style={{ borderColor: domain.color }}
            >
              <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
                {selected.type} · What happens
              </p>
              <p className="text-base leading-relaxed text-gray-900 whitespace-pre-line">
                {selected.consequence}
              </p>
            </div>
          </FadeIn>

          {showMonologue && (
            <FadeIn delay={50}>
              <div className="px-6 py-5 mb-8">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">
                  Internal monologue
                </p>
                <p className="italic text-base leading-relaxed text-gray-700">
                  {selected.monologue}
                </p>
              </div>
            </FadeIn>
          )}

          {showMonologue && (
            <FadeIn delay={300}>
              <div className="text-center">
                <button
                  onClick={onAdvance}
                  className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-sm tracking-wide transition-colors"
                >
                  Continue your day →
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      )}
    </div>
  );
}
