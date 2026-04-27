import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";
import { navItems } from "../components/navItems";

function useReveal() {
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const stats = [
  { value: "6.5/10", label: "Overall Rating", accent: true },
  { value: "12", label: "Sections Covered", accent: false },
  { value: "20+", label: "FAQs Answered", accent: false },
  { value: "100%", label: "Honest", accent: false },
];

const sectionCards = navItems.filter((item) => item.id !== "home");

const ratings: Record<string, string> = {
  academics: "6.5/10",
  hostel: "6/10",
  food: "5.5/10",
  survival: "6/10",
  "study-abroad": "7/10",
};

const reviews = [
  {
    quote:
      "Food is fine most days, but during peak hours it's chaos. Honestly, just bring snacks for the first week.",
    author: "CSE, 2023 batch",
  },
  {
    quote:
      "Placements depend entirely on you. No one is going to chase companies for you or hand you a job. Start early.",
    author: "ECE, 2022 batch",
  },
  {
    quote:
      "Made some of my best friends here. The social life is completely what you make of it — put yourself out there.",
    author: "MBA, 2024 batch",
  },
];

export default function Home() {
  return (
    <Layout>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(1.5rem);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section
        className="bg-background px-6 pt-24 pb-16 sm:pt-32 sm:pb-20"
        data-ocid="home.hero_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up fade-in-up-delay-1 mb-4">
            <span className="text-label">From a student, for students</span>
          </div>

          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-bold text-foreground leading-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
            data-ocid="home.hero_heading"
          >
            Should you join VIT-AP?
          </h1>

          <p className="fade-in-up fade-in-up-delay-3 font-body text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            I spent 3 years figuring this out so you don't have to. Here's my
            honest take — the good, the bad, and the stuff no one tells you
            during the campus tour.
          </p>

          <div className="fade-in-up fade-in-up-delay-4 flex flex-wrap gap-3">
            <a
              href="#sections"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg transition-smooth hover:opacity-90 hover:-translate-y-0.5"
              data-ocid="home.hero_cta_button"
            >
              Read the honest guide
            </a>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 border border-border text-foreground font-display font-semibold px-6 py-3 rounded-lg transition-smooth hover:bg-muted"
              data-ocid="home.hero_faqs_link"
            >
              Common FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        className="bg-muted/50 border-y border-border px-6 py-8"
        data-ocid="home.stats_section"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className={`font-display font-bold text-2xl sm:text-3xl ${
                  stat.accent ? "text-secondary" : "text-foreground"
                }`}
              >
                {stat.value}
              </span>
              <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Editorial Intro ── */}
      <section className="bg-background px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-label mb-3">What this is</p>
              <h2 className="text-section text-foreground mb-5">
                A guide built from real experience
              </h2>
              <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
                I put this together because I couldn't find a single honest
                resource about VIT-AP when I was deciding whether to join.
                Everything online was either a brochure or a complaint forum.
                This is neither — it's structured like I'm sitting across from
                you and answering every question I know you have.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section Cards ── */}
      <section
        id="sections"
        className="bg-muted/30 border-y border-border px-6 py-16 sm:py-20"
        data-ocid="home.chapters_section"
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-label mb-3">The guide</p>
            <h2 className="text-section text-foreground mb-2">
              Everything you need to know
            </h2>
            <p className="font-body text-muted-foreground text-sm mb-10 max-w-lg">
              Pick whatever's most relevant to where you are right now.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectionCards.map((section, index) => (
              <Reveal key={section.id} delay={Math.min(index * 35, 250)}>
                <Link
                  to={section.path}
                  data-ocid={`home.section_card.${index + 1}`}
                  className="group flex flex-col bg-card border border-border rounded-xl p-5 h-full transition-smooth hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl" aria-hidden="true">
                      {section.icon}
                    </span>
                    {ratings[section.id] && (
                      <span className="inline-flex items-center gap-1 bg-secondary/15 text-secondary font-semibold text-xs px-2 py-1 rounded-full">
                        ⭐ {ratings[section.id]}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {section.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1 mb-3">
                    {section.description}
                  </p>
                  <span className="text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    Read more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Reviews ── */}
      <section
        className="bg-background px-6 py-16 sm:py-20"
        data-ocid="home.reviews_section"
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-label mb-3">What students say</p>
            <h2 className="text-section text-foreground mb-10">
              Raw, honest takes
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <Reveal key={review.author} delay={i * 80}>
                <div
                  className="bg-card border border-border rounded-xl p-5 h-full flex flex-col gap-4 border-l-4"
                  style={{ borderLeftColor: "oklch(var(--secondary))" }}
                  data-ocid={`home.review_card.${i + 1}`}
                >
                  <p className="font-body italic text-foreground text-sm leading-relaxed flex-1">
                    "{review.quote}"
                  </p>
                  <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wide">
                    — {review.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Survival Guide CTA Banner ── */}
      <section
        className="px-6 py-12 sm:py-16"
        data-ocid="home.survival_banner_section"
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div
              className="rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{
                background: "oklch(var(--primary) / 0.08)",
                border: "1px solid oklch(var(--primary) / 0.2)",
              }}
            >
              <div>
                <p className="text-label mb-2">New here?</p>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-2">
                  New to VIT-AP? Read the Survival Guide first.
                </h3>
                <p className="font-body text-muted-foreground text-sm max-w-md">
                  Things seniors wish they'd known — what to expect vs. reality,
                  practical tips for hostel life, academics, and making the most
                  of your time here.
                </p>
              </div>
              <Link
                to="/survival"
                className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg transition-smooth hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
                data-ocid="home.survival_guide_button"
              >
                Read Survival Guide
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── One-line Truth Footer Callout ── */}
      <section
        className="bg-muted/40 border-t border-border px-6 py-12"
        data-ocid="home.truth_section"
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "oklch(var(--secondary) / 0.15)" }}
              >
                💡
              </div>
              <div>
                <p className="font-display font-semibold text-foreground mb-1">
                  The one-line truth about VIT-AP
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  It's an average college — what you get depends entirely on
                  what you do. The opportunities exist, but no one is going to
                  push you toward them.{" "}
                  <Link
                    to="/about"
                    className="font-semibold text-primary hover:underline transition-colors duration-200"
                    data-ocid="home.about_link"
                  >
                    My full take on VIT-AP →
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
