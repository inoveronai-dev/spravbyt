import { cn } from "cn";

type MediaSlotProps = {
  className?: string;
  label: string;
  aspectClassName?: string;
  variant?: "portrait" | "landscape";
};

/**
 * Replaceable media slot for missing client photographs.
 * Do not present this as a real SPRAVBYT-managed property or storefront.
 */
export function MediaSlot({
  className,
  label,
  aspectClassName,
  variant = "portrait",
}: MediaSlotProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-charcoal",
        variant === "portrait"
          ? "aspect-[3/4] min-h-[22rem]"
          : "aspect-[4/3] min-h-[16rem]",
        aspectClassName,
        className
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #2f3732 0%, #202522 48%, #343b36 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f7f8f5 1px, transparent 1px), linear-gradient(to bottom, #f7f8f5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-x-[14%] bottom-[16%] top-[20%] flex items-end gap-2">
        <div className="h-[58%] w-[24%] bg-white/10" />
        <div className="h-[74%] w-[28%] bg-white/14" />
        <div className="relative h-full w-[36%] bg-white/18">
          <span
            className="absolute bottom-3 left-1/2 -translate-x-1/2 font-heading text-3xl font-semibold text-brand"
            aria-hidden
          >
            S
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
      <div className="absolute bottom-4 left-4 right-4">
        <span className="inline-block border border-white/20 bg-charcoal/50 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/85 backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
