"use client";

import { useEffect } from "react";

export function ScrollRestoration() {
  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {}

    const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const nav = entries[0];
    const isReload = nav?.type === "reload";

    if (isReload && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return null;
}
