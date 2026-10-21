"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { DemoLink } from "@/components/demo-link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { announcements, externalUrls } from "@/lib/content";

type Announcement = (typeof announcements)[number];

const AUTO_MS = 7000;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AktualityCarousel() {
  const [active, setActive] = useState<Announcement | null>(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  const scrollByPage = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const amount = Math.max(track.clientWidth * 0.8, 260);
      track.scrollBy({
        left: direction * amount,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion]
  );

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 8) return;

      if (track.scrollLeft >= maxScroll - 12) {
        track.scrollTo({
          left: 0,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      } else {
        scrollByPage(1);
      }
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, prefersReducedMotion, scrollByPage]);

  return (
    <>
      <div
        id="aktuality"
        className="scroll-mt-28 sm:scroll-mt-32"
        aria-labelledby="aktuality-heading"
      >
        <div className="flex items-end justify-between gap-4">
          <h3
            id="aktuality-heading"
            className="display-heading text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.12] text-charcoal"
          >
            Aktuality
          </h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Predchádzajúca aktualita"
              onClick={() => scrollByPage(-1)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-charcoal transition-colors hover:border-forest/30 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Nasledujúca aktualita"
              onClick={() => scrollByPage(1)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-charcoal transition-colors hover:border-forest/30 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              <ArrowRight className="size-3.5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          className="mt-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setPaused(false);
            }
          }}
        >
          <div
            ref={trackRef}
            className="aktuality-track flex gap-3 overflow-x-auto pb-1"
            tabIndex={0}
            aria-label="Zoznam aktualít"
          >
            {announcements.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className="group flex w-[min(100%,18.5rem)] shrink-0 snap-start flex-col rounded-xl border border-border bg-surface px-4 py-4 text-left transition-colors hover:border-forest/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 sm:w-[min(100%,20rem)] lg:w-[calc((100%-1.5rem)/2.4)] xl:w-[calc((100%-1.5rem)/2.7)]"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-forest">
                  {item.metaLabel}
                </p>
                <h4 className="mt-2.5 font-heading text-[1.02rem] font-semibold leading-snug tracking-tight text-charcoal sm:text-[1.08rem]">
                  {item.title}
                </h4>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                  {item.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                  Čítať viac
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <DemoLink
            href={externalUrls.aktuality}
            external
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest link-underline"
          >
            Všetky aktuality
            <ArrowUpRight className="size-3.5" aria-hidden />
          </DemoLink>
        </div>
      </div>

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
                  {active.metaLabel}
                </p>
                <DialogTitle className="font-heading text-xl font-semibold tracking-tight text-charcoal">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Detail aktuality
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
              <DemoLink
                href={
                  "externalHref" in active && active.externalHref
                    ? active.externalHref
                    : externalUrls.aktuality
                }
                external
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal link-underline"
              >
                Viac na stránke Aktuality
                <ArrowUpRight className="size-4" aria-hidden />
              </DemoLink>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
