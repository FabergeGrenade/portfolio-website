import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import projects from "@/data/projects.json";
import type { Project } from "@/types/project";

const allProjects = projects as Project[];

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(projectIndex + 1) % allProjects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={project.heroImage}
            alt={`${project.title} hero image`}
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="magenta-label">{project.category}</span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
              {project.title}
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute right-8 bottom-8 flex-col items-center gap-3">
          <span className="vertical-text text-gray-400">Scroll for more</span>
          <div className="w-px h-16 bg-magenta" />
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Client</p>
              <p className="font-heading text-lg font-bold mt-1">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Role</p>
              <p className="font-heading text-lg font-bold mt-1">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Year</p>
              <p className="font-heading text-lg font-bold mt-1">{project.year}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Tags</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium uppercase tracking-wider rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {project.sections.map((section, i) => (
        <section
          key={section.title}
          className={`py-16 md:py-24 ${i % 2 !== 0 ? "bg-light-gray" : ""}`}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-2">
                {section.title}
              </h2>
              <div className="w-12 h-1 bg-magenta rounded mb-8" />
              <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                {section.content.split("\n").map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>

            {section.images && section.images.length > 0 && (
              <AnimatedSection className="mt-12" delay={0.2}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                      <Image
                        src={img}
                        alt={`${project.title} - ${section.title} image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      ))}

      {/* Next Project */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-4">
            Next Project
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="font-heading text-3xl md:text-5xl font-bold hover:text-magenta transition-colors"
          >
            {nextProject.title}
          </Link>
          <div className="w-16 h-1 bg-magenta rounded mx-auto mt-6" />
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
