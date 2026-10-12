import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { contact, site } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="bg-charcoal text-white"
      aria-labelledby="contact-heading"
    >
      <div className="container-page section-space">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_auto_0.85fr] lg:gap-0">
          <Reveal>
            <div className="lg:pr-14">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Kontakt
              </p>
              <h2
                id="contact-heading"
                className="mt-4 max-w-xl font-heading text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
              >
                {contact.heading}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/68 sm:text-lg">
                {contact.supporting}
              </p>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a
                  href={site.phoneHref}
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-brand px-6 text-sm font-semibold text-charcoal transition-colors hover:bg-[#8fb032]"
                >
                  {contact.callLabel}
                </a>
                <a
                  href={site.phoneHref}
                  className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-tight text-white transition-colors hover:text-brand"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>

          <div
            className="hidden w-px bg-white/15 lg:block"
            aria-hidden
          />

          <Reveal delay={2}>
            <div className="space-y-8 border-t border-white/12 pt-8 lg:border-t-0 lg:pl-14 lg:pt-2">
              <a
                href={site.emailHref}
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    E-mail
                  </span>
                  <span className="mt-1 block text-base font-medium text-brand transition-colors group-hover:text-[#b4d35a]">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    Adresa
                  </span>
                  <p className="mt-1 text-base font-medium leading-relaxed text-white">
                    {site.addressLines[0]}
                    <br />
                    {site.addressLines[1]}
                  </p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-[#b4d35a]"
                  >
                    Zobraziť na mape
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
