/**
 * Homepage visual-demo gate.
 * When enabled, only in-page anchors and contact/maps links remain active.
 * Flip to false when subpages are ready.
 */
export const HOMEPAGE_DEMO_ONLY = true;

/** True when this href may navigate during the homepage demo. */
export function isDemoAllowedHref(href: string): boolean {
  if (!HOMEPAGE_DEMO_ONLY) return true;

  const value = href.trim();
  if (!value) return false;

  if (value.startsWith("tel:") || value.startsWith("mailto:")) return true;

  // Homepage section anchors
  if (value.startsWith("#") || value.startsWith("/#")) return true;
  if (value === "/") return true;

  // Google Maps (embed/share links used in Kontakt)
  try {
    if (value.startsWith("http://") || value.startsWith("https://")) {
      const host = new URL(value).hostname.replace(/^www\./, "");
      if (
        host === "maps.app.goo.gl" ||
        host === "maps.google.com" ||
        host === "maps.google.sk" ||
        (host === "google.com" && value.includes("/maps")) ||
        (host === "google.sk" && value.includes("/maps"))
      ) {
        return true;
      }
    }
  } catch {
    return false;
  }

  return false;
}
