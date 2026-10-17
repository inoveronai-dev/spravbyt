"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Stable hero parallax:
 * - Outer layer: scroll translate only (GPU).
 * - Image: entrance zoom only (separate transform).
 * - Parallax waits until zoom finishes so the first post-load scroll
 *   does not fight the scale animation (that was the initial jump).
 * - If the user already scrolled during the intro, ease to the target
 *   instead of snapping.
 */
const PARALLAX_FACTOR = 0.28;
const ZOOM_FALLBACK_MS = 2400;
const EASE_MS = 220;

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
    let easeFrame = 0;
    let lastY = 0;
    let parallaxReady = false;
    let zoomDone = false;
    let readyTimer = 0;
    let easeStart = 0;
    let easeFrom = 0;
    let easeTo = 0;

    // Warm the compositor layer before any scroll-driven updates.
    layer.style.transform = "translate3d(0, 0, 0)";

    const targetY = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom <= 0 || rect.top >= viewH) return lastY;

      const clipH = section.clientHeight;
      const layerH = layer.offsetHeight;
      const maxShift = Math.max(0, Math.floor(layerH - clipH - 2));
      const scrolled = Math.min(Math.max(-rect.top, 0), clipH);
      return Math.min(Math.round(scrolled * PARALLAX_FACTOR), maxShift);
    };

    const applyY = (y: number) => {
      lastY = y;
      layer.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const tickEase = (now: number) => {
      const t = Math.min(1, (now - easeStart) / EASE_MS);
      // Smoothstep — short ease so the first engagement never snaps.
      const s = t * t * (3 - 2 * t);
      applyY(Math.round(easeFrom + (easeTo - easeFrom) * s));
      if (t < 1) {
        easeFrame = window.requestAnimationFrame(tickEase);
      } else {
        easeFrame = 0;
      }
    };

    const update = () => {
      frame = 0;

      if (motionQuery.matches || !desktopQuery.matches || !parallaxReady) {
        if (!parallaxReady) applyY(0);
        return;
      }

      // Skip direct updates while the intro ease is running.
      if (easeFrame) return;

      const y = targetY();
      if (y === lastY) return;
      applyY(y);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const enableParallax = () => {
      if (parallaxReady || motionQuery.matches || !desktopQuery.matches) {
        return;
      }

      parallaxReady = true;
      const next = targetY();

      if (next === 0 || prefersInstant()) {
        applyY(next);
        return;
      }

      // User already scrolled during the zoom intro — ease instead of jumping.
      easeFrom = lastY;
      easeTo = next;
      easeStart = performance.now();
      if (easeFrame) window.cancelAnimationFrame(easeFrame);
      easeFrame = window.requestAnimationFrame(tickEase);
    };

    const prefersInstant = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const photo = section.querySelector<HTMLElement>(".hero-photo-zoom");

    const clearZoomTransform = () => {
      if (!photo) return;
      // Drop the finished scale animation so only the outer parallax
      // transform remains — avoids a composed-matrix pop on first scroll.
      photo.style.animation = "none";
      photo.style.transform = "none";
    };

    const onZoomEnd = (event: AnimationEvent) => {
      if (event.animationName !== "hero-zoom-out") return;
      zoomDone = true;
      clearZoomTransform();
      enableParallax();
    };

    photo?.addEventListener("animationend", onZoomEnd);

    if (motionQuery.matches) {
      clearZoomTransform();
      applyY(0);
    } else {
      readyTimer = window.setTimeout(() => {
        if (!zoomDone) {
          clearZoomTransform();
          enableParallax();
        }
      }, ZOOM_FALLBACK_MS);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    motionQuery.addEventListener("change", requestUpdate);
    desktopQuery.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (easeFrame) window.cancelAnimationFrame(easeFrame);
      if (readyTimer) window.clearTimeout(readyTimer);
      photo?.removeEventListener("animationend", onZoomEnd);
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
      id="uvod"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal"
      aria-labelledby="hero-heading"
    >
      <div className="hero-parallax-clip absolute inset-0 overflow-hidden">
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

      <div className="container-page relative z-10 flex w-full flex-col items-center px-5 pb-[20vh] pt-[30vh] text-center sm:pb-[22vh] sm:pt-[calc(36vh-5.75rem)]">
        <div className="flex max-w-[52rem] flex-col items-center">
          <h1
            id="hero-heading"
            className="hero-enter-heading font-heading text-[clamp(1.45rem,2.8vw,2.55rem)] font-semibold uppercase leading-[1.15] tracking-[0.18em] text-white sm:tracking-[0.22em] md:whitespace-nowrap"
          >
            Správa bytových domov
          </h1>
          <p className="hero-enter-body mt-3.5 text-[clamp(1.2rem,1.7vw,1.4rem)] font-normal leading-relaxed tracking-[0.01em] text-white/90 sm:mt-4">
            Na ktorú sa môžete{" "}
            <span className="font-semibold text-[#b8d84a]">spoľahnúť.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
