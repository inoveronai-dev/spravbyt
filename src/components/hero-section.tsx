import Link from "next/link";

import { ArchitecturalVisual } from "@/components/architectural-visual";
import { hero } from "@/lib/content";

export function HeroSection() {
  return (
    <section
      id="uvod"
      className="relative overflow-hidden border-b border-border bg-background"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(160,196,59,0.14), transparent 34%), radial-gradient(circle at 88% 0%, rgba(52,59,54,0.08), transparent 28%)",
        }}
      />

      <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-20 xl:gap-20">
        <div className="max-w-xl xl:max-w-2xl">
          <p className="hero-enter-heading eyebrow text-charcoal-soft">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="hero-enter-heading mt-5 font-heading text-[clamp(2.15rem,4.6vw,3.85rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-charcoal"
          >
            {hero.headingBefore}
            <span className="text-brand">{hero.headingEmphasis}</span>
            {hero.headingAfter}
          </h1>

          <p className="hero-enter-body mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {hero.supporting}
          </p>

          <div className="hero-enter-cta mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-md bg-charcoal px-6 text-sm font-semibold text-white transition-colors hover:bg-charcoal-soft"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-semibold text-charcoal transition-colors hover:border-charcoal/25 hover:bg-brand-soft"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="hero-enter-media relative lg:justify-self-end lg:w-full lg:max-w-[34rem]">
          <ArchitecturalVisual label={hero.locationLabel} variant="hero" />
        </div>
      </div>
    </section>
  );
}
