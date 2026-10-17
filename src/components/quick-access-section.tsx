import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  FileText,
  LogIn,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

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
          <div className="max-w-3xl">
            <p className="eyebrow">{quickAccess.eyebrow}</p>
            <h2
              id="quick-access-heading"
              className="display-heading mt-4 max-w-[16ch] text-[clamp(2.4rem,5vw,3.85rem)] leading-[1.08] text-charcoal"
            >
              {quickAccess.heading}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal>
            <aside className="flex h-full flex-col justify-between rounded-2xl bg-forest px-6 py-7 text-white sm:px-8 sm:py-8">
              <div>
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-brand">
                  Kontakt
                </p>
                <h3 className="mt-4 font-heading text-[clamp(1.55rem,2.4vw,1.95rem)] font-semibold tracking-tight">
                  SPRAVBYT, s.r.o.
                </h3>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-start gap-3 text-white/78 transition-colors hover:text-brand"
                >
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                  <span className="text-base leading-relaxed">
                    {site.addressLines[0]}
                    <br />
                    {site.addressLines[1]}
                  </span>
                </a>
              </div>

              <div className="mt-10">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                  Telefón
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-2 inline-flex items-center gap-3 font-heading text-[clamp(1.85rem,3.4vw,2.55rem)] font-semibold tracking-tight text-white transition-colors hover:text-brand"
                >
                  <Phone className="size-6 shrink-0 text-brand sm:size-7" aria-hidden />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-[#b4d35a]"
                >
                  Zobraziť na mape
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={1}>
            <aside className="flex h-full flex-col rounded-2xl border border-border bg-surface px-6 py-7 sm:px-8 sm:py-8">
              <h3 className="font-heading text-[clamp(1.45rem,2.2vw,1.85rem)] font-semibold tracking-tight text-charcoal">
                {officeHours.heading}
              </h3>
              <ul className="mt-6 divide-y divide-border">
                {officeHours.rows.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-start justify-between gap-6 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="pt-0.5 text-base font-semibold text-charcoal">
                      {row.day}
                    </span>
                    <span className="text-right text-base leading-relaxed text-ink-muted tabular-nums">
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
          </Reveal>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {quickAccess.primaryCards.map((card, index) => {
            const Icon = cardIcons[card.icon];
            const className =
              "group flex min-h-[5.75rem] items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-forest/20 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50";

            const inner = (
              <>
                <span className="flex items-center gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-heading text-lg font-semibold tracking-tight text-charcoal">
                    {card.title}
                  </span>
                </span>
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-forest transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
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
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/80 pt-5">
            <span className="text-sm font-medium text-ink-muted">
              Ďalšie informácie:
            </span>
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
      </div>
    </section>
  );
}
