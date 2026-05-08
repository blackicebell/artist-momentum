import { createFileRoute, Link } from "@tanstack/react-router";
import { StatusBar } from "@/components/StatusBar";
import { Sparkline } from "@/components/Sparkline";
import { PlatformIcon } from "@/components/PlatformIcon";
import {
  Bell, Flame, TrendingUp, ArrowUpRight, Play, Heart, MessageCircle,
  Sparkles, Music2, Eye, Headphones,
} from "lucide-react";

export const Route = createFileRoute("/_tabs/home")({
  component: Home,
});

function Home() {
  const score = 78;
  const radius = 78;
  const circ = 2 * Math.PI * radius;
  const offset = circ * (1 - score / 100);

  return (
    <div className="mx-auto w-full max-w-md pb-32">
      <StatusBar />

      {/* Greeting */}
      <header className="px-6 pt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Saturday · May 8</p>
          <h1 className="text-2xl font-bold tracking-tight mt-0.5">Hey, Maya 👋</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="glass h-10 w-10 rounded-full grid place-items-center relative">
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>
          <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-sm font-bold">MV</div>
        </div>
      </header>

      {/* Momentum Score Hero */}
      <section className="px-6 mt-5 animate-slide-up">
        <div className="relative overflow-hidden rounded-[28px] glass card-shadow p-6">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full gradient-primary opacity-30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-secondary/30 blur-3xl" />

          <div className="relative flex items-center gap-5">
            <div className="relative h-44 w-44 shrink-0">
              <svg viewBox="0 0 200 200" className="-rotate-90">
                <circle cx="100" cy="100" r={radius} stroke="oklch(1 0 0 / 0.08)" strokeWidth="10" fill="none" />
                <circle
                  cx="100" cy="100" r={radius}
                  stroke="url(#hg)" strokeWidth="10" fill="none" strokeLinecap="round"
                  strokeDasharray={circ} strokeDashoffset={offset}
                />
                <defs>
                  <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.66 0.22 295)" />
                    <stop offset="100%" stopColor="oklch(0.70 0.16 245)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Momentum</p>
                  <p className="text-5xl font-bold leading-none mt-1">{score}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">/ 100</p>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0 space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-success/15 text-success px-2.5 py-1 text-xs font-semibold">
                <TrendingUp className="h-3 w-3" /> +12% this week
              </div>
              <p className="text-sm font-medium leading-snug">
                Audience momentum <span className="text-gradient font-bold">accelerating</span>.
              </p>
              <div className="h-12 -mx-1">
                <Sparkline points={[20, 28, 22, 34, 31, 45, 52, 49, 58, 64, 62, 78]} className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Insight */}
      <section className="px-6 mt-5">
        <div className="rounded-3xl glass p-5 flex gap-4 items-start animate-slide-up">
          <div className="h-10 w-10 shrink-0 rounded-2xl gradient-primary grid place-items-center glow-soft">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Smart insight</p>
            <p className="mt-1 text-sm font-medium leading-snug">
              Your latest release <span className="font-semibold">"Ocean Floor"</span> is outperforming your last
              song by <span className="text-gradient font-bold">+24%</span> in its first week.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Snapshot */}
      <section className="px-6 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">This week</h2>
          <Link to="/insights" className="text-xs text-muted-foreground inline-flex items-center gap-1">
            See all <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Metric icon={Headphones} label="Streams" value="42.8K" change="+18%" tone="success" />
          <Metric icon={Eye} label="Profile views" value="6,210" change="+9%" tone="success" />
          <Metric icon={Heart} label="Saves" value="1,428" change="+34%" tone="success" />
          <Metric icon={Music2} label="Playlist adds" value="84" change="+12%" tone="success" />
        </div>
      </section>

      {/* Traction Alerts */}
      <section className="px-6 mt-7">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold inline-flex items-center gap-2">
            <Flame className="h-5 w-5 text-primary" /> Traction alerts
          </h2>
          <span className="text-xs text-muted-foreground">3 new</span>
        </div>
        <div className="space-y-2.5">
          <Alert
            color="primary"
            title='"Ocean Floor" is gaining traction.'
            sub="Spotify saves up 42% in 24h."
            time="2h"
            platform="spotify"
          />
          <Alert
            color="secondary"
            title="Engagement surge on YouTube."
            sub="Watch time +37% after your latest Short."
            time="6h"
            platform="youtube"
          />
          <Alert
            color="success"
            title="Audience growth accelerated."
            sub="+218 new followers since yesterday."
            time="1d"
            platform="instagram"
          />
        </div>
      </section>

      {/* Top Performing Content */}
      <section className="px-6 mt-7">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Top content</h2>
          <span className="text-xs text-muted-foreground">last 7 days</span>
        </div>
        <div className="space-y-3">
          <ContentRow
            platform="instagram"
            cover="linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)"
            title="Behind the scenes — studio Reel"
            sub="324K views · 18.2K likes"
            change="+62%"
            badge
            icon={Play}
          />
          <ContentRow
            platform="youtube"
            cover="linear-gradient(135deg, #ef4444, #b91c1c)"
            title='"Ocean Floor" — Visualizer'
            sub="91K views · 4:21 avg watch"
            change="+38%"
            icon={Play}
          />
          <ContentRow
            platform="spotify"
            cover="linear-gradient(135deg, #22c55e, #0ea5e9)"
            title="Ocean Floor — single"
            sub="42.8K streams · 1.4K saves"
            change="+24%"
            badge
            icon={Music2}
          />
        </div>
      </section>

      {/* Release Performance */}
      <section className="px-6 mt-7">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Release performance</h2>
          <Link to="/releases" className="text-xs text-muted-foreground">View all</Link>
        </div>
        <div className="rounded-3xl glass p-5">
          <div className="flex items-center gap-4">
            <div
              className="h-16 w-16 rounded-2xl shrink-0"
              style={{ background: "linear-gradient(135deg,#8B5CF6,#4F9CF9)" }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">Ocean Floor</p>
              <p className="text-xs text-muted-foreground">Released 6 days ago · single</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-success">+24%</p>
              <p className="text-[10px] text-muted-foreground">vs last release</p>
            </div>
          </div>
          <div className="mt-4 h-20 -mx-1">
            <Sparkline points={[5, 12, 9, 22, 28, 35, 31, 48, 56, 62, 70, 78]} className="h-full w-full" />
          </div>
          <div className="mt-3 grid grid-cols-3 text-center">
            <div>
              <p className="text-base font-bold">42.8K</p>
              <p className="text-[10px] text-muted-foreground">Streams</p>
            </div>
            <div className="border-x border-white/10">
              <p className="text-base font-bold">1.4K</p>
              <p className="text-[10px] text-muted-foreground">Saves</p>
            </div>
            <div>
              <p className="text-base font-bold">84</p>
              <p className="text-[10px] text-muted-foreground">Playlists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-platform activity */}
      <section className="px-6 mt-7">
        <h2 className="text-lg font-bold mb-3">Cross-platform activity</h2>
        <div className="rounded-3xl glass p-5 space-y-4">
          <PlatformBar platform="spotify" name="Spotify" value={84} change="+18%" />
          <PlatformBar platform="youtube" name="YouTube" value={62} change="+37%" />
          <PlatformBar platform="instagram" name="Instagram" value={71} change="+22%" />
          <PlatformBar platform="soundcloud" name="SoundCloud" value={34} change="+6%" />
        </div>
      </section>
    </div>
  );
}

