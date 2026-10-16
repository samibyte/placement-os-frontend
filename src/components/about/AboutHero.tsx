import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import AboutHeroVisual from "./AboutHeroVisual";

export default function AboutHero() {
  return (
    <section className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 pb-14 pt-6 xl:grid-cols-[minmax(0,1fr)_600px]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/70 px-3 py-1.5 text-[11px] font-medium text-brand-600">
          <Sparkle size={12} /> About PlacementOS
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-[46px]">
          More than just a
          <br />
          job platform.
          <span className="mt-1 block text-brand-500">
            It&rsquo;s your career operating system.
          </span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
          PlacementOS helps students and early professionals build stronger CVs,
          track opportunities, and get career-ready &mdash; all in one place.
        </p>
      </div>
      <AboutHeroVisual />
    </section>
  );
}
