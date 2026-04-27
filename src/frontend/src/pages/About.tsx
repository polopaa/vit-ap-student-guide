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

const negatives = [
  {
    title: "The campus is still very much under construction",
    body: "Walk around during your first week and you'll see it. Dust, machinery, incomplete buildings — it's been 'developing' for a while. Don't let the brochure photos set your expectations.",
  },
  {
    title: "University administration moves slowly",
    body: "Getting anything done through official channels — a grade query, a hostel change, an official letter — requires patience and follow-up. Go in person, bring copies of everything, and don't expect a quick resolution.",
  },
  {
    title: "Backlogs cost you real money and real time",
    body: "Re-registering a failed subject costs around ₹6,000. And unlike colleges where just showing up might get you through, some professors here are strict. I've seen students fail when they were counting on passing. Don't take that risk.",
  },
  {
    title: "Professors have a lot of control over your internals",
    body: "Quizzes, assignments, CAT marks — it all goes through them. Only FAT marks can be formally re-evaluated. For everything else, your options to contest are limited. It's the reality of most colleges, just worth knowing upfront.",
  },
  {
    title: "One missed quiz can drop your grade significantly",
    body: "Quizzes and CATs carry similar weightage in many courses. Whether a makeup is offered is entirely up to the faculty. There's no standard policy. I've seen students lose a full grade over one missed quiz — no makeup, no explanation.",
  },
];

const positives = [
  {
    title: "Students come from all over India",
    body: "This is actually one of the better things about VIT-AP. You'll meet people from genuinely different backgrounds and states. If you're open to it, that exposure is valuable in ways that are hard to measure.",
  },
  {
    title: "Minimal physical bullying, in my experience",
    body: "In three years, I haven't seen ragging or serious physical confrontations. Conflicts happen — that's normal. But the campus environment is relatively safe. Use common sense, and you'll be fine.",
  },
  {
    title: "There are driven students here — find them",
    body: "If you go looking, you'll find people who are genuinely serious about tech, research, or whatever they're building. These are the people worth knowing. They'll push you in a good way and share things freely.",
  },
  {
    title: "Networking opportunities are real",
    body: "The student body is large and mixed enough that you can build useful connections across departments and years. Who you know here matters — more than most people expect — when it comes to your first opportunity.",
  },
  {
    title: "Dress code is relaxed",
    body: "Full pants and a sleeved shirt is basically all that's required. Compared to stricter colleges, this is a genuine comfort. You don't have to worry about your wardrobe every morning.",
  },
];

const realityItems = [
  {
    label: "Classrooms",
    detail:
      "Most don't have AC. In summer it gets genuinely uncomfortable — Vijayawada heat is no joke. Labs are AC'd. Whiteboards and projectors are functional but basic. You'll get used to it.",
  },
  {
    label: "Gym",
    detail:
      "Free hostel gym: 5–8 AM and 5–8 PM only. Paid campus gym: ₹1,200/month — go sign up in the first week or you won't get a slot.",
  },
  {
    label: "Sports & Recreation",
    detail:
      "Badminton courts exist but access is competitive. Indoor activity room has TT, carrom, chess — small space. Basketball, football, cricket courts are generally accessible.",
  },
  {
    label: "Campus Wi-Fi",
    detail:
      "Available but inconsistent by hostel block. Don't rely on it for anything important. Get an Airtel or BSNL SIM as a backup.",
  },
  {
    label: "Health Center",
    detail:
      "On campus — useful for basic consultations, fever, stomach issues, sick certificates. They'll refer you out for anything serious.",
  },
  {
    label: "Pharmacy",
    detail:
      "Small campus pharmacy. Paracetamol, antacids, ORS basics are there. Limited for specific prescriptions.",
  },
];

