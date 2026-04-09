"use client";
import FadeIn from "@/components/ui/FadeIn";

export default function AccumulationScreen({ onContinue }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-2xl mx-auto text-center">
      <FadeIn delay={100}>
        <p className="uppercase tracking-[0.25em] text-xs font-bold text-black mb-12">
          5:45 PM · Driving Home
        </p>
      </FadeIn>

      <FadeIn delay={600}>
        <p className="text-2xl md:text-3xl font-bold mb-8 leading-snug text-black">
          Nothing happened today that would make an HR report.
        </p>
      </FadeIn>

      <FadeIn delay={1800}>
        <p className="text-2xl md:text-3xl font-bold mb-8 leading-snug text-black">
          No policy was violated. No manager was cruel. Everyone was basically decent.
        </p>
      </FadeIn>

      <FadeIn delay={3200}>
        <p className="text-2xl md:text-3xl font-bold mb-12 leading-snug text-brand-orange">
          And yet — this employee's brain spent most of the day in threat mode, running fight-flight-freeze calculations instead of doing their best work.
        </p>
      </FadeIn>

      <FadeIn delay={4400}>
        <div className="grid grid-cols-2 gap-6 mb-12 w-full max-w-md">
          <div className="border-2 border-red-700 p-5">
            <p className="text-xs uppercase tracking-widest font-bold text-red-700 mb-1">
              ● Active
            </p>
            <p className="font-black text-lg text-red-700">AMYGDALA</p>
            <p className="text-xs text-gray-600 mt-1">fight / flight / freeze</p>
          </div>
          <div className="border-2 border-gray-300 p-5 opacity-50">
            <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1 line-through">
              Active
            </p>
            <p className="font-black text-lg text-gray-400 line-through">
              PREFRONTAL
            </p>
            <p className="text-xs text-gray-400 mt-1 line-through">
              creativity / collaboration
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={5000}>
        <button
          onClick={onContinue}
          className="bg-brand-orange hover:opacity-90 text-white font-bold px-10 py-4 text-lg rounded-sm tracking-wide transition-opacity"
        >
          See the cost →
        </button>
      </FadeIn>
    </div>
  );
}
