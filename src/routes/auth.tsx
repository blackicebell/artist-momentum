import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { StatusBar } from "@/components/StatusBar";
import { Logo } from "@/components/Logo";
import { Apple, Mail } from "lucide-react";

export const Route = createFileRoute("/auth")({
  component: Auth,
});

function Auth() {
  return (
    <AppShell>
      <StatusBar />
      <div className="px-6 pt-10 flex flex-col min-h-[calc(100vh-2rem)]">
        <div className="flex flex-col items-center gap-4">
          <Logo size={64} />
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to track your momentum.</p>
          </div>
        </div>

        <div className="mt-10 space-y-3">
          <button className="w-full glass rounded-2xl py-4 font-medium flex items-center justify-center gap-2.5">
            <Apple className="h-5 w-5" /> Continue with Apple
          </button>
          <button className="w-full glass rounded-2xl py-4 font-medium flex items-center justify-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.42-1.7 4.16-5.5 4.16-3.31 0-6-2.74-6-6.13s2.69-6.13 6-6.13c1.88 0 3.14.8 3.86 1.49l2.63-2.54C16.78 3.32 14.6 2.4 12 2.4 6.92 2.4 2.8 6.52 2.8 11.6S6.92 20.8 12 20.8c6.93 0 9.2-4.86 9.2-7.34 0-.5-.05-.88-.12-1.26H12z"/></svg>
            Continue with Google
          </button>
        </div>

        <div className="my-7 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex-1 h-px bg-white/10" /> or <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className="space-y-3">
          <div className="glass rounded-2xl px-4 py-3.5 flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <input
              placeholder="you@artist.com"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
          </div>
          <div className="glass rounded-2xl px-4 py-3.5 flex items-center gap-3">
            <span className="h-5 w-5 grid place-items-center text-muted-foreground">•••</span>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <Link
          to="/setup"
          className="mt-6 block text-center gradient-primary text-white font-semibold py-4 rounded-2xl glow-soft"
        >
          Continue
        </Link>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          New here? <span className="text-primary font-medium">Create an account</span>
        </p>

        <div className="mt-auto pb-6 text-center text-[11px] text-muted-foreground">
          By continuing you agree to our Terms & Privacy.
        </div>
      </div>
    </AppShell>
  );
}
