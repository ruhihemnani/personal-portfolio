"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
          {profile.name}
        </h1>

        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-muted mb-8 max-w-[38ch]">
          {profile.tagline}
        </p>

        <p className="text-lg text-foreground/90 max-w-[62ch] mb-10 leading-relaxed">
          {profile.heroBio}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent-strong transition-colors"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 hover:text-accent-strong transition-colors"
          >
            <Mail size={16} strokeWidth={1.75} />
            {profile.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} strokeWidth={1.75} />
            {profile.location}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
