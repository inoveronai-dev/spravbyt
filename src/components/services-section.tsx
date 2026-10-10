import {
  ArrowUpRight,
  Building2,
  Calculator,
  Scale,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { services } from "@/lib/content";

const icons = {
  building: Building2,
  calculator: Calculator,
  wrench: Wrench,
  scale: Scale,
} as const;

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      className="section-space border-b border-border bg-background"
      aria-labelledby="services-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2
              id="services-heading"
              className="mt-4 font-heading text-[clamp(1.9rem,3.8vw,3rem)] font-semibold tracking-[-0.03em] text-charcoal"
            >
              {services.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {services.supporting}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                key={item.number}
                as="article"
                delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/20 hover:shadow-[0_18px_40px_rgba(32,37,34,0.06)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-heading text-3xl font-semibold tracking-tight text-brand">
                      {item.number}
                    </span>
                    <Icon
                      className="size-5 text-charcoal/35 transition-colors group-hover:text-brand"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-8 font-heading text-xl font-semibold tracking-tight text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal">
                    Viac informácií
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
