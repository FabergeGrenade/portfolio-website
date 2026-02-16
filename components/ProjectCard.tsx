"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
  reverse?: boolean;
}

export default function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-12 items-center`}
    >
      <div className="w-full md:w-3/5 relative aspect-[16/10] bg-gray-100 overflow-hidden rounded-2xl group">
        <Image
          src={project.thumbnail}
          alt={`${project.title} project preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

      <div className="w-full md:w-2/5 space-y-4">
        <span className="magenta-label">{project.category}</span>
        <h3 className="font-heading text-3xl md:text-4xl font-bold">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-magenta hover:text-magenta-dark transition-colors group/link"
        >
          See More
          <span
            className="inline-block transition-transform group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
