import { Mail } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface border-t border-border">
      <Reveal className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl mb-4 max-w-[16ch]">
          Let&rsquo;s connect.
        </h2>
        <p className="text-muted max-w-[52ch] mb-9">
          Open to sales, marketing, and account management roles — reach out
          by email or LinkedIn.
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2.5 text-lg text-foreground hover:text-accent-strong transition-colors"
          >
            <Mail size={19} strokeWidth={1.75} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-lg text-foreground hover:text-accent-strong transition-colors"
          >
            <LinkedinIcon size={19} />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <div className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-6 text-xs text-muted-2">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </div>
    </section>
  );
}
