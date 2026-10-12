"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
      className="border-b border-border bg-mist"
      aria-labelledby="services-heading"
    >
      <div className="container-page section-space">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{services.eyebrow}</p>
              <h2
                id="services-heading"
                className="mt-3 max-w-lg font-heading text-[clamp(1.9rem,3.5vw,2.85rem)] font-semibold tracking-[-0.03em] text-charcoal"
              >
                {services.heading}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                {services.supporting}
              </p>
            </Reveal>

            <Reveal delay={1}>
              <Accordion className="mt-9 border-t border-charcoal/10">
                {services.items.map((item) => (
                  <AccordionItem
                    key={item.number}
                    value={item.number}
                    className="border-b border-charcoal/10"
                  >
                    <AccordionTrigger className="group/accordion-trigger rounded-none py-5 hover:no-underline focus-visible:ring-brand/40 sm:py-6 [&_[data-slot=accordion-trigger-icon]]:text-charcoal/40">
                      <span className="grid w-full grid-cols-[auto_1fr] items-center gap-4 pr-2 text-left sm:gap-5">
                        <span className="font-heading text-[clamp(1.85rem,2.8vw,2.55rem)] font-semibold leading-none tracking-tight text-forest/25 transition-colors group-hover/accordion-trigger:text-brand group-aria-expanded/accordion-trigger:text-brand">
                          {item.number}
                        </span>
                        <span>
                          <span className="block font-heading text-lg font-semibold tracking-tight text-charcoal sm:text-xl">
                            {item.title}
                          </span>
                          <span className="mt-1.5 block text-sm font-normal leading-relaxed text-ink-muted">
                            {item.description}
                          </span>
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <ul className="ml-[calc(2.25rem+1rem)] space-y-2 border-l-2 border-brand/35 pl-5 text-sm leading-relaxed text-ink-muted sm:ml-[calc(2.75rem+1.25rem)]">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-[calc(2.25rem+1rem)] mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal link-underline sm:ml-[calc(2.75rem+1.25rem)]"
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
            <figure className="relative w-full overflow-hidden rounded-2xl bg-mist">
              <div className="relative aspect-[4/5] min-h-[22rem] w-full lg:min-h-[34rem]">
                <Image
                  src="/spravbyt-office.png"
                  alt="Sídlo SPRAVBYT s.r.o. — prevádzka na prízemí bytového domu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-[center_62%]"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
