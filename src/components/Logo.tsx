import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-orange-gradient shadow-glow transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h11l4 4h3v6h-3a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H3V7z" />
        </svg>
      </span>
      <span className={`font-display text-2xl font-bold tracking-tight ${textColor}`}>
        Tospas
      </span>
    </Link>
  );
}
