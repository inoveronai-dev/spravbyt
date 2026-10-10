import { ArrowUpRight } from "lucide-react";

import { ArchitecturalVisual } from "@/components/architectural-visual";
import { Reveal } from "@/components/reveal";
import { about } from "@/lib/content";

export function AboutSection() {
  return (
    <section
      id="o-spolocnosti"
      className="section-space border-b border-border bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2
              id="about-heading"
              className="mt-4 max-w-xl font-heading text-[clamp(1.9rem,3.8vw,3rem)] font-semibold tracking-[-0.03em] text-charcoal"
            >
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.methods.map((method, index) => (
              <Reveal
                key={method.number}
                delay={(Math.min(index + 1, 2) as 1 | 2)}
              >
                <div className="border border-border bg-background p-5">
                  <span className="font-heading text-sm font-semibold tracking-[0.12em] text-brand">
                    {method.number}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-charcoal">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    {method.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <a
              href={about.moreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal link-underline"
            >
              {about.moreLabel}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Reveal>
        </div>

        <Reveal delay={2} className="lg:justify-self-end lg:w-full lg:max-w-[30rem]">
          <ArchitecturalVisual variant="about" label="Od roku 1996" />
        </Reveal>
      </div>
    </section>
  );
}
