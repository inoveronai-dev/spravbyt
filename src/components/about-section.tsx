import { ArrowUpRight } from "lucide-react";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { about } from "@/lib/content";

export function AboutSection() {
  return (
    <section
      id="o-spolocnosti"
      className="border-b border-border bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-page section-space">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2
                id="about-heading"
                className="mt-4 max-w-xl font-heading text-[clamp(1.9rem,3.6vw,2.85rem)] font-semibold tracking-[-0.03em] text-charcoal"
              >
                {about.heading}
              </h2>
            </Reveal>

            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <Reveal key={paragraph.slice(0, 28)}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {about.methods.map((method, index) => (
                <Reveal
                  key={method.number}
                  delay={(Math.min(index + 1, 2) as 1 | 2)}
                >
                  <div className="border border-border bg-brand-soft/70 p-5 sm:p-6">
                    <span className="font-heading text-3xl font-semibold leading-none tracking-tight text-brand/60">
                      {method.number}
                    </span>
                    <h3 className="mt-4 font-heading text-base font-semibold tracking-tight text-charcoal sm:text-lg">
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

          <Reveal delay={2}>
            <MediaSlot
              variant="landscape"
              label="Priestor pre fotografiu sídla SPRAVBYT"
              className="w-full"
              aspectClassName="aspect-[5/4] lg:min-h-[26rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
