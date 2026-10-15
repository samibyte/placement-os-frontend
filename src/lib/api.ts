import type { Job } from "./types";

const API = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

const daysAgo = (d: number) => new Date(Date.now() - d * 86_400_000).toISOString();

// Sample data shown until the backend exposes a /jobs endpoint.
export const sampleJobs: Job[] = [
  { id: "1", title: "Frontend Developer", company: "NovaTech", location: "Dhaka, Bangladesh",
    roleCategory: "FRONTEND", employmentType: "FULL_TIME", workMode: "REMOTE",
    salaryMin: 60000, salaryMax: 90000, salaryPeriod: "MONTHLY", postedAt: daysAgo(2) },
  { id: "2", title: "Backend Developer", company: "CloudVerse", location: "Remote",
    roleCategory: "BACKEND", employmentType: "FULL_TIME", workMode: "REMOTE",
    salaryMin: 70000, salaryMax: 100000, salaryPeriod: "MONTHLY", postedAt: daysAgo(3) },
  { id: "3", title: "Full Stack Developer", company: "BrightLabs", location: "Dhaka, Bangladesh",
    roleCategory: "FULLSTACK", employmentType: "FULL_TIME", workMode: "ONSITE",
    salaryMin: 50000, salaryMax: 80000, salaryPeriod: "MONTHLY", postedAt: daysAgo(4) },
  { id: "4", title: "UI/UX Designer", company: "PixelPark", location: "Dhaka, Bangladesh",
    roleCategory: "OTHER", employmentType: "INTERNSHIP", workMode: "HYBRID",
    salaryMin: 30000, salaryMax: 50000, salaryPeriod: "MONTHLY", postedAt: daysAgo(5) },
];

export async function getFeaturedJobs(): Promise<Job[]> {
  if (!API) return sampleJobs;
  try {
    const res = await fetch(`${API}/jobs?featured=true&limit=4`, { next: { revalidate: 60 } });
    if (!res.ok) return sampleJobs;
    const data = (await res.json()) as Job[];
    return Array.isArray(data) && data.length ? data.slice(0, 4) : sampleJobs;
  } catch {
    return sampleJobs;
  }
}
