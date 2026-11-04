"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { activeHref, navItems } from "@/lib/nav";

export function NavLinks({ active }: { active: string | null }) {
  return (
    <nav className="flex gap-5">
      {navItems.map(({ href, label, external }) => {
        const on = href === active;
        const className = `text-sm transition-colors hover:text-signal ${on ? "text-ink" : "text-muted"}`;
        return external ? (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {label}
            <span aria-hidden className="ml-0.5 text-[0.7em]">
              ↗
            </span>
          </a>
        ) : (
          <Link key={href} href={href} aria-current={on ? "page" : undefined} className={className}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Nav() {
  return <NavLinks active={activeHref(usePathname())} />;
}
