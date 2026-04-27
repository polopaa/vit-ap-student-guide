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
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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

const expectationsVsReality = [
  {
    expectation: "Great faculty who'll guide you",
    reality:
      "Quality varies a lot — you might get amazing professors or completely indifferent ones. It's luck-based, honestly.",
  },
  {
    expectation: "Placements will be handled for you",
    reality:
      "No one is going to push you. If you want a good placement, start building your skills from year one.",
  },
  {
    expectation: "Vibrant campus life",
    reality:
      "It depends entirely on which clubs you join and who you hang out with. The campus is still developing.",
  },
  {
    expectation: "Decent food every day",
    reality:
      "It's fine most days. Peak hours are rough. You'll definitely be ordering Swiggy regularly.",
  },
  {
    expectation: "Freedom from home rules",
    reality:
      "There are curfews (8:30pm), fines for violations, and the ladies' hostel authorities are strict. Read the rules before you assume otherwise.",
  },
];

const wishIKnew = [
  {
    icon: "💻",
    tip: "Start coding projects from day one, not from third year. It makes a huge difference when placement season comes.",
  },
  {
    icon: "📅",
    tip: "The FFCS system (from second semester) means you pick your own subjects and slots. Learn to use it well — bad timing choices ruin your sleep schedule.",
  },
  {
    icon: "🤝",
    tip: "Join at least one club in your first semester. Not for the resume — just to meet people outside your section.",
  },
  {
    icon: "📚",
    tip: "Ask seniors before every exam. PYQs (previous year questions) are gold. Most questions repeat more than you'd expect.",
  },
  {
    icon: "😤",
    tip: "If you get a strict faculty, it's frustrating — but it won't end your semester. Most people get through it fine.",
  },
  {
    icon: "💸",
    tip: "Hostel fines add up fast. Know the rules and save yourself the stress — there are fines for almost everything.",
  },
  {
    icon: "🍕",
    tip: "Swiggy is your best friend here. Zomato doesn't deliver to campus, so don't count on it.",
  },
];

const firstWeekChecklist = [
  {
    task: "Get your Student ID and VTOP access sorted",
    note: "VTOP is where everything happens — attendance, marks, leave applications. Set it up on day one.",
  },
  {
    task: "Find your section classroom and check your slot timetable",
    note: "First semester slots are assigned by management. Confirm your rooms early so you're not lost on day one.",
  },
  {
    task: "Download the VTOP app",
    note: "You'll need it constantly. Better to have it set up before classes start.",
  },
  {
    task: "Sort out your mess registration",
    note: "If you're staying in the hostel, this needs to be done early. Don't assume it's automatic.",
  },
  {
    task: "Buy essentials from the move-in stalls on campus",
    note: "Mattresses, buckets, and basic room supplies are available at special stalls during move-in. Don't panic if you forgot stuff.",
  },
  {
    task: "Locate the health center and pharmacy",
    note: "Know where these are before you actually need them in an emergency.",
  },
  {
    task: "Introduce yourself to at least 5 people",
    note: "The first week is the easiest time to make friends. Everyone is equally lost — use that to your advantage.",
  },
];

const practicalAdvice = [
  {
    area: "Academics",
    icon: "📖",
    color: "border-primary/30 bg-primary/5",
    accentColor: "text-primary",
    tips: [
      "Attend your CAT-1 no matter what — both CAT exams count equally, don't blow off the first one.",
      "Don't skip quizzes — they carry similar weightage to CAT exams and missing even one hurts.",
      "Ask your faculty for your marks after each evaluation. Most won't tell you unless you ask.",
      "Re-evaluation exists for FAT — if something feels wrong, you can formally challenge it.",
    ],
  },
  {
    area: "Hostel",
    icon: "🏠",
    color: "border-secondary/30 bg-secondary/5",
    accentColor: "text-secondary",
    tips: [
      "Be back by 8:30pm — curfew is enforced, especially in the ladies' hostel.",
      "Keep your room receipt and ID handy at all times. You'll be asked for them.",
      "Use the gym in the early morning (5–8am) before it gets crowded. After that, it's packed.",
      "Male hostels are more relaxed than ladies' hostels, but fines apply everywhere. Know the rules.",
    ],
  },
  {
    area: "Food",
    icon: "🍛",
    color: "border-green-500/20 bg-green-50/50",
    accentColor: "text-green-700",
    tips: [
      "Eat off-peak if you can — peak hours (especially lunch) are chaotic and the food runs out.",
      "Night canteens are open 10:30pm–12:00am if you're hungry late.",
      "Swiggy has most nearby restaurants and actually delivers here. Zomato doesn't, don't bother.",
      "Keep some basic snacks in your room. There will be days when the mess just isn't it.",
    ],
  },
  {
    area: "Social Life",
    icon: "🧑‍🤝‍🧑",
    color: "border-purple-500/20 bg-purple-50/50",
    accentColor: "text-purple-700",
    tips: [
      "Most people are just as lost as you in week one — use that as a conversation starter.",
      "Clubs are the fastest way to make friends outside your section. Join one early.",
      "Hackathons and events happen regularly on campus — keep an eye on club announcements.",
      "Don't isolate yourself if you're struggling. There are people here going through the same thing.",
    ],
  },
];

