interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: string;
  // What kind of proof the card is (shown as a tag) and its one-line result.
  // Both are Naoya's facts: leave outcome unset until he writes it.
  proof: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    title: "Shintop Trading Australia: Storefront and AI Operations",
    description:
      "A custom Shopify theme on Dawn (30+ custom Liquid sections, a product page driven by 22 metafields), and the Claude Code system that runs the store: 57 skills and 184 Python scripts that research products, draft listings, review prices and report profit per order.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Claude Code", "Python", "Git"],
    features: [
      "30+ custom Liquid sections and a wholesale (B2B) landing page",
      "A full product page from about a minute of my time",
      "Claude Code skills take a product from research to a Shopify draft listing",
      "Automated price reviews and a profit report for every order",
      "Guard hooks and a deploy that never overwrites theme-editor files",
    ],
    demo: "https://shintop.com.au",
    category: "frontend",
    proof: "Shopify theme + Claude Code · Shintop AU",
    outcome: "17 of 17 guides indexed by Google; 6,015 search impressions in 28 days.",
  },
  {
    title: "Jun Direct: Storefront Rebuild and Bundles",
    description:
      "Rebuilt the Shopify storefront of Jun Direct, a Japanese grocery store, and redesigned its catalogue into clear categories. Then introduced multi-buy bundles to raise order value.",
    technologies: ["Shopify", "Liquid", "Shopify Flow", "Claude Code"],
    features: [
      "Theme rebuilt on Warehouse 7, live June 2026",
      "900+ products re-categorised in 2 weeks",
      "Restock and new-arrival tagging automated",
    ],
    category: "backend",
    proof: "eCommerce ops · Jun Pacific",
    outcome: "Orders with a bundle are worth about 1.5× the rest.",
  },
  {
    title: "Shinflow",
    description:
      "An online ordering platform for Shintop Trading, my family's wholesale food company in Japan. Restaurant buyers browse their order forms, choose quantities and place orders, replacing phone and fax ordering.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL (Supabase)", "Tailwind"],
    features: [
      "Order forms for restaurant buyers",
      "Replaces phone and fax ordering",
      "Japanese-language UI",
      "Supabase Auth sign-in",
    ],
    category: "fullstack",
    proof: "Full-stack build · Shintop Trading",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my projects, education, and skills. Features smooth animations, interactive UI elements, and a clean design.",
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
    features: ["Responsive design", "Modern UI/UX", "Smooth animations"],
    github: "https://github.com/NaoyaFukada/Portfolio",
    demo: "https://naoyafukada.vercel.app/",
    category: "frontend",
    proof: "Personal build",
  },
  {
    title: "Event Engine Microservice",
    description:
      "A scalable event-driven microservice built in PHP with Microsoft SQL Server to detect aviation operational events in real time as part of Skynet Aviation's new software system.",
    technologies: ["PHP", "Microsoft SQL Server", "Docker", "SQL Triggers"],
    features: [
      "Real-time event detection",
      "Rule-based logic system",
      "Optimized SQL performance",
      "Scalable design",
    ],
    category: "backend",
    proof: "Internship · Skynet Aviation",
  },
];
