import { Badge } from "@/components/ui/badge";
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

const platforms = [
  {
    name: "VTOP Portal",
    url: "https://vtopcc.vit.ac.in",
    icon: "🖥️",
    desc: "Attendance, marks, timetable, course materials — start here before looking anywhere else",
    category: "VIT Official",
  },
  {
    name: "VIT-AP Official Site",
    url: "https://vitap.ac.in",
    icon: "🏫",
    desc: "Academic calendar, circulars, announcements — mostly institutional, but useful for official dates",
    category: "VIT Official",
  },
  {
    name: "NPTEL Free Courses",
    url: "https://nptel.ac.in",
    icon: "🎓",
    desc: "Free engineering and science courses with certificates — NPTEL content often lines up well with the VIT-AP syllabus",
    category: "Learning",
  },
  {
    name: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu",
    icon: "🔬",
    desc: "World-class lecture notes and course material — useful when your textbook doesn't explain something clearly",
    category: "Learning",
  },
  {
    name: "Khan Academy",
    url: "https://khanacademy.org",
    icon: "📐",
    desc: "Math and science fundamentals explained simply — underrated for clearing basics quickly",
    category: "Learning",
  },
  {
    name: "GeeksforGeeks",
    url: "https://geeksforgeeks.org",
    icon: "💻",
    desc: "CS concepts, interview prep, coding problems — I used this constantly for exams and placements",
    category: "Coding & Career",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    icon: "🧩",
    desc: "Coding practice — if you're aiming for placements, this is non-negotiable. Start early, not in final year",
    category: "Coding & Career",
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com",
    icon: "🏆",
    desc: "Skill tests and certifications that recruiters actually check — useful to have on your profile",
    category: "Coding & Career",
  },
  {
    name: "Coursera",
    url: "https://coursera.org",
    icon: "🎖️",
    desc: "Certifications from Google, IBM, AWS — worth it if you finish them properly, not just for the certificate",
    category: "Coding & Career",
  },
  {
    name: "National Digital Library",
    url: "https://ndl.gov.in",
    icon: "📖",
    desc: "Free access to textbooks and research papers — useful when you need the actual textbook and don't want to buy it",
    category: "Books & Research",
  },
];

const linkCategories = [
  "VIT Official",
  "Learning",
  "Coding & Career",
  "Books & Research",
];

const notesTips = [
  {
    icon: "📂",
    tip: "Check VTOP's \"Course Materials\" section first — most faculty upload slides here after each lecture. It's hit or miss, but worth checking.",
  },
  {
    icon: "💬",
    tip: "Class WhatsApp and Telegram groups are where things actually circulate — notes, PYQs, important PDFs. Join your department group on day one.",
  },
  {
    icon: "🔗",
    tip: "Some departments maintain a shared Google Drive. Ask a second-year student — they'll usually share it without hesitation.",
  },
  {
    icon: "📹",
    tip: "NPTEL video lectures often match the VIT-AP syllabus closely. When a topic isn't clicking from class, try finding the NPTEL lecture on it.",
  },
];

const pyqTips = [
  "PYQs are honestly the most reliable way to prepare for CAT exams and finals — question patterns repeat more often than faculty would probably like to admit.",
  "Most PYQs circulate through class groups. Join your department group on the first day and you'll have access to years of papers.",
  'VTOP has a "Digital Library" section — some PYQs are available there officially. Check it first before asking around.',
  "Go through at least 3 years of PYQs before any major exam. The same types of questions come up regularly.",
  "Numericals especially tend to repeat — once you recognize the pattern, you can prepare for them specifically.",
];

