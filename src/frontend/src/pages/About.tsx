import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

interface InfoCardProps {
  icon: string;
  title: string;
  items: string[];
}

function InfoCard({ icon, title, items }: InfoCardProps) {
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

interface TransportCardProps {
  icon: string;
  mode: string;
  tag: string;
  tagVariant: "secondary" | "outline" | "default" | "destructive";
  details: string[];
  ocid?: string;
}

function TransportCard({
  icon,
  mode,
  tag,
  tagVariant,
  details,
  ocid,
}: TransportCardProps) {
  return (
    <Card className="card-elevated h-full" data-ocid={ocid}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              {icon}
            </span>
            <h3 className="text-subsection">{mode}</h3>
          </div>
          <Badge variant={tagVariant} className="text-xs shrink-0">
            {tag}
          </Badge>
        </div>
        <ul className="space-y-2">
          {details.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-sm text-foreground"
            >
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// Fresh pros and cons — derived from real student experience, not copy-pasted
const negatives = [
  "Gym access is genuinely frustrating if fitness matters to you. The hostel gyms are only open 5–8am and 5–8pm — miss those windows and you're out of luck. The paid gym books up fast; if you wait a week after joining, you might not get a slot at all.",
  "In your first semester, you have zero control over your schedule. The college assigns your slots — you don't pick anything. FFCS (the flexible system everyone talks about) only kicks in from semester two. Just know that going in.",
  "By week six or seven, you'll be ordering Swiggy almost daily. The mess food isn't terrible — it's just the same rotation every week. Honestly, monotony is the real issue, not quality.",
  "If you miss even one quiz, it can hurt you more than you'd expect. There's no standardized re-test policy — it's entirely the professor's call whether one happens. I've seen students lose a full grade because of one missed quiz with no make-up.",
  "Food Street and Rock Plaza are the main food spots, but the campus population is huge relative to the capacity. During peak hours — right after class — expect a wait or expect to miss out. It gets better once you figure out the timing.",
];

const positives = [
  "There's a health center and a small pharmacy right on campus. It's nothing fancy, but for a fever, cold medicine, or a basic consultation — you won't have to leave campus. When you're sick and just want to rest, this matters more than you'd think.",
  "Night canteens and petty shops inside the hostels are genuinely a lifesaver. At 11pm when you're hungry and the mess is closed, those shops are right there. I relied on them more than I expected, especially during exam season.",
  "Swiggy delivers to campus and local freelance delivery options are available too. The food ecosystem around campus is decent enough to fill the gaps when the mess gets old — and it will get old.",
  "There's a room for almost every budget. 2-bed AC rooms, dormitories with 15–20 students, apartment-style options — you can pick what makes sense for you financially. Not many colleges give you this much flexibility on housing.",
  "Once semester two starts, FFCS actually gives you real control over your timetable. You can avoid 8am slots, cluster your classes, get long weekends — it takes some planning, but it's genuinely one of the better things about studying here.",
];

const realityCards = [
  {
    icon: "🌡️",
    title: "Classrooms — What to Expect",
    items: [
      "Honestly, most classrooms don't have AC. In March–May, it gets uncomfortable — I'd say bring a handheld fan if you're heat-sensitive",
      "Whiteboards and projectors in all classrooms — nothing fancy, but functional",
      "Labs are air-conditioned, which is a relief",
      "You get used to it, but fair warning: the heat is real",
    ],
  },
  {
    icon: "🏋️",
    title: "Gym & Fitness",
    items: [
      "Free hostel gyms are available in most blocks — basic equipment, but it works",
      "Gym timings are 5–8am and 5–8pm only. If you're not a morning person, your window is tight",
      "The paid campus gym is better equipped but costs ₹1,200/month and slots go fast",
      "My advice: go sign up for the paid gym in the first week if fitness is a priority",
    ],
  },
  {
    icon: "🏸",
    title: "Sports & Recreation",
    items: [
      "Badminton courts exist — but you have to be on time, every time. Show up 10 minutes late and someone else has your slot",
      "Indoor activity room has TT, carrom, chess — it's small, so expect to wait during peak hours",
      "Basketball, volleyball, football, and cricket courts are available and generally less crowded",
      "Outdoor courts are your best bet for a casual game without too much hassle",
    ],
  },
  {
    icon: "📶",
    title: "Day-to-Day Campus Life",
    items: [
      "Campus Wi-Fi is there but speeds vary a lot by hostel block — in my experience, don't rely on it for heavy downloads",
      "VTOP is your single point for everything: attendance, grades, timetable, registration",
      "Campus is walkable, but summer heat makes it tiring — figure out the covered routes early",
      "Night canteens in select hostels are open late — great for post-study snack runs",
    ],
  },
];

const keyDistances = [
  { place: "Vijayawada City Center", distance: "20 km" },
  { place: "Vijayawada Railway Station", distance: "17 km" },
  { place: "Vijayawada International Airport", distance: "38 km" },
  { place: "Guntur City Center", distance: "33 km" },
  { place: "Guntur Railway Station", distance: "32 km" },
];

const transportOptions: TransportCardProps[] = [
  {
    icon: "🚌",
    mode: "University Shuttle",
    tag: "Free",
    tagVariant: "secondary",
    ocid: "about.transport.item.1",
    details: [
      "Every Sunday — departs 10:00 AM to 12:00 PM towards Vijayawada",
      "Return: 4:30 PM – 6:30 PM back to campus",
      "Students only — carry your ID card",
      "I used this almost every weekend. Check VTOP for schedule updates",
    ],
  },
  {
    icon: "🚍",
    mode: "APSRTC Bus",
    tag: "Budget",
    tagVariant: "outline",
    ocid: "about.transport.item.2",
    details: [
      "Direct bus to Vijayawada: ~₹35",
      "Via Guntur: ₹35 + ₹50 connecting bus",
      "Departs from main road near campus",
      "Best for regular, low-cost travel — not the fastest, but gets the job done",
    ],
  },
  {
    icon: "🚐",
    mode: "Shared Vans / Autos",
    tag: "Shared",
    tagVariant: "outline",
    ocid: "about.transport.item.3",
    details: [
      "~₹150 per person to Vijayawada",
      "Faster than the bus, less frequent",
      "Available near the campus gate",
      "Good call when you're carrying luggage",
    ],
  },
  {
    icon: "🚖",
    mode: "Private Cabs (Ola / Uber)",
    tag: "Convenient",
    tagVariant: "secondary",
    ocid: "about.transport.item.4",
    details: [
      "To Vijayawada Railway Station: ₹400–600",
      "To Vijayawada Airport: ₹700–1,000",
      "Only real option for early morning flights or late-night travel",
      "Book in advance — availability near campus can be patchy",
    ],
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="about.section_label">
            About VIT-AP
          </p>
          <h2 className="text-hero text-foreground mb-4">
            Should You Join VIT-AP?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            I'm not going to sell this place to you. Here's what I actually
            think about VIT-AP — based on my time here — so you can decide for
            yourself whether it's the right fit.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📍 Amaravati, AP
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🎓 Est. 2017
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏛️ Deemed University
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📚 B.Tech, M.Tech, MBA, MCA, PhD
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick snapshot */}
      <section
        className="section-bg-muted px-6 py-8 border-b border-border"
        data-ocid="about.snapshot_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Quick Overview</p>
          <h2 className="text-section mb-4">What VIT-AP Is</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              {[
                "Private deemed university on a 200-acre campus in Amaravati — it's big, but still growing",
                "Part of the VIT Group — same FFCS system, similar academic culture to VIT Vellore",
                "Placement-focused — companies visit regularly; that's one of the genuine selling points",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="text-primary mt-0.5 shrink-0 font-bold">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                "FFCS from semester 2 — you build your own timetable. First semester is assigned for you.",
                "Full hostel campus — almost everyone lives on campus all semester",
                "Active student clubs: technical, cultural, sports, and social — worth joining early",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="text-primary mt-0.5 shrink-0 font-bold">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reality cards */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="about.reality_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">The Real Picture</p>
          <h2 className="text-section mb-2">
            What Campus Life Is Actually Like
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Stuff I wish someone had told me before I joined — not what the
            brochure says.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {realityCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="about.location_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Getting Here</p>
          <h2 className="text-section mb-6">Location & Address</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    📍
                  </span>
                  <h3 className="text-subsection">Campus Address</h3>
                </div>
                <address className="not-italic text-sm text-foreground leading-relaxed mb-4">
                  G-30, Inavolu,
                  <br />
                  beside AP Secretariat,
                  <br />
                  Guntur District,
                  <br />
                  Andhra Pradesh – 522237
                </address>
                <div className="bg-muted/50 rounded-lg px-4 py-3">
                  <p className="text-xs text-muted-foreground mb-1">
                    Campus Area
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    200 Acres
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    🗺️
                  </span>
                  <h3 className="text-subsection">Key Distances</h3>
                </div>
                <ul className="space-y-3">
                  {keyDistances.map((d) => (
                    <li
                      key={d.place}
                      className="flex items-center justify-between text-sm"
                      data-ocid={`about.distance.${d.place.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <span className="text-foreground">{d.place}</span>
                      <Badge
                        variant="outline"
                        className="text-xs font-mono shrink-0 ml-2"
                      >
                        {d.distance}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="about.transport_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Getting Around</p>
          <h2 className="text-section mb-2">How to Get In and Out of Campus</h2>
          <p className="text-sm text-muted-foreground mb-6">
            You're about 20 km from Vijayawada city. Here's what I used and what
            worked.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {transportOptions.map((t) => (
              <TransportCard key={t.mode} {...t} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            💡 Honestly, the free Sunday shuttle to Vijayawada is underrated —
            use it. For early morning trains or flights, book a cab the night
            before; availability at the gate can be unpredictable.
          </p>
        </div>
      </section>

      {/* Campus Facilities */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="about.facilities_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">On-Campus Support</p>
          <h2 className="text-section mb-6">Health & Medical Facilities</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🏥
                  </span>
                  <h3 className="text-subsection">Health Center</h3>
                </div>
                <p className="text-sm text-foreground">
                  There's an on-campus health center and in my experience it's
                  more useful than it sounds. For a fever, stomach issue, or
                  basic consultation — you don't need to leave campus. They also
                  issue sick certificates, which matters for attendance. For
                  anything serious, they'll refer you to a hospital in
                  Vijayawada.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    💊
                  </span>
                  <h3 className="text-subsection">Campus Pharmacy</h3>
                </div>
                <p className="text-sm text-foreground">
                  There's a small pharmacy on campus — paracetamol, antacids,
                  ORS, the basics are all there. It's limited, so for specific
                  prescriptions you may still need to go off-campus. But for
                  common stuff at odd hours, it saves you a trip.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubs & Fests */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="about.campus_life_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Campus Life</p>
          <h2 className="text-section mb-2">Clubs, Events & Hackathons</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Honestly, joining a club in your first semester is one of the better
            decisions you can make. It's where you'll meet people outside your
            department and build connections that actually last.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🎉
                  </span>
                  <h3 className="text-subsection">
                    Annual Cultural Fest — VITopia
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  VIT-AP's flagship inter-college cultural festival. Students
                  from across India come for it — competitions in music, dance,
                  drama, art, and more. It's genuinely one of the better
                  experiences of your time here if you get involved.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🤝
                  </span>
                  <h3 className="text-subsection">Student Clubs</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Technical — coding, robotics, AI/ML, IoT",
                    "Cultural — music, dance, drama, fine arts",
                    "Social — NSS, community service",
                    "Sports — inter-hostel and inter-college competitions",
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

          <div className="grid md:grid-cols-2 gap-5">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    💻
                  </span>
                  <h3 className="text-subsection">
                    On-Campus Hackathons & Events
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Hackathons and events happen regularly on campus — though they
                  may not always be large-scale. Most are organized by student
                  clubs: workshops, coding competitions, project showcases, and
                  small hackathons throughout the year.
                </p>
                <p className="text-sm text-foreground">
                  If you want to be involved, joining a club early is the
                  fastest way in. That's how most people find out about events
                  before they're publicly announced.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🌐
                  </span>
                  <h3 className="text-subsection">
                    External Competitions — GSoC, CTFs & More
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Bigger programs — Google Summer of Code (GSoC), competitive
                  hackathons, CTFs, reconnaissance competitions — don't happen
                  on campus. You participate individually or in small teams,
                  online or by traveling to the venue.
                </p>
                <p className="text-sm text-foreground">
                  The college doesn't organize these, but students do
                  participate. In my experience, the real shortcut is finding
                  seniors who've done it — they'll tell you exactly how to get
                  started and what the process actually looks like.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="about.pros_cons_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">My Honest Verdict</p>
          <h2 className="text-section mb-2">
            What I Think Works and What Doesn't
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            This is based on real experience, not marketing. Take it as advice
            from someone who's been through it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Negatives */}
            <Card className="card-elevated h-full border-destructive/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    ⚠️
                  </span>
                  <h3 className="text-subsection text-foreground">
                    Things that will bother you
                  </h3>
                </div>
                <ol className="space-y-4">
                  {negatives.map((item, i) => (
                    <li
                      key={item.slice(0, 40)}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="shrink-0 mt-0.5 font-semibold text-destructive/80 font-mono text-xs w-4">
                        {i + 1}.
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Positives */}
            <Card className="card-elevated h-full border-primary/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    ✅
                  </span>
                  <h3 className="text-subsection text-foreground">
                    Things that genuinely work
                  </h3>
                </div>
                <ol className="space-y-4">
                  {positives.map((item, i) => (
                    <li
                      key={item.slice(0, 40)}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="shrink-0 mt-0.5 font-semibold text-primary font-mono text-xs w-4">
                        {i + 1}.
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-light px-6 py-8"
        data-ocid="about.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">My Take</p>
            <p className="text-sm text-foreground">
              VIT-AP is a placement-focused engineering college on a 200-acre
              campus in Amaravati — about 20 km from Vijayawada. The academic
              system has its quirks, the food gets repetitive, and the campus is
              still developing. But if you're someone who's willing to be
              proactive — join clubs, manage your time, build your own network —
              you'll get a lot out of it. It's not a perfect college. It's a
              decent one with real opportunities, if you use them.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
