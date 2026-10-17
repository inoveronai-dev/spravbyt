"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Isolated hero parallax test.
 * Desktop: scroll-linked translate on a clipped viewport-tall layer (Lenis-safe).
 * Mobile / reduced-motion: disabled — normal cover image.
 */
export function HeroSection() {
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

    const reset = () => {
      layer.style.transform = "";
      section.classList.remove("hero-parallax-active");
    };

    const update = () => {
      frame = 0;

      if (motionQuery.matches || !desktopQuery.matches) {
        reset();
        return;
      }

      const rect = section.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
        return;
      }

      section.classList.add("hero-parallax-active");
      // Near-stationary relative to the viewport (subtle fixed-background feel).
      layer.style.transform = `translate3d(0, ${-rect.top}px, 0)`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    motionQuery.addEventListener("change", requestUpdate);
    desktopQuery.addEventListener("change", requestUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      motionQuery.removeEventListener("change", requestUpdate);
      desktopQuery.removeEventListener("change", requestUpdate);
      reset();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="uvod"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div ref={layerRef} className="hero-parallax-layer">
          <Image
            src="/banska-bystrica-hero.png"
            alt="Námestie SNP v Banskej Bystrici pri západe slnka"
            fill
            priority
            sizes="100vw"
            className="hero-photo-zoom object-cover object-[center_42%] sm:object-center"
          />
        </div>
      </div>

      {/* Layered readability overlay — keep sunset and architecture visible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(32,37,34,0.42) 0%, rgba(32,37,34,0.18) 28%, rgba(32,37,34,0.34) 52%, rgba(32,37,34,0.62) 78%, rgba(32,37,34,0.78) 100%),
            radial-gradient(ellipse 70% 55% at 50% 58%, rgba(32,37,34,0.45), transparent 70%)
          `,
        }}
      />

      <div className="container-page relative z-10 flex w-full flex-col items-center px-5 pb-[18vh] pt-[34vh] text-center sm:pb-[20vh] sm:pt-[36vh]">
        <div className="flex max-w-[52rem] flex-col items-center">
          <h1
            id="hero-heading"
            className="hero-enter-heading font-heading text-[clamp(1.45rem,2.8vw,2.55rem)] font-semibold uppercase leading-[1.15] tracking-[0.18em] text-white sm:tracking-[0.22em] md:whitespace-nowrap"
          >
            Správa bytových domov
          </h1>
          <p className="hero-enter-body mt-4 text-[clamp(0.95rem,1.35vw,1.125rem)] font-normal leading-relaxed tracking-[0.01em] text-white/90 sm:mt-5">
            Na ktorú sa môžete{" "}
            <span className="text-brand">spoľahnúť</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
