import FinalCta from "@/components/sections/FinalCta";

export const metadata = {
  title: "About Us | Craftly Studio",
  description: "Learn more about our mission and the team behind Craftly Studio.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-48 pb-24 bg-bg-inverse text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8 text-balance">
            Building the digital infrastructure for <span className="text-accent">tomorrow&apos;s</span> industry leaders.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a team of engineers, designers, and strategists based in Vapi, dedicated to transforming how businesses operate and scale online.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Craftly Studio started with a simple observation: most businesses in industrial hubs like Vapi, Daman, and Silvassa were being held back by outdated digital presence.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We set out to change that by bringing Silicon Valley-grade web engineering to local businesses. We don&apos;t just build websites; we build digital assets that generate leads, automate workflows, and drive revenue.
              </p>
            </div>
            <div className="aspect-square bg-surface rounded-3xl overflow-hidden relative border border-outline">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Team Photo Placeholder
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <FinalCta />
    </>
  );
}
