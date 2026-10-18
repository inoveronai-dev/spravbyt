import Image from "next/image";

/**
 * Hero uses the same CSS window parallax as the mid-page CTA:
 * section clip-path + md:fixed background. No JS translate.
 */
export function HeroSection() {
  return (
    <section
      id="uvod"
      className="relative flex min-h-[100svh] items-center justify-center bg-charcoal [clip-path:inset(0)]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 md:fixed md:inset-0 motion-reduce:!absolute motion-reduce:!inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 scale-[1.08]">
          <Image
            src="/banska-bystrica-hero.png"
            alt="Námestie SNP v Banskej Bystrici pri západe slnka"
            fill
            priority
            sizes="100vw"
            className="hero-photo-zoom object-cover object-[center_42%] sm:object-center"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(32,37,34,0.42) 0%, rgba(32,37,34,0.18) 28%, rgba(32,37,34,0.34) 52%, rgba(32,37,34,0.62) 78%, rgba(32,37,34,0.78) 100%),
              radial-gradient(ellipse 70% 55% at 50% 58%, rgba(32,37,34,0.45), transparent 70%)
            `,
          }}
        />
      </div>

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
