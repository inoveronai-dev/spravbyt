"use client";

import { useEffect, useState } from "react";

/** Client-only year to satisfy Next.js cache-components prerender rules. */
export function CopyrightYear() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
