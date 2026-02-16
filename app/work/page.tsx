import type { Metadata } from "next";
import Image from "next/image";
import ProjectFilter from "@/components/ProjectFilter";
import ContactSection from "@/components/ContactSection";
import projects from "@/data/projects.json";
import type { Project } from "@/types/project";

export const metadata: Metadata = {
  title: "My Work",
  description:
    "Explore the UX strategy, experience design, and branding projects of Mark Sutcliffe.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square max-w-xs mx-auto md:mx-0 overflow-hidden rounded-2xl">
                <Image
                  src="/images/work-portrait.jpg"
                  alt="Mark Sutcliffe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 25vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="magenta-label">Portfolio</span>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight">
                Projects in
                <br />
                <span className="text-magenta">Design</span>
              </h1>
              <p className="text-gray-300 mt-6 text-lg max-w-xl leading-relaxed">
                A collection of UX strategy, experience design, and branding projects
                spanning enterprise platforms, consumer products, and creative brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects with filters */}
      <section className="py-20 md:py-28" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="projects-heading" className="sr-only">
            All Projects
          </h2>
          <ProjectFilter projects={projects as Project[]} />
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
