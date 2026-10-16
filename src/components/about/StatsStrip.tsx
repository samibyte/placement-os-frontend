import SectionHeader from "../SectionHeader";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "5K+", label: "Companies Hiring" },
  { value: "50K+", label: "Job Seekers Placed" },
  { value: "95%", label: "Satisfaction Rate" },
];

export default function StatsStrip() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-10">
      <SectionHeader
        title="PlacementOS by the Numbers"
        subtitle="A growing community of learners, companies and hiring teams building careers together."
      />
      <dl className="grid grid-cols-2 gap-y-8 rounded-2xl bg-brand-100/60 py-8 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse items-center gap-1.5 text-center ${
              i > 0 ? "lg:border-l lg:border-brand-200" : ""
            } ${i % 2 === 1 ? "max-lg:border-l max-lg:border-brand-200" : ""}`}
          >
            <dt className="text-sm text-ink/70">{s.label}</dt>
            <dd className="text-2xl font-bold text-brand-500">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
