import Link from "next/link";
import { BUSINESS_INFO, SERVICES, INDUSTRIES } from "@/lib/seo/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-inverse text-white py-24 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Top Section: Brand + Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">C</span>
              <span className="font-display font-extrabold text-xl tracking-tight">Craftly Studio</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Engineering growth from Vapi. We build specialized digital infrastructures to help industrial and commercial sectors dominate their market.
            </p>
            {/* NAP - Name, Address, Phone for Local SEO */}
            <address className="not-italic text-gray-400 text-sm mb-6">
              <p className="font-bold text-white">{BUSINESS_INFO.name}</p>
              <p>{BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion}, India - {BUSINESS_INFO.address.postalCode}</p>
              <p>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-accent transition-colors">{BUSINESS_INFO.email}</a></p>
              <p>Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-accent transition-colors">{BUSINESS_INFO.phone}</a></p>
            </address>
            <div className="flex gap-4">
              <Link href={BUSINESS_INFO.socialLinks.linkedin} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all" aria-label="LinkedIn">
                <span className="material-symbols-outlined text-lg">share</span>
              </Link>
              <Link href={`mailto:${BUSINESS_INFO.email}`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all" aria-label="Email">
                <span className="material-symbols-outlined text-lg">mail</span>
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Services</h5>
              <ul className="space-y-3 text-gray-400 text-sm">
                {SERVICES.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="hover:text-white transition-colors font-medium text-accent">
                    View All &rarr;
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Industries</h5>
              <ul className="space-y-3 text-gray-400 text-sm">
                {INDUSTRIES.slice(0, 6).map((industry) => (
                  <li key={industry.id}>
                    <Link href={`/industries/${industry.slug}`} className="hover:text-white transition-colors">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Company</h5>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Subscribe</h5>
              <p className="text-sm text-gray-400 mb-4">Growth tips delivered to your inbox.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-l-lg px-3 py-2.5 w-full text-sm focus:outline-none focus:border-accent" />
                <button className="bg-accent px-3 rounded-r-lg"><span className="material-symbols-outlined text-sm">send</span></button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Craftly Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/admin/login" className="hover:text-white">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
