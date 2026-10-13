"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "cn";

import {
  externalUrls,
  infoNav,
  site,
  type NavItem,
} from "@/lib/content";

function isPending(item: NavItem): item is Extract<NavItem, { pending: true }> {
  return "pending" in item && item.pending === true;
}

function ExternalOrAnchor({
  item,
  className,
  onNavigate,
}: {
  item: Exclude<NavItem, { pending: true }>;
  className?: string;
  onNavigate?: () => void;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const [compact, setCompact] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const infoMenuId = useId();
  const solidHeader = !overHero || mobileOpen;

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("uvod");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!infoOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!infoRef.current?.contains(event.target as Node)) {
        setInfoOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setInfoOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [infoOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const mobileItems: NavItem[] = [
    { label: "Úvod", href: "/#uvod" },
    { label: "O nás", href: externalUrls.oNas, external: true },
    ...infoNav,
    {
      label: "Online vstup",
      href: externalUrls.onlineVstup,
      external: true,
      emphasize: true,
    },
    { label: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        solidHeader
          ? "border-b border-white/8 bg-charcoal shadow-[0_8px_30px_rgba(32,37,34,0.28)]"
          : "border-b border-transparent bg-transparent shadow-none"
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-4 transition-[height] duration-300",
          compact ? "h-[4.25rem]" : "h-[5.25rem]"
        )}
      >
        <Link href="/#uvod" className="shrink-0" aria-label={site.name}>
          <Image
            src={site.logoSrc}
            alt={site.logoAlt}
            width={220}
            height={56}
            priority
            className={cn(
              "w-auto object-contain object-left transition-[height] duration-300",
              compact ? "h-9" : "h-11"
            )}
          />
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Hlavná navigácia"
        >
          <Link
            href="/#uvod"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-brand"
          >
            Úvod
          </Link>
          <a
            href={externalUrls.oNas}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-brand"
          >
            O nás
          </a>

          <div className="relative" ref={infoRef}>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/85 outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand/60"
              aria-haspopup="menu"
              aria-expanded={infoOpen}
              aria-controls={infoMenuId}
              onClick={() => setInfoOpen((value) => !value)}
            >
              Informácie
              <ChevronDown
                className={cn(
                  "size-4 opacity-70 transition-transform",
                  infoOpen && "rotate-180"
                )}
                aria-hidden
              />
            </button>

            {infoOpen ? (
              <div
                id={infoMenuId}
                role="menu"
                className="absolute left-0 top-[calc(100%+0.5rem)] z-50 min-w-56 rounded-md border border-border bg-surface p-1.5 text-foreground shadow-lg"
              >
                {infoNav.map((item) =>
                  isPending(item) ? (
                    <div
                      key={item.label}
                      role="menuitem"
                      aria-disabled="true"
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-ink-muted"
                      title={item.note}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider">
                        Čoskoro
                      </span>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      role="menuitem"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-md px-3 py-2 text-sm text-charcoal transition-colors hover:bg-brand-soft"
                      onClick={() => setInfoOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            ) : null}
          </div>

          <a
            href={externalUrls.onlineVstup}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex h-10 items-center rounded-md bg-brand px-4 text-sm font-semibold text-charcoal transition-colors hover:bg-[#8fb032]"
          >
            Online vstup
          </a>

          <Link
            href="/#kontakt"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-brand"
          >
            Kontakt
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={externalUrls.onlineVstup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-md bg-brand px-3 text-sm font-semibold text-charcoal transition-colors hover:bg-[#8fb032]"
          >
            Online vstup
          </a>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
            aria-label={mobileOpen ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-charcoal xl:hidden"
        >
          <nav
            className="container-page flex max-h-[min(70vh,32rem)] flex-col gap-1 overflow-y-auto py-4"
            aria-label="Mobilná navigácia"
            data-lenis-prevent
          >
            {mobileItems.map((item) => {
              if (isPending(item)) {
                return (
                  <span
                    key={item.label}
                    className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-white/45"
                    title={item.note}
                    aria-disabled="true"
                  >
                    {item.label}
                    <span className="rounded-sm border border-white/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      Čoskoro
                    </span>
                  </span>
                );
              }

              return (
                <ExternalOrAnchor
                  key={item.label}
                  item={item}
                  onNavigate={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium transition-colors",
                    item.emphasize
                      ? "bg-brand/15 text-brand"
                      : "text-white/90 hover:bg-white/5 hover:text-brand"
                  )}
                />
              );
            })}
          </nav>

          <div className="container-page border-t border-white/10 py-4 text-sm text-white/70">
            <a
              href={site.phoneHref}
              className="block font-medium text-white transition-colors hover:text-brand"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="mt-2 block transition-colors hover:text-brand"
            >
              {site.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
