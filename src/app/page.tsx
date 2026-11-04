import { NameWave } from "@/components/NameWave";
import { PageTransition } from "@/components/PageTransition";
import { StackIcons } from "@/components/StackIcons";
import { Status } from "@/components/Status";
import { learning } from "@/lib/stack";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export default function Home() {
  return (
    <PageTransition>
      <h1
        className="rise text-[clamp(2rem,6vw,3.5rem)] font-medium leading-[1] tracking-[-0.045em]"
        style={d(0)}
      >
        Hi, I&apos;m <NameWave text="Aidan" />
        <span className="text-signal">.</span>
      </h1>

      <p className="rise mt-8 max-w-md text-lg leading-relaxed text-muted" style={d(0.1)}>
        I work on cloud and on-prem infrastructure for a large insurer, building with Pulumi and
        Azure. I enjoy experimenting with and learning new tech, and using AI tools to build faster.
      </p>

      <dl className="rise mt-16 border-b border-line text-sm" style={d(0.2)}>
        {[
          ["Stack", <StackIcons key="st" />],
          ["Learning", <StackIcons key="ln" items={learning} />],
          ["Status", <Status key="s" />],
        ].map(([k, v]) => (
          <div
            key={String(k)}
            className="grid grid-cols-[5rem_1fr] gap-4 border-t border-line py-3"
          >
            <dt className="label pt-0.5">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </PageTransition>
  );
}
