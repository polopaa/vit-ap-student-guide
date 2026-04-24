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

interface SummaryBoxProps {
  text: string;
}

function SummaryBox({ text }: SummaryBoxProps) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
      <p className="text-label mb-1">Summary</p>
      <p className="text-sm text-foreground">{text}</p>
    </div>
  );
}

// ── Hostel overview data ────────────────────────────────────────────────────
const hostelBlocks = [
  {
    icon: "🏢",
    label: "Men's Hostels (MH)",
    desc: "MH1 – MH6 operational; MH7 under construction",
    badge: "6 Active",
    badgeVariant: "secondary" as const,
  },
  {
    icon: "🏠",
    label: "Ladies' Hostels (LH)",
    desc: "LH1 – LH3 operational; LH4 under construction",
    badge: "3 Active",
    badgeVariant: "secondary" as const,
  },
];

// ── Room type data ──────────────────────────────────────────────────────────
const sharingRooms = [
  {
    beds: "2 Bed",
    tag: "AC / NAC",
    note: "Best privacy for a sharing room — popular, goes fast during allotment",
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
    note: "Budget-friendly; you'll have company whether you want it or not",
  },
  {
    beds: "7 Bed",
    tag: "AC / NAC",
    note: "Large shared room — cheaper, but less personal space",
  },
];

const dormRooms = [
  {
    beds: "8 Bed",
    tag: "Dormitory",
    note: "Entry-level dorm — AC / NAC options available",
  },
  {
    beds: "10 Bed",
    tag: "Dormitory",
    note: "Standard dorm — AC / NAC options available",
  },
  { beds: "12 Bed", tag: "Dormitory", note: "Large dorm — NAC only" },
  {
    beds: "15–20 Bed",
    tag: "Dormitory",
    note: "Largest and cheapest option — NAC only",
  },
];

const aptRooms = [
  {
    config: "2 Bed APT",
    tag: "AC / NAC",
    desc: "Apartment-style with a shared living area — the best privacy you'll find in the hostel system",
    badge: "Premium",
    badgeVariant: "default" as const,
  },
  {
    config: "4 Bed APT",
    tag: "AC / NAC",
    desc: "Popular apartment config — good balance of space and cost",
    badge: "Popular",
    badgeVariant: "secondary" as const,
  },
  {
    config: "5 Bed APT",
    tag: "AC / NAC",
    desc: "Spacious common area shared among five — mid-range pricing",
    badge: "Mid-range",
    badgeVariant: "outline" as const,
  },
];

// ── Pricing data (AY 2025–26 combined Fall + Winter) ───────────────────────
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

// ── Room furnishings ────────────────────────────────────────────────────────
const furnishingItems = [
  "Bed with mattress",
  "Study table and chair",
  "Cupboard with personal locker",
  "Study lamp",
  "Plug board (power sockets)",
  "Bookshelf",
  "Common washrooms on each floor (not attached)",
];

// ── Mess data ───────────────────────────────────────────────────────────────
const messTimings = [
  { meal: "Breakfast", time: "7:15 – 9:00 AM", icon: "🍳" },
  { meal: "Lunch", time: "12:30 – 2:15 PM", icon: "🍱" },
  { meal: "Snacks", time: "4:45 – 6:15 PM", icon: "☕" },
  { meal: "Dinner", time: "7:30 – 9:00 PM", icon: "🍛" },
];

const messPlans = [
  {
    plan: "Veg Mess",
    icon: "🥦",
    desc: "Vegetarian-only menu; most widely available across hostel blocks",
  },
  {
    plan: "Non-Veg Mess",
    icon: "🍗",
    desc: "Includes non-veg dishes on select days — chicken/paneer 4 days a week, eggs daily",
  },
  {
    plan: "Special Mess",
    icon: "⭐",
    desc: "More variety and generally better quality — costs more but worth it if the mess is your primary food source",
  },
];

