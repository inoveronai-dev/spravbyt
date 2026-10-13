import Image from "next/image";
import { ArrowRight, ArrowUpRight, FileText, Users } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { about } from "@/lib/content";

const methodIcons = [FileText, Users] as const;

export function AboutSection() {
  return (
    <section
      id="o-spolocnosti"
      className="border-b border-border bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-page section-space">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <Reveal>
            <figure className="relative w-full overflow-hidden rounded-2xl bg-mist">
              <div className="relative aspect-[5/4] min-h-[16rem] w-full lg:min-h-[24rem]">
                <Image
                  src="/spravbyt-office.png"
                  alt="Sídlo SPRAVBYT s.r.o. — prevádzka na prízemí bytového domu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover object-[center_58%]"
                />
              </div>
            </figure>
          </Reveal>

          <div>
            <Reveal delay={1}>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2
                id="about-heading"
                className="display-heading mt-4 max-w-[11ch] text-[clamp(2.55rem,5.4vw,4.35rem)] leading-[1.08] text-charcoal"
              >
                Skúsenosti,
                <br />
                na ktorých
                <br />
                môžete stavať.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {about.intro}
              </p>
              <p className="font-display mt-8 max-w-md border-l-2 border-brand pl-5 text-[clamp(1.15rem,2vw,1.4rem)] font-medium italic leading-[1.45] tracking-[-0.01em] text-forest">
                {about.prioritiesLabel}: {about.priorities}
              </p>
            </Reveal>

            <Reveal delay={2}>
              <a
                href={about.moreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-forest link-underline"
              >
                Viac o spoločnosti
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {about.methods.map((method, index) => {
            const Icon = methodIcons[index] ?? FileText;
            return (
              <Reveal
                key={method.number}
                delay={(Math.min(index + 1, 2) as 1 | 2)}
              >
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-mist/70 px-5 py-5 sm:px-6">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-base font-semibold tracking-tight text-charcoal sm:text-lg">
                      {method.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      {method.description}
                    </p>
                  </div>
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-forest">
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
