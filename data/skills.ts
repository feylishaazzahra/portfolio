export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Graphic Design",
    items: [
      "Digital visual assets",
      "Layout",
      "Typography",
      "Color theory",
      "Branding visuals",
      "Print and digital design",
    ],
  },
  {
    title: "Photography",
    items: [
      "Visual composition",
      "Lighting control",
      "Basic photo editing",
      "Event documentation",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "User-centered design",
      "User research",
      "Usability testing",
      "Interface design",
      "User flow design",
    ],
  },
  {
    title: "Programming & Database",
    items: ["C", "MySQL", "JavaScript"],
  },
  {
    title: "Soft Skills",
    items: ["Teamwork", "Public speaking", "Time management"],
  },
];
