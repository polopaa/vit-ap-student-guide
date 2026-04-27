import { Badge } from "@/components/ui/badge";
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

const cutoffItems = [
  {
    branch: "CSE (Core)",
    demand: "Very High",
    rank: "< 10,000",
    note: "If this is what you want, your VITEEE rank needs to be under 10k — that's just the reality",
  },
  {
    branch: "CSE – AI/ML",
    demand: "Very High",
    rank: "< 15,000",
    note: "Growing fast in demand — slightly more accessible than core CSE",
  },
  {
    branch: "ECE",
    demand: "High",
    rank: "< 30,000",
    note: "More accessible than CSE, still a strong foundation",
  },
  {
    branch: "IT",
    demand: "High",
    rank: "< 25,000",
    note: "Curriculum is very similar to CSE — don't discount it",
  },
  {
    branch: "EEE",
    demand: "Medium",
    rank: "< 50,000",
    note: "Core engineering path, less competitive for admissions",
  },
  {
    branch: "Mechanical",
    demand: "Low–Medium",
    rank: "< 80,000",
    note: "Easier to get into — think carefully about placement scope",
  },
  {
    branch: "Civil",
    demand: "Low",
    rank: "Any rank",
    note: "Lowest cutoff — campus placements in this branch are limited",
  },
];

const trends = [
  {
    icon: "📈",
    title: "CGPA matters more than most people admit",
    desc: "From what I've seen, a CGPA below 7.5 cuts you out of many company drives before they even look at your resume. Don't ignore it.",
  },
  {
    icon: "💻",
    title: "CS branches have a real advantage",
    desc: "CSE and IT students consistently see higher placement rates. If you're in a non-CS branch, you'll need to work harder at building a CS skillset independently.",
  },
  {
    icon: "📜",
    title: "Certifications actually help",
    desc: "AWS, Azure, Google certifications signal initiative to recruiters — especially useful if your CGPA is average. These are worth the effort.",
  },
  {
    icon: "🤝",
    title: "An internship changes your trajectory",
    desc: "A 6th semester internship gives you a massive edge during final placements. Companies trust someone who's already been in a work environment.",
  },
  {
    icon: "🏅",
    title: "Club involvement builds your profile",
    desc: "Being active in a technical club or working on real projects shows up in interviews. It's not just for resume padding — the skills are real.",
  },
];

type DemandLevel = "Very High" | "High" | "Medium" | "Low–Medium" | "Low";
const demandBadgeStyle: Record<
  DemandLevel,
  { bg: string; border: string; text: string }
> = {
  "Very High": {
    bg: "oklch(0.97 0.015 200)",
    border: "oklch(0.85 0.06 200)",
    text: "oklch(0.4 0.1 200)",
  },
  High: {
    bg: "oklch(0.97 0.02 150)",
    border: "oklch(0.85 0.06 150)",
    text: "oklch(0.4 0.1 150)",
  },
  Medium: {
    bg: "oklch(0.98 0.015 80)",
    border: "oklch(0.88 0.07 80)",
    text: "oklch(0.45 0.1 70)",
  },
  "Low–Medium": {
    bg: "oklch(0.98 0.008 60)",
    border: "oklch(0.91 0.006 240)",
    text: "oklch(0.55 0.008 240)",
  },
  Low: {
    bg: "oklch(0.97 0.008 240)",
    border: "oklch(0.91 0.006 240)",
    text: "oklch(0.6 0.008 240)",
  },
};

