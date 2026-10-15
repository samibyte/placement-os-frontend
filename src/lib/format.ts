import type { ApplicationStatus, ApplicationSummary, EmploymentType, Job, WorkMode } from "./types";

export const employmentLabel: Record<EmploymentType, string> = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  CONTRACT: "Contract",
  INTERNSHIP: "Internship",
};

export const workModeLabel: Record<WorkMode, string> = {
  REMOTE: "Remote",
  HYBRID: "Hybrid",
  ONSITE: "On-site",
};

const n = (v: number) => v.toLocaleString("en-US");

export function salaryText(j: Pick<Job, "salaryMin" | "salaryMax" | "salaryPeriod">) {
  const per = j.salaryPeriod === "MONTHLY" ? "month" : "year";
  return `৳ ${n(j.salaryMin)} – ${n(j.salaryMax)} / ${per}`;
}

export function timeAgo(iso: string, now = Date.now()) {
  const days = Math.max(0, Math.round((now - new Date(iso).getTime()) / 86_400_000));
  return days === 0 ? "today" : `${days}d ago`;
}

export const statusLabel: Record<ApplicationStatus, string> = {
  SAVED: "Saved", CONSIDERING: "Considering", APPLIED: "Applied", INTERVIEW: "Interview",
  OFFER: "Offer", ACCEPTED: "Accepted", REJECTED: "Rejected", WITHDRAWN: "Withdrawn",
};

export const shortAgo = (iso: string, now = Date.now()) => {
  const d = Math.max(0, Math.round((now - new Date(iso).getTime()) / 86_400_000));
  return d === 0 ? "today" : `${d}d`;
};

export const initials = (name: string) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

/** Funnel counts: each stage includes the stages after it. */
export function progressFrom(apps: ApplicationSummary[]) {
  const reached = (...st: ApplicationStatus[]) => apps.filter((a) => st.includes(a.status)).length;
  return {
    applied: reached("APPLIED", "INTERVIEW", "OFFER", "ACCEPTED"),
    interview: reached("INTERVIEW", "OFFER", "ACCEPTED"),
    offer: reached("OFFER", "ACCEPTED"),
  };
}
