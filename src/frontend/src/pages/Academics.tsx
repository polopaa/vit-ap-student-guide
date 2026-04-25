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
      "~50 minutes. Scripts returned after so you can see what went wrong. Use that feedback.",
  },
  {
    code: "CAT-2",
    marks: "15",
    detail:
      "Same format and same weight as CAT-1. Held later in the semester. Treat it identically.",
  },
  {
    code: "Assignments",
    marks: "30",
    detail:
      "Minimum 3 digital assignments × 10 marks each. Spread across the semester — don't leave them for the last week.",
  },
  {
    code: "FAT",
    marks: "40",
    detail:
      "3 hours, centrally conducted. Your single biggest component. Missing it without valid reason is a serious problem.",
  },
];

const semesterSteps = [
  {
    step: "01",
    title: "Registration on VTOP",
    body: "You pick your courses and time slots. Popular faculty fills up within minutes. In your first semester, this is done for you — the college assigns your slots.",
  },
  {
    step: "02",
    title: "Classes Begin",
    body: "Attendance is tracked from day one, per course. Don't skip early classes thinking they don't count yet. They do.",
  },
  {
    step: "03",
    title: "CAT-1",
    body: "Mid-semester, ~50 minutes, 15 marks. Scripts are returned — review them. These are your practice for CAT-2.",
  },
  {
    step: "04",
    title: "Digital Assignments",
    body: "At least 3, worth 30 marks total. They run throughout the semester. Steady effort here, not a last-minute rush.",
  },
  {
    step: "05",
    title: "CAT-2",
    body: "Same format as CAT-1, 15 marks, held later in the semester. Treat it with the same seriousness as CAT-1.",
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
  { grade: "W", points: "—", meaning: "Withdrawn (not in CGPA)" },
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
    consequence: "You're fine — keep it up",
    accent: "secondary",
  },
  {
    pct: "75–79%",
    status: "Caution",
    consequence: "One more absence could bar you from the next exam",
    accent: "warning",
  },
  {
    pct: "< 75%",
    status: "Debarred",
    consequence: "Cannot sit for next CAT or FAT for that course",
    accent: "primary",
  },
  {
    pct: "Debarred from FAT",
    status: "N Grade",
    consequence: "Must re-register the entire course next semester",
    accent: "primary",
  },
];

