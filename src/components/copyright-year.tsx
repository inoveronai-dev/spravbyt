"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 2026;
}

/** Dynamic year without blocking Next.js cache-components prerender. */
export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
  return <>{year}</>;
}
