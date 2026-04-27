import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";

interface FaqItem {
  q: string;
  a: string;
  bullets?: string[];
}
interface FaqCategory {
  id: string;
  icon: string;
  label: string;
  items: FaqItem[];
}

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

function Fade({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const faqData: FaqCategory[] = [
  {
    id: "should-i-join",
    icon: "🤔",
    label: "Should I Join?",
    items: [
      {
        q: "Should I join VIT-AP?",
        a: "Honestly, this depends a lot on what you're looking for. When I was deciding, I didn't have anyone to give me a straight answer — so here's mine: if you want a campus experience with decent infrastructure, a diverse student crowd, and enough opportunities to grow if you put in the effort, VIT-AP is a reasonable choice. It's not perfect — the campus is still developing, management can be inefficient, and it's not a tier-1 IIT experience. But if you're self-driven and willing to make the most of what's here, it works. If you're waiting for everything to be handed to you, you might be disappointed.",
      },
      {
        q: "Is VIT-AP worth it compared to other colleges?",
        a: "Compared to most mid-tier colleges, yes — in my experience, VIT-AP gives you a better shot at building skills, meeting motivated peers, and accessing opportunities like hackathons and study-abroad programs. The brand name carries some weight in South India and increasingly outside it. That said, I'd be honest: it's not a replacement for a strong NIT or IIT. The real value here comes from what you do with your time — clubs, projects, internships. The college gives you the environment; you build the rest.",
      },
      {
        q: "What kind of student does well at VIT-AP?",
        a: "In my observation, students who thrive here are the ones who are proactive and don't wait for the system to push them. Specifically:",
        bullets: [
          "Students who explore clubs, coding groups, and hackathons early on",
          "People who build their own network — there are a lot of genuinely smart peers here if you look",
          "Those who manage their time well — FFCS gives you freedom, but it also means no one's hand-holding you",
          "Students who are okay with a developing campus and average food — if small comforts matter a lot to you, it might be a rough start",
        ],
      },
      {
        q: "Is the campus safe?",
        a: "In my three years here, I haven't seen physical bullying or anything seriously dangerous on campus. Conflicts and minor fights happen occasionally — that's normal wherever you put thousands of students together. The campus is gated and has security at entry points. For girls especially, the curfew and stricter hostel rules (as frustrating as they can be) do add a layer of structure. Overall, I'd say it's a reasonably safe environment — just use common sense like anywhere else.",
      },
      {
        q: "Is VIT-AP good for placements and career growth?",
        a: "Decent — but don't expect the college to do the heavy lifting. Companies do come for campus placements, and the numbers aren't bad if you keep your CGPA above 7.5 and build relevant skills. The bigger wins I've seen are from students who used the campus ecosystem — clubs, coding competitions, hackathons, and internship drives — to build a real profile. If you're in tech, being around motivated peers and having access to events like Google Summer of Code participants, coding clubs, and IEEE chapters genuinely helps.",
      },
      {
        q: "What are the biggest downsides I should know before joining?",
        a: "I'd rather tell you upfront than let you find out after you've paid the fees:",
        bullets: [
          "Most classrooms don't have AC — summers here are genuinely hot, and it can be uncomfortable",
          "The campus is still under construction — it often feels like a building site",
          "University management is not very efficient; processes can be slow and frustrating",
          "Fines are common for rule violations — both in hostels and on campus generally",
          "Professors have a lot of control over your internals with limited ways to contest decisions",
          "If you get a backlog, retaking the subject costs around ₹6,000 — so don't sleep on your courses",
          "Food quality is average — mess is okay but many students rely on Swiggy or outside food",
        ],
      },
    ],
  },
  {
    id: "hostel-life",
    icon: "🛏️",
    label: "Hostel & Daily Life",
    items: [
      {
        q: "What is hostel life actually like?",
        a: "It's functional — not luxurious, but not terrible either. You get a room, a bed, a mess attached to your block, and access to basic facilities. The rooms range from 2-person to larger shared rooms, and some blocks have AC options (at a higher fee). In my experience, you get used to it pretty quickly. The social aspect is actually the best part — you're around people all the time, which is great if you're sociable and manageable if you're not. The biggest frustrations are the food, the fines, and for girls, the strict hostel authorities.",
      },
      {
        q: "How strict are the rules in the hostel?",
        a: "It depends heavily on whether you're in a male or ladies' hostel. Male hostels are generally more relaxed — wardens don't crack down on everything, and the vibe is relatively chill as long as you don't create obvious problems. Ladies' hostel authorities are noticeably stricter — curfew is enforced firmly, room checks happen, and rules around visitors and timings are taken seriously. Both have curfew at 8:30 PM, after which you're expected to be back on campus.",
      },
      {
        q: "Are there a lot of fines? What are they for?",
        a: "Yes, fines are very much a real thing here — I'd say they're one of the things freshers are most surprised by. Common reasons include:",
        bullets: [
          "Missing curfew or returning late to the hostel",
          "Room cleanliness violations during checks",
          "Possession of banned items (though enforcement is inconsistent)",
          "Noise complaints or disturbances in the block",
          "Attendance shortfalls in some cases",
          "My advice: know the rules early, not after you've been fined",
        ],
      },
      {
        q: "How is the food on campus?",
        a: "Honest answer: average. The mess covers breakfast, lunch, evening snacks, and dinner — both veg and non-veg every day. The food isn't bad enough to be a daily crisis, but it's not something most students rave about. Quality varies across different hostel mess facilities, and the variety gets repetitive over time. A lot of students supplement with food from Food Street, Rock Plaza, or Swiggy deliveries. Night canteens (open 10:30 PM to midnight) are a lifesaver when you're up late and hungry.",
      },
      {
        q: "What do students do when the mess food isn't great?",
        a: "Plenty of options, actually:",
        bullets: [
          "Swiggy works for deliveries on campus — this is the main go-to",
          "Zomato does not deliver to campus, so don't count on it",
          "Local freelance delivery services operate in the area for some popular restaurants",
          "Food Street and Rock Plaza on campus have more variety during meal hours",
          "Petty shops on campus stock snacks and basic items, though they close in the evenings",
          "Night canteens run from 10:30 PM to midnight for late-night cravings",
        ],
      },
      {
        q: "What time is curfew, and how strictly is it enforced?",
        a: "Curfew is at 8:30 PM — after that, you're expected to be back inside your hostel. In my experience, this is enforced. It's one of those rules that feels strict at first, especially if you're used to freedom at home, but you adapt. The ladies' hostel wardens are notably stricter about this than the male hostel side. If you're regularly outside after curfew without prior permission, expect a fine or a call to your parents.",
      },
    ],
  },
  {
    id: "academics",
    icon: "📚",
    label: "Academics & College Life",
    items: [
      {
        q: "How hard is the academics at VIT-AP?",
        a: "Manageable, but it requires consistent effort. It's not the kind of pressure you'd feel at an IIT, but it's also not easy coasting. In my experience, the biggest academic challenge here isn't the difficulty of the content — it's the structure. You have multiple assessment components (quizzes, assignments, CAT exams, a final), and missing even one quiz can hurt your grade. If you stay on top of things week by week, it's very manageable. If you fall behind, catching up is hard.",
      },
      {
        q: "What is FFCS, and when does it apply to me?",
        a: "FFCS — Fully Flexible Credit System — is one of the genuinely good things about this college. It means you build your own timetable: you choose your courses, time slots, and even which faculty member you want to learn from. The catch is you don't get it right away. In your first semester, your slots are assigned by the management. From the second semester onwards, you register through VTOP during the registration window. Use it wisely — you'll hear plenty of stories about students who picked bad time slots or avoided a subject and regretted it.",
      },
      {
        q: "What are CAT-1, CAT-2, and FAT?",
        a: "These are the three main exam components you'll deal with each semester:",
        bullets: [
          "CAT-1: Mid-semester exam held roughly 5–6 weeks in — tests the first part of the syllabus",
          "CAT-2: Second mid-semester exam — covers the next chunk of the syllabus",
          "FAT (Final Assessment Test): The end-semester exam — covers the full syllabus and carries significant weight",
          "Alongside these, you'll have digital assignments and quizzes that contribute to your internal marks",
          "The combination of all these adds up to your final grade — there's no single high-stakes exam that determines everything",
        ],
      },
      {
        q: "How is attendance handled?",
        a: "75% per course is the minimum — fall below that and you get debarred from the next exam, which means an automatic F or N grade. In practice, aim for 85%+. That 25% buffer sounds comfortable until you account for sick days, travel, events, and just bad weeks. There's no separate medical leave quota — it all comes from the same buffer. I've seen students lose attendance tracking during semester breaks and get a nasty surprise when they check VTOP.",
      },
      {
        q: "Are professors strict?",
        a: "It varies — there's no single answer. Some professors are excellent and genuinely engaging; others are disorganized or hard to follow. What I'd flag is that professors here have significant control over your internals — quiz marks, assignment grades, CAT evaluations, and sometimes the general vibe of the class. Only FAT marks can be formally re-evaluated by another faculty member. For everything else, there's limited scope to raise concerns if something feels unfair.",
      },
      {
        q: "What happens if I fail a subject or get a backlog?",
        a: "Getting a backlog means you have to re-register and retake the full course — it costs around ₹6,000 per subject. Unlike some colleges where just turning up might get you through, professors here can and do fail students who aren't performing. The subject will show on your transcript, and it affects your CGPA. My advice: take every course seriously from day one, especially in first year when most students are still adjusting.",
      },
    ],
  },
  {
    id: "campus-facilities",
    icon: "🏫",
    label: "Campus & Facilities",
    items: [
      {
        q: "What facilities does VIT-AP actually have?",
        a: "More than you'd expect for a relatively young campus, but not everything works perfectly. Here's what's actually available:",
        bullets: [
          "Multiple hostel blocks (6 male, 3 ladies), with more under construction",
          "Paid gym — there are two timings (5–8 AM and 5–8 PM), but it gets crowded fast and slots fill up",
          "Indoor activity room with TT, carrom, and chess — it's small but it exists",
          "Badminton court — access is competitive, you need to be early",
          "Health center on campus with a small pharmacy for basic medical needs",
          "Food Street, Rock Plaza, petty shops, and night canteens for food outside the mess",
          "Campus-wide Wi-Fi + LAN ports in hostel rooms",
        ],
      },
      {
        q: "Is the campus Wi-Fi reliable?",
        a: "It's okay — not great, not terrible. Wi-Fi covers most of the campus, and hostel rooms also have wired LAN ports which are noticeably more stable. In my experience, Wi-Fi during peak hours (evenings especially) can slow down significantly when everyone's online. If you're doing anything bandwidth-heavy like video calls or large downloads, a LAN cable is worth having.",
      },
      {
        q: "Are clubs and activities worth joining?",
        a: "Yes — and I genuinely mean that, not as a PR line. VIT-AP has a solid number of clubs across technical, cultural, sports, and social categories. Multiple clubs actively organize events and hackathons throughout the year. In my experience, the students who got the most out of this place were the ones who joined a club or two early on. It's how you meet interesting people, build skills outside the classroom, and have something concrete to put on your resume.",
      },
      {
        q: "How are hackathons and events here?",
        a: "Hackathons and events happen regularly on campus — though I'd say they're more frequent than they are large-scale. Campus-level competitions and club events run throughout the year, and they're a great starting point. Bigger programs like Google Summer of Code, Recon, and other national/international hackathons are things students participate in individually or in small teams — the campus doesn't run those, but there are communities here that prep and participate together.",
      },
      {
        q: "Can I study abroad from VIT-AP?",
        a: "Yes — this is actually something VIT-AP has put real effort into. Two main programs to know about:",
        bullets: [
          "ITP (International Transfer Program): Lets you transfer to a partner university abroad for part of your degree",
          "SAP (Semester Abroad Program): You spend a semester at an international partner university while credits transfer back",
          "The International Relations office handles applications and coordination",
          "It's genuinely competitive — not everyone gets in — but if international exposure matters to you, it's worth exploring early",
          "Having a good CGPA and being proactive about applications gives you a better shot",
        ],
      },
    ],
  },
];

export default function Faqs() {
  const [activeCategory, setActiveCategory] = useState("should-i-join");
  const totalQuestions = faqData.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );

  return (
    <Layout>
      {/* Page Header */}
      <section
        className="bg-background border-b border-border px-6 pt-12 pb-10"
        data-ocid="faqs.page_header"
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="chapter-label mb-3 fade-in-up"
            data-ocid="faqs.section_label"
          >
            Real questions, honest answers
          </p>
          <h1 className="text-hero text-foreground mb-4 fade-in-up fade-in-up-delay-1">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-2">
            {totalQuestions} honest answers to what you're probably wondering
            right now — whether this place is worth it, what daily life is
            actually like, and what no one puts in the brochure.
          </p>
        </div>
      </section>

      {/* Category pill tabs */}
      <section
        className="bg-muted/30 px-6 py-4 border-b border-border sticky top-14 z-10 backdrop-blur-sm"
        data-ocid="faqs.category_nav"
      >
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          {faqData.map((cat) => (
            <a
              key={cat.id}
              href={`#faq-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={[
                "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-smooth",
                activeCategory === cat.id
                  ? "pill-tab-active"
                  : "pill-tab-inactive",
              ].join(" ")}
              data-ocid={`faqs.category_link.${cat.id}`}
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ sections */}
      <div className="max-w-4xl mx-auto px-6">
        {faqData.map((cat, catIdx) => (
          <section
            key={cat.id}
            id={`faq-${cat.id}`}
            className={`py-14 ${catIdx < faqData.length - 1 ? "border-b border-border" : ""}`}
            data-ocid={`faqs.${cat.id}_section`}
          >
            <Fade>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl" aria-hidden="true">
                  {cat.icon}
                </span>
                <p className="text-label">{cat.label}</p>
                <span className="ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full border text-muted-foreground border-border">
                  {cat.items.length} questions
                </span>
              </div>
              <h2 className="text-section text-foreground mb-2">{cat.label}</h2>
              <div className="gold-underline w-10 mb-8" />
            </Fade>

            <Accordion type="multiple" className="space-y-0">
              {cat.items.map((item, i) => (
                <Fade key={item.q} delay={i * 50}>
                  <AccordionItem
                    value={`${cat.id}-${i}`}
                    className="border-b border-border/60 last:border-b-0"
                    data-ocid={`faqs.${cat.id}.item.${i + 1}`}
                  >
                    <AccordionTrigger
                      className="text-base md:text-lg font-display font-semibold py-5 text-left hover:text-primary transition-smooth"
                      data-ocid={`faqs.${cat.id}.trigger.${i + 1}`}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-6 pl-1">
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {item.a}
                        </p>
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 mt-3 pl-1">
                            {item.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                <span
                                  className="shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                                  style={{
                                    background: "oklch(var(--primary) / 0.1)",
                                    color: "oklch(var(--primary))",
                                  }}
                                >
                                  →
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Fade>
              ))}
            </Accordion>
          </section>
        ))}

        {/* Summary */}
        <section
          className="py-12 border-t border-border"
          data-ocid="faqs.summary_section"
        >
          <Fade>
            <div className="bg-muted/30 rounded-2xl p-6 border border-border">
              <p className="text-label mb-2">One last thing</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Everything here is based on real student experience — mine and
                others I've talked to. Things change, rules get updated, and
                your experience will be your own. If something here doesn't
                match what you're hearing from the college officially, go with
                the official source. But for the day-to-day reality of what it's
                like here? This is as honest as it gets.
              </p>
            </div>
          </Fade>
        </section>
      </div>
    </Layout>
  );
}
