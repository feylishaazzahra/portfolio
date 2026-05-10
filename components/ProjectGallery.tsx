"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from "@/data/projects";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

  const selectedImages = selectedProject?.images ?? [];
  const selectedImage = selectedImages[activeImageIndex];

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? selectedImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === selectedImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-lavender-300/26 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
              Project Gallery
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-violet-950 sm:text-5xl">
              A selected archive of visual systems, campaigns, UI concepts, and
              event identities.
            </h2>
          </div>

          <div className="relative max-w-full">
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 rounded-l-full bg-gradient-to-r from-lavender-50 to-transparent lg:hidden" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 rounded-r-full bg-gradient-to-l from-lavender-50 to-transparent lg:hidden" />
            <div
              className="liquid-glass glass-scrollbar flex max-w-full gap-2 overflow-x-auto rounded-full p-2 lg:max-w-[620px] lg:flex-wrap lg:overflow-visible lg:rounded-[1.6rem]"
              aria-label="Project filters"
            >
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    activeFilter === filter
                      ? "bg-violet-950 text-white shadow-lg shadow-violet-900/20"
                      : "text-violet-950/68 hover:bg-white/72 hover:text-violet-950"
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project) => {
              const preview = project.images[0];

              return (
                <motion.button
                  layout
                  key={project.slug}
                  type="button"
                  onClick={() => openProject(project)}
                  initial={false}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="liquid-glass group overflow-hidden rounded-[1.9rem] p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(119,60,167,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  aria-label={`Open ${project.title} project details`}
                >
                  <div
                    className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.45rem] bg-gradient-to-br ${project.palette} p-4`}
                  >
                    <img
                      src={preview.src}
                      alt={preview.alt}
                      className={`h-full w-full transition duration-700 group-hover:scale-[1.03] ${
                        preview.fit === "cover" ? "object-cover" : "object-contain"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/38 via-transparent to-white/10" />
                    <span className="liquid-glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-violet-950">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-xl font-semibold leading-tight text-violet-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-violet-950/68">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/54 px-3 py-1 text-xs font-semibold text-violet-950/62"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {selectedProject && selectedImage ? (
          <motion.div
            className="fixed inset-0 z-[80] overflow-y-auto bg-violet-950/58 px-4 py-6 backdrop-blur-xl sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="liquid-glass-strong relative mx-auto grid max-w-6xl gap-6 rounded-[2rem] p-4 text-violet-950 sm:p-6 lg:grid-cols-[1.05fr_0.75fr]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/72 text-violet-950 shadow-lg backdrop-blur-xl transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="min-w-0">
                <div
                  className={`relative grid min-h-[360px] place-items-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${selectedProject.palette} p-4 sm:min-h-[560px] sm:p-8`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={selectedImage.src}
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className={`max-h-[72vh] w-full ${
                        selectedImage.fit === "cover"
                          ? "h-full object-cover"
                          : "object-contain"
                      }`}
                      initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {selectedImages.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/72 text-violet-950 shadow-lg backdrop-blur-xl transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        aria-label="Show previous image"
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/72 text-violet-950 shadow-lg backdrop-blur-xl transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        aria-label="Show next image"
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </>
                  ) : null}
                </div>

                {selectedImages.length > 1 ? (
                  <div className="glass-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2">
                    {selectedImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`grid h-20 w-24 shrink-0 place-items-center rounded-2xl border p-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                          activeImageIndex === index
                            ? "border-violet-400 bg-white/88"
                            : "border-white/60 bg-white/48 hover:bg-white/72"
                        }`}
                        aria-label={`Show gallery image ${index + 1}`}
                      >
                        <img
                          src={image.src}
                          alt=""
                          className="h-full w-full object-contain"
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col justify-center p-2 lg:p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
                  {selectedProject.category}
                </p>
                <h3
                  id="project-dialog-title"
                  className="mt-4 text-3xl font-semibold leading-tight text-violet-950 sm:text-4xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-violet-950/72">
                  {selectedProject.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-xs font-semibold text-violet-950/68"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm font-semibold text-violet-950/56">
                  {activeImageIndex + 1} / {selectedImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
