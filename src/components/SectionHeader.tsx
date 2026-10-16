import type { ReactNode } from "react";

/** Title + subtitle that sits on top of every section, with an optional eyebrow pill and right-aligned action. */
export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  action,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <span className="mb-3 inline-flex rounded-full bg-brand-100 px-3 py-1 text-[11px] font-semibold text-brand-600">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">
          {title}
        </h2>
        <p className="mt-1.5 max-w-2xl text-sm text-muted sm:text-[15px]">
          {subtitle}
        </p>
      </div>
      {action}
    </div>
  );
}
