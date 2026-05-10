export type ProjectFilter =
  | "All"
  | "Social Media"
  | "Branding"
  | "Print Design"
  | "UI/UX"
  | "Event Design";

export type Project = {
  title: string;
  category: string;
  filter: ProjectFilter;
  description: string;
  image: string;
  palette: string;
  featured?: boolean;
};

export const projectFilters: ProjectFilter[] = [
  "All",
  "Social Media",
  "Branding",
  "Print Design",
  "UI/UX",
  "Event Design",
];

export const projects: Project[] = [
  {
    title: "Instagram Feed Design - FOMO Awareness Post",
    category: "Social Media Design",
    filter: "Social Media",
    description:
      "Expressive typography, layered imagery, warm orange-red tones, and retro elements to communicate anxiety, social pressure, and comparison.",
    image: "/images/projects/project-01.png",
    palette: "from-orange-200 via-rose-200 to-violet-200",
  },
  {
    title: "Instagram Feed Design - English Course Mentor Reveal",
    category: "Social Media Design",
    filter: "Social Media",
    description:
      "Mentor reveal campaign following brand guidelines, predefined colors, typography, and bold visual hierarchy.",
    image: "/images/projects/project-02.png",
    palette: "from-violet-200 via-fuchsia-100 to-white",
  },
  {
    title: "Event ID Card & Lanyard Design - Evercurse",
    category: "Event / Print Design",
    filter: "Event Design",
    description:
      "Dark fantasy event identity with purple tones, clear role identification, mystery, power, and exclusivity.",
    image: "/images/projects/project-03.png",
    palette: "from-violet-950 via-purple-500 to-fuchsia-300",
  },
  {
    title: "Yearbook Cover Design - SMAN 15 Pekanbaru",
    category: "Book Cover / Print Design",
    filter: "Print Design",
    description:
      "Open-door graduation concept with playful styling, strong typography, symmetrical layout, and perspective depth.",
    image: "/images/projects/project-01.png",
    palette: "from-sky-100 via-violet-100 to-pink-100",
  },
  {
    title: "Proposal Book Cover - Training Legislatif Dasar",
    category: "Print Design",
    filter: "Print Design",
    description:
      "Institutional proposal cover using Lady Justice imagery, deep red tones, formal composition, and credible visual language.",
    image: "/images/projects/project-02.png",
    palette: "from-red-200 via-rose-100 to-violet-100",
  },
  {
    title: "Cafe Visual Menu Design - Waypoint.Kopi",
    category: "Catalogue / Menu Design",
    filter: "Print Design",
    description:
      "Cafe catalogue layout focused on clarity, appetizing warm tones, consistent branding, and balanced composition.",
    image: "/images/projects/project-03.png",
    palette: "from-amber-100 via-stone-100 to-violet-100",
  },
  {
    title: "HearLens Smart Glass Interface",
    category: "UI/UX Design",
    filter: "UI/UX",
    description:
      "Mobile interface for deaf users connecting smart glasses with real-time speech-to-text, dashboard metrics, and device controls.",
    image: "/images/projects/project-01.png",
    palette: "from-cyan-100 via-violet-100 to-fuchsia-100",
    featured: true,
  },
  {
    title: "Dessert Shop Logo Design - Dulizzert",
    category: "Branding / Logo Design",
    filter: "Branding",
    description:
      "Soft colors, rounded shapes, and illustrative details for a warm, homemade, sweet, and approachable dessert identity.",
    image: "/images/projects/project-02.png",
    palette: "from-pink-100 via-purple-100 to-yellow-100",
  },
  {
    title: "Event Graphic Design - Lombakan",
    category: "Event Graphic Design",
    filter: "Event Design",
    description:
      "Event graphics for VeteranTech UPNVJ, including mascot and virtual background aligned with established visual guidelines.",
    image: "/images/projects/project-03.png",
    palette: "from-violet-200 via-indigo-100 to-white",
  },
  {
    title: "Event Mascot - Lombakan",
    category: "Illustration / Event Design",
    filter: "Event Design",
    description:
      "Friendly expressive mascot created in Figma with vector-based shapes, strong outlines, and consistent event identity.",
    image: "/images/projects/project-01.png",
    palette: "from-fuchsia-100 via-violet-100 to-white",
  },
  {
    title: "Virtual Background - Lombakan",
    category: "Event Graphic Design",
    filter: "Event Design",
    description:
      "Digital event background with consistent color scheme, typography, and graphic elements for professional online sessions.",
    image: "/images/projects/project-02.png",
    palette: "from-purple-100 via-white to-sky-100",
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
