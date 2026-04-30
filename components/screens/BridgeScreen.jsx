"use client";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { SCARF_DOMAINS } from "@/lib/scenarios";

export default function BridgeScreen({ onReset }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <FadeIn delay={100}>
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Psychological safety isn't a personality trait. It's a leadership system.
        </h2>
      </FadeIn>

      <FadeIn delay={400}>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
          Every threat you just felt maps to a specific leadership behavior — and
          every behavior has a counterweight that can be taught, measured, and
          built into how a team operates.
        </p>
      </FadeIn>

      <FadeIn delay={700}>
        <div className="grid md:grid-cols-5 gap-4 mb-14">
          {Object.values(SCARF_DOMAINS).map((d) => (
            <div
              key={d.name}
              className="border-t-4 p-4"
              style={{ borderColor: d.color }}
            >
              <p
                className="text-xs uppercase tracking-widest font-bold mb-3"
                style={{ color: d.color === "#000000" ? "#000" : d.color }}
              >
                {d.name}
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Threat
              </p>
              <p className="text-xs text-gray-700 mb-3 leading-snug">
                {d.threat}
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Remedy
              </p>
              <p className="text-xs text-gray-900 leading-snug">{d.remedy}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={1000}>
        <div className="border-2 border-black p-8 mb-6">
          <p className="text-xl font-bold mb-2 text-black">
            Tools to spot these moments in your own organization.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Get the Identitype Field Kit — practical observation tools, manager
            prompts, and the behavior map used in this simulation.
          </p>

          {status === "success" ? (
            <p className="text-brand-green font-bold">
              ✓ You're in. Check your inbox in the next few minutes.
            </p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@work.email"
                  className="flex-1 border-2 border-gray-300 focus:border-black px-4 py-3 rounded-sm outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-brand-orange hover:opacity-90 disabled:opacity-50 text-white font-bold px-8 py-3 rounded-sm tracking-wide transition-opacity"
                >
                  {status === "loading" ? "Submitting…" : "Get the Field Kit"}
                </button>
              </form>
              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                  Something went wrong — try again.
                </p>
              )}
            </>
          )}

          <p className="text-xs text-gray-500 mt-4">
            Or{" "}
            <a
              href="https://identitypegroup.com/contact"
              className="underline hover:text-black"
            >
              talk to us directly →
            </a>
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={1300}>
        <div className="text-center mt-12">
          <button
            onClick={onReset}
            className="text-sm text-gray-500 hover:text-black underline tracking-wide"
          >
            Experience another profile →
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
