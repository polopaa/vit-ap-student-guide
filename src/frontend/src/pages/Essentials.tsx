import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";
import {
  calculators,
  laptopExtras,
  laptopSpecs,
  moveInNotes,
  nriDocuments,
  originalDocuments,
  packingGroups,
} from "./FoodData";

function SummaryBox({ text }: { text: string }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
      <p className="text-label mb-1">My Take</p>
      <p className="text-sm text-foreground">{text}</p>
    </div>
  );
}

function ChecklistGroup({
  icon,
  title,
  items,
  ocid,
}: {
  icon: string;
  title: string;
  items: string[];
  ocid?: string;
}) {
  return (
    <Card className="card-elevated" data-ocid={ocid}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl" aria-hidden="true">
            {icon}
          </span>
          <h3 className="text-sm font-semibold font-display text-foreground">
            {title}
          </h3>
        </div>
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs text-foreground"
            >
              <span className="text-accent mt-0.5 shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Essentials() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="essentials.page_label">
            Essentials
          </p>
          <h2 className="text-hero text-foreground mb-4">
            What to Bring — Move-In Guide
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            I've been through move-in day and I know how chaotic it can get.
            This is everything I wish someone had laid out clearly for me before
            I arrived — documents, what to pack, what to skip, and what to just
            buy on campus.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📄 Documents Checklist
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🎒 Packing Guide
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              💻 Tech Essentials
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏠 Move-In Tips
            </Badge>
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="essentials.documents_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Before You Leave Home</p>
          <h2 className="text-section mb-2">Documents — Don't Skip This</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Don't forget your originals — not just photocopies. I know it sounds
            obvious, but people still show up without them and end up
            scrambling. Bring originals plus at least 10 photocopies of every
            document. You'll be asked for documents multiple times in the first
            week alone.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="card-elevated"
              data-ocid="essentials.docs_originals_card"
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    📄
                  </span>
                  <h3 className="text-subsection">Original Documents</h3>
                </div>
                <ul className="space-y-1.5">
                  {originalDocuments.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-muted/60 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Also bring:
                    </span>{" "}
                    10 photocopies of every document above. Keep them in a
                    separate folder from your originals.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
              <Card
                className="card-elevated"
                data-ocid="essentials.docs_nri_card"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      🌍
                    </span>
                    <div>
                      <h3 className="text-subsection">
                        NRI / Foreign Students
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        You'll also need these
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {nriDocuments.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-accent mt-0.5 shrink-0">✓</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-xs font-semibold text-foreground mb-1">
                  💡 Practical Tip
                </p>
                <p className="text-xs text-muted-foreground">
                  Use a dedicated folder and keep one full set of photocopies
                  completely separate from your originals. In my experience,
                  you'll be asked for documents at hostel check-in, fee counter,
                  and registration — sometimes all on the same day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Move-In Notes */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="essentials.movein_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Things That Catch People Off Guard</p>
          <h2 className="text-section mb-2">Move-In Day — What to Know</h2>
          <p className="text-sm text-muted-foreground mb-6">
            These are the things I wish someone had told me before I showed up.
            Read through these before you start packing — it'll save you stress.
          </p>
          <div
            className="flex flex-col gap-4"
            data-ocid="essentials.movein_list"
          >
            {moveInNotes.map((note, i) => (
              <div
                key={note.title}
                className={[
                  "rounded-xl border p-5 flex items-start gap-4",
                  note.highlight
                    ? "bg-primary/5 border-primary/25"
                    : "bg-card border-border shadow-sm",
                ].join(" ")}
                data-ocid={`essentials.movein_note.${i + 1}`}
              >
                <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                  {note.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm font-display mb-1">
                    {note.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {note.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Checklist */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="essentials.packing_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Pack Before You Leave</p>
          <h2 className="text-section mb-2">What to Actually Bring</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Vijayawada is hot — pack accordingly. Get these sorted before you
            leave home. Shops near campus aren't always convenient or cheap, and
            you won't want to be running around during your first week.
          </p>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="essentials.packing_list"
          >
            {packingGroups.map((group, i) => (
              <ChecklistGroup
                key={group.title}
                icon={group.icon}
                title={group.title}
                items={group.items}
                ocid={`essentials.packing_card.${i + 1}`}
              />
            ))}
          </div>
          <SummaryBox text="Pack for all seasons but prepare mainly for heat — Vijayawada is no joke in summer. Bring your personal care basics, bedding, and an ISI-marked extension board. Don't skip the medicine kit. And remember — mattresses, buckets, and room basics are available at campus stalls during move-in week. No need to drag all of that from home." />
        </div>
      </section>

      {/* Tech Essentials */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="essentials.tech_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Before You Buy Anything</p>
          <h2 className="text-section mb-2">Tech — What You Actually Need</h2>
          <p className="text-sm text-muted-foreground mb-6">
            For college, I'd go with at least an i5 / Ryzen 7 processor, 16GB
            RAM, and a 512GB SSD. Anything less and you'll feel it by third year
            — especially when running IDEs, VMs, and browser tabs all at once.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="card-elevated"
              data-ocid="essentials.tech_laptop_card"
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    💻
                  </span>
                  <div>
                    <h3 className="text-subsection">Laptop — Minimum Specs</h3>
                    <p className="text-xs text-muted-foreground">
                      Non-negotiable for all branches
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {laptopSpecs.map((spec) => (
                    <li
                      key={spec.label}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="text-muted-foreground shrink-0 w-24 text-xs pt-0.5">
                        {spec.label}
                      </span>
                      <span className="text-foreground font-medium">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    Nice to Have
                  </p>
                  <ul className="space-y-1">
                    {laptopExtras.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="text-accent mt-0.5 shrink-0">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
              <Card
                className="card-elevated"
                data-ocid="essentials.tech_phone_card"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      📱
                    </span>
                    <h3 className="text-subsection">Phone</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Any Android or iOS with 128 GB+ storage will do",
                      "Power bank — 10,000 mAh or above. Long days on campus drain your phone fast.",
                      "Make sure UPI and digital payments are set up before you arrive",
                    ].map((item) => (
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

              <Card
                className="card-elevated"
                data-ocid="essentials.tech_calculator_card"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      🧮
                    </span>
                    <div>
                      <h3 className="text-subsection">Scientific Calculator</h3>
                      <p className="text-xs text-muted-foreground">
                        Required for B.Tech / M.Tech exams — get one before
                        joining
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {calculators.map((calc) => (
                      <li key={calc.model} className="text-sm">
                        <span className="font-medium text-foreground">
                          {calc.model}
                        </span>
                        <span className="text-muted-foreground text-xs ml-2">
                          — {calc.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <SummaryBox text="A laptop meeting those minimum specs is non-negotiable — don't compromise on it. Get a Casio fx-991 series calculator before joining; you'll need it for exams. And bring a power bank — long days on campus with classes, labs, and club activities will drain your phone by evening." />
        </div>
      </section>

      {/* Page Summary */}
      <section
        className="section-bg-muted px-6 py-8"
        data-ocid="essentials.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Before You Pack</p>
            <p className="text-sm text-foreground">
              Arrive with all original documents and at least 10 photocopies of
              each — you'll need them more than you expect. Mattresses aren't
              provided, but don't stress about hauling one from home — stalls
              are set up on campus during move-in week. Electric kettles are
              technically not allowed, but checking is usually minimal. Pack
              smart — clothing for the heat, personal care basics, bedding, and
              a medicine kit. Most importantly: get a laptop meeting minimum
              specs and a Casio fx-991 calculator sorted before you show up.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
