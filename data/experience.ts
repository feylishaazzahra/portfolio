export type Experience = {
  role: string;
  organization: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Graphic Designer",
    organization: "Freelance",
    period: "2024 - Present",
    points: [
      "Provided on-demand graphic design services for 70+ clients.",
      "Designed posters, Instagram feeds, catalogues, flyers, certificates, banners, brochures, pamphlets, infographics, book covers, booklets, lanyards, ID cards, and logos.",
      "Managed the full design lifecycle from requirement gathering and concept development to revisions and final asset delivery.",
      "Maintained consistency in layout, typography, and visual hierarchy across print and digital formats.",
    ],
  },
  {
    role: "Staff of Photography",
    organization: "UFO Veteran Jakarta",
    period: "2024 - 2025",
    points: [
      "Contributed to event documentation, studio sessions, exhibitions, and competitions.",
      "Produced visual materials supporting organizational media and branding.",
      "Strengthened photography and creative direction skills through collaborative projects.",
    ],
  },
  {
    role: "Head of Publication, Documentation, and Design",
    organization: "OSIS",
    period: "2021 - 2023",
    points: [
      "Led documentation and publication for major school events.",
      "Designed and distributed visual content through social media platforms.",
      "Helped improve institutional branding and engagement.",
    ],
  },
];
