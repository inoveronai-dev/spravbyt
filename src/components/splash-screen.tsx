"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { site } from "@/lib/content";

const STORAGE_KEY = "spravbyt-splash-seen";
const TOTAL_MS = 1800;
const EXIT_MS = 700;
const FAILSAFE_MS = 2600;

function shouldPlaySplash() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return false;
  }
}

function markSplashSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private mode / blocked storage */
  }
}

function clearPendingClass() {
  document.documentElement.classList.remove("splash-pending");
}

/**
 * Session-once cinematic intro. CSS curtain reveal; homepage stays mounted beneath.
 */
export function SplashScreen() {
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const play = shouldPlaySplash();

    if (!play) {
      clearPendingClass();
      return;
    }

    document.documentElement.classList.add("splash-pending");
    document.body.style.overflow = "hidden";

    // Defer into a frame so we don't sync-setState inside the effect body.
    const startFrame = window.requestAnimationFrame(() => {
      setActive(true);
    });

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, TOTAL_MS - EXIT_MS);

    const finish = () => {
      markSplashSeen();
      clearPendingClass();
      document.body.style.overflow = "";
      setActive(false);
    };

    const doneTimer = window.setTimeout(finish, TOTAL_MS);
    const failsafe = window.setTimeout(finish, FAILSAFE_MS);

    return () => {
      window.cancelAnimationFrame(startFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      window.clearTimeout(failsafe);
      document.body.style.overflow = "";
      clearPendingClass();
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className={`splash-screen${exiting ? " is-exiting" : ""}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="splash-screen__stage">
        <Image
          src={site.logoSrc}
          alt=""
          width={280}
          height={72}
          priority
          className="splash-screen__logo h-14 w-auto object-contain sm:h-16"
        />
        <span className="splash-screen__line" />
      </div>
    </div>
  );
}