// ── Facilities ──────────────────────────────────────────────────────────────
const facilities = [
  {
    icon: "🔒",
    label: "24/7 Security",
    desc: "Security at all times; nightly attendance checks in hostels — yes, they do actually come around",
  },
  {
    icon: "📶",
    label: "Campus Wi-Fi",
    desc: "Available across campus but speeds vary by hostel block. In my experience, get a good SIM as backup — Airtel or BSNL worked better than Jio",
  },
  {
    icon: "👕",
    label: "Laundry",
    desc: "Manual washing available, plus paid washing machines — you'll figure out your preference in the first week",
  },
  {
    icon: "🏋️",
    label: "Hostel Gym (Free)",
    desc: "Free gym in every hostel block. Open 5:00–8:00 AM and 5:00–8:00 PM — those are the only windows, so plan accordingly",
  },
  {
    icon: "💪",
    label: "Campus Gym (Paid)",
    desc: "Better equipment at Rock Plaza 1st floor (near AB-2). ₹1,200/month — goes fast, sign up in the first week if you're serious about it",
  },
  {
    icon: "🛒",
    label: "Petty Shops",
    desc: "Daily essentials and snacks in every hostel block — open during the day. They close at night, so don't count on them for a late-night run",
  },
  {
    icon: "🌙",
    label: "Night Canteen",
    desc: "Open 10:30 PM – 12:00 AM in selected hostels. Separate from the main mess — genuinely useful when you're hungry after curfew and everything else is shut",
  },
  {
    icon: "📺",
    label: "Common Room",
    desc: "TV and recreation space in each hostel block — good for unwinding after exams",
  },
  {
    icon: "🏥",
    label: "Health Center & Pharmacy",
    desc: "On-campus, open 24/7 for emergencies. Small pharmacy with basics — paracetamol, antacids, ORS. For anything serious, they'll refer you out",
  },
  { icon: "🏧", label: "ATM", desc: "Bank ATM available on campus" },
];

// ── Daily routine ───────────────────────────────────────────────────────────
const dailyRoutine = [
  {
    time: "7:15 – 9:00 AM",
    activity: "Breakfast — don't skip it, especially before CAT exams",
  },
  {
    time: "8:30 AM – 1:30 PM",
    activity: "Morning classes — varies by your slot assignments",
  },
  { time: "12:30 – 2:15 PM", activity: "Lunch break" },
  {
    time: "2:30 – 5:30 PM",
    activity: "Afternoon classes or free time depending on your timetable",
  },
  {
    time: "4:45 – 6:15 PM",
    activity: "Evening snacks, sports, club activities — get outside",
  },
  {
    time: "6:15 – 7:30 PM",
    activity: "Self-study or rest — I usually reviewed lecture notes here",
  },
  {
    time: "7:30 – 9:00 PM",
    activity: "Dinner — go before 8:30 if you want decent options",
  },
  {
    time: "8:30 PM",
    activity:
      "Curfew — you should be back in your hostel by this time. Ladies hostel is strict about it; men's hostels are more lenient in practice, but don't push it",
  },
  {
    time: "8:00 – 11:00 PM",
    activity: "Study time or extracurriculars — most productive hours",
  },
  {
    time: "10:30 PM – 12:00 AM",
    activity:
      "Night canteen opens (select hostels) — useful if you skipped dinner or just need something before bed",
  },
  {
    time: "11:00 PM",
    activity: "Quiet hours — the hostel settles down around this time",
  },
];

// ───────────────────────────────────────────────────────────────────────────

