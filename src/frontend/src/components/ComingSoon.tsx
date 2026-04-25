import { Link } from "@tanstack/react-router";
import type { NavItem } from "../types";
import { Layout } from "./Layout";

interface ComingSoonProps {
  section: NavItem;
}

export function ComingSoon({ section }: ComingSoonProps) {
  return (
    <Layout>
      {/* Hero area */}
      <section
        className="full-screen-hero relative"
        style={{ minHeight: "60vh" }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 80%, oklch(var(--primary) / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 mt-16">
          {/* Chapter label */}
          <p className="chapter-label mb-6 animate-fade-in-up">
            {section.icon} {section.title}
          </p>

          <h1
            className="text-hero text-foreground mb-6 fade-in-up fade-in-up-delay-1"
            style={{ maxWidth: "14ch" }}
          >
            {section.title}
          </h1>

          <div className="gold-underline w-16 mx-auto mb-8 fade-in-up fade-in-up-delay-2" />

          <p className="text-muted-foreground font-body text-base md:text-lg max-w-md leading-relaxed fade-in-up fade-in-up-delay-3">
            {section.description}
          </p>
        </div>
      </section>

      {/* Coming soon block */}
      <section className="section-bg-muted py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex flex-col items-center gap-6 p-10 border border-border/50 card-cinema"
            style={{ borderRadius: "var(--radius)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              style={{
                background: "oklch(var(--primary) / 0.15)",
                border: "1px solid oklch(var(--primary) / 0.3)",
              }}
            >
              🚧
            </div>

            <div>
              <p className="text-label mb-3">Coming Soon</p>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Content in Progress
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                I'm putting this section together. Check back soon — it'll be
                worth it.
              </p>
            </div>

            <Link
              to="/"
              data-ocid="coming_soon.home_link"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-semibold transition-smooth border border-border/60 rounded-full hover:border-secondary hover:text-foreground text-muted-foreground"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              <span style={{ color: "oklch(var(--secondary))" }}>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
