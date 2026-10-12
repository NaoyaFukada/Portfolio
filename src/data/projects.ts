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
    title: "Shintop Trading Australia: Storefront and AI Operations",
    description:
      "A custom Shopify theme on Dawn (36 custom sections, a product page driven by 22 metafields), and the Claude Code system that runs the store: 57 skills and 162 Python scripts that research products, draft listings, review prices and report profit per order.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Claude Code", "Python", "Git"],
    features: [
      "36 custom theme sections and a wholesale (B2B) landing page",
      "Claude Code skills take a product from research to a Shopify draft listing",
      "Automated price reviews and a profit report for every order",
      "Guard hooks and a deploy that never overwrites theme-editor files",
    ],
    demo: "https://shintop.com.au",
    category: "frontend",
    proof: "Shopify theme + Claude Code · Shintop AU",
  },
  {
    title: "Jun Direct Category Restructure",
    description:
      "Rebuilt the category structure of Jun Direct, a Japanese grocery Shopify store: 900+ products re-categorised in 2 weeks with an AI-assisted product-knowledge pipeline, every fact verified.",
    technologies: ["Shopify", "Claude Code", "Obsidian"],
    features: [
      "Product knowledge from vendor sites, audited for accuracy",
      "Products in one or more categories through tags",
      "Parent and sub-category navigation from the home page",
    ],
    category: "backend",
    proof: "eCommerce ops · Jun Pacific",
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
