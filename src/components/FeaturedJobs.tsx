import {
  ArrowRightIcon,
  CloudIcon,
  MapPinIcon,
  WalletIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import {
  employmentLabel,
  salaryText,
  timeAgo,
  workModeLabel,
} from "@/lib/format";
import type { Job } from "@/lib/types";
import SectionHeader from "./SectionHeader";

export default function FeaturedJobs({ jobs }: { jobs: Job[] }) {
  return (
    <section className="border-t border-line/70">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <SectionHeader
          title="Featured Jobs"
          subtitle="Explore top opportunities from leading companies."
          action={
            <Link
              href="/jobs"
              className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-brand-500 hover:text-brand-700"
            >
              View All Jobs <ArrowRightIcon size={14} />
            </Link>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((j) => (
            <Link
              key={j.id}
              href={`/jobs/${j.id}`}
              className="group rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(115,60,101,.45)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-500 text-base font-semibold text-white">
                  {j.company.toLowerCase() === "cloudverse" ? (
                    <CloudIcon size={18} />
                  ) : (
                    j.company[0]
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold">{j.title}</h3>
                  <p className="text-xs text-subtle">{j.company}</p>
                </div>
              </div>
              <p className="mt-3 flex items-center gap-1 text-[11px] text-subtle">
                <MapPinIcon size={11} /> {j.location}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[10px] text-brand-600">
                    {employmentLabel[j.employmentType]}
                  </span>
                  <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[10px] text-brand-600">
                    {workModeLabel[j.workMode]}
                  </span>
                </div>
                <span className="text-[10px] text-subtle">
                  {timeAgo(j.postedAt)}
                </span>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium">
                <WalletIcon size={11} className="text-subtle" /> {salaryText(j)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
