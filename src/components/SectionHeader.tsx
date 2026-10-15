import type { ReactNode } from "react";

/** Title + subtitle that sits on top of every section, with an optional right-aligned action. */
export default function SectionHeader({
  title, subtitle, action,
}: { title: string; subtitle: string; action?: ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">{title}</h2>
        <p className="mt-1.5 max-w-xl text-sm text-muted sm:text-[15px]">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}
