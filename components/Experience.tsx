import { Download } from "lucide-react";
import { experience, earlierRoles } from "@/data/experience";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal className="border-t border-border pt-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-10">
          <div>
            <h2 className="text-3xl mb-3">Experience</h2>
            <p className="text-muted max-w-[60ch]">
              A career built on account growth, client relationships, and
              go-to-market execution — most recently paired with an MS in
              Business Analytics at Purdue.
            </p>
          </div>

          <a
            href={profile.resumeHref}
            download="Ruhi-Hemnani-Resume.pdf"
            className="inline-flex items-center gap-2 text-sm border border-border-strong rounded-sm px-4 py-2 text-foreground hover:border-accent hover:text-accent-strong transition-colors shrink-0 self-start"
          >
            <Download size={15} strokeWidth={1.75} />
            Download Resume
          </a>
        </div>

        {/* Primary timeline */}
        <ol className="relative border-l border-border pl-8 flex flex-col gap-10">
          {experience.map((entry) => (
            <li key={entry.id} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-[9px] w-[9px] rounded-full bg-accent"
                aria-hidden="true"
              />
              <p className="text-xs text-muted-2 mb-1">{entry.dates}</p>
              <h3 className="text-xl leading-snug mb-0.5">{entry.role}</h3>
              <p className="text-sm text-accent-strong mb-3">{entry.org}</p>
              <ul className="flex flex-col gap-1.5">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/90 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-muted-2"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Earlier roles, compact */}
        <div className="mt-14 pt-8 border-t border-border">
          <h3 className="text-sm text-muted-2 mb-4">Earlier roles</h3>
          <ul className="flex flex-col gap-2.5">
            {earlierRoles.map((role) => (
              <li
                key={`${role.org}-${role.dates}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm"
              >
                <span>
                  <span className="text-foreground">{role.role}</span>
                  <span className="text-muted">, {role.org}</span>
                </span>
                <span className="text-muted-2">{role.dates}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
