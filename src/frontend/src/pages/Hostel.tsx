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
  { meal: "Breakfast", time: "7:15 – 9:00 AM", icon: "🌅" },
  { meal: "Lunch", time: "12:30 – 2:15 PM", icon: "☀️" },
  { meal: "Snacks", time: "4:45 – 6:15 PM", icon: "🍵" },
  { meal: "Dinner", time: "7:30 – 9:00 PM", icon: "🌙" },
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
    time: "5–8 PM",
    activity: "Hostel gym window — free, in every hostel block",
  },
  {
    time: "7:30 PM",
    activity: "Dinner opens — go before 8:30 if you want decent options",
  },
  {
    time: "8:30 PM",
    activity:
      "Curfew — be inside your hostel. Ladies hostel strictly enforced.",
  },
  {
    time: "10:30 PM",
    activity:
      "Night canteen opens in select hostels — useful when everything else is shut",
  },
  { time: "12:00 AM", activity: "Night canteen closes. Quiet hours." },
];

const pros = [
  "Everything you need is on campus — mostly self-sufficient",
  "Room options from 2-bed to dorm — suits different budgets",
  "Night canteen (10:30 PM–12 AM) is genuinely a lifesaver",
  "Gyms in every hostel block — free access",
  "Health center on campus — no need to leave for basic issues",
];

const cons = [
  "Curfew at 8:30 PM — ladies hostel is strict about this",
  "Lots of fines for small violations — adds up fast",
  "Mess quality varies by hostel — luck of the draw",
  "Petty shops close at night — plan ahead",
  "Rules are real, and enforcement is inconsistent but present",
];

const facilities = [
  {
    label: "24/7 Security",
    detail:
      "Security is present at all times. Nightly attendance checks in hostels — yes, they do come around.",
  },
  {
    label: "Campus Wi-Fi",
    detail:
      "Available across campus but speeds vary by block. Get an Airtel or BSNL SIM as backup — trust me.",
  },
  {
    label: "Hostel Gym (Free)",
    detail:
      "In every hostel block. Open 5:00–8:00 AM and 5:00–8:00 PM only. Those are your two windows.",
  },
  {
    label: "Campus Gym (Paid)",
    detail:
      "Better equipment at Rock Plaza 1st floor (near AB-2). ₹1,200/month — fills up fast, sign up in week one.",
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
      "On-campus, 24/7 for emergencies. Fever, stomach issues, basic consultation — no need to leave campus.",
  },
  {
    label: "Campus Pharmacy",
    detail:
      "Small pharmacy — paracetamol, antacids, ORS basics. Limited for specific prescriptions.",
  },
  {
    label: "Laundry",
    detail:
      "Manual washing available plus paid washing machines. You'll figure out your preference in week one.",
  },
  { label: "ATM", detail: "Bank ATM available on campus." },
];

