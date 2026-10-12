import Image from "next/image";
import Link from "next/link";

import { CopyrightYear } from "@/components/copyright-year";
import { footerNav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#1a1f1c] text-white">
      <div className="container-page flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <Link href="/#uvod" aria-label={site.name} className="shrink-0">
            <Image
              src={site.logoSrc}
              alt={site.logoAlt}
              width={168}
              height={44}
              className="h-9 w-auto object-contain object-left"
            />
          </Link>
          <div className="hidden h-8 w-px bg-white/15 sm:block" aria-hidden />
          <p className="text-sm text-white/60">
            {site.addressLines.join(", ")}
          </p>
        </div>

        <nav aria-label="Pätičková navigácia">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.label}>
                {"external" in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-white/45 lg:text-right">
          © <CopyrightYear /> {site.name}
        </p>
      </div>
    </footer>
  );
}
