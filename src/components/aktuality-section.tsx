"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { announcements, externalUrls } from "@/lib/content";

type Announcement = (typeof announcements)[number];

const AUTO_MS = 6500;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AktualitySection() {
  const [active, setActive] = useState<Announcement | null>(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  const scrollByPage = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.max(track.clientWidth * 0.85, 280);
    track.scrollBy({
      left: direction * amount,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

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
      <section
        id="aktuality"
        className="border-b border-border bg-mist"
        aria-labelledby="aktuality-heading"
      >
        <div className="container-page section-space">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Novinky</p>
                <h2
                  id="aktuality-heading"
                  className="display-heading mt-4 text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] text-charcoal"
                >
                  Aktuality
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                  Dôležité informácie a novinky pre vlastníkov bytov.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Predchádzajúca aktualita"
                  onClick={() => scrollByPage(-1)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-charcoal transition-colors hover:border-forest/30 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="Nasledujúca aktualita"
                  onClick={() => scrollByPage(1)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-charcoal transition-colors hover:border-forest/30 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div
              className="mt-10"
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
                className="aktuality-track flex gap-4 overflow-x-auto pb-2 scroll-smooth"
                tabIndex={0}
                aria-label="Zoznam aktualít"
              >
                {announcements.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item)}
                    className="group flex w-[min(100%,22rem)] shrink-0 snap-start flex-col rounded-2xl border border-border bg-surface p-6 text-left transition-colors hover:border-forest/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 sm:w-[min(100%,24rem)] lg:w-[calc((100%-2rem)/2.35)] xl:w-[calc((100%-2rem)/2.6)]"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-forest">
                      {item.metaLabel}
                    </p>
                    <h3 className="mt-4 font-heading text-[clamp(1.2rem,1.8vw,1.45rem)] font-semibold leading-snug tracking-tight text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                      {item.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-charcoal">
                      Čítať viac
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-8">
              <a
                href={externalUrls.aktuality}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest link-underline"
              >
                Všetky aktuality na spravbyt.sk
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </Reveal>
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
