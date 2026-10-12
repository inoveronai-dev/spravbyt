"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Megaphone } from "lucide-react";

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
        className="relative z-20 border-b border-border bg-mist"
      >
        <div className="container-page flex items-stretch gap-0">
          <div className="flex shrink-0 items-center gap-2.5 py-3 pr-4 sm:pr-5">
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Megaphone className="size-4" aria-hidden />
            </span>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-charcoal">
              Aktuálne
              <span className="hidden sm:inline"> oznamy</span>
            </span>
          </div>

          <div className="announcement-track group relative min-w-0 flex-1 overflow-hidden border-l border-border/80 py-3">
            <div className="announcement-marquee flex w-max items-center">
              {loop.map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  type="button"
                  onClick={() => setActive(item)}
                  className="inline-flex items-center gap-3 px-5 text-left text-sm text-charcoal transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    {item.dateLabel}
                  </span>
                  <span className="font-medium whitespace-nowrap">
                    {item.title}
                  </span>
                  <span
                    className="mx-1 text-brand/70"
                    aria-hidden
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-1 border-l border-border/80 pl-3 sm:flex">
            <span className="inline-flex size-8 items-center justify-center rounded-full border border-border text-ink-muted">
              <ArrowLeft className="size-3.5" aria-hidden />
            </span>
            <span className="inline-flex size-8 items-center justify-center rounded-full border border-border text-ink-muted">
              <ArrowRight className="size-3.5" aria-hidden />
            </span>
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
              {"needsConfirmation" in active && active.needsConfirmation ? (
                <p className="text-xs text-ink-muted">
                  Tento oznam vyžaduje potvrdenie aktuálnosti u klienta.
                </p>
              ) : null}
              <a
                href={
                  "externalHref" in active && active.externalHref
                    ? active.externalHref
                    : externalUrls.aktuality
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal link-underline"
              >
                Viac na stránke Aktuality
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
