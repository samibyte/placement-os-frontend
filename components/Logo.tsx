export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5">
      <svg width="34" height="36" viewBox="0 0 34 36" fill="none" aria-hidden>
        <path d="M4 3h15a11 11 0 0 1 0 22h-6v8l-9 -3V3Z" fill="#a25b8f" />
        <path d="M13 11h6a3 3 0 0 1 0 6h-6v-6Z" fill="#fbf9fb" />
        <path d="M4 3l9 3v27l-9-3V3Z" fill="#733c65" opacity=".55" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-brand-500">PlacementOS</span>
    </a>
  );
}
