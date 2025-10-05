interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
  color: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Sydney, Australia",
    color: "text-rose-400",
  },
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    color: "text-emerald-400",
  },
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+61 XXX XXX XXX",
    href: "tel:+61XXXXXXXXX",
    color: "text-cyan-400",
  },
  {
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/naoyafukada",
    href: "https://linkedin.com/in/naoyafukada",
    color: "text-blue-400",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "github.com/naoyafukada",
    href: "https://github.com/naoyafukada",
    color: "text-purple-400",
  },
  {
    icon: "fa-solid fa-file-pdf",
    label: "Resume",
    value: "Download CV",
    href: "/resume.pdf",
    color: "text-amber-400",
  },
];
