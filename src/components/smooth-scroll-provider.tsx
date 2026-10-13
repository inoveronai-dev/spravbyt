"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

import "lenis/dist/lenis.css";

const FALLBACK_HEADER_OFFSET = -96;

function getHeaderOffset() {
  const header = document.querySelector("header");
  if (!header) return FALLBACK_HEADER_OFFSET;
  return -(header.getBoundingClientRect().height + 12);
}

function resolveHashTarget(hash: string) {
  if (!hash || hash === "#") return null;
  try {
    return document.querySelector<HTMLElement>(hash);
  } catch {
    return null;
  }
}

function isSamePageHashLink(anchor: HTMLAnchorElement) {
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }

  if (url.origin !== window.location.origin) return false;
  if (!url.hash) return false;

  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const targetPath = url.pathname.replace(/\/$/, "") || "/";
  return currentPath === targetPath;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const destroyLenis = () => {
      if (!lenis) return;
      lenis.destroy();
      lenis = null;
    };

    const scrollToHash = (
      hash: string,
      { immediate = false, updateHistory = false }: {
        immediate?: boolean;
        updateHistory?: boolean;
      } = {}
    ) => {
      const target = resolveHashTarget(hash);
      if (!target || !lenis) return false;

      lenis.scrollTo(target, {
        offset: getHeaderOffset(),
        immediate,
        lock: true,
      });

      if (updateHistory) {
        window.history.pushState(null, "", hash);
      }

      return true;
    };

    const onAnchorClick = (event: MouseEvent) => {
      if (!lenis || event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement) || !isSamePageHashLink(anchor)) {
        return;
      }

      const hash = new URL(anchor.href).hash;
      if (!resolveHashTarget(hash)) return;

      event.preventDefault();
      scrollToHash(hash, { updateHistory: true });
    };

    const onHashChange = () => {
      if (!lenis || !window.location.hash) return;
      scrollToHash(window.location.hash);
    };

    const initLenis = () => {
      destroyLenis();
      if (motionQuery.matches) return;

      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: false,
        autoRaf: true,
        autoToggle: true,
        anchors: false,
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
        prevent: (node) =>
          Boolean(
            node.closest(
              "[data-lenis-prevent], [data-slot='dialog-content'], [data-slot='dialog-overlay'], #mobile-nav"
            )
          ),
      });

      if (window.location.hash) {
        // Restore deep links without a visible jump after layout settles.
        requestAnimationFrame(() => {
          scrollToHash(window.location.hash, { immediate: true });
        });
      }
    };

    const onMotionChange = () => {
      initLenis();
    };

    initLenis();
    document.addEventListener("click", onAnchorClick, true);
    window.addEventListener("hashchange", onHashChange);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      document.removeEventListener("click", onAnchorClick, true);
      window.removeEventListener("hashchange", onHashChange);
      motionQuery.removeEventListener("change", onMotionChange);
      destroyLenis();
    };
  }, []);

  return children;
}
