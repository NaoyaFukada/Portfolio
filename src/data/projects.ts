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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, and secure payment integration. Features include real-time inventory updates and responsive design.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Modern architecture",
      "Responsive design",
      "Best practices",
      "Well documented",
    ],
    github: "https://github.com/naoyafukada/ecommerce",
    demo: "https://demo.example.com",
    category: "fullstack",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Built with modern web technologies.",
    technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    features: [
      "Modern architecture",
      "Responsive design",
      "Best practices",
      "Well documented",
    ],
    github: "https://github.com/naoyafukada/taskapp",
    demo: "https://demo.example.com",
    category: "fullstack",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather application that displays current conditions, forecasts, and historical data. Features location-based search and beautiful data visualizations.",
    technologies: ["React", "API Integration", "Chart.js", "Tailwind"],
    features: [
      "Modern architecture",
      "Responsive design",
      "Best practices",
      "Well documented",
    ],
    github: "https://github.com/naoyafukada/weather",
    demo: "https://demo.example.com",
    category: "frontend",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for a social media platform with authentication, post management, comments, and real-time notifications. Includes comprehensive documentation.",
    technologies: ["Express", "MongoDB", "JWT", "Socket.io"],
    features: [
      "Modern architecture",
      "Responsive design",
      "Best practices",
      "Well documented",
    ],
    github: "https://github.com/naoyafukada/social-api",
    category: "backend",
  },
];
