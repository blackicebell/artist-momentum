import { createFileRoute } from "@tanstack/react-router";
import { StatusBar } from "@/components/StatusBar";
import { TrendingUp, Users, Moon, Clock, CalendarDays, Sparkles, Film } from "lucide-react";

export const Route = createFileRoute("/_tabs/audience")({
  component: Audience,
});

const countries = [
  { flag: "🇺🇸", name: "United States", pct: 34, listeners: "14.5K" },
  { flag: "🇬🇧", name: "United Kingdom", pct: 18, listeners: "7.6K" },
  { flag: "🇩🇪", name: "Germany", pct: 11, listeners: "4.6K" },
  { flag: "🇧🇷", name: "Brazil", pct: 9, listeners: "3.8K" },
  { flag: "🇲🇽", name: "Mexico", pct: 7, listeners: "2.9K" },
];

const cities = [
  { name: "Los Angeles", listeners: "3.4K" },
  { name: "London", listeners: "2.9K" },
  { name: "New York", listeners: "2.4K" },
  { name: "Berlin", listeners: "1.8K" },
];

const hours = Array.from({ length: 24 }, (_, h) => {
  // peak around 19-22
  const v = Math.max(0.05, Math.exp(-((h - 20.5) ** 2) / 18) + (h > 6 ? 0.1 : 0));
  return Math.min(1, v);
});

function Audience() {
  return (
    <div className="mx-auto w-full max-w-md pb-32">
      <StatusBar />
      <header className="px-6 pt-4">
        <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
          <Users className="h-3 w-3" /> Audience
        </p>
        <h1 className="text-3xl font-bold tracking-tight mt-1">Who's listening</h1>
      </header>

      {/* Listener summary */}
      <section className="px-6 mt-5">
        <div className="rounded-3xl glass p-5 relative overflow-hidden">
          <div className="absolute -top-16 -left-10 h-44 w-44 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Monthly listeners</p>
              <p className="text-4xl font-bold tracking-tight mt-1">42,810</p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-success/15 text-success px-2 py-0.5 text-xs font-semibold">
                <TrendingUp className="h-3 w-3" /> +1,284 this week
              </span>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Followers</p>
              <p className="text-2xl font-bold">8,942</p>
              <p className="text-[11px] text-success font-semibold">+218</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top countries */}
      <section className="px-6 mt-7">
        <h2 className="text-lg font-bold mb-3">Top countries</h2>
        <div className="rounded-3xl glass p-5 space-y-4">
          {countries.map((c) => (
            <div key={c.name}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{c.flag}</span>
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{c.listeners} · {c.pct}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full gradient-primary rounded-full" style={{ width: `${c.pct * 2.5}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active hours */}
      <section className="px-6 mt-7">
        <h2 className="text-lg font-bold mb-3">Active hours</h2>
        <div className="rounded-3xl glass p-5">
          <div className="flex items-end justify-between gap-1 h-32">
            {hours.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md gradient-primary"
                style={{
                  height: `${v * 100}%`,
                  opacity: 0.4 + v * 0.6,
                }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
            <span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>11 PM</span>
          </div>
          <div className="mt-3 rounded-2xl bg-white/5 px-3 py-2 text-xs text-muted-foreground">
            Peak listening: <span className="text-foreground font-semibold">7–10 PM local time</span>
          </div>
        </div>
      </section>

      {/* Top cities */}
      <section className="px-6 mt-7">
        <h2 className="text-lg font-bold mb-3">Top cities</h2>
        <div className="grid grid-cols-2 gap-3">
          {cities.map((c) => (
            <div key={c.name} className="rounded-2xl glass p-4">
              <p className="text-xs text-muted-foreground">{c.name}</p>
              <p className="text-xl font-bold mt-1">{c.listeners}</p>
              <p className="text-[11px] text-success font-semibold">listeners</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience Insights */}
      <section className="px-6 mt-7">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Audience insights</h2>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> For you
          </span>
        </div>
        <div className="space-y-3">
          <InsightCard
            icon={Moon}
            headline="Evenings are your sweet spot"
            body="Your evening posts perform 38% better than the rest of the day."
            trend="+38%"
          />
          <InsightCard
            icon={Clock}
            headline="Peak listening window"
            body="Your audience is most active between 7PM–10PM."
          />
          <InsightCard
            icon={CalendarDays}
            headline="Weekends are heating up"
            body="Weekend uploads are getting stronger engagement than weekdays."
            trend="+22%"
          />
          <InsightCard
            icon={TrendingUp}
            headline="Thursdays drive growth"
            body="Your audience growth is strongest on Thursdays — try dropping then."
          />
          <InsightCard
            icon={Film}
            headline="Short-form is winning"
            body="Short clips are driving more interaction than longer posts."
            trend="+45%"
          />
        </div>
      </section>
    </div>
  );
}

function InsightCard({
  icon: Icon,
  headline,
  body,
  trend,
}: {
  icon: React.ElementType;
  headline: string;
  body: string;
  trend?: string;
}) {
  return (
    <div className="rounded-3xl glass p-4 flex gap-4 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full gradient-primary opacity-15 blur-3xl" />
      <div className="h-11 w-11 rounded-2xl gradient-primary grid place-items-center glow-soft shrink-0">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="relative flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold leading-snug">{headline}</p>
          {trend && (
            <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-success/15 text-success px-2 py-0.5 text-[10px] font-semibold">
              <TrendingUp className="h-2.5 w-2.5" /> {trend}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
