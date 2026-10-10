import { Reveal } from "@/components/reveal";
import { trust } from "@/lib/content";

export function TrustSection() {
  return (
    <section
      className="section-space border-b border-border bg-surface"
      aria-labelledby="trust-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="grid items-end gap-8 border-b border-border pb-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pb-14">
            <div>
              <p className="eyebrow">Skúsenosti</p>
              <h2
                id="trust-heading"
                className="mt-4 font-heading text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-charcoal"
              >
                {trust.yearLabel}
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-ink-muted md:justify-self-end md:pb-3 md:text-xl">
              {trust.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              "Presnosť v ekonomickej agende",
              "Spoľahlivá technická starostlivosť",
              "Osobný a dostupný prístup",
            ].map((item) => (
              <div
                key={item}
                className="border-l-2 border-brand pl-5 text-base font-medium text-charcoal"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
