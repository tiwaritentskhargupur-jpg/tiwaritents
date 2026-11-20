import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  forest:
    "bg-forest-dark text-on-primary hover:bg-forest-deep",
  gold: "bg-accent-light text-forest-deep hover:bg-champagne hover:shadow-lg",
  ghost:
    "border border-ivory-light/70 text-ivory-light bg-forest-dark/40 hover:bg-ivory-light hover:text-forest-dark",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "forest",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-label text-label-lg uppercase transition-all duration-300 ease-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${variants[variant]} ${className}`;
  const external = href.startsWith("http");

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
