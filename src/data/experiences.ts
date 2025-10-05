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
    company: "Skynet Aviation",
    position: "Software Engineer Intern",
    period: "Mar 2025 - May 2025",
    startDate: "2025-03",
    location: "Brisbane, Australia",
    description:
      "Designed and implemented a scalable PHP microservice integrated with Microsoft SQL Server to detect aviation operational events, supporting real-time monitoring and data-driven decision-making for airline clients.",
    achievements: [
      "Developed an event-driven architecture to automatically detect flight status and operational changes using SQL triggers and polling mechanisms.",
      "Applied database optimization, caching, and batch processing to improve event processing efficiency and scalability.",
      "Collaborated with senior engineers to refine event detection logic and ensure accuracy across complex flight data scenarios.",
      "Earned recognition from the General Manager for resilience, problem-solving, and professional conduct throughout the placement.",
    ],
    technologies: [
      "PHP",
      "Microsoft SQL Server",
      "Docker",
      "SQL Triggers",
      "Git",
    ],
    type: "internship",
  },
  {
    company: "Ramen Danbo",
    position: "Kitchen Hand",
    period: "Nov 2022 - Sep 2025",
    startDate: "2022-11",
    location: "Pimpama, Gold Coast, QLD, Australia",
    description:
      "Prepared authentic Japanese ramen and maintained kitchen efficiency and cleanliness in a busy, high-volume restaurant.",
    achievements: [
      "Cooked ramen dishes and side items according to customer preferences and quality standards.",
      "Prepared ramen soup base from pork bones (tonkotsu) to create a rich and consistent flavor.",
      "Demonstrated reliability and teamwork over three years, contributing to a positive and efficient workplace.",
    ],
    technologies: [
      "Food Preparation",
      "Japanese Cuisine",
      "Teamwork",
      "Time Management",
      "Customer Service",
      "Kitchen Operations",
    ],
    type: "casual",
  },
  {
    company: "Amiyakitei",
    position: "Kitchen Hand",
    period: "Oct 2019 - Feb 2022",
    startDate: "2019-10",
    location: "Aichi, Japan",
    description:
      "Supported kitchen operations in a busy Japanese barbecue restaurant by preparing meats, side dishes, and beverages to order.",
    achievements: [
      "Weighed, sliced, and seasoned meats according to customer orders and restaurant standards.",
      "Prepared side dishes and beverages efficiently to support high-volume service.",
      "Maintained a clean, organized workspace while ensuring quick turnaround times during rush hours.",
    ],
    technologies: [
      "Food Preparation",
      "Team Collaboration",
      "Efficiency",
      "Attention to Detail",
      "Customer Satisfaction",
    ],
    type: "casual",
  },
];
