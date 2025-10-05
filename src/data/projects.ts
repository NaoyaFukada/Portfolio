interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my projects, education, and skills. Features smooth animations, interactive UI elements, and a clean design.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    features: ["Responsive design", "Modern UI/UX", "Smooth animations"],
    github: "https://github.com/NaoyaFukada/Portfolio",
    demo: "https://naoyafukada.vercel.app/",
    category: "frontend",
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
  },
];
