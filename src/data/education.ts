interface Education {
  institution: string;
  degree: string;
  major?: string;
  period: string;
  gpa?: string;
  achievements: string[];
  icon: string; // Font Awesome <i class={`fas ${icon}`}></i>
}

export const education: Education[] = [
  {
    institution: "Griffith University",
    degree: "Bachelor of Information Technology (Distinction)",
    major: "Software Development",
    period: "July 2023 - July 2025",
    gpa: "6.67 / 7.0",
    achievements: [
      "International Student Academic Excellence Scholarship Holder",
      "Griffith Award for Academic Excellence - 2024",
      "Golden Key International Honour Society Member (Top 15% at Griffith University)",
      "Consistently achieved High Distinction grades in team projects",
    ],
    icon: "fa-graduation-cap",
  },
  {
    institution: "Griffith College",
    degree: "Diploma of Information Technology",
    period: "Oct 2022 - June 2023",
    gpa: "6.75/7.0",
    achievements: [
      "DUX Award (Achieved the highest GPA in the course)",
      "Academic Excellence",
    ],
    icon: "fa-certificate",
  },
];
