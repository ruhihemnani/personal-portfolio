export type Project = {
  id: string;
  title: string;
  monogram: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    id: "tims-magazines",
    title: "TIMS Magazines",
    monogram: "T",
    description:
      "Wrote and published 50+ personalized content pieces for this custom memory-book gift brand, contributing to a measurable lift in conversions across a 15,000+ client base.",
    tags: ["Content Writing", "Client Conversion", "Brand Storytelling"],
    href: "https://www.timsmagazines.com/",
    linkLabel: "Visit site",
  },
  {
    id: "reddys-law-chambers",
    title: "Reddy's Law Chambers",
    monogram: "R",
    description:
      "Created scripts and content for a Bangalore civil and criminal law practice, generating 130,000+ views and expanding its digital presence.",
    tags: ["Content Strategy", "Video Scripts", "Digital Presence"],
    href: "https://www.reddylaw.in/",
    linkLabel: "Visit site",
  },
  {
    id: "pazsoft",
    title: "PazSoft",
    monogram: "P",
    description:
      "Built and rolled out SOPs across marketing, PR, and lead generation at this offshore IT and QA testing company, lifting operational efficiency by 50%.",
    tags: ["SOP Design", "Process Efficiency", "Cross-Functional Ops"],
    href: "https://www.pazsoft.com/",
    linkLabel: "Visit site",
  },
  {
    id: "khetseplate",
    title: "KhetSePlate",
    monogram: "K",
    description:
      "Designed an order management system and led campaigns that sustained 10+ weekly orders across 50+ clients for this farm-to-plate food service.",
    tags: ["Operations", "Order Management", "Campaign Management"],
    href: "https://www.instagram.com/khetseplate/?hl=en",
    linkLabel: "View on Instagram",
  },
  {
    id: "le-creme",
    title: "Le Créme — Kreme Luxury Desserts",
    monogram: "L",
    description:
      "Led content strategy and social campaigns for a luxury dessert brand, driving increased sales and stronger brand recognition through seasonal promotions.",
    tags: ["Social Strategy", "Content Calendar", "Brand Campaigns"],
    href: "https://www.instagram.com/kreme.luxurydesserts/",
    linkLabel: "View on Instagram",
  },
];
