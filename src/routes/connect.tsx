import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { StatusBar } from "@/components/StatusBar";
import { PlatformIcon } from "@/components/PlatformIcon";
import { ArrowLeft, Check, Plus } from "lucide-react";

export const Route = createFileRoute("/connect")({
  component: Connect,
});

const platforms = [
  { id: "spotify", name: "Spotify", desc: "Streams, listeners & playlist adds", required: true },
  { id: "youtube", name: "YouTube", desc: "Views, watch time & engagement", required: true },
  { id: "instagram", name: "Instagram", desc: "Reels, followers & saves", required: false },
  { id: "soundcloud", name: "SoundCloud", desc: "Plays, reposts & comments", required: false },
] as const;

function Connect() {
  const [connected, setConnected] = useState<string[]>(["spotify"]);
  const toggle = (id: string) =>
    setConnected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <AppShell>
      <StatusBar />
      <div className="px-6 pt-4 flex flex-col min-h-[calc(100vh-2rem)]">
        <div className="flex items-center justify-between">
          <Link to="/setup" className="glass h-10 w-10 rounded-full grid place-items-center">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <span className="text-xs text-muted-foreground">Step 2 of 3</span>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight">Connect your platforms</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll listen for traction signals across each one. You can add more anytime.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {platforms.map((p) => {
            const on = connected.includes(p.id);
            return (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                className={`w-full glass rounded-3xl p-5 flex items-center gap-4 text-left transition ${
                  on ? "ring-1 ring-primary/60 glow-soft" : ""
                }`}
              >
                <div className="h-12 w-12 rounded-2xl bg-white/5 grid place-items-center">
                  <PlatformIcon platform={p.id} size={26} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{p.name}</p>
                    {!p.required && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-muted-foreground">
                        Optional
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                </div>
                <div
                  className={`h-9 w-9 rounded-full grid place-items-center ${
                    on ? "gradient-success" : "bg-white/5"
                  }`}
                >
                  {on ? <Check className="h-4 w-4 text-white" /> : <Plus className="h-4 w-4 text-muted-foreground" />}
                </div>
              </button>
            );
          })}
        </div>

        <Link
          to="/sync"
          className="mt-auto mb-8 block text-center gradient-primary text-white font-semibold py-4 rounded-2xl glow-soft"
        >
          Continue ({connected.length} connected)
        </Link>
      </div>
    </AppShell>
  );
}
