import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: "10K+", label: "Active Jobs" },
  { value: "5K+", label: "Companies" },
  { value: "50K+", label: "Job Seekers" },
];

export default function StatsBanner() {
  return (
    <section className="border-t border-line/70">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <SectionHeader
          title="Trusted by Job Seekers"
          subtitle="Join a growing community finding work that fits."
        />
        <div className="flex flex-col gap-8 rounded-2xl bg-brand-100/70 px-8 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold leading-snug">
              Your next chapter
              <br />
              starts here.
            </p>
            <span className="mt-3 block h-0.5 w-6 rounded bg-brand-500" />
          </div>
          <dl className="flex flex-1 justify-around gap-6 md:divide-x md:divide-brand-200">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-1 flex-col-reverse md:px-8"
              >
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="text-xl font-bold text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Get Started <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
