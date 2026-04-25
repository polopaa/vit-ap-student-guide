import { Badge } from "@/components/ui/badge";
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

function FadeSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const commonMistakes = [
  {
    mistake: "Ignoring CAT 1",
    fix: "I know you'll think it doesn't matter that much. It does. CAT 2 alone cannot compensate — both exams count equally.",
  },
  {
    mistake: "Not tracking attendance",
    fix: "Check VTOP weekly. Don't wait until you're already in the danger zone — by then your options are limited.",
  },
  {
    mistake: "Overloading credits in Sem 1",
    fix: "Start lighter, understand FFCS and the grading system first, then scale up from Sem 2.",
  },
  {
    mistake: "Picking subjects only for easy grades",
    fix: "Balance scoring subjects with ones that actually build skills — you'll need both for placements.",
  },
  {
    mistake: "Skipping classes casually",
    fix: "Every skip counts toward your percentage. Plan your bunks — don't just miss class without thinking about it.",
  },
  {
    mistake: "Missing academic calendar deadlines",
    fix: "Mark registration, withdrawal, and exam dates at the start of semester. Missing these has real consequences.",
  },
];

const keyStats = [
  {
    value: "75%",
    label: "Minimum attendance required to sit for exams",
    icon: "📊",
  },
  {
    value: "85%+",
    label: "What I'd actually aim for — give yourself a buffer",
    icon: "✅",
  },
  { value: "15 marks", label: "Each CAT exam (CAT 1 + CAT 2)", icon: "📝" },
  { value: "40 marks", label: "FAT (Final) exam weightage", icon: "🎯" },
  {
    value: "2 weeks",
    label: "Minimum time before finals to start serious revision",
    icon: "🗓️",
  },
  { value: "10 CGPA", label: "Maximum CGPA possible", icon: "🏆" },
];

const outingRules = [
  {
    type: "General Outing",
    icon: "🚶",
    details: [
      "Requires both your Proctor (mentor) and warden approval",
      "Apply on VTOP at least 24 hours in advance — don't wait till the last minute",
      "You must return before the time stated in the pass",
      "Available any day, subject to approval",
    ],
  },
  {
    type: "Weekend Outing",
    icon: "🏖️",
    details: [
      "Only warden approval needed — no mentor sign-off required",
      "Available on Sundays and Mondays only",
      "Single day outing — you must return the same day",
      "Freshers are NOT allowed weekend outings for the first 3 months",
    ],
  },
];

