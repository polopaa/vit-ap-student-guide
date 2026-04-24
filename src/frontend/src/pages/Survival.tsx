import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

interface GuideCardProps {
  icon: string;
  title: string;
  items: string[];
  accent?: boolean;
}

function GuideCard({ icon, title, items, accent = false }: GuideCardProps) {
  return (
    <Card
      className={`card-elevated h-full ${accent ? "border-primary/30 bg-primary/5" : ""}`}
    >
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl" aria-hidden="true">
            {icon}
          </span>
          <h3 className="text-subsection">{title}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-foreground"
            >
              <span
                className={`mt-0.5 shrink-0 ${accent ? "text-primary" : "text-accent"}`}
              >
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
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
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="survival.page_label">
            Survival Guides
          </p>
          <h2 className="text-hero text-foreground mb-4">
            What I Wish Someone Had Told Me
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            This is the stuff most students only figure out after they've
            already made the mistakes. I'm putting it here so you don't have to
            learn it the hard way — exams, attendance, outings, mentoring. Read
            this before your first week.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📝 Exam Prep
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📊 Attendance Tips
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🗓️ Time Management
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🧑‍🏫 Mentoring
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🚪 Outing Rules
            </Badge>
          </div>
        </div>
      </section>

      {/* Exam Prep + Attendance */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="survival.exam_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">What actually works</p>
          <h2 className="text-section mb-6">Exams & Attendance</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <GuideCard
              icon="📝"
              title="How to approach exams"
              items={[
                "Start revising at least 2 weeks before finals — not the night before. I cannot stress this enough.",
                "PYQs are your best friend. Many questions repeat — use them.",
                "CAT exams (15 marks each) are easier to score in than the FAT. Don't underestimate them.",
                "Form study groups for tough subjects — explaining things out loud forces you to actually understand them",
                "Don't ignore assignments and quizzes — every mark counts toward your internal",
                "Understanding beats memorizing for higher grades, especially in subjects with numericals",
              ]}
            />
            <GuideCard
              icon="📊"
              title="Managing attendance"
              items={[
                "75% is the cutoff — but I'd aim for 85%+. You will get sick, you'll want to travel, things come up. Don't burn your buffer in month 1.",
                "Track it weekly on VTOP. Don't wait until it's critical.",
                "Calculate your 'safe bunk limit' per subject at the start of semester",
                "If you fall below 75%, approach your faculty proctor before the shortage becomes official",
                "Missing a class affects all students in that slot — be mindful if you're coordinating bunks",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Student Mentoring */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="survival.mentoring_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">You have support — use it</p>
          <h2 className="text-section mb-6">Your Proctor (Faculty Mentor)</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Every student gets assigned a faculty mentor called a Proctor.
            They're your go-to person for academic issues, leave applications,
            and attendance problems. In my experience, reaching out early is
            always better than waiting until things get messy.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <GuideCard
              icon="🧑‍🏫"
              title="What your Proctor actually does"
              items={[
                "Monitors your academic performance and flags concerns early",
                "Approves leave applications submitted via VTOP",
                "Keeps an eye on your attendance and can intervene if you're struggling",
                "Can refer you to personal counseling if you're going through something",
                "First point of contact for any hostel-related academic issues",
              ]}
            />
            <GuideCard
              icon="📋"
              title="Leave & attendance relaxation"
              accent
              items={[
                "Submit leave applications on VTOP at least 48 hours in advance",
                "Always attach supporting documents — no documents means no approval",
                "Up to 10% additional attendance relaxation may be granted for:",
                "  → Hospitalization (with discharge summary)",
                "  → Death of an immediate family member (death certificate required)",
                "  → Sibling's marriage (marriage invitation required)",
                "Documents are non-negotiable — the system doesn't make exceptions",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Outing Rules */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="survival.outing_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Leaving campus</p>
          <h2 className="text-section mb-6">Outing Rules</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Everything goes through VTOP — apply before you leave, not after.
            Carry your college ID and the approved outing pass whenever you step
            out. Trying to sneak out or come back late is not worth the trouble.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {outingRules.map((rule) => (
              <Card key={rule.type} className="card-elevated">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      {rule.icon}
                    </span>
                    <h3 className="text-subsection">{rule.type}</h3>
                  </div>
                  <ul className="space-y-2">
                    {rule.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-0.5 shrink-0 text-accent">→</span>
                        <span
                          className={
                            detail.startsWith("Freshers are NOT")
                              ? "text-destructive font-medium"
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
            ))}
          </div>
          <div className="mt-4 bg-destructive/5 border border-destructive/20 rounded-xl px-5 py-3">
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
        </div>
      </section>

      {/* Time Management */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="survival.time_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Don't wing it</p>
          <h2 className="text-section mb-6">Time Management</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <GuideCard
              icon="🗓️"
              title="Planning your week"
              items={[
                "Plan your week every Sunday — takes 10 minutes and saves a lot of chaos",
                "Use FFCS to spread heavy subjects across different days rather than clustering them",
                "Reserve at least one day a week for focused study — not group chats and Netflix",
                "Avoid stacking two difficult courses back-to-back if your schedule allows it",
              ]}
            />
            <GuideCard
              icon="⚡"
              title="Actually being productive"
              items={[
                "Free slots between classes are valuable — use them in the library instead of the hostel",
                "Batch similar tasks: readings, assignments, and revision in one block",
                "Set your own deadlines 2 days before actual submission dates — things always come up",
                "Use a simple notes app or planner — relying on memory alone will eventually cost you",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="survival.mistakes_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">I've seen this go wrong</p>
          <h2 className="text-section mb-6">Mistakes to Avoid</h2>
          <div className="space-y-3" data-ocid="survival.mistakes_list">
            {commonMistakes.map((item, i) => (
              <div
                key={item.mistake}
                className="bg-card border border-border rounded-xl px-5 py-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                data-ocid={`survival.mistake.${i + 1}`}
              >
                <div className="flex items-center gap-3 sm:w-56 shrink-0">
                  <span className="text-destructive text-lg" aria-hidden="true">
                    ✗
                  </span>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {item.mistake}
                  </p>
                </div>
                <div className="flex items-start gap-2 min-w-0">
                  <span
                    className="text-accent text-lg shrink-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <p className="text-sm text-muted-foreground">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="survival.stats_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Memorize these</p>
          <h2 className="text-section mb-6">Numbers That Actually Matter</h2>
          <div
            className="grid sm:grid-cols-3 gap-4"
            data-ocid="survival.numbers_list"
          >
            {keyStats.map((stat, i) => (
              <div
                key={stat.value}
                className="bg-card border border-border rounded-xl p-4 text-center shadow-sm"
                data-ocid={`survival.stat.${i + 1}`}
              >
                <div className="text-2xl mb-2" aria-hidden="true">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-primary font-display">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-muted px-6 py-8"
        data-ocid="survival.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Honestly</p>
            <p className="text-sm text-foreground">
              Most problems students face here are avoidable — attendance
              falling, marks dropping, missing deadlines. None of it is
              complicated. Track your attendance weekly, don't wait until CAT 2
              to take academics seriously, stay in touch with your Proctor, and
              apply for outings properly. Do these things and you'll be ahead of
              most of your batch.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
