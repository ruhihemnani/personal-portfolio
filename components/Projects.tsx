import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal className="border-t border-border pt-12">
        <h2 className="text-3xl mb-3">Projects</h2>
        <p className="text-muted mb-10 max-w-[60ch]">
          Marketing and sales campaigns run for clients across media,
          hospitality, legal, and technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
