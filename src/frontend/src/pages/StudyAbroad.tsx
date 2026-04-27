import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";

function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Fade({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const programs = [
  {
    id: "itp",
    icon: "✈️",
    title: "International Transfer Program",
    abbr: "ITP",
    badge: "Transfer",
    badgeColor: "oklch(0.97 0.015 200)",
    badgeBorder: "oklch(0.88 0.06 200)",
    badgeText: "oklch(0.45 0.1 200)",
    desc: "Allows you to transfer to a partner university abroad for a portion of your degree. You complete part of your B.Tech at VIT-AP and the rest at an international institution.",
    details: [
      "Credits earned abroad count towards your VIT-AP degree",
      "Available to eligible students who meet academic and language requirements",
      "A genuine option if you want an international degree without starting over",
      "In my experience, these seats are limited — if you're serious, ask about eligibility early in your second year",
    ],
  },
  {
    id: "sap",
    icon: "📅",
    title: "Semester Abroad Program",
    abbr: "SAP",
    badge: "Exchange",
    badgeColor: "oklch(0.97 0.02 150)",
    badgeBorder: "oklch(0.88 0.06 150)",
    badgeText: "oklch(0.4 0.1 150)",
    desc: "Study at a partner university for one semester, then return to VIT-AP. Credits transfer back so you don't fall behind on your degree timeline.",
    details: [
      "Typically available from the second or third year onwards",
      "You live and study at a foreign university for one full semester",
      "Real exposure to a different academic system and culture — without a full transfer",
      "Great for your resume, but you'll need to sort finances, visa, and accommodation",
    ],
  },
];

const benefits = [
  "Exposure to global academic environments and teaching styles",
  "Improved cultural adaptability — living abroad teaches you things a classroom can't",
  "Opportunities to work with international research groups and faculty",
  "Better career prospects if you're targeting global companies or further studies abroad",
  "A real differentiator on your resume compared to most students from similar colleges",
];

const thingsToVerify = [
  "Eligibility criteria — minimum CGPA and language requirements vary by program and partner university",
  "Application deadlines — these are strict; missing them means waiting another year",
  "Credit transfer rules — confirm exactly which credits count back at VIT-AP before you commit",
  "Costs involved — tuition at partner universities, accommodation, flights, and visa fees are on you",
  "Current partner university list — partnerships change year to year; check with the IR office for the latest",
];

export default function StudyAbroad() {
  return (
    <Layout>
      {/* Page Header */}
      <section
        className="bg-background border-b border-border px-6 pt-12 pb-10"
        data-ocid="study_abroad.page_header"
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="chapter-label mb-3 fade-in-up"
            data-ocid="study_abroad.page_label"
          >
            International Programs
          </p>
          <h1 className="text-hero text-foreground mb-4 fade-in-up fade-in-up-delay-1">
            Studying Abroad
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-2">
            VIT-AP has international programs — here's honestly what you need to
            know. They exist, they're real, but they're not widely talked about.
            Most students find out too late.
          </p>
          <div className="flex flex-wrap gap-2 mt-6 fade-in-up fade-in-up-delay-3">
            {[
              "🌍 International Transfer Program",
              "📅 Semester Abroad Program",
              "🤝 Global Partnerships",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground bg-muted/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* IR Office */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border"
        data-ocid="study_abroad.overview_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">The starting point</p>
            <h2 className="text-section text-foreground mb-8">
              International Relations Office
            </h2>
          </Fade>
          <div className="grid md:grid-cols-2 gap-5">
            <Fade delay={100}>
              <Card className="h-full shadow-subtle border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">
                      🏛️
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      What the IR Office Does
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    VIT-AP has an International Relations Office that handles
                    study abroad programs, international collaborations, and
                    exchange initiatives. They're your first point of contact
                    for anything related to studying outside India.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In my experience, these offices can be slow to respond to
                    emails — physically going in with your questions tends to
                    work better. Go early in the academic year if you're
                    seriously considering this.
                  </p>
                </CardContent>
              </Card>
            </Fade>
            <Fade delay={200}>
              <Card className="h-full shadow-subtle border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">
                      🌐
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Global Partnerships
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    VIT-AP has partnerships with universities across the world —
                    Europe, North America, Asia, and beyond. The specific
                    institutions change over time as new agreements are signed
                    or existing ones lapse.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Don't rely on old lists you find online. The IR office has
                    the current partner list — always check with them directly.
                  </p>
                </CardContent>
              </Card>
            </Fade>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="study_abroad.programs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Your options</p>
            <h2 className="text-section text-foreground mb-2">
              The Two Main Programs
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              There are two structured paths for studying abroad through VIT-AP.
              Both involve credit transfer, but they're quite different in scope
              and commitment.
            </p>
          </Fade>
          <div className="space-y-5" data-ocid="study_abroad.programs_list">
            {programs.map((program, i) => (
              <Fade key={program.id} delay={i * 100}>
                <div
                  className="bg-card border border-border rounded-2xl p-7 transition-smooth hover:shadow-card"
                  data-ocid={`study_abroad.program.${i + 1}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl" aria-hidden="true">
                      {program.icon}
                    </span>
                    <div>
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-2"
                        style={{
                          background: program.badgeColor,
                          border: `1px solid ${program.badgeBorder}`,
                          color: program.badgeText,
                        }}
                      >
                        {program.badge}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {program.abbr} — {program.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed max-w-2xl">
                    {program.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {program.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                          style={{
                            background: "oklch(var(--primary) / 0.1)",
                            color: "oklch(var(--primary))",
                          }}
                        >
                          →
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border"
        data-ocid="study_abroad.benefits_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Why it's worth considering</p>
            <h2 className="text-section text-foreground mb-8">
              What You Actually Gain
            </h2>
          </Fade>
          <div className="grid md:grid-cols-2 gap-5">
            <Fade delay={100}>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-subtle h-full">
                <h3 className="font-display text-base font-semibold text-foreground mb-5">
                  The Real Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="font-display font-bold text-primary text-sm shrink-0 w-5">
                        {i + 1}.
                      </span>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
            <Fade delay={200}>
              <Card className="h-full shadow-subtle border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">
                      💬
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      My Honest Take
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    If international exposure matters to your career goals or
                    you're planning to do a Master's abroad, SAP is worth
                    exploring. A semester abroad on your resume — with actual
                    credits to show for it — looks different from just saying "I
                    want to study abroad."
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    ITP is more serious — it's essentially a partial degree
                    change. Don't walk into it without thoroughly researching
                    the specific university and program you'd be transferring
                    into.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The biggest hurdle is usually awareness. Most students don't
                    know these programs exist until third year — by which point
                    some deadlines have already passed.
                  </p>
                </CardContent>
              </Card>
            </Fade>
          </div>
        </div>
      </section>

      {/* What to Verify */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="study_abroad.verify_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Before you decide</p>
            <h2 className="text-section text-foreground mb-2">
              Verify Directly
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I can give you the overview, but the specifics — eligibility,
              deadlines, partner universities — change every year. These are the
              things you need to confirm with the IR office, not rely on a
              website.
            </p>
          </Fade>
          <Fade delay={100}>
            <div
              className="bg-card border border-border rounded-2xl p-6 mb-5 shadow-subtle"
              data-ocid="study_abroad.verify_list"
            >
              <ul className="space-y-4">
                {thingsToVerify.map((item, i) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex items-start gap-4 text-sm text-muted-foreground pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <span className="font-display font-bold text-primary text-base shrink-0 w-6">
                      {i + 1}.
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
          <Fade delay={200}>
            <div className="callout-teal">
              <span className="font-semibold">Official source: </span>
              Visit{" "}
              <a
                href="https://vitap.ac.in/international-relations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
                data-ocid="study_abroad.ir_link"
              >
                vitap.ac.in/international-relations
              </a>{" "}
              or go in person to the International Relations Office on campus
              for current program details, the active partner university list,
              and application timelines.
            </div>
          </Fade>
        </div>
      </section>

      {/* Summary */}
      <section
        className="bg-muted/30 px-6 py-12"
        data-ocid="study_abroad.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <div
              className="bg-card border border-border rounded-2xl p-6 shadow-subtle"
              style={{ borderLeft: "4px solid oklch(var(--primary) / 0.6)" }}
            >
              <p className="text-label mb-2">Bottom line</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-3xl">
                VIT-AP does have structured study abroad options — ITP for a
                partial degree transfer and SAP for a semester exchange, both
                with credit transfer back to VIT-AP. The university has
                international partnerships, and the programs are real. But
                they're not well-publicized, seats are limited, and the details
                change annually. If this matters to you, start asking in your
                second year — don't wait until third.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </Layout>
  );
}
