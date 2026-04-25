import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";
import { navItems } from "../components/navItems";

// Hook for scroll-triggered reveal
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-block ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const sectionCards = navItems.filter((item) => item.id !== "home");

const chapterMap: Record<string, string> = {
  about: "I",
  faqs: "II",
  academics: "III",
  hostel: "IV",
  food: "V",
  essentials: "VI",
  survival: "VII",
  portals: "VIII",
  data: "IX",
  resources: "X",
  "study-abroad": "XI",
  gallery: "XII",
};

export default function Home() {
  return (
    <Layout>
      <style>{`
        .reveal-block {
          opacity: 0;
          transform: translateY(2.5rem);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-block.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-block { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      {/* ── Full-screen Hero ── */}
      <section
        className="full-screen-hero bg-background relative px-6 py-0"
        data-ocid="home.hero_section"
      >
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 bg-grain opacity-30 pointer-events-none"
          aria-hidden="true"
        />

        {/* Vertical gold rule */}
        <div
          className="absolute left-6 sm:left-12 top-1/4 bottom-1/4 w-px opacity-30 pointer-events-none"
          style={{ background: "oklch(var(--secondary))" }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto w-full flex flex-col justify-center py-24">
          {/* Chapter label */}
          <div className="fade-in-up fade-in-up-delay-1 mb-6">
            <span className="chapter-label">From a student, for students</span>
          </div>

          {/* Hero heading */}
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-black leading-none tracking-tighter text-foreground mb-6"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
            data-ocid="home.hero_heading"
          >
            THE HONEST
            <br />
            <span style={{ color: "oklch(var(--primary))" }}>GUIDE</span> TO
            <br />
            VIT-AP
          </h1>

          {/* Subtitle */}
          <p className="fade-in-up fade-in-up-delay-3 font-body italic text-muted-foreground text-lg sm:text-2xl max-w-2xl mb-10">
            Everything I wish someone had told me before I joined — written like
            a senior talking to a junior. No brochures, no institutional talk.
            Just the real stuff.
          </p>

          {/* Gold divider line */}
          <div className="fade-in-up fade-in-up-delay-4 chapter-divider w-32 mb-10" />

          {/* Stats row */}
          <div
            className="fade-in-up fade-in-up-delay-5 flex flex-wrap gap-8"
            data-ocid="home.stats_row"
          >
            {[
              { value: "12", label: "Chapters" },
              { value: "20+", label: "FAQs Answered" },
              { value: "5+", label: "Campus Guides" },
              { value: "100%", label: "Honest" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="font-display font-black text-4xl"
                  style={{ color: "oklch(var(--secondary))" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-up fade-in-up-delay-5">
          <span className="text-xs tracking-[0.25em] uppercase font-body text-muted-foreground">
            scroll down
          </span>
          <div
            className="w-px h-8 animate-bounce"
            style={{ background: "oklch(var(--secondary) / 0.5)" }}
            aria-hidden="true"
          />
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            aria-hidden="true"
            style={{ color: "oklch(var(--secondary))" }}
          >
            <path
              d="M1 1l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── Editorial Intro ── */}
      <section className="bg-background px-6 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <p className="text-label mb-4">What this is</p>
            <h2 className="text-section text-foreground mb-6 max-w-3xl">
              A guide built from
              <br />
              <em style={{ color: "oklch(var(--primary))" }}>
                real experience
              </em>
            </h2>
          </RevealBlock>
          <RevealBlock delay={100}>
            <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl">
              I put this together because I couldn't find a single honest
              resource about VIT-AP when I was deciding whether to join.
              Everything online was either a brochure or a complaint forum. This
              is neither. It's a structured guide written like I'm sitting
              across from you, answering every question I know you have.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── Chapter Cards ── */}
      <section
        className="px-6 py-20"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="home.chapters_section"
      >
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <p className="text-label mb-3">The guide</p>
            <h2 className="text-section text-foreground mb-3">
              Twelve Chapters
            </h2>
            <p className="text-muted-foreground font-body mb-12 max-w-xl">
              Pick whatever's most relevant to where you are right now.
            </p>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {sectionCards.map((section, index) => (
              <RevealBlock key={section.id} delay={Math.min(index * 40, 300)}>
                <Link
                  to={section.path}
                  data-ocid={`home.chapter_card.${index + 1}`}
                  className="group block bg-background p-6 h-full transition-smooth hover:bg-card"
                >
                  {/* Chapter label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-display font-bold text-xs tracking-widest uppercase"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      Ch. {chapterMap[section.id] ?? index + 1}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "oklch(var(--primary) / 0.25)" }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-secondary transition-colors duration-300"
                    style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
                  >
                    {section.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                    {section.description}
                  </p>

                  {/* Arrow */}
                  <span
                    className="text-xs uppercase tracking-widest font-body transition-smooth group-hover:translate-x-1 inline-block"
                    style={{ color: "oklch(var(--secondary))" }}
                  >
                    Read →
                  </span>
                </Link>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Wisdom Banner ── */}
      <section
        className="px-6 py-16 border-t border-border"
        style={{ background: "oklch(var(--card))" }}
      >
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div
                className="shrink-0 w-12 h-12 flex items-center justify-center border"
                style={{ borderColor: "oklch(var(--secondary) / 0.4)" }}
              >
                <span
                  style={{ color: "oklch(var(--secondary))" }}
                  className="text-xl"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-xl text-foreground mb-1">
                  One thing I'd tell my fresher self
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  Register for FFCS slots early — good faculty fills up fast,
                  trust me. And read the{" "}
                  <Link
                    to="/academics"
                    className="transition-colors duration-200"
                    style={{ color: "oklch(var(--secondary))" }}
                    data-ocid="home.academics_link"
                  >
                    Academics guide
                  </Link>{" "}
                  before your first registration so you actually know what
                  you're signing up for.
                </p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>
    </Layout>
  );
}
