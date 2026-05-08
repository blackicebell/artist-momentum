import { createFileRoute } from "@tanstack/react-router";
import { StatusBar } from "@/components/StatusBar";
import { Sparkline } from "@/components/Sparkline";
import { Sparkles, TrendingUp, Calendar, Lightbulb, Music2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_tabs/insights")({
  component: Insights,
});

const ranges = ["7D", "30D", "90D", "1Y"] as const;

function Insights() {
  const [range, setRange] = useState<(typeof ranges)[number]>("30D");

  return (
    <div className="mx-auto w-full max-w-md pb-32">
      <StatusBar />
      <header className="px-6 pt-4">
        <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
          <Sparkles className="h-3 w-3" /> Insights
        </p>
        <h1 className="text-3xl font-bold tracking-tight mt-1">Your story this month</h1>
      </header>

      {/* Range chips */}
      <div className="px-6 mt-5 flex gap-2">
        {ranges.map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              r === range ? "gradient-primary text-white glow-soft" : "glass text-muted-foreground"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Hero growth card */}
      <section className="px-6 mt-5">
        <div className="rounded-3xl glass p-5 overflow-hidden relative">
          <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full gradient-primary opacity-25 blur-3xl" />
          <p className="text-xs text-muted-foreground">Total reach</p>
          <div className="flex items-end gap-3 mt-1">
            <p className="text-4xl font-bold tracking-tight">312K</p>
            <span className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-success/15 text-success px-2 py-0.5 text-xs font-semibold">
              <TrendingUp className="h-3 w-3" /> +28%
            </span>
          </div>
          <div className="h-32 mt-3 -mx-2">
            <Sparkline points={[10,14,12,22,18,28,34,30,42,40,55,60,58,72,80]} className="h-full w-full" />
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
            <span>Apr 8</span><span>Apr 22</span><span>May 8</span>
          </div>
        </div>
      </section>

      {/* AI Insights stack */}
      <section className="px-6 mt-7 space-y-3">
        <h2 className="text-lg font-bold">For you</h2>
        <InsightCard
          icon={Lightbulb}
          tag="Pattern"
          title="Posting Reels lifts your YouTube watch time."
          body="In the last 30 days, posts on Tuesdays drove a 41% spike in cross-platform engagement."
        />
        <InsightCard
          icon={Music2}
          tag="Release"
          title='"Ocean Floor" is your fastest-growing single yet.'
          body="It hit 40K streams in 6 days — twice as fast as your previous release."
        />
        <InsightCard
          icon={Calendar}
          tag="Timing"
          title="Your audience is most active 7–10 PM."
          body="Try scheduling your next drop for Thursday at 8 PM local time."
        />
      </section>

      {/* Breakdown */}
      <section className="px-6 mt-7">
        <h2 className="text-lg font-bold mb-3">Where the growth came from</h2>
        <div className="rounded-3xl glass p-5 space-y-4">
          <Stat label="New listeners" value={62} />
          <Stat label="Returning fans" value={28} color="secondary" />
          <Stat label="Playlists" value={10} color="success" />
        </div>
      </section>
    </div>
  );
}

function InsightCard({
  icon: Icon, tag, title, body,
}: { icon: React.ElementType; tag: string; title: string; body: string }) {
  return (
    <div className="rounded-3xl glass p-5 flex gap-4">
      <div className="h-10 w-10 rounded-2xl gradient-primary grid place-items-center glow-soft shrink-0">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{tag}</p>
        <p className="text-sm font-semibold mt-0.5 leading-snug">{title}</p>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function Stat({ label, value, color = "primary" }: { label: string; value: number; color?: "primary" | "secondary" | "success" }) {
  const bar = color === "primary" ? "gradient-primary" : color === "secondary" ? "bg-secondary" : "gradient-success";
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm">{label}</span>
        <span className="text-sm font-semibold">{value}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${bar} rounded-full`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
