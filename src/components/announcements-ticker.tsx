"use client";

import { useMemo, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const loop = useMemo(
    () => [...announcements, ...announcements],
    []
  );

  const openAt = (index: number) => {
    const nextIndex = (index + announcements.length) % announcements.length;
    setActiveIndex(nextIndex);
    setActive(announcements[nextIndex]);
  };

  return (
    <>
      <section
        id="oznamy"
        aria-label="Aktuálne oznamy"
        className="relative z-20 border-b border-border bg-forest text-white"
      >
        <div className="container-page flex min-h-[4.75rem] items-stretch gap-0 sm:min-h-[5rem]">
          <div className="flex shrink-0 items-center gap-3 py-4 pr-4 sm:pr-6">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand/20 text-brand sm:size-11">
              <Megaphone className="size-5" aria-hidden />
            </span>
            <span className="max-w-[5.5rem] text-[0.72rem] font-bold uppercase leading-tight tracking-[0.16em] text-white sm:max-w-none sm:text-[0.88rem] sm:leading-none">
              Aktuálne oznamy
            </span>
          </div>

          <div className="announcement-track group relative min-w-0 flex-1 overflow-hidden border-l border-white/15 py-4">
            <div className="announcement-marquee flex w-max items-center">
              {loop.map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  type="button"
                  onClick={() => openAt(index % announcements.length)}
                  className="inline-flex items-center gap-4 border-r border-white/20 px-6 text-left transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:gap-5 sm:px-9"
                >
                  <span className="shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand">
                    {item.dateLabel}
                  </span>
                  <span className="text-[1.02rem] font-semibold whitespace-nowrap text-white sm:text-[1.08rem]">
                    {item.title}
                  </span>
                  <span className="text-brand" aria-hidden>
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 border-l border-white/15 pl-4 sm:flex">
            <button
              type="button"
              aria-label="Predchádzajúci oznam"
              onClick={() => openAt(activeIndex - 1)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand/15 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Nasledujúci oznam"
              onClick={() => openAt(activeIndex + 1)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand/15 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              <ArrowRight className="size-4" aria-hidden />
            </button>
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
