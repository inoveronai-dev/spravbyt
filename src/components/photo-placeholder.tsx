import { cn } from "cn";

type PhotoPlaceholderProps = {
  className?: string;
  aspectClassName?: string;
  label?: string;
};

/** Elegant reserved media frame — no stock/AI imagery. */
export function PhotoPlaceholder({
  className,
  aspectClassName = "aspect-[4/5]",
  label = "Fotografia sa doplní",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-mist",
        aspectClassName,
        className
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(160deg, #f4f7ef 0%, #e8efe0 45%, #dfe8d6 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f3d32 1px, transparent 1px), linear-gradient(to bottom, #1f3d32 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <svg
        viewBox="0 0 120 160"
        className="absolute inset-0 m-auto h-[55%] w-auto text-forest/20"
        aria-hidden
      >
        <path
          d="M20 140V70L45 48l25 22v70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M55 140V55L80 35l25 20v85"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M15 140h90" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
        <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-forest/80 backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
