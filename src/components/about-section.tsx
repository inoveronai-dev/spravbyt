import { ArrowUpRight } from "lucide-react";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { about, portfolioFromONas } from "@/lib/content";

const metrics = [
  {
    value: portfolioFromONas.objectsLabel,
    label: portfolioFromONas.objectsCaption,
  },
  {
    value: portfolioFromONas.flatsLabel,
    label: portfolioFromONas.flatsCaption,
  },
  {
    value: portfolioFromONas.nonResidentialLabel,
    label: portfolioFromONas.nonResidentialCaption,
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="o-spolocnosti"
      className="border-b border-border bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-page section-space">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2
                id="about-heading"
                className="mt-4 max-w-xl font-heading text-[clamp(1.9rem,3.6vw,2.85rem)] font-semibold tracking-[-0.03em] text-charcoal"
              >
                {about.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-border py-6 sm:gap-6">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-tight text-brand">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-ink-muted sm:text-sm">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
                <p>
                  <span className="font-semibold text-charcoal">Založená</span>{" "}
                  {portfolioFromONas.foundedDate}
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Pôsobnosť</span>{" "}
                  {portfolioFromONas.area}
                </p>
              </div>
              <p className="mt-4 max-w-xl border-l-2 border-brand pl-4 text-sm leading-relaxed text-charcoal sm:text-base">
                <span className="font-semibold">{about.prioritiesLabel}: </span>
                {about.priorities}
              </p>
            </Reveal>

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
