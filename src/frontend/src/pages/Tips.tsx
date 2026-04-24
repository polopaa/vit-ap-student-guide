import { Badge } from "@/components/ui/badge";
import { Layout } from "../components/Layout";

const lateTips = [
  {
    icon: "📝",
    title: "W grade ≠ fail",
    desc: "A Withdrawal (W) grade does not hurt your CGPA. If you're failing a subject, withdrawing on time is smarter than failing.",
  },
  {
    icon: "📊",
    title: "Attendance is per subject",
    desc: "Attendance is tracked per course, not overall. Being below 75% in a single subject can prevent you from writing that exam.",
  },
  {
    icon: "⏰",
    title: "Add/Drop window closes fast",
    desc: "The Add/Drop period lasts only a few days. Plan your course selection before registration opens, not after.",
  },
  {
    icon: "🏥",
    title: "Medical leave needs official submission",
    desc: "Medical leave must be applied through proper channels to be counted. A doctor's certificate alone is not enough — submit it on VTOP.",
  },
  {
    icon: "🍽️",
    title: "Mess rebate exists",
    desc: "If you go home for an extended period, you can apply for a mess rebate in advance. Many students miss this and lose money.",
  },
  {
    icon: "📋",
    title: "Elective prerequisites are often unlisted",
    desc: "Some electives have hidden prerequisites. Always verify with the department or a senior before registering.",
  },
  {
    icon: "🔄",
    title: "Re-registering a failed subject isn't automatic",
    desc: "If you fail a subject, re-registration involves manual steps beyond just enrolling again. Contact your academic section early.",
  },
];

const generalTips = [
  {
    icon: "🖥️",
    tip: "Check VTOP daily — just 10 minutes a day prevents attendance and grade surprises later.",
  },
  {
    icon: "🏅",
    tip: "Join at least one technical club and one cultural/sports club — it helps with placements and makes college life better.",
  },
  {
    icon: "📜",
    tip: "Certifications (AWS, Google, Azure, Coursera) appear on your resume and are valued by recruiters.",
  },
  {
    icon: "🗂️",
    tip: "Keep physical copies of all important documents — admit card, fee receipts, ID proof.",
  },
  {
    icon: "🤝",
    tip: "Connect with seniors from your department early. They are the best source of real, practical guidance.",
  },
  {
    icon: "💾",
    tip: "Keep backups of all assignment submissions — faculty sometimes lose records and you'll need proof.",
  },
  {
    icon: "📅",
    tip: "Use FFCS to design a timetable that fits your learning style and daily schedule.",
  },
  {
    icon: "⚖️",
    tip: "Avoid overloading credits in Semesters 1 and 2 — get used to the VIT system first before taking on more.",
  },
];

export default function Tips() {
  return (
    <Layout>
      {/* Page header */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-3 text-xs font-semibold tracking-wide"
          >
            💡 Hidden Rules & Tips
          </Badge>
          <h1 className="text-section text-foreground mb-2">
            Hidden Rules & General Tips
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl">
            Things most students wish they knew earlier. Read this before your
            first semester — not after.
          </p>
        </div>
      </section>

      {/* Things students discover too late */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="tips.hidden_rules_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            Things Students Often Discover Too Late
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            These are real rules and policies that catch students off guard.
            Know them in advance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lateTips.map((item, i) => (
              <div
                key={item.title}
                className="card-elevated rounded-xl p-4 flex items-start gap-3"
                data-ocid={`tips.hidden_rule.${i + 1}`}
              >
                <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-sm text-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section
        className="section-bg-light px-6 py-10 border-t border-border"
        data-ocid="tips.general_tips_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">General Tips</h2>
          <p className="text-xs text-muted-foreground mb-5">
            Small habits that make a big difference throughout your time at
            VIT-AP.
          </p>
          <div className="space-y-3">
            {generalTips.map((item, i) => (
              <div
                key={item.icon}
                className="flex items-start gap-3 card-elevated rounded-xl p-4"
                data-ocid={`tips.general_tip.${i + 1}`}
              >
                <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-bg-muted px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
            📌
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Summary: </span>
            Success at VIT-AP relies on staying informed, proactive, and
            connected. Small habits — like checking VTOP regularly — make a big
            difference over four years.
          </p>
        </div>
      </section>
    </Layout>
  );
}
