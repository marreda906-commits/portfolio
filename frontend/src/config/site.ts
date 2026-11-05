export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const assetPath = (path: string) => `${basePath}${path}`;

export const siteConfig = {
  name: "Mohamed Reda MARZOUQ",
  role: "Élève ingénieur en génie électromécanique",
  school: "ENSAM Meknès",
  option: "Commande et Maintenance Industrielles",
  description: "Portfolio de Mohamed Reda MARZOUQ, élève ingénieur à l’ENSAM Meknès : électromécanique, automatisation, vision industrielle, systèmes embarqués et maintenance.",
  location: "Meknès, Maroc",
  email: "m.reda.marzouq@gmail.com",
  phone: { label: "+212 6 21 67 05 52", href: "tel:+212621670552" },
  linkedin: "https://www.linkedin.com/in/mohamed-reda-marzouq",
  // No GitHub profile was supplied. Set a verified URL to show the link.
  github: "",
  cvUrl: "/home/CV_Mohamed_Reda_MARZOUQ.pdf",
  portrait: "/home/portrait.png",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
};

export const navItems = [
  { id: "projects", label: "Projets" },
  { id: "about", label: "À propos" },
  { id: "experience", label: "Parcours" },
  { id: "skills", label: "Compétences" },
  { id: "contact", label: "Contact" },
];
