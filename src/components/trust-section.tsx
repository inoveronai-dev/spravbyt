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
              <p className="display-heading mt-5 text-[clamp(2.15rem,4.4vw,3.35rem)] text-charcoal">
                Od roku
              </p>
              <p className="font-display mt-1 text-[clamp(4.75rem,12.5vw,8.75rem)] font-medium leading-[0.88] tracking-[-0.045em] text-forest">
                1996
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="lg:border-l lg:border-border lg:pl-12 xl:pl-16">
              <h2
                id="trust-heading"
                className="display-heading max-w-xl text-[clamp(1.55rem,2.6vw,2.15rem)] leading-[1.18] text-charcoal"
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
