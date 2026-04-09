"use client";
import FadeIn from "@/components/ui/FadeIn";
import CostBar from "@/components/ui/CostBar";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { SCARF_DOMAINS } from "@/lib/scenarios";
import { toPercentages, annualCost, orgCost } from "@/lib/costs";

export default function CostReportScreen({ costs, onContinue }) {
  const pcts = toPercentages(costs);
  const annual = annualCost(pcts);
  const org = orgCost(annual);

  return (
    <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <FadeIn delay={100}>
        <p className="uppercase tracking-[0.25em] text-xs font-bold text-brand-orange mb-3">
          Psychological Safety Cost Report
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
          Threat Profile
        </h2>
        <p className="text-base text-gray-600 mb-12">
          One employee · One Tuesday · Extrapolated across 12 months
        </p>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="mb-14">
          <CostBar
            label={SCARF_DOMAINS.STATUS.name}
            percent={pcts.status}
            color={SCARF_DOMAINS.STATUS.color}
            delay={500}
          />
          <CostBar
            label={SCARF_DOMAINS.CERTAINTY.name}
            percent={pcts.certainty}
            color={SCARF_DOMAINS.CERTAINTY.color}
            delay={700}
          />
          <CostBar
            label={SCARF_DOMAINS.AUTONOMY.name}
            percent={pcts.autonomy}
            color={SCARF_DOMAINS.AUTONOMY.color}
            delay={900}
          />
          <CostBar
            label={SCARF_DOMAINS.RELATEDNESS.name}
            percent={pcts.relatedness}
            color={SCARF_DOMAINS.RELATEDNESS.color}
            delay={1100}
          />
          <CostBar
            label={SCARF_DOMAINS.FAIRNESS.name}
            percent={pcts.fairness}
            color={SCARF_DOMAINS.FAIRNESS.color}
            delay={1300}
          />
        </div>
      </FadeIn>

      <FadeIn delay={1600}>
        <div className="border-2 border-black p-8 mb-6">
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
            Estimated annual cost per affected employee
          </p>
          <p className="text-5xl md:text-6xl font-black text-brand-orange">
            <AnimatedNumber value={annual} prefix="$" />
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={1900}>
        <div className="border border-gray-300 p-6 mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
            200-person org · 30% experiencing safety threats
          </p>
          <p className="text-3xl font-black text-black">
            <AnimatedNumber value={org} prefix="$" duration={2400} />
          </p>
          <p className="text-xs text-gray-500 mt-3">
            This doesn't show up in your engagement survey. It shows up in
            attrition, missed deadlines, and the quiet ideas that never get raised.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={2200}>
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