const transportOptions = [
  {
    mode: "University Shuttle",
    tag: "Free",
    details:
      "Every Sunday to Vijayawada. Departs 10 AM – 12 PM, returns 4:30 – 6:30 PM. Bring your ID card. I used this almost every weekend.",
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
    desc: "Coding, robotics, AI/ML, IoT — most of the active clubs are here. Join one in your first week.",
  },
  {
    cat: "Cultural",
    desc: "Music, dance, drama, fine arts — VITopia is the flagship fest. Worth experiencing at least once.",
  },
  {
    cat: "Social",
    desc: "NSS and community service — if you want to do something that reaches beyond the campus.",
  },
  {
    cat: "Sports",
    desc: "Inter-hostel and inter-college competitions throughout the year.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section
        className="bg-background border-b border-border px-6 pt-12 pb-10"
        data-ocid="about.page_header"
      >
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-3 fade-in-up">About the College</p>
          <h1
            className="text-hero text-foreground mb-4 fade-in-up fade-in-up-delay-1"
            data-ocid="about.page_title"
          >
            About VIT-AP
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-2">
            Here's what the college actually looks like from the inside — not
            the brochure version. I'm not going to sell this place to you. Make
            your own call.
          </p>
        </div>
      </section>

      {/* Overall Rating Card */}
      <section
        className="bg-muted/30 px-6 py-10 border-b border-border"
        data-ocid="about.rating_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-card">
              <div className="flex items-center gap-4 shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-display font-bold"
                  style={{
                    background: "oklch(0.96 0.04 80)",
                    border: "2px solid oklch(0.88 0.08 80)",
                    color: "oklch(0.45 0.12 70)",
                  }}
                >
                  <span className="text-3xl leading-none">6.5</span>
                  <span className="text-xs font-medium opacity-70">/10</span>
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-foreground">
                    Overall Rating
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Based on student experience
                  </p>
                </div>
              </div>
              <div className="h-px sm:h-16 sm:w-px bg-border w-full sm:w-auto shrink-0" />
              <p className="text-base text-foreground font-body leading-relaxed">
                <span className="font-semibold">Honestly?</span> It's an average
                college. Not bad, not amazing. What you get out of it depends
                almost entirely on what you put in. Students who stay proactive
                — join clubs, build things, manage their time — tend to do well.
                Those who wait to be pushed usually don't.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* Quick Overview */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="about.overview_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">The basics</p>
            <h2 className="text-section text-foreground mb-8">
              Quick Overview
            </h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                h: "VIT Group",
                b: "Private deemed university in Amaravati, part of the VIT Group. Same FFCS system as VIT Vellore. Placement-focused; companies visit campus regularly.",
              },
              {
                n: "02",
                h: "200-Acre Campus",
                b: "Large campus, still developing. Almost everyone lives on campus all semester — it's a full residential setup.",
              },
              {
                n: "03",
                h: "FFCS from Sem 2",
                b: "First semester: management assigns your slots. From second semester, you build your own timetable through VTOP. It's one of the genuinely good parts of studying here.",
              },
            ].map((item, i) => (
              <Fade key={item.n} delay={i * 80}>
                <div
                  className="bg-card border border-border rounded-xl p-6 h-full shadow-subtle transition-smooth hover:shadow-card"
                  data-ocid={`about.overview_card.${i + 1}`}
                >
                  <span
                    className="font-display text-3xl font-black mb-3 block"
                    style={{ color: "oklch(var(--primary) / 0.25)" }}
                  >
                    {item.n}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {item.h}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.b}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Reality */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border"
        data-ocid="about.reality_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">What it's actually like</p>
            <h2 className="text-section text-foreground mb-2">
              Campus Reality
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-xl">
              Stuff I wish someone had told me before I joined — not what the
              brochure says.
            </p>
          </Fade>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle">
            {realityItems.map((item, i) => (
              <Fade key={item.label} delay={i * 50}>
                <div
                  className={`flex flex-col sm:flex-row gap-4 px-6 py-5 ${i < realityItems.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="sm:w-36 shrink-0">
                    <span className="font-display font-semibold text-sm text-foreground">
                      {item.label}
                    </span>
                  </div>
                  <div className="w-px bg-border hidden sm:block shrink-0" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.detail}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Transport */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="about.transport_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Getting here & around</p>
            <h2 className="text-section text-foreground mb-2">
              Location & Transport
            </h2>
            <p className="font-body text-muted-foreground mb-3 max-w-xl">
              You're about 20 km from Vijayawada city. Campus address: G-30,
              Inavolu, beside AP Secretariat, Guntur District – 522237. Here's
              what I used.
            </p>
          </Fade>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {transportOptions.map((t, i) => (
              <Fade key={t.mode} delay={i * 70}>
                <div
                  className="bg-card border border-border rounded-xl p-5 h-full shadow-subtle transition-smooth hover:shadow-card"
                  data-ocid={`about.transport.item.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-semibold text-base text-foreground">
                      {t.mode}
                    </h3>
                    <span
                      className="text-xs font-display font-bold shrink-0 px-2.5 py-1 rounded-full"
                      style={{
                        background: "oklch(var(--primary) / 0.08)",
                        color: "oklch(var(--primary))",
                        border: "1px solid oklch(var(--primary) / 0.2)",
                      }}
                    >
                      {t.tag}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {t.details}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={120}>
            <div className="mt-6 callout-teal">
              <p className="font-semibold mb-1">💡 My tip</p>
              The free Sunday shuttle to Vijayawada is underrated — use it. For
              early morning trains or flights, book a cab the night before;
              availability at the gate can be unpredictable.
            </div>
          </Fade>
        </div>
      </section>

      {/* Clubs & Events */}
      <section
        className="bg-muted/30 px-6 py-16 border-b border-border"
        data-ocid="about.clubs_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">Campus life</p>
            <h2 className="text-section text-foreground mb-3">
              Clubs, Events & Hackathons
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-xl">
              Joining a club in your first semester is one of the better
              decisions you can make. It's where you'll meet people outside your
              department and build connections that actually last.
            </p>
          </Fade>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {clubsData.map((c, i) => (
              <Fade key={c.cat} delay={i * 60}>
                <div className="bg-card border border-border rounded-xl p-5 h-full shadow-subtle">
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">
                    {c.cat}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={100}>
            <div className="grid md:grid-cols-2 gap-6">
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
          </Fade>
        </div>
      </section>

      {/* Pros & Cons */}
      <section
        className="bg-background px-6 py-16 border-b border-border"
        data-ocid="about.pros_cons_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-label mb-3">My honest verdict</p>
            <h2 className="text-section text-foreground mb-10">
              What Works & What Doesn't
            </h2>
          </Fade>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cons */}
            <Fade>
              <div
                className="bg-card border border-border rounded-2xl p-6 shadow-subtle h-full"
                style={{ borderLeft: "3px solid oklch(0.7 0.15 25)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{
                      background: "oklch(0.97 0.015 25)",
                      color: "oklch(0.5 0.15 25)",
                    }}
                  >
                    ✕
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground">
                    Things that will bother you
                  </h3>
                </div>
                <ol className="space-y-5">
                  {negatives.map((item, i) => (
                    <li key={item.title} className="flex gap-4">
                      <span
                        className="font-display font-black text-2xl leading-none shrink-0 mt-0.5"
                        style={{ color: "oklch(0.75 0.12 25)" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-display font-semibold text-sm text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Fade>
            {/* Pros */}
            <Fade delay={100}>
              <div
                className="bg-card border border-border rounded-2xl p-6 shadow-subtle h-full"
                style={{ borderLeft: "3px solid oklch(0.6 0.13 160)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{
                      background: "oklch(0.97 0.02 150)",
                      color: "oklch(0.4 0.1 150)",
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground">
                    Things that genuinely work
                  </h3>
                </div>
                <ol className="space-y-5">
                  {positives.map((item, i) => (
                    <li key={item.title} className="flex gap-4">
                      <span
                        className="font-display font-black text-2xl leading-none shrink-0 mt-0.5"
                        style={{ color: "oklch(0.65 0.1 160)" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-display font-semibold text-sm text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Summary Verdict */}
      <section
        className="bg-muted/30 px-6 py-12"
        data-ocid="about.verdict_section"
      >
        <div className="max-w-5xl mx-auto">
          <Fade>
            <div
              className="bg-card border border-border rounded-2xl p-6 shadow-subtle"
              style={{ borderLeft: "4px solid oklch(var(--primary) / 0.6)" }}
            >
              <p className="text-label mb-3">My take</p>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl">
                VIT-AP is a placement-focused engineering college on a 200-acre
                campus in Amaravati. The academic system has its quirks, the
                food gets repetitive, and the campus is still developing. But if
                you're willing to be proactive — join clubs, manage your time,
                build your own network — you'll get a lot out of it. It's not a
                perfect college. It's a decent one with real opportunities, if
                you use them.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </Layout>
  );
}
