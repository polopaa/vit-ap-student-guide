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

const demandColors: Record<string, string> = {
  "Very High": "text-primary border-primary/50 bg-primary/15",
  High: "text-secondary border-secondary/50 bg-secondary/10",
  Medium: "text-foreground/70 border-border/50 bg-muted/30",
  "Low–Medium": "text-muted-foreground border-border/40 bg-muted/20",
  Low: "text-muted-foreground/60 border-border/30 bg-muted/10",
};

export default function Data() {
  return (
    <Layout>
      {/* Chapter Hero */}
      <section className="section-bg-light px-6 pt-20 pb-16 border-b border-border/30">
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-4">Chapter</p>
          <h1 className="text-hero text-foreground mb-6 fade-in-up">
            DATA &<br />
            INSIGHTS
          </h1>
          <div className="gold-underline w-16 mb-8" />
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-1">
            If you're deciding which branch to pick — or trying to understand
            what the placement landscape looks like — this is the honest version
            of what I know. These are trends, not guarantees.
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="text-xs">
              📊 Insider Numbers
            </Badge>
          </div>
        </div>
      </section>

      {/* Cutoffs */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="data.cutoffs_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Admission Cutoffs by Branch</p>
            <h2 className="text-section text-foreground mb-2">
              Branch Cutoffs
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
              Based on VITEEE rank — these are historical trends. They shift
              every year depending on how many students apply and how the exam
              goes.
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <div className="overflow-x-auto border border-border/40">
              <table
                className="w-full text-sm bg-card"
                data-ocid="data.cutoffs_table"
              >
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left px-5 py-4 font-display font-bold text-foreground tracking-wide">
                      Branch
                    </th>
                    <th className="text-left px-5 py-4 font-display font-bold text-foreground tracking-wide">
                      Demand
                    </th>
                    <th className="text-left px-5 py-4 font-display font-bold text-foreground tracking-wide">
                      Typical Rank
                    </th>
                    <th className="text-left px-5 py-4 font-display font-bold text-foreground tracking-wide hidden md:table-cell">
                      My Take
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cutoffItems.map((row, i) => (
                    <tr
                      key={row.branch}
                      className="border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors"
                      data-ocid={`data.cutoff_row.${i + 1}`}
                    >
                      <td className="px-5 py-4 font-display font-semibold text-foreground">
                        {row.branch}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`text-xs font-bold tracking-widest uppercase border px-2.5 py-1 ${demandColors[row.demand] ?? "text-muted-foreground border-border/40"}`}
                        >
                          {row.demand}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-mono text-sm text-secondary font-bold">
                        {row.rank}
                      </td>
                      <td className="px-5 py-4 text-xs text-muted-foreground hidden md:table-cell max-w-xs leading-relaxed">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              💡 A VITEEE rank under 50,000 generally opens up most branches.
              For CSE, you want to be well under 10k to be safe — don't cut it
              close.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Trends */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="data.trends_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">What I've Seen</p>
            <h2 className="text-section text-foreground mb-2">
              Placement Observations
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
              These aren't official stats — they're patterns I've noticed over
              time. Take them as context, not guarantees.
            </p>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trends.map((t, i) => (
              <FadeSection key={t.title} delay={i * 70}>
                <div
                  className="border border-border/40 bg-card p-6 transition-smooth hover:border-secondary/40 h-full"
                  data-ocid={`data.trend_card.${i + 1}`}
                >
                  <span className="text-3xl mb-4 block" aria-hidden="true">
                    {t.icon}
                  </span>
                  <p className="font-display font-bold text-foreground mb-2 leading-tight">
                    {t.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-bg-muted px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="border-l-2 border-secondary/50 pl-6 py-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
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
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
