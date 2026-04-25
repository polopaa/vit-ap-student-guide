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

const roomTypes = [
  {
    beds: "2 Bed",
    tag: "AC / NAC",
    note: "Best privacy — popular, goes fast during allotment",
  },
  {
    beds: "3 Bed",
    tag: "AC / NAC",
    note: "Good balance of cost and personal space",
  },
  {
    beds: "4 Bed",
    tag: "AC / NAC",
    note: "Common allocation — you'll likely know someone in your room",
  },
  {
    beds: "5 Bed",
    tag: "AC / NAC",
    note: "Mid-range sharing — social but manageable",
  },
  {
    beds: "6 Bed",
    tag: "AC / NAC",
    note: "Budget-friendly; company whether you want it or not",
  },
  {
    beds: "7 Bed",
    tag: "AC / NAC",
    note: "Large shared room — cheaper, less personal space",
  },
  {
    beds: "8–10 Bed",
    tag: "Dormitory",
    note: "Entry-level dorm — AC / NAC options available",
  },
  { beds: "12 Bed", tag: "Dormitory", note: "Large dorm — NAC only" },
  {
    beds: "15–20 Bed",
    tag: "Dormitory",
    note: "Largest and cheapest option — NAC only",
  },
  {
    beds: "2 Bed APT",
    tag: "Apartment",
    note: "Apartment-style with shared living area — best privacy in the hostel system",
  },
  {
    beds: "4 Bed APT",
    tag: "Apartment",
    note: "Popular config — good balance of space and cost",
  },
  {
    beds: "5 Bed APT",
    tag: "Apartment",
    note: "Spacious common area shared among five",
  },
];

interface PricingRow {
  room: string;
  veg: string;
  nonVeg: string;
  special: string;
}
const pricingRows: PricingRow[] = [
  {
    room: "2 Bed AC",
    veg: "2,33,700",
    nonVeg: "2,39,700",
    special: "2,50,700",
  },
  {
    room: "2 Bed NAC",
    veg: "1,77,700",
    nonVeg: "1,83,700",
    special: "1,94,700",
  },
  {
    room: "3 Bed AC",
    veg: "2,19,700",
    nonVeg: "2,25,700",
    special: "2,36,700",
  },
  {
    room: "3 Bed NAC",
    veg: "1,63,700",
    nonVeg: "1,69,700",
    special: "1,80,700",
  },
  {
    room: "4 Bed AC",
    veg: "2,09,700",
    nonVeg: "2,15,700",
    special: "2,26,700",
  },
  {
    room: "4 Bed NAC",
    veg: "1,53,700",
    nonVeg: "1,59,700",
    special: "1,70,700",
  },
  {
    room: "5 Bed AC",
    veg: "1,99,700",
    nonVeg: "2,05,700",
    special: "2,16,700",
  },
  {
    room: "5 Bed NAC",
    veg: "1,43,700",
    nonVeg: "1,49,700",
    special: "1,60,700",
  },
  {
    room: "6 Bed AC",
    veg: "1,89,700",
    nonVeg: "1,95,700",
    special: "2,06,700",
  },
  {
    room: "6 Bed NAC",
    veg: "1,33,700",
    nonVeg: "1,39,700",
    special: "1,50,700",
  },
  {
    room: "7 Bed AC",
    veg: "1,83,700",
    nonVeg: "1,89,700",
    special: "2,00,700",
  },
  {
    room: "7 Bed NAC",
    veg: "1,27,700",
    nonVeg: "1,33,700",
    special: "1,44,700",
  },
  {
    room: "2 Bed APT AC",
    veg: "2,53,700",
    nonVeg: "2,59,700",
    special: "2,70,700",
  },
  {
    room: "2 Bed APT NAC",
    veg: "1,97,700",
    nonVeg: "2,03,700",
    special: "2,14,700",
  },
  {
    room: "4 Bed APT AC",
    veg: "2,29,700",
    nonVeg: "2,35,700",
    special: "2,46,700",
  },
  {
    room: "4 Bed APT NAC",
    veg: "1,73,700",
    nonVeg: "1,79,700",
    special: "1,90,700",
  },
  {
    room: "5 Bed APT AC",
    veg: "2,19,700",
    nonVeg: "2,25,700",
    special: "2,36,700",
  },
  {
    room: "5 Bed APT NAC",
    veg: "1,63,700",
    nonVeg: "1,69,700",
    special: "1,80,700",
  },
  {
    room: "8 Bed Dorm AC",
    veg: "1,73,700",
    nonVeg: "1,79,700",
    special: "1,90,700",
  },
  {
    room: "8 Bed Dorm NAC",
    veg: "1,17,700",
    nonVeg: "1,23,700",
    special: "1,34,700",
  },
  {
    room: "10 Bed Dorm AC",
    veg: "1,63,700",
    nonVeg: "1,69,700",
    special: "1,80,700",
  },
  {
    room: "10 Bed Dorm NAC",
    veg: "1,07,700",
    nonVeg: "1,13,700",
    special: "1,24,700",
  },
  {
    room: "12 Bed Dorm NAC",
    veg: "1,00,200",
    nonVeg: "1,06,200",
    special: "1,17,200",
  },
  {
    room: "15–20 Bed Dorm NAC",
    veg: "92,700",
    nonVeg: "98,700",
    special: "1,09,700",
  },
];

