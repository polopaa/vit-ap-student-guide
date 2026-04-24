// ── Campus food ────────────────────────────────────────────────────────────
export const campusFood = [
  {
    icon: "🍽️",
    name: "Hostel Mess",
    tag: "All Hostels",
    desc: "Every hostel has its own mess. In my experience, the quality varies quite a bit depending on which hostel you're assigned — some messes are genuinely decent, others not so much. You won't know until you get there.",
    badge: "secondary" as const,
  },
  {
    icon: "🏪",
    name: "Petty Shops",
    tag: "All Hostels",
    desc: "Every hostel block has a petty shop. Good for grabbing snacks, maggi, biscuits, or toiletries without leaving campus. You'll use these more than you expect.",
    badge: "secondary" as const,
  },
  {
    icon: "🍽️",
    name: "Food Street",
    tag: "Outdoor Food Court",
    desc: "Your best bet for variety outside the mess. But go during off-peak hours — if you show up at peak lunch or dinner time, you'll be waiting 15–20 minutes just to get a plate, and finding a seat is another challenge.",
    badge: "secondary" as const,
  },
  {
    icon: "🏬",
    name: "Rock Plaza",
    tag: "Indoor · Near AB-2",
    desc: "Smaller indoor food area near AB-2. Fewer options, but honestly less crowded than Food Street. Good when you want a quick meal without the chaos.",
    badge: "outline" as const,
  },
];

export const messTimings = [
  { meal: "Breakfast", time: "7:15 AM – 9:00 AM", icon: "🌅" },
  { meal: "Lunch", time: "12:30 PM – 2:15 PM", icon: "☀️" },
  { meal: "Snacks", time: "4:45 PM – 6:15 PM", icon: "🍵" },
  { meal: "Dinner", time: "7:30 PM – 9:00 PM", icon: "🌙" },
];

export const foodRealityPoints = [
  "Honestly, the mess food is average at best. It's not terrible — you'll survive — but by the second month, you'll be placing Swiggy orders regularly.",
  "The variety gets old fast. Within a month, I was ordering outside at least 3–4 times a week, just to eat something different.",
  "Which hostel you're assigned to actually matters here. Some messes are noticeably better than others — it's luck of the draw.",
  "Food Street gets absolutely packed at lunch and dinner. If you go at peak hours, budget 20+ minutes just to sit down and eat.",
  "Rock Plaza near AB-2 is a good alternative when Food Street is a zoo — smaller, but usually quicker.",
  "Most students I know supplement the mess with outside food. It's not just a habit — at some point, it becomes a necessity for your sanity.",
];

export const deliveryPoints = [
  {
    icon: "✅",
    app: "Swiggy",
    status: "Works",
    note: "Swiggy works fine here. Deliveries come to the hostel gate. It takes a bit longer than in a city — the campus location adds time — but it works consistently.",
    positive: true,
  },
  {
    icon: "❌",
    app: "Zomato",
    status: "Does NOT Work",
    note: "Zomato doesn't cover this area. I don't know why, it just doesn't. Don't waste time trying — just use Swiggy.",
    positive: false,
  },
  {
    icon: "🛵",
    app: "Local Freelance Delivery",
    status: "Available",
    note: "There are local freelance delivery guys who cover certain areas around campus. Ask seniors once you arrive — the contacts change every semester, so I can't give you a fixed number here.",
    positive: true,
  },
];

// ── Weekly mess menu (sample) ──────────────────────────────────────────────
export interface MealOption {
  veg: string;
  nonVeg?: string;
}

export interface DayMenu {
  day: string;
  breakfast: MealOption;
  lunch: MealOption;
  snacks: MealOption;
  dinner: MealOption;
}

