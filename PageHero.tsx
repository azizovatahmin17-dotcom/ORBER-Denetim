import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        {eyebrow ? (
          <span className="inline-flex rounded-full border border-turquoise/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-turquoise">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy-foreground md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