export default function Hostel() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="hostel.page_label">
            Hostel & Daily Life
          </p>
          <h2 className="text-hero text-foreground mb-4">
            What Living on Campus Is Actually Like
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            Hostel, rooms, food, facilities — I'll tell you what to expect and
            what to watch out for. The basics are solid; some things will
            frustrate you. Here's the honest version.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏢 6 MH + 3 LH Blocks
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🛏️ 2-Bed to Dormitory
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🍽️ Bundled Mess Plans
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🔒 24/7 Security
            </Badge>
          </div>
        </div>
      </section>

      {/* Hostel Blocks Overview */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="hostel.overview_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Housing Overview</p>
          <h2 className="text-section mb-2">Hostel Blocks</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Boys and girls are in separate blocks. Each block has its own mess,
            gym, and petty shop — you won't need to cross blocks for the basics.
          </p>

          <div
            className="grid sm:grid-cols-2 gap-4 mb-6"
            data-ocid="hostel.blocks_list"
          >
            {hostelBlocks.map((block, i) => (
              <Card
                key={block.label}
                className="card-elevated"
                data-ocid={`hostel.block_card.${i + 1}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden="true">
                        {block.icon}
                      </span>
                      <h3 className="text-subsection">{block.label}</h3>
                    </div>
                    <Badge
                      variant={block.badgeVariant}
                      className="text-xs shrink-0"
                    >
                      {block.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{block.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <BulletCard
              icon="🏗️"
              title="Block Details"
              items={[
                "MH1–MH6 are operational for male students",
                "LH1–LH3 are operational for female students",
                "MH7 and LH4 are under construction — the campus is still expanding",
                "I'd recommend checking which block you're assigned to early — quality can vary between blocks",
              ]}
            />
            <BulletCard
              icon="🛒"
              title="What's Inside Each Block"
              items={[
                "Petty shops in every hostel for daily essentials and snacks",
                "Night canteen in selected blocks — check yours when you arrive",
                "Free gym in all hostels — open 5:00–8:00 AM and 5:00–8:00 PM",
                "Paid gym at Rock Plaza (near AB-2) — ₹1,200/month, better equipment",
              ]}
            />
          </div>

          <SummaryBox text="VIT-AP has 6 men's and 3 ladies' hostels, each with a dedicated mess, gym, and petty shop. MH7 and LH4 are under construction. The blocks vary a bit in quality — find out which one you've been assigned and talk to people who've lived there." />
        </div>
      </section>

      {/* Room Types */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="hostel.rooms_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Room Options</p>
          <h2 className="text-section mb-2">Room Types</h2>
          <p className="text-sm text-muted-foreground mb-6">
            All rooms come furnished — you don't need to bring furniture. Every
            sharing type comes in AC and Non-AC unless noted. The AC rooms cost
            more, but during summer, trust me, they're worth every rupee.
          </p>

          {/* Room furnishings */}
          <div className="bg-card border border-border rounded-xl p-5 mb-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl" aria-hidden="true">
                🪑
              </span>
              <h3 className="text-subsection">What Comes With the Room</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {furnishingItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Sharing Rooms */}
          <h3 className="text-subsection mb-3">Standard Sharing Rooms</h3>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
            data-ocid="hostel.sharing_rooms_list"
          >
            {sharingRooms.map((room, i) => (
              <div
                key={room.beds}
                className="bg-card border border-border rounded-xl p-4 shadow-sm"
                data-ocid={`hostel.sharing_room.${i + 1}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground text-sm font-display">
                    {room.beds}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {room.tag}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{room.note}</p>
              </div>
            ))}
          </div>

          {/* Dormitory Rooms */}
          <h3 className="text-subsection mb-3">Dormitory Rooms</h3>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
            data-ocid="hostel.dorm_rooms_list"
          >
            {dormRooms.map((room, i) => (
              <div
                key={room.beds}
                className="bg-card border border-border rounded-xl p-4 shadow-sm"
                data-ocid={`hostel.dorm_room.${i + 1}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground text-sm font-display">
                    {room.beds}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {room.tag}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{room.note}</p>
              </div>
            ))}
          </div>

          {/* Apartment-Style Rooms */}
          <h3 className="text-subsection mb-1">Apartment-Style Rooms (APT)</h3>
          <p className="text-sm text-muted-foreground mb-3">
            These have a shared living/common area — available in AC and Non-AC.
            If your budget allows, the 2 or 4-bed APT is a noticeably better
            experience than a standard room.
          </p>
          <div
            className="grid sm:grid-cols-3 gap-4 mb-2"
            data-ocid="hostel.apt_rooms_list"
          >
            {aptRooms.map((room, i) => (
              <Card
                key={room.config}
                className="card-elevated"
                data-ocid={`hostel.apt_room.${i + 1}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-foreground font-display">
                      {room.config}
                    </h4>
                    <Badge
                      variant={room.badgeVariant}
                      className="text-xs shrink-0"
                    >
                      {room.badge}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs mb-2">
                    {room.tag}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{room.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <SummaryBox text="Rooms range from 2-bed sharing to 20-bed dormitories — most in AC and Non-AC. Apartment-style rooms (2, 4, and 5-bed) give you more space and privacy. All rooms are furnished. The AC rooms cost more, but during summer you'll appreciate them." />
        </div>
      </section>

      {/* Hostel Pricing */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="hostel.pricing_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">What It Costs</p>
          <h2 className="text-section mb-2">Hostel Fees — AY 2025–26</h2>
          <p className="text-sm text-muted-foreground mb-1">
            These are combined charges for Fall + Winter semesters — the full
            academic year. Mess plan is bundled with your room, so what you see
            is what you pay.
          </p>
          <div className="bg-muted/60 border border-border rounded-lg px-3 py-2 mb-5 flex items-start gap-2">
            <span className="text-sm shrink-0" aria-hidden="true">
              ℹ️
            </span>
            <p className="text-xs text-muted-foreground">
              Prices include room rent + mess for the full year. Double-check on
              the official VIT-AP admission or hostel portal before you pay —
              fees can change year to year.
            </p>
          </div>
          <div
            className="overflow-x-auto rounded-xl border border-border shadow-sm"
            data-ocid="hostel.pricing_table"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/80 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground font-display">
                    Room Type
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-foreground font-display">
                    🥦 Veg
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-foreground font-display">
                    🍗 Non-Veg
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-foreground font-display">
                    ⭐ Special
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.room}
                    className={`border-b border-border last:border-0 transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                    data-ocid={`hostel.pricing_row.${i + 1}`}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.room}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-mono text-xs">
                      ₹{row.veg}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-mono text-xs">
                      ₹{row.nonVeg}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-mono text-xs">
                      ₹{row.special}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SummaryBox text="Most affordable: 15–20 Bed Dorm NAC from ₹92,700/year (veg). Most premium: 2 Bed APT AC at ₹2,70,700/year (special mess). AC rooms cost roughly ₹56,000 more per year than their NAC equivalent — in my experience, worth it for the comfort, especially in summer." />
        </div>
      </section>

      {/* Mess System */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="hostel.mess_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Food</p>
          <h2 className="text-section mb-6">The Mess System</h2>

          {/* Meal timings */}
          <h3 className="text-subsection mb-3">Meal Timings</h3>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            data-ocid="hostel.mess_timings"
          >
            {messTimings.map((m, i) => (
              <div
                key={m.meal}
                className="bg-card border border-border rounded-xl p-4 text-center shadow-sm"
                data-ocid={`hostel.mess_timing.${i + 1}`}
              >
                <div className="text-3xl mb-2" aria-hidden="true">
                  {m.icon}
                </div>
                <p className="font-semibold text-foreground text-sm font-display">
                  {m.meal}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{m.time}</p>
              </div>
            ))}
          </div>

          {/* Mess plans */}
          <h3 className="text-subsection mb-3">Mess Plans</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your mess plan is bundled with your room allocation — you pick it
            during the allotment process. Choose carefully; switching later is
            not always easy.
          </p>
          <div
            className="grid sm:grid-cols-3 gap-4 mb-8"
            data-ocid="hostel.mess_plans_list"
          >
            {messPlans.map((plan, i) => (
              <div
                key={plan.plan}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`hostel.mess_plan.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {plan.icon}
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm font-display">
                    {plan.plan}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {plan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Food Quality */}
          <h3 className="text-subsection mb-3">
            What the Food Is Actually Like
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <BulletCard
              icon="🍽️"
              title="Honest Assessment"
              items={[
                "The food isn't bad — it's just repetitive. By month two, most people start supplementing with outside delivery",
                "Quality depends heavily on your hostel block and the caterer assigned to it. Some messes are noticeably better than others",
                "Special Mess is usually worth the extra cost if the mess is your main food source",
                "Veg and non-veg menus rotate weekly — the pattern becomes familiar fast",
              ]}
            />
            <BulletCard
              icon="💡"
              title="Things Worth Knowing"
              items={[
                "Apply for a rebate before you leave campus — there's no retroactive refund process",
                "Carry your ID card to the mess at all times — they check",
                "The timings are strict. If you miss the window, the mess is closed. Plan your schedule around them",
                "Swiggy delivers on campus. Zomato doesn't. Local freelance delivery is also available — ask around",
              ]}
            />
          </div>

          <div className="bg-muted/60 border border-border rounded-xl p-4 flex items-start gap-2">
            <span className="text-base shrink-0" aria-hidden="true">
              ℹ️
            </span>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                About the Menu:{" "}
              </span>
              The menu is managed by the student mess committee and rotates
              weekly each month. It's posted on hostel notice boards. The
              variety isn't huge — after a few weeks, you'll know exactly what's
              coming on which day.
            </p>
          </div>

          <SummaryBox text="Mess timings: Breakfast 7:15–9:00 AM, Lunch 12:30–2:15 PM, Snacks 4:45–6:15 PM, Dinner 7:30–9:00 PM. Food quality varies by hostel and caterer. It's average, not bad — but repetitive. Most students supplement with Swiggy or local delivery by month two." />
        </div>
      </section>

      {/* Facilities */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="hostel.facilities_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">What's Available</p>
          <h2 className="text-section mb-6">Hostel Facilities</h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="hostel.facilities_list"
          >
            {facilities.map((fac, i) => (
              <div
                key={fac.label}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`hostel.facility.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {fac.icon}
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm font-display">
                    {fac.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <SummaryBox text="Free gym (5:00–8:00 AM / 5:00–8:00 PM), petty shop (day only — closes at night), night canteen (10:30 PM–12:00 AM in select hostels), common room, and 24/7 security in every hostel. Paid gym at Rock Plaza — ₹1,200/month. Health center and pharmacy on campus. Campus Wi-Fi available — get an Airtel or BSNL SIM as backup." />
        </div>
      </section>

      {/* Daily Routine */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="hostel.routine_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">A Typical Day</p>
          <h2 className="text-section mb-2">What Your Day Looks Like</h2>
          <p className="text-sm text-muted-foreground mb-6">
            This isn't a rigid schedule — it's roughly how the day flows when
            you're actually living on campus. Your classes will vary, but the
            mess timings and hostel hours are fixed.
          </p>
          <div className="space-y-2" data-ocid="hostel.routine_list">
            {dailyRoutine.map((slot, i) => (
              <div
                key={slot.time}
                className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-3 shadow-sm"
                data-ocid={`hostel.routine.${i + 1}`}
              >
                <span className="text-xs font-mono text-primary font-semibold shrink-0 mt-0.5 w-32">
                  {slot.time}
                </span>
                <span className="text-sm text-foreground">{slot.activity}</span>
              </div>
            ))}
          </div>

          <SummaryBox text="The hostel day is structured around fixed mess timings and an 8:30 PM curfew — plan everything else around those. Night canteens open at 10:30 PM for late-night hunger. Evenings are your best window for clubs, sports, or study. Once you settle into the rhythm, it's actually manageable." />
        </div>
      </section>

      {/* Rules & Fines */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="hostel.rules_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Things to Know</p>
          <h2 className="text-section mb-2">Rules, Curfew & Fines</h2>
          <p className="text-sm text-muted-foreground mb-6">
            I'll be honest — the rules at VIT-AP are real, and so are the fines.
            As a fresher, knowing this upfront will save you a lot of trouble.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <Card className="card-elevated" data-ocid="hostel.curfew_card">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🕐
                  </span>
                  <h3 className="text-subsection">Curfew</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Curfew is at 8:30 PM — be back inside your hostel by then",
                    "Ladies hostel authorities are strict. The rules are taken seriously and enforcement is consistent — don't test it",
                    "Men's hostels are more lenient in practice, but that doesn't mean the rule doesn't exist. Getting caught has consequences",
                    "Night canteens open at 10:30 PM (in select hostels), so late-night food is still accessible without leaving the building",
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

            <Card className="card-elevated" data-ocid="hostel.fines_card">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    ⚠️
                  </span>
                  <h3 className="text-subsection">Campus Fines</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "VIT-AP has a lot of fines — for hostel violations, being out after curfew, dress code issues, and more. They're real and they add up",
                    "Petty shops close at night — they're not 24/7. Plan ahead; don't be surprised when they're shut at 10 PM",
                    "In my experience, knowing the rules early saves you money. Many freshers get caught off-guard in their first month",
                    "Check the hostel handbook when you arrive — it lists all fines and violation categories",
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
          </div>

          <div className="bg-muted/60 border border-border rounded-xl p-4 flex items-start gap-2">
            <span className="text-base shrink-0" aria-hidden="true">
              💡
            </span>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Quick note:{" "}
              </span>
              The strictness gap between ladies hostel and men's hostel is real.
              If you're in LH, treat the rules as non-negotiable from day one.
              In MH, the culture is more relaxed, but accumulating fines or
              getting flagged can still affect you — it's not worth the risk.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Summary */}
      <section
        className="section-bg-muted px-6 py-8"
        data-ocid="hostel.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">My Overall Take</p>
            <p className="text-sm text-foreground">
              Hostel life at VIT-AP is self-sufficient — everything you need is
              on campus. With 9 active blocks (6 MH, 3 LH), room options from
              2-bed to large dormitories, and bundled mess plans, there's
              something for most budgets. Curfew is at 8:30 PM — ladies hostel
              is strict about this, men's is more relaxed but the rule still
              applies. Petty shops close at night, but night canteens (10:30
              PM–12:00 AM) fill the gap. There are fines on campus for
              violations, so read the hostel handbook early. The mess food gets
              repetitive, but Swiggy works and the night canteen helps. Health
              center and pharmacy on campus mean you don't need to leave for
              minor issues. It's not a luxury setup, but it's functional and
              you'll get used to it faster than you'd think.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
