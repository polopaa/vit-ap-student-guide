import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import { navItems } from "../components/navItems";

const highlights = [
  { label: "Sections", value: "12", icon: "📋" },
  { label: "FAQs", value: "20+", icon: "❓" },
  { label: "Survival Tips", value: "50+", icon: "💡" },
  { label: "Campus Guides", value: "5+", icon: "🗺️" },
];

// Remove "home" from section cards
const sectionCards = navItems.filter((item) => item.id !== "home");

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-12 md:py-16 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-4 text-xs font-semibold tracking-wide"
          >
            🎓 From a student, for students
          </Badge>
          <h1
            className="text-hero mb-4 text-foreground"
            data-ocid="home.hero_heading"
          >
            VIT-AP Student Hub
          </h1>
          <p className="text-lg text-muted-foreground mb-3 font-body">
            Hey — if you're trying to figure out whether VIT-AP is worth it, or
            you've already gotten in and want to know what to expect, you're in
            the right place.
          </p>
          <p className="text-sm text-muted-foreground mb-8 font-body">
            I put this together based on my own experience here. No brochure
            talk, no institutional fluff — just honest, practical info I wish
            someone had handed me when I was in your position.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="card-elevated rounded-xl p-4 flex flex-col items-center gap-1"
              >
                <span className="text-2xl" aria-hidden="true">
                  {h.icon}
                </span>
                <span className="font-display font-bold text-xl text-primary">
                  {h.value}
                </span>
                <span className="text-xs text-muted-foreground">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section cards grid */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="home.sections_grid"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-subsection text-foreground mb-2">
            What's inside
          </h2>
          <p className="text-xs text-muted-foreground mb-6">
            Pick whatever's most relevant to where you are right now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectionCards.map((section, index) => (
              <Link
                key={section.id}
                to={section.path}
                data-ocid={`home.section_card.${index + 1}`}
                className="group"
              >
                <Card className="h-full transition-smooth hover:shadow-md hover:border-primary/40 cursor-pointer bg-card">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <span
                        className="text-2xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                        aria-hidden="true"
                      >
                        {section.icon}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-200">
                          {section.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick tip banner */}
      <section className="section-bg-light px-6 py-8 border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-3xl shrink-0" aria-hidden="true">
            💡
          </span>
          <div>
            <p className="font-display font-semibold text-foreground text-sm">
              One thing I'd tell my fresher self
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Register for FFCS slots early — good faculty fills up fast, trust
              me. And read the{" "}
              <Link
                to="/academics"
                className="text-primary hover:underline font-medium"
              >
                Academics guide
              </Link>{" "}
              before your first registration so you actually understand what
              you're signing up for.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
