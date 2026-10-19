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
      "eCommerce marketing",
      "UX and UI that lift conversion and order value",
      "AI automation for store admin",
      "Lean, accurate AI systems",
    ],
    type: "array",
  },
  {
    key: "openToWork",
    value: true,
    type: "boolean",
  },
];
