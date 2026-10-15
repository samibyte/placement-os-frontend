"use client";

import { Briefcase, ChevronDown, MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const locations = ["Dhaka", "Chattogram", "Sylhet", "Remote"];
const types = ["Full-time", "Part-time", "Contract", "Internship"];

export default function SearchBar() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("");
  const [type, setType] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (loc) p.set("location", loc);
    if (type) p.set("type", type);
    router.push(`/jobs?${p.toString()}`);
  }

  const select = "w-full appearance-none bg-transparent pr-6 text-sm text-ink outline-none";

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-2 shadow-[0_8px_30px_-12px_rgba(115,60,101,.25)] sm:flex-row sm:items-center">
      <label className="flex min-w-[120px] flex-1 items-center gap-3 px-3 py-2">
        <Search size={18} className="shrink-0 text-ink/70" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search jobs..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted/70" />
      </label>
      <div className="hidden h-8 w-px bg-line sm:block" />
      <label className="relative flex items-center gap-2 px-2 py-2 sm:w-[136px] sm:shrink-0">
        <MapPin size={16} className="shrink-0 text-muted" />
        <select value={loc} onChange={(e) => setLoc(e.target.value)} className={select}>
          <option value="">Location</option>
          {locations.map((l) => <option key={l}>{l}</option>)}
        </select>
        <ChevronDown size={14} className="pointer-events-none absolute right-3 text-muted" />
      </label>
      <div className="hidden h-8 w-px bg-line sm:block" />
      <label className="relative flex items-center gap-2 px-2 py-2 sm:w-[136px] sm:shrink-0">
        <Briefcase size={16} className="shrink-0 text-muted" />
        <select value={type} onChange={(e) => setType(e.target.value)} className={select}>
          <option value="">Job Type</option>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
        <ChevronDown size={14} className="pointer-events-none absolute right-3 text-muted" />
      </label>
      <button type="submit" className="whitespace-nowrap rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600">
        Search Jobs
      </button>
    </form>
  );
}
