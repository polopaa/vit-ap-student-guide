import { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";
import {
  campusFood,
  deliveryPoints,
  foodRealityPoints,
  messTimings,
  weeklyMessMenu,
} from "./FoodData";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-block ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const pros = [
  "Swiggy works fine — reliable outside delivery option",
  "Night canteen open 10:30 PM – 12 AM",
  "Breakfast tends to be the most consistent meal",
  "Food Street gives variety beyond the hostel mess",
];

const cons = [
  "Food is honestly the most unpredictable part of VIT-AP",
  "Mess quality varies by hostel — luck of the draw",
  "Peak hours (lunch/dinner) are chaotic — 20+ min waits",
  "Zomato doesn't work here — don't bother trying",
  "Variety gets old fast; most students order outside regularly",
];

export default function Food() {
  return (
    <Layout>
      <style>{`
        .reveal-block { opacity:0; transform:translateY(1.5rem); transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1); }
        .reveal-block.is-visible { opacity:1; transform:translateY(0); }
        @media(prefers-reduced-motion:reduce){.reveal-block{opacity:1;transform:none;transition:none;}}
      `}</style>

      {/* ── Page Header ── */}
      <section
        className="bg-card border-b border-border pt-28 pb-12 px-6"
        data-ocid="food.page_header"
      >
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-up fade-in-up-delay-1">
            <span className="text-label">Food</span>
          </div>
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-bold text-foreground mt-3 mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.15 }}
            data-ocid="food.page_title"
          >
            Food at VIT-AP — fine most days, chaos sometimes
          </h1>
          <p className="fade-in-up fade-in-up-delay-3 font-body text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Food is honestly the most unpredictable part of VIT-AP. Most days
            it's fine, but peak lunch and dinner hours are crowded and quality
            drops. You'll start relying on outside delivery more than you
            expect.
          </p>
        </div>
      </section>

      {/* ── Rating Card ── */}
      <section
        className="bg-background px-6 py-10"
        data-ocid="food.rating_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="card-clean p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="rating-badge w-16 h-16 text-lg font-bold">
                    5.5/10
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-base">
                      Food
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">
                      fine most days, chaos during peak hours
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-px self-stretch bg-border" />
                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                  <div className="callout-pro" data-ocid="food.pros_card">
                    <p className="font-display font-semibold mb-2 text-sm">
                      What works
                    </p>
                    <ul className="space-y-1.5">
                      {pros.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="callout-con" data-ocid="food.cons_card">
                    <p className="font-display font-semibold mb-2 text-sm">
                      What doesn't
                    </p>
                    <ul className="space-y-1.5">
                      {cons.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✗</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mess Timings ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="food.mess_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Every single day</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Mess timings
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              These timings are fixed and strictly followed. Miss a window and
              you're waiting for the next one. Trust me, you'll learn this the
              hard way once before it sticks.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {messTimings.map((entry, i) => (
              <Reveal key={entry.meal} delay={i * 60}>
                <div
                  className="card-clean p-6 text-center"
                  data-ocid={`food.mess_timing.${entry.meal.toLowerCase()}`}
                >
                  <div className="text-2xl mb-3" aria-hidden="true">
                    {entry.icon}
                  </div>
                  <p className="font-display font-semibold text-base text-foreground mb-2">
                    {entry.meal}
                  </p>
                  <div
                    className="w-6 h-px mx-auto mb-2"
                    style={{ background: "oklch(var(--secondary))" }}
                  />
                  <p className="font-mono text-xs text-muted-foreground">
                    {entry.time}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="card-clean p-5">
              <p className="text-label mb-4">How the menu works</p>
              <ul className="space-y-3">
                {[
                  "Menus rotate monthly — put together by the student mess committee",
                  "Both veg and non-veg options are available at every meal",
                  "Special Mess (extra cost) has an upgraded menu — some students find it worth it",
                  "In my experience, breakfast tends to be the most consistent meal across hostels",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground"
                  >
                    <span
                      className="shrink-0 mt-0.5 text-xs font-bold"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      →
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Sample Week Menu ── */}
      <section
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="food.weekly_menu_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">
              So you know what you're getting into
            </span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Sample week menu
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              Here's a sample week based on April 2026 mess data.{" "}
              <strong className="text-foreground">Menus rotate monthly</strong>{" "}
              — this gives you an idea of what a typical week actually looks
              like.
            </p>
          </Reveal>
          <div className="space-y-4" data-ocid="food.weekly_menu_list">
            {weeklyMessMenu.map((day, i) => (
              <Reveal key={day.day} delay={i * 50}>
                <div
                  className="card-clean overflow-hidden"
                  data-ocid={`food.menu_day.${i + 1}`}
                >
                  {/* Day header */}
                  <div
                    className="flex items-center gap-3 px-5 py-3 border-b border-border"
                    style={{ background: "oklch(var(--muted) / 0.6)" }}
                  >
                    <span className="font-display font-semibold text-base text-foreground">
                      {day.day}
                    </span>
                  </div>
                  {/* Meals grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
                    {(
                      [
                        { label: "Breakfast", icon: "🌅", data: day.breakfast },
                        { label: "Lunch", icon: "☀️", data: day.lunch },
                        { label: "Snacks", icon: "🍵", data: day.snacks },
                        { label: "Dinner", icon: "🌙", data: day.dinner },
                      ] as const
                    ).map((meal) => (
                      <div key={meal.label} className="px-4 py-4 min-w-0">
                        <p className="font-display font-semibold text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
                          <span aria-hidden="true">{meal.icon}</span>
                          {meal.label}
                        </p>
                        <p className="font-body text-xs text-foreground leading-relaxed">
                          {meal.data.veg}
                        </p>
                        {meal.data.nonVeg && (
                          <p className="font-body text-xs text-muted-foreground leading-relaxed mt-1.5 flex items-start gap-1.5">
                            <span
                              className="shrink-0 text-[9px] font-mono font-bold border px-1 mt-0.5 rounded"
                              style={{
                                borderColor: "oklch(0.5 0.2 25 / 0.4)",
                                color: "oklch(0.5 0.2 25)",
                                background: "oklch(0.97 0.015 25 / 0.5)",
                              }}
                            >
                              NV
                            </span>
                            {meal.data.nonVeg}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <p className="font-body text-xs text-muted-foreground mt-4">
              NV = Non-Veg option. Veg options available at every meal. Special
              Mess (paid upgrade) has a separate menu not shown here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Food Quality / Reality ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="food.quality_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">My honest take</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              What to actually expect
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              I'm not going to sugarcoat this. Here's what I've seen and
              experienced firsthand.
            </p>
          </Reveal>
          <div
            className="grid sm:grid-cols-2 gap-4"
            data-ocid="food.reality_list"
          >
            {foodRealityPoints.map((point, i) => (
              <Reveal key={point} delay={i * 50}>
                <div
                  className="card-clean p-5 flex gap-4"
                  data-ocid={`food.reality_point.${i + 1}`}
                >
                  <span
                    className="font-display font-bold text-2xl leading-none shrink-0 w-7"
                    style={{ color: "oklch(var(--secondary) / 0.4)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed pt-0.5">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div
              className="mt-5 rounded-xl p-5 border"
              style={{
                background: "oklch(var(--secondary) / 0.06)",
                borderColor: "oklch(var(--secondary) / 0.25)",
                borderLeft: "4px solid oklch(var(--secondary))",
              }}
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Food is average overall. You'll survive on mess food, but you
                won't love it. If your hostel's mess turns out to be one of the
                better ones — honestly, consider yourself lucky. Either way,
                budget for outside food. You'll need it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Campus Dining ── */}
      <section
        className="bg-background px-6 py-14 border-t border-border"
        data-ocid="food.campus_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">Your other options</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Where else to eat on campus
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              Beyond your hostel mess, here's where you can eat. I've spent time
              at all of these.
            </p>
          </Reveal>
          <div
            className="grid sm:grid-cols-2 gap-4"
            data-ocid="food.campus_options_list"
          >
            {campusFood.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <div
                  className="card-clean p-6 h-full"
                  data-ocid={`food.campus_option.${i + 1}`}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-2xl shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-base text-foreground mb-1">
                        {item.name}
                      </h3>
                      <span
                        className="text-xs font-mono border px-2 py-0.5 rounded"
                        style={{
                          borderColor: "oklch(var(--primary) / 0.3)",
                          color: "oklch(var(--primary))",
                          background: "oklch(var(--primary) / 0.07)",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div
              className="mt-5 rounded-xl px-5 py-4 border text-sm font-body"
              style={{
                background: "oklch(0.97 0.015 25 / 0.5)",
                borderColor: "oklch(0.88 0.05 25)",
                color: "oklch(0.4 0.1 25)",
              }}
            >
              <strong>Heads up — timing matters.</strong> Campus food capacity
              doesn't match the student population. If you go to Food Street
              during peak lunch or dinner hours, expect a wait. Go slightly
              before or after peak — it makes a huge difference.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Delivery ── */}
      <section
        className="bg-muted/30 px-6 py-14 border-t border-border"
        data-ocid="food.delivery_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-label">When you're done with the mess</span>
            <h2 className="text-section text-foreground mt-2 mb-2">
              Ordering from outside
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl text-sm">
              Most students order outside food regularly — it's practically a
              part of hostel life. Here's what actually works.
            </p>
          </Reveal>
          <div className="space-y-4" data-ocid="food.delivery_list">
            {deliveryPoints.map((entry, i) => (
              <Reveal key={entry.app} delay={i * 60}>
                <div
                  className="card-clean flex flex-col sm:flex-row gap-5 items-start sm:items-center p-5"
                  data-ocid={`food.delivery_option.${i + 1}`}
                >
                  <div className="sm:w-44 shrink-0 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {entry.icon}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-base text-foreground">
                        {entry.app}
                      </h3>
                      <span
                        className="text-xs font-mono font-semibold"
                        style={{
                          color: entry.positive
                            ? "oklch(0.45 0.14 150)"
                            : "oklch(0.5 0.2 25)",
                        }}
                      >
                        {entry.status}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-8 shrink-0 bg-border" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {entry.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div
              className="mt-5 rounded-xl p-5 border"
              style={{
                background: "oklch(var(--primary) / 0.04)",
                borderColor: "oklch(var(--primary) / 0.18)",
                borderLeft: "4px solid oklch(var(--primary))",
              }}
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Order in groups whenever you can — it splits the delivery cost
                and is more fun. Delivery takes longer here than in a city, so
                if you're ordering for dinner, don't wait until you're already
                starving. Plan ahead by 30–40 minutes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
