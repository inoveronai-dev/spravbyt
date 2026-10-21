import Image from "next/image";
import Link from "next/link";

import { CopyrightYear } from "@/components/copyright-year";
import { DemoLink } from "@/components/demo-link";
import { footerNav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-forest-deep text-white">
      {/* Decorative shadow wordmark — BYTEX-style, non-interactive */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex select-none justify-center overflow-hidden"
      >
        <p className="translate-y-[32%] whitespace-nowrap font-heading text-[clamp(4.25rem,17vw,11.5rem)] font-semibold uppercase leading-none tracking-[0.1em] text-white/[0.065] sm:translate-y-[36%] sm:tracking-[0.12em]">
          SPRAVBYT
        </p>
      </div>

      <div className="relative z-10 container-page py-10 sm:py-11 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <Link href="/#uvod" aria-label={site.name} className="shrink-0">
            <Image
              src={site.logoSrc}
              alt={site.logoAlt}
              width={168}
              height={44}
              className="h-9 w-auto object-contain object-left"
            />
          </Link>

          <nav aria-label="Pätičková navigácia">
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm tracking-[0.01em]">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <DemoLink
                    href={item.href}
                    external={"external" in item && item.external}
                    className="text-white/72 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </DemoLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 sm:mt-9">
          <p className="text-xs tracking-[0.02em] text-white/45 lg:text-right">
            © <CopyrightYear /> {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
