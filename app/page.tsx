import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";
import projects from "@/data/projects.json";
import type { Project } from "@/types/project";

const featuredProjects = (projects as Project[]).slice(0, 4);

const clients = [
  "Capcom",
  "Blue Prism",
  "Fexillon",
  "Wall Beard",
  "XPod",
  "Forlorn Hope",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5 relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Mark Sutcliffe"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
              </div>
            </div>

            <div className="w-full md:w-3/5 space-y-6">
              <span className="magenta-label">Mark Sutcliffe</span>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                UX Strategy
                <br />
                <span className="text-magenta">&amp; Design</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Creating meaningful digital experiences through strategic thinking
                and human-centered design.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/work"
                  className="inline-flex items-center bg-magenta text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-magenta-dark transition-colors min-h-[44px] rounded-lg"
                >
                  View My Work
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center border border-white text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors min-h-[44px] rounded-lg"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical SCROLL indicator */}
        <div className="hidden lg:flex absolute right-8 bottom-8 flex-col items-center gap-3">
          <span className="vertical-text text-gray-400">Scroll</span>
          <div className="w-px h-16 bg-magenta" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="magenta-label">About Me</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2">
                Designing With Purpose
              </h2>
              <div className="w-16 h-1 bg-magenta rounded mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I&apos;m a UX strategist and designer with over a decade of experience
                crafting digital experiences that connect brands with their audiences.
                My approach combines strategic thinking with creative execution to
                deliver solutions that are both beautiful and functional.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-magenta hover:text-magenta-dark transition-colors"
              >
                More About Me
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* UX Strategy Model */}
      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <AnimatedSection className="w-full md:w-1/2">
              <span className="magenta-label">My Approach</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2">
                UX Strategy Model
              </h2>
              <div className="w-16 h-1 bg-magenta rounded mb-8" />
              <p className="text-gray-600 leading-relaxed mb-4">
                My UX strategy model is built on a foundation of research,
                empathy, and iterative design. It ensures that every decision is
                informed by real user needs and business objectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From discovery through delivery, each phase builds upon the last,
                creating a cohesive experience that serves both users and stakeholders.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full md:w-1/2" delay={0.2}>
              <div className="relative aspect-square bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
                <Image
                  src="/images/ux-strategy-model.png"
                  alt="UX Strategy Model diagram showing the iterative design process"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28" aria-labelledby="featured-projects-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="magenta-label">Selected Work</span>
            <h2
              id="featured-projects-heading"
              className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2"
            >
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-magenta rounded mx-auto" />
          </AnimatedSection>

          <div className="space-y-20 md:space-y-28">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link
              href="/work"
              className="inline-flex items-center bg-magenta text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-magenta-dark transition-colors min-h-[44px] rounded-lg"
            >
              View All Projects
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients & Collaborators */}
      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="magenta-label">Clients</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2">
              Clients &amp; Collaborators
            </h2>
            <div className="w-16 h-1 bg-magenta rounded mx-auto" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client}
                  className="text-center font-heading text-xl font-bold text-gray-400 hover:text-black transition-colors"
                >
                  {client}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
