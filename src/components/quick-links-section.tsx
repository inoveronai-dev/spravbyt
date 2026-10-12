import {
  ArrowRight,
  Bell,
  Droplets,
  FileText,
  Flame,
  LogIn,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { externalUrls, quickLinks } from "@/lib/content";

const secondary = [
  {
    title: "Dokumenty na stiahnutie",
    description: "Formuláre a podklady",
    href: externalUrls.naStiahnutie,
    icon: FileText,
  },
  {
    title: "Teplo",
    description: "Informácie o dodávke tepla",
    href: externalUrls.teplo,
    icon: Flame,
  },
  {
    title: "Vodné a stočné",
    description: "Voda a stočné",
    href: externalUrls.vodneAStocne,
    icon: Droplets,
  },
  {
    title: "Aktuality a oznamy",
    description: "Aktuálne správy spoločnosti",
    href: externalUrls.aktuality,
    icon: Bell,
  },
] as const;

export function QuickLinksSection() {
  return (
    <section
      id="rychly-pristup"
      className="border-b border-border bg-mist"
      aria-labelledby="quick-links-heading"
    >
      <div className="container-page section-space">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="quick-links-heading"
              className="font-heading text-[clamp(1.9rem,3.5vw,2.85rem)] font-semibold tracking-[-0.03em] text-charcoal"
            >
              {quickLinks.heading}
            </h2>
            <p className="mt-3 text-base text-ink-muted sm:text-lg">
              Rýchly prístup k najčastejším službám a informáciám pre vlastníkov.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <a
            href={externalUrls.onlineVstup}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 flex min-h-[8.5rem] items-center justify-between gap-6 rounded-2xl bg-forest px-7 py-7 text-white transition-colors hover:bg-forest-deep sm:px-9"
          >
            <span className="flex items-center gap-5">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand/20 text-brand">
                <LogIn className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block font-heading text-2xl font-semibold tracking-tight">
                  Online vstup
                </span>
                <span className="mt-1 block text-sm text-white/70">
                  Prístup pre vlastníkov
                </span>
              </span>
            </span>
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-forest transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-5" aria-hidden />
            </span>
          </a>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-[10rem] flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-[0_8px_24px_rgba(28,36,32,0.03)] transition-all hover:-translate-y-0.5 hover:border-forest/15"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="inline-flex size-8 items-center justify-center rounded-full border border-border text-forest transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="size-3.5" aria-hidden />
                    </span>
                  </span>
                  <span>
                    <span className="block font-heading text-base font-semibold tracking-tight text-charcoal">
                      {item.title}
                    </span>
                    <span className="mt-1.5 block text-sm text-ink-muted">
                      {item.description}
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
