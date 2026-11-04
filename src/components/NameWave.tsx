// Splits the text into letters so CSS can ripple them on hover (see .wave in globals.css).
export function NameWave({ text }: { text: string }) {
  return (
    <span className="wave" aria-label={text}>
      {[...text].map((c, i) => (
        <span key={i} aria-hidden style={{ "--i": i } as React.CSSProperties}>
          {c}
        </span>
      ))}
    </span>
  );
}
