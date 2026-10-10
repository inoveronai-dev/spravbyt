import Image from "next/image";
import Link from "next/link";

import { CopyrightYear } from "@/components/copyright-year";
import {
  footerNav,
  footerUseful,
  site,
} from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-charcoal text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
        <div>
          <Link href="/#uvod" aria-label={site.name}>
            <Image
              src={site.logoSrc}
              alt={site.logoAlt}
              width={200}
              height={52}
              className="h-11 w-auto object-contain object-left"
            />
          </Link>
          <p className="mt-5 font-heading text-lg font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-white/65">{site.city}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Správa bytových a nebytových priestorov od roku {site.foundedYear}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            Navigácia
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.label}>
                {"external" in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 md:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-brand"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="transition-colors hover:text-brand"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-colors hover:text-brand"
                >
                  {site.addressLines.join(", ")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Užitočné odkazy
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerUseful.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}. Všetky práva vyhradené.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