export const weeklyMessMenu: DayMenu[] = [
  {
    day: "Monday",
    breakfast: { veg: "Idli + Sambar", nonVeg: "Boiled Egg" },
    lunch: { veg: "Rice + Dal + Rajma", nonVeg: "Chicken Curry" },
    snacks: { veg: "Bread Pakoda + Tea" },
    dinner: { veg: "Chapati + Paneer Butter Masala", nonVeg: "Egg Bhurji" },
  },
  {
    day: "Tuesday",
    breakfast: { veg: "Poha + Chai", nonVeg: "Omelette" },
    lunch: { veg: "Rice + Dal + Mix Veg", nonVeg: "Fish Curry" },
    snacks: { veg: "Samosa + Tea" },
    dinner: { veg: "Chapati + Dal Makhani", nonVeg: "Mutton Curry" },
  },
  {
    day: "Wednesday",
    breakfast: { veg: "Upma + Coconut Chutney", nonVeg: "Boiled Egg" },
    lunch: { veg: "Rice + Dal + Aloo Gobi", nonVeg: "Prawn Masala" },
    snacks: { veg: "Biscuits + Chai" },
    dinner: { veg: "Chapati + Chana Masala", nonVeg: "Chicken Curry" },
  },
  {
    day: "Thursday",
    breakfast: { veg: "Dosa + Sambar", nonVeg: "Omelette" },
    lunch: { veg: "Rice + Dal + Bhindi Fry", nonVeg: "Egg Curry" },
    snacks: { veg: "Vada + Tea" },
    dinner: {
      veg: "Fried Rice + Veg Manchurian",
      nonVeg: "Chicken Manchurian",
    },
  },
  {
    day: "Friday",
    breakfast: { veg: "Puri + Bhaji", nonVeg: "Boiled Egg" },
    lunch: { veg: "Rice + Sambar + Kootu", nonVeg: "Fish Fry" },
    snacks: { veg: "Bread Butter + Chai" },
    dinner: { veg: "Chapati + Paneer Curry", nonVeg: "Mutton Curry" },
  },
  {
    day: "Saturday",
    breakfast: { veg: "Idli + Veg Stew", nonVeg: "Egg Bhurji" },
    lunch: { veg: "Pulao + Raita + Dal", nonVeg: "Chicken Biryani" },
    snacks: { veg: "Pakoda + Tea" },
    dinner: { veg: "Chapati + Dal Tadka", nonVeg: "Egg Curry" },
  },
  {
    day: "Sunday",
    breakfast: { veg: "Aloo Paratha + Curd", nonVeg: "Boiled Egg" },
    lunch: { veg: "Curd Rice + Pickle + Papad", nonVeg: "Chicken Curry" },
    snacks: { veg: "Halwa + Chai" },
    dinner: { veg: "Chapati + Mixed Veg Curry", nonVeg: "Mutton Curry" },
  },
];

// ── Documents ──────────────────────────────────────────────────────────────
export const originalDocuments = [
  "10th Marksheet & Certificate",
  "12th Marksheet & Certificate",
  "Transfer Certificate (TC)",
  "Character Certificate",
  "Medical Fitness Certificate",
  "Passport-size photos (20+ copies)",
  "Allotment Letter",
  "Fee Receipt",
  "Aadhaar Card",
  "PAN Card (or parent's PAN)",
  "Caste Certificate (if applicable)",
  "Income Certificate (if applicable)",
];

export const nriDocuments = [
  "Passport",
  "Visa",
  "Overseas Address Proof",
  "SOP / Recommendation Letters",
];

