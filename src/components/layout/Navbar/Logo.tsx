import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
      <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-extrabold text-lg transition-transform duration-200 group-hover:scale-105">
        C
      </span>
      <span className="font-display font-extrabold text-xl tracking-tight text-on-surface">
        Craftly Studio
      </span>
    </Link>
  );
}
