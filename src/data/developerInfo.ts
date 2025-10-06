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
    key: "softSkills",
    value: [
      "Attention to detail",
      "Hardworking",
      "Strong problem-solving skills",
      "Reliable",
      "Team player",
      "Always curious to learn",
    ],
    type: "array",
  },
  {
    key: "openToWork",
    value: true,
    type: "boolean",
  },
];
