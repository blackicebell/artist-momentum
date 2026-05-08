import { createFileRoute } from "@tanstack/react-router";
import { StatusBar } from "@/components/StatusBar";
import { Sparkline } from "@/components/Sparkline";
import { Plus, TrendingUp, Flame } from "lucide-react";

export const Route = createFileRoute("/_tabs/releases")({
  component: Releases,
});

const releases = [
  {
    title: "Ocean Floor", type: "Single", date: "May 2, 2026", days: "6 days ago",
    streams: "42.8K", change: "+24%", high: true,
    cover: "linear-gradient(135deg,#8B5CF6,#4F9CF9)",
    points: [5, 10, 9, 18, 24, 30, 38, 45, 56, 62, 70, 78],
  },
  {
    title: "Slow Burn", type: "Single", date: "Mar 14, 2026", days: "8 weeks ago",
    streams: "118K", change: "+6%", high: false,
    cover: "linear-gradient(135deg,#f59e0b,#ef4444)",
    points: [40, 50, 48, 55, 60, 58, 62, 64, 65, 66, 68, 70],
  },
  {
    title: "Nightline EP", type: "EP · 5 tracks", date: "Nov 9, 2025", days: "6 months ago",
    streams: "412K", change: "+2%", high: false,
    cover: "linear-gradient(135deg,#22c55e,#0ea5e9)",
    points: [80, 78, 75, 72, 70, 68, 66, 65, 64, 63, 62, 62],
  },
];

function Releases() {
  return (
    <div className="mx-auto w-full max-w-md pb-32">
      <StatusBar />
      <header className="px-6 pt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Releases</p>
          <h1 className="text-3xl font-bold tracking-tight mt-1">Your catalog</h1>
        </div>
        <button className="h-11 w-11 rounded-2xl gradient-primary grid place-items-center glow-soft">
          <Plus className="h-5 w-5 text-white" />
        </button>
      </header>

      {/* Featured: latest release */}
      <section className="px-6 mt-5">
        <div className="relative rounded-3xl overflow-hidden p-5 glass">
          <div className="absolute inset-0 opacity-90" style={{ background: "linear-gradient(135deg,#8B5CF6,#4F9CF9)" }} />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative">
            <div className="flex items-center gap-4">
              <div
                className="h-24 w-24 rounded-2xl card-shadow shrink-0"
                style={{ background: "linear-gradient(135deg,#1B1B24,#0B0B0F)", boxShadow: "inset 0 0 40px rgba(139,92,246,0.6)" }}
              />
              <div className="flex-1 min-w-0">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/20 backdrop-blur px-2 py-0.5">
                  <Flame className="h-3 w-3" /> High momentum
                </span>
                <p className="text-xl font-bold mt-2 leading-tight">Ocean Floor</p>
                <p className="text-xs text-white/80">Single · released 6 days ago</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Mini label="Streams" value="42.8K" />
              <Mini label="Saves" value="1.4K" />
              <Mini label="Playlists" value="84" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mt-7">
        <h2 className="text-lg font-bold mb-3">All releases</h2>
        <div className="space-y-3">
          {releases.map((r) => (
            <div key={r.title} className="rounded-3xl glass p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl shrink-0" style={{ background: r.cover }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold truncate">{r.title}</p>
                    {r.high && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full gradient-primary text-white">
                        Hot
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">{r.type} · {r.days}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{r.streams}</p>
                  <p className="text-[11px] font-semibold text-success inline-flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" /> {r.change}
                  </p>
                </div>
              </div>
              <div className="h-14 mt-3 -mx-1">
                <Sparkline points={r.points} className="h-full w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/15 backdrop-blur px-3 py-2.5 text-center">
      <p className="text-base font-bold leading-none">{value}</p>
      <p className="text-[10px] text-white/80 mt-1">{label}</p>
    </div>
  );
}
