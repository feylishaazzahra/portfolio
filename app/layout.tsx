import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Feylisha Azzahra - Creative Design Portfolio",
    template: "%s | Feylisha Azzahra",
  },
  description:
    "Creative design portfolio for Feylisha Azzahra, showcasing visual identities, social media assets, UI/UX work, photography interests, and freelance design experience.",
  keywords: [
    "Feylisha Azzahra",
    "creative designer",
    "graphic designer",
    "UI UX portfolio",
    "visual design",
    "social media design",
  ],
  authors: [{ name: "Feylisha Azzahra" }],
  openGraph: {
    title: "Feylisha Azzahra - Creative Design Portfolio",
    description:
      "Visual design, UI/UX concepts, social media assets, branding, print design, and event graphics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
