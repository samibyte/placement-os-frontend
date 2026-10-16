import {
  BellRinging,
  BookOpenText,
  Check,
  ClipboardText,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

const steps = [
  {
    title: "Build Your CV",
    text: "Create a professional, ATS-friendly CV",
  },
  {
    title: "Track Jobs",
    text: "Stay updated on relevant opportunities",
  },
  {
    title: "Get Ready",
    text: "Access resources and career insights",
  },
];

type IconType = ComponentType<{ size?: number }>;

const perks: {
  icon: IconType;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: ClipboardText,
    title: "Tailored CV Suggestions",
    text: "Match your skills with job requirements.",
    position: "left-[318px] top-[14px] -rotate-[5deg]",
  },
  {
    icon: BellRinging,
    title: "Real-Time Job Updates",
    text: "Never miss an opportunity that fits your goals.",
    position: "left-[336px] top-[112px] -rotate-[4deg]",
  },
  {
    icon: BookOpenText,
    title: "Career Resources",
    text: "Guides, tips and tools to help you grow.",
    position: "left-[322px] top-[206px] -rotate-[5deg]",
  },
];

/**
 * Decorative hero illustration. Built on a fixed 600x340 canvas that scales
 * down on small screens so the absolute layout never overflows.
 */
export default function AboutHeroVisual() {
  return (
    <div
      aria-hidden
      className="mx-auto h-[190px] w-[330px] overflow-hidden min-[480px]:h-[255px] min-[480px]:w-[450px] md:h-[340px] md:w-[600px] xl:mx-0"
    >
      <div className="relative h-[340px] w-[600px] origin-top-left scale-[0.55] min-[480px]:scale-75 md:scale-100">
        <svg
          viewBox="0 0 600 340"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <title>Decorative background shape</title>
          <path
            d="M120 70C170 10 330 -10 450 20c110 28 150 110 120 180-30 70-150 120-290 110C150 300 40 260 40 190 40 130 80 110 120 70Z"
            fill="#ecd9e6"
            opacity=".8"
          />
          {/* loop to the left of the main card */}
          <path
            d="M70 130C-10 140 -10 250 60 270"
            stroke="#a25b8f"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity=".7"
          />
          {/* arrow towards the perk cards */}
          <path
            d="M296 70c12-14 20-18 34-10"
            stroke="#a25b8f"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="m322 52 9 7-11 4"
            stroke="#a25b8f"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* main card */}
        <div className="absolute left-[44px] top-[34px] w-[258px] -rotate-6 rounded-2xl border border-line bg-white p-6 shadow-[0_24px_50px_-22px_rgba(115,60,101,.45)]">
          <p className="text-[15px] font-bold text-ink">
            Your Career, Organized
          </p>
          <ol className="relative mt-5 space-y-5">
            <span className="absolute bottom-4 left-[13px] top-4 w-px bg-brand-300" />
            {steps.map((s) => (
              <li key={s.title} className="relative flex items-center gap-3">
                <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-brand-500 text-white ring-4 ring-white">
                  <Check size={13} weight="bold" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-ink">
                    {s.title}
                  </p>
                  <p className="text-[9px] leading-snug text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* perk cards */}
        {perks.map(({ icon: Icon, title, text, position }) => (
          <div
            key={title}
            className={`absolute flex w-[238px] items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 shadow-[0_18px_40px_-22px_rgba(115,60,101,.4)] ${position}`}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-500">
              <Icon size={17} />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-ink">{title}</p>
              <p className="text-[9px] leading-snug text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
