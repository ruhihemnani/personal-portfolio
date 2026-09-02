import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-border rounded-sm overflow-hidden bg-background hover:border-border-strong transition-colors flex flex-col">
      {/* Placeholder visual: monogram tile, swapped for a real image later */}
      <div className="aspect-[16/9] bg-accent-tint flex items-center justify-center">
        <span className="font-serif text-6xl text-accent-strong/70">
          {project.monogram}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl mb-2">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-sm bg-surface text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent-strong transition-colors mt-auto"
        >
          {project.linkLabel}
          <ExternalLink size={14} strokeWidth={1.75} />
        </a>
      </div>
    </article>
  );
}
