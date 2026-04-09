"use client";
import FadeIn from "@/components/ui/FadeIn";

export default function IdentityScreen({ profile, onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-2xl mx-auto">
      <FadeIn delay={100}>
        <p className="uppercase tracking-[0.25em] text-xs font-bold text-brand-orange mb-10">
          Your Employee Profile
        </p>
      </FadeIn>

      <FadeIn delay={300}>
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center text-white text-3xl font-black mb-8"
          style={{
            background:
              "linear-gradient(135deg, #EB865C 0%, #AB84BB 100%)",
          }}
        >
          {profile.avatar}
        </div>
      </FadeIn>

      <FadeIn delay={500}>
        <h2 className="text-4xl font-black mb-2 text-center">{profile.name}</h2>
        <p className="text-lg text-gray-700 mb-1 text-center">{profile.role}</p>
        <p className="text-sm text-gray-500 mb-10 text-center">{profile.tenure}</p>
      </FadeIn>

      <FadeIn delay={800}>
        <p className="italic text-lg text-gray-800 leading-relaxed mb-12 text-center max-w-xl">
          {profile.context}
        </p>
      </FadeIn>

      <FadeIn delay={1100}>
        <div className="border border-gray-200 rounded-sm p-6 mb-10 max-w-xl w-full">
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4 text-center">
            The Biology
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="font-bold text-red-700 mb-1">THREAT</div>
              <div className="text-gray-600">Amygdala<br />(fight / flight / freeze)</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-brand-green mb-1">SAFETY</div>
              <div className="text-gray-600">Prefrontal Cortex<br />(creativity / collaboration)</div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={1400}>
        <button
          onClick={onStart}
          className="bg-brand-orange hover:opacity-90 text-white font-bold px-10 py-4 text-lg rounded-sm tracking-wide transition-opacity"
        >
          Start your day →
        </button>
      </FadeIn>
    </div>
  );
}
