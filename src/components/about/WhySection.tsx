import {
  BookOpen,
  Briefcase,
  FileText,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import SectionHeader from "../SectionHeader";

const reasons = [
  {
    icon: FileText,
    title: "Smarter CVs",
    text: "Create CVs tailored to your target roles with AI-powered suggestions.",
  },
  {
    icon: Briefcase,
    title: "Relevant Opportunities",
    text: "Discover jobs, internships and placements that match your skills and interests.",
  },
  {
    icon: TrendUp,
    title: "Track with Confidence",
    text: "Monitor your applications and never miss an update.",
  },
  {
    icon: BookOpen,
    title: "Career Resources",
    text: "Get expert tips, guides and industry insights to stay ahead.",
  },
];

export default function WhySection() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-6">
      <div className="rounded-3xl bg-brand-100/50 px-6 py-10 sm:px-10">
        <SectionHeader
          eyebrow="Why PlacementOS?"
          title="Built for your growth, at every step."
          subtitle="We know the journey from learning to landing a job isn't always easy. That's why PlacementOS gives you the right tools, guidance and opportunities — when you need them most."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`flex items-start gap-4 lg:px-6 ${
                i > 0 ? "lg:border-l lg:border-brand-200" : "lg:pl-0"
              }`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/80 text-brand-500 shadow-sm">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
