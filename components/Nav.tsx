"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-serif text-lg text-foreground"
            onClick={() => setOpen(false)}
          >
            {profile.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent-strong transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeHref}
              className="text-sm border border-border-strong rounded-sm px-3 py-1.5 text-foreground hover:border-accent hover:text-accent-strong transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="sm:hidden p-2 -mr-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="sm:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-4xl px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeHref}
              className="text-base text-accent-strong"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
