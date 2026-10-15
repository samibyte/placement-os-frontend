import { SparkleIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import type { HeroData } from "@/lib/types";
import HeroVisual from "./HeroVisual";
import SearchBar from "./SearchBar";

const trending = [
  "Frontend Developer",
  "Data Science",
  "UI/UX Designer",
  "Internship",
];

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 pb-16 pt-6 lg:grid-cols-[minmax(0,1fr)_520px]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/70 px-3 py-1.5 text-[11px] font-medium text-brand-600">
          <SparkleIcon size={12} /> Your Career, Our Priority
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-[46px]">
          Redesign Your CV.
          <br />
          Land Your Next
          <br />
          <span className="text-brand-500">Opportunity.</span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/80">
          Tailor your CV to match job requirements, track applications, and get
          personalized guidance — all in one place.
        </p>
        <div className="mt-9 max-w-[680px]">
          <SearchBar />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-semibold">Trending:</span>
          {trending.map((t) => (
            <Link
              key={t}
              href={`/jobs?q=${encodeURIComponent(t)}`}
              className="rounded-full bg-brand-100 px-3 py-1 text-[11px] text-brand-600 hover:bg-brand-200"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
      <HeroVisual data={data} />
    </section>
  );
}
