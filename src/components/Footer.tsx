import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Logo />
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} PlacePath. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
