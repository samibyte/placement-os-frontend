import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    n: 1,
    title: "Create Your Profile",
    text: "Add your details, skills and experience.",
  },
  {
    n: 2,
    title: "Build & Optimize Your CV",
    text: "Use our AI tools to make your CV job-ready.",
  },
  {
    n: 3,
    title: "Apply & Track",
    text: "Find jobs, apply easily and track your progress.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-line/70">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <SectionHeader
          title="How It Works"
          subtitle="Get started in 3 simple steps and take control of your career journey."
          action={
            <a
              href="/about"
              className="hidden items-center gap-1.5 text-xs font-medium text-brand-500 hover:text-brand-700 sm:flex"
            >
              Learn more <ArrowRight size={14} />
            </a>
          }
        />
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.n}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 text-lg font-semibold text-white shadow-md shadow-brand-500/30">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-brand-200 md:block" />
                )}
              </div>
              <h3 className="mt-5 text-sm font-semibold">{s.title}</h3>
              <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-muted">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
