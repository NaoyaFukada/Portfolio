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
      "eCommerce",
      "Data",
      "AI tools",
    ],
    type: "array",
  },
  {
    key: "openToWork",
    value: true,
    type: "boolean",
  },
];
