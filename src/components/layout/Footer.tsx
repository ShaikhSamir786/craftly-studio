import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-inverse text-white py-24 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">C</span>
            <span className="font-display font-extrabold text-xl tracking-tight">Craftly Studio</span>
          </div>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-8">
            Engineering growth from Vapi. We build specialized digital infrastructures to help industrial and commercial sectors dominate their market.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <span className="material-symbols-outlined text-lg">share</span>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <span className="material-symbols-outlined text-lg">mail</span>
            </Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Solutions</h5>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors">Web Development</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Local SEO</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">AI Automation</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Maintenance</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Studio</h5>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Subscribe</h5>
          <p className="text-sm text-gray-400 mb-6">Growth tips delivered to your inbox.</p>
          <div className="flex">
            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 w-full focus:outline-none focus:border-accent" />
            <button className="bg-accent px-4 rounded-r-lg"><span className="material-symbols-outlined">send</span></button>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2024 Craftly Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <Link href="/admin/login" className="hover:text-white">Admin Login</Link>
        </div>
      </div>
    </footer>
  );
}
