import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-nav border-b border-outline/10 h-20 flex items-center">
      <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">C</span>
          <span className="font-display font-extrabold text-xl tracking-tight">Craftly Studio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-on-surface-variant">
          <Link href="/portfolio" className="hover:text-accent transition-colors">Work</Link>
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
        </div>
        <div>
          <Link href="/contact" className="inline-block bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer">
            Start Your Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
