import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Check,
  Home,
  MapPin,
  Users,
} from "lucide-react";

import { AnimatedStat } from "@/components/animated-stat";
import { DemoLink } from "@/components/demo-link";
import { Reveal } from "@/components/reveal";
import { about, portfolioFromONas, trust } from "@/lib/content";

const values = [
  "Presnosť v ekonomickej agende",
  "Spoľahlivá technická starostlivosť",
  "Osobný a dostupný prístup",
] as const;

/**
 * CLIENT VERIFY — portfolio figures from spravbyt.sk/o-nas still need client confirmation.
 * Do not invent reconciliations with alternate homepage totals.
 */
const stats = [
  {
    icon: Building2,
    value: 127,
    label: portfolioFromONas.objectsCaption,
  },
  {
    icon: Users,
    value: 3992,
    label: portfolioFromONas.flatsCaption,
  },
  {
    icon: Home,
    value: 265,
    label: portfolioFromONas.nonResidentialCaption,
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="o-spolocnosti"
      className="border-b border-border bg-surface"
      aria-labelledby="about-heading"
    >
      {/* PART A — Company experience */}
      <div id="skusenosti" className="container-page section-space pb-0">
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
              <h2 className="display-heading max-w-xl text-[clamp(1.55rem,2.6vw,2.15rem)] leading-[1.18] text-charcoal">
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
                key={label}
                className="flex items-start gap-3 lg:border-r lg:border-border lg:pr-4"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-2xl font-semibold tracking-tight text-charcoal sm:text-[1.7rem]">
                    <AnimatedStat value={value} />
                  </p>
                  <p className="mt-0.5 text-sm text-ink-muted">{label}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <MapPin className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-2xl font-semibold tracking-tight text-charcoal sm:text-[1.7rem]">
                  Banská Bystrica
                </p>
                <p className="mt-0.5 text-sm text-ink-muted">a okolie</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* PART B — Company introduction */}
      <div className="container-page pb-[clamp(4rem,8vw,6.5rem)] pt-10 sm:pt-12 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <Reveal>
            <figure className="relative w-full overflow-hidden rounded-2xl bg-mist">
              <div className="relative aspect-[4/5] min-h-[20rem] w-full lg:min-h-[34rem]">
                <Image
                  src="/spravbyt-office.png"
                  alt="Sídlo SPRAVBYT s.r.o. — prevádzka na prízemí bytového domu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover object-[center_58%]"
                />
              </div>
            </figure>
          </Reveal>

          <div>
            <Reveal delay={1}>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2
                id="about-heading"
                className="display-heading mt-4 max-w-[11ch] text-[clamp(2.55rem,5.4vw,4.35rem)] leading-[1.08] text-charcoal"
              >
                Skúsenosti,
                <br />
                na ktorých
                <br />
                môžete stavať.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {about.intro}
              </p>
              <p className="font-display mt-8 max-w-md border-l-2 border-brand pl-5 text-[clamp(1.15rem,2vw,1.4rem)] font-medium italic leading-[1.45] tracking-[-0.01em] text-forest">
                {about.prioritiesLabel}: {about.priorities}
              </p>
            </Reveal>

            <Reveal delay={2}>
              <DemoLink
                href={about.moreHref}
                external
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-forest link-underline"
              >
                Viac o spoločnosti
                <ArrowUpRight className="size-4" aria-hidden />
              </DemoLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
