"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/lib/content";

const serviceVisuals = [
  {
    number: "01",
    src: "/service-vykon-spravy.png",
    alt: "Moderný bytový komplex — vizuál pre výkon správy",
    /* Wide landscape — pull framing back (wider frame), no zoom-in */
    objectPosition: "object-center",
    wideFrame: true,
  },
  {
    number: "02",
    src: "/service-ekonomicky-usek.png",
    alt: "Architektonický model a dokumenty — vizuál pre ekonomický úsek",
    /* Shift right so the calculator on the desk edge stays in frame */
    objectPosition: "object-[72%_48%]",
    wideFrame: false,
  },
  {
    number: "03",
    src: "/service-technicky-usek.png",
    alt: "Technik so tabletovým zariadením — vizuál pre technický úsek",
    objectPosition: "object-[center_28%]",
    wideFrame: false,
  },
  {
    number: "04",
    src: "/service-pravne-zalezitosti.png",
    alt: "Právna konzultácia nad dokumentmi — vizuál pre právne záležitosti",
    objectPosition: "object-[center_32%]",
    wideFrame: false,
  },
] as const;

const defaultService = serviceVisuals[0].number;

export function ServicesSection() {
  const [openValues, setOpenValues] = useState<string[]>([]);
  const [previewValue, setPreviewValue] = useState<string | null>(null);

  const activeNumber =
    previewValue ?? openValues[0] ?? defaultService;
  const activeVisual =
    serviceVisuals.find((v) => v.number === activeNumber) ??
    serviceVisuals[0];
  const widePreview = activeVisual.wideFrame;

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
                className="display-heading mt-4 max-w-[14ch] text-[clamp(2.4rem,5vw,3.85rem)] leading-[1.08] text-charcoal"
              >
                {services.heading}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                {services.supporting}
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div
                onMouseLeave={() => setPreviewValue(null)}
              >
                <Accordion
                  className="mt-9 border-t border-charcoal/10"
                  value={openValues}
                  onValueChange={(next) => {
                    setOpenValues(next);
                    if (next[0]) setPreviewValue(null);
                  }}
                >
                  {services.items.map((item) => (
                    <AccordionItem
                      key={item.number}
                      value={item.number}
                      className="border-b border-charcoal/10"
                      onMouseEnter={() => setPreviewValue(item.number)}
                      onFocusCapture={() => setPreviewValue(item.number)}
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
              </div>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <figure
              className="relative w-full overflow-hidden rounded-2xl bg-mist"
              aria-live="polite"
            >
              <div
                className={
                  widePreview
                    ? "relative aspect-[3/2] min-h-[18rem] w-full transition-[aspect-ratio,min-height] duration-500 ease-out lg:min-h-[28rem]"
                    : "relative aspect-[4/5] min-h-[22rem] w-full transition-[aspect-ratio,min-height] duration-500 ease-out lg:min-h-[34rem]"
                }
              >
                {serviceVisuals.map((visual, index) => {
                  const isActive = visual.number === activeNumber;
                  return (
                    <Image
                      key={visual.src}
                      src={visual.src}
                      alt={isActive ? visual.alt : ""}
                      fill
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      priority={index === 0}
                      aria-hidden={!isActive}
                      className={`object-cover ${visual.objectPosition} transition-[opacity,transform] duration-[400ms] ease-out motion-reduce:transition-none ${
                        isActive
                          ? "z-[1] scale-100 opacity-100"
                          : "z-0 scale-[1.018] opacity-0"
                      }`}
                    />
                  );
                })}
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
