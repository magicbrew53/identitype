"use client";
import FadeIn from "@/components/ui/FadeIn";
import CostBar from "@/components/ui/CostBar";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { SCARF_DOMAINS } from "@/lib/scenarios";
import {
  toPercentages,
  toGainPercentages,
  annualCost,
  annualValue,
  orgCost,
  EMPTY_GAINS,
} from "@/lib/costs";

export default function CostReportScreen({ costs, gains = EMPTY_GAINS, onContinue }) {
  const threatPcts = toPercentages(costs);
  const safetyPcts = toGainPercentages(gains);
  const annual = annualCost(threatPcts);
  const built = annualValue(safetyPcts);
  const org = orgCost(annual);

  const domainOrder = ["STATUS", "CERTAINTY", "AUTONOMY", "RELATEDNESS", "FAIRNESS"];

  return (
    <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <FadeIn delay={100}>
        <p className="uppercase tracking-[0.25em] text-xs font-bold text-brand-orange mb-3">
          Psychological Safety Cost Report
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
          Your Tuesday, by the numbers
        </h2>
        <p className="text-base text-gray-600 mb-12">
          One employee · One Tuesday · Extrapolated across 12 months
        </p>
      </FadeIn>

      {/* THREAT PROFILE */}
      <FadeIn delay={300}>
        <div className="mb-3">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-black mb-1">
            Threat Profile
          </p>
          <p className="text-sm text-gray-600 mb-6">
            What the environment cost you today — the drain when fight, flight, or freeze took over.
          </p>
        </div>
        <div className="mb-12">
          {domainOrder.map((key, i) => (
            <CostBar
              key={key}
              label={SCARF_DOMAINS[key].name}
              percent={threatPcts[key.toLowerCase()]}
              color={SCARF_DOMAINS[key].color}
              delay={500 + i * 200}
            />
          ))}
        </div>
      </FadeIn>

      {/* SAFETY PROFILE */}
      <FadeIn delay={1500}>
        <div className="mb-3">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-black mb-1">
            Safety Profile
          </p>
          <p className="text-sm text-gray-600 mb-6">
            What voice built back — the value you generated when you stayed regulated and spoke deliberately.
          </p>
        </div>
        <div className="mb-14">
          {domainOrder.map((key, i) => (
            <CostBar
              key={key}
              label={SCARF_DOMAINS[key].name}
              percent={safetyPcts[key.toLowerCase()]}
              color={SCARF_DOMAINS[key].color}
              delay={1700 + i * 200}
            />
          ))}
        </div>
      </FadeIn>

      {/* DUAL STAT BOXES */}
      <FadeIn delay={2700}>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border-2 border-black p-6">
            <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
              Annual cost per affected employee
            </p>
            <p className="text-4xl md:text-5xl font-black text-brand-orange">
              <AnimatedNumber value={annual} prefix="$" />
            </p>
            <p className="text-xs text-gray-500 mt-3">
              What the day cost — attrition risk, withheld ideas, missed signal.
            </p>
          </div>
          <div className="border-2 border-black p-6">
            <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
              Annual value voice would have built
            </p>
            <p className="text-4xl md:text-5xl font-black text-black">
              <AnimatedNumber value={built} prefix="$" />
            </p>
            <p className="text-xs text-gray-500 mt-3">
              What regulated, deliberate speech adds — trust, retention, signal that lands.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={3000}>
        <div className="border border-gray-300 p-6 mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
            200-person org · 30% experiencing safety threats
          </p>
          <p className="text-3xl font-black text-black">
            <AnimatedNumber value={org} prefix="$" duration={2400} />
          </p>
          <p className="text-xs text-gray-500 mt-3">
            This doesn't show up in your engagement survey. It shows up in attrition, missed deadlines, and the quiet ideas that never get raised.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={3300}>
        <div className="text-center mt-8">
          <button
            onClick={onContinue}
            className="bg-brand-orange hover:opacity-90 text-white font-bold px-10 py-4 text-lg rounded-sm tracking-wide transition-opacity"
          >
            What can you do about it →
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
