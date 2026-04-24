import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

interface SubsectionProps {
  id: string;
  icon: string;
  title: string;
  children: React.ReactNode;
}

function Subsection({ id, icon, title, children }: SubsectionProps) {
  return (
    <section
      id={id}
      className="py-8 border-b border-border last:border-0"
      data-ocid={`faculty.${id}_section`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl" aria-hidden="true">
          {icon}
        </span>
        <h2 className="text-section">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Bullets({
  items,
  color = "text-primary",
}: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm text-foreground"
        >
          <span className={`mt-0.5 shrink-0 font-bold ${color}`}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const difficultyData = [
  {
    level: "Easy",
    badgeVariant: "default" as const,
    color: "bg-green-500/10 border-green-500/20",
    subjects: [
      "Soft Skills",
      "Professional Ethics",
      "Environmental Science",
      "History of Science",
    ],
  },
  {
    level: "Moderate",
    badgeVariant: "secondary" as const,
    color: "bg-yellow-500/10 border-yellow-500/20",
    subjects: [
      "Programming Fundamentals",
      "Computer Networks",
      "Operating Systems",
      "DBMS",
    ],
  },
  {
    level: "Hard",
    badgeVariant: "destructive" as const,
    color: "bg-destructive/10 border-destructive/20",
    subjects: [
      "Advanced Algorithms",
      "Microprocessors",
      "Signals & Systems",
      "Machine Learning (theory)",
    ],
  },
];

const scoringVsLearning = [
  {
    type: "Scoring",
    icon: "📈",
    color: "bg-green-500/10 border-green-500/20",
    note: "Help maintain CGPA",
    subjects: [
      "Soft Skills",
      "Environmental Science",
      "Professional Ethics",
      "Basic Programming Labs",
    ],
  },
  {
    type: "Learning",
    icon: "🧠",
    color: "bg-primary/10 border-primary/20",
    note: "Build skills for placements",
    subjects: [
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Compilers",
      "Machine Learning",
      "Distributed Systems",
    ],
  },
];

export default function Faculty() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="faculty.section_label">
            Faculty & Subjects
          </p>
          <h2 className="text-hero text-foreground mb-3">
            Faculty & Subject Guide
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-4">
            A practical guide to subject difficulty, slot selection strategy,
            faculty patterns, and balancing scoring with learning subjects.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🎯 Slot selection tips
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              ⚖️ Scoring vs learning balance
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📊 Difficulty overview
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="section-bg-muted px-6 py-4 border-b border-border sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          {[
            { href: "#difficulty", label: "Subject Difficulty" },
            { href: "#slots", label: "Slot Strategy" },
            { href: "#faculty-patterns", label: "Faculty Patterns" },
            { href: "#balance", label: "Scoring vs Learning" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
              data-ocid={`faculty.nav_link.${link.href.replace("#", "")}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        {/* Subject Difficulty */}
        <Subsection
          id="difficulty"
          icon="📊"
          title="Subject Difficulty Overview"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Difficulty varies by branch. Here's a general breakdown for most
            engineering programs:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {difficultyData.map((level) => (
              <Card key={level.level} className={`border ${level.color}`}>
                <CardContent className="p-4">
                  <div className="mb-3">
                    <Badge variant={level.badgeVariant} className="text-xs">
                      {level.level}
                    </Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {level.subjects.map((s) => (
                      <li
                        key={s}
                        className="text-sm text-foreground flex items-start gap-1.5"
                      >
                        <span className="mt-0.5 shrink-0 text-muted-foreground">
                          –
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            💡 Lab subjects are generally easier to score in than their theory
            counterparts. Register for labs along with core subjects.
          </p>
        </Subsection>

        {/* Slot Selection Strategy */}
        <Subsection id="slots" icon="🗓️" title="Slot Selection Strategy">
          <Bullets
            items={[
              "Avoid 8 AM slots if you're not a morning person — attendance is harder to maintain in early slots",
              "Spread heavy subjects across the week; avoid scheduling back-to-back tough courses",
              "Check faculty reviews before picking a slot — ask seniors for current feedback",
              "Some faculty teach the same subject in multiple slots — pick based on reviews, not convenience",
              "Register fast: popular faculty slots fill up within minutes of the registration window opening",
            ]}
          />
          <div className="mt-4 bg-accent/10 border border-accent/20 rounded-lg px-4 py-3 text-sm text-foreground">
            🎯 <strong>Pro tip:</strong> Have a primary and backup slot plan
            ready. If your first choice is taken, immediately go to backup —
            don't hesitate.
          </div>
        </Subsection>

        {/* Faculty Variations */}
        <Subsection id="faculty-patterns" icon="👨‍🏫" title="Faculty Patterns">
          <Bullets
            color="text-accent"
            items={[
              "Some faculty follow strict attendance policies; others are more lenient — know before you register",
              "Teaching style varies: board-based, slide-heavy, or project-driven depending on the faculty",
              "Evaluation strictness differs: some grade generously; others follow a strict distribution",
              "Research-active faculty tend to be more concept-focused; others are more exam-pattern focused",
              "Assignments and quiz formats vary — some give 10 marks easily, others require detailed submissions",
            ]}
          />
          <div className="mt-4 bg-muted rounded-lg px-4 py-3 text-sm text-muted-foreground border border-border">
            ℹ️ <strong>Note:</strong> This is general guidance — specifics change
            every semester. Always ask seniors who took the subject recently for
            up-to-date feedback.
          </div>
        </Subsection>

        {/* Scoring vs Learning */}
        <Subsection id="balance" icon="⚖️" title="Scoring vs. Learning Subjects">
          <p className="text-sm text-muted-foreground mb-4">
            Both types of subjects serve different purposes in your academic
            journey:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {scoringVsLearning.map((cat) => (
              <Card key={cat.type} className={`border ${cat.color}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl" aria-hidden="true">
                      {cat.icon}
                    </span>
                    <h3 className="text-subsection">{cat.type} Subjects</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 font-medium">
                    {cat.note}
                  </p>
                  <ul className="space-y-1.5">
                    {cat.subjects.map((s) => (
                      <li
                        key={s}
                        className="text-sm text-foreground flex items-start gap-1.5"
                      >
                        <span className="mt-0.5 shrink-0 text-muted-foreground">
                          –
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-sm text-foreground">
            🎯 <strong>Strategy:</strong> Aim for a balance every semester —
            don't load all heavy subjects at once. Use scoring subjects to
            cushion your CGPA while you invest effort in learning subjects.
          </div>
        </Subsection>

        {/* Summary */}
        <section className="py-8" data-ocid="faculty.summary_section">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Summary</p>
            <p className="text-sm text-foreground">
              Choose subjects and slots strategically. Check faculty reviews
              from seniors, spread workload across the week, and always balance
              scoring subjects (for CGPA protection) with learning subjects (for
              placement readiness).
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
