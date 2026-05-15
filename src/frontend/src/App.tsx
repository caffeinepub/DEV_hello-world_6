function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-wash.dim_1200x800.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />

        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, oklch(0.99 0.005 260 / 0.6) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div
          data-ocid="hero.section"
          className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary/70 mb-6 opacity-0 animate-slide-up [animation-delay:100ms] [animation-fill-mode:forwards]">
            Welcome
          </p>

          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-6 opacity-0 animate-slide-up [animation-delay:200ms] [animation-fill-mode:forwards]">
            Hello, <span className="text-gradient italic">World!</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md opacity-0 animate-slide-up [animation-delay:350ms] [animation-fill-mode:forwards]">
            A clean place to start. Simple, intentional, and always ready for
            what comes next.
          </p>

          <div
            className="mt-12 w-12 h-px bg-border opacity-0 animate-slide-up [animation-delay:500ms] [animation-fill-mode:forwards]"
            aria-hidden="true"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-border bg-card">
        <p className="text-center text-sm text-muted-foreground font-body">
          \u00a9 {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-smooth underline-offset-2 hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
