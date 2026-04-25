import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
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
      { threshold: 0.08 },
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

function CalloutBox({ text }: { text: string }) {
  return (
    <div className="border-l-2 border-secondary/50 pl-5 py-3 mt-8 bg-secondary/5">
      <p className="text-label mb-1">My Take</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

function ChecklistGroup({
  icon,
  title,
  items,
  ocid,
}: { icon: string; title: string; items: string[]; ocid?: string }) {
  return (
    <div className="border border-border/40 bg-card p-5" data-ocid={ocid}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl" aria-hidden="true">
          {icon}
        </span>
        <h3 className="font-display text-base font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs text-muted-foreground"
          >
            <span className="text-secondary mt-0.5 shrink-0 font-bold">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Essentials() {
  return (
    <Layout>
      {/* Chapter Hero */}
      <section className="section-bg-light px-6 pt-20 pb-16 border-b border-border/30">
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-4" data-ocid="essentials.page_label">
            Chapter
          </p>
          <h1 className="text-hero text-foreground mb-6 fade-in-up">
            ESSENTIALS
          </h1>
          <div className="gold-underline w-16 mb-8" />
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-1">
            I've been through move-in day and I know how chaotic it can get.
            This is everything I wish someone had laid out clearly for me —
            documents, what to pack, what to skip, and what to just buy on
            campus.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "📄 Documents",
              "🎒 Packing",
              "💻 Tech Essentials",
              "🏠 Move-In Tips",
            ].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="essentials.documents_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Before You Leave Home</p>
            <h2 className="text-section text-foreground mb-2">
              Documents — Don't Skip This
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Don't forget your originals — not just photocopies. Bring
              originals plus at least 10 photocopies of every document. You'll
              be asked for documents multiple times in the first week alone.
            </p>
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeSection delay={100}>
              <Card
                className="card-cinema h-full"
                data-ocid="essentials.docs_originals_card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">
                      📄
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Original Documents
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {originalDocuments.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-secondary mt-0.5 shrink-0 font-bold">
                          —
                        </span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-border/40 pt-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Also bring:{" "}
                      </span>
                      10 photocopies of every document above. Keep them in a
                      separate folder from your originals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeSection>

            <div className="flex flex-col gap-5">
              <FadeSection delay={200}>
                <Card
                  className="card-cinema"
                  data-ocid="essentials.docs_nri_card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        🌍
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          NRI / Foreign Students
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          You'll also need these
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {nriDocuments.map((doc) => (
                        <li
                          key={doc}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-secondary mt-0.5 shrink-0 font-bold">
                            —
                          </span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeSection>
              <FadeSection delay={300}>
                <div className="border-l-2 border-secondary/50 pl-5 py-3 bg-secondary/5">
                  <p className="text-xs font-semibold text-secondary mb-1">
                    💡 Practical Tip
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Use a dedicated folder and keep one full set of photocopies
                    completely separate from your originals. In my experience,
                    you'll be asked for documents at hostel check-in, fee
                    counter, and registration — sometimes all on the same day.
                  </p>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* Move-In Notes */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="essentials.movein_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">
              Things That Catch People Off Guard
            </p>
            <h2 className="text-section text-foreground mb-2">Move-In Day</h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              These are the things I wish someone had told me before I showed
              up. Read through these before you start packing — it'll save you
              stress.
            </p>
          </FadeSection>
          <div
            className="flex flex-col gap-4"
            data-ocid="essentials.movein_list"
          >
            {moveInNotes.map((note, i) => (
              <FadeSection key={note.title} delay={i * 80}>
                <div
                  className={[
                    "border p-5 flex items-start gap-4 transition-smooth hover:border-secondary/40",
                    note.highlight
                      ? "border-secondary/30 bg-secondary/5"
                      : "border-border/40 bg-card",
                  ].join(" ")}
                  data-ocid={`essentials.movein_note.${i + 1}`}
                >
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                    {note.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-foreground mb-1">
                      {note.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {note.note}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Checklist */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="essentials.packing_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Pack Before You Leave</p>
            <h2 className="text-section text-foreground mb-2">
              What to Actually Bring
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Vijayawada is hot — pack accordingly. Get these sorted before you
              leave home. Shops near campus aren't always convenient or cheap.
            </p>
          </FadeSection>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="essentials.packing_list"
          >
            {packingGroups.map((group, i) => (
              <FadeSection key={group.title} delay={i * 60}>
                <ChecklistGroup
                  icon={group.icon}
                  title={group.title}
                  items={group.items}
                  ocid={`essentials.packing_card.${i + 1}`}
                />
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={200}>
            <CalloutBox text="Pack for all seasons but prepare mainly for heat — Vijayawada is no joke in summer. Bring your personal care basics, bedding, and an ISI-marked extension board. Don't skip the medicine kit. And remember — mattresses, buckets, and room basics are available at campus stalls during move-in week." />
          </FadeSection>
        </div>
      </section>

      {/* Tech Essentials */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="essentials.tech_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Before You Buy Anything</p>
            <h2 className="text-section text-foreground mb-2">
              Tech — What You Need
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              For college, I'd go with at least an i5 / Ryzen 7 processor, 16GB
              RAM, and a 512GB SSD. Anything less and you'll feel it by third
              year — especially when running IDEs, VMs, and browser tabs all at
              once.
            </p>
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeSection delay={100}>
              <Card
                className="card-cinema h-full"
                data-ocid="essentials.tech_laptop_card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">
                      💻
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Laptop — Minimum Specs
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Non-negotiable for all branches
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {laptopSpecs.map((spec) => (
                      <li
                        key={spec.label}
                        className="flex items-start gap-3 text-sm border-b border-border/30 pb-2 last:border-0"
                      >
                        <span className="text-muted-foreground shrink-0 w-24 text-xs pt-0.5 font-mono">
                          {spec.label}
                        </span>
                        <span className="text-foreground font-medium">
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-xs font-semibold text-secondary mb-2">
                      Nice to Have
                    </p>
                    <ul className="space-y-1">
                      {laptopExtras.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-secondary mt-0.5 shrink-0">
                            +
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeSection>

            <div className="flex flex-col gap-5">
              <FadeSection delay={200}>
                <Card
                  className="card-cinema"
                  data-ocid="essentials.tech_phone_card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        📱
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Phone
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Any Android or iOS with 128 GB+ storage will do",
                        "Power bank — 10,000 mAh or above. Long days on campus drain your phone fast.",
                        "Make sure UPI and digital payments are set up before you arrive",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-secondary mt-0.5 shrink-0">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeSection>
              <FadeSection delay={300}>
                <Card
                  className="card-cinema"
                  data-ocid="essentials.tech_calculator_card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        🧮
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          Scientific Calculator
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Required for B.Tech / M.Tech exams
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
              </FadeSection>
            </div>
          </div>
          <FadeSection delay={200}>
            <CalloutBox text="A laptop meeting those minimum specs is non-negotiable — don't compromise on it. Get a Casio fx-991 series calculator before joining; you'll need it for exams. And bring a power bank — long days on campus with classes, labs, and club activities will drain your phone by evening." />
          </FadeSection>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-muted px-6 py-12"
        data-ocid="essentials.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="border-l-2 border-primary/60 pl-6 py-4">
              <p className="text-label mb-2">Before You Pack</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Arrive with all original documents and at least 10 photocopies
                of each — you'll need them more than you expect. Mattresses
                aren't provided, but don't stress about hauling one from home —
                stalls are set up on campus during move-in week. Electric
                kettles are technically not allowed, but checking is usually
                minimal. Pack smart — clothing for the heat, personal care
                basics, bedding, and a medicine kit.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
