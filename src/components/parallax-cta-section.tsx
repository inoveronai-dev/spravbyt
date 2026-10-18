import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { parallaxCta } from "@/lib/content";

/**
 * Mid-page cinematic band — CSS window parallax.
 * clip-path on the section + md:fixed background (no JS translate).
 */
export function ParallaxCtaSection() {
  return (
    <section
      id="zaujem-o-spravu"
      className="relative h-[340px] bg-charcoal [clip-path:inset(0)] sm:h-[420px] lg:h-[460px]"
      aria-labelledby="parallax-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 md:fixed md:inset-0 motion-reduce:!absolute motion-reduce:!inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 scale-[1.1]">
          <Image
            src={parallaxCta.imageSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(22,42,34,0.78)] via-[rgba(22,42,34,0.45)] to-transparent sm:from-[rgba(22,42,34,0.72)] sm:via-[rgba(22,42,34,0.35)] md:via-[rgba(22,42,34,0.28)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex h-full items-center justify-start pl-[8%] pr-6 sm:pl-[12%] sm:pr-8 lg:pl-[14%]">
        <div className="w-full max-w-[34rem] text-left lg:max-w-[38rem]">
          <h2
            id="parallax-cta-heading"
            className="display-heading text-[clamp(1.85rem,3.4vw,3.05rem)] leading-[1.15] tracking-[-0.02em] text-white [text-shadow:0_2px_28px_rgb(0_0_0_/_0.4)]"
          >
            {parallaxCta.headingBefore}
            <span className="text-brand">{parallaxCta.headingAccent}</span>
            {parallaxCta.headingAfter}
          </h2>

          <Link
            href={parallaxCta.ctaHref}
            className="group mt-7 inline-flex items-center gap-2 border-b border-brand/55 pb-1 text-base font-medium tracking-wide text-white transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 [text-shadow:0_1px_16px_rgb(0_0_0_/_0.35)] sm:text-[1.05rem]"
          >
            {parallaxCta.ctaLabel}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
