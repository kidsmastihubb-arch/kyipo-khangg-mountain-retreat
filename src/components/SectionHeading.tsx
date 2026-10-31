import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-6 flex items-center gap-2",
          align === "center" && "justify-center",
        )}
        aria-hidden="true"
      >
        <span className="h-px w-10 bg-gold/60" />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span className="h-px w-10 bg-gold/60" />
      </div>
    </Reveal>
  );
}
