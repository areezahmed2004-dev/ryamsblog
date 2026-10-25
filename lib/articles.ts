export const categories = [
  "Experience",
  "Injury & Recovery",
  "Athlete Health",
  "Protection & Preparation",
  "Lessons Learned",
] as const;

export type Category = (typeof categories)[number];

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; kicker: string; text: string }
  | { type: "sources"; intro?: string; items: { label: string; href: string; note: string }[] };

export type Article = {
  slug: string;
  category: Category;
  title: string;
  description: string;
  author: "Ryam Ahmed";
  date: string;
  dateISO: string;
  readTime: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  blocks: ArticleBlock[];
};

const personalSources: ArticleBlock = {
  type: "sources",
  intro:
    "This entry is personal experience. When a journal entry includes health or orthodontic information, these are the organizations I rely on.",
  items: [
    {
      label: "Sources",
      href: "/sources",
      note: "The reference list for this site.",
    },
  ],
};

export const articles: Article[] = [
  {
    slug: "playing-sports-with-braces",
    category: "Experience",
    title: "What I Wish I Knew Before Playing Sports With Braces",
    description:
      "The small things that would have made my first season competing in braces a lot easier.",
    author: "Ryam Ahmed",
    date: "September 14, 2024",
    dateISO: "2024-09-14",
    readTime: "4 min read",
    blocks: [
      {
        type: "paragraph",
        text: "I started playing contact sports in braces without really knowing what to expect. I knew I might get hit in the face. I did not understand how different that hit could feel when brackets and wires were sitting against the inside of my cheeks.",
      },
      {
        type: "paragraph",
        text: "Basketball and soccer taught me quickly. I dealt with cut lips, wires digging into my cheeks and, eventually, a much worse mouth injury after a collision during basketball.",
      },
      {
        type: "paragraph",
        text: "The hardest part was not only the pain. It was realizing that I had never been given a simple game plan for what to do before, during or after a season.",
      },
      { type: "heading", text: "1. A mouthguard is not optional gear" },
      {
        type: "paragraph",
        text: "If I could restart my first season in braces, I would talk to my orthodontist about a mouthguard before the first practice.",
      },
      {
        type: "paragraph",
        text: "The American Association of Orthodontists recommends mouthguards for athletes in braces because they can help protect the teeth and create a barrier between braces and the lips or cheeks.",
      },
      { type: "heading", text: "2. Keep a tiny braces kit in your bag" },
      {
        type: "paragraph",
        text: "My ideal bag now includes orthodontic wax, a toothbrush, toothpaste and a mouthguard case.",
      },
      {
        type: "paragraph",
        text: "It sounds basic until a wire starts poking your cheek on the bus home from a game.",
      },
      { type: "heading", text: "3. Ask questions before something happens" },
      {
        type: "paragraph",
        text: "The best time to ask your orthodontist what to do after a hit is not after the hit.",
      },
      {
        type: "paragraph",
        text: "Before a season, ask what kind of mouthguard fits over your braces, what counts as an orthodontic emergency, and who to contact if a bracket or wire breaks.",
      },
      {
        type: "callout",
        kicker: "What I learned",
        text: "Playing sports with braces is completely possible. The difference is being prepared instead of improvising after something goes wrong.",
      },
      {
        type: "sources",
        items: [
          {
            label: "American Association of Orthodontists",
            href: "https://aaoinfo.org/",
            note: "Orthodontic guidance, mouthguards, sports participation, and common treatment issues.",
          },
          {
            label: "American Dental Association / MouthHealthy",
            href: "https://www.mouthhealthy.org/",
            note: "Patient-facing dental health guidance, including mouthguard use and care.",
          },
        ],
      },
    ],
  },
  {
    slug: "mouthguards-and-braces",
    category: "Protection & Preparation",
    title: "Mouthguards + Braces: The Gear I Wish I Took More Seriously",
    description:
      "Why protecting your mouth matters even more when brackets and wires are involved.",
    author: "Ryam Ahmed",
    date: "October 6, 2024",
    dateISO: "2024-10-06",
    readTime: "3 min read",
    blocks: [
      {
        type: "paragraph",
        text: "A mouthguard used to feel like one more annoying piece of equipment. After getting hit in the mouth with braces, I started seeing it differently.",
      },
      {
        type: "paragraph",
        text: "Braces add hard edges inside your mouth. A blow that might already cut your lip can push that soft tissue into brackets and wires.",
      },
      {
        type: "paragraph",
        text: "That is why dental and orthodontic organizations recommend mouth protection for athletes, particularly those wearing braces.",
      },
      { type: "heading", text: "The fit matters" },
      {
        type: "paragraph",
        text: "Your teeth are moving while you are in orthodontic treatment, so a mouthguard has to fit your situation.",
      },
      {
        type: "paragraph",
        text: "I would not guess. I would ask the orthodontist what type works with the braces you have and whether it needs to be replaced as treatment changes.",
      },
      { type: "heading", text: "Take care of it like real equipment" },
      {
        type: "paragraph",
        text: "Clean and dry the mouthguard after use and check it for damage or changes in fit.",
      },
      {
        type: "paragraph",
        text: "Teenagers are still growing, and orthodontic treatment itself changes the position of the teeth.",
      },
      {
        type: "callout",
        kicker: "My rule now",
        text: "If I would not step onto the field without cleats or onto the court without the gear I rely on, I should not treat protecting my mouth like an afterthought.",
      },
      {
        type: "sources",
        intro:
          "The recommendation in this entry comes from orthodontic and dental guidance, not from my own opinion alone.",
        items: [
          {
            label: "American Association of Orthodontists",
            href: "https://aaoinfo.org/",
            note: "Orthodontic guidance, mouthguards, and sports participation.",
          },
          {
            label: "American Dental Association / MouthHealthy",
            href: "https://www.mouthhealthy.org/",
            note: "Patient-facing guidance on mouthguard use and care.",
          },
        ],
      },
    ],
  },
  {
    slug: "after-a-hit-to-the-mouth",
    category: "Injury & Recovery",
    title: "After a Hit to the Mouth: My First Five Minutes",
    description:
      "The simple checklist I wish I had when an ordinary basketball play suddenly became a dental injury.",
    author: "Ryam Ahmed",
    date: "January 18, 2025",
    dateISO: "2025-01-18",
    readTime: "4 min read",
    image: {
      src: "/images/injury-basketball-bw.jpg",
      alt: "Black-and-white photo of Ryam Ahmed in a white Colts jersey elevating for a layup between defenders during a high school basketball game.",
      width: 1365,
      height: 2048,
    },
    blocks: [
      {
        type: "paragraph",
        text: "My worst braces injury happened during basketball when I took a direct hit to the mouth.",
      },
      {
        type: "paragraph",
        text: "My wires broke, my mouth bled, and I could barely eat afterward.",
      },
      {
        type: "paragraph",
        text: "What I remember most is how quickly everything felt chaotic.",
      },
      {
        type: "paragraph",
        text: "This is the checklist I wish I had in my head.",
      },
      {
        type: "paragraph",
        text: "It is not a substitute for a dentist, orthodontist, or emergency care. It is simply a way to slow down and assess what happened.",
      },
      { type: "heading", text: "1. Stop and check the basics" },
      {
        type: "paragraph",
        text: "If there is severe bleeding, severe pain, a knocked-out tooth, or another serious injury, get professional help.",
      },
      { type: "heading", text: "2. Look at the braces" },
      {
        type: "paragraph",
        text: "Check whether a bracket is loose or a wire has shifted.",
      },
      {
        type: "paragraph",
        text: "If a wire is poking your cheek, orthodontic wax may help cover the sharp area temporarily until you can get appropriate care.",
      },
      { type: "heading", text: "3. Contact the right person" },
      {
        type: "paragraph",
        text: "A broken bracket is different from a serious dental injury.",
      },
      {
        type: "paragraph",
        text: "If I am unsure, I would rather call my orthodontist or dentist and describe exactly what happened than decide on my own that it is nothing.",
      },
      {
        type: "callout",
        kicker: "Important",
        text: "Do not use this blog to diagnose an injury. Serious bleeding, major trauma, severe pain, or a knocked-out tooth deserves prompt professional attention.",
      },
      {
        type: "sources",
        intro:
          "This checklist is my own way of slowing down after an injury. For general information on dental emergencies, I point readers here.",
        items: [
          {
            label: "Cleveland Clinic",
            href: "https://my.clevelandclinic.org/",
            note: "General information regarding dental emergencies and injuries.",
          },
        ],
      },
    ],
  },
  {
    slug: "cold-sores-and-sports",
    category: "Athlete Health",
    title: "Cold Sores During Sports Season: What I've Learned",
    description:
      "The part of my braces experience that was hardest to explain to teammates.",
    author: "Ryam Ahmed",
    date: "January 30, 2025",
    dateISO: "2025-01-30",
    readTime: "4 min read",
    blocks: [
      {
        type: "paragraph",
        text: "Cold sores have been one of the most frustrating parts of my experience.",
      },
      {
        type: "paragraph",
        text: "After my freshman basketball injury, the outbreak was bad enough that my braces could not be reattached until my mouth healed.",
      },
      {
        type: "paragraph",
        text: "That made me want a fast solution.",
      },
      {
        type: "paragraph",
        text: "The frustrating reality is that cold sores do not have a cure, although treatments may sometimes shorten outbreaks or make symptoms more manageable.",
      },
      { type: "heading", text: "What helped me most: planning ahead" },
      {
        type: "paragraph",
        text: "For me, the useful lesson was not finding a miracle fix.",
      },
      {
        type: "paragraph",
        text: "It was learning to tell an adult, dentist, orthodontist, or healthcare professional early when an outbreak was interfering with eating, braces, or sports.",
      },
      { type: "heading", text: "Do not pretend everyone has the same experience" },
      {
        type: "paragraph",
        text: "This is one area where I am especially careful about giving advice.",
      },
      {
        type: "paragraph",
        text: "What triggers or helps my cold sores may not be the same for another athlete.",
      },
      {
        type: "paragraph",
        text: "A qualified healthcare professional can help with diagnosis and treatment options.",
      },
      {
        type: "callout",
        kicker: "Why I write about it",
        text: "I could not find many teen-athlete stories that connected braces, mouth injuries and cold sores. Even if I cannot solve the problem, I can make it less confusing for the next person.",
      },
      {
        type: "sources",
        intro:
          "The medical context in this entry — including the fact that cold sores do not have a cure — comes from general medical information, not from personal expertise.",
        items: [
          {
            label: "Mayo Clinic",
            href: "https://www.mayoclinic.org/",
            note: "General medical information used for cold sore context.",
          },
        ],
      },
    ],
  },
  {
    slug: "questions-for-your-orthodontist",
    category: "Protection & Preparation",
    title: "7 Questions I'd Ask My Orthodontist Before the Season",
    description:
      "A conversation guide for athletes who do not want to figure everything out in the middle of a game.",
    author: "Ryam Ahmed",
    date: "July 12, 2025",
    dateISO: "2025-07-12",
    readTime: "3 min read",
    blocks: [
      {
        type: "paragraph",
        text: "I used to think appointments were just the time when the orthodontist tightened or adjusted something.",
      },
      {
        type: "paragraph",
        text: "Playing sports taught me that athletes should use those appointments to ask questions too.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "What type of mouthguard should I use with my braces?",
          "How do I know if my mouthguard no longer fits correctly?",
          "What should I do if a wire starts poking my cheek during a game?",
          "What should I do if a bracket comes loose?",
          "Which injuries should make me call you immediately?",
          "What supplies should I keep in my sports bag?",
          "Is there anything about my current treatment that changes what I should do during contact sports?",
        ],
      },
      {
        type: "paragraph",
        text: "You do not need to sound like an expert. The point is to leave the appointment knowing what your plan is.",
      },
      personalSources,
    ],
  },
  {
    slug: "game-day-braces-kit",
    category: "Protection & Preparation",
    title: "My Game-Day Braces Kit",
    description:
      "A few small things I would rather have in my bag than wish I had later.",
    author: "Ryam Ahmed",
    date: "August 3, 2025",
    dateISO: "2025-08-03",
    readTime: "2 min read",
    blocks: [
      {
        type: "paragraph",
        text: "This is probably the least complicated post on the site, but it might be the most useful.",
      },
      {
        type: "paragraph",
        text: "These are the things I would keep in my bag during a season.",
      },
      {
        type: "list",
        items: [
          "Properly fitted mouthguard",
          "Orthodontic wax",
          "Travel toothbrush",
          "Fluoride toothpaste",
          "Floss or interdental brush",
          "Ventilated mouthguard case",
        ],
      },
      {
        type: "paragraph",
        text: "The goal is not to carry a mini dental office.",
      },
      {
        type: "paragraph",
        text: "It is to have enough to deal with the common, annoying problems until you can get proper help.",
      },
      {
        type: "callout",
        kicker: "Teammate idea",
        text: "If more than one person on your team has braces, keeping spare orthodontic wax with the team's first-aid supplies can save somebody a miserable ride home.",
      },
      personalSources,
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getJournalArticles() {
  return [...articles].sort((a, b) => (a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0));
}

export function getAdjacentArticles(slug: string) {
  const index = articles.findIndex((article) => article.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index < articles.length - 1 ? articles[index + 1] : null,
  };
}
