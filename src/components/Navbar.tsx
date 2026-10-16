import { Bell } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";

const links = ["Home", "Jobs", "CV Builder", "Track", "Resources", "About"];

const hrefFor = (label: string) =>
  label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "-")}`;

export default function Navbar({ active = "Home" }: { active?: string }) {
  return (
    <header className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-6">
      <div className="flex items-center gap-12 lg:gap-16">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = l === active;
            return (
              <a
                key={l}
                href={hrefFor(l)}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 text-sm font-medium transition-colors hover:text-brand-500 ${
                  isActive ? "text-brand-500" : "text-ink"
                }`}
              >
                {l}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-5 rounded bg-brand-500" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        {/* suppressHydrationWarning: autofill extensions inject attributes (e.g. fdprocessedid) into buttons */}
        <button
          type="button"
          suppressHydrationWarning
          aria-label="Notifications"
          className="mr-2 hidden text-ink/70 hover:text-brand-500 sm:block"
        >
          <Bell size={18} />
        </button>
        <a
          href="/login"
          className="whitespace-nowrap rounded-lg border border-line bg-white px-3.5 py-2 text-sm sm:px-5 sm:py-2.5 font-medium text-brand-500 hover:border-brand-300"
        >
          Log In
        </a>
        <a
          href="/signup"
          className="whitespace-nowrap rounded-lg bg-brand-500 px-3.5 py-2 text-sm sm:px-5 sm:py-2.5 font-medium text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}