export default function Academics() {
  return (
    <Layout>
      <style>{`
        .reveal-block { opacity:0; transform:translateY(2rem); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-block.is-visible { opacity:1; transform:translateY(0); }
        @media(prefers-reduced-motion:reduce){.reveal-block{opacity:1;transform:none;transition:none;}}
        .slot-tag { display:inline-block; padding:.15rem .5rem; font-size:.7rem; font-weight:700; letter-spacing:.05em; }
      `}</style>

      {/* ── Chapter Hero ── */}
      <section className="bg-background min-h-[60vh] flex items-end px-6 pb-16 pt-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grain opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto w-full">
          <div className="fade-in-up fade-in-up-delay-1">
            <span className="chapter-label">Chapter III</span>
          </div>
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-black text-foreground leading-none tracking-tighter mt-4 mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            data-ocid="academics.chapter_title"
          >
            ACAD-
            <br />
            <span style={{ color: "oklch(var(--primary))" }}>EMICS</span>
          </h1>
          <p className="fade-in-up fade-in-up-delay-3 font-body italic text-muted-foreground text-xl max-w-2xl">
            I'll walk you through how the semester runs, what the exams are
            like, how grades are decided, and what you actually need to watch
            out for.
          </p>
          <div className="fade-in-up fade-in-up-delay-4 chapter-divider mt-8 w-24" />
        </div>
      </section>

      {/* ── How a Semester Works ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="academics.overview_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">The flow</p>
            <h2 className="text-section text-foreground mb-12">
              Your Semester,
              <br />
              Step by Step
            </h2>
          </Reveal>
          <div className="space-y-0 border-t border-border">
            {semesterSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 60}>
                <div className="flex gap-8 py-8 border-b border-border">
                  <span
                    className="font-display font-black text-5xl leading-none shrink-0 w-16 text-right"
                    style={{ color: "oklch(var(--primary) / 0.25)" }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
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
          <Reveal delay={100}>
            <div
              className="mt-8 border-l-2 pl-5 py-2"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-sm text-muted-foreground">
                Internals (CAT-1 + CAT-2 + Assignments = 60 marks) + FAT (40
                marks) = 100 total. Grades are assigned relative to how your
                class performs — not a fixed percentage cutoff.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marks Breakdown ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="academics.evaluation_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">What's worth what</p>
            <h2 className="text-section text-foreground mb-3">
              Marks
              <br />
              Breakdown
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Knowing this early helps you prioritise. Here's how the 100 marks
              are split.
            </p>
          </Reveal>
          <div className="border-t border-border">
            {evalItems.map((row, i) => (
              <Reveal
                key={row.code}
                delay={i * 70}
                data-ocid={`academics.eval.${row.code.toLowerCase().replace("-", "")}`}
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center py-8 border-b border-border">
                  <div className="sm:w-32 shrink-0">
                    <span
                      className="font-display font-black text-3xl"
                      style={{
                        color:
                          i < 2
                            ? "oklch(var(--primary))"
                            : "oklch(var(--foreground))",
                      }}
                    >
                      {row.code}
                    </span>
                  </div>
                  <div
                    className="shrink-0 text-right"
                    style={{ color: "oklch(var(--secondary))" }}
                  >
                    <span className="font-display font-black text-5xl leading-none">
                      {row.marks}
                    </span>
                    <span className="font-body text-xs text-muted-foreground ml-1 align-middle">
                      marks
                    </span>
                  </div>
                  <div
                    className="w-px h-8 shrink-0 hidden sm:block"
                    style={{ background: "oklch(var(--border))" }}
                  />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                    {row.detail}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center py-8">
                <div className="sm:w-32 shrink-0">
                  <span className="font-display font-black text-3xl text-foreground">
                    TOTAL
                  </span>
                </div>
                <div style={{ color: "oklch(var(--secondary))" }}>
                  <span className="font-display font-black text-5xl leading-none">
                    100
                  </span>
                  <span className="font-body text-xs text-muted-foreground ml-1 align-middle">
                    marks
                  </span>
                </div>
                <div
                  className="w-px h-8 shrink-0 hidden sm:block"
                  style={{ background: "oklch(var(--border))" }}
                />
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  Your grade is relative to your class — performing near the
                  average gets you a C/D range.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FFCS Section ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="academics.ffcs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Timetable system</p>
            <h2 className="text-section text-foreground mb-3">
              FFCS &amp;
              <br />
              How It Works
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-16 mt-10">
            <Reveal>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                FFCS — Fully Flexible Credit System — means you build your own
                timetable. Every student picks their own time slots during the
                registration window on VTOP. No two students need to have the
                same schedule.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Your first semester is the exception.
                </strong>{" "}
                The college assigns your slots for you — FFCS kicks in from
                semester 2. And trust me, once you have the control, you'll
                appreciate it.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="space-y-5">
                {[
                  "Each course has multiple slot options (A1, B1, C1…) — fixed time blocks spread across the week",
                  "Theory and lab are registered separately with different slot codes",
                  "You can avoid 8 AM slots if you want — but popular faculty fills up within minutes",
                  "Minimum: 16 credits per semester. Maximum: 27 credits",
                  "No one will remind you — registration is entirely your responsibility",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-sm font-body text-muted-foreground"
                  >
                    <span
                      className="shrink-0 mt-1 w-4 h-4 border flex items-center justify-center"
                      style={{ borderColor: "oklch(var(--secondary) / 0.4)" }}
                    >
                      <span
                        style={{ color: "oklch(var(--secondary))" }}
                        className="text-xs"
                      >
                        ✓
                      </span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 border-l-2 pl-4 py-1"
                style={{ borderColor: "oklch(var(--secondary))" }}
              >
                <p className="font-body text-xs text-muted-foreground">
                  Before registration opens, note your top 3 slot choices per
                  course. The window can close before you figure it out for the
                  first time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Slot Timetable ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="academics.timetable_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">First semester</p>
            <h2 className="text-section text-foreground mb-3">
              Your Assigned
              <br />
              Timetable
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-xl">
              In your first sem, you won't get to pick your slots — the college
              assigns them. This is the slot structure you'll follow as a
              fresher.
            </p>
          </Reveal>

          {/* Theory Slots */}
          <Reveal delay={50}>
            <div className="mb-10">
              <p className="text-label mb-4">Theory Slots — Monday to Friday</p>
              <div className="overflow-x-auto">
                <table
                  className="w-full border-collapse"
                  style={{ borderColor: "oklch(var(--border))" }}
                >
                  <thead>
                    <tr style={{ background: "oklch(0.12 0.01 60)" }}>
                      <th className="py-3 px-4 text-left font-mono text-xs text-muted-foreground border border-border min-w-[110px]">
                        Time
                      </th>
                      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                        <th
                          key={d}
                          className="py-3 px-4 text-center font-display font-bold text-sm text-foreground border border-border min-w-[72px]"
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
                        style={{
                          background:
                            i % 2 === 0
                              ? "oklch(var(--background))"
                              : "oklch(0.10 0.008 60)",
                        }}
                      >
                        <td className="py-3 px-4 font-mono text-xs text-muted-foreground border border-border whitespace-nowrap">
                          {row.time}
                        </td>
                        {row.slots.map((slot, j) => (
                          <td
                            key={`theory-${row.time}-${j}`}
                            className="py-3 px-4 border border-border text-center"
                          >
                            {slot ? (
                              <span
                                className="slot-tag font-display font-bold"
                                style={{
                                  background: "oklch(var(--primary) / 0.12)",
                                  color: "oklch(var(--primary))",
                                  border:
                                    "1px solid oklch(var(--primary) / 0.3)",
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
              <p className="font-body text-xs text-muted-foreground mt-3">
                T-slots (TA1–TG1) are tutorial slots that come with some theory
                courses — extra class hours.
              </p>
            </div>
          </Reveal>

          {/* Lab Slots */}
          <Reveal delay={100}>
            <div>
              <p className="text-label mb-4">Lab Slots — Monday to Saturday</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ background: "oklch(0.12 0.01 60)" }}>
                      <th className="py-3 px-4 text-left font-mono text-xs text-muted-foreground border border-border min-w-[110px]">
                        Time
                      </th>
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <th
                          key={d}
                          className="py-3 px-4 text-center font-display font-bold text-sm text-foreground border border-border min-w-[72px]"
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
                        style={{
                          background:
                            i % 2 === 0
                              ? "oklch(var(--background))"
                              : "oklch(0.10 0.008 60)",
                        }}
                      >
                        <td className="py-3 px-4 font-mono text-xs text-muted-foreground border border-border whitespace-nowrap">
                          {row.time}
                        </td>
                        {row.slots.map((slot, j) => (
                          <td
                            key={`lab-${row.time}-${j}`}
                            className="py-3 px-4 border border-border text-center"
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
              <p className="font-body text-xs text-muted-foreground mt-3">
                Lab slots are 2 hours each. Your lab course occupies two
                consecutive L-slots (e.g., L1+L2).
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Attendance ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="academics.attendance_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Attendance rules</p>
            <h2 className="text-section text-foreground mb-3">
              Don't Play
              <br />
              Games With This
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              75% is the minimum — don't treat it as a target. Aim for 85%+ to
              give yourself a real buffer. Each course is tracked separately,
              not combined.
            </p>
          </Reveal>
          <div className="border-t border-border">
            {attendanceRows.map((row, i) => (
              <Reveal key={row.pct} delay={i * 60}>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center py-6 border-b border-border">
                  <code
                    className="font-mono font-black text-xl shrink-0 sm:w-44"
                    style={{
                      color:
                        row.accent === "secondary"
                          ? "oklch(var(--secondary))"
                          : "oklch(var(--primary))",
                    }}
                  >
                    {row.pct}
                  </code>
                  <span
                    className="font-display font-bold text-sm uppercase tracking-wide shrink-0 sm:w-24"
                    style={{
                      color:
                        row.accent === "secondary"
                          ? "oklch(var(--secondary))"
                          : "oklch(var(--primary))",
                    }}
                  >
                    {row.status}
                  </span>
                  <p className="font-body text-sm text-muted-foreground">
                    {row.consequence}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div
              className="mt-6 border-l-2 pl-4 py-1"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-xs text-muted-foreground">
                Check your attendance on VTOP at least once a week. By the time
                you're at 74%, it's usually too late.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Grading ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="academics.grading_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Grades &amp; GPA</p>
            <h2 className="text-section text-foreground mb-3">
              How Your
              <br />
              Grade Is Decided
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-xl">
              VIT-AP uses{" "}
              <strong className="text-foreground">relative grading</strong> for
              most theory courses. Your grade depends on how you performed
              compared to everyone else in your class — not a fixed percentage.
              A 70% score might get you a B in one batch and a C in another. It
              works both ways.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr
                    style={{
                      background: "oklch(0.12 0.01 60)",
                      borderBottom: "1px solid oklch(var(--border))",
                    }}
                  >
                    <th className="py-3 px-6 text-left font-display font-bold text-sm text-foreground">
                      Grade
                    </th>
                    <th className="py-3 px-6 text-right font-display font-bold text-sm text-foreground">
                      Points
                    </th>
                    <th className="py-3 px-6 text-left font-display font-bold text-sm text-foreground">
                      What it means
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {letterGrades.map((row, i) => (
                    <tr
                      key={row.grade}
                      style={{
                        background:
                          i % 2 === 0
                            ? "oklch(var(--background))"
                            : "oklch(0.10 0.008 60)",
                      }}
                      className="border-b border-border"
                    >
                      <td className="py-3 px-6">
                        <span
                          className="font-display font-black text-2xl"
                          style={{
                            color:
                              row.grade === "F" || row.grade === "N"
                                ? "oklch(var(--primary))"
                                : row.grade === "S" || row.grade === "A"
                                  ? "oklch(var(--secondary))"
                                  : "oklch(var(--foreground))",
                          }}
                        >
                          {row.grade}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-right font-mono font-bold text-foreground">
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
              className="mt-6 p-5 border border-border font-mono text-sm"
              style={{ background: "oklch(0.10 0.008 60)" }}
            >
              <span className="text-muted-foreground">CGPA = </span>
              <span className="text-foreground font-bold">
                Σ(Credits × Grade Points) ÷ Σ(Total Credits)
              </span>
            </div>
            <div
              className="mt-4 border-l-2 pl-4 py-1"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-xs text-muted-foreground">
                Most placement companies have CGPA cutoffs — typically 6.5 or
                7.0. Keep that in mind from day one. Converting to percentage:
                CGPA × 10.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Backlogs ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="academics.backlogs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">If you fail</p>
            <h2 className="text-section text-foreground mb-3">Backlogs</h2>
            <p className="font-body text-muted-foreground mb-10 max-w-xl">
              A backlog isn't the end of the world — but it's expensive and
              inconvenient.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <Reveal className="bg-background">
              <div className="p-8 h-full" data-ocid="academics.fail_card">
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "oklch(var(--primary))" }}
                />
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  F Grade — Full Failure
                </h3>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li>You failed the course overall</li>
                  <li>Must re-register the full course in a future semester</li>
                  <li>
                    Re-registration fee applies — around ₹6,000. It's not cheap
                  </li>
                  <li>F stays in your CGPA calculation until you clear it</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80} className="bg-background">
              <div className="p-8 h-full" data-ocid="academics.n_grade_card">
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "oklch(var(--secondary))" }}
                />
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  N Grade — Incomplete
                </h3>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li>
                    You were barred from an exam due to low attendance, or
                    missed the FAT
                  </li>
                  <li>
                    Can re-register only the failed component, not the full
                    course
                  </li>
                  <li>Re-registration fee still applies</li>
                  <li>
                    Clear it fast — placement filters often catch open backlogs
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Summary ── */}
      <section
        className="bg-background px-6 py-16 border-t border-border"
        data-ocid="academics.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="border-l-4 pl-8 py-2"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="text-label mb-3">The short version</p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Each semester: CAT-1 (15) + CAT-2 (15) + Assignments (30) + FAT
                (40) = 100 marks. Maintain 75%+ attendance per course — aim
                higher. Grades are relative to your class. Your first semester
                slots are assigned by the college; from semester two, FFCS gives
                you the flexibility to build your own schedule. Keep your CGPA
                above 7.0 and clear any backlogs fast — placement eligibility
                depends on it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
