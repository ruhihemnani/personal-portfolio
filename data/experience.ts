export type ExperienceEntry = {
  id: string;
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

// Primary timeline — most recent first. Sourced from the current resume,
// combined with additional roles from an earlier resume for full history.
export const experience: ExperienceEntry[] = [
  {
    id: "eon-reality",
    role: "Project Manager Intern",
    org: "EON Reality",
    dates: "Sept 2026 – Present",
    bullets: [
      "Led a 5-member team through a 15-week predictive market-entry engagement, owning execution across 5 phases from data and modeling to live market validation.",
      "Served as primary client liaison with EON leadership, driving weekly stakeholder reviews and delivery of 6 core analytics outputs, including lead scoring, segmentation, experimentation, validation, and GTM recommendations.",
    ],
  },
  {
    id: "ai-trusted-advisors",
    role: "Project and Account Management Intern",
    org: "AI Trusted Advisors",
    dates: "May 2026 – Aug 2026",
    bullets: [
      "Owned client relationships across 3 verticals (banking, retail, contact-center), driving evaluation and adoption of an AI platform.",
      "Led cross-functional coordination across Marketing and Delivery to accelerate client engagement, ranking #1 in user tester acquisition with 150+ testers recruited.",
    ],
  },
  {
    id: "gdm-agreliant",
    role: "Analytics Strategist",
    org: "GDM (AgReliant Genetics) — Apprenticeship",
    dates: "Jan 2026 – May 2026",
    bullets: [
      "Identified a 1.3M-unit projected increase in lifecycle sales using data-driven simulation modeling (Monte Carlo, 1,000+ runs).",
      "Analyzed 10 years of operational and sales data (2015–2025) via an interactive Streamlit dashboard, learning a new tool and domain to deliver results on a tight timeline.",
    ],
  },
  {
    id: "aroma-caterers",
    role: "Client and Operations Head",
    org: "Aroma Caterers",
    dates: "Jan 2025 – Present",
    bullets: [
      "Orchestrated end-to-end client lifecycle management, from lead generation and deal finalization to long-term partnerships, driving revenue growth.",
      "Represented the brand in high-stakes negotiations, ensuring operational excellence and alignment with client objectives.",
    ],
  },
  {
    id: "kesar-technolab",
    role: "Business Development Manager",
    org: "Kesar Technolab",
    dates: "Mar 2025 – Jul 2025",
    bullets: [
      "Sourced, qualified, and closed 15+ net-new accounts in 7 weeks — a fast, full-cycle sales motion from first outreach to onboarding.",
      "Drove a 30% increase in visibility and 10+ new alliances through proactive outreach and negotiation.",
    ],
  },
  {
    id: "focus-design",
    role: "Business Development Consultant",
    org: "Focus Design",
    dates: "Aug 2024 – Feb 2025",
    bullets: [
      "Generated $850K in revenue within 2 months by sourcing, pitching, and closing a net-new pipeline.",
      "Grew LinkedIn impressions by 350% through a targeted engagement strategy; built SOPs to standardize onboarding.",
    ],
  },
  {
    id: "focus-trade-fairs",
    role: "Business Developer",
    org: "Focus Trade Fairs Pvt Ltd",
    dates: "Aug 2024 – Nov 2024",
    bullets: [
      "Streamlined processes by creating and implementing SOPs, ensuring consistency across operations with data-analytical tools.",
      "Contributed to white papers and market research documents informing business strategy and client engagement.",
    ],
  },
  {
    id: "zaas-studio",
    role: "Marketing & Operations Lead",
    org: "Zaas Studio",
    dates: "Dec 2023 – Jun 2024",
    bullets: [
      "Acquired 20+ net-new clients monthly through targeted outbound campaigns via Mailchimp.",
      "Grew brand presence by 100+ new followers in 10 days using Instagram Insights and Canva.",
    ],
  },
  {
    id: "hireduo",
    role: "Co-founder",
    org: "HireDuo (Startup)",
    dates: "Aug 2021 – Aug 2025",
    bullets: [
      "Co-founded and scaled a startup from zero to 450+ successful placements and 45+ recurring B2B partnerships.",
      "Built sales process, CRM workflows, and operations from scratch, owning every part of the sales and operations motion as founder.",
    ],
  },
];

// Earlier / shorter-tenure roles, shown as a compact list rather than
// full timeline entries to keep the page readable.
export const earlierRoles = [
  { role: "Content Strategist", org: "TIMS Magazines", dates: "2021, 2023" },
  { role: "Marketing & Sales Manager", org: "Palette by Niddhi", dates: "Oct – Nov 2022" },
  { role: "Marketing & Sales Manager", org: "REN Fitness Studio", dates: "Jun – Oct 2022" },
  { role: "Operations & Campaign Manager", org: "KhetSePlate", dates: "Nov 2020 – Mar 2021" },
  { role: "PR Head & Event Manager", org: "GujaratMUN", dates: "Mar 2018, Aug – Sep 2021" },
];
