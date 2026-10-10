import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { contact, site } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="section-space bg-charcoal text-white"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Kontakt
              </p>
              <h2
                id="contact-heading"
                className="mt-4 max-w-xl font-heading text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
              >
                {contact.heading}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                {contact.supporting}
              </p>

              <a
                href={site.phoneHref}
                className="mt-9 inline-flex h-12 items-center justify-center rounded-md bg-brand px-6 text-sm font-semibold text-charcoal transition-colors hover:bg-[#8fb032]"
              >
                {contact.callLabel}
              </a>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="space-y-5 border border-white/10 bg-charcoal-soft/40 p-6 sm:p-8">
              <a
                href={site.phoneHref}
                className="group flex items-start gap-4 rounded-md p-2 transition-colors hover:bg-white/5"
              >
                <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    Telefón
                  </span>
                  <span className="mt-1 block font-heading text-xl font-semibold tracking-tight group-hover:text-brand">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={site.emailHref}
                className="group flex items-start gap-4 rounded-md p-2 transition-colors hover:bg-white/5"
              >
                <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    E-mail
                  </span>
                  <span className="mt-1 block text-base font-medium group-hover:text-brand">
                    {site.email}
                  </span>
                </span>
              </a>

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-md p-2 transition-colors hover:bg-white/5"
              >
                <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    Adresa
                  </span>
                  <span className="mt-1 block text-base font-medium leading-relaxed">
                    {site.addressLines[0]}
                    <br />
                    {site.addressLines[1]}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Otvoriť v mape
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
