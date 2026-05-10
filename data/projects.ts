export type ProjectFilter =
  | "All"
  | "Social Media"
  | "Branding"
  | "Print Design"
  | "UI/UX"
  | "Event Design";

export type ProjectImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  filter: Exclude<ProjectFilter, "All">;
  description: string;
  image: string;
  images: ProjectImage[];
  palette: string;
  tags: string[];
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

const socialMedia = "/images/projects/social-media";
const eventDesign = "/images/projects/event-design";
const printDesign = "/images/projects/print-design";
const branding = "/images/projects/branding";
const uiux = "/images/projects/uiux";

export const projects: Project[] = [
  {
    slug: "fomo-awareness-post",
    title: "Instagram Feed Design - FOMO Awareness Post",
    category: "Social Media Design",
    filter: "Social Media",
    description:
      "Instagram feed post designed to raise awareness about FOMO among young audiences through expressive typography, layered imagery, warm orange-red tones, and retro visual tension.",
    image: `${socialMedia}/fomo-1.png`,
    images: [
      { src: `${socialMedia}/fomo-1.png`, alt: "FOMO awareness Instagram feed cover", fit: "contain" },
      { src: `${socialMedia}/fomo-2.png`, alt: "FOMO awareness Instagram feed slide 2", fit: "contain" },
      { src: `${socialMedia}/fomo-3.png`, alt: "FOMO awareness Instagram feed slide 3", fit: "contain" },
      { src: `${socialMedia}/fomo-4.png`, alt: "FOMO awareness Instagram feed slide 4", fit: "contain" },
      { src: `${socialMedia}/fomo-5.png`, alt: "FOMO awareness Instagram feed slide 5", fit: "contain" },
      { src: `${socialMedia}/fomo-6.png`, alt: "FOMO awareness Instagram feed slide 6", fit: "contain" },
    ],
    palette: "from-orange-200 via-rose-200 to-violet-200",
    tags: ["Instagram feed", "Campaign", "Typography"],
  },
  {
    slug: "english-course-mentor-reveal",
    title: "Instagram Feed Design - English Course Mentor Reveal",
    category: "Social Media Design",
    filter: "Social Media",
    description:
      "Mentor reveal campaign for an English course, built around brand guidelines, predefined colors, bold composition, and clear message hierarchy.",
    image: `${socialMedia}/mentor-reveal.png`,
    images: [
      { src: `${socialMedia}/mentor-reveal.png`, alt: "English course mentor reveal Instagram feed", fit: "contain" },
    ],
    palette: "from-violet-200 via-fuchsia-100 to-white",
    tags: ["Instagram feed", "Brand guideline", "Announcement"],
  },
  {
    slug: "evercurse-id-card-lanyard",
    title: "Event ID Card & Lanyard Design - Evercurse",
    category: "Event / Print Design",
    filter: "Event Design",
    description:
      "ID card and lanyard design focused on clear role identification and an immersive dark fantasy event identity with purple tones, mystery, and exclusivity.",
    image: `${eventDesign}/evercurse-mockup.png`,
    images: [
      { src: `${eventDesign}/evercurse-mockup.png`, alt: "Evercurse ID card and lanyard mockup", fit: "contain" },
      { src: `${eventDesign}/evercurse-id-card.png`, alt: "Evercurse ID card design", fit: "contain" },
      { src: `${eventDesign}/evercurse-lanyard.png`, alt: "Evercurse lanyard design", fit: "contain" },
    ],
    palette: "from-violet-950 via-purple-500 to-fuchsia-300",
    tags: ["Event identity", "ID card", "Lanyard"],
  },
  {
    slug: "sman-15-yearbook-cover",
    title: "Yearbook Cover Design - SMAN 15 Pekanbaru",
    category: "Book Cover / Print Design",
    filter: "Print Design",
    description:
      "Yearbook cover based on entering a new chapter, using open doors as a graduation symbol with playful styling, strong typography, symmetry, and depth.",
    image: `${printDesign}/yearbook-cover.png`,
    images: [
      { src: `${printDesign}/yearbook-cover.png`, alt: "SMAN 15 Pekanbaru yearbook cover", fit: "contain" },
      { src: `${printDesign}/yearbook-mockup1.png`, alt: "SMAN 15 Pekanbaru yearbook mockup 1", fit: "contain" },
      { src: `${printDesign}/yearbook-mockup2.png`, alt: "SMAN 15 Pekanbaru yearbook mockup 2", fit: "contain" },
      { src: `${printDesign}/yearbook-mockup3.png`, alt: "SMAN 15 Pekanbaru yearbook mockup 3", fit: "contain" },
      { src: `${printDesign}/yearbook-mockup4.png`, alt: "SMAN 15 Pekanbaru yearbook mockup 4", fit: "contain" },
    ],
    palette: "from-sky-100 via-violet-100 to-pink-100",
    tags: ["Book cover", "Editorial", "Print"],
  },
  {
    slug: "training-legislatif-cover",
    title: "Proposal Book Cover - Training Legislatif Dasar",
    category: "Print Design",
    filter: "Print Design",
    description:
      "Sponsorship proposal cover for institutional partners, using Lady Justice imagery, deep red tones, and a formal composition for credibility.",
    image: `${printDesign}/training-legislatif-cover.png`,
    images: [
      { src: `${printDesign}/training-legislatif-cover.png`, alt: "Training Legislatif Dasar proposal cover", fit: "contain" },
      { src: `${printDesign}/training-legislatif-mockup1.png`, alt: "Training Legislatif Dasar proposal mockup 1", fit: "contain" },
      { src: `${printDesign}/training-legislatif-mockup2.png`, alt: "Training Legislatif Dasar proposal mockup 2", fit: "contain" },
    ],
    palette: "from-red-200 via-rose-100 to-violet-100",
    tags: ["Proposal", "Cover design", "Institutional"],
  },
  {
    slug: "waypoint-kopi-menu",
    title: "Cafe Visual Menu Design - Waypoint.Kopi",
    category: "Catalogue / Menu Design",
    filter: "Print Design",
    description:
      "Cafe menu catalogue designed to present food and beverage offerings with clarity, balanced composition, consistent branding, and warm appetizing tones.",
    image: `${printDesign}/waypoint-menu1.png`,
    images: [
      { src: `${printDesign}/waypoint-menu1.png`, alt: "Waypoint.Kopi menu design option 1", fit: "contain" },
      { src: `${printDesign}/waypoint-menu2.png`, alt: "Waypoint.Kopi menu design option 2", fit: "contain" },
      { src: `${printDesign}/waypoint-menu3.png`, alt: "Waypoint.Kopi menu design option 3", fit: "contain" },
    ],
    palette: "from-amber-100 via-stone-100 to-violet-100",
    tags: ["Menu", "Catalogue", "Food and beverage"],
  },
  {
    slug: "hearlens-uiux",
    title: "Smart Glass Interface & Real-Time Transcription - HearLens",
    category: "UI/UX Design",
    filter: "UI/UX",
    description:
      "Mobile interface supporting communication for deaf users by connecting smart glasses with real-time speech-to-text, dashboard metrics, and device management.",
    image: `${uiux}/hearlens-main-screen.png`,
    images: [
      { src: `${uiux}/hearlens-main-screen.png`, alt: "HearLens main dashboard screen", fit: "contain" },
      { src: `${uiux}/hearlens-connect.png`, alt: "HearLens device connection screen", fit: "contain" },
      { src: `${uiux}/hearlens-user-profile.png`, alt: "HearLens user profile screen", fit: "contain" },
      { src: `${uiux}/hearlens-splashscreen.png`, alt: "HearLens splash screen", fit: "contain" },
      { src: `${uiux}/hearlens-loading.png`, alt: "HearLens loading screen", fit: "contain" },
      { src: `${uiux}/hearlens-login.png`, alt: "HearLens login screen", fit: "contain" },
      { src: `${uiux}/hearlens-login-keyboard.png`, alt: "HearLens login with keyboard", fit: "contain" },
      { src: `${uiux}/hearlens-sign-up.png`, alt: "HearLens sign up screen", fit: "contain" },
      { src: `${uiux}/hearlens-sign-up-keyboard.png`, alt: "HearLens sign up with keyboard", fit: "contain" },
    ],
    palette: "from-cyan-100 via-violet-100 to-fuchsia-100",
    tags: ["Mobile UI", "Accessibility", "Smart glasses"],
    featured: true,
  },
  {
    slug: "dulizzert-logo",
    title: "Dessert Shop Logo Design - Dulizzert",
    category: "Branding / Logo Design",
    filter: "Branding",
    description:
      "Dessert shop logo with soft colors, rounded shapes, and illustrative details to create a warm, homemade, sweet, and approachable identity.",
    image: `${branding}/dulizzert-mockup.png`,
    images: [
      { src: `${branding}/dulizzert-mockup.png`, alt: "Dulizzert logo mockup", fit: "contain" },
      { src: `${branding}/dulizzert-logo.png`, alt: "Dulizzert logo design", fit: "contain" },
    ],
    palette: "from-pink-100 via-purple-100 to-yellow-100",
    tags: ["Logo", "Brand identity", "Dessert brand"],
  },
  {
    slug: "lombakan-event-graphics",
    title: "Event Graphic Design - Lombakan by VeteranTech UPNVJ",
    category: "Event Graphic Design",
    filter: "Event Design",
    description:
      "Graphic design project for Lombakan, including mascot and virtual backgrounds produced according to established event visual guidelines.",
    image: `${eventDesign}/lombakan-feeds-cover.png`,
    images: [
      { src: `${eventDesign}/lombakan-feeds-cover.png`, alt: "Lombakan event feed cover", fit: "contain" },
      { src: `${eventDesign}/lombakan-feeds.png`, alt: "Lombakan event feed design", fit: "contain" },
      { src: `${eventDesign}/lombakan-mascot.png`, alt: "Lombakan event mascot", fit: "contain" },
      { src: `${eventDesign}/lombakan-vbg1.png`, alt: "Lombakan virtual background 1", fit: "contain" },
      { src: `${eventDesign}/lombakan-vbg2.png`, alt: "Lombakan virtual background 2", fit: "contain" },
      { src: `${eventDesign}/lombakan-vbg3.png`, alt: "Lombakan virtual background 3", fit: "contain" },
    ],
    palette: "from-violet-200 via-indigo-100 to-white",
    tags: ["Event graphics", "Campaign", "Publication"],
  },
  {
    slug: "lombakan-mascot",
    title: "Event Mascot - Lombakan",
    category: "Illustration / Event Design",
    filter: "Event Design",
    description:
      "Friendly expressive mascot created with vector-based shapes, strong outlines, and consistent event identity to represent an energetic competitive spirit.",
    image: `${eventDesign}/lombakan-mascot.png`,
    images: [
      { src: `${eventDesign}/lombakan-mascot.png`, alt: "Lombakan mascot illustration", fit: "contain" },
    ],
    palette: "from-fuchsia-100 via-violet-100 to-white",
    tags: ["Mascot", "Illustration", "Figma"],
  },
  {
    slug: "lombakan-virtual-background",
    title: "Virtual Background - Lombakan",
    category: "Event Graphic Design",
    filter: "Event Design",
    description:
      "Virtual background series for online event sessions with consistent color scheme, typography, and graphic elements for a professional digital presence.",
    image: `${eventDesign}/lombakan-vbg1.png`,
    images: [
      { src: `${eventDesign}/lombakan-vbg1.png`, alt: "Lombakan virtual background option 1", fit: "contain" },
      { src: `${eventDesign}/lombakan-vbg2.png`, alt: "Lombakan virtual background option 2", fit: "contain" },
      { src: `${eventDesign}/lombakan-vbg3.png`, alt: "Lombakan virtual background option 3", fit: "contain" },
    ],
    palette: "from-purple-100 via-white to-sky-100",
    tags: ["Virtual background", "Online event", "Brand consistency"],
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
