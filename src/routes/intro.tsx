import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { StatusBar } from "@/components/StatusBar";
import { ChevronRight, TrendingUp, Sparkles, Bell } from "lucide-react";

export const Route = createFileRoute("/intro")({
  component: Intro,
});

const slides = [
  {
    icon: TrendingUp,
    title: "See your momentum.",
    body: "Know exactly when your music starts gaining traction — across every platform, in one place.",
    accent: "gradient-primary",
  },
  {
    icon: Sparkles,
    title: "Insights that feel personal.",
    body: "Smart, human-friendly insights that turn raw streams into clear stories about your growth.",
    accent: "gradient-success",
  },
  {
    icon: Bell,
    title: "Catch the wave early.",
    body: "Real-time traction alerts let you act the moment your audience starts moving.",
    accent: "gradient-primary",
  },
];

function Intro() {
  const [i, setI] = useState(0);
  const Slide = slides[i];
  const Icon = Slide.icon;
  const last = i === slides.length - 1;

  return (
    <AppShell>
      <StatusBar />
      <div className="px-6 pt-6 flex flex-col min-h-[calc(100vh-2rem)]">
        <div className="flex justify-end">
          <Link to="/auth" className="text-sm text-muted-foreground">Skip</Link>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center gap-10">
          <div className={`relative h-56 w-56 rounded-[32%] ${Slide.accent} grid place-items-center glow animate-fade-in`}>
            <div className="absolute inset-0 rounded-[32%] bg-black/10" />
            <Icon className="relative h-20 w-20 text-white" strokeWidth={1.6} />
          </div>

          <div className="space-y-4 animate-slide-up" key={i}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight">{Slide.title}</h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">{Slide.body}</p>
          </div>
        </div>

        <div className="pb-10 space-y-6">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>

          {last ? (
            <Link
              to="/auth"
              className="block w-full text-center gradient-primary text-white font-semibold py-4 rounded-2xl glow-soft"
            >
              Get started
            </Link>
          ) : (
            <button
              onClick={() => setI(i + 1)}
              className="w-full gradient-primary text-white font-semibold py-4 rounded-2xl glow-soft inline-flex items-center justify-center gap-2"
            >
              Continue <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </AppShell>
  );
}