// ── Packing checklist ──────────────────────────────────────────────────────
export const packingGroups = [
  {
    icon: "👚",
    title: "Clothing — Girls",
    items: [
      "7–10 sets of casual wear",
      "2–3 formal outfits",
      "Innerwear (at least 10 sets)",
      "Comfortable footwear — 2–3 pairs",
      "Sandals / slippers for hostel",
      "Ethnic wear for fests",
    ],
  },
  {
    icon: "👔",
    title: "Clothing — Boys",
    items: [
      "7–10 casual T-shirts / shirts",
      "2–3 formal outfits",
      "5–7 trousers / jeans",
      "Innerwear (10+ sets)",
      "Comfortable footwear — 2–3 pairs",
      "Slippers for hostel use",
    ],
  },
  {
    icon: "🧴",
    title: "Personal Care",
    items: [
      "Toothbrush + toothpaste",
      "Shampoo, soap, face wash",
      "Towels (2–3)",
      "Comb, nail cutter, razor / shaving kit",
      "Moisturizer, sunscreen",
      "Feminine hygiene products (girls)",
    ],
  },
  {
    icon: "🛏️",
    title: "Room Essentials",
    items: [
      "Bedsheets (2)",
      "Pillow + pillow cover (2)",
      "Blanket / quilt",
      "Notebooks, pens, highlighters",
      "Small dustbin",
      "Hangers (10+)",
      "Extension board — 2-point, ISI marked",
      "Water bottle + tumbler",
    ],
  },
  {
    icon: "💊",
    title: "Health & Safety",
    items: [
      "Any prescribed medicines",
      "Bandaids + antiseptic cream",
      "Paracetamol + antacid",
      "ORS packets (dehydration)",
      "Mosquito repellent",
      "Hand sanitizer",
    ],
  },
  {
    icon: "💡",
    title: "Optional Medicines",
    items: [
      "Dolo 650 (fever)",
      "Digene (acidity)",
      "Cetirizine / Allegra (allergy)",
      "Meftal-Spas — girls (period cramps)",
      "Crocin (mild pain / fever)",
      "⚠️ Suggestions only — consult a doctor before packing",
    ],
  },
];

// ── Move-in notes ──────────────────────────────────────────────────────────
export const moveInNotes = [
  {
    icon: "🛏️",
    title: "Mattresses aren't provided — but don't panic",
    note: "Your room will not have a mattress. You'll need to buy one. But here's the thing — during move-in week, stalls are set up right on campus where you can buy mattresses, buckets, and other room basics at reasonable prices. I'd suggest just buying it there instead of hauling one from home.",
    highlight: true,
  },
  {
    icon: "🪣",
    title: "Buckets and basic room items",
    note: "Same as mattresses — buckets, mugs, and basic storage items are available through the move-in stalls on campus. Really convenient if you're travelling from far away and don't want to carry everything.",
    highlight: false,
  },
  {
    icon: "⚡",
    title: "Electric kettles — technically not allowed",
    note: "Officially, electric kettles aren't permitted in hostel rooms. But honestly, checking during move-in is usually pretty relaxed — most people bring them in without any issue. This is your call; just know the official rule exists.",
    highlight: false,
  },
  {
    icon: "🔌",
    title: "Extension boards — make sure it's ISI marked",
    note: "You'll definitely need at least one extension board. Please get one that's ISI marked — ideally a 6-socket, surge-protected strip. Non-ISI boards can trip the hostel circuit and cause problems for everyone on your floor.",
    highlight: false,
  },
];

// ── Tech specs ─────────────────────────────────────────────────────────────
export const laptopSpecs = [
  { label: "Processor", value: "Intel i5 13th Gen or AMD Ryzen 7" },
  { label: "RAM", value: "16 GB (minimum)" },
  { label: "Storage", value: "512 GB SSD (minimum)" },
  { label: "Camera / Mic", value: "Built-in webcam + microphone" },
];

export const laptopExtras = [
  "Portable hard drive (1 TB)",
  "Wired earphones / headphones",
  "USB hub (multi-port)",
  "Laptop cooling pad",
];

export const calculators = [
  { model: "Casio fx-991 EX", note: "Fast navigation, highly recommended" },
  { model: "Casio fx-991 CW", note: "Latest model, more operations" },
  {
    model: "Casio fx-991 ES Plus",
    note: "Cheaper, slightly slower — budget pick",
  },
];
