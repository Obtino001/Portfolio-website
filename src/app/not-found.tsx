import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background text-slate-100">
      <div className="p-3 rounded-2xl bg-surface border border-white/10 text-xs font-mono text-brand-mint mb-4">
        404 — Page Not Found
      </div>
      <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-4">
        Lost in the codebase.
      </h1>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        The page you are looking for does not exist or has been refactored for maximum conversion velocity.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-brand-mint text-background font-bold text-xs shadow-glow-mint hover:bg-brand-mint-light transition-colors"
      >
        Return to Home
      </Link>
    </main>
  );
}
