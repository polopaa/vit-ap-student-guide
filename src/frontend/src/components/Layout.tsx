import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "./navItems";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setMenuOpen(false);
    }
  });

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Sticky navbar */}
      <header
        data-ocid="header"
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-subtle"
            : "bg-card border-b border-border",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 group"
            data-ocid="header.logo_link"
            aria-label="VIT-AP Student Hub — home"
          >
            <span className="font-display font-bold text-base text-foreground tracking-tight group-hover:text-primary transition-smooth">
              VIT-AP
            </span>
            <span className="hidden sm:block text-xs font-body text-muted-foreground tracking-wide">
              Student Hub
            </span>
          </Link>

          {/* Desktop nav — scrollable row of links */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1 flex-1 justify-center overflow-x-auto"
          >
            {navItems.slice(0, 8).map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  data-ocid={`nav.link.${item.id}`}
                  className={[
                    "px-3 py-1.5 rounded-md text-sm font-body font-medium whitespace-nowrap transition-smooth",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  ].join(" ")}
                >
                  {item.title}
                </Link>
              );
            })}
            {/* More dropdown for remaining items */}
            <MoreDropdown
              items={navItems.slice(8)}
              currentPath={location.pathname}
            />
          </nav>

          {/* Desktop CTA — hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              to="/faqs"
              data-ocid="header.cta_link"
              className="px-3 py-1.5 rounded-md text-sm font-body font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-smooth"
            >
              Should I join?
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="header.hamburger_button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-muted transition-smooth"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentPath={location.pathname}
      />

      {/* Page content — padded for fixed header */}
      <main className="flex-1 pt-14" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/40 border-t border-border px-5 sm:px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm text-foreground">
              VIT-AP
            </span>
            <span className="text-xs text-muted-foreground font-body">
              — Built by students, for students.
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4 transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// ─── More dropdown ───────────────────────────────────────────────────────────

interface MoreDropdownProps {
  items: typeof navItems;
  currentPath: string;
}

function MoreDropdown({ items, currentPath }: MoreDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (items.length === 0) return null;

  return (
    <div ref={ref} className="relative" data-ocid="nav.more_dropdown">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
      >
        More{" "}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          className="absolute top-full right-0 mt-1.5 w-48 bg-card border border-border rounded-xl shadow-md overflow-hidden animate-menu-open"
          data-ocid="nav.more_panel"
        >
          {items.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setOpen(false)}
                data-ocid={`nav.link.${item.id}`}
                className={[
                  "block px-4 py-2.5 text-sm font-body transition-smooth",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted",
                ].join(" ")}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Mobile menu ─────────────────────────────────────────────────────────────

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  currentPath: string;
}

function MobileMenu({ open, onClose, currentPath }: MobileMenuProps) {
  return (
    <div
      aria-hidden={!open}
      data-ocid="nav.mobile_menu"
      className={[
        "fixed inset-0 top-14 z-40 md:hidden transition-all duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      {/* Backdrop */}
      <div
        role="button"
        tabIndex={-1}
        className="absolute inset-0 bg-foreground/10 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        aria-label="Close menu"
      />
      {/* Panel */}
      <div
        className={[
          "absolute top-0 left-0 right-0 bg-card border-b border-border shadow-md overflow-y-auto max-h-[calc(100vh-3.5rem)] transition-transform duration-300",
          open ? "translate-y-0" : "-translate-y-4",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation" className="p-4">
          <div className="grid grid-cols-2 gap-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  data-ocid={`nav.mobile_link.${item.id}`}
                  className={[
                    "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-smooth",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted",
                  ].join(" ")}
                >
                  <span className="text-base leading-none">{item.icon}</span>
                  <span className="truncate">{item.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <Link
              to="/faqs"
              onClick={onClose}
              data-ocid="nav.mobile_cta_link"
              className="flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-body font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-smooth"
            >
              Should I join VIT-AP?
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
