import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";
import {
  campusFood,
  deliveryPoints,
  foodRealityPoints,
  messTimings,
  weeklyMessMenu,
} from "./FoodData";

function SummaryBox({ text }: { text: string }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
      <p className="text-label mb-1">My Take</p>
      <p className="text-sm text-foreground">{text}</p>
    </div>
  );
}

export default function Food() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="food.page_label">
            Food
          </p>
          <h2 className="text-hero text-foreground mb-4">Food at VIT-AP</h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            Let me be honest with you — food is one of those things that will
            affect your day-to-day more than you expect. Here's everything I
            wish someone had told me before I arrived.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🕐 Mess Timings
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🍽️ Campus Options
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🛵 Delivery
            </Badge>
          </div>
        </div>
      </section>

      {/* Mess Timings */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="food.mess_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Every Single Day</p>
          <h2 className="text-section mb-2">Mess Timings</h2>
          <p className="text-sm text-muted-foreground mb-6">
            These timings are fixed and strictly followed. Miss a meal window
            and you're waiting for the next one — there's no flexibility here.
            Trust me, you'll learn this the hard way once before it sticks.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {messTimings.map((entry) => (
              <Card
                key={entry.meal}
                className="card-elevated text-center"
                data-ocid={`food.mess_timing.${entry.meal.toLowerCase()}`}
              >
                <CardContent className="p-4">
                  <div className="text-3xl mb-2" aria-hidden="true">
                    {entry.icon}
                  </div>
                  <p className="font-semibold text-foreground text-sm font-display mb-1">
                    {entry.meal}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {entry.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <p className="text-xs font-semibold text-foreground mb-2">
              📋 How the Menu Works
            </p>
            <ul className="space-y-1.5">
              {[
                "Menus rotate monthly — put together by the student mess committee",
                "Both veg and non-veg options are available at every meal",
                "There's a Special Mess option (extra cost) with an upgraded menu — some students find it worth it",
                "In my experience, breakfast tends to be the most consistent meal across hostels",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-xs text-foreground"
                >
                  <span className="text-accent mt-0.5 shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Week Menu */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="food.weekly_menu_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">
            So You Know What You're Getting Into
          </p>
          <h2 className="text-section mb-2">Sample Week Menu</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Here's a sample week based on April 2026 mess data.{" "}
            <span className="font-medium text-foreground">
              Menus rotate monthly
            </span>{" "}
            — this is just to give you an idea of what a typical week looks
            like.
          </p>
          <div className="space-y-3" data-ocid="food.weekly_menu_list">
            {weeklyMessMenu.map((day, i) => (
              <Card
                key={day.day}
                className="card-elevated"
                data-ocid={`food.menu_day.${i + 1}`}
              >
                <CardContent className="p-0">
                  {/* Day header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30 rounded-t-lg">
                    <span className="font-display font-semibold text-sm text-foreground w-24 shrink-0">
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
                      <div key={meal.label} className="px-3 py-3 min-w-0">
                        <p className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                          <span aria-hidden="true">{meal.icon}</span>
                          {meal.label}
                        </p>
                        <p className="text-xs text-foreground leading-relaxed">
                          {meal.data.veg}
                        </p>
                        {meal.data.nonVeg && (
                          <p className="text-xs text-muted-foreground leading-relaxed mt-1 flex items-center gap-1">
                            <Badge
                              variant="outline"
                              className="text-[10px] px-1 py-0 h-4 shrink-0"
                            >
                              NV
                            </Badge>
                            {meal.data.nonVeg}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            NV = Non-Veg option. Veg options are available at every meal.
            Special Mess (paid upgrade) has a separate menu not shown here.
          </p>
        </div>
      </section>

      {/* Food Quality */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="food.quality_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">My Honest Take</p>
          <h2 className="text-section mb-2">What to Actually Expect</h2>
          <p className="text-sm text-muted-foreground mb-6">
            I'm not going to sugarcoat this. Here's what I've seen and
            experienced firsthand.
          </p>
          <div
            className="bg-card border border-border rounded-xl p-5 shadow-sm"
            data-ocid="food.reality_card"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0" aria-hidden="true">
                💬
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm font-display mb-3">
                  From someone who's been there
                </p>
                <ul className="space-y-2">
                  {foodRealityPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <SummaryBox text="Food is average overall. You'll survive on mess food, but you won't love it. If your hostel's mess turns out to be one of the better ones — honestly, consider yourself lucky. Either way, budget for outside food. You'll need it." />
        </div>
      </section>

      {/* Campus Dining */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="food.campus_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Your Other Options</p>
          <h2 className="text-section mb-2">Where Else to Eat on Campus</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Beyond your hostel mess, here's where you can eat. I've spent time
            at all of these — here's what you need to know.
          </p>
          <div
            className="grid sm:grid-cols-2 gap-4"
            data-ocid="food.campus_options_list"
          >
            {campusFood.map((item, i) => (
              <div
                key={item.name}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`food.campus_option.${i + 1}`}
              >
                <span className="text-3xl shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-foreground text-sm font-display">
                      {item.name}
                    </p>
                    <Badge variant={item.badge} className="text-xs">
                      {item.tag}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-foreground mb-1">
              ⚠️ Heads Up — Timing Matters
            </p>
            <p className="text-xs text-muted-foreground">
              Campus food capacity doesn't really match the size of the student
              population. If you go to Food Street during peak lunch or dinner
              hours, expect a wait. I've personally missed meals because I went
              at the wrong time. Go slightly before or after peak hours — it
              makes a huge difference.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="food.delivery_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">When You're Done with the Mess</p>
          <h2 className="text-section mb-6">Ordering Food From Outside</h2>
          <div className="flex flex-col gap-4" data-ocid="food.delivery_list">
            {deliveryPoints.map((entry, i) => (
              <div
                key={entry.app}
                className={[
                  "rounded-xl border p-4 flex items-start gap-4",
                  entry.positive
                    ? "bg-card border-border shadow-sm"
                    : "bg-destructive/5 border-destructive/25",
                ].join(" ")}
                data-ocid={`food.delivery_option.${i + 1}`}
              >
                <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                  {entry.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-foreground text-sm font-display">
                      {entry.app}
                    </p>
                    <Badge
                      variant={entry.positive ? "secondary" : "destructive"}
                      className="text-xs"
                    >
                      {entry.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{entry.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-muted/60 border border-border rounded-xl p-4">
            <p className="text-xs font-semibold text-foreground mb-1">
              💡 Worth Knowing
            </p>
            <p className="text-xs text-muted-foreground">
              Order in groups whenever you can — it splits the delivery cost and
              is just more fun. Delivery takes longer here than in a city, so if
              you're ordering for dinner, don't wait until you're already
              starving. Plan ahead by 30–40 minutes.
            </p>
          </div>
          <SummaryBox text="Swiggy is your go-to for outside food. Zomato simply doesn't work here — I've tried. For local delivery options, ask seniors after you arrive, as those contacts keep changing. Most students I know order outside food regularly — it's practically a part of hostel life." />
        </div>
      </section>
    </Layout>
  );
}
