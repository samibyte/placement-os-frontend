import { Bell } from "lucide-react";
import Logo from "./Logo";

const links = ["Home", "Jobs", "CV Builder", "Track", "Resources", "About"];

export default function Navbar() {
  return (
    <header className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6">
      <div className="flex items-center gap-12 lg:gap-16">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <a
              key={l}
              href={i === 0 ? "/" : `/${l.toLowerCase().replace(" ", "-")}`}
              className={`relative py-1 text-sm font-medium transition-colors hover:text-brand-500 ${
                i === 0 ? "text-brand-500" : "text-ink"
              }`}
            >
              {l}
              {i === 0 && <span className="absolute -bottom-1 left-0 h-0.5 w-5 rounded bg-brand-500" />}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        {/* suppressHydrationWarning: autofill extensions inject attributes (e.g. fdprocessedid) into buttons */}
        <button suppressHydrationWarning aria-label="Notifications" className="mr-2 text-ink/70 hover:text-brand-500">
          <Bell size={18} />
        </button>
        <a href="/login" className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium text-brand-500 hover:border-brand-300">
          Log In
        </a>
        <a href="/signup" className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600">
          Sign Up
        </a>
      </div>
    </header>
  );
}
