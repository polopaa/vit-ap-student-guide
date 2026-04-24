import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import type { NavItem } from "../types";
import { Layout } from "./Layout";

interface ComingSoonProps {
  section: NavItem;
}

export function ComingSoon({ section }: ComingSoonProps) {
  return (
    <Layout>
      <div className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-3 text-xs">
            {section.icon} {section.title}
          </Badge>
          <h1 className="text-section text-foreground mb-2">{section.title}</h1>
          <p className="text-muted-foreground text-sm">{section.description}</p>
        </div>
      </div>
      <div className="section-bg-muted flex flex-col items-center justify-center px-6 py-20 text-center">
        <span className="text-5xl mb-4" aria-hidden="true">
          🚧
        </span>
        <h2 className="text-subsection text-foreground mb-2">
          Content Coming Soon
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mb-6">
          This section is being prepared. Check back soon for detailed,
          student-friendly content.
        </p>
        <Link to="/">
          <Button variant="default" data-ocid="coming_soon.home_link">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
