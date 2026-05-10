"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFilters, projects, type ProjectFilter } from "@/data/projects";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

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

          <div
            className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-white/70 bg-white/62 p-2 shadow-[0_18px_60px_rgba(119,60,167,0.1)] backdrop-blur-xl"
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
                    : "text-violet-950/68 hover:bg-white hover:text-violet-950"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[1.9rem] border border-white/70 bg-white/62 p-3 shadow-[0_18px_70px_rgba(119,60,167,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(119,60,167,0.18)]"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-gradient-to-br ${project.palette}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/42 via-transparent to-white/10" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/36 px-3 py-1 text-xs font-semibold text-violet-950 backdrop-blur-xl">
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
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
