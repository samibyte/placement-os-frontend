// Mirrors the enums in the backend's prisma/model/enum.prisma.
export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "INTERNSHIP";
export type WorkMode = "REMOTE" | "HYBRID" | "ONSITE";
export type RoleCategory =
  | "BACKEND"
  | "FRONTEND"
  | "FULLSTACK"
  | "AI_ML"
  | "DEVOPS"
  | "MOBILE"
  | "QA"
  | "DATA"
  | "OTHER";
export type SalaryPeriod = "MONTHLY" | "YEARLY";
export type ApplicationStatus =
  | "SAVED"
  | "CONSIDERING"
  | "APPLIED"
  | "INTERVIEW"
  | "OFFER"
  | "ACCEPTED"
  | "REJECTED"
  | "WITHDRAWN";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  roleCategory: RoleCategory;
  employmentType: EmploymentType;
  workMode: WorkMode;
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: SalaryPeriod;
  postedAt: string; // ISO date
}

export interface ExperienceItem {
  role: string;
  company: string;
  start: string; // e.g. "Jun 2024"
  end: string; // e.g. "Aug 2024" or "Present"
  bullets: string[];
}

export interface Profile {
  name: string;
  headline: string;
  skills: string[];
  experience: ExperienceItem[];
}

export interface ApplicationSummary {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  status: ApplicationStatus;
  updatedAt: string; // ISO date
  unread?: boolean;
}

export interface HeroData {
  profile: Profile;
  applications: ApplicationSummary[];
  /** "api" when loaded from the backend, "demo" when showing sample data */
  source: "api" | "demo";
}
