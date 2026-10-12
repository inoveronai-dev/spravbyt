import { ArrowUpRight } from "lucide-react";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      className="border-b border-border bg-brand-soft"
      aria-labelledby="services-heading"
    >
      <div className="container-page section-space">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">{services.eyebrow}</p>
              <h2
                id="services-heading"
                className="mt-4 max-w-lg font-heading text-[clamp(1.9rem,3.6vw,2.85rem)] font-semibold tracking-[-0.03em] text-charcoal"
              >
                {services.heading}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                {services.supporting}
              </p>
            </Reveal>

            <ul className="mt-10 border-t border-charcoal/10">
              {services.items.map((item, index) => (
                <Reveal
                  key={item.number}
                  as="li"
                  delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-charcoal/10 py-6 transition-colors hover:bg-white/45 sm:gap-6 sm:py-7"
                  >
                    <span className="font-heading text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-none tracking-tight text-brand/55 transition-colors group-hover:text-brand">
                      {item.number}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading text-lg font-semibold tracking-tight text-charcoal sm:text-xl">
                        {item.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                        {item.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-charcoal/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal"
                      aria-hidden
                    />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={2}>
            <MediaSlot
              variant="portrait"
              label="Priestor pre architektonickú fotografiu"
              className="w-full lg:min-h-[36rem]"
              aspectClassName="lg:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