export default function Resources() {
  return (
    <Layout>
      {/* Chapter Hero */}
      <section className="section-bg-light px-6 pt-20 pb-16 border-b border-border/30">
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-4">Chapter</p>
          <h1 className="text-hero text-foreground mb-6 fade-in-up">
            RESOURCES
          </h1>
          <div className="gold-underline w-16 mb-8" />
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-1">
            Not a random list of links — these are things I or people I know
            have actually used. Bookmark what makes sense for your year and
            situation.
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="text-xs">
              📁 Resources & Materials
            </Badge>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section
        className="section-bg-muted px-6 py-16 border-b border-border/30"
        data-ocid="resources.notes_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Where to Find Notes</p>
            <h2 className="text-section text-foreground mb-2">
              Study Material
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Finding good notes is a skill in itself — here's how most students
              actually do it.
            </p>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notesTips.map((item, i) => (
              <FadeSection key={item.icon} delay={i * 60}>
                <div
                  className="border border-border/40 bg-card p-5 flex items-start gap-4 transition-smooth hover:border-secondary/40"
                  data-ocid={`resources.notes_tip.${i + 1}`}
                >
                  <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                    {item.icon}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.tip}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* PYQs */}
      <section
        className="section-bg-light px-6 py-16 border-b border-border/30"
        data-ocid="resources.pyqs_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Don't Skip These</p>
            <h2 className="text-section text-foreground mb-2">
              Past Year Questions
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Past year question papers are probably the single most useful
              thing you can study from. Trust me on this one.
            </p>
          </FadeSection>
          <div className="space-y-4 mb-8">
            {pyqTips.map((tip, i) => (
              <FadeSection key={tip.slice(0, 20)} delay={i * 60}>
                <div
                  className="flex items-start gap-4"
                  data-ocid={`resources.pyq_tip.${i + 1}`}
                >
                  <span className="mt-1 shrink-0 w-7 h-7 border border-secondary/40 text-secondary flex items-center justify-center text-xs font-bold font-display">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={200}>
            <div className="border-l-2 border-secondary/50 pl-5 py-4 bg-secondary/5">
              <p className="text-sm font-semibold text-foreground mb-2">
                📌 Where to get PYQs
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {[
                  "Department WhatsApp / Telegram groups — best source",
                  "Seniors from your branch — just ask, most will share",
                  "VTOP → Digital Library or Course Materials",
                  "Department-shared Google Drives (ask seniors for links)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-secondary shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Links */}
      <section
        className="section-bg-muted px-6 py-16"
        data-ocid="resources.links_section"
      >
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="text-label mb-3">Curated Links</p>
            <h2 className="text-section text-foreground mb-2">
              Useful Platforms
            </h2>
            <div className="gold-underline w-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Organized by what they're useful for. Use what applies to you —
              you don't need all of them.
            </p>
          </FadeSection>
          {linkCategories.map((cat, catIdx) => (
            <div key={cat} className="mb-10">
              <FadeSection delay={catIdx * 50}>
                <p className="text-label mb-4">{cat}</p>
              </FadeSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms
                  .filter((p) => p.category === cat)
                  .map((link, i) => (
                    <FadeSection key={link.name} delay={i * 60 + catIdx * 30}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid={`resources.link.${cat.toLowerCase().replace(/\s+/g, "_")}.${i + 1}`}
                        className="border border-border/40 bg-card p-4 flex items-start gap-3 hover:border-secondary/50 transition-smooth group"
                      >
                        <span
                          className="text-xl shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          {link.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1 mb-0.5">
                            <p className="font-display font-semibold text-sm text-foreground group-hover:text-secondary transition-colors truncate">
                              {link.name}
                            </p>
                            <ExternalLink className="w-3 h-3 text-muted-foreground/50 shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {link.desc}
                          </p>
                        </div>
                      </a>
                    </FadeSection>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="section-bg-light px-6 py-12 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="border-l-2 border-secondary/50 pl-6 py-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  Bottom line:{" "}
                </span>
                Most of what you need is available for free — on VTOP, through
                seniors, or on the platforms listed here. The main thing is
                knowing where to look and actually using them instead of waiting
                until the week before exams.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
