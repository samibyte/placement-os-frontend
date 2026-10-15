import { ArrowRight, Cloud, MapPin, Wallet } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { Job } from "@/lib/types";
import {
  employmentLabel,
  salaryText,
  timeAgo,
  workModeLabel,
} from "@/lib/format";

export default function FeaturedJobs({ jobs }: { jobs: Job[] }) {
  return (
    <section className="border-t border-line/70">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <SectionHeader
          title="Featured Jobs"
          subtitle="Explore top opportunities from leading companies."
          action={
            <a
              href="/jobs"
              className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-brand-500 hover:text-brand-700"
            >
              View All Jobs <ArrowRight size={14} />
            </a>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((j) => (
            <a
              key={j.id}
              href={`/jobs/${j.id}`}
              className="group rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(115,60,101,.45)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-500 text-base font-semibold text-white">
                  {j.company.toLowerCase() === "cloudverse" ? (
                    <Cloud size={18} />
                  ) : (
                    j.company[0]
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold">{j.title}</h3>
                  <p className="text-xs text-muted">{j.company}</p>
                </div>
              </div>
              <p className="mt-3 flex items-center gap-1 text-[11px] text-muted">
                <MapPin size={11} /> {j.location}
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
                <span className="text-[10px] text-muted">
                  {timeAgo(j.postedAt)}
                </span>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium">
                <Wallet size={11} className="text-muted" /> {salaryText(j)}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
