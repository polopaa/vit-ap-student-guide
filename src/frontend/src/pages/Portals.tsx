import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
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
      { threshold: 0.05 },
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

interface StepCardProps {
  step: number;
  title: string;
  desc: string;
}

function StepCard({ step, title, desc }: StepCardProps) {
  return (
    <div className="flex items-start gap-4 border border-border/40 bg-card px-5 py-4 transition-smooth hover:border-border/60">
      <div className="w-8 h-8 border border-secondary/40 text-secondary flex items-center justify-center text-sm font-bold font-display shrink-0">
        {step}
      </div>
      <div>
        <p className="font-display font-semibold text-foreground text-sm">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

const vtopFeatures = [
  {
    icon: "📅",
    label: "Course Registration",
    desc: "This is where FFCS happens — you pick your slots and faculty each semester. From second sem onwards, this is how you control your schedule.",
  },
  {
    icon: "📊",
    label: "Attendance Tracking",
    desc: "This is where you'll panic-check your attendance every Monday, trust me. Real-time percentage per course, updated after each class.",
  },
  {
    icon: "📝",
    label: "Marks & Grades",
    desc: "CAT marks, DA marks, FAT results — it all shows up here. Check it after every exam, not at the end of semester.",
  },
  {
    icon: "🗓️",
    label: "Timetable",
    desc: "Your registered slot schedule for the semester. Download it at the start — you'll refer to it constantly.",
  },
  {
    icon: "💰",
    label: "Fee Payment",
    desc: "Semester fees, hostel fees, re-registration — all paid here. Don't miss the deadlines or you'll get a late fee.",
  },
  {
    icon: "🏠",
    label: "Hostel Management",
    desc: "Hostel allocation, room details, and mess options. Useful when you first join and want to know what you've been assigned.",
  },
  {
    icon: "👤",
    label: "Proctor Details",
    desc: "Your assigned faculty mentor's name and contact. Save their number early — you'll need it for leaves and outing approvals.",
  },
  {
    icon: "📋",
    label: "Exam Timetable & Hall Ticket",
    desc: "Your FAT hall ticket lives here. Download it before the exam window closes — don't find out you missed it on exam day.",
  },
];

const attendanceSteps: StepCardProps[] = [
  {
    step: 1,
    title: "Login to VTOP",
    desc: "Go to vtop.vitap.ac.in and sign in with your application number and password — these are given during admission",
  },
  {
    step: 2,
    title: "Navigate to Attendance",
    desc: "Go to Academics → Attendance from the main menu",
  },
  {
    step: 3,
    title: "Select Semester",
    desc: "Choose the current semester from the dropdown — otherwise you'll be looking at old data",
  },
  {
    step: 4,
    title: "Review the Summary",
    desc: "Each course shows total classes held, classes attended, and your percentage — this is what you need to watch",
  },
  {
    step: 5,
    title: "Check Individual Course Logs",
    desc: "Click on any course to see the date-wise record — useful if you think there's an error",
  },
  {
    step: 6,
    title: "Check Shortage Alerts",
    desc: "Look at the 'Attendance Shortage' section — if a subject shows up here, deal with it immediately, not later",
  },
];

const marksSteps: StepCardProps[] = [
  {
    step: 1,
    title: "Go to Marks Verification",
    desc: "Navigate to Academics → Marks Verification on VTOP",
  },
  {
    step: 2,
    title: "Select Semester",
    desc: "Pick the current semester from the dropdown to load your marks",
  },
  {
    step: 3,
    title: "View Internal Marks",
    desc: "Check CAT-I marks (out of 15), CAT-II marks (out of 15), and DA marks (out of 30)",
  },
  {
    step: 4,
    title: "Check Grade Card After FAT",
    desc: "After FAT, view final marks and letter grade in Academics → Grade Card — this is your official result",
  },
  {
    step: 5,
    title: "Apply for Re-evaluation (if needed)",
    desc: "If you want FAT re-evaluation or paper-seeing, apply within the specified window and pay the required fee on VTOP — miss the window and it's gone",
  },
];

const attendanceZones = [
  {
    threshold: "≥ 80%",
    label: "Safe Zone",
    sublabel: "You're good — just keep attending normally",
    colorClass: "text-secondary",
  },
  {
    threshold: "75 – 79%",
    label: "Caution Zone",
    sublabel: "One or two more absences and you're at risk — be careful",
    colorClass: "text-yellow-400",
  },
  {
    threshold: "65 – 74%",
    label: "Danger Zone",
    sublabel: "Likely debarred from next exam — talk to your proctor now",
    colorClass: "text-orange-400",
  },
  {
    threshold: "< 65%",
    label: "Critical",
    sublabel:
      "Already debarred from exam — you may need to re-register the subject",
    colorClass: "text-destructive",
  },
];

const marksComponents = [
  { component: "CAT-I", marks: "15", note: "~50 min exam" },
  { component: "CAT-II", marks: "15", note: "~50 min exam" },
  {
    component: "Digital Assignments (DA)",
    marks: "30",
    note: "Min 3 assignments × 10 marks",
  },
  {
    component: "Total Internal (CAM)",
    marks: "60",
    note: "Continuous assessment total",
    highlight: true,
  },
  {
    component: "FAT (Final Exam)",
    marks: "40",
    note: "3-hour exam conducted by CoE",
  },
  { component: "Grand Total", marks: "100", note: "—", highlight: true },
];

const vtopTips = [
  "Check attendance every week — don't wait until it drops below 75% to panic",
  "Download your timetable PDF at semester start and keep it somewhere accessible",
  "Verify your CAT marks during the objection window — mistakes do happen",
  "Pay all fees before the deadline — late fees are real and avoidable",
  "If VTOP crashes during registration, note your preferred slots and get back quickly",
  "Your Proctor's contact is right there on VTOP — reach out early if something's off",
];

const deliveryInfo = [
  {
    icon: "🛍️",
    label: "E-commerce Deliveries",
    desc: "Amazon, Flipkart, Ajio, Myntra — packages accepted at hostel reception. Use the campus address below.",
  },
  {
    icon: "🍔",
    label: "Food Delivery",
    desc: "Swiggy works. Zomato doesn't deliver here reliably. There are also local freelance delivery guys — ask seniors in your hostel.",
  },
  {
    icon: "💵",
    label: "Cash on Delivery (COD)",
    desc: "COD works on most platforms — but honestly, keep a UPI app ready, it's just easier",
  },
  {
    icon: "📍",
    label: "Official Campus Address",
    desc: "G-30, Inavolu, beside AP Secretariat, Guntur District, AP – 522237",
  },
];

export default function Portals() {
  return (
    <Layout>
      {/* Chapter Hero */}
      <section className="section-bg-light px-6 pt-20 pb-16 border-b border-border/30">
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-4" data-ocid="portals.page_label">
            Chapter
          </p>
          <h1 className="text-hero text-foreground mb-6 fade-in-up">
            SYSTEMS &<br />
            PORTALS
          </h1>
          <div className="gold-underline w-16 mb-8" />
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-1">
            Everything academic — registering courses, checking attendance,
            viewing marks, paying fees — runs through VTOP. Learn it early and
            you'll save yourself a lot of confusion.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 items-center">
            <Badge variant="secondary" className="text-xs">
              🖥️ VTOP Portal
            </Badge>
            <Badge variant="outline" className="text-xs">
              📦 Deliveries
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="text-xs gap-1.5"
              onClick={() => window.open("https://vtop.vitap.ac.in", "_blank")}
              data-ocid="portals.vtop_link_button"
            >
              <ExternalLink className="w-3 h-3" />
              Open VTOP
            </Button>
          </div>
        </div>
      </section>

      {/* VTOP Overview */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="portals.vtop_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Main Portal</p>
            <h2 className="text-section text-foreground mb-2">
              VTOP — What Each Section Does
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              URL:{" "}
              <span className="font-mono text-secondary">vtop.vitap.ac.in</span>{" "}
              — Use desktop or laptop for anything important. The mobile browser
              version is unreliable, especially during registration.
            </p>
          </FadeSection>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            data-ocid="portals.features_list"
          >
            {vtopFeatures.map((f, i) => (
              <FadeSection key={f.label} delay={i * 50}>
                <div
                  className="border border-border/40 bg-card p-4 flex items-start gap-3 transition-smooth hover:border-border/60"
                  data-ocid={`portals.feature.${i + 1}`}
                >
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      {f.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={200}>
            <div className="border-l-2 border-secondary/50 pl-5 py-3 bg-secondary/5">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-secondary">
                  Login credentials{" "}
                </span>
                are handed out during admission. If you lose access, head to the
                IT help desk on campus — they'll reset it for you.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Attendance */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="portals.attendance_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Step-by-Step</p>
            <h2 className="text-section text-foreground mb-2">
              Checking Attendance
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Attendance updates daily after class. Do this every week — not
              once a month when it's already too late.
            </p>
          </FadeSection>
          <div className="space-y-3 mb-10" data-ocid="portals.attendance_steps">
            {attendanceSteps.map((s, i) => (
              <FadeSection key={s.title} delay={i * 50}>
                <StepCard {...s} />
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={100}>
            <p className="text-label mb-4">Where You Stand</p>
          </FadeSection>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="portals.attendance_zones"
          >
            {attendanceZones.map((zone, i) => (
              <FadeSection key={zone.threshold} delay={i * 60}>
                <div
                  className="border border-border/40 bg-card p-5 transition-smooth hover:border-border/60"
                  data-ocid={`portals.attendance_zone.${i + 1}`}
                >
                  <p
                    className={`font-display text-2xl font-black ${zone.colorClass}`}
                  >
                    {zone.threshold}
                  </p>
                  <p
                    className={`font-display text-sm font-semibold mt-1 ${zone.colorClass}`}
                  >
                    {zone.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {zone.sublabel}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Marks */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="portals.marks_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Step-by-Step</p>
            <h2 className="text-section text-foreground mb-2">
              Viewing Your Marks
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              CAT-I and CAT-II marks get uploaded shortly after each exam. If
              something looks wrong, raise it during the objection window —
              after that, your options are very limited.
            </p>
          </FadeSection>
          <div className="space-y-3 mb-10" data-ocid="portals.marks_steps">
            {marksSteps.map((s, i) => (
              <FadeSection key={s.title} delay={i * 50}>
                <StepCard {...s} />
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={100}>
            <div
              className="border border-border/40 bg-card p-6"
              data-ocid="portals.marks_breakdown"
            >
              <p className="text-label mb-5">Grade Breakdown — Total: 100</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {marksComponents.map((row, i) => (
                  <div
                    key={row.component}
                    className={`text-center p-4 border transition-smooth ${row.highlight ? "border-secondary/40 bg-secondary/5" : "border-border/30 bg-background/40"}`}
                    data-ocid={`portals.marks_component.${i + 1}`}
                  >
                    <p
                      className={`font-display text-3xl font-black ${row.highlight ? "text-secondary" : "text-foreground"}`}
                    >
                      {row.marks}
                    </p>
                    <p
                      className={`font-display text-sm font-semibold mt-1 ${row.highlight ? "text-secondary" : "text-foreground"}`}
                    >
                      {row.component}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {row.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-l-2 border-secondary/50 pl-5 py-3 bg-secondary/5">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-secondary">
                    Important to know:{" "}
                  </span>
                  You need at least 50% in the internal component (CAM) AND at
                  least 50% overall to pass. Bombing your internals and banking
                  on FAT alone won't work — I've seen people learn this the hard
                  way.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* VTOP Tips */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="portals.student_tips_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">From Experience</p>
            <h2 className="text-section text-foreground mb-2">
              Things Worth Knowing
            </h2>
            <div className="gold-underline w-12 mb-8" />
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-3">
            {vtopTips.map((tip, i) => (
              <FadeSection key={tip} delay={i * 60}>
                <div
                  className="flex items-start gap-3 border border-border/40 bg-card px-5 py-4 transition-smooth hover:border-border/60"
                  data-ocid={`portals.tip.${i + 1}`}
                >
                  <span className="text-secondary font-bold text-base shrink-0 mt-0.5">
                    →
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Do & Don't */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="portals.tips_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Honest Advice</p>
            <h2 className="text-section text-foreground mb-2">
              Do This / Don't Do This
            </h2>
            <div className="gold-underline w-12 mb-8" />
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "✅",
                title: "Do this",
                items: [
                  "Check attendance every week — not once a month",
                  "Download and save your timetable at semester start",
                  "Screenshot your registration confirmation as proof",
                  "Raise mark disputes during the objection window",
                  "Use desktop for course registration — mobile often errors",
                  "Save your Proctor's contact number from day one",
                ],
                accent: true,
              },
              {
                icon: "⚠️",
                title: "Avoid this",
                items: [
                  "Checking attendance only at the end of semester — by then it's too late",
                  "Sharing your VTOP login with anyone",
                  "Ignoring fee payment deadlines listed on VTOP",
                  "Using mobile browser during course registration",
                  "Forgetting to log out on shared or lab computers",
                ],
                accent: false,
              },
            ].map((group, gi) => (
              <FadeSection key={group.title} delay={gi * 100}>
                <Card className="card-cinema h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">
                        {group.icon}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className={`mt-0.5 shrink-0 font-bold ${group.accent ? "text-secondary" : "text-destructive"}`}
                          >
                            {group.accent ? "✓" : "✗"}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliveries */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="portals.delivery_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Getting Stuff Delivered</p>
            <h2 className="text-section text-foreground mb-2">
              Online Shopping & Deliveries
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Amazon and Flipkart deliver to campus without issues. For food,
              Swiggy works — Zomato generally doesn't. Use the address below for
              all orders.
            </p>
          </FadeSection>
          <div
            className="grid sm:grid-cols-2 gap-4 mb-6"
            data-ocid="portals.delivery_list"
          >
            {deliveryInfo.map((item, i) => (
              <FadeSection key={item.label} delay={i * 60}>
                <div
                  className={`border p-5 flex items-start gap-3 transition-smooth hover:border-border/60 ${item.label === "Official Campus Address" ? "border-secondary/30 bg-secondary/5 col-span-full sm:col-span-2" : "border-border/40 bg-card"}`}
                  data-ocid={`portals.delivery_item.${i + 1}`}
                >
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">
                      {item.label}
                    </p>
                    <p
                      className={`text-xs mt-0.5 leading-relaxed ${item.label === "Official Campus Address" ? "text-secondary font-mono" : "text-muted-foreground"}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={200}>
            <div className="border border-border/40 bg-card p-5">
              <p className="font-display font-semibold text-foreground text-sm mb-3">
                A few things that'll save you hassle
              </p>
              <ul className="space-y-2">
                {[
                  "Add your hostel block and room number in the delivery address — reception holds it until you pick up",
                  "Packages at hostel reception are usually safe — just check regularly so they don't pile up",
                  "Swiggy/Zomato riders typically stop at the campus gate — go meet them there",
                  "COD works but having GPay or PhonePe just makes things faster and less awkward",
                ].map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-secondary mt-0.5 shrink-0 font-bold">
                      →
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-muted px-6 py-12"
        data-ocid="portals.summary_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="border-l-2 border-primary/60 pl-6 py-4">
              <p className="text-label mb-2">The Short Version</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                VTOP is your academic control center — check it weekly for
                attendance, marks, and deadlines. Don't wait for problems to
                surface; stay on top of it from day one and you'll avoid 90% of
                the stress most students create for themselves.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
