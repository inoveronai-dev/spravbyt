import { cn } from "cn";

type ArchitecturalVisualProps = {
  className?: string;
  label?: string;
  variant?: "hero" | "about";
};

/**
 * Replaceable media slot — office photograph not provided for v1.
 * Swap this composition for an intentionally cropped company photo when available.
 */
export function ArchitecturalVisual({
  className,
  label,
  variant = "hero",
}: ArchitecturalVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm bg-charcoal",
        variant === "hero" ? "aspect-[4/5] min-h-[22rem] sm:min-h-[28rem] lg:aspect-[5/6] lg:min-h-0" : "aspect-[5/6] min-h-[20rem]",
        className
      )}
      role="img"
      aria-label={
        label ??
        "Architektonická vizuálna kompozícia — rezervované miesto pre fotografiu sídla spoločnosti"
      }
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(145deg, #2a312c 0%, #202522 42%, #343b36 100%)",
        }}
      />

      {/* Soft structural grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f7f8f5 1px, transparent 1px), linear-gradient(to bottom, #f7f8f5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Building slabs inspired by the logo mark */}
      <div className="absolute inset-x-[12%] bottom-[14%] top-[18%] flex items-end gap-2 sm:gap-3">
        <div className="h-[55%] w-[22%] rounded-[2px] bg-white/10 shadow-[inset_0_0_0_1px_rgba(247,248,245,0.08)]" />
        <div className="h-[72%] w-[26%] rounded-[2px] bg-white/14 shadow-[inset_0_0_0_1px_rgba(247,248,245,0.1)]" />
        <div className="relative h-full w-[34%] rounded-[2px] bg-white/18 shadow-[inset_0_0_0_1px_rgba(247,248,245,0.12)]">
          <span
            className="absolute bottom-4 left-1/2 -translate-x-1/2 font-heading text-3xl font-semibold tracking-tight text-brand sm:text-4xl"
            aria-hidden
          >
            S
          </span>
        </div>
      </div>

      {/* Accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-brand" />

      {label ? (
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <span className="rounded-sm border border-white/15 bg-charcoal/55 px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
            {label}
          </span>
        </div>
      ) : null}

      <span className="sr-only">
        Rezervované miesto pre autentickú fotografiu sídla SPRAVBYT. Nahraďte
        komponentom Image po dodaní orezanej fotografie fasády.
      </span>
    </div>
  );
}
