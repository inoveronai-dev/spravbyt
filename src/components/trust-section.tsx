import {
  Building2,
  Check,
  Home,
  MapPin,
  Settings2,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { portfolioFromONas, trust } from "@/lib/content";

const values = [
  {
    icon: Check,
    text: "Presnosť v ekonomickej agende",
  },
  {
    icon: Settings2,
    text: "Spoľahlivá technická starostlivosť",
  },
  {
    icon: Users,
    text: "Osobný a dostupný prístup",
  },
] as const;

const stats = [
  {
    icon: Building2,
    value: portfolioFromONas.objectsLabel,
    label: portfolioFromONas.objectsCaption,
  },
  {
    icon: Users,
    value: portfolioFromONas.flatsLabel,
    label: portfolioFromONas.flatsCaption,
  },
  {
    icon: Home,
    value: `${portfolioFromONas.nonResidentialLabel}+`,
    label: portfolioFromONas.nonResidentialCaption,
  },
  {
    icon: MapPin,
    value: "Banská Bystrica",
    label: "a okolie",
  },
] as const;

export function TrustSection() {
  return (
    <section
      id="skusenosti"
      className="border-b border-border bg-surface"
      aria-labelledby="trust-heading"
    >
      <div className="container-page section-space">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr_0.85fr] lg:gap-10 xl:gap-12">
          <Reveal>
            <p className="eyebrow">Skúsenosti</p>
            <h2
              id="trust-heading"
              className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-charcoal"
            >
              Od roku
              <br />
              <span className="text-forest">1996</span>
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <p className="max-w-md font-heading text-[clamp(1.25rem,2.2vw,1.65rem)] font-semibold leading-snug tracking-tight text-charcoal">
              {trust.description}
            </p>
            <ul className="mt-7 space-y-4">
              {values.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-charcoal">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Icon className="size-3.5" strokeWidth={2.4} aria-hidden />
                  </span>
                  <span className="pt-0.5 text-base font-medium leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="rounded-2xl bg-brand-soft p-6 sm:p-7">
              <div className="mb-5 text-brand" aria-hidden>
                <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11">
                  <path
                    d="M8 40V18L24 8l16 10v22"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M18 40V26h12v14"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path d="M8 40h32" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-forest/80">
                Spravujeme bytové a nebytové priestory
                <br />
                v Banskej Bystrici a okolí
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={3}>
          <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-surface px-5 py-7 sm:grid-cols-2 sm:px-7 lg:grid-cols-4 lg:gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={`${value}-${label}`}
                className="flex items-start gap-3 lg:border-r lg:border-border lg:pr-4 lg:last:border-r-0"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-2xl font-semibold tracking-tight text-charcoal sm:text-[1.7rem]">
                    {value}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-ink-muted/75">
            Štatistiky podľa stránky O nás — vyžadujú potvrdenie klienta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
