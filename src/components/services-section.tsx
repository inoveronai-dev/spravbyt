"use client";

import { ArrowUpRight } from "lucide-react";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

            <Reveal delay={1}>
              <Accordion className="mt-10 border-t border-charcoal/10">
                {services.items.map((item) => (
                  <AccordionItem
                    key={item.number}
                    value={item.number}
                    className="border-b border-charcoal/10"
                  >
                    <AccordionTrigger className="group/accordion-trigger rounded-none py-6 hover:no-underline focus-visible:ring-brand/40 sm:py-7">
                      <span className="grid w-full grid-cols-[auto_1fr] items-start gap-4 pr-3 text-left sm:gap-6">
                        <span className="font-heading text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-none tracking-tight text-brand/55 transition-colors group-hover/accordion-trigger:text-brand group-aria-expanded/accordion-trigger:text-brand">
                          {item.number}
                        </span>
                        <span>
                          <span className="block font-heading text-lg font-semibold tracking-tight text-charcoal sm:text-xl">
                            {item.title}
                          </span>
                          <span className="mt-1.5 block text-sm font-normal leading-relaxed text-ink-muted sm:text-[0.95rem]">
                            {item.description}
                          </span>
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <ul className="ml-[calc(2.5rem+1rem)] space-y-2.5 border-l-2 border-brand/30 pl-5 text-sm leading-relaxed text-ink-muted sm:ml-[calc(3rem+1.5rem)]">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-[calc(2.5rem+1rem)] mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal link-underline sm:ml-[calc(3rem+1.5rem)]"
                      >
                        Viac na stránke O nás
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
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
