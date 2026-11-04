export type NavItem = { href: string; label: string; external?: boolean };

export const navItems: NavItem[] = [
  { href: "/", label: "index" },
  { href: "/projects", label: "projects" },
  { href: "https://adnb.hashnode.dev", label: "blog", external: true },
];

export function activeHref(pathname: string) {
  const match = navItems.find(
    ({ href, external }) =>
      !external && (href === "/" ? pathname === "/" : pathname.startsWith(href)),
  );
  return match?.href ?? null;
}
