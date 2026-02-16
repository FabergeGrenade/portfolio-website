"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/project";

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div>
      {/* Filter buttons */}
      <div
        className="flex flex-wrap gap-3 mb-12"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors min-h-[44px] ${
              activeFilter === cat
                ? "bg-magenta text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-pressed={activeFilter === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project count */}
      <p className="text-sm text-gray-500 mb-8" aria-live="polite">
        Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Project list */}
      <div className="space-y-20 md:space-y-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-20 md:space-y-28"
          >
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                reverse={index % 2 !== 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
