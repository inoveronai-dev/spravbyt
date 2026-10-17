import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export function LocationMapSection() {
  return (
    <section
      id="mapa"
      className="border-b border-border bg-surface"
      aria-labelledby="mapa-heading"
    >
      <div className="container-page section-space">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="mapa-heading"
              className="display-heading text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] text-charcoal"
            >
              Kde nás nájdete?
            </h2>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              {site.addressLines[0]}, {site.addressLines[1]}
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-mist">
            <iframe
              title="Mapa — SPRAVBYT s.r.o., Dlhá ulica 2039/2, Banská Bystrica"
              src={site.mapsEmbedSrc}
              className="block h-[min(70vw,22rem)] w-full border-0 sm:h-[28rem] lg:h-[33rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-8 flex justify-center">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-7 text-sm font-semibold text-charcoal transition-colors hover:border-forest/30 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              Otvoriť v Google Maps
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
