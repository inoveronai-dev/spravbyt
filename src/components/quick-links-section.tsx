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

const primary = [
  {
    title: "Online vstup",
    description: "Prístup pre vlastníkov",
    href: externalUrls.onlineVstup,
    icon: LogIn,
    dark: true,
  },
  {
    title: "Dokumenty na stiahnutie",
    description: "Formuláre a podklady",
    href: externalUrls.naStiahnutie,
    icon: FileText,
    dark: false,
  },
] as const;

const secondary = [
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
    title: "Aktuality",
    description: "Aktuálne správy spoločnosti",
    href: externalUrls.aktuality,
    icon: Bell,
  },
] as const;

export function QuickLinksSection() {
  return (
    <section
      id="rychly-pristup"
      className="border-b border-border bg-brand-soft"
      aria-labelledby="quick-links-heading"
    >
      <div className="container-page section-space">
        <Reveal>
          <h2
            id="quick-links-heading"
            className="max-w-xl font-heading text-[clamp(1.9rem,3.6vw,2.85rem)] font-semibold tracking-[-0.03em] text-charcoal"
          >
            {quickLinks.heading}
          </h2>
          <p className="mt-3 max-w-xl text-base text-ink-muted sm:text-lg">
            Rýchly prístup k najčastejším službám a informáciám pre vlastníkov.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {primary.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={(Math.min(index + 1, 2) as 1 | 2)}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    item.dark
                      ? "group flex min-h-[9.5rem] items-end justify-between gap-4 bg-charcoal p-7 text-white transition-colors hover:bg-charcoal-soft"
                      : "group flex min-h-[9.5rem] items-end justify-between gap-4 border border-border bg-surface p-7 text-charcoal transition-colors hover:border-charcoal/20"
                  }
                >
                  <span>
                    <span
                      className={
                        item.dark
                          ? "inline-flex size-11 items-center justify-center rounded-md bg-brand/15 text-brand"
                          : "inline-flex size-11 items-center justify-center rounded-md bg-brand-soft text-brand"
                      }
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="mt-6 block font-heading text-xl font-semibold tracking-tight">
                      {item.title}
                    </span>
                    <span
                      className={
                        item.dark
                          ? "mt-1.5 block text-sm text-white/65"
                          : "mt-1.5 block text-sm text-ink-muted"
                      }
                    >
                      {item.description}
                    </span>
                  </span>
                  <ArrowRight
                    className={
                      item.dark
                        ? "mb-1 size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                        : "mb-1 size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                    }
                    aria-hidden
                  />
                </a>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {secondary.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[10rem] flex-col justify-between border border-border bg-surface p-6 transition-colors hover:border-charcoal/20"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <ArrowRight className="size-4 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </span>
                  <span>
                    <span className="block font-heading text-lg font-semibold tracking-tight text-charcoal">
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
