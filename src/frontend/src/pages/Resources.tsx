import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Layout } from "../components/Layout";

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
    desc: "Free engineering and science courses with certificates — in my experience, NPTEL content often lines up well with the VIT-AP syllabus",
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
      {/* Page header */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-3 text-xs font-semibold tracking-wide"
          >
            📁 Resources & Materials
          </Badge>
          <h1 className="text-section text-foreground mb-2">
            Resources I've Actually Found Useful
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl">
            Not a random list of links — these are things I or people I know
            have actually used. Bookmark what makes sense for your year and
            situation.
          </p>
        </div>
      </section>

      {/* Notes & Study Material */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="resources.notes_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            Where to Find Notes
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            Finding good notes is a skill in itself — here's how most students
            actually do it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notesTips.map((item, i) => (
              <div
                key={item.icon}
                className="card-elevated rounded-xl p-4 flex items-start gap-3"
                data-ocid={`resources.notes_tip.${i + 1}`}
              >
                <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PYQs */}
      <section
        className="section-bg-light px-6 py-10 border-t border-border"
        data-ocid="resources.pyqs_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            PYQs — Don't Skip These
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            Past year question papers are probably the single most useful thing
            you can study from. Trust me on this one.
          </p>
          <div className="space-y-3 mb-6">
            {pyqTips.map((tip, i) => (
              <div
                key={tip.slice(0, 20)}
                className="flex items-start gap-3"
                data-ocid={`resources.pyq_tip.${i + 1}`}
              >
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-display">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm font-semibold text-foreground mb-2">
              📌 Where to get PYQs
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Department WhatsApp / Telegram groups — best source</li>
              <li>Seniors from your branch — just ask, most will share</li>
              <li>VTOP → Digital Library or Course Materials</li>
              <li>Department-shared Google Drives (ask seniors for links)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="resources.links_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-2">Useful Links</h2>
          <p className="text-xs text-muted-foreground mb-5">
            Organized by what they're useful for. Use what applies to you — you
            don't need all of them.
          </p>
          {linkCategories.map((cat) => (
            <div key={cat} className="mb-7">
              <h3 className="text-label mb-3">{cat}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms
                  .filter((p) => p.category === cat)
                  .map((link, i) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`resources.link.${cat.toLowerCase().replace(/\s+/g, "_")}.${i + 1}`}
                      className="card-elevated rounded-xl p-4 flex items-start gap-3 hover:border-primary/40 hover:shadow-md transition-smooth group"
                    >
                      <span
                        className="text-xl shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        {link.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1 mb-0.5">
                          <p className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                            {link.name}
                          </p>
                          <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="section-bg-light px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
            📌
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Bottom line: </span>
            Most of what you need is available for free — on VTOP, through
            seniors, or on the platforms listed here. The main thing is knowing
            where to look and actually using them instead of waiting until the
            week before exams.
          </p>
        </div>
      </section>
    </Layout>
  );
}
