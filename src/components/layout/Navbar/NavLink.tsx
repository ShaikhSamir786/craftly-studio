"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  // Check if current route is active. For home page, strict match; for other pages, sub-paths count as active
  const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`relative py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1.5 ${
        isActive ? "text-accent" : "text-on-surface-variant hover:text-accent"
      }`}
    >
      <span>{children}</span>
      {isActive && (
        <motion.span
          layoutId="activeUnderline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
