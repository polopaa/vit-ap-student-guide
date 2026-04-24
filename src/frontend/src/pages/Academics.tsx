import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-sm text-muted-foreground">
      💡 {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold text-foreground mt-5 mb-2 uppercase tracking-wide text-primary/80">
      {children}
    </h4>
  );
}

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-2 mt-3">
      {steps.map((step, i) => (
        <li
          key={step}
          className="flex items-start gap-2 text-sm text-foreground"
        >
          <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">
            {i + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

function BulletList({
  items,
  accent = false,
}: { items: string[]; accent?: boolean }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm text-foreground"
        >
          <span
            className={`mt-0.5 shrink-0 font-bold ${accent ? "text-accent" : "text-primary"}`}
          >
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const letterGrades = [
  {
    grade: "S",
    points: "10",
    meaning: "Excellent — Pass",
    variant: "default" as const,
  },
  {
    grade: "A",
    points: "9",
    meaning: "Very Good — Pass",
    variant: "secondary" as const,
  },
  {
    grade: "B",
    points: "8",
    meaning: "Good — Pass",
    variant: "secondary" as const,
  },
  {
    grade: "C",
    points: "7",
    meaning: "Average — Pass",
    variant: "secondary" as const,
  },
  {
    grade: "D",
    points: "6",
    meaning: "Satisfactory",
    variant: "secondary" as const,
  },
  {
    grade: "E",
    points: "5",
    meaning: "Passed (barely)",
    variant: "secondary" as const,
  },
  {
    grade: "F",
    points: "0",
    meaning: "Fail — must re-register",
    variant: "destructive" as const,
  },
  {
    grade: "N",
    points: "0",
    meaning: "Incomplete / Debarred",
    variant: "destructive" as const,
  },
  {
    grade: "W",
    points: "—",
    meaning: "Withdrawn (not in CGPA)",
    variant: "outline" as const,
  },
];

const attendanceImpact = [
  {
    pct: "≥ 80%",
    status: "Safe",
    consequence: "You're fine — keep it up",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-500/10 border-green-500/25",
  },
  {
    pct: "75–79%",
    status: "Caution",
    consequence: "One more absence and you could be barred from the next exam",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/25",
  },
  {
    pct: "< 75%",
    status: "Debarred",
    consequence: "You can't sit for the next CAT or FAT for that course",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-500/10 border-red-500/25",
  },
  {
    pct: "Debarred from FAT",
    status: "N Grade",
    consequence: "You have to re-register the entire course next semester",
    color: "text-red-700 dark:text-red-300",
    bg: "bg-red-500/15 border-red-500/30",
  },
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

export default function Academics() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="academics.section_label">
            Academics
          </p>
          <h2 className="text-hero text-foreground mb-3">
            How Academics Actually Work at VIT-AP
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-4">
            I'll walk you through how the semester runs, what the exams are
            like, how grades are decided, and what you actually need to watch
            out for. No jargon — just what you need to know before you walk in.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🗂️ FFCS from Semester 2
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📝 CAT-1 + CAT-2 + FAT
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📊 Relative Grading
            </Badge>
          </div>
        </div>
      </section>

      {/* Semester flow */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="academics.overview_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">How a Semester Works</p>
          <h2 className="text-section mb-4">Your Semester, Step by Step</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <StepList
                steps={[
                  "Registration opens on VTOP — you pick your courses and time slots. Popular faculty and slots fill up within minutes, so have a backup plan ready. (In your first semester, this part is done for you — the college assigns your slots.)",
                  "Classes begin. Attendance is tracked from day one — each course is tracked separately. Don't skip early classes thinking they don't count yet.",
                  "CAT-1 happens mid-semester. It's worth 15 marks — roughly 50 minutes. Your scripts are returned after so you can see where you went wrong.",
                  "CAT-2 comes later in the semester. Same format and same weightage as CAT-1 — 15 marks, ~50 minutes. Treat it with the same seriousness.",
                  "Digital Assignments run throughout the semester — at least 3, worth 30 marks total. Don't leave these for the last week.",
                  "FAT (Final Assessment Test) — 3 hours, conducted centrally at the end of the semester. This is your biggest single component at 40 marks. Missing it without valid reason is a serious problem.",
                ]}
              />
              <Note>
                Your internal marks — CAT-1 + CAT-2 + Assignments = 60 marks —
                plus your FAT (40 marks) = 100 total. Grades are assigned
                relative to how your class performs, not a fixed percentage
                cutoff.
              </Note>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Evaluation breakdown */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="academics.evaluation_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Marks Breakdown</p>
          <h2 className="text-section mb-2">What's Worth What</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Here's how the 100 marks are split. Knowing this early helps you
            prioritize.
          </p>
          <div className="space-y-3" data-ocid="academics.eval_list">
            {[
              {
                label: "CAT-1",
                marks: "15",
                detail:
                  "~50 minutes, closed book. Scripts returned after — review them, they help.",
                bg: "bg-primary/8 border-primary/20",
                ocid: "academics.eval.cat1",
              },
              {
                label: "CAT-2",
                marks: "15",
                detail:
                  "Same format as CAT-1 — ~50 minutes, closed book, held later in the semester.",
                bg: "bg-primary/8 border-primary/20",
                ocid: "academics.eval.cat2",
              },
              {
                label: "Digital Assignments",
                marks: "30",
                detail:
                  "Minimum 3 assignments × 10 marks each. Spread across the semester — do them on time.",
                bg: "bg-muted border-border",
                ocid: "academics.eval.da",
              },
              {
                label: "FAT (Final Exam)",
                marks: "40",
                detail:
                  "3 hours, closed book, centrally conducted. The single biggest component — don't underestimate it.",
                bg: "bg-muted border-border",
                ocid: "academics.eval.fat",
              },
              {
                label: "Total",
                marks: "100",
                detail:
                  "Your grade is relative to your class — performing near the average gets you a C/D range.",
                bg: "bg-primary/5 border-primary/30",
                ocid: "academics.eval.total",
              },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex flex-wrap items-center gap-3 px-4 py-3 rounded-lg border ${row.bg}`}
                data-ocid={row.ocid}
              >
                <span className="text-sm font-semibold text-foreground min-w-0 flex-1">
                  {row.label}
                </span>
                <Badge variant="outline" className="font-mono shrink-0">
                  {row.marks} marks
                </Badge>
                <span className="text-xs text-muted-foreground w-full sm:w-auto sm:flex-1">
                  {row.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FFCS */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="academics.ffcs_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Timetable System</p>
          <h2 className="text-section mb-4">
            FFCS — How You Pick Your Courses
          </h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-3">
                FFCS — Fully Flexible Credit System — means you build your own
                timetable. Every student picks their own time slots during the
                registration window on VTOP. No two students need to have the
                same schedule. In your first semester, the college handles this
                for you — FFCS kicks in from semester 2.
              </p>
              <BulletList
                items={[
                  "Each course has multiple slot options (A1, B1, C1, etc.) — fixed time blocks spread across the week",
                  "Theory and lab are registered separately with different slot codes",
                  "You can avoid 8am slots if you want — but popular faculty and convenient timings fill up within minutes of the window opening",
                  "Minimum: 16 credits per semester. Maximum: 27 credits",
                  "No one will remind you — registration is entirely your responsibility",
                ]}
              />
              <Note>
                Before registration opens, note your top 3 slot choices per
                course. The window can close before you figure it out for the
                first time — trust me on this one.
              </Note>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Slot Timetable */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="academics.timetable_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">First Semester</p>
          <h2 className="text-section mb-2">Your Assigned Timetable</h2>
          <p className="text-sm text-muted-foreground mb-5">
            In your first sem, you won't get to pick your slots — the college
            assigns them. FFCS kicks in from second sem, and trust me, you'll
            appreciate the control once you have it. This is the slot structure
            you'll follow as a fresher.
          </p>

          {/* Theory Slots */}
          <Card className="card-elevated mb-4">
            <CardContent className="p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Theory Slots — Monday to Friday
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="py-2 px-3 font-semibold text-muted-foreground border border-border text-left min-w-[90px]">
                        Time
                      </th>
                      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                        <th
                          key={day}
                          className="py-2 px-3 font-semibold text-muted-foreground border border-border text-center min-w-[64px]"
                        >
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {theorySlots.map((row, i) => (
                      <tr
                        key={row.time}
                        className={
                          i % 2 === 0 ? "bg-background" : "bg-muted/30"
                        }
                      >
                        <td className="py-2 px-3 border border-border font-mono text-xs text-muted-foreground whitespace-nowrap">
                          {row.time}
                        </td>
                        {row.slots.map((slot, j) => (
                          <td
                            key={`theory-${row.time}-${j}`}
                            className="py-2 px-3 border border-border text-center"
                          >
                            {slot ? (
                              <span className="inline-block bg-primary/10 text-primary font-semibold rounded px-2 py-0.5 text-xs">
                                {slot}
                              </span>
                            ) : (
                              <span className="text-muted-foreground/40">
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
              <p className="text-xs text-muted-foreground mt-3">
                T-slots (TA1–TG1) are tutorial slots that come with some theory
                courses — think of them as extra class hours.
              </p>
            </CardContent>
          </Card>

          {/* Lab Slots */}
          <Card className="card-elevated mb-4">
            <CardContent className="p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Lab Slots — Monday to Saturday
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="py-2 px-3 font-semibold text-muted-foreground border border-border text-left min-w-[90px]">
                        Time
                      </th>
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <th
                          key={day}
                          className="py-2 px-3 font-semibold text-muted-foreground border border-border text-center min-w-[64px]"
                        >
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {labSlots.map((row, i) => (
                      <tr
                        key={row.time}
                        className={
                          i % 2 === 0 ? "bg-background" : "bg-muted/30"
                        }
                      >
                        <td className="py-2 px-3 border border-border font-mono text-xs text-muted-foreground whitespace-nowrap">
                          {row.time}
                        </td>
                        {row.slots.map((slot, j) => (
                          <td
                            key={`lab-${row.time}-${j}`}
                            className="py-2 px-3 border border-border text-center"
                          >
                            {slot ? (
                              <span className="inline-block bg-accent/10 text-accent font-semibold rounded px-1.5 py-0.5 text-xs">
                                {slot}
                              </span>
                            ) : (
                              <span className="text-muted-foreground/40">
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
              <p className="text-xs text-muted-foreground mt-3">
                Lab slots are 2 hours each. Your lab course will occupy two
                consecutive L-slots (e.g., L1+L2).
              </p>
            </CardContent>
          </Card>

          <Note>
            From semester 2, FFCS lets you build your own timetable — you choose
            the theory and lab slots that work for your schedule. No two
            students need to have the same timetable, and that flexibility is
            genuinely one of the better aspects of studying here.
          </Note>
        </div>
      </section>

      {/* Attendance */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="academics.attendance_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Attendance</p>
          <h2 className="text-section mb-4">
            Don't Play Games With Attendance
          </h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-3">
                75% is the minimum — don't treat it as a target. I'd aim for at
                least 85% to give yourself a real buffer. Here's what you need
                to know:
              </p>
              <BulletList
                items={[
                  "75% attendance per course — each course is tracked separately, not combined",
                  "That 25% buffer covers everything: illness, travel, personal reasons, events. There is no separate medical leave.",
                  "Drop below 75% → you're barred from the next CAT or FAT for that specific course",
                  "Barred from FAT → you get an N grade → you have to re-register the entire course next semester",
                  "If your CGPA is ≥ 9.0 and you have no backlogs, you're exempt from attendance rules (not applicable in summer semester)",
                ]}
              />
              <SectionHeading>What the Numbers Mean</SectionHeading>
              <div className="space-y-2">
                {attendanceImpact.map((row) => (
                  <div
                    key={row.pct}
                    className={`flex flex-wrap items-center gap-3 px-4 py-3 rounded-lg border ${row.bg}`}
                  >
                    <code
                      className={`font-mono text-sm font-bold w-36 shrink-0 ${row.color}`}
                    >
                      {row.pct}
                    </code>
                    <Badge
                      variant="outline"
                      className={`text-xs ${row.color} border-current`}
                    >
                      {row.status}
                    </Badge>
                    <span className="text-sm text-foreground">
                      {row.consequence}
                    </span>
                  </div>
                ))}
              </div>
              <Note>
                Check your attendance on VTOP at least once a week. Don't wait
                until you're already below 75% — by then it's usually too late
                to recover without consequences.
              </Note>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Grading */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="academics.grading_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Grades & GPA</p>
          <h2 className="text-section mb-4">How Your Grade Is Decided</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                VIT-AP uses{" "}
                <strong className="text-foreground">relative grading</strong>{" "}
                for most theory courses. Your grade depends on how you performed
                compared to everyone else in your class — not on hitting a fixed
                percentage. This means a 70% score might get you a B in one
                batch and a C in another. It works both ways.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="py-2 px-3 font-semibold text-muted-foreground bg-muted border-b border-border text-left">
                        Grade
                      </th>
                      <th className="py-2 px-3 font-semibold text-muted-foreground bg-muted border-b border-border text-right">
                        Points
                      </th>
                      <th className="py-2 px-3 font-semibold text-muted-foreground bg-muted border-b border-border text-left">
                        What it means
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {letterGrades.map((row) => (
                      <tr
                        key={row.grade}
                        className="hover:bg-muted/40 transition-colors"
                      >
                        <td className="py-2 px-3 border-b border-border/60">
                          <Badge
                            variant={row.variant}
                            className="font-mono w-8 justify-center"
                          >
                            {row.grade}
                          </Badge>
                        </td>
                        <td className="py-2 px-3 border-b border-border/60 text-right font-mono text-foreground">
                          {row.points}
                        </td>
                        <td className="py-2 px-3 border-b border-border/60 text-foreground">
                          {row.meaning}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-muted rounded-lg px-4 py-3 font-mono text-sm mt-4">
                <span className="text-muted-foreground">CGPA = </span>
                <span className="text-foreground font-semibold">
                  Σ(Credits × Grade Points) ÷ Σ(Total Credits)
                </span>
              </div>
              <BulletList
                items={[
                  "CGPA is calculated across all semesters — F grades drag it down and stay in the calculation",
                  "To convert to percentage: CGPA × 10 (e.g., CGPA 8.5 = 85%)",
                  "Most placement companies have CGPA cutoffs — typically 6.5 or 7.0. Keep that in mind from day one.",
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Backlogs */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="academics.backlogs_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Backlogs</p>
          <h2 className="text-section mb-2">If You Fail a Course</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Honestly, a backlog isn't the end of the world — but it's expensive
            and inconvenient. Here's what happens in each case.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="card-elevated" data-ocid="academics.fail_card">
              <CardContent className="p-5">
                <p className="font-semibold text-foreground mb-2">
                  ❌ F Grade — Full Failure
                </p>
                <ul className="space-y-1 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">•</span>You
                    failed the course overall
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">•</span>Must
                    re-register the full course in a future semester
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">•</span>A
                    re-registration fee applies — it's not cheap
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="card-elevated" data-ocid="academics.n_grade_card">
              <CardContent className="p-5">
                <p className="font-semibold text-foreground mb-2">
                  ⚠️ N Grade — Incomplete
                </p>
                <ul className="space-y-1 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">•</span>You
                    were barred from an exam due to low attendance, or missed
                    the FAT
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">•</span>Can
                    re-register only the failed component — not the full course
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">•</span>A
                    re-registration fee still applies
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Note>
            Many placement companies filter out candidates with active backlogs.
            Clear them as early as you can — Summer and Weekend semesters exist
            specifically for this purpose. Don't let them pile up.
          </Note>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-light px-6 py-8"
        data-ocid="academics.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">The Short Version</p>
            <p className="text-sm text-foreground">
              Each semester: CAT-1 (15) + CAT-2 (15) + Assignments (30) + FAT
              (40) = 100 marks total. Maintain 75%+ attendance per course — I'd
              honestly aim higher. Grades are relative to your class, not a
              fixed cutoff. Your first semester slots are assigned by the
              college; from semester two, FFCS gives you the flexibility to
              build your own schedule. Keep your CGPA above 7.0 and clear any
              backlogs fast — placement eligibility depends on it.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