export default function Hostel() {
  return (
    <Layout>
      <style>{`
        .reveal-block { opacity:0; transform:translateY(1.5rem); transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1); }
        .reveal-block.is-visible { opacity:1; transform:translateY(0); }
        @media(prefers-reduced-motion:reduce){.reveal-block{opacity:1;transform:none;transition:none;}}
      `}</style>

      {/* ── Page Header ── */}
      <section
        className="bg-card border-b border-border pt-28 pb-12 px-6"
        data-ocid="hostel.page_header"
      >
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-up fade-in-up-delay-1">
            <span className="text-label">Hostel &amp; Daily Life</span>
          </div>
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-bold text-foreground mt-3 mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.15 }}
            data-ocid="hostel.page_title"
          >
            Hostel life at VIT-AP — the honest version
          </h1>
          <p className="fade-in-up fade-in-up-delay-3 font-body text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Honestly, hostel life at VIT-AP is what you make of it. The rooms
            are functional, the facilities are there if you use them, but the
            rules can feel strict — especially in the ladies' hostels.
          </p>
        </div>
      </section>

      {/* ── Rating Card ── */}
      <section
        className="bg-background px-6 py-10"
        data-ocid="hostel.rating_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="card-clean p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="rating-badge w-16 h-16 text-xl font-bold">
                    6/10
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-base">
                      Hostel
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">
                      hit or miss, but liveable
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-px self-stretch bg-border" />
                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                  <div className="callout-pro" data-ocid="hostel.pros_card">
                    <p className="font-display font-semibold mb-2 text-sm">
                      What works
                    </p>
                    <ul className="space-y-1.5">
                      {pros.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="callout-con" data-ocid="hostel.cons_card">
                    <p className="font-display font-semibold mb-2 text-sm">
                      What doesn't
                    </p>
                    <ul className="space-y-1.5">
                      {cons.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✗</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Hostel Blocks ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="hostel.overview_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Housing overview</span>
            <h2 className="text-section text-foreground mt-2 mb-6">
              The hostel blocks
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div
                className="card-clean p-6 h-full"
                data-ocid="hostel.block_card.1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "oklch(var(--primary))" }}
                  />
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    Men's Hostels
                  </h3>
                  <span
                    className="ml-auto text-xs font-mono px-2 py-0.5 rounded border"
                    style={{
                      color: "oklch(var(--primary))",
                      borderColor: "oklch(var(--primary) / 0.3)",
                      background: "oklch(var(--primary) / 0.07)",
                    }}
                  >
                    MH1 – MH6
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  6 blocks operational. MH7 under construction — campus is still
                  expanding. Each block has its own mess, gym, petty shop, and
                  night canteen (select blocks). Rules exist but are
                  comparatively more lenient than ladies' hostels.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div
                className="card-clean p-6 h-full"
                data-ocid="hostel.block_card.2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "oklch(var(--secondary))" }}
                  />
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    Ladies' Hostels
                  </h3>
                  <span
                    className="ml-auto text-xs font-mono px-2 py-0.5 rounded border"
                    style={{
                      color: "oklch(var(--secondary))",
                      borderColor: "oklch(var(--secondary) / 0.3)",
                      background: "oklch(var(--secondary) / 0.07)",
                    }}
                  >
                    LH1 – LH3
                  </span>
                </div>
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
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="hostel.rooms_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Room options</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Room types
            </h2>
            <p className="font-body text-muted-foreground mb-2 max-w-xl text-sm">
              All rooms come furnished — bed with mattress, study table,
              cupboard with locker, study lamp, plug board, and bookshelf.
              Common washrooms per floor (not attached).
            </p>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              Every sharing type comes in AC and Non-AC. AC rooms cost more, but
              during summer, they're worth every rupee.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roomTypes.map((room, i) => (
              <Reveal key={room.beds} delay={Math.min(i * 40, 300)}>
                <div
                  className="card-clean p-5 h-full"
                  data-ocid={`hostel.room_type.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-semibold text-base text-foreground">
                      {room.beds}
                    </h3>
                    <span
                      className="text-xs font-mono shrink-0 border px-2 py-0.5 rounded"
                      style={{
                        color:
                          room.tag === "Apartment"
                            ? "oklch(var(--secondary))"
                            : "oklch(var(--muted-foreground))",
                        borderColor:
                          room.tag === "Apartment"
                            ? "oklch(var(--secondary) / 0.35)"
                            : "oklch(var(--border))",
                        background:
                          room.tag === "Apartment"
                            ? "oklch(var(--secondary) / 0.07)"
                            : "transparent",
                      }}
                    >
                      {room.tag}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="hostel.pricing_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">What it costs</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Hostel fees — AY 2025–26
            </h2>
            <p className="font-body text-muted-foreground mb-2 max-w-xl text-sm">
              Combined Fall + Winter semesters — the full academic year. Mess
              plan is bundled with your room.
            </p>
            <div
              className="mb-6 rounded-xl px-5 py-3 border text-xs font-body text-muted-foreground"
              style={{
                background: "oklch(0.97 0.015 25 / 0.5)",
                borderColor: "oklch(0.88 0.05 25 / 0.5)",
              }}
            >
              Always verify on the official VIT-AP admission or hostel portal
              before paying — fees can change year to year.
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div
              className="overflow-x-auto rounded-xl border border-border"
              data-ocid="hostel.pricing_table"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="py-3 px-5 text-left font-display font-semibold text-sm text-foreground">
                      Room Type
                    </th>
                    <th className="py-3 px-5 text-right font-display font-semibold text-sm text-foreground">
                      Veg
                    </th>
                    <th className="py-3 px-5 text-right font-display font-semibold text-sm text-foreground">
                      Non-Veg
                    </th>
                    <th className="py-3 px-5 text-right font-display font-semibold text-sm text-foreground">
                      Special
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={row.room}
                      className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
                      data-ocid={`hostel.pricing_row.${i + 1}`}
                    >
                      <td className="py-3 px-5 font-body text-sm text-foreground">
                        {row.room}
                      </td>
                      <td
                        className="py-3 px-5 text-right font-mono text-xs font-semibold"
                        style={{ color: "oklch(0.45 0.14 150)" }}
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
            <p className="font-body text-xs text-muted-foreground mt-3">
              Most affordable: 15–20 Bed Dorm NAC from ₹92,700/year (veg). Most
              premium: 2 Bed APT AC at ₹2,70,700/year (special mess). AC rooms
              cost roughly ₹56,000 more per year than NAC.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Mess Timings ── */}
      <section
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="hostel.mess_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Food system</span>
            <h2 className="text-section text-foreground mt-2 mb-8">
              Mess timings &amp; plans
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {messTimings.map((m, i) => (
              <Reveal key={m.meal} delay={i * 60}>
                <div
                  className="card-clean p-6 text-center"
                  data-ocid={`hostel.mess_timing.${i + 1}`}
                >
                  <div className="text-2xl mb-3" aria-hidden="true">
                    {m.icon}
                  </div>
                  <p className="font-display font-semibold text-base text-foreground mb-2">
                    {m.meal}
                  </p>
                  <div
                    className="w-6 h-px mx-auto mb-2"
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
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  plan: "Veg Mess",
                  desc: "Vegetarian-only menu. Most widely available across hostel blocks.",
                },
                {
                  plan: "Non-Veg Mess",
                  desc: "Non-veg dishes on select days — chicken/paneer 4 days/week, eggs daily.",
                },
                {
                  plan: "Special Mess",
                  desc: "More variety, generally better quality. Worth it if the mess is your primary food source.",
                  highlight: true,
                },
              ].map((p, i) => (
                <div
                  key={p.plan}
                  className="card-clean p-5"
                  data-ocid={`hostel.mess_plan.${i + 1}`}
                >
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2">
                    {p.plan}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="mt-5 rounded-xl px-5 py-4 border text-sm font-body text-muted-foreground"
              style={{
                background: "oklch(var(--secondary) / 0.06)",
                borderColor: "oklch(var(--secondary) / 0.25)",
              }}
            >
              Food quality varies by hostel block and caterer. The food isn't
              bad — it's just repetitive. By month two, most students supplement
              with Swiggy or local delivery. Miss a meal window and the mess is
              closed — timings are strict.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Daily Routine ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="hostel.routine_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">A typical day</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              What your day looks like
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              This isn't a rigid schedule — it's roughly how the day flows when
              you're living on campus. Your classes vary, but mess timings and
              hostel hours are fixed.
            </p>
          </Reveal>
          <div className="space-y-2" data-ocid="hostel.routine_list">
            {dailyRoutine.map((slot, i) => (
              <Reveal key={slot.time} delay={i * 40}>
                <div
                  className="card-clean flex gap-5 px-5 py-4 items-start"
                  data-ocid={`hostel.routine.${i + 1}`}
                >
                  <span
                    className="font-mono text-xs shrink-0 w-20 mt-0.5 font-semibold"
                    style={{ color: "oklch(var(--primary))" }}
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
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="hostel.rules_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Things to know upfront</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Rules, curfew &amp; fines
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              I'll be honest — the rules at VIT-AP are real, and so are the
              fines. Knowing this as a fresher will save you a lot of money and
              trouble.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div
                className="card-clean p-6 h-full"
                data-ocid="hostel.curfew_card"
              >
                <div
                  className="inline-flex items-center gap-2 text-xs font-display font-semibold mb-4 px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.97 0.015 25 / 0.7)",
                    color: "oklch(0.45 0.18 25)",
                    border: "1px solid oklch(0.88 0.05 25)",
                  }}
                >
                  🕗 Curfew — 8:30 PM
                </div>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Be back inside your hostel by 8:30 PM
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Ladies hostel:
                      </strong>{" "}
                      Strictly enforced, consistently. Treat it as
                      non-negotiable from day one.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.14 150)" }}
                    >
                      ✓
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Men's hostels:
                      </strong>{" "}
                      More lenient in practice — but the rule still exists and
                      getting caught has consequences.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.14 150)" }}
                    >
                      ✓
                    </span>
                    Night canteens open at 10:30 PM — late-night food without
                    leaving the building.
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div
                className="card-clean p-6 h-full"
                data-ocid="hostel.fines_card"
              >
                <div
                  className="inline-flex items-center gap-2 text-xs font-display font-semibold mb-4 px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.97 0.015 25 / 0.7)",
                    color: "oklch(0.45 0.18 25)",
                    border: "1px solid oklch(0.88 0.05 25)",
                  }}
                >
                  ⚠️ Campus Fines
                </div>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    VIT-AP has a lot of fines — hostel violations, curfew, dress
                    code, and more. They add up fast.
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Petty shops close at night — not 24/7. Plan ahead; don't be
                    surprised when they're shut at 10 PM.
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.2 25)" }}
                    >
                      ✗
                    </span>
                    Many freshers get caught off-guard in their first month.
                    Read the hostel handbook when you arrive.
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.5 0.14 150)" }}
                    >
                      ✓
                    </span>
                    Knowing the rules early saves you real money. In my
                    experience, it's worth reading through them.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="hostel.facilities_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">What's available</span>
            <h2 className="text-section text-foreground mt-2 mb-8">
              Hostel facilities
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {facilities.map((fac, i) => (
              <Reveal key={fac.label} delay={Math.min(i * 40, 240)}>
                <div
                  className="card-clean p-5 flex gap-4"
                  data-ocid={`hostel.facility.${i + 1}`}
                >
                  <div className="shrink-0 mt-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "oklch(var(--primary) / 0.5)" }}
                    />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground mb-1">
                      {fac.label}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {fac.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summary ── */}
      <section
        className="bg-card px-6 py-12 border-t border-border"
        data-ocid="hostel.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="rounded-xl p-6"
              style={{
                background: "oklch(var(--primary) / 0.04)",
                border: "1px solid oklch(var(--primary) / 0.15)",
                borderLeft: "4px solid oklch(var(--primary))",
              }}
            >
              <p className="text-label mb-3">My overall take</p>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl">
                Hostel life at VIT-AP is self-sufficient — everything you need
                is on campus. 9 active blocks, rooms from 2-bed to large
                dormitories, bundled mess plans. Curfew at 8:30 PM — ladies
                hostel strict, men's more relaxed but still enforced. Mess food
                gets repetitive but Swiggy works and the night canteen fills
                gaps. Health center and pharmacy mean you don't need to leave
                for minor issues. Not luxury — but functional, and you'll get
                used to it faster than you think.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
