interface WorkExperience {
  company: string;
  position: string;
  period: string;
  startDate: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string; // "fulltime", "parttime", "internship", "contract"
}

export const experiences: WorkExperience[] = [
  {
    company: "Tech Solutions Inc.",
    position: "Junior Software Engineer",
    period: "Jan 2024 - Present",
    startDate: "2024-01",
    location: "Sydney, Australia",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Improved app performance by 40%",
      "Built 5+ production features",
      "Mentored 2 junior developers",
      "Reduced bug reports by 30%",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    type: "fulltime",
  },
  {
    company: "Digital Agency Co.",
    position: "Web Developer Intern",
    period: "Jun 2023 - Dec 2023",
    startDate: "2023-06",
    location: "Sydney, Australia",
    description:
      "Assisted in building responsive websites for clients. Gained hands-on experience with modern web development tools and practices.",
    achievements: [
      "Delivered 3 client projects",
      "Optimized website speed",
      "Created reusable components",
      "Improved SEO rankings",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    type: "internship",
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    period: "Mar 2023 - May 2023",
    startDate: "2023-03",
    location: "Remote",
    description:
      "Contributed to building a SaaS product from the ground up. Focused on creating intuitive user interfaces and ensuring responsive design across devices.",
    achievements: [
      "Built responsive UI components",
      "Implemented user authentication",
      "Reduced load time by 50%",
      "Integrated third-party APIs",
    ],
    technologies: ["Vue.js", "Tailwind", "Firebase", "REST API"],
    type: "contract",
  },
  {
    company: "Retail Solutions Ltd.",
    position: "IT Support Specialist",
    period: "Jan 2022 - Feb 2023",
    startDate: "2022-01",
    location: "Sydney, Australia",
    description:
      "Provided technical support and maintained IT infrastructure. Automated routine tasks using Python scripts to improve efficiency.",
    achievements: [
      "Automated daily tasks",
      "Resolved 200+ support tickets",
      "Maintained 99% uptime",
      "Trained 10+ staff members",
    ],
    technologies: ["Python", "PowerShell", "SQL", "Linux"],
    type: "parttime",
  },
];
