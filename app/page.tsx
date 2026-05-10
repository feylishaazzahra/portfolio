import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#fbf7ff] text-violet-950">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceTimeline />
      <FeaturedProject />
      <ProjectGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
