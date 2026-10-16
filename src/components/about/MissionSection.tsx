import {
  Lightbulb,
  ShieldCheck,
  Target,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import SectionHeader from "../SectionHeader";

const values = [
  {
    icon: Target,
    title: "Accessibility",
    text: "Equal opportunities, for every learner.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Smarter tools for a brighter future.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Your data, your control. Always.",
  },
  {
    icon: UsersThree,
    title: "Impact",
    text: "Building a stronger workforce, together.",
  },
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden">
      <svg
        viewBox="0 0 300 200"
        className="pointer-events-none absolute -bottom-10 -right-10 hidden h-[200px] w-[300px] md:block"
        fill="none"
        aria-hidden
      >
        <title>Decorative wave</title>
        <path
          d="M300 40C230 40 190 110 130 150S40 210 0 200V260h300Z"
          fill="#ecd9e6"
          opacity=".7"
        />
        <path
          d="M40 220C120 190 170 120 300 90"
          stroke="#a25b8f"
          strokeWidth="1"
          opacity=".6"
        />
      </svg>

      <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-10">
        <SectionHeader
          eyebrow="Our Mission"
          title="To empower every learner with the right opportunities."
          subtitle="We aim to bridge the gap between talent and opportunity by providing smart tools, personalized guidance, and a seamless job search experience — so you can focus on what matters most: building your future."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {values.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`lg:px-8 ${
                i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"
              }`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-500">
                <Icon size={26} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 max-w-[180px] text-xs leading-relaxed text-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
        <span className="mt-10 block h-0.5 w-14 rounded bg-brand-500" />
      </div>
    </section>
  );
}