const messTimings = [
  { meal: "Breakfast", time: "7:15 – 9:00 AM" },
  { meal: "Lunch", time: "12:30 – 2:15 PM" },
  { meal: "Snacks", time: "4:45 – 6:15 PM" },
  { meal: "Dinner", time: "7:30 – 9:00 PM" },
];

const dailyRoutine = [
  {
    time: "7:15 AM",
    activity: "Breakfast opens — don't skip it, especially before exams",
  },
  {
    time: "8:30 AM",
    activity: "Morning classes begin — timings vary by your slot assignments",
  },
  { time: "12:30 PM", activity: "Lunch break — go before the peak rush" },
  {
    time: "4:45 PM",
    activity: "Evening snacks, sports, club activities — get outside",
  },
  {
    time: "5:00–8:00 PM",
    activity: "Hostel gym window — the only free time slot",
  },
  {
    time: "7:30–9:00 PM",
    activity: "Dinner — go before 8:30 if you want decent options",
  },
  {
    time: "8:30 PM",
    activity:
      "Curfew — be back inside your hostel. Ladies hostel strictly enforced.",
  },
  {
    time: "10:30 PM",
    activity:
      "Night canteen opens in select hostels — useful when everything else is shut",
  },
  { time: "12:00 AM", activity: "Night canteen closes. Quiet hours." },
];

