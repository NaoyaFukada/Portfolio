interface Certificate {
  title: string;
  issuer: string;
  icon: string; // Font Awesome <i class={`fas ${icon}`}></i>
}

export const certificates: Certificate[] = [
  {
    title: "Computer Science Course",
    issuer: "Codecademy",
    icon: "fa-code",
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    icon: "fa-cloud",
  },
];
