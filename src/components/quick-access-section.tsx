import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Clock3,
  FileText,
  LogIn,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { AktualityCarousel } from "@/components/aktuality-carousel";
import { Reveal } from "@/components/reveal";
import { officeHours, quickAccess, site } from "@/lib/content";

const cardIcons = {
  phone: Phone,
  "log-in": LogIn,
  "file-text": FileText,
  bell: Bell,
} as const;

export function QuickAccessSection() {
  return (
    <section
      id="rychly-pristup"
      className="border-b border-border bg-mist"
      aria-labelledby="quick-access-heading"
    >
      <div className="container-page section-space">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{quickAccess.eyebrow}</p>
            <h2
              id="quick-access-heading"
              className="display-heading mt-4 text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] text-charcoal"
            >
              {quickAccess.heading}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div
            id="kontakt"
            className="mt-12 scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface sm:scroll-mt-32"
          >
            <div className="grid lg:grid-cols-2">
              <aside className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
                <h3 className="font-heading text-[clamp(1.35rem,2vw,1.65rem)] font-semibold tracking-tight text-charcoal">
                  SPRAVBYT, s.r.o.
                </h3>

                <div className="mt-5 flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    aria-hidden
                  />
                  <div>
                    <p className="text-base leading-relaxed text-ink-muted">
                      {site.addressLines[0]}
                      <br />
                      {site.addressLines[1]}
                    </p>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest link-underline"
                    >
                      Zobraziť na mape
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </a>
                  </div>
                </div>

                <div className="mt-7 border-t border-border pt-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Telefón
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-2 inline-flex items-center gap-3 font-heading text-[clamp(1.7rem,3vw,2.35rem)] font-semibold tracking-tight text-charcoal transition-colors hover:text-forest"
                  >
                    <Phone className="size-5 shrink-0 text-brand sm:size-6" aria-hidden />
                    {site.phoneDisplay}
                  </a>
                </div>
              </aside>

              <aside className="border-t border-border px-6 py-7 sm:px-8 sm:py-8 lg:border-t-0 lg:border-l lg:px-10 lg:py-9">
                <div className="flex items-center gap-2.5">
                  <Clock3 className="size-4 text-brand" aria-hidden />
                  <h3 className="font-heading text-[clamp(1.35rem,2vw,1.65rem)] font-semibold tracking-tight text-charcoal">
                    {officeHours.heading}
                  </h3>
                </div>

                <ul className="mt-6 divide-y divide-border">
                  {officeHours.rows.map((row) => (
                    <li
                      key={row.day}
                      className="flex items-start justify-between gap-6 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="pt-0.5 text-base font-semibold text-charcoal sm:text-[1.05rem]">
                        {row.day}
                      </span>
                      <span className="text-right text-base leading-relaxed text-ink-muted tabular-nums sm:text-[1.05rem]">
                        {row.times.map((time) => (
                          <span key={time} className="block">
                            {time}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {quickAccess.primaryCards.map((card, index) => {
            const Icon = cardIcons[card.icon];
            const className =
              "group flex min-h-[4.75rem] items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-forest/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/45 sm:px-5";

            const inner = (
              <>
                <span className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center text-brand">
                    <Icon className="size-[1.15rem]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="font-heading text-[0.98rem] font-semibold tracking-tight text-charcoal sm:text-base">
                    {card.title}
                  </span>
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-forest"
                  aria-hidden
                />
              </>
            );

            return (
              <Reveal
                key={card.title}
                delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
              >
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={card.href} className={className}>
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={2}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
            <span className="text-sm text-ink-muted">Ďalšie informácie:</span>
            {quickAccess.secondaryLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest link-underline"
              >
                {link.title}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-10 border-t border-border/80 pt-8">
            <AktualityCarousel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
