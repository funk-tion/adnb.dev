import { PageTransition } from "@/components/PageTransition";
import { projects } from "@/lib/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageTransition>
      <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-medium leading-none tracking-[-0.045em]">
        Projects<span className="text-signal">.</span>
      </h1>
      <ul className="mt-14 border-b border-line">
        {projects.map((p) => {
          if (!p.href) {
            return (
              <li key={p.name} className="border-t border-line py-4">
                <span className="block font-medium">{p.name}</span>
                <span className="mt-0.5 block text-sm text-muted">{p.blurb}</span>
              </li>
            );
          }
          const external = p.href.startsWith("http");
          return (
            <li key={p.name} className="border-t border-line">
              <a
                href={p.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <span>
                  <span className="block font-medium transition-colors group-hover:text-signal">
                    {p.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{p.blurb}</span>
                </span>
                <span className="font-mono text-xs text-muted transition-transform group-hover:translate-x-1">
                  {external ? "↗" : "→"}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </PageTransition>
  );
}
