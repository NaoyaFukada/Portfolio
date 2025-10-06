interface DeveloperField {
  key: string;
  value: string | string[] | boolean;
  type: "string" | "array" | "boolean";
}

export const developerInfo: DeveloperField[] = [
  {
    key: "name",
    value: "Naoya Fukada",
    type: "string",
  },
  {
    key: "role",
    value: "Junior Software Engineer",
    type: "string",
  },
  {
    key: "skills",
    value: ["JavaScript", "Python", "React", "Node.js", "HTML/CSS", "Git"],
    type: "array",
  },
  {
    key: "passion",
    value: [
      "Software Development",
      "Cloud Computing",
      "Data Management",
      "Finance",
      "Marketing",
      "Real Estate",
    ],
    type: "array",
  },
  {
    key: "openToWork",
    value: true,
    type: "boolean",
  },
];