export default function Survival() {
  return (
    <Layout>
      {/* Page Header */}
      <section
        className="bg-background border-b border-border/40 px-6 pt-16 pb-14"
        data-ocid="survival.page"
      >
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <p className="text-label mb-4" data-ocid="survival.page_label">
              For Freshers &amp; Prospective Students
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 leading-tight"
              data-ocid="survival.page_title"
            >
              The Survival Guide
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Everything I wish someone had told me before I started. Read this
              before your first week — it'll save you a lot of unnecessary
              stress.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Expectations vs Reality",
                "Things to Know",
                "First Week",
                "Practical Tips",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Expectation vs Reality */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border/40"
        data-ocid="survival.expectations_section"
      >
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Before You Arrive</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              What to Expect vs. Reality
            </h2>
            <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
              Honestly, the gap between expectations and reality here isn't
              dramatic — but it's real. These are the ones I see trip people up
              the most.
            </p>
          </FadeSection>
          <div className="space-y-4" data-ocid="survival.expectations_list">
            {expectationsVsReality.map((item, i) => (
              <FadeSection key={item.expectation} delay={i * 70}>
                <div
                  className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
                  data-ocid={`survival.expectation.${i + 1}`}
                >
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
                    <div className="px-6 py-5">
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                        You expect
                      </p>
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        {item.expectation}
                      </p>
                    </div>
                    <div className="px-6 py-5 bg-primary/5">
                      <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                        Reality
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.reality}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Things I Wish I Knew */}
      <section
        className="bg-background px-6 py-16 border-b border-border/40"
        data-ocid="survival.tips_section"
      >
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Honestly</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Things I Wish I Knew Before Joining
            </h2>
            <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
              These aren't big dramatic revelations — just practical things that
              take most students too long to figure out on their own.
            </p>
          </FadeSection>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="survival.tips_list"
          >
            {wishIKnew.map((item, i) => (
              <FadeSection key={item.tip.slice(0, 30)} delay={i * 60}>
                <Card
                  className="h-full bg-card border border-border shadow-sm hover:shadow-md transition-smooth hover:-translate-y-0.5"
                  data-ocid={`survival.tip.${i + 1}`}
                >
                  <CardContent className="p-5">
                    <span className="text-2xl mb-3 block" aria-hidden="true">
                      {item.icon}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.tip}
                    </p>
                  </CardContent>
                </Card>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* First Week Checklist */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border/40"
        data-ocid="survival.checklist_section"
      >
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Your First 48 Hours</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              First Week Checklist
            </h2>
            <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
              This sounds basic, but most freshers miss at least two of these in
              the chaos of move-in week. Don't be that person who finds out
              their VTOP isn't working the night before an exam.
            </p>
          </FadeSection>
          <div className="space-y-3" data-ocid="survival.checklist_list">
            {firstWeekChecklist.map((item, i) => (
              <FadeSection key={item.task} delay={i * 60}>
                <div
                  className="bg-card rounded-xl border border-border px-6 py-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-smooth"
                  data-ocid={`survival.checklist.${i + 1}`}
                >
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-foreground mb-1">
                      {item.task}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Advice by Area */}
      <section
        className="bg-background px-6 py-16 border-b border-border/40"
        data-ocid="survival.advice_section"
      >
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Area by Area</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Practical Advice
            </h2>
            <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
              Quick, honest, and specific — one section at a time. No fluff.
            </p>
          </FadeSection>
          <div
            className="grid sm:grid-cols-2 gap-5"
            data-ocid="survival.advice_list"
          >
            {practicalAdvice.map((area, i) => (
              <FadeSection key={area.area} delay={i * 80}>
                <Card
                  className={`h-full border ${area.color} shadow-sm hover:shadow-md transition-smooth`}
                  data-ocid={`survival.advice.${i + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-2xl" aria-hidden="true">
                        {area.icon}
                      </span>
                      <h3
                        className={`font-display text-lg font-bold ${area.accentColor}`}
                      >
                        {area.area}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {area.tips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span
                            className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${area.accentColor.replace("text-", "bg-")}`}
                            aria-hidden="true"
                          />
                          <span>{tip}</span>
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

      {/* Closing note */}
      <section
        className="bg-muted/30 px-6 py-12"
        data-ocid="survival.closing_section"
      >
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <div className="bg-card border border-primary/20 rounded-xl px-8 py-7 shadow-sm">
              <p className="text-label mb-3">One Last Thing</p>
              <p className="text-base text-foreground font-medium leading-relaxed max-w-2xl mb-3">
                VIT-AP isn't going to make or break you.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Honestly — most of what you get out of here depends on what you
                put in. The students who do well are the ones who stay curious,
                build things, connect with people, and don't wait for someone to
                push them. The rest kind of drifts through and wonders why
                nothing happened. You already know which one you want to be.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
