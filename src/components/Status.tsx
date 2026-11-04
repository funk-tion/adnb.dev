"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "provisioning",
  "reconciling",
  "patching",
  "automating",
  "migrating",
  "debugging",
  "tinkering",
  "building",
  "shipping",
];

const SPIN = ["|", "/", "-", "\\"];

// A terminal-style spinner next to one lowercase word that rolls up into place every few seconds.
export function Status() {
  const [i, setI] = useState(0);
  const [spin, setSpin] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const word = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2800);
    const frame = setInterval(() => setSpin((n) => (n + 1) % SPIN.length), 110);
    return () => {
      clearInterval(word);
      clearInterval(frame);
    };
  }, []);

  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-xs"
      aria-label="Currently building"
    >
      <span className="inline-block w-[1ch] text-center text-signal" aria-hidden>
        {SPIN[spin]}
      </span>
      <span
        className="inline-block h-[1.4em] overflow-hidden leading-[1.4em] text-signal"
        aria-hidden
      >
        <span key={WORDS[i]} className="word-in inline-block">
          {WORDS[i]}
        </span>
      </span>
    </span>
  );
}
