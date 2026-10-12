"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { announcements, externalUrls } from "@/lib/content";

type Announcement = (typeof announcements)[number];

export function AnnouncementsTicker() {
  const [active, setActive] = useState<Announcement | null>(null);
  const loop = [...announcements, ...announcements];

  return (
    <>
      <section
        aria-label="Aktuálne oznamy"
        className="relative z-20 border-b border-border bg-surface"
      >
        <div className="container-page flex items-stretch gap-0">
          <div className="flex shrink-0 items-center border-r border-border bg-brand-soft px-4 py-3 sm:px-5">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-charcoal">
              Aktuálne
              <span className="hidden sm:inline"> oznamy</span>
            </span>
          </div>

          <div className="announcement-track group relative min-w-0 flex-1 overflow-hidden py-3">
            <div className="announcement-marquee flex w-max items-center gap-0">
              {loop.map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  type="button"
                  onClick={() => setActive(item)}
                  className="inline-flex items-center gap-3 px-5 text-left text-sm text-charcoal transition-colors hover:text-brand"
                >
                  <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    {item.dateLabel}
                  </span>
                  <span className="font-medium">{item.title}</span>
                  <span className="hidden text-ink-muted md:inline">
                    — {item.excerpt}
                  </span>
                  <span
                    className="mx-2 h-1 w-1 shrink-0 rounded-full bg-brand/70"
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="max-h-[min(85vh,40rem)] overflow-y-auto sm:max-w-lg">
          {active ? (
            <>
              <DialogHeader>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {active.dateLabel}
                </p>
                <DialogTitle className="font-heading text-xl font-semibold tracking-tight text-charcoal">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Detail oznamu
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 text-sm leading-relaxed text-ink-muted whitespace-pre-line">
                {active.body}
              </div>
              {"externalHref" in active && active.externalHref ? (
                <a
                  href={active.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal link-underline"
                >
                  Otvoriť archív aktualít
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : (
                <a
                  href={externalUrls.aktuality}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal link-underline"
                >
                  Viac na stránke Aktuality
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              )}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
