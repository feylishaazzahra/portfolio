"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Camera, Mail, Palette, Sparkles } from "lucide-react";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { projects } from "@/data/projects";

const projectPreviews = projects.slice(0, 4);

const stats = [
  { value: "70+", label: "client orders" },
  { value: "11", label: "selected works" },
  { value: "3", label: "creative lanes" },
];

export default function Hero() {
  const [activePreview, setActivePreview] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 520, y: 220 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePreview((current) => (current + 1) % projectPreviews.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeProject = projectPreviews[activePreview];

  return (
    <section
      ref={heroRef}
      id="home"
      className="portfolio-noise relative isolate min-h-screen overflow-hidden bg-lavender-50 px-5 pb-16 pt-28 text-ink sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#fff7ff_0%,#f0e7ff_48%,#fffaf7_100%)]" />
      <motion.div
        className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full bg-fuchsia-400/22 blur-3xl"
        animate={{
          x: mousePosition.x - 144,
          y: mousePosition.y - 144,
        }}
        transition={{ type: "spring", damping: 34, stiffness: 160 }}
      />
      <motion.div
        className="absolute left-[8%] top-28 -z-10 h-44 w-44 rounded-[3rem] bg-violet-300/36 blur-3xl"
        animate={{ y: [0, 26, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-[12%] -z-10 h-56 w-56 rounded-full bg-lavender-400/28 blur-3xl"
        animate={{ x: [0, -34, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-112px)] lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-semibold text-violet-800 shadow-[0_12px_34px_rgba(126,34,206,0.12)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Crafting visual stories for brands and digital products
          </div>

          <h1 className="text-6xl font-semibold leading-[0.86] tracking-normal text-violet-950 sm:text-8xl lg:text-[7.8rem]">
            Feylisha
            <span className="block bg-gradient-to-r from-violet-700 via-fuchsia-500 to-lavender-500 bg-clip-text text-transparent">
              Azzahra
            </span>
          </h1>
          <p className="mt-6 text-2xl font-semibold text-fuchsia-700 sm:text-3xl">
            Creative Designer & UI/UX Enthusiast
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-violet-950/74 sm:text-lg">
            Designing visual identities, social media assets, and user-centered
            digital experiences.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/70 bg-white/48 p-4 shadow-[0_18px_50px_rgba(119,60,167,0.1)] backdrop-blur-xl"
              >
                <p className="text-2xl font-semibold text-violet-950">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-violet-950/54">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GlassButton
              size="lg"
              glassColor="oklch(0.42 0.19 300 / 28%)"
              className="text-violet-950"
              contentClassName="gap-2"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>View Projects</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </GlassButton>
            <GlassButton
              size="lg"
              glassColor="oklch(0.92 0.08 320 / 45%)"
              className="text-violet-950"
              contentClassName="gap-2"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Contact Me</span>
              <Mail className="h-5 w-5" aria-hidden="true" />
            </GlassButton>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[680px]"
        >
          <motion.div
            className="absolute -left-4 top-12 z-20 hidden rounded-[1.5rem] border border-white/70 bg-white/62 p-4 shadow-[0_26px_70px_rgba(126,34,206,0.18)] backdrop-blur-xl sm:block"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Palette className="h-6 w-6 text-fuchsia-600" aria-hidden="true" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-violet-950/60">
              Visual identity
            </p>
          </motion.div>
          <motion.div
            className="absolute -right-2 bottom-20 z-20 hidden rounded-full border border-white/70 bg-white/62 p-5 shadow-[0_26px_70px_rgba(147,51,234,0.18)] backdrop-blur-xl sm:block"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Camera className="h-7 w-7 text-violet-700" aria-hidden="true" />
          </motion.div>

          <div className="editorial-shadow relative rotate-[1.4deg] rounded-[2.5rem] border border-white/75 bg-white/38 p-3 backdrop-blur-2xl sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem] bg-violet-100 sm:aspect-[5/4]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={activeProject.image}
                  src={activeProject.image}
                  alt={`${activeProject.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  animate={{
                    clipPath: "inset(0 0% 0 0 round 30px)",
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    clipPath: "inset(0 0 0 100% round 30px)",
                    scale: 1.04,
                    rotate: 1.5,
                  }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/64 via-violet-950/10 to-white/10" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <span className="rounded-full border border-white/40 bg-white/24 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                  Featured preview
                </span>
                <span className="rounded-full border border-white/40 bg-white/24 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                  0{activePreview + 1}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/45 bg-white/24 p-5 text-white shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:w-80">
                <p className="text-sm font-semibold text-white/78">
                  {activeProject.category}
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight">
                  {activeProject.title}
                </h2>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {projectPreviews.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActivePreview(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-2 text-left shadow-sm transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    activePreview === index
                      ? "border-violet-300 bg-white/82"
                      : "border-white/65 bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Show ${project.title} preview`}
                >
                  <span
                    className={`absolute inset-x-2 top-2 h-1 rounded-full bg-gradient-to-r ${project.palette}`}
                  />
                  <img
                    src={project.image}
                    alt=""
                    className="mt-3 aspect-[4/3] w-full rounded-xl object-cover"
                    aria-hidden="true"
                  />
                  <span className="mt-2 block truncate text-xs font-semibold text-violet-950">
                    {project.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
