import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { StatusBar } from "@/components/StatusBar";
import { ArrowLeft, Camera } from "lucide-react";

export const Route = createFileRoute("/setup")({
  component: Setup,
});

const genres = ["Hip-Hop", "R&B", "Pop", "Indie", "Electronic", "Afrobeats", "House", "Lo-fi", "Rock", "Latin"];

function Setup() {
  const [selected, setSelected] = useState<string[]>(["R&B", "Indie"]);
  const toggle = (g: string) =>
    setSelected((s) => (s.includes(g) ? s.filter((x) => x !== g) : [...s, g]));

  return (
    <AppShell>
      <StatusBar />
      <div className="px-6 pt-4 flex flex-col min-h-[calc(100vh-2rem)]">
        <div className="flex items-center justify-between">
          <Link to="/auth" className="glass h-10 w-10 rounded-full grid place-items-center">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <span className="text-xs text-muted-foreground">Step 1 of 3</span>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight">Set up your artist profile</h1>
          <p className="mt-2 text-sm text-muted-foreground">A few details so we can tailor your insights.</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="relative">
            <div className="h-24 w-24 rounded-full gradient-primary glow grid place-items-center text-3xl font-bold">
              MV
            </div>
            <button className="absolute -bottom-1 -right-1 h-9 w-9 rounded-full glass grid place-items-center">
              <Camera className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <label className="block text-xs uppercase tracking-wider text-muted-foreground px-1">Artist name</label>
          <div className="glass rounded-2xl px-4 py-3.5">
            <input
              defaultValue="Maya Vale"
              className="w-full bg-transparent outline-none text-base font-medium"
            />
          </div>

          <label className="block text-xs uppercase tracking-wider text-muted-foreground px-1 pt-2">Primary genre</label>
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => {
              const on = selected.includes(g);
              return (
                <button
                  key={g}
                  onClick={() => toggle(g)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    on ? "gradient-primary text-white glow-soft" : "glass text-foreground/80"
                  }`}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>

        <Link
          to="/connect"
          className="mt-auto mb-8 block text-center gradient-primary text-white font-semibold py-4 rounded-2xl glow-soft"
        >
          Continue
        </Link>
      </div>
    </AppShell>
  );
}
