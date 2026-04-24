import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, useLocation } from "@tanstack/react-router";
import { X } from "lucide-react";
import { navItems } from "./navItems";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
          onClick={onClose}
          onKeyUp={(e) => e.key === "Escape" && onClose()}
          aria-hidden="true"
          role="presentation"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-card border-r border-border shadow-lg",
          "transition-transform duration-300 ease-in-out",
          "md:relative md:translate-x-0 md:shadow-none md:z-auto",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-label="Sidebar navigation"
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border shrink-0">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-display font-bold text-primary text-base leading-tight">
              VIT-AP
              <br />
              <span className="text-xs font-medium text-muted-foreground">
                Student Hub
              </span>
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
            data-ocid="sidebar.close_button"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Nav links */}
        <ScrollArea className="flex-1 py-3">
          <nav aria-label="Main navigation">
            <ul className="space-y-0.5 px-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      data-ocid={`sidebar.nav.${item.id}`}
                      className={[
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground hover:bg-muted hover:text-foreground",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="text-base shrink-0" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </ScrollArea>

        {/* Sidebar footer */}
        <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground shrink-0">
          <p>© {new Date().getFullYear()} VIT-AP Student Hub</p>
        </div>
      </aside>
    </>
  );
}
