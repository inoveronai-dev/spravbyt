import Image from "next/image";

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

      <div className="container-page relative z-10 flex w-full flex-col items-center justify-center px-5 pb-24 pt-32 text-center sm:pb-28 sm:pt-36">
        <h1
          id="hero-heading"
          className="hero-enter-heading display-heading max-w-[13ch] text-balance text-[clamp(2.85rem,6vw,5.75rem)] leading-[1.1] text-white sm:max-w-[15ch]"
        >
          Správa bytových domov,
          <br className="hidden sm:block" />{" "}
          na ktorú sa{" "}
          <span className="text-brand">môžete</span>
          <br className="sm:hidden" /> spoľahnúť.
        </h1>
      </div>
    </section>
  );
}
