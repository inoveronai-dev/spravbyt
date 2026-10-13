import {
  Building2,
  Check,
  Home,
  MapPin,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { portfolioFromONas, trust } from "@/lib/content";

const values = [
  "Presnosť v ekonomickej agende",
  "Spoľahlivá technická starostlivosť",
  "Osobný a dostupný prístup",
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
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-0">
          <Reveal>
            <div className="max-w-md lg:pr-12 xl:pr-16">
              <p className="eyebrow">Skúsenosti</p>
              <p className="mt-5 font-heading text-[clamp(2rem,4.2vw,3.15rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-charcoal">
                Od roku
              </p>
              <p className="mt-1 font-heading text-[clamp(4.5rem,12vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-forest">
                1996
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="lg:border-l lg:border-border lg:pl-12 xl:pl-16">
              <h2
                id="trust-heading"
                className="max-w-2xl font-heading text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-snug tracking-tight text-charcoal"
              >
                {trust.description}
              </h2>
              <ul className="mt-8 space-y-4">
                {values.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-charcoal"
                  >
                    <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center text-brand">
                      <Check className="size-4" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="text-base font-medium leading-snug sm:text-[1.05rem]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="mt-14 grid gap-6 rounded-2xl border border-border bg-surface px-5 py-7 sm:grid-cols-2 sm:px-7 lg:mt-16 lg:grid-cols-4 lg:gap-4">
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
