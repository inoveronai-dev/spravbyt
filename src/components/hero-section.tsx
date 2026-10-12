import Image from "next/image";
import Link from "next/link";

import { hero } from "@/lib/content";

export function HeroSection() {
  return (
    <section
      id="uvod"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/banska-bystrica-hero.png"
          alt="Námestie SNP v Banskej Bystrici pri západe slnka"
          fill
          priority
          sizes="100vw"
          className="hero-photo-zoom object-cover object-[center_42%] sm:object-center"
        />
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

      <div className="container-page relative z-10 flex w-full flex-col items-center px-5 pb-16 pt-28 text-center sm:pb-20 sm:pt-32">
        <p className="hero-enter-label text-xs font-semibold tracking-[0.16em] text-white/80 sm:text-[0.8rem]">
          {hero.eyebrow}
        </p>

        <h1
          id="hero-heading"
          className="hero-enter-heading mt-5 max-w-[16ch] font-heading text-[clamp(2rem,5.4vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:max-w-[18ch]"
        >
          Správa bytových domov,
          <br className="hidden sm:block" />{" "}
          na ktorú sa môžete spoľahnúť.
        </h1>

        <p className="hero-enter-body mt-5 max-w-xl text-base leading-relaxed text-white/82 sm:mt-6 sm:text-lg">
          {hero.supporting}
        </p>

        <div className="hero-enter-cta mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand px-7 text-sm font-semibold text-charcoal transition-colors hover:bg-[#8fb032]"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 bg-white/8 px-7 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors hover:border-white/55 hover:bg-white/14"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
