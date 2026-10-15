import { cookies } from "next/headers";
import type { ApplicationSummary, HeroData, Profile } from "./types";

const API = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
const daysAgo = (d: number) => new Date(Date.now() - d * 86_400_000).toISOString();

const demoProfile: Profile = {
  name: "Tee Smith",
  headline: "Software Engineer",
  skills: ["Python", "React", "Next.js", "SQL", "Git"],
  experience: [{
    role: "Software Development Intern", company: "TechSolutions Ltd.", start: "Jun 2024", end: "Aug 2024",
    bullets: ["Built responsive web applications", "Collaborated with cross-functional teams"],
  }],
};

// Filler rows so the demo funnel reads 12 applied / 3 interview / 1 offer, matching the design
// (the three rows below already contribute 3 applied, 2 interview, 1 offer).
const demoFiller = ["INTERVIEW", ...Array(8).fill("APPLIED")] as ApplicationSummary["status"][];
const demoTop: Omit<ApplicationSummary, "id">[] = [
  { jobTitle: "Frontend Developer", company: "NovaTech", location: "Dhaka, Bangladesh", status: "INTERVIEW", updatedAt: daysAgo(2), unread: true },
  { jobTitle: "Backend Developer", company: "CloudVerse", location: "Remote", status: "APPLIED", updatedAt: daysAgo(3), unread: true },
  { jobTitle: "Full Stack Developer", company: "BrightLabs", location: "Dhaka, Bangladesh", status: "OFFER", updatedAt: daysAgo(4), unread: true },
];
const demoApplications: ApplicationSummary[] = [
  ...demoTop.map((a, i) => ({ ...a, id: `d${i}` })),
  ...demoFiller.map((status, i) => ({
    id: `x${i}`, jobTitle: "Software Engineer", company: "Sample Co", location: "Remote",
    status, updatedAt: daysAgo(10 + i),
  })),
];

export const demoHero: HeroData = { profile: demoProfile, applications: demoApplications, source: "demo" };

/**
 * Loads the signed-in user's profile + applications from the backend.
 * Expected (not yet implemented in the backend):
 *   GET /me/profile       -> Profile
 *   GET /me/applications  -> ApplicationSummary[]
 * Sends the `token` cookie as a Bearer token when present. Falls back to demo data
 * for logged-out visitors, when no API is configured, or on any error.
 */
export async function getHeroData(): Promise<HeroData> {
  const token = (await cookies()).get("token")?.value; // also opts the page into dynamic rendering
  if (!API || !token) return demoHero;
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const [pr, ar] = await Promise.all([
      fetch(`${API}/me/profile`, { headers, cache: "no-store" }),
      fetch(`${API}/me/applications`, { headers, cache: "no-store" }),
    ]);
    if (!pr.ok || !ar.ok) return demoHero;
    return { profile: (await pr.json()) as Profile, applications: (await ar.json()) as ApplicationSummary[], source: "api" };
  } catch {
    return demoHero;
  }
}
