import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Layout } from "../components/Layout";

interface StepCardProps {
  step: number;
  title: string;
  desc: string;
}

function StepCard({ step, title, desc }: StepCardProps) {
  return (
    <div className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-4 shadow-sm">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-display shrink-0">
        {step}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground font-display">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
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
    colorClass: "text-accent",
    bgClass: "bg-accent/10 border-accent/30",
  },
  {
    threshold: "75 – 79%",
    label: "Caution Zone",
    sublabel: "One or two more absences and you're at risk — be careful",
    colorClass: "text-yellow-600",
    bgClass: "bg-yellow-50 border-yellow-200",
  },
  {
    threshold: "65 – 74%",
    label: "Danger Zone",
    sublabel:
      "Likely debarred from next exam — talk to your proctor now, not later",
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50 border-orange-200",
  },
  {
    threshold: "< 65%",
    label: "Critical",
    sublabel:
      "Already debarred from exam — you may need to re-register the subject",
    colorClass: "text-destructive",
    bgClass: "bg-destructive/10 border-destructive/30",
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
  "Verify your CAT marks during the objection window — mistakes do happen, and once the window closes, you can't raise it",
  "Pay all fees before the deadline — late fees are real and avoidable",
  "If VTOP crashes during registration, note your preferred slots and get back quickly — it usually recovers",
  "Your Proctor's contact is right there on VTOP — reach out early if something's off with your attendance or grades",
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
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="portals.page_label">
            Systems & Portals
          </p>
          <h2 className="text-hero text-foreground mb-4">
            VTOP is basically your life here
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            Everything academic — registering courses, checking attendance,
            viewing marks, paying fees — runs through VTOP. Learn it early and
            you'll save yourself a lot of confusion. This page also covers
            deliveries to campus.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🖥️ VTOP Portal
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📦 Deliveries
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="text-xs gap-1.5 h-7"
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
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.vtop_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Main Portal</p>
          <h2 className="text-section mb-2">VTOP — What Each Section Does</h2>
          <p className="text-sm text-muted-foreground mb-6">
            URL:{" "}
            <span className="font-mono text-primary">vtop.vitap.ac.in</span> —
            Use desktop or laptop for anything important. The mobile browser
            version is unreliable, especially during registration.
          </p>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            data-ocid="portals.features_list"
          >
            {vtopFeatures.map((f, i) => (
              <div
                key={f.label}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`portals.feature.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {f.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {f.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-accent">
                Login credentials
              </span>{" "}
              are handed out during admission. If you lose access, head to the
              IT help desk on campus — they'll reset it for you.
            </p>
          </div>
        </div>
      </section>

      {/* Attendance Tracking */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="portals.attendance_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Step-by-Step</p>
          <h2 className="text-section mb-2">Checking Your Attendance</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Attendance updates daily after class. Do this every week — not once
            a month when it's already too late.
          </p>
          <div className="space-y-3 mb-8" data-ocid="portals.attendance_steps">
            {attendanceSteps.map((s) => (
              <StepCard key={s.title} {...s} />
            ))}
          </div>

          <p className="text-label mb-3">Where You Stand</p>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="portals.attendance_zones"
          >
            {attendanceZones.map((zone, i) => (
              <div
                key={zone.threshold}
                className={`border rounded-xl p-4 shadow-sm ${zone.bgClass}`}
                data-ocid={`portals.attendance_zone.${i + 1}`}
              >
                <p
                  className={`text-xl font-bold font-display ${zone.colorClass}`}
                >
                  {zone.threshold}
                </p>
                <p className={`text-sm font-semibold mt-1 ${zone.colorClass}`}>
                  {zone.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {zone.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marks and Grades */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.marks_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Step-by-Step</p>
          <h2 className="text-section mb-2">Viewing Your Marks</h2>
          <p className="text-sm text-muted-foreground mb-6">
            CAT-I and CAT-II marks get uploaded shortly after each exam. DA
            marks come in throughout the semester. FAT results appear after the
            final. If something looks wrong, raise it during the objection
            window — after that, your options are very limited.
          </p>
          <div className="space-y-3 mb-8" data-ocid="portals.marks_steps">
            {marksSteps.map((s) => (
              <StepCard key={s.title} {...s} />
            ))}
          </div>

          <div
            className="bg-card border border-border rounded-xl p-5 shadow-sm"
            data-ocid="portals.marks_breakdown"
          >
            <p className="text-label mb-4">
              How your grade is calculated — Total: 100
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {marksComponents.map((row, i) => (
                <div
                  key={row.component}
                  className={`text-center rounded-lg p-4 border ${
                    row.highlight
                      ? "bg-primary/8 border-primary/30"
                      : "bg-background border-border"
                  }`}
                  data-ocid={`portals.marks_component.${i + 1}`}
                >
                  <p
                    className={`text-2xl font-bold font-display ${
                      row.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {row.marks}
                  </p>
                  <p
                    className={`text-sm font-semibold font-display mt-0.5 ${
                      row.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {row.component}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-accent/10 border border-accent/30 rounded-lg p-3">
              <p className="text-xs text-foreground">
                <span className="font-semibold text-accent">
                  Important to know:
                </span>{" "}
                You need at least 50% in the internal component (CAM) AND at
                least 50% overall to pass. Bombing your internals and banking on
                FAT alone won't work — I've seen people learn this the hard way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VTOP Tips */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="portals.student_tips_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">From experience</p>
          <h2 className="text-section mb-6">Things worth knowing about VTOP</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {vtopTips.map((tip, i) => (
              <div
                key={tip}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-sm"
                data-ocid={`portals.tip.${i + 1}`}
              >
                <span className="text-accent font-bold text-base shrink-0 mt-0.5">
                  →
                </span>
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do & Don't */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.tips_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Honest advice</p>
          <h2 className="text-section mb-6">What to do and what not to do</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    ✅
                  </span>
                  <h3 className="text-subsection">Do this</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Check attendance every week — not once a month",
                    "Download and save your timetable at semester start",
                    "Screenshot your registration confirmation as proof",
                    "Raise mark disputes during the objection window",
                    "Use desktop for course registration — mobile often errors",
                    "Save your Proctor's contact number from day one",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    ⚠️
                  </span>
                  <h3 className="text-subsection">Avoid this</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Checking attendance only at the end of semester — by then it's too late",
                    "Sharing your VTOP login with anyone",
                    "Ignoring fee payment deadlines listed on VTOP",
                    "Using mobile browser during course registration",
                    "Forgetting to log out on shared or lab computers",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-destructive mt-0.5 shrink-0">
                        ✗
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Shopping & Deliveries */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.delivery_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Getting stuff delivered</p>
          <h2 className="text-section mb-2">Online Shopping & Deliveries</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Amazon and Flipkart deliver to campus without issues. For food,
            Swiggy works — Zomato generally doesn't. Local freelance delivery is
            also an option that many students use. Use the address below for all
            orders.
          </p>
          <div
            className="grid sm:grid-cols-2 gap-4 mb-5"
            data-ocid="portals.delivery_list"
          >
            {deliveryInfo.map((item, i) => (
              <div
                key={item.label}
                className={`border rounded-xl p-4 shadow-sm flex items-start gap-3 ${
                  item.label === "Official Campus Address"
                    ? "bg-primary/5 border-primary/20 col-span-full sm:col-span-2"
                    : "bg-card border-border"
                }`}
                data-ocid={`portals.delivery_item.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {item.label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      item.label === "Official Campus Address"
                        ? "text-primary font-mono font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold text-foreground font-display mb-2">
              A few things that'll save you hassle
            </p>
            <ul className="space-y-1.5">
              {[
                "Add your hostel block and room number in the delivery address — reception holds it until you pick up",
                "Packages at hostel reception are usually safe — just check regularly so they don't pile up",
                "Swiggy/Zomato riders typically stop at the campus gate — go meet them there",
                "COD works but having GPay or PhonePe just makes things faster and less awkward",
              ].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="text-accent mt-0.5 shrink-0">→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-light px-6 py-8"
        data-ocid="portals.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">The short version</p>
            <p className="text-sm text-foreground">
              VTOP is your academic control center — check it weekly for
              attendance, marks, and deadlines. Don't wait for problems to
              surface; stay on top of it from day one and you'll avoid 90% of
              the stress most students create for themselves.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
