import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

interface BulletCardProps {
  icon: string;
  title: string;
  items: string[];
}

function BulletCard({ icon, title, items }: BulletCardProps) {
  return (
    <Card className="card-elevated h-full">
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
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const programs = [
  {
    id: "itp",
    icon: "✈️",
    title: "International Transfer Program (ITP)",
    badge: "Transfer",
    badgeVariant: "default" as const,
    desc: "Allows you to transfer to a partner university abroad for a portion of your degree. You complete part of your B.Tech at VIT-AP and the rest at an international institution.",
    details: [
      "Credits earned abroad count towards your VIT-AP degree",
      "Available to eligible students who meet academic and language requirements",
      "A genuine option if you want an international degree without starting over",
      "In my experience, these seats are limited — if you're serious, ask about eligibility early in your second year",
    ],
  },
  {
    id: "sap",
    icon: "📅",
    title: "Semester Abroad Program (SAP)",
    badge: "Exchange",
    badgeVariant: "secondary" as const,
    desc: "Study at a partner university for one semester, then return to VIT-AP. Credits transfer back so you don't fall behind on your degree timeline.",
    details: [
      "Typically available from the second or third year onwards",
      "You live and study at a foreign university for one full semester",
      "Real exposure to a different academic system and culture — without a full transfer",
      "Great for your resume, but you'll need to sort finances, visa, and accommodation",
    ],
  },
];

const benefits = [
  "Exposure to global academic environments and teaching styles",
  "Improved cultural adaptability — living abroad teaches you things a classroom can't",
  "Opportunities to work with international research groups and faculty",
  "Better career prospects if you're targeting global companies or further studies abroad",
  "A real differentiator on your resume compared to most students from similar colleges",
];

const thingsToVerify = [
  "Eligibility criteria — minimum CGPA and language requirements vary by program and partner university",
  "Application deadlines — these are strict; missing them means waiting another year",
  "Credit transfer rules — confirm exactly which credits count back at VIT-AP before you commit",
  "Costs involved — tuition at partner universities, accommodation, flights, and visa fees are on you",
  "Current partner university list — partnerships change year to year; check with the IR office for the latest",
];

export default function StudyAbroad() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="study_abroad.page_label">
            Studying Abroad
          </p>
          <h2 className="text-hero text-foreground mb-4">
            International Programs at VIT-AP
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            If you're thinking about studying abroad at some point during your
            degree, VIT-AP does have options. They're not widely talked about,
            and not many students use them — but they exist. Here's what I know,
            and what you should verify directly before making any plans.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🌍 International Transfer Program
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📅 Semester Abroad Program
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🤝 Global Partnerships
            </Badge>
          </div>
        </div>
      </section>

      {/* About the IR Office */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="study_abroad.overview_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">The Starting Point</p>
          <h2 className="text-section mb-4">International Relations Office</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🏛️
                  </span>
                  <h3 className="text-subsection">What the IR Office Does</h3>
                </div>
                <p className="text-sm text-foreground mb-3">
                  VIT-AP has an International Relations Office that handles
                  study abroad programs, international collaborations, and
                  exchange initiatives. They're your first point of contact for
                  anything related to studying outside India.
                </p>
                <p className="text-sm text-muted-foreground">
                  In my experience, these offices can be slow to respond to
                  emails — physically going in with your questions tends to work
                  better. Go early in the academic year if you're seriously
                  considering this.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🌐
                  </span>
                  <h3 className="text-subsection">Global Partnerships</h3>
                </div>
                <p className="text-sm text-foreground mb-3">
                  VIT-AP has partnerships with universities across the world —
                  Europe, North America, Asia, and beyond. The specific
                  institutions change over time as new agreements are signed or
                  existing ones lapse.
                </p>
                <p className="text-sm text-muted-foreground">
                  Don't rely on old lists you find online. The IR office has the
                  current partner list — always check with them directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="study_abroad.programs_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Your Options</p>
          <h2 className="text-section mb-2">The Two Main Programs</h2>
          <p className="text-sm text-muted-foreground mb-6">
            There are two structured paths for studying abroad through VIT-AP.
            Both involve credit transfer, but they're quite different in scope
            and commitment.
          </p>
          <div className="space-y-5" data-ocid="study_abroad.programs_list">
            {programs.map((program, i) => (
              <Card
                key={program.id}
                className="card-elevated"
                data-ocid={`study_abroad.program.${i + 1}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden="true">
                        {program.icon}
                      </span>
                      <h3 className="text-subsection">{program.title}</h3>
                    </div>
                    <Badge
                      variant={program.badgeVariant}
                      className="text-xs shrink-0"
                    >
                      {program.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {program.desc}
                  </p>
                  <ul className="space-y-2">
                    {program.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-accent mt-0.5 shrink-0">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="study_abroad.benefits_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Why It's Worth Considering</p>
          <h2 className="text-section mb-6">What You Actually Gain</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <BulletCard icon="🎯" title="The Real Benefits" items={benefits} />
            <Card className="card-elevated h-full">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    💬
                  </span>
                  <h3 className="text-subsection">My Honest Take</h3>
                </div>
                <p className="text-sm text-foreground mb-3">
                  If international exposure matters to your career goals or
                  you're planning to do a Master's abroad, SAP is worth
                  exploring. A semester abroad on your resume — with actual
                  credits to show for it — looks different from just saying "I
                  want to study abroad."
                </p>
                <p className="text-sm text-foreground mb-3">
                  ITP is more serious — it's essentially a partial degree
                  change. Don't walk into it without thoroughly researching the
                  specific university and program you'd be transferring into.
                </p>
                <p className="text-sm text-muted-foreground">
                  The biggest hurdle is usually awareness. Most students don't
                  know these programs exist until third year — by which point
                  some deadlines have already passed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Verify */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="study_abroad.verify_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Before You Decide</p>
          <h2 className="text-section mb-2">
            What You Need to Verify Directly
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            I can give you the overview, but the specifics — eligibility,
            deadlines, partner universities — change every year. These are the
            things you need to confirm with the IR office, not rely on a
            website.
          </p>
          <div
            className="bg-card border border-border rounded-xl p-5"
            data-ocid="study_abroad.verify_list"
          >
            <ul className="space-y-3">
              {thingsToVerify.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="shrink-0 mt-0.5 font-semibold text-primary font-mono text-xs w-4">
                    {thingsToVerify.indexOf(item) + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/60 border border-border rounded-xl p-4 mt-5 flex items-start gap-2">
            <span className="text-base shrink-0" aria-hidden="true">
              🔗
            </span>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Official source:{" "}
              </span>
              Visit{" "}
              <a
                href="https://vitap.ac.in/international-relations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
                data-ocid="study_abroad.ir_link"
              >
                vitap.ac.in/international-relations
              </a>{" "}
              or go in person to the International Relations Office on campus
              for current program details, the active partner university list,
              and application timelines. That page — or better, a direct
              conversation — is your most reliable source.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-muted px-6 py-8"
        data-ocid="study_abroad.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Bottom Line</p>
            <p className="text-sm text-foreground">
              VIT-AP does have structured study abroad options — ITP for a
              partial degree transfer and SAP for a semester exchange, both with
              credit transfer back to VIT-AP. The university has international
              partnerships, and the programs are real. But they're not
              well-publicized, seats are limited, and the details change
              annually. If this matters to you, start asking in your second year
              — don't wait until third. Visit the IR office, check the official
              page, and talk to a senior who's actually done it. That's the
              fastest way to get accurate information.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