export default function Survival() {
  return (
    <Layout>
      {/* Chapter Hero */}
      <section className="section-bg-light px-6 pt-20 pb-16 border-b border-border/30">
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-4" data-ocid="survival.page_label">
            Chapter
          </p>
          <h1 className="text-hero text-foreground mb-6 fade-in-up">
            SURVIVAL
            <br />
            GUIDE
          </h1>
          <div className="gold-underline w-16 mb-8" />
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-1">
            This is the stuff most students only figure out after they've
            already made the mistakes. I'm putting it here so you don't have to
            learn it the hard way — exams, attendance, outings, mentoring. Read
            this before your first week.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "📝 Exam Prep",
              "📊 Attendance",
              "🗓️ Time Management",
              "🧑‍🏫 Mentoring",
              "🚪 Outing Rules",
            ].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="survival.stats_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Memorize These</p>
            <h2 className="text-section text-foreground mb-2">
              Numbers That Matter
            </h2>
            <div className="gold-underline w-12 mb-8" />
          </FadeSection>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="survival.numbers_list"
          >
            {keyStats.map((stat, i) => (
              <FadeSection key={stat.value} delay={i * 60}>
                <div
                  className="border border-border/40 bg-card p-6 text-center transition-smooth hover:border-secondary/40"
                  data-ocid={`survival.stat.${i + 1}`}
                >
                  <div className="text-2xl mb-3" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <p className="font-display text-3xl font-black text-secondary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Prep + Attendance */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="survival.exam_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">What Actually Works</p>
            <h2 className="text-section text-foreground mb-2">
              Exams & Attendance
            </h2>
            <div className="gold-underline w-12 mb-8" />
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📝",
                title: "How to approach exams",
                items: [
                  "Start revising at least 2 weeks before finals — not the night before. I cannot stress this enough.",
                  "PYQs are your best friend. Many questions repeat — use them.",
                  "CAT exams (15 marks each) are easier to score in than the FAT. Don't underestimate them.",
                  "Form study groups for tough subjects — explaining things out loud forces you to actually understand them",
                  "Don't ignore assignments and quizzes — every mark counts toward your internal",
                ],
              },
              {
                icon: "📊",
                title: "Managing attendance",
                items: [
                  "75% is the cutoff — but I'd aim for 85%+. You will get sick, you'll want to travel, things come up. Don't burn your buffer in month 1.",
                  "Track it weekly on VTOP. Don't wait until it's critical.",
                  "Calculate your 'safe bunk limit' per subject at the start of semester",
                  "If you fall below 75%, approach your faculty proctor before the shortage becomes official",
                ],
              },
            ].map((group, gi) => (
              <FadeSection key={group.title} delay={gi * 100}>
                <Card className="card-cinema h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        {group.icon}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-secondary mt-0.5 shrink-0 font-bold">
                            →
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proctor */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="survival.mentoring_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">You Have Support — Use It</p>
            <h2 className="text-section text-foreground mb-2">Your Proctor</h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Every student gets assigned a faculty mentor called a Proctor.
              They're your go-to person for academic issues, leave applications,
              and attendance problems. In my experience, reaching out early is
              always better than waiting until things get messy.
            </p>
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🧑‍🏫",
                title: "What your Proctor actually does",
                items: [
                  "Monitors your academic performance and flags concerns early",
                  "Approves leave applications submitted via VTOP",
                  "Keeps an eye on your attendance and can intervene if you're struggling",
                  "Can refer you to personal counseling if you're going through something",
                  "First point of contact for any hostel-related academic issues",
                ],
              },
              {
                icon: "📋",
                title: "Leave & attendance relaxation",
                items: [
                  "Submit leave applications on VTOP at least 48 hours in advance",
                  "Always attach supporting documents — no documents means no approval",
                  "Up to 10% additional attendance relaxation may be granted for:",
                  "  → Hospitalization (with discharge summary)",
                  "  → Death of an immediate family member (death certificate required)",
                  "  → Sibling's marriage (marriage invitation required)",
                ],
              },
            ].map((group, gi) => (
              <FadeSection key={group.title} delay={gi * 100}>
                <Card className="card-cinema h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        {group.icon}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-secondary mt-0.5 shrink-0 font-bold">
                            →
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outing Rules */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="survival.outing_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Leaving Campus</p>
            <h2 className="text-section text-foreground mb-2">Outing Rules</h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Everything goes through VTOP — apply before you leave, not after.
              Carry your college ID and the approved outing pass whenever you
              step out.
            </p>
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            {outingRules.map((rule, i) => (
              <FadeSection key={rule.type} delay={i * 100}>
                <Card className="card-cinema h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        {rule.icon}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {rule.type}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {rule.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-0.5 shrink-0 text-secondary font-bold">
                            →
                          </span>
                          <span
                            className={
                              detail.startsWith("Freshers are NOT")
                                ? "text-destructive font-semibold"
                                : ""
                            }
                          >
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={200}>
            <div className="mt-5 border-l-2 border-destructive/60 pl-5 py-3 bg-destructive/5">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-destructive">
                  Freshers, pay attention:{" "}
                </span>
                Weekend outings are blocked for your first 3 months. General
                outings still need both Proctor and warden approval during this
                period. Plan accordingly — don't assume you can just leave on a
                Sunday.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Mistakes */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="survival.mistakes_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">I've Seen This Go Wrong</p>
            <h2 className="text-section text-foreground mb-2">
              Mistakes to Avoid
            </h2>
            <div className="gold-underline w-12 mb-8" />
          </FadeSection>
          <div className="space-y-3" data-ocid="survival.mistakes_list">
            {commonMistakes.map((item, i) => (
              <FadeSection key={item.mistake} delay={i * 60}>
                <div
                  className="border border-border/40 bg-card px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 transition-smooth hover:border-border/60"
                  data-ocid={`survival.mistake.${i + 1}`}
                >
                  <div className="flex items-center gap-3 sm:w-52 shrink-0">
                    <span
                      className="text-destructive text-lg"
                      aria-hidden="true"
                    >
                      ✗
                    </span>
                    <p className="font-display font-semibold text-foreground text-sm">
                      {item.mistake}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 min-w-0">
                    <span
                      className="text-secondary text-lg shrink-0"
                      aria-hidden="true"
                    >
                      →
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.fix}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-light px-6 py-12"
        data-ocid="survival.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="border-l-2 border-secondary/50 pl-6 py-4">
              <p className="text-label mb-2">Honestly</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Most problems students face here are avoidable — attendance
                falling, marks dropping, missing deadlines. None of it is
                complicated. Track your attendance weekly, don't wait until CAT
                2 to take academics seriously, stay in touch with your Proctor,
                and apply for outings properly. Do these things and you'll be
                ahead of most of your batch.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
