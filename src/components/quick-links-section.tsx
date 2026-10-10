import {
  ArrowUpRight,
  Download,
  Droplets,
  Flame,
  LogIn,
  Newspaper,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { quickLinks } from "@/lib/content";

const icons = {
  "log-in": LogIn,
  download: Download,
  flame: Flame,
  droplets: Droplets,
  newspaper: Newspaper,
} as const;

export function QuickLinksSection() {
  return (
    <section
      id="rychly-pristup"
      className="section-space border-b border-border bg-brand-soft"
      aria-labelledby="quick-links-heading"
    >
      <div className="container-page">
        <Reveal>
          <h2
            id="quick-links-heading"
            className="max-w-xl font-heading text-[clamp(1.9rem,3.8vw,3rem)] font-semibold tracking-[-0.03em] text-charcoal"
          >
            {quickLinks.heading}
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {quickLinks.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                key={item.title}
                as="li"
                delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between border border-border/80 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/20 hover:shadow-[0_14px_32px_rgba(32,37,34,0.06)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-brand-soft text-charcoal">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <ArrowUpRight className="size-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-heading text-base font-semibold tracking-tight text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
