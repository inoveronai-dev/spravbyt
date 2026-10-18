"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import { parallaxCta } from "@/lib/content";

/**
 * Mid-page cinematic band — isolated from hero parallax.
 * Oversized clipped layer + clamped translate3d; native scroll only.
 */
/** Portion of available layer travel used across the band's pass through the viewport. */
const TRAVEL_RATIO = 0.62;

export function ParallaxCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)"
    );

    let frame = 0;
    let lastY = 0;

    layer.style.transform = "translate3d(0, 0, 0)";

    const targetY = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom <= 0 || rect.top >= viewH) return lastY;

      const clipH = section.clientHeight;
      const layerH = layer.offsetHeight;
      const maxShift = Math.max(0, Math.floor(layerH - clipH - 2));

      // Progress while the band crosses the viewport (0 → 1).
      const progress = Math.min(
        Math.max((viewH - rect.top) / (viewH + clipH), 0),
        1
      );
      return Math.min(Math.round(progress * maxShift * TRAVEL_RATIO), maxShift);
    };

    const applyY = (y: number) => {
      lastY = y;
      layer.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const update = () => {
      frame = 0;
      if (motionQuery.matches || !desktopQuery.matches) {
        applyY(0);
        return;
      }
      applyY(targetY());
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    motionQuery.addEventListener("change", requestUpdate);
    desktopQuery.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      motionQuery.removeEventListener("change", requestUpdate);
      desktopQuery.removeEventListener("change", requestUpdate);
      layer.style.transform = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="zaujem-o-spravu"
      className="cta-parallax relative flex min-h-[22rem] items-center overflow-hidden bg-charcoal sm:min-h-[26rem] lg:min-h-[30rem] xl:min-h-[32rem]"
      aria-labelledby="parallax-cta-heading"
    >
      <div className="cta-parallax-clip absolute inset-0 overflow-hidden">
        <div ref={layerRef} className="cta-parallax-layer">
          <Image
            src={parallaxCta.imageSrc}
            alt={parallaxCta.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-[center_40%] sm:object-[center_42%]"
            priority={false}
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, rgba(22,42,34,0.78) 0%, rgba(22,42,34,0.55) 38%, rgba(22,42,34,0.28) 68%, rgba(22,42,34,0.18) 100%),
            linear-gradient(180deg, rgba(28,36,32,0.35) 0%, rgba(28,36,32,0.12) 42%, rgba(28,36,32,0.48) 100%)
          `,
        }}
      />

      <div className="container-page relative z-10 py-14 sm:py-16 lg:py-[4.5rem]">
        <div className="max-w-xl lg:max-w-2xl">
          <h2
            id="parallax-cta-heading"
            className="display-heading text-[clamp(1.85rem,3.6vw,3.15rem)] leading-[1.15] tracking-[-0.02em] text-white"
          >
            {parallaxCta.headingBefore}
            <span className="text-brand">{parallaxCta.headingAccent}</span>
            {parallaxCta.headingAfter}
          </h2>

          <Link
            href={parallaxCta.ctaHref}
            className="group mt-7 inline-flex items-center gap-2.5 border-b border-brand/70 pb-1 text-[0.95rem] font-semibold tracking-[0.02em] text-white transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:mt-8 sm:text-base"
          >
            {parallaxCta.ctaLabel}
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