export default function Data() {
  return (
    <Layout>
      {/* Page Header */}
      <section
        className="bg-background border-b border-border px-6 pt-12 pb-10"
        data-ocid="data.page_header"
      >
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-3 fade-in-up">Numbers & Trends</p>
          <h1 className="text-hero text-foreground mb-4 fade-in-up fade-in-up-delay-1">
            Data & Insights
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-2">
            If you're deciding which branch to pick — or trying to understand
            what the placement landscape looks like — this is the honest version
            of what I know. These are trends, not guarantees.
          </p>
          <div className="mt-6 fade-in-up fade-in-up-delay-3">
            <Badge variant="secondary" className="text-xs">
              📊 Insider Numbers
            </Badge>
          </div>
        </div>
      </section>

      {/* Cutoffs */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border"
        data-ocid="data.cutoffs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Admission cutoffs by branch</p>
            <h2 className="text-section text-foreground mb-2">
              Branch Cutoffs
            </h2>
            <p className="font-body text-xs text-muted-foreground mb-8 leading-relaxed">
              Based on VITEEE rank — these are historical trends. They shift
              every year depending on how many students apply and how the exam
              goes.
            </p>
          </Fade>
          <Fade delay={100}>
            <div
              className="overflow-x-auto rounded-2xl border border-border shadow-subtle"
              data-ocid="data.cutoffs_table"
            >
              <table className="w-full text-sm bg-card">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-4 font-display font-semibold text-foreground text-sm">
                      Branch
                    </th>
                    <th className="text-left px-5 py-4 font-display font-semibold text-foreground text-sm">
                      Demand
                    </th>
                    <th className="text-left px-5 py-4 font-display font-semibold text-foreground text-sm">
                      Typical Rank
                    </th>
                    <th className="text-left px-5 py-4 font-display font-semibold text-foreground text-sm hidden md:table-cell">
                      My Take
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cutoffItems.map((row, i) => {
                    const style =
                      demandBadgeStyle[row.demand as DemandLevel] ??
                      demandBadgeStyle.Low;
                    return (
                      <tr
                        key={row.branch}
                        className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                        data-ocid={`data.cutoff_row.${i + 1}`}
                      >
                        <td className="px-5 py-4 font-display font-semibold text-foreground text-sm">
                          {row.branch}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                            style={{
                              background: style.bg,
                              borderColor: style.border,
                              color: style.text,
                            }}
                          >
                            {row.demand}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-mono text-sm font-bold text-primary">
                          {row.rank}
                        </td>
                        <td className="px-5 py-4 text-xs text-muted-foreground hidden md:table-cell max-w-xs leading-relaxed">
                          {row.note}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              💡 A VITEEE rank under 50,000 generally opens up most branches.
              For CSE, you want to be well under 10k to be safe — don't cut it
              close.
            </p>
          </Fade>
        </div>
      </section>

      {/* Trends */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="data.trends_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">What I've seen</p>
            <h2 className="text-section text-foreground mb-2">
              Placement Observations
            </h2>
            <p className="font-body text-xs text-muted-foreground mb-8 leading-relaxed">
              These aren't official stats — they're patterns I've noticed over
              time. Take them as context, not guarantees.
            </p>
          </Fade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trends.map((t, i) => (
              <Fade key={t.title} delay={i * 70}>
                <div
                  className="bg-card border border-border rounded-xl p-6 transition-smooth hover:shadow-card shadow-subtle h-full"
                  data-ocid={`data.trend_card.${i + 1}`}
                >
                  <span className="text-3xl mb-4 block" aria-hidden="true">
                    {t.icon}
                  </span>
                  <p className="font-display font-bold text-foreground text-sm mb-2 leading-tight">
                    {t.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-muted/30 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Fade>
            <div
              className="bg-card border border-border rounded-2xl p-6 shadow-subtle"
              style={{ borderLeft: "4px solid oklch(var(--primary) / 0.6)" }}
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  Honestly, my advice:{" "}
                </span>
                Pick a branch you can tolerate and then put in real effort —
                CGPA, certifications, a decent internship. Branch matters at the
                gate, but after that, what you build for yourself matters a lot
                more. I've seen CSE students with 6 CGPAs struggle and
                Mechanical students with strong skills do well. The label helps,
                but it doesn't carry you.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </Layout>
  );
}
