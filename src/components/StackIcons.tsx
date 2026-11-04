import { type StackItem, stack } from "@/lib/stack";

export function StackIcons({ items = stack }: { items?: StackItem[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {items.map((t) => (
        <li key={t.name} className="relative">
          <a
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.name}
            className="peer flex size-5 items-center justify-center text-muted transition-colors hover:text-signal focus-visible:text-signal"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
              <path d={t.path} />
            </svg>
          </a>
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded border border-line bg-sheet px-2 py-1 font-mono text-[11px] text-ink opacity-0 transition-all peer-hover:translate-y-0 peer-hover:opacity-100 peer-focus-visible:translate-y-0 peer-focus-visible:opacity-100"
          >
            {t.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