export default function Hostel() {
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
        <div className="max-w-5xl mx-auto w-full">
          <div className="fade-in-up fade-in-up-delay-1">
            <span className="chapter-label">Chapter IV</span>
          </div>
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-black text-foreground leading-none tracking-tighter mt-4 mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            data-ocid="hostel.chapter_title"
          >
            HOSTEL &amp;
            <br />
            <span style={{ color: "oklch(var(--primary))" }}>DAILY LIFE</span>
          </h1>
          <p className="fade-in-up fade-in-up-delay-3 font-body italic text-muted-foreground text-xl max-w-2xl">
            Hostel, rooms, food, facilities — I'll tell you what to expect and
            what to watch out for. The basics are solid; some things will
            frustrate you. Here's the honest version.
          </p>
          <div className="fade-in-up fade-in-up-delay-4 chapter-divider mt-8 w-24" />
        </div>
      </section>

      {/* ── Hostel Blocks Overview ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="hostel.overview_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Housing overview</p>
            <h2 className="text-section text-foreground mb-3">
              The Hostel
              <br />
              Blocks
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Boys and girls are in separate blocks. Each block has its own
              mess, gym, and petty shop.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <Reveal className="bg-background">
              <div className="p-8 h-full" data-ocid="hostel.block_card.1">
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "oklch(var(--primary))" }}
                />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Men's Hostels
                </h3>
                <p
                  className="text-label mb-4"
                  style={{ color: "oklch(var(--secondary))" }}
                >
                  MH1 – MH6
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  6 blocks operational. MH7 under construction — campus is still
                  expanding. Each block has its own dedicated mess, gym, petty
                  shop, and night canteen (select blocks). Rules are enforced
                  but comparatively more lenient than ladies' hostels.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80} className="bg-background">
              <div className="p-8 h-full" data-ocid="hostel.block_card.2">
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "oklch(var(--secondary))" }}
                />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Ladies' Hostels
                </h3>
                <p
                  className="text-label mb-4"
                  style={{ color: "oklch(var(--secondary))" }}
                >
                  LH1 – LH3
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  3 blocks operational. LH4 under construction. Authorities are
                  strict — curfew is enforced consistently. If you're in LH,
                  treat the rules as non-negotiable from day one. Quality varies
                  between blocks — ask around when you arrive.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Room Types ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="hostel.rooms_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Room options</p>
            <h2 className="text-section text-foreground mb-3">Room Types</h2>
            <p className="font-body text-muted-foreground mb-4 max-w-xl">
              All rooms come furnished — bed with mattress, study table,
              cupboard with locker, study lamp, plug board, and bookshelf.
              Common washrooms per floor (not attached).
            </p>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Every sharing type comes in AC and Non-AC. The AC rooms cost more,
              but during summer, trust me, they're worth it.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {roomTypes.map((room, i) => (
              <Reveal
                key={room.beds}
                delay={Math.min(i * 40, 300)}
                className="bg-background"
              >
                <div
                  className="p-6 h-full"
                  data-ocid={`hostel.room_type.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {room.beds}
                    </h3>
                    <span
                      className="text-xs font-mono shrink-0 border px-2 py-1 mt-0.5"
                      style={{
                        color:
                          room.tag === "Apartment"
                            ? "oklch(var(--secondary))"
                            : "oklch(var(--foreground) / 0.5)",
                        borderColor:
                          room.tag === "Apartment"
                            ? "oklch(var(--secondary) / 0.4)"
                            : "oklch(var(--border))",
                      }}
                    >
                      {room.tag}
                    </span>
                  </div>
                  <div
                    className="w-6 h-px mb-3"
                    style={{ background: "oklch(var(--primary) / 0.4)" }}
                  />
                  <p className="font-body text-sm text-muted-foreground">
                    {room.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Table ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="hostel.pricing_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">What it costs</p>
            <h2 className="text-section text-foreground mb-3">
              Hostel Fees
              <br />
              AY 2025–26
            </h2>
            <p className="font-body text-muted-foreground mb-4 max-w-xl">
              Combined Fall + Winter semesters — the full academic year. Mess
              plan is bundled with your room.
            </p>
            <div
              className="border-l-2 pl-4 mb-10"
              style={{ borderColor: "oklch(var(--primary) / 0.5)" }}
            >
              <p className="font-body text-xs text-muted-foreground">
                Always double-check on the official VIT-AP admission or hostel
                portal before you pay — fees can change year to year.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="overflow-x-auto" data-ocid="hostel.pricing_table">
              <table className="w-full border-collapse">
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid oklch(var(--border))",
                      background: "oklch(0.08 0.008 60)",
                    }}
                  >
                    <th className="py-4 px-5 text-left font-display font-bold text-sm text-foreground">
                      Room Type
                    </th>
                    <th
                      className="py-4 px-5 text-right font-display font-bold text-sm"
                      style={{ color: "oklch(var(--secondary))" }}
                    >
                      Veg
                    </th>
                    <th className="py-4 px-5 text-right font-display font-bold text-sm text-foreground">
                      Non-Veg
                    </th>
                    <th className="py-4 px-5 text-right font-display font-bold text-sm text-foreground">
                      Special
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={row.room}
                      className="border-b border-border transition-colors"
                      style={{
                        background:
                          i % 2 === 0
                            ? "oklch(var(--background))"
                            : "oklch(0.10 0.008 60)",
                      }}
                      data-ocid={`hostel.pricing_row.${i + 1}`}
                    >
                      <td className="py-3 px-5 font-body text-sm text-foreground">
                        {row.room}
                      </td>
                      <td
                        className="py-3 px-5 text-right font-mono text-xs"
                        style={{ color: "oklch(var(--secondary))" }}
                      >
                        ₹{row.veg}
                      </td>
                      <td className="py-3 px-5 text-right font-mono text-xs text-muted-foreground">
                        ₹{row.nonVeg}
                      </td>
                      <td className="py-3 px-5 text-right font-mono text-xs text-muted-foreground">
                        ₹{row.special}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="mt-6 border-l-2 pl-4 py-1"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-xs text-muted-foreground">
                Most affordable: 15–20 Bed Dorm NAC from ₹92,700/year (veg).
                Most premium: 2 Bed APT AC at ₹2,70,700/year (special mess). AC
                rooms cost roughly ₹56,000 more per year than NAC — worth it for
                the comfort, especially in summer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mess Timings ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="hostel.mess_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Food system</p>
            <h2 className="text-section text-foreground mb-12">
              Mess Timings
              <br />
              &amp; Plans
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-12">
            {messTimings.map((m, i) => (
              <Reveal key={m.meal} delay={i * 60} className="bg-background">
                <div
                  className="p-8 text-center"
                  data-ocid={`hostel.mess_timing.${i + 1}`}
                >
                  <p className="font-display font-black text-2xl text-foreground mb-2">
                    {m.meal}
                  </p>
                  <div
                    className="w-6 h-px mx-auto mb-3"
                    style={{ background: "oklch(var(--secondary))" }}
                  />
                  <p className="font-mono text-xs text-muted-foreground">
                    {m.time}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {[
                {
                  plan: "Veg Mess",
                  desc: "Vegetarian-only menu. Most widely available across hostel blocks.",
                  accent: false,
                },
                {
                  plan: "Non-Veg Mess",
                  desc: "Non-veg dishes on select days — chicken/paneer 4 days/week, eggs daily.",
                  accent: false,
                },
                {
                  plan: "Special Mess",
                  desc: "More variety, generally better quality. Worth it if the mess is your primary food source.",
                  accent: true,
                },
              ].map((p, i) => (
                <div
                  key={p.plan}
                  className="bg-background p-6"
                  data-ocid={`hostel.mess_plan.${i + 1}`}
                >
                  <div
                    className="w-6 h-px mb-4"
                    style={{
                      background: p.accent
                        ? "oklch(var(--secondary))"
                        : "oklch(var(--primary) / 0.5)",
                    }}
                  />
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {p.plan}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="mt-8 border-l-2 pl-4 py-1"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Food quality varies by hostel block and caterer. The food isn't
                bad — it's just repetitive. By month two, most students
                supplement with Swiggy or local delivery. Miss a meal window and
                the mess is closed — timings are strict.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Daily Routine ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="hostel.routine_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">A typical day</p>
            <h2 className="text-section text-foreground mb-3">
              What Your
              <br />
              Day Looks Like
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              This isn't a rigid schedule — it's roughly how the day flows when
              you're actually living on campus. Your classes vary, but mess
              timings and hostel hours are fixed.
            </p>
          </Reveal>
          <div
            className="space-y-0 border-t border-border"
            data-ocid="hostel.routine_list"
          >
            {dailyRoutine.map((slot, i) => (
              <Reveal key={slot.time} delay={i * 40}>
                <div
                  className="flex gap-8 py-5 border-b border-border"
                  data-ocid={`hostel.routine.${i + 1}`}
                >
                  <span
                    className="font-mono text-xs shrink-0 w-24 mt-1"
                    style={{ color: "oklch(var(--secondary))" }}
                  >
                    {slot.time}
                  </span>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {slot.activity}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rules & Fines ── */}
      <section
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="hostel.rules_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Things to know upfront</p>
            <h2 className="text-section text-foreground mb-3">
              Rules, Curfew
              <br />
              &amp; Fines
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              I'll be honest — the rules at VIT-AP are real, and so are the
              fines. Knowing this as a fresher will save you a lot of money and
              trouble.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <Reveal className="bg-background">
              <div className="p-8 h-full" data-ocid="hostel.curfew_card">
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "oklch(var(--primary))" }}
                />
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Curfew — 8:30 PM
                </h3>
                <ul className="space-y-4 font-body text-sm text-muted-foreground">
                  <li>Be back inside your hostel by 8:30 PM</li>
                  <li>
                    <strong className="text-foreground">Ladies hostel:</strong>{" "}
                    Strictly enforced, consistently. Treat it as non-negotiable
                    from day one.
                  </li>
                  <li>
                    <strong className="text-foreground">Men's hostels:</strong>{" "}
                    More lenient in practice — but the rule still exists and
                    getting caught has consequences.
                  </li>
                  <li>
                    Night canteens open at 10:30 PM in select hostels —
                    late-night food is still accessible without leaving the
                    building.
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80} className="bg-background">
              <div className="p-8 h-full" data-ocid="hostel.fines_card">
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "oklch(var(--secondary))" }}
                />
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Campus Fines
                </h3>
                <ul className="space-y-4 font-body text-sm text-muted-foreground">
                  <li>
                    VIT-AP has a lot of fines — for hostel violations, being out
                    after curfew, dress code issues, and more. They add up fast.
                  </li>
                  <li>
                    Petty shops close at night — not 24/7. Plan ahead; don't be
                    surprised when they're shut at 10 PM.
                  </li>
                  <li>
                    Many freshers get caught off-guard in their first month.
                    Read the hostel handbook when you arrive — it lists all
                    violation categories.
                  </li>
                  <li>
                    In my experience, knowing the rules early saves you real
                    money.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="hostel.facilities_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">What's available</p>
            <h2 className="text-section text-foreground mb-12">
              Hostel Facilities
            </h2>
          </Reveal>
          <div className="space-y-0 border-t border-border">
            {[
              {
                label: "24/7 Security",
                detail:
                  "Security at all times. Nightly attendance checks in hostels — yes, they do actually come around.",
              },
              {
                label: "Campus Wi-Fi",
                detail:
                  "Available across campus but speeds vary by block. Get an Airtel or BSNL SIM as backup — trust me on this.",
              },
              {
                label: "Hostel Gym (Free)",
                detail:
                  "In every hostel block. Open 5:00–8:00 AM and 5:00–8:00 PM only. Those are your only windows.",
              },
              {
                label: "Campus Gym (Paid)",
                detail:
                  "Better equipment at Rock Plaza 1st floor (near AB-2). ₹1,200/month — goes fast, sign up in week one.",
              },
              {
                label: "Petty Shops",
                detail:
                  "Daily essentials and snacks in every hostel block. Open during the day. Closed at night.",
              },
              {
                label: "Night Canteen",
                detail:
                  "Open 10:30 PM – 12:00 AM in selected hostels. Genuinely useful when you're hungry after curfew.",
              },
              {
                label: "Health Center",
                detail:
                  "On-campus, 24/7 for emergencies. For fever, stomach issue, basic consultation — you don't need to leave campus.",
              },
              {
                label: "Campus Pharmacy",
                detail:
                  "Small pharmacy — paracetamol, antacids, ORS basics. Limited for specific prescriptions.",
              },
              {
                label: "Laundry",
                detail:
                  "Manual washing available plus paid washing machines. You'll figure out your preference in the first week.",
              },
              { label: "ATM", detail: "Bank ATM available on campus." },
            ].map((fac, i) => (
              <Reveal key={fac.label} delay={i * 40}>
                <div
                  className="flex flex-col sm:flex-row gap-6 py-6 border-b border-border"
                  data-ocid={`hostel.facility.${i + 1}`}
                >
                  <div className="sm:w-48 shrink-0">
                    <span className="font-display font-bold text-base text-foreground">
                      {fac.label}
                    </span>
                  </div>
                  <div
                    className="w-px shrink-0 hidden sm:block"
                    style={{ background: "oklch(var(--secondary) / 0.2)" }}
                  />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {fac.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summary ── */}
      <section
        className="bg-background px-6 py-16 border-t border-border"
        data-ocid="hostel.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="border-l-4 pl-8 py-2"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="text-label mb-3">My overall take</p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Hostel life at VIT-AP is self-sufficient — everything you need
                is on campus. 9 active blocks, room options from 2-bed to large
                dormitories, bundled mess plans. Curfew at 8:30 PM — ladies
                hostel strict, men's more relaxed but still enforced. Mess food
                gets repetitive but Swiggy works and the night canteen fills
                gaps. Health center and pharmacy mean you don't need to leave
                for minor issues. Not luxury — but functional, and you'll get
                used to it faster than you'd think.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
