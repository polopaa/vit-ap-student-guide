import { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";

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
}: { children: React.ReactNode; className?: string; delay?: number }) {
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

const evalItems = [
  {
    code: "CAT-1",
    marks: "15",
    detail:
      "~50 minutes. Scripts are returned after — use that to understand where you went wrong. Treat this as a real exam, not a warmup.",
  },
  {
    code: "CAT-2",
    marks: "15",
    detail:
      "Same format, same weight as CAT-1. Held later in the semester. Prepare for it the same way — same level of seriousness.",
  },
  {
    code: "Assignments",
    marks: "30",
    detail:
      "Minimum 3 digital assignments × 10 marks each. They're spread across the semester — don't leave them for the last week. This is easy marks if you're consistent.",
  },
  {
    code: "FAT",
    marks: "40",
    detail:
      "3 hours, centrally conducted. Your single biggest component. Missing it without valid reason is a serious problem — there's almost no recovery.",
  },
];

const semesterSteps = [
  {
    step: "01",
    title: "Course Registration on VTOP",
    body: "You pick your courses and time slots. Popular faculty fills up within minutes. In your first semester, this is done for you — the college assigns your slots. FFCS kicks in from semester 2.",
  },
  {
    step: "02",
    title: "Classes Begin",
    body: "Attendance is tracked from day one, per course. Don't skip early classes thinking they don't count yet. They do.",
  },
  {
    step: "03",
    title: "CAT-1",
    body: "Mid-semester, ~50 minutes, 15 marks. Scripts are returned — review them carefully. These are your practice for CAT-2.",
  },
  {
    step: "04",
    title: "Digital Assignments",
    body: "At least 3, worth 30 marks total. They run throughout the semester. Steady effort here beats a last-minute rush.",
  },
  {
    step: "05",
    title: "CAT-2",
    body: "Same format as CAT-1, 15 marks, held later. Treat it with the same seriousness as CAT-1 — nothing changes.",
  },
  {
    step: "06",
    title: "FAT",
    body: "Final Assessment Test — 3 hours, 40 marks, centrally conducted at semester end. The biggest single component.",
  },
];

const letterGrades = [
  { grade: "S", points: "10", meaning: "Excellent — Pass" },
  { grade: "A", points: "9", meaning: "Very Good — Pass" },
  { grade: "B", points: "8", meaning: "Good — Pass" },
  { grade: "C", points: "7", meaning: "Average — Pass" },
  { grade: "D", points: "6", meaning: "Satisfactory" },
  { grade: "E", points: "5", meaning: "Passed (barely)" },
  { grade: "F", points: "0", meaning: "Fail — must re-register" },
  { grade: "N", points: "0", meaning: "Incomplete / Debarred" },
  { grade: "W", points: "—", meaning: "Withdrawn (not counted in CGPA)" },
];

const theorySlots: { time: string; slots: string[] }[] = [
  { time: "8:00 – 8:50", slots: ["A1", "F1", "D1", "TB1", "TG1"] },
  { time: "9:00 – 9:50", slots: ["B1", "G1", "E1", "TC1", "TA1"] },
  { time: "10:00 – 10:50", slots: ["C1", "A1", "F1", "TD1", "TB1"] },
  { time: "11:00 – 11:50", slots: ["D1", "B1", "G1", "TE1", "TC1"] },
  { time: "12:00 – 12:50", slots: ["E1", "C1", "A1", "TF1", "TD1"] },
  { time: "14:00 – 14:50", slots: ["F1", "D1", "B1", "TG1", "TE1"] },
  { time: "15:00 – 15:50", slots: ["G1", "E1", "C1", "TA1", "TF1"] },
];

const labSlots: { time: string; slots: string[] }[] = [
  {
    time: "8:00 – 9:50",
    slots: ["L1+L2", "L7+L8", "L13+L14", "L19+L20", "L25+L26", "L31+L32"],
  },
  {
    time: "10:00 – 11:50",
    slots: ["L3+L4", "L9+L10", "L15+L16", "L21+L22", "L27+L28", "L33+L34"],
  },
  {
    time: "12:00 – 13:50",
    slots: ["L5+L6", "L11+L12", "L17+L18", "L23+L24", "L29+L30", "L35+L36"],
  },
  { time: "14:00 – 15:50", slots: ["L37+L38", "L39+L40", "", "", "", ""] },
];

const attendanceRows = [
  {
    pct: "≥ 80%",
    status: "Safe",
    consequence: "You're comfortable — but don't get complacent.",
    color: "green",
  },
  {
    pct: "75–79%",
    status: "Caution",
    consequence: "One more absence could bar you from the next exam.",
    color: "amber",
  },
  {
    pct: "< 75%",
    status: "Debarred",
    consequence: "Cannot sit for next CAT or FAT for that specific course.",
    color: "red",
  },
  {
    pct: "Barred from FAT",
    status: "N Grade",
    consequence: "Must re-register the entire course next semester.",
    color: "red",
  },
];

const pros = [
  "Scripts returned after CAT-1 — actually useful feedback",
  "FFCS lets you build your own timetable from sem 2",
  "Clear marking scheme — you know exactly what counts",
  "FAT is centrally conducted — less room for bias",
];

const cons = [
  "Faculty quality is inconsistent — it's luck-based",
  "Whether a missed quiz gets a retest is up to the professor",
  "Relative grading means average scores don't guarantee good grades",
  "Backlogs cost ₹6,000 each — professors can and do fail students",
];

export default function Academics() {
  return (
    <Layout>
      <style>{`
        .reveal-block { opacity:0; transform:translateY(1.5rem); transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1); }
        .reveal-block.is-visible { opacity:1; transform:translateY(0); }
        @media(prefers-reduced-motion:reduce){.reveal-block{opacity:1;transform:none;transition:none;}}
        .slot-tag { display:inline-block; padding:.15rem .5rem; font-size:.7rem; font-weight:700; letter-spacing:.05em; border-radius:4px; }
      `}</style>

      {/* ── Page Header ── */}
      <section
        className="bg-card border-b border-border pt-28 pb-12 px-6"
        data-ocid="academics.page_header"
      >
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-up fade-in-up-delay-1">
            <span className="text-label">Academics</span>
          </div>
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-bold text-foreground mt-3 mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.15 }}
            data-ocid="academics.page_title"
          >
            How the academic system works — honestly
          </h1>
          <p className="fade-in-up fade-in-up-delay-3 font-body text-muted-foreground text-lg max-w-2xl leading-relaxed">
            I'll walk you through the semester structure, what the exams are
            actually like, how grades are decided, and what to watch out for. No
            jargon — just what you actually need to know.
          </p>
        </div>
      </section>

      {/* ── Rating Card ── */}
      <section
        className="bg-background px-6 py-10"
        data-ocid="academics.rating_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="card-clean p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Rating */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="rating-badge w-16 h-16 text-xl font-bold">
                    6/10
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-base">
                      Academics
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">
                      depends heavily on which faculty you get
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-px self-stretch bg-border" />
                {/* Pro / Con */}
                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                  <div className="callout-pro" data-ocid="academics.pros_card">
                    <p className="font-display font-semibold mb-2 text-sm">
                      What works
                    </p>
                    <ul className="space-y-1.5">
                      {pros.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="callout-con" data-ocid="academics.cons_card">
                    <p className="font-display font-semibold mb-2 text-sm">
                      What doesn't
                    </p>
                    <ul className="space-y-1.5">
                      {cons.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✗</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Semester Workflow ── */}
      <section
        className="px-6 py-14 border-t border-border bg-muted/30"
        data-ocid="academics.overview_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">The flow</span>
            <h2 className="text-section text-foreground mt-2 mb-8">
              Your semester, step by step
            </h2>
          </Reveal>
          <div className="space-y-3">
            {semesterSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 55}>
                <div className="card-clean p-5 flex gap-5 items-start">
                  <span
                    className="font-display font-bold text-2xl leading-none shrink-0 w-8 text-right"
                    style={{ color: "oklch(var(--primary) / 0.35)" }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-1">
                      {s.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div
              className="mt-6 rounded-xl px-5 py-4 border text-sm font-body text-muted-foreground"
              style={{
                background: "oklch(var(--primary) / 0.05)",
                borderColor: "oklch(var(--primary) / 0.2)",
              }}
            >
              Internals (CAT-1 + CAT-2 + Assignments = 60 marks) + FAT (40
              marks) = 100 total. Grades are relative — not a fixed percentage
              cutoff.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marks Breakdown ── */}
      <section
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="academics.evaluation_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">What's worth what</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Marks breakdown
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              Knowing this early helps you prioritise. The grading system can
              feel inconsistent — whether you get a retest for a missed quiz
              depends entirely on your faculty.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {evalItems.map((row, i) => (
              <Reveal key={row.code} delay={i * 60}>
                <div
                  className="card-clean p-6 flex flex-col gap-3"
                  data-ocid={`academics.eval.${row.code.toLowerCase().replace("-", "")}`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className="font-display font-bold text-2xl"
                      style={{
                        color:
                          i < 2
                            ? "oklch(var(--primary))"
                            : "oklch(var(--foreground))",
                      }}
                    >
                      {row.code}
                    </span>
                    <span
                      className="font-display font-bold text-3xl"
                      style={{ color: "oklch(var(--secondary))" }}
                    >
                      {row.marks}
                      <span className="font-body text-xs text-muted-foreground font-normal ml-1">
                        marks
                      </span>
                    </span>
                  </div>
                  <div className="h-px bg-border" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {row.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-4 card-clean p-5 flex items-center justify-between">
              <span className="font-display font-bold text-lg text-foreground">
                TOTAL
              </span>
              <span
                className="font-display font-bold text-3xl"
                style={{ color: "oklch(var(--secondary))" }}
              >
                100{" "}
                <span className="font-body text-xs text-muted-foreground font-normal">
                  marks
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FFCS ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="academics.ffcs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Timetable system</span>
            <h2 className="text-section text-foreground mt-2 mb-6">
              FFCS &amp; how it works
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card-clean p-6 h-full">
                <p className="font-body text-muted-foreground leading-relaxed mb-4 text-sm">
                  FFCS — Fully Flexible Credit System — means you build your own
                  timetable. Every student picks their own time slots during the
                  registration window on VTOP. No two students need to have the
                  same schedule.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  <strong className="text-foreground">
                    Your first semester is the exception.
                  </strong>{" "}
                  The college assigns your slots for you — FFCS kicks in from
                  semester 2. Once you have the control, you'll appreciate it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card-clean p-6 h-full">
                <ul className="space-y-3">
                  {[
                    "Each course has multiple slot options (A1, B1, C1…) — fixed time blocks spread across the week",
                    "Theory and lab are registered separately with different slot codes",
                    "You can avoid 8 AM slots — but popular faculty fills up within minutes",
                    "Minimum: 16 credits per semester. Maximum: 27 credits",
                    "No one will remind you — registration is entirely your responsibility",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-body text-muted-foreground"
                    >
                      <span
                        className="shrink-0 mt-0.5 text-xs font-bold"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Slot Timetable ── */}
      <section
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="academics.timetable_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">First semester</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Your assigned timetable
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              In your first sem, you won't pick slots — the college assigns
              them. From semester 2, FFCS gives you full control to build your
              own schedule.
            </p>
          </Reveal>

          <Reveal delay={50}>
            <div className="mb-8">
              <p className="text-label mb-4">Theory Slots — Monday to Friday</p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="py-3 px-4 text-left font-mono text-xs text-muted-foreground border-b border-border min-w-[110px]">
                        Time
                      </th>
                      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                        <th
                          key={d}
                          className="py-3 px-4 text-center font-display font-semibold text-sm text-foreground border-b border-l border-border min-w-[72px]"
                        >
                          {d}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {theorySlots.map((row, i) => (
                      <tr
                        key={row.time}
                        className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                      >
                        <td className="py-3 px-4 font-mono text-xs text-muted-foreground border-b border-border whitespace-nowrap">
                          {row.time}
                        </td>
                        {row.slots.map((slot, j) => (
                          <td
                            key={`theory-${row.time}-${j}`}
                            className="py-3 px-4 border-b border-l border-border text-center"
                          >
                            {slot ? (
                              <span
                                className="slot-tag font-display font-bold"
                                style={{
                                  background: "oklch(var(--primary) / 0.1)",
                                  color: "oklch(var(--primary))",
                                  border:
                                    "1px solid oklch(var(--primary) / 0.25)",
                                }}
                              >
                                {slot}
                              </span>
                            ) : (
                              <span className="text-muted-foreground opacity-30">
                                —
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-2">
                T-slots (TA1–TG1) are tutorial slots that come with some theory
                courses.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="text-label mb-4">Lab Slots — Monday to Saturday</p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="py-3 px-4 text-left font-mono text-xs text-muted-foreground border-b border-border min-w-[110px]">
                        Time
                      </th>
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <th
                          key={d}
                          className="py-3 px-4 text-center font-display font-semibold text-sm text-foreground border-b border-l border-border min-w-[72px]"
                        >
                          {d}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {labSlots.map((row, i) => (
                      <tr
                        key={row.time}
                        className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                      >
                        <td className="py-3 px-4 font-mono text-xs text-muted-foreground border-b border-border whitespace-nowrap">
                          {row.time}
                        </td>
                        {row.slots.map((slot, j) => (
                          <td
                            key={`lab-${row.time}-${j}`}
                            className="py-3 px-4 border-b border-l border-border text-center"
                          >
                            {slot ? (
                              <span
                                className="slot-tag font-display font-bold"
                                style={{
                                  background: "oklch(var(--secondary) / 0.08)",
                                  color: "oklch(var(--secondary))",
                                  border:
                                    "1px solid oklch(var(--secondary) / 0.25)",
                                }}
                              >
                                {slot}
                              </span>
                            ) : (
                              <span className="text-muted-foreground opacity-30">
                                —
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-2">
                Lab slots are 2 hours each. Your lab course occupies two
                consecutive L-slots (e.g., L1+L2).
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Attendance ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="academics.attendance_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Attendance rules</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Don't play games with this
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              75% is the minimum — don't treat it as a target. Aim for 85%+ to
              give yourself a buffer. Each course is tracked separately, not
              combined.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {attendanceRows.map((row, i) => (
              <Reveal key={row.pct} delay={i * 60}>
                <div
                  className="card-clean p-5 flex flex-col gap-2"
                  data-ocid={`academics.attendance.${i + 1}`}
                >
                  <code
                    className="font-mono font-bold text-lg"
                    style={{
                      color:
                        row.color === "green"
                          ? "oklch(0.5 0.14 150)"
                          : row.color === "amber"
                            ? "oklch(var(--secondary))"
                            : "oklch(0.5 0.2 25)",
                    }}
                  >
                    {row.pct}
                  </code>
                  <span
                    className="font-display font-semibold text-xs uppercase tracking-wide"
                    style={{
                      color:
                        row.color === "green"
                          ? "oklch(0.45 0.14 150)"
                          : row.color === "amber"
                            ? "oklch(var(--secondary))"
                            : "oklch(0.45 0.2 25)",
                    }}
                  >
                    {row.status}
                  </span>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {row.consequence}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div
              className="mt-5 rounded-xl px-5 py-4 border text-sm font-body text-muted-foreground"
              style={{
                background: "oklch(var(--primary) / 0.05)",
                borderColor: "oklch(var(--primary) / 0.2)",
              }}
            >
              Check your attendance on VTOP at least once a week. By the time
              you're at 74%, it's usually too late to fix it.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Grading ── */}
      <section
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="academics.grading_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Grades &amp; GPA</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              How your grade is decided
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              VIT-AP uses{" "}
              <strong className="text-foreground">relative grading</strong> for
              most theory courses. Your grade depends on how you performed
              compared to everyone else in your class — not a fixed percentage.
              A 70% might get you a B in one batch and a C in another.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="py-3 px-6 text-left font-display font-semibold text-sm text-foreground">
                      Grade
                    </th>
                    <th className="py-3 px-6 text-right font-display font-semibold text-sm text-foreground">
                      Points
                    </th>
                    <th className="py-3 px-6 text-left font-display font-semibold text-sm text-foreground">
                      What it means
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {letterGrades.map((row, i) => (
                    <tr
                      key={row.grade}
                      className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
                    >
                      <td className="py-3 px-6">
                        <span
                          className="font-display font-bold text-xl"
                          style={{
                            color:
                              row.grade === "F" || row.grade === "N"
                                ? "oklch(0.5 0.2 25)"
                                : row.grade === "S" || row.grade === "A"
                                  ? "oklch(0.5 0.14 150)"
                                  : "oklch(var(--foreground))",
                          }}
                        >
                          {row.grade}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-right font-mono font-bold text-foreground text-sm">
                        {row.points}
                      </td>
                      <td className="py-3 px-6 font-body text-sm text-muted-foreground">
                        {row.meaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="mt-4 rounded-xl px-5 py-4 border font-mono text-sm"
              style={{
                background: "oklch(var(--muted))",
                borderColor: "oklch(var(--border))",
              }}
            >
              <span className="text-muted-foreground">CGPA = </span>
              <span className="text-foreground font-bold">
                Σ(Credits × Grade Points) ÷ Σ(Total Credits)
              </span>
            </div>
            <div
              className="mt-3 rounded-xl px-5 py-4 border text-sm font-body text-muted-foreground"
              style={{
                background: "oklch(var(--secondary) / 0.06)",
                borderColor: "oklch(var(--secondary) / 0.25)",
              }}
            >
              Most placement companies have CGPA cutoffs — typically 6.5 or 7.0.
              Keep that in mind from day one. CGPA × 10 to convert to
              percentage.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Backlogs ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="academics.backlogs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">If you fail</span>
            <h2 className="text-section text-foreground mt-2 mb-2">Backlogs</h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              If you get a backlog, it'll cost you around ₹6,000 to clear it.
              Professors here can be strict — don't assume you'll scrape
              through. A backlog isn't the end of the world, but it's expensive
              and slows your CGPA recovery.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div
                className="card-clean p-6 h-full"
                data-ocid="academics.fail_card"
              >
                <div
                  className="inline-flex items-center gap-2 text-xs font-display font-semibold mb-4 px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.97 0.015 25)",
                    color: "oklch(0.45 0.18 25)",
                    border: "1px solid oklch(0.88 0.05 25)",
                  }}
                >
                  F Grade — Full Failure
                </div>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    You failed the course overall
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Must re-register the full course next semester
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Re-registration fee ~₹6,000. It's not cheap
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    F stays in your CGPA until you clear it
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div
                className="card-clean p-6 h-full"
                data-ocid="academics.n_grade_card"
              >
                <div
                  className="inline-flex items-center gap-2 text-xs font-display font-semibold mb-4 px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(var(--secondary) / 0.1)",
                    color: "oklch(var(--secondary))",
                    border: "1px solid oklch(var(--secondary) / 0.3)",
                  }}
                >
                  N Grade — Incomplete
                </div>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Barred from exam due to low attendance, or missed the FAT
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Can re-register only the failed component, not the full
                    course
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Re-registration fee still applies
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5 text-xs"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Clear it fast — placement filters catch open backlogs
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Summary ── */}
      <section
        className="bg-card px-6 py-12 border-t border-border"
        data-ocid="academics.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="rounded-xl p-6 border-l-4"
              style={{
                background: "oklch(var(--primary) / 0.04)",
                borderLeftColor: "oklch(var(--primary))",
                border: "1px solid oklch(var(--primary) / 0.15)",
                borderLeft: "4px solid oklch(var(--primary))",
              }}
            >
              <p className="text-label mb-3">The short version</p>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl">
                Each semester: CAT-1 (15) + CAT-2 (15) + Assignments (30) + FAT
                (40) = 100 marks. Maintain 75%+ attendance per course — aim
                higher. Grades are relative to your class. Your first semester
                slots are assigned; from semester two, FFCS gives you control.
                Keep CGPA above 7.0 and clear backlogs fast — placement
                eligibility depends on it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
