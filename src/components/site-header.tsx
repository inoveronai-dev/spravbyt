"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  externalUrls,
  infoNav,
  primaryNav,
  site,
  type NavItem,
} from "@/lib/content";

function isPending(item: NavItem): item is Extract<NavItem, { pending: true }> {
  return "pending" in item && item.pending === true;
}

function NavLink({
  item,
  className,
  onNavigate,
}: {
  item: NavItem;
  className?: string;
  onNavigate?: () => void;
}) {
  if (isPending(item)) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 text-white/45",
          className
        )}
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

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("transition-colors hover:text-brand", className)}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn("transition-colors hover:text-brand", className)}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/8 bg-charcoal text-white transition-[padding,box-shadow] duration-300",
        compact ? "shadow-[0_8px_30px_rgba(32,37,34,0.28)]" : "shadow-none"
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
          {primaryNav.slice(0, 2).map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/85"
            />
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/85 outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand/60"
              )}
            >
              Informácie
              <ChevronDown className="size-4 opacity-70" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="min-w-56 border-border bg-surface text-foreground"
            >
              {infoNav.map((item) =>
                isPending(item) ? (
                  <DropdownMenuItem
                    key={item.label}
                    disabled
                    className="justify-between opacity-60"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                      Čoskoro
                    </span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem
                    key={item.label}
                    render={
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    {item.label}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href={externalUrls.onlineVstup}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex h-10 items-center rounded-md bg-brand px-4 text-sm font-semibold text-charcoal transition-colors hover:bg-[#8fb032]"
          >
            Online vstup
          </a>

          <NavLink
            item={{ label: "Kontakt", href: "/#kontakt" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-white/85"
          />
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

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-11 text-white hover:bg-white/10 hover:text-white"
                  aria-label="Otvoriť menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,22rem)] border-l border-white/10 bg-charcoal text-white"
            >
              <SheetHeader className="border-b border-white/10 pb-4 text-left">
                <SheetTitle className="font-heading text-lg text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav
                className="flex flex-col gap-1 px-2 py-4"
                aria-label="Mobilná navigácia"
              >
                {[
                  { label: "Úvod", href: "/#uvod" },
                  {
                    label: "O nás",
                    href: externalUrls.oNas,
                    external: true,
                  },
                  ...infoNav,
                  {
                    label: "Online vstup",
                    href: externalUrls.onlineVstup,
                    external: true,
                    emphasize: true,
                  },
                  { label: "Kontakt", href: "/#kontakt" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium",
                      !isPending(item) &&
                        "emphasize" in item &&
                        item.emphasize &&
                        "bg-brand/15 text-brand"
                    )}
                  >
                    <NavLink
                      item={item as NavItem}
                      className="block w-full"
                      onNavigate={() => setOpen(false)}
                    />
                  </div>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 px-5 py-5 text-sm text-white/70">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
