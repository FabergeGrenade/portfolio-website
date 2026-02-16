import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Mark Sutcliffe — UX Strategist and Designer with over a decade of experience in user experience strategy, design, and branding.",
};

const tools = [
  "Figma",
  "Sketch",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "InVision",
  "Miro",
  "Jira",
  "Confluence",
  "VS Code",
  "HTML/CSS",
];

const skills = [
  {
    title: "Experience Design",
    description: "Creating intuitive, engaging digital experiences that delight users.",
  },
  {
    title: "UX Strategy",
    description: "Aligning user needs with business goals through strategic planning.",
  },
  {
    title: "Branding",
    description: "Building cohesive brand identities that resonate with audiences.",
  },
  {
    title: "Research",
    description: "Uncovering insights through qualitative and quantitative methods.",
  },
  {
    title: "Prototyping",
    description: "Rapidly iterating on concepts to validate ideas early.",
  },
  {
    title: "Design Systems",
    description: "Creating scalable, consistent component libraries and guidelines.",
  },
];

const processSteps = [
  {
    label: "Brief",
    description: "Understanding the problem, stakeholders, and success criteria.",
  },
  {
    label: "Research",
    description: "User interviews, competitive analysis, and data gathering.",
  },
  {
    label: "Opportunities",
    description: "Identifying gaps and areas for innovation and improvement.",
  },
  {
    label: "Synthesis",
    description: "Translating research into actionable insights and design direction.",
  },
  {
    label: "Deploy / Deliver",
    description: "Bringing designs to life with development handoff and QA.",
  },
  {
    label: "Presentation",
    description: "Communicating outcomes and recommendations to stakeholders.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="magenta-label">About Me</span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight max-w-4xl">
            A designer from <span className="text-magenta">Manchester</span>,
            working across <span className="text-magenta">London</span>,{" "}
            <span className="text-magenta">Berlin</span> &amp; beyond.
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <AnimatedSection className="w-full md:w-2/5">
              <div className="relative max-w-sm mx-auto md:mx-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/about-portrait.jpg"
                    alt="Mark Sutcliffe portrait"
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 80vw, 30vw"
                    priority
                  />
                </div>
                {/* Overlaid quotes */}
                <div className="absolute top-8 -right-4 md:-right-8 bg-magenta text-white px-4 py-2 font-heading text-sm md:text-base italic">
                  &ldquo;Eat when hungry&rdquo;
                </div>
                <div className="absolute bottom-8 -left-4 md:-left-8 bg-magenta text-white px-4 py-2 font-heading text-sm md:text-base italic">
                  &ldquo;Sleep when tired&rdquo;
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="w-full md:w-3/5 space-y-6" delay={0.2}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold">
                A Little About Me
              </h2>
              <div className="w-16 h-1 bg-magenta" />
              <p className="text-gray-600 leading-relaxed text-lg">
                With over a decade of experience in UX strategy and design, I&apos;ve
                helped brands across the globe create meaningful digital experiences.
                My work spans enterprise platforms, consumer products, and everything
                in between.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                I believe that great design starts with understanding people. By
                combining research-driven insights with creative problem-solving, I
                create experiences that are not only beautiful but genuinely useful.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                When I&apos;m not designing, you&apos;ll find me exploring new cities,
                experimenting with photography, or diving into the latest design
                thinking literature.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-20 md:py-28 bg-light-gray" aria-labelledby="toolkit-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="magenta-label">Tools</span>
            <h2 id="toolkit-heading" className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2">
              My Toolkit
            </h2>
            <div className="w-16 h-1 bg-magenta mx-auto" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-white p-4 text-center font-medium text-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  {tool}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 md:py-28" aria-labelledby="skills-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="magenta-label">Expertise</span>
            <h2 id="skills-heading" className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2">
              What I Do
            </h2>
            <div className="w-16 h-1 bg-magenta mx-auto" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.title} delay={i * 0.1}>
                <div className="p-8 border border-gray-100 hover:border-magenta transition-colors group">
                  <div className="w-12 h-1 bg-magenta mb-6 group-hover:w-16 transition-all" />
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-black text-white" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="magenta-label">Process</span>
            <h2 id="process-heading" className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2">
              How I Work
            </h2>
            <div className="w-16 h-1 bg-magenta mx-auto" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.label} delay={i * 0.1}>
                <div className="relative pl-6 border-l-2 border-magenta">
                  <span className="text-magenta font-semibold text-sm uppercase tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-bold mt-2 mb-3">
                    {step.label}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
