"use client";

import { useEffect, useRef } from "react";

type AnimatedStatProps = {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

function formatSk(value: number) {
  return Math.round(value)
    .toLocaleString("sk-SK")
    .replace(/\u00a0/g, " ");
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedStat({
  value,
  suffix = "+",
  durationMs = 1600,
  className,
}: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const finalLabel = `${formatSk(value)}${suffix}`;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      node.textContent = finalLabel;
      return;
    }

    let frame = 0;
    let startTime = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const current = value * easeOutCubic(progress);
      node.textContent = `${formatSk(current)}${suffix}`;
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        node.textContent = finalLabel;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        node.textContent = `0${suffix}`;
        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [durationMs, suffix, value]);

  const finalLabel = `${formatSk(value)}${suffix}`;

  return (
    <span
      ref={ref}
      className={className}
      style={{
        fontVariantNumeric: "tabular-nums",
        display: "inline-block",
        minWidth: `${finalLabel.length}ch`,
      }}
      suppressHydrationWarning
    >
      {finalLabel}
    </span>
  );
}