function Metric({
  icon: Icon, label, value, change,
}: { icon: React.ElementType; label: string; value: string; change: string; tone?: string }) {
  return (
    <div className="rounded-2xl glass p-4">
      <div className="flex items-center justify-between">
        <div className="h-8 w-8 rounded-xl bg-white/5 grid place-items-center">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <span className="text-[11px] font-semibold text-success">{change}</span>
      </div>
      <p className="mt-3 text-2xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Alert({
  color, title, sub, time, platform,
}: {
  color: "primary" | "secondary" | "success";
  title: string; sub: string; time: string;
  platform: "spotify" | "youtube" | "instagram" | "soundcloud";
}) {
  const ring = color === "primary" ? "bg-primary" : color === "secondary" ? "bg-secondary" : "bg-success";
  return (
    <div className="rounded-2xl glass p-4 flex items-center gap-3">
      <div className={`h-10 w-10 rounded-2xl ${ring}/15 grid place-items-center relative`}>
        <PlatformIcon platform={platform} size={18} />
        <span className={`absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ${ring} ring-2 ring-background`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-tight">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
      </div>
      <span className="text-[10px] text-muted-foreground">{time}</span>
    </div>
  );
}

function ContentRow({
  platform, cover, title, sub, change, badge, icon: Icon,
}: {
  platform: "spotify" | "youtube" | "instagram";
  cover: string; title: string; sub: string; change: string; badge?: boolean;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl glass p-3 flex items-center gap-3">
      <div className="relative h-16 w-16 rounded-xl overflow-hidden shrink-0" style={{ background: cover }}>
        <div className="absolute inset-0 grid place-items-center bg-black/20">
          <Icon className="h-5 w-5 text-white" fill="white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <PlatformIcon platform={platform} size={14} />
          <p className="text-xs text-muted-foreground capitalize">{platform}</p>
          {badge && (
            <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full gradient-primary text-white">
              High
            </span>
          )}
        </div>
        <p className="text-sm font-semibold mt-0.5 truncate">{title}</p>
        <p className="text-[11px] text-muted-foreground truncate">{sub}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-success">{change}</p>
        <p className="text-[10px] text-muted-foreground inline-flex items-center gap-0.5">
          <Heart className="h-2.5 w-2.5" /> <MessageCircle className="h-2.5 w-2.5" />
        </p>
      </div>
    </div>
  );
}

function PlatformBar({
  platform, name, value, change,
}: { platform: "spotify" | "youtube" | "instagram" | "soundcloud"; name: string; value: number; change: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2.5">
          <PlatformIcon platform={platform} size={16} />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{value}</span>
          <span className="text-[11px] font-semibold text-success">{change}</span>
        </div>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full gradient-primary"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
