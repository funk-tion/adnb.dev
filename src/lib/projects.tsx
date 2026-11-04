import type { ReactNode } from "react";

// A link to a technology, for use inside a blurb.
const Tech = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline decoration-line underline-offset-4 transition-colors hover:text-signal"
  >
    {children}
  </a>
);

// To add a project, copy one of these entries and edit it.
//   name:  the title shown in the list
//   blurb: one short line about it. Plain text, or JSX with <Tech href="...">
//          links, but only on entries without an href (a link can't sit inside
//          another link).
//   href:  where clicking goes. A full URL (https://...) opens in a new tab;
//          a path like "/" stays on this site. Leave it out for a plain,
//          non-clickable entry (e.g. something private).
export type Project = { name: string; blurb: ReactNode; href?: string };

export const projects: Project[] = [
  {
    name: "adnb.dev",
    blurb: "This site. Next.js, TypeScript and Tailwind, with CI on GitHub Actions.",
    href: "/",
  },
  {
    name: "NYTHEX",
    blurb: (
      <>
        Always-on home server. Hardened <Tech href="https://ubuntu.com/server">Ubuntu</Tech>,{" "}
        <Tech href="https://claude.ai">Claude</Tech> behind an AI orchestration layer, local LLMs on{" "}
        <Tech href="https://ollama.com">Ollama</Tech> with a GTX 1070,{" "}
        <Tech href="https://www.docker.com">Docker</Tech>,{" "}
        <Tech href="https://www.samba.org">Samba</Tech> and{" "}
        <Tech href="https://www.netdata.cloud">Netdata</Tech>.
      </>
    ),
  },
];
