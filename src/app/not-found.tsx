import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-48 pb-24 bg-bg-inverse text-white min-h-screen flex items-center">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-accent font-display text-8xl font-extrabold mb-4">
            404
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            The page you are looking for does not exist or has been moved. Let us get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Go to Homepage
            </Link>
            <Link
              href="/services"
              className="bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2] px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2] px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
