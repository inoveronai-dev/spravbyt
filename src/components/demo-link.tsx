import Link from "next/link";
import type { ReactNode } from "react";

import { isDemoAllowedHref } from "@/lib/homepage-demo";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Open in a new tab when the link is allowed and external. */
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
  role?: string;
};

/**
 * Renders a normal link when allowed in homepage-demo mode;
 * otherwise a non-interactive element with the same appearance (no href="#").
 */
export function DemoLink({
  href,
  children,
  className,
  external = false,
  onClick,
  "aria-label": ariaLabel,
  role,
}: Props) {
  if (!isDemoAllowedHref(href)) {
    return (
      <span
        className={className}
        aria-disabled="true"
        aria-label={ariaLabel}
        role={role}
      >
        {children}
      </span>
    );
  }

  if (external || href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        role={role}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        role={role}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      role={role}
    >
      {children}
    </Link>
  );
}
