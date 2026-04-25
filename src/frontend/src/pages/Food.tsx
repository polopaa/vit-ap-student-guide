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

export default function Food() {
  return (
    <Layout>
      <style>{`
        .reveal-block { opacity:0; transform:translateY(2rem); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-block.is-visible { opacity:1; transform:translateY(0); }
        @media(prefers-reduced-motion:reduce){.reveal-block{opacity:1;transform:none;transition:none;}}
      `}</style>

      {/* ── Chapter Hero ── */}
      <section className="bg-background min-h-[60vh] flex items-end px-6 pb-16 pt-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grain opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto w-full">
          <div className="fade-in-up fade-in-up-delay-1">
            <span className="chapter-label">Chapter V</span>
          </div>
          <h1
            className="fade-in-up fade-in-up-delay-2 font-display font-black text-foreground leading-none tracking-tighter mt-4 mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            data-ocid="food.chapter_title"
          >
            FOOD
          </h1>
          <p className="fade-in-up fade-in-up-delay-3 font-body italic text-muted-foreground text-xl max-w-2xl">
            Let me be honest with you — food is one of those things that will
            affect your day-to-day more than you expect. Here's everything I
            wish someone had told me before I arrived.
          </p>
          <div className="fade-in-up fade-in-up-delay-4 chapter-divider mt-8 w-24" />
        </div>
      </section>

      {/* ── Mess Timings ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="food.mess_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Every single day</p>
            <h2 className="text-section text-foreground mb-3">Mess Timings</h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              These timings are fixed and strictly followed. Miss a window and
              you're waiting for the next one — there's no flexibility. Trust
              me, you'll learn this the hard way once before it sticks.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {messTimings.map((entry, i) => (
              <Reveal key={entry.meal} delay={i * 60} className="bg-background">
                <div
                  className="p-8 text-center"
                  data-ocid={`food.mess_timing.${entry.meal.toLowerCase()}`}
                >
                  <div className="text-3xl mb-4" aria-hidden="true">
                    {entry.icon}
                  </div>
                  <p className="font-display font-black text-xl text-foreground mb-2">
                    {entry.meal}
                  </p>
                  <div
                    className="w-6 h-px mx-auto mb-3"
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
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-label mb-4">How the menu works</p>
              <ul className="space-y-3">
                {[
                  "Menus rotate monthly — put together by the student mess committee",
                  "Both veg and non-veg options are available at every meal",
                  "Special Mess option (extra cost) has an upgraded menu — some students find it worth it",
                  "In my experience, breakfast tends to be the most consistent meal across hostels",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 font-body text-sm text-muted-foreground"
                  >
                    <span
                      className="shrink-0 mt-1"
                      style={{ color: "oklch(var(--secondary))" }}
                    >
                      —
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
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="food.weekly_menu_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">
              So you know what you're getting into
            </p>
            <h2 className="text-section text-foreground mb-3">
              Sample
              <br />
              Week Menu
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Here's a sample week based on April 2026 mess data.{" "}
              <strong className="text-foreground">Menus rotate monthly</strong>{" "}
              — this is just to give you an idea of what a typical week looks
              like.
            </p>
          </Reveal>
          <div
            className="space-y-0 border-t border-border"
            data-ocid="food.weekly_menu_list"
          >
            {weeklyMessMenu.map((day, i) => (
              <Reveal key={day.day} delay={i * 50}>
                <div
                  className="border-b border-border"
                  data-ocid={`food.menu_day.${i + 1}`}
                >
                  {/* Day header */}
                  <div
                    className="flex items-center gap-4 px-6 py-4"
                    style={{
                      background: "oklch(0.10 0.008 60)",
                      borderBottom: "1px solid oklch(var(--border))",
                    }}
                  >
                    <span className="font-display font-black text-2xl text-foreground w-32 shrink-0">
                      {day.day}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "oklch(var(--primary) / 0.2)" }}
                    />
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
                      <div
                        key={meal.label}
                        className="px-5 py-5 min-w-0 bg-background"
                      >
                        <p className="font-display font-bold text-xs uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
                          <span aria-hidden="true">{meal.icon}</span>
                          {meal.label}
                        </p>
                        <p className="font-body text-xs text-foreground leading-relaxed">
                          {meal.data.veg}
                        </p>
                        {meal.data.nonVeg && (
                          <p className="font-body text-xs text-muted-foreground leading-relaxed mt-2 flex items-start gap-2">
                            <span
                              className="shrink-0 text-[9px] font-mono font-bold border px-1 mt-0.5"
                              style={{
                                borderColor: "oklch(var(--primary) / 0.4)",
                                color: "oklch(var(--primary))",
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
            <p className="font-body text-xs text-muted-foreground mt-6">
              NV = Non-Veg option. Veg options are available at every meal.
              Special Mess (paid upgrade) has a separate menu not shown here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Food Quality ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="food.quality_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">My honest take</p>
            <h2 className="text-section text-foreground mb-3">
              What to Actually
              <br />
              Expect
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              I'm not going to sugarcoat this. Here's what I've seen and
              experienced firsthand.
            </p>
          </Reveal>
          <div className="border-t border-border" data-ocid="food.reality_card">
            {foodRealityPoints.map((point, i) => (
              <Reveal key={point} delay={i * 50}>
                <div className="flex gap-8 py-6 border-b border-border">
                  <span
                    className="font-display font-black text-4xl leading-none shrink-0 w-10 text-right"
                    style={{ color: "oklch(var(--primary) / 0.3)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed pt-2">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div
              className="mt-8 border-l-4 pl-6 py-2"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-muted-foreground leading-relaxed">
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
        className="bg-background px-6 py-20 border-t border-border"
        data-ocid="food.campus_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">Your other options</p>
            <h2 className="text-section text-foreground mb-3">
              Where Else
              <br />
              to Eat on Campus
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Beyond your hostel mess, here's where you can eat. I've spent time
              at all of these.
            </p>
          </Reveal>
          <div
            className="grid sm:grid-cols-2 gap-px bg-border"
            data-ocid="food.campus_options_list"
          >
            {campusFood.map((item, i) => (
              <Reveal key={item.name} delay={i * 60} className="bg-background">
                <div
                  className="p-8 h-full"
                  data-ocid={`food.campus_option.${i + 1}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">
                        {item.name}
                      </h3>
                      <span
                        className="text-xs font-mono border px-2 py-0.5"
                        style={{
                          borderColor: "oklch(var(--secondary) / 0.3)",
                          color: "oklch(var(--secondary))",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-8 h-px mb-4"
                    style={{ background: "oklch(var(--primary) / 0.4)" }}
                  />
                  <p className="font-body text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div
              className="mt-8 border-l-2 pl-4 py-1"
              style={{ borderColor: "oklch(var(--primary))" }}
            >
              <p className="font-body text-sm text-muted-foreground">
                <strong className="text-foreground">
                  Heads up — timing matters.
                </strong>{" "}
                Campus food capacity doesn't match the student population. If
                you go to Food Street during peak lunch or dinner hours, expect
                a wait. Go slightly before or after peak hours — it makes a huge
                difference.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Delivery ── */}
      <section
        className="px-6 py-20 border-t border-border"
        style={{ background: "oklch(0.10 0.008 60)" }}
        data-ocid="food.delivery_section"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-label mb-4">When you're done with the mess</p>
            <h2 className="text-section text-foreground mb-3">
              Ordering
              <br />
              From Outside
            </h2>
            <p className="font-body text-muted-foreground mb-12 max-w-xl">
              Most students order outside food regularly — it's practically a
              part of hostel life.
            </p>
          </Reveal>
          <div
            className="space-y-0 border-t border-border"
            data-ocid="food.delivery_list"
          >
            {deliveryPoints.map((entry, i) => (
              <Reveal key={entry.app} delay={i * 60}>
                <div
                  className="flex flex-col sm:flex-row gap-6 items-start sm:items-center py-8 border-b border-border"
                  data-ocid={`food.delivery_option.${i + 1}`}
                >
                  <div className="sm:w-48 shrink-0 flex items-center gap-4">
                    <span className="text-2xl" aria-hidden="true">
                      {entry.icon}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {entry.app}
                      </h3>
                      <span
                        className="text-xs font-mono font-bold"
                        style={{
                          color: entry.positive
                            ? "oklch(var(--secondary))"
                            : "oklch(var(--primary))",
                        }}
                      >
                        {entry.status}
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-px h-8 shrink-0 hidden sm:block"
                    style={{ background: "oklch(var(--border))" }}
                  />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {entry.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div
              className="mt-8 border-l-4 pl-6 py-2"
              style={{ borderColor: "oklch(var(--secondary))" }}
            >
              <p className="font-body text-muted-foreground leading-relaxed">
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
