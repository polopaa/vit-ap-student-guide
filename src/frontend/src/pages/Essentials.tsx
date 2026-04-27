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

function AmberCallout({ title, text }: { title?: string; text: string }) {
  return (
    <div className="callout-amber mt-6">
      {title && <p className="font-semibold mb-1">{title}</p>}
      <p>{text}</p>
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
    <div
      className="bg-card border border-border rounded-xl p-5 h-full shadow-subtle"
      data-ocid={ocid}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-xl" aria-hidden="true">
          {icon}
        </span>
        <h3 className="font-display text-sm font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-xs text-muted-foreground"
          >
            <span
              className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
              style={{
                background: "oklch(var(--primary) / 0.1)",
                color: "oklch(var(--primary))",
              }}
            >
              ✓
            </span>
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
      {/* Page Header */}
      <section
        className="bg-background border-b border-border px-6 pt-12 pb-10"
        data-ocid="essentials.page_header"
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="chapter-label mb-3 fade-in-up"
            data-ocid="essentials.page_label"
          >
            Move-In Guide
          </p>
          <h1 className="text-hero text-foreground mb-4 fade-in-up fade-in-up-delay-1">
            Essentials & Packing
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-2">
            Don't overthink it — here's what you actually need for move-in day.
            I've been through it and I know how chaotic it can get.
          </p>
          <div className="flex flex-wrap gap-2 mt-6 fade-in-up fade-in-up-delay-3">
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
        className="bg-muted/30 px-6 py-16 border-b border-border"
        data-ocid="essentials.documents_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Before you leave home</p>
            <h2 className="text-section text-foreground mb-2">
              Documents — Don't Skip This
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Don't forget your originals — not just photocopies. Bring
              originals plus at least 10 photocopies of every document. You'll
              be asked multiple times in the first week alone.
            </p>
          </Fade>
          <div className="grid md:grid-cols-2 gap-5">
            <Fade delay={100}>
              <Card
                className="h-full shadow-subtle border-border"
                data-ocid="essentials.docs_originals_card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl" aria-hidden="true">
                      📄
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Original Documents
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {originalDocuments.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                          style={{
                            background: "oklch(var(--primary) / 0.1)",
                            color: "oklch(var(--primary))",
                          }}
                        >
                          ✓
                        </span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Also bring:{" "}
                      </span>
                      10 photocopies of every document. Keep them in a separate
                      folder from your originals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Fade>
            <div className="flex flex-col gap-4">
              <Fade delay={200}>
                <Card
                  className="shadow-subtle border-border"
                  data-ocid="essentials.docs_nri_card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        🌍
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-foreground">
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
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <span
                            className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                            style={{
                              background: "oklch(var(--primary) / 0.1)",
                              color: "oklch(var(--primary))",
                            }}
                          >
                            ✓
                          </span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Fade>
              <Fade delay={300}>
                <div className="callout-teal">
                  <p className="font-semibold mb-1">💡 Practical tip</p>
                  Use a dedicated folder and keep one full set of photocopies
                  completely separate from your originals. In my experience,
                  you'll be asked for documents at hostel check-in, fee counter,
                  and registration — sometimes all on the same day.
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Move-In Notes */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="essentials.movein_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">
              Things that catch people off guard
            </p>
            <h2 className="text-section text-foreground mb-2">Move-In Day</h2>
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              These are the things I wish someone had told me before I showed
              up. Read through before you start packing — it'll save you stress.
            </p>
          </Fade>
          <div
            className="flex flex-col gap-3"
            data-ocid="essentials.movein_list"
          >
            {moveInNotes.map((note, i) => (
              <Fade key={note.title} delay={i * 70}>
                <div
                  className={[
                    "rounded-xl border p-5 flex items-start gap-4 transition-smooth hover:shadow-card",
                    note.highlight
                      ? "border-amber-200 bg-amber-50"
                      : "bg-card border-border shadow-subtle",
                  ].join(" ")}
                  data-ocid={`essentials.movein_note.${i + 1}`}
                  style={
                    note.highlight
                      ? {
                          background: "oklch(0.98 0.015 80)",
                          borderColor: "oklch(0.88 0.07 80)",
                        }
                      : {}
                  }
                >
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                    {note.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-sm text-foreground mb-1">
                      {note.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {note.note}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Checklist */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border"
        data-ocid="essentials.packing_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Pack before you leave</p>
            <h2 className="text-section text-foreground mb-2">
              What to Actually Bring
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Vijayawada is hot — pack accordingly. Get these sorted before you
              leave home. Shops near campus aren't always convenient or cheap.
            </p>
          </Fade>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="essentials.packing_list"
          >
            {packingGroups.map((group, i) => (
              <Fade key={group.title} delay={i * 60}>
                <ChecklistGroup
                  icon={group.icon}
                  title={group.title}
                  items={group.items}
                  ocid={`essentials.packing_card.${i + 1}`}
                />
              </Fade>
            ))}
          </div>
          <Fade delay={200}>
            <AmberCallout
              title="🎒 Before you zip up that bag"
              text="Pack for all seasons but prepare mainly for heat — Vijayawada is no joke in summer. Bring your personal care basics, bedding, and an ISI-marked extension board. Don't skip the medicine kit. Mattresses, buckets, and room basics are available at campus stalls during move-in week — you don't need to haul them from home."
            />
          </Fade>
        </div>
      </section>

      {/* Tech Essentials */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="essentials.tech_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Before you buy anything</p>
            <h2 className="text-section text-foreground mb-2">
              Tech — What You Need
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              For college, I'd go with at least an i5 / Ryzen 7 processor, 16 GB
              RAM, and a 512 GB SSD. Anything less and you'll feel it by third
              year — especially running IDEs, VMs, and browser tabs all at once.
            </p>
          </Fade>
          <div className="grid md:grid-cols-2 gap-5">
            <Fade delay={100}>
              <Card
                className="h-full shadow-subtle border-border"
                data-ocid="essentials.tech_laptop_card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl" aria-hidden="true">
                      💻
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
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
                        className="flex items-start gap-3 text-sm border-b border-border pb-2.5 last:border-0 last:pb-0"
                      >
                        <span className="text-muted-foreground shrink-0 w-24 text-xs pt-0.5 font-mono">
                          {spec.label}
                        </span>
                        <span className="text-foreground font-semibold">
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary mb-2">
                      Nice to Have
                    </p>
                    <ul className="space-y-1.5">
                      {laptopExtras.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5 shrink-0">
                            +
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Fade>
            <div className="flex flex-col gap-4">
              <Fade delay={200}>
                <Card
                  className="shadow-subtle border-border"
                  data-ocid="essentials.tech_phone_card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        📱
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Phone
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        "Any Android or iOS with 128 GB+ storage will do",
                        "Power bank — 10,000 mAh or above. Long days on campus drain your phone fast.",
                        "Make sure UPI and digital payments are set up before you arrive",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <span
                            className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                            style={{
                              background: "oklch(var(--primary) / 0.1)",
                              color: "oklch(var(--primary))",
                            }}
                          >
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Fade>
              <Fade delay={300}>
                <Card
                  className="shadow-subtle border-border"
                  data-ocid="essentials.tech_calculator_card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        🧮
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-foreground">
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
              </Fade>
            </div>
          </div>
          <Fade delay={200}>
            <AmberCallout
              title="💻 Tech checklist"
              text="A laptop meeting those minimum specs is non-negotiable — don't compromise on it. Get a Casio fx-991 series calculator before joining; you'll need it for exams. And bring a power bank — long days on campus with classes, labs, and club activities will drain your phone by evening."
            />
          </Fade>
        </div>
      </section>

      {/* Summary */}
      <section
        className="bg-muted/30 px-6 py-12"
        data-ocid="essentials.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <div
              className="bg-card border border-border rounded-2xl p-6 shadow-subtle"
              style={{ borderLeft: "4px solid oklch(var(--primary) / 0.6)" }}
            >
              <p className="text-label mb-2">Before you pack</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Arrive with all original documents and at least 10 photocopies
                of each — you'll need them more than you expect. Mattresses
                aren't provided, but don't stress about hauling one from home —
                stalls are set up on campus during move-in week. Electric
                kettles are technically not allowed, but checking is usually
                minimal. Pack smart — clothing for the heat, personal care
                basics, bedding, and a medicine kit.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </Layout>
  );
}
