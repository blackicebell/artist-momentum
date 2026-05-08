import { createFileRoute, Link } from "@tanstack/react-router";
import { StatusBar } from "@/components/StatusBar";
import { PlatformIcon } from "@/components/PlatformIcon";
import {
  Bell, Moon, CreditCard, ChevronRight, Shield, HelpCircle, LogOut, Sparkles, Check,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_tabs/profile")({
  component: Profile,
});

const platforms = [
  { id: "spotify", name: "Spotify", connected: true, sub: "@mayavale" },
  { id: "youtube", name: "YouTube", connected: true, sub: "Maya Vale" },
  { id: "instagram", name: "Instagram", connected: true, sub: "@maya.vale" },
  { id: "soundcloud", name: "SoundCloud", connected: false, sub: "Not connected" },
] as const;

function Profile() {
  const [notif, setNotif] = useState(true);
  const [dark, setDark] = useState(true);

  return (
    <div className="mx-auto w-full max-w-md pb-32">
      <StatusBar />

      <header className="px-6 pt-4">
        <p className="text-xs text-muted-foreground">Profile</p>
        <h1 className="text-3xl font-bold tracking-tight mt-1">Account</h1>
      </header>

      {/* Profile card */}
      <section className="px-6 mt-5">
        <div className="rounded-3xl glass p-5 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute -top-16 -right-10 h-44 w-44 rounded-full gradient-primary opacity-30 blur-3xl" />
          <div className="relative h-16 w-16 rounded-full gradient-primary grid place-items-center text-xl font-bold glow-soft">
            MV
          </div>
          <div className="relative flex-1 min-w-0">
            <p className="text-lg font-bold truncate">Maya Vale</p>
            <p className="text-xs text-muted-foreground truncate">R&B · Indie · Los Angeles</p>
            <div className="mt-2 inline-flex items-center gap-1 rounded-full gradient-primary px-2.5 py-1 text-[11px] font-semibold glow-soft">
              <Sparkles className="h-3 w-3" /> Momentum Pro
            </div>
          </div>
        </div>
      </section>

      {/* Connected platforms */}
      <section className="px-6 mt-7">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground px-1 mb-2">Connected platforms</h2>
        <div className="rounded-3xl glass divide-y divide-white/5 overflow-hidden">
          {platforms.map((p) => (
            <div key={p.id} className="flex items-center gap-3 p-4">
              <div className="h-10 w-10 rounded-2xl bg-white/5 grid place-items-center">
                <PlatformIcon platform={p.id} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{p.sub}</p>
              </div>
              {p.connected ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-success">
                  <Check className="h-3 w-3" /> Connected
                </span>
              ) : (
                <button className="text-[11px] font-semibold text-primary">Connect</button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Settings */}
      <section className="px-6 mt-7 space-y-2">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground px-1 mb-2">Preferences</h2>
        <Toggle icon={Bell} label="Traction alerts" value={notif} onChange={setNotif} />
        <Toggle icon={Moon} label="Dark mode" value={dark} onChange={setDark} />
        <Row icon={CreditCard} label="Subscription" sub="Pro · renews May 28" />
        <Row icon={Shield} label="Account & privacy" />
        <Row icon={HelpCircle} label="Help & support" />
      </section>

      <section className="px-6 mt-6">
        <Link
          to="/auth"
          className="w-full rounded-2xl glass py-4 flex items-center justify-center gap-2 text-sm font-semibold text-destructive"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </Link>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">Momentum · v1.0.0</p>
      </section>
    </div>
  );
}

function Row({ icon: Icon, label, sub }: { icon: React.ElementType; label: string; sub?: string }) {
  return (
    <button className="w-full rounded-2xl glass p-4 flex items-center gap-3 text-left">
      <div className="h-9 w-9 rounded-xl bg-white/5 grid place-items-center">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{label}</p>
        {sub && <p className="text-[11px] text-muted-foreground">{sub}</p>}
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}

function Toggle({
  icon: Icon, label, value, onChange,
}: { icon: React.ElementType; label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="w-full rounded-2xl glass p-4 flex items-center gap-3"
    >
      <div className="h-9 w-9 rounded-xl bg-white/5 grid place-items-center">
        <Icon className="h-4 w-4" />
      </div>
      <span className="flex-1 text-left text-sm font-medium">{label}</span>
      <span
        className={`h-6 w-10 rounded-full p-0.5 transition ${value ? "gradient-primary" : "bg-white/10"}`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${
            value ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}
