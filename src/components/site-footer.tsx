import Image from "next/image";
import Link from "next/link";

import { CopyrightYear } from "@/components/copyright-year";
import { footerNav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep text-white">
      <div className="container-page flex flex-col gap-7 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-7">
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
