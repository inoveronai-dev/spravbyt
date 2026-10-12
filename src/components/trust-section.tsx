import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { trust } from "@/lib/content";

const values = [
  "Presnosť v ekonomickej agende",
  "Spoľahlivá technická starostlivosť",
  "Osobný a dostupný prístup",
] as const;

export function TrustSection() {
  return (
    <section
      id="skusenosti"
      className="border-b border-border bg-surface"
      aria-labelledby="trust-heading"
    >
      <div className="container-page section-space">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.15fr_0.9fr] lg:gap-12 xl:gap-16">
          <Reveal>
            <p className="eyebrow">Skúsenosti</p>
            <p className="mt-5 font-heading text-[clamp(1.5rem,2.4vw,2rem)] font-semibold tracking-tight text-charcoal">
              Od roku
            </p>
            <p
              id="trust-heading"
              className="mt-1 font-heading text-[clamp(5.5rem,14vw,9.5rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-brand"
            >
              1996
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="max-w-md font-heading text-[clamp(1.55rem,2.6vw,2.15rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-charcoal">
              {trust.description}
            </h2>
            <ul className="mt-8 space-y-4">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 border-b border-border pb-4 text-base text-charcoal last:border-b-0 last:pb-0"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="font-medium leading-snug">{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="border-l border-border pl-6 lg:pl-8">
              <div
                className="mb-5 h-12 w-12 text-brand"
                aria-hidden
              >
                <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
                  <path
                    d="M8 40V18L24 8l16 10v22"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path d="M18 40V26h12v14" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8 40h32" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink-muted">
                Správa bytových a nebytových priestorov
                <br />
                v Banskej Bystrici a okolí
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
