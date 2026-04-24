import { Badge } from "@/components/ui/badge";
import { Layout } from "../components/Layout";

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

export default function Data() {
  return (
    <Layout>
      {/* Page header */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-3 text-xs font-semibold tracking-wide"
          >
            📊 Insider Numbers
          </Badge>
          <h1 className="text-section text-foreground mb-2">
            Branch Cutoffs & What I've Observed
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl">
            If you're deciding which branch to pick — or trying to understand
            what the placement landscape looks like — this is the honest version
            of what I know. These are trends, not guarantees.
          </p>
        </div>
      </section>

      {/* Admission Cutoffs */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="data.cutoffs_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            Admission Cutoffs by Branch
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            Based on VITEEE rank — these are historical trends. They shift every
            year depending on how many students apply and how the exam goes.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table
              className="w-full text-sm bg-card"
              data-ocid="data.cutoffs_table"
            >
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground">
                    Branch
                  </th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground">
                    Demand
                  </th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground">
                    Typical Rank Range
                  </th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground hidden md:table-cell">
                    My Take
                  </th>
                </tr>
              </thead>
              <tbody>
                {cutoffItems.map((row, i) => (
                  <tr
                    key={row.branch}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                    data-ocid={`data.cutoff_row.${i + 1}`}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.branch}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          row.demand === "Very High"
                            ? "default"
                            : row.demand === "High"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {row.demand}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-primary font-semibold">
                      {row.rank}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            💡 A VITEEE rank under 50,000 generally opens up most branches. For
            CSE, you want to be well under 10k to be safe — don't cut it close.
          </p>
        </div>
      </section>

      {/* General Trends */}
      <section
        className="section-bg-light px-6 py-10 border-t border-border"
        data-ocid="data.trends_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-2">
            What I've Seen About Placements
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            These aren't official stats — they're patterns I've noticed over
            time. Take them as context, not guarantees.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trends.map((t, i) => (
              <div
                key={t.title}
                className="card-elevated rounded-xl p-4"
                data-ocid={`data.trend_card.${i + 1}`}
              >
                <span className="text-2xl mb-2 block" aria-hidden="true">
                  {t.icon}
                </span>
                <p className="font-display font-semibold text-sm text-foreground mb-1">
                  {t.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary banner */}
      <section className="section-bg-light px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
            📌
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">
              Honestly, my advice:{" "}
            </span>
            Pick a branch you can tolerate and then put in real effort — CGPA,
            certifications, a decent internship. Branch matters at the gate, but
            after that, what you build for yourself matters a lot more. I've
            seen CSE students with 6 CGPAs struggle and Mechanical students with
            strong skills do well. The label helps, but it doesn't carry you.
          </p>
        </div>
      </section>
    </Layout>
  );
}
