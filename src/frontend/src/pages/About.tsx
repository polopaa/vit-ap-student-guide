import { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-block ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const negatives = [
  {
    title: "The campus is a work in progress",
    body: "I don't say this to complain — it's just true. Construction is ongoing, some areas are dusty and rough, and facilities that are 'coming soon' have been coming soon for a while. If a polished campus matters to you, temper your expectations.",
  },
  {
    title: "Management can be slow and opaque",
    body: "University administration isn't known for being efficient or transparent. Getting things resolved — whether it's a grade issue, a hostel change, or an official letter — can take longer than it should. Learn to follow up persistently.",
  },
  {
    title: "Backlogs are expensive — and strict",
    body: "If you get an F in a subject, re-registering it costs around ₹6,000. And unlike colleges where showing up and writing something gets you through, professors here can be strict. I've seen students fail when they expected to pass. Take backlogs seriously.",
  },
  {
    title: "Professors have a lot of power over your grade",
    body: "Your internals, CAT marks, and sometimes FAT evaluations are all in their hands. There's limited recourse if you feel something is unfair — only the FAT can be formally re-evaluated. This is true of most colleges, but there's even less room to push back here.",
  },
  {
    title: "Missing a quiz can hurt more than you think",
    body: "Quizzes and CATs often carry similar weightage. Whether a re-test happens if you miss one is entirely up to the faculty. I've seen students lose a full grade over one missed quiz with no makeup offered. There's no standardised policy.",
  },
];

const positives = [
  {
    title: "A genuinely diverse student body",
    body: "Students come from all over India. If you're open to it, you'll meet people from completely different backgrounds and languages. That kind of exposure is actually valuable — and rarer than it sounds.",
  },
  {
    title: "Minimal physical bullying, in my experience",
    body: "In three years here, I haven't witnessed the kind of ragging or bullying that's common in some colleges. Conflicts happen — that's normal — but staying calm and mature keeps you out of most of it.",
  },
  {
    title: "Genuinely driven people, if you look for them",
    body: "There are students here who are serious about what they're building — in tech, research, creative fields. Find them early. They'll help you, challenge you, and show you what's actually possible.",
  },
  {
    title: "Real networking opportunities",
    body: "The student community is large and diverse enough that you can build meaningful connections across departments and years. Who you know here will matter more than you expect when you're looking for your first opportunity.",
  },
  {
    title: "A flexible dress code",
    body: "Full pants and a sleeved shirt is essentially all that's required. Compared to stricter campuses, this is a genuine relief for day-to-day comfort.",
  },
];

const realityItems = [
  {
    label: "Classrooms",
    detail:
      "Most don't have AC. In summer it gets genuinely uncomfortable. Whiteboards, projectors — functional but basic. Labs are AC'd. You'll get used to it.",
  },
  {
    label: "Gym Access",
    detail:
      "Free hostel gym: 5–8 AM and 5–8 PM only. Paid campus gym: ₹1,200/month — go sign up in the first week or you won't get a slot.",
  },
  {
    label: "Sports & Recreation",
    detail:
      "Badminton courts exist but timing is competitive. Indoor activity room has TT, carrom, chess — small space. Basketball, football, cricket courts are generally accessible.",
  },
  {
    label: "Campus Wi-Fi",
    detail:
      "Available but inconsistent by hostel block. Don't rely on it for anything important. Get an Airtel or BSNL SIM as a backup.",
  },
  {
    label: "Health Center",
    detail:
      "On-campus, useful for basic consultations, fever, stomach issues, sick certificates. They'll refer you out for anything serious.",
  },
  {
    label: "Pharmacy",
    detail:
      "Small campus pharmacy — paracetamol, antacids, ORS basics are there. Limited for specific prescriptions.",
  },
];

const transportOptions = [
  {
    mode: "University Shuttle",
    tag: "Free",
    details:
      "Every Sunday, Vijayawada. Departs 10 AM – 12 PM, returns 4:30 – 6:30 PM. Bring your ID card. I used this almost every weekend.",
  },
  {
    mode: "APSRTC Bus",
    tag: "~₹35",
    details:
      "Direct to Vijayawada. Via Guntur is ₹35 + ₹50 connecting. Best for regular, low-cost travel — not the fastest.",
  },
  {
    mode: "Shared Vans / Autos",
    tag: "~₹150",
    details:
      "To Vijayawada. Faster than bus, less frequent. Available near the campus gate. Good when you're carrying luggage.",
  },
  {
    mode: "Private Cabs (Ola / Uber)",
    tag: "₹400–1,000",
    details:
      "To Vijayawada Railway Station: ₹400–600. To Airport: ₹700–1,000. Only real option for early flights or late-night travel.",
  },
];

const clubsData = [
  {
    cat: "Technical",
    desc: "Coding, robotics, AI/ML, IoT — most active clubs are here",
  },
  {
    cat: "Cultural",
    desc: "Music, dance, drama, fine arts — VITopia is the flagship fest",
  },
  {
    cat: "Social",
    desc: "NSS and community service — if you want to do something beyond campus",
  },
  {
    cat: "Sports",
    desc: "Inter-hostel and inter-college competitions throughout the year",
  },
];

export default function About() {
  return (
    <Layout>
      <style>{`
        .reveal-block { opacity:0; transform:translateY(2rem); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-block.is-visible { opacity:1; transform:translateY(0); }
        @media(prefers-reduced-motion:reduce){.reveal-block{opacity:1;transform:none;transition:none;}}
      `}</style>

      {/* ── Chapter Hero ── */}
      <section className="bg-background min-h-[60vh] flex items-end px-6 pb-16 pt-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grain opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-px opacity-20 pointer-events-none"
          style={{ background: "oklch(var(--secondary))" }}
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto w-full">
          <div className="fade-in-up fade-in-up-delay-1">
            <span className="chapter-label">Chapter I</span>
          </div>
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-black text-foreground leading-none tracking-tighter mt-4 mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            data-ocid="about.chapter_title"
          >
            ABOUT
            <br />
            <span style={{ color: "oklch(var(--primary))" }}>VIT-AP</span>
          </h1>
          <p className="fade-in-up fade-in-up-delay-3 font-body italic text-muted-foreground text-xl max-w-2xl">
            I'm not going to sell this place to you. Here's what I actually
            think — based on my time here — so you can decide for yourself
            whether it's the right fit.
          </p>
          <div className="fade-in-up fade-in-up-delay-4 chapter-divider mt-8 w-24" />
        </div>
      </section>

      {/* ── Quick Overview ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="about.overview_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">What it is</p>
            <h2 className="text-section text-foreground mb-10">The Setup</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                n: "01",
                h: "VIT Group",
                b: "Private deemed university in Amaravati — part of the VIT Group, same FFCS system as VIT Vellore. Placement-focused; companies visit regularly.",
              },
              {
                n: "02",
                h: "200 Acres",
                b: "Big campus, still developing. Full hostel campus — almost everyone lives on-campus all semester.",
              },
              {
                n: "03",
                h: "FFCS from Sem 2",
                b: "First semester: college assigns your slots. From semester two, you build your own timetable. It's one of the better aspects of studying here.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 80} className="bg-background">
                <div className="p-8 h-full">
                  <span
                    className="font-display text-4xl font-black mb-4 block"
                    style={{ color: "oklch(var(--primary) / 0.35)" }}
                  >
                    {item.n}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {item.h}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus Reality ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="about.reality_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">The real picture</p>
            <h2 className="text-section text-foreground mb-3">
              What Campus Is
              <br />
              <em>Actually</em> Like
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Stuff I wish someone had told me before I joined — not what the
              brochure says.
            </p>
          </Reveal>
          <div className="space-y-0 border-t border-border">
            {realityItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-border">
                  <div className="sm:w-48 shrink-0">
                    <span className="font-display font-bold text-base text-foreground">
                      {item.label}
                    </span>
                  </div>
                  <div
                    className="sm:w-px shrink-0"
                    style={{ background: "oklch(var(--secondary) / 0.25)" }}
                    aria-hidden="true"
                  />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Transport ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="about.transport_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Getting here & around</p>
            <h2 className="text-section text-foreground mb-3">
              Location &<br />
              Transport
            </h2>
            <p className="font-body text-muted-foreground mb-4 max-w-xl">
              You're about 20 km from Vijayawada city. The campus address is
              G-30, Inavolu, beside AP Secretariat, Guntur District — 522237.
              Here's what I used.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-border mt-10">
            {transportOptions.map((t, i) => (
              <Reveal key={t.mode} delay={i * 70} className="bg-background">
                <div
                  className="p-8 h-full"
                  data-ocid={`about.transport.item.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {t.mode}
                    </h3>
                    <span
                      className="text-xs font-mono font-bold shrink-0 border px-2 py-1"
                      style={{
                        color: "oklch(var(--secondary))",
                        borderColor: "oklch(var(--secondary) / 0.3)",
                      }}
                    >
                      {t.tag}
                    </span>
                  </div>
                  <div
                    className="w-8 h-px mb-4"
                    style={{ background: "oklch(var(--primary))" }}
                  />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {t.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div
              className="mt-8 border-l-2 pl-5 py-2"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-sm text-muted-foreground">
                The free Sunday shuttle to Vijayawada is underrated — use it.
                For early morning trains or flights, book a cab the night
                before; availability at the gate can be unpredictable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Clubs & Events ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="about.clubs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Campus life</p>
            <h2 className="text-section text-foreground mb-3">
              Clubs, Events
              <br />
              &amp; Hackathons
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Joining a club in your first semester is one of the better
              decisions you can make. It's where you'll meet people outside your
              department and build connections that actually last.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-px bg-border mb-10">
            {clubsData.map((c, i) => (
              <Reveal key={c.cat} delay={i * 60} className="bg-background">
                <div className="p-8 h-full">
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {c.cat}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-label mb-3">On-campus events</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Hackathons and events happen regularly — though they may not
                  always be large-scale. Most are organised by student clubs:
                  workshops, coding competitions, project showcases, small
                  hackathons throughout the year. Joining a club early is the
                  fastest way in — that's how most people hear about events
                  before they're publicly announced.
                </p>
              </div>
              <div>
                <p className="text-label mb-3">External programs</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Bigger programs — Google Summer of Code, CTFs, recon
                  competitions — don't happen on campus. You participate
                  individually or in small teams. The college doesn't organise
                  these, but students do participate. Find seniors who've done
                  it — they'll tell you exactly how the process works.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pros & Cons ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="about.pros_cons_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">My honest verdict</p>
            <h2 className="text-section text-foreground mb-12">
              What Works &amp;
              <br />
              What Doesn't
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Negatives */}
            <Reveal>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Things that will bother you
                  </h3>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "oklch(var(--primary) / 0.3)" }}
                  />
                </div>
                <ol className="space-y-8">
                  {negatives.map((item, i) => (
                    <li key={item.title} className="flex gap-5">
                      <span
                        className="font-display font-black text-3xl leading-none shrink-0 mt-1"
                        style={{ color: "oklch(var(--primary) / 0.4)" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-display font-bold text-base text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* Positives */}
            <Reveal delay={100}>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Things that genuinely work
                  </h3>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "oklch(var(--secondary) / 0.3)" }}
                  />
                </div>
                <ol className="space-y-8">
                  {positives.map((item, i) => (
                    <li key={item.title} className="flex gap-5">
                      <span
                        className="font-display font-black text-3xl leading-none shrink-0 mt-1"
                        style={{ color: "oklch(var(--secondary) / 0.5)" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-display font-bold text-base text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Summary Verdict ── */}
      <section
        className="bg-background px-6 py-16 border-t border-border"
        data-ocid="about.verdict_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="border-l-4 pl-8 py-2"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="text-label mb-3">My take</p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
                VIT-AP is a placement-focused engineering college on a 200-acre
                campus in Amaravati. The academic system has its quirks, the
                food gets repetitive, and the campus is still developing. But if
                you're willing to be proactive — join clubs, manage your time,
                build your own network — you'll get a lot out of it. It's not a
                perfect college. It's a decent one with real opportunities, if
                you use them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
