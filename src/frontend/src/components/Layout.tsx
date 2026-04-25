import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setMenuOpen(false);
    }
  });

  // Trap scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Minimal sticky top nav */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-subtle"
            : "bg-transparent",
        ].join(" ")}
        data-ocid="header"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          data-ocid="header.logo_link"
          aria-label="VIT-AP Student Hub — home"
        >
          <span
            className="font-display font-black text-xl tracking-tight transition-smooth"
            style={{ color: "oklch(var(--secondary))" }}
          >
            VIT-AP
          </span>
          <span className="hidden sm:block text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-smooth">
            Student Hub
          </span>
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          data-ocid="header.hamburger_button"
          className="relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-smooth hover:bg-muted/40"
        >
          <span
            className={[
              "absolute transition-all duration-300",
              menuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-75",
            ].join(" ")}
          >
            <X className="w-5 h-5 text-foreground" />
          </span>
          <span
            className={[
              "absolute transition-all duration-300",
              menuOpen
                ? "opacity-0 -rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100",
            ].join(" ")}
          >
            <Menu className="w-5 h-5 text-foreground" />
          </span>
        </button>
      </header>

      {/* Full-screen menu overlay */}
      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Page content */}
      <main className="flex-1" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 px-6 md:px-10 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span
              className="font-display font-black text-lg"
              style={{ color: "oklch(var(--secondary))" }}
            >
              VIT-AP
            </span>
            <span className="text-xs text-muted-foreground ml-2 font-body">
              Student Hub — A senior&apos;s honest guide
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
              className="transition-smooth"
              style={{ color: "oklch(var(--secondary))" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

interface FullscreenMenuProps {
  open: boolean;
  onClose: () => void;
}

function FullscreenMenu({ open, onClose }: FullscreenMenuProps) {
  const location = useLocation();

  // Split nav items into two columns
  const half = Math.ceil(navItems.length / 2);
  const col1 = navItems.slice(0, half);
  const col2 = navItems.slice(half);

  return (
    <div
      aria-hidden={!open}
      data-ocid="nav.fullscreen_menu"
      className={[
        "fixed inset-0 z-40 flex flex-col",
        "transition-all duration-500 ease-in-out",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      ].join(" ")}
      style={{ backgroundColor: "oklch(0.06 0.006 60)" }}
    >
      {/* Decorative grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px chapter-divider" />

      {/* Menu content */}
      <div
        className={[
          "relative flex flex-col flex-1 justify-center px-8 md:px-16 lg:px-24 py-20",
          "transition-all duration-500",
          open ? "translate-y-0" : "translate-y-6",
        ].join(" ")}
      >
        {/* Small label */}
        <p className="text-label mb-10" data-ocid="nav.menu_label">
          Navigation
        </p>

        {/* Nav grid */}
        <nav aria-label="Full screen navigation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {/* Column 1 */}
            <ul className="space-y-1">
              {col1.map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <li
                    key={item.id}
                    style={{ animationDelay: `${i * 0.06}s` }}
                    className={open ? "animate-fade-in-up" : ""}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      data-ocid={`nav.link.${item.id}`}
                      className={[
                        "nav-link-cinematic flex items-baseline gap-3 py-2 group",
                        isActive ? "!text-foreground" : "",
                      ].join(" ")}
                    >
                      <span
                        className="text-xs font-body font-semibold tracking-widest w-5 shrink-0 transition-smooth"
                        style={{ color: "oklch(var(--secondary) / 0.5)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="transition-smooth group-hover:text-foreground">
                        {item.title}
                      </span>
                      {isActive && (
                        <span
                          className="text-xs font-body italic ml-1"
                          style={{ color: "oklch(var(--primary))" }}
                        >
                          ◆
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-1 md:mt-0 mt-1">
              {col2.map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <li
                    key={item.id}
                    style={{ animationDelay: `${(i + half) * 0.06}s` }}
                    className={open ? "animate-fade-in-up" : ""}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      data-ocid={`nav.link.${item.id}`}
                      className={[
                        "nav-link-cinematic flex items-baseline gap-3 py-2 group",
                        isActive ? "!text-foreground" : "",
                      ].join(" ")}
                    >
                      <span
                        className="text-xs font-body font-semibold tracking-widest w-5 shrink-0 transition-smooth"
                        style={{ color: "oklch(var(--secondary) / 0.5)" }}
                      >
                        {String(i + half + 1).padStart(2, "0")}
                      </span>
                      <span className="transition-smooth group-hover:text-foreground">
                        {item.title}
                      </span>
                      {isActive && (
                        <span
                          className="text-xs font-body italic ml-1"
                          style={{ color: "oklch(var(--primary))" }}
                        >
                          ◆
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Bottom tagline */}
        <div className="mt-14 chapter-divider" />
        <p className="mt-6 text-xs text-muted-foreground font-body tracking-wider italic">
          A senior&apos;s honest guide to VIT-AP — written for you
        </p>
      </div>
    </div>
  );
}
