import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { StatusBar } from "@/components/StatusBar";
import { Check } from "lucide-react";

export const Route = createFileRoute("/sync")({
  component: Sync,
});

const steps = [
  "Analyzing your growth patterns…",
  "Tracking audience movement…",
  "Looking for traction signals…",
  "Building your Momentum Score…",
];

function Sync() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= steps.length) {
      const t = setTimeout(() => navigate({ to: "/home" }), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setI(i + 1), 1100);
    return () => clearTimeout(t);
  }, [i, navigate]);

  const progress = Math.min(i / steps.length, 1);

  return (
    <AppShell>
      <StatusBar />
      <div className="px-6 pt-4 flex flex-col min-h-[calc(100vh-2rem)] items-center">
        <div className="flex-1 flex flex-col items-center justify-center gap-10 w-full">
          <div className="relative h-48 w-48">
            <div className="absolute inset-0 rounded-full gradient-primary opacity-30 blur-2xl animate-pulse-glow" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
              <circle cx="50" cy="50" r="44" stroke="oklch(1 0 0 / 0.08)" strokeWidth="4" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="url(#sg)"
                strokeWidth="4"
                fill="none"
                strokeDasharray={2 * Math.PI * 44}
                strokeDashoffset={2 * Math.PI * 44 * (1 - progress)}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s ease" }}
              />
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.66 0.22 295)" />
                  <stop offset="100%" stopColor="oklch(0.70 0.16 245)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient">{Math.round(progress * 100)}%</p>
                <p className="text-[11px] text-muted-foreground mt-1">syncing</p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-3">
            {steps.map((s, idx) => {
              const done = idx < i;
              const active = idx === i;
              return (
                <div
                  key={s}
                  className={`glass rounded-2xl px-4 py-3.5 flex items-center gap-3 transition ${
                    active ? "ring-1 ring-primary/40" : ""
                  } ${idx > i ? "opacity-40" : ""}`}
                >
                  <div
                    className={`h-7 w-7 rounded-full grid place-items-center ${
                      done ? "gradient-success" : active ? "gradient-primary" : "bg-white/5"
                    }`}
                  >
                    {done ? (
                      <Check className="h-3.5 w-3.5 text-white" />
                    ) : active ? (
                      <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    ) : null}
                  </div>
                  <p className="text-sm font-medium">{s}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="pb-8 text-xs text-muted-foreground">This usually takes a few seconds.</p>
      </div>
    </AppShell>
  );
}
