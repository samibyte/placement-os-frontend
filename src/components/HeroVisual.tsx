import { Cloud } from "lucide-react";
import CountUp from "./CountUp";
import type { HeroData } from "@/lib/types";
import { initials, progressFrom, shortAgo, statusLabel } from "@/lib/format";

export default function HeroVisual({ data }: { data: HeroData }) {
  const { profile, applications } = data;
  const recent = [...applications]
    .sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))
    .slice(0, 3);
  const updates = applications.filter((a) => a.unread).length;
  const prog = progressFrom(applications);
  const job = profile.experience[0];

  return (
    <div
      className="relative mx-auto h-[400px] w-full max-w-[520px] lg:mx-0"
      aria-hidden
    >
      <svg
        viewBox="0 0 600 380"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M150 60C220 -10 380 -10 470 40c90 50 130 130 90 210-40 80-170 110-290 90C150 320 30 290 10 200 -5 130 90 120 150 60Z"
          fill="#ecd9e6"
          opacity=".85"
        />
      </svg>

      <span className="absolute left-[-10px] top-[72px] hidden w-24 font-script text-[11px] leading-tight text-ink/80 xl:block lg:left-[-110px]">
        Tailor your CV
        <br />
        for each job
      </span>
      <svg
        className="absolute left-[8px] top-[112px] hidden text-brand-500 lg:left-[-30px] lg:block"
        width="50"
        height="34"
        viewBox="0 0 50 34"
        fill="none"
      >
        <path
          d="M3 4c-2 14 14 26 34 18"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="m32 14 7 8-10 3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* CV card */}
      <div className="absolute left-[8%] top-[48px] w-[245px] -rotate-6 rounded-2xl border border-line bg-white p-5 shadow-[0_20px_50px_-20px_rgba(115,60,101,.4)]">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-sm font-semibold text-white">
            {initials(profile.name)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{profile.name}</p>
            <p className="truncate text-[10px] text-muted">
              {profile.headline}
            </p>
          </div>
        </div>
        <p className="mt-5 text-xs font-semibold">Skills</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {profile.skills.slice(0, 5).map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-brand-50 px-2 py-0.5 text-[9px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
        <hr className="my-4 border-line" />
        <p className="text-xs font-semibold">Experience</p>
        {job ? (
          <>
            <p className="mt-2 text-[10px] font-medium">{job.role}</p>
            <p className="text-[9px] text-muted">
              {job.company} · {job.start} – {job.end}
            </p>
            <ul className="mt-1.5 space-y-1 text-[9px] text-muted">
              {job.bullets.slice(0, 2).map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-2 text-[10px] text-muted">
            Add your experience to see it here.
          </p>
        )}
      </div>

      {/* Applications card */}
      <div className="absolute right-0 top-[10px] w-[270px] rotate-[2deg] rounded-2xl border border-line bg-white p-4 shadow-[0_20px_50px_-20px_rgba(115,60,101,.35)]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold">Your Applications</p>
          {updates > 0 && (
            <p className="text-[9px] font-medium text-brand-500">
              {updates} new update{updates > 1 && "s"}
            </p>
          )}
        </div>
        {recent.length ? (
          <ul className="divide-y divide-line">
            {recent.map((a) => (
              <li key={a.id} className="flex items-center gap-3 py-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500 text-sm font-semibold text-white">
                  {a.company.toLowerCase() === "cloudverse" ? (
                    <Cloud size={16} />
                  ) : (
                    a.company[0]
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold">
                    {a.jobTitle}
                  </p>
                  <p className="text-[9px] text-muted">{a.company}</p>
                  <p className="truncate text-[9px] text-muted">{a.location}</p>
                </div>
                <div className="text-right">
                  <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[9px] text-brand-600">
                    {statusLabel[a.status]}
                  </span>
                  <p className="mt-1 text-[9px] text-muted">
                    {shortAgo(a.updatedAt)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-6 text-center text-[11px] text-muted">
            No applications yet.
          </p>
        )}
      </div>

      {/* Progress card */}
      <div className="absolute bottom-[8px] right-[4px] w-[262px] rounded-2xl border border-line bg-white p-4 shadow-[0_20px_50px_-20px_rgba(115,60,101,.35)]">
        <p className="text-xs font-semibold">Application Progress</p>
        <div className="relative mt-4 px-1">
          <div className="absolute left-2 right-2 top-[5px] h-px bg-brand-300" />
          <div className="relative flex justify-between">
            {(
              [
                ["Applied", prog.applied],
                ["Interview", prog.interview],
                ["Offer", prog.offer],
              ] as const
            ).map(([l, v]) => (
              <div key={l} className="flex flex-col items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-brand-500 bg-white" />
                <span className="text-[9px] text-muted">{l}</span>
                <span className="text-[10px] font-semibold">
                  <CountUp value={v} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
