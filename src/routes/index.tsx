import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/intro" }), 1800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-app flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-secondary/25 blur-3xl animate-float-slow" />

      <div className="relative flex flex-col items-center gap-6 animate-fade-in">
        <div className="animate-pulse-glow rounded-[28%]">
          <Logo size={96} />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Momentum</h1>
          <p className="mt-2 text-sm text-muted-foreground">Feel your music move.</p>
        </div>
      </div>

      <div className="absolute bottom-10 text-[11px] text-muted-foreground">for independent artists</div>
    </div>
  );
}
