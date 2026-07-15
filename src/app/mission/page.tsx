import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/sections/FinalCta";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/seo/schemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title:
    "Our Mission & Vision - Craftly Studio | Digital Agency in Vapi, Gujarat",
  description:
    "Discover the mission, vision, and core values driving Craftly Studio — a web development and digital solutions agency in Vapi, Gujarat. Learn how we help businesses across Vapi, Daman, Silvassa, and south Gujarat build powerful digital presences.",
  path: "/mission",
  keywords: [
    "Craftly Studio mission",
    "Craftly Studio vision",
    "web development agency Vapi",
    "digital agency Gujarat mission",
    "why choose Craftly Studio",
    "web design company Vapi values",
    "digital solutions agency Gujarat",
    "best web development company Vapi",
    "Craftly Studio about us",
    "Vapi web development team",
    "mission driven web agency Gujarat",
    "brand promise web development Vapi",
    "core values digital agency India",
    "local community web developer Vapi",
    "trusted digital partner Gujarat",
    "custom website development Vapi",
    "SEO company Vapi Gujarat",
    "Next.js development India mission",
    "full stack development Vapi values",
    "digital transformation Gujarat",
  ],
});

const coreValues = [
  {
    title: "Engineering Excellence",
    description:
      "Every line of code we write serves a business purpose. We use modern frameworks like React, Next.js, and TypeScript not because they are trendy, but because they deliver measurably faster, more reliable, and more scalable digital products for our clients in Vapi and across Gujarat.",
    icon: "01",
  },
  {
    title: "Local First, Global Standards",
    description:
      "We are rooted in Vapi's industrial corridor, yet we operate with the rigor and craftsmanship of a top-tier global agency. Our proximity to our clients in Daman, Silvassa, Valsad, and Dadra and Nagar Haveli means we understand your market from the inside out.",
    icon: "02",
  },
  {
    title: "Business Outcomes Over Output",
    description:
      "We do not measure success by the number of pages delivered. We measure it by the leads generated, the customers acquired, and the revenue growth our clients see after partnering with us. Every project begins with a business goal and ends with a measurable result.",
    icon: "03",
  },
  {
    title: "Radical Transparency",
    description:
      "No hidden costs. No black-box development. Our clients in Vapi, Gujarat, and beyond see every milestone, every decision, and every metric. Trust is the foundation of every partnership we build.",
    icon: "04",
  },
  {
    title: "Continuous Innovation",
    description:
      "The digital landscape shifts rapidly. From AI-powered automation and answer engine optimization to generative search and voice-first interfaces, we stay ahead of the curve so our clients never fall behind. Innovation is not a department at Craftly Studio — it is our default operating mode.",
    icon: "05",
  },
  {
    title: "Community Commitment",
    description:
      "We believe the businesses of Vapi, Silvassa, Daman, and south Gujarat deserve world-class digital infrastructure. We actively invest in educating local business owners, sharing knowledge, and building digital assets that strengthen the regional economy.",
    icon: "06",
  },
];

const futureGoals = [
  {
    title: "Expand AI-Powered Solutions Across Industries",
    description:
      "We are building deeper AI integrations — intelligent chatbots, predictive analytics dashboards, and automated content pipelines — specifically tailored for manufacturing companies, healthcare clinics, and service businesses in the Vapi-Gujarat corridor.",
  },
  {
    title: "Launch the Craftly Digital Academy",
    description:
      "A dedicated initiative to upskill business owners, marketing teams, and young professionals across Vapi, Valsad, and Daman in modern web technologies, SEO best practices, and AI adoption.",
  },
  {
    title: "Become Gujarat's Most Trusted Web Development Partner",
    description:
      "Our goal is not just to be the best website development company in Vapi — it is to be the most trusted digital growth partner for businesses across Gujarat, delivering consistent, measurable results year after year.",
  },
  {
    title: "Pioneer Sustainable Digital Infrastructure",
    description:
      "We are investing in green hosting, performance optimization, and efficient code architecture to reduce the environmental footprint of every website and web application we build for our clients in India and beyond.",
  },
];

export default function MissionPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="pt-48 pb-24 bg-bg-inverse text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Breadcrumbs items={[{ label: "Mission & Vision", href: "/mission" }]} />
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8 text-balance">
              Our Mission, Vision,{" "}
              <span className="text-accent">&amp; the Values</span> That Drive
              Everything We Build
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Craftly Studio exists to bridge the gap between world-class
              digital engineering and the ambitious businesses of Vapi, Gujarat —
              delivering technology that drives real growth, not just pageviews.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Introduction ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-8 text-center">
              Who We Are and Why We Exist
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                In the heart of Gujarat&apos;s industrial corridor, businesses in
                Vapi, Daman, Silvassa, Valsad, and Umbergaon power the Indian
                economy. Manufacturing giants, healthcare providers, hospitality
                brands, real estate developers, and professional service firms
                operate at world-class levels — yet too many of them are held
                back by outdated websites, invisible online presences, and
                digital tools that were never designed for their actual needs.
              </p>
              <p>
                Craftly Studio was founded to change that narrative. We are a{" "}
                <Link
                  href="/services"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  web development and digital solutions agency
                </Link>{" "}
                headquartered in Vapi, Gujarat, with a singular purpose: to
                engineer digital experiences that help local businesses compete,
                grow, and lead — not just locally, but nationally and globally.
              </p>
              <p>
                We do not sell templates. We do not offer cookie-cutter
                solutions. Every website, every web application, every{" "}
                <Link
                  href="/services/seo-services"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  SEO strategy
                </Link>
                , and every{" "}
                <Link
                  href="/services/ai-solutions"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  AI-powered automation
                </Link>{" "}
                we deploy is built from the ground up, tailored to the specific
                business goals, industry dynamics, and customer behavior of our
                clients in south Gujarat and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission ────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-outline bg-white text-accent text-xs font-bold uppercase tracking-wider mb-8">
              Our Mission
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              To empower businesses in Vapi, Gujarat, and across India with
              custom-built digital infrastructure that generates measurable
              growth.
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Our mission is to eliminate the digital gap that holds back
                otherwise successful businesses. We combine deep technical
                expertise in modern web development — React, Next.js,
                TypeScript, Firebase, and AI — with a rigorous understanding of
                local market dynamics to deliver digital solutions that do not
                just look impressive, but perform.
              </p>
              <p>
                Whether it is a{" "}
                <Link
                  href="/services/website-development"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  high-performance website
                </Link>{" "}
                for a manufacturing company in Vapi GIDC, a patient booking
                system for a{" "}
                <Link
                  href="/industries/healthcare-clinics"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  healthcare clinic in Valsad
                </Link>
                , an{" "}
                <Link
                  href="/services/ecommerce-development"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  e-commerce platform
                </Link>{" "}
                for a hospitality brand near Daman, or a{" "}
                <Link
                  href="/services/business-automation"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  custom CRM
                </Link>{" "}
                for a growing enterprise — our mission is to build digital assets
                that actively drive business outcomes: more qualified leads,
                higher conversion rates, stronger customer relationships, and
                sustainable revenue growth.
              </p>
              <p>
                We serve businesses across Vapi, Daman, Silvassa, Valsad,
                Umbergaon, Pardi, Bhilad, Dadra and Nagar Haveli, Navsari, and
                Surat — but our standards are global. Every project we deliver
                meets the same bar of quality, performance, and security that
                you would expect from a top-tier agency in Bangalore, Mumbai, or
                San Francisco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vision ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-outline bg-white text-accent text-xs font-bold uppercase tracking-wider mb-8">
              Our Vision
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              To become Gujarat&apos;s most trusted digital growth partner — the
              agency that every ambitious business in Vapi calls first.
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                We envision a future where every business in the Vapi-Daman-
                Silvassa industrial belt has access to the same caliber of
                digital infrastructure that powers the world&apos;s leading
                brands. A future where a manufacturing company in GIDC Vapi has
                a website as fast and conversion-focused as a Silicon Valley
                startup. Where a{" "}
                <Link
                  href="/industries/restaurants-cafes"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  restaurant in Daman
                </Link>{" "}
                attracts tourists with a stunning online presence. Where a{" "}
                <Link
                  href="/industries/ca-firms"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  CA firm in Valsad
                </Link>{" "}
                automates client onboarding with intelligent software. Where a{" "}
                <Link
                  href="/industries/real-estate"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  real estate developer in Silvassa
                </Link>{" "}
                captures every lead with a beautifully engineered property
                portal.
              </p>
              <p>
                Our vision extends beyond websites. We aim to build an ecosystem
                where technology, strategy, and creativity converge to create
                compounding digital advantages for every client we partner with.
                Through continuous innovation in AI solutions, business
                automation, SEO, and{" "}
                <Link
                  href="/services/branding-ui-ux"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                >
                  brand design
                </Link>
                , we see a future where Craftly Studio is synonymous with
                digital excellence across Gujarat and India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display text-4xl font-bold mb-4 text-center">
            Our Core Values
          </h2>
          <p className="text-lg text-on-surface-variant text-center max-w-2xl mx-auto mb-16">
            Six principles that guide every project, every partnership, and
            every line of code we write at our Vapi headquarters and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-white rounded-2xl border border-outline hover:shadow-lg transition-shadow duration-300"
              >
                <span className="inline-block text-accent font-display text-3xl font-extrabold mb-4">
                  {value.icon}
                </span>
                <h3 className="font-display text-xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Brand Promise ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-8 text-center">
              Our Brand Promise
            </h2>
            <div className="bg-[#0b0b0b] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-white/[0.08]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/15 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
              </div>
              <div className="relative z-10">
                <p className="font-display text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8 text-balance">
                  &ldquo;Not another template website. A digital experience
                  crafted for your business.&rdquo;
                </p>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  We promise to treat every business in Vapi, Gujarat, and
                  beyond as unique. Your website will not look like anyone
                  else&apos;s. Your digital strategy will not be recycled from a
                  playbook. Your results will be measured, reported, and
                  optimized — because that is what a real digital partner does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Customers Choose Us ────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Why Businesses in Vapi Choose Craftly Studio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-5 p-8 bg-white rounded-2xl border border-outline">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                01
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">
                  Proximity and Understanding
                </h3>
                <p className="text-on-surface-variant">
                  Being based in Vapi means we understand the local business
                  landscape — from the manufacturing units of GIDC to the
                  hospitality businesses near Daman. We speak your language,
                  know your market, and build for your customers.
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-8 bg-white rounded-2xl border border-outline">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                02
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">
                  Technology That Actually Performs
                </h3>
                <p className="text-on-surface-variant">
                  We build with React, Next.js, TypeScript, and Firebase — not
                  bloated page builders. The result: websites that load in
                  under two seconds, rank higher on Google, and convert
                  visitors into paying customers.
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-8 bg-white rounded-2xl border border-outline">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                03
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">
                  Full-Stack Capabilities Under One Roof
                </h3>
                <p className="text-on-surface-variant">
                  From custom website development and e-commerce solutions to{" "}
                  <Link
                    href="/services/seo-services"
                    className="text-accent hover:underline"
                  >
                    local SEO
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/ai-solutions"
                    className="text-accent hover:underline"
                  >
                    AI integration
                  </Link>
                  , and{" "}
                  <Link
                    href="/services/business-automation"
                    className="text-accent hover:underline"
                  >
                    business automation
                  </Link>
                  — you get a complete digital partner, not five different
                  vendors.
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-8 bg-white rounded-2xl border border-outline">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                04
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">
                  Transparent Process, Measurable Results
                </h3>
                <p className="text-on-surface-variant">
                  No black boxes. You see every milestone, every metric, and
                  every outcome. We provide regular performance reports so you
                  always know exactly what your investment in digital is
                  delivering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Community Commitment ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-8 text-center">
              Our Commitment to the Vapi & Gujarat Community
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Craftly Studio is not just located in Vapi — we are invested in
                the growth of this region. The industrial belt spanning Vapi,
                Daman, Silvassa, Valsad, Umbergaon, Pardi, and Bhilad is home
                to thousands of businesses that power India&apos;s manufacturing,
                pharmaceutical, textile, and chemical sectors. Yet many of these
                businesses lack the digital infrastructure needed to compete in
                an increasingly online marketplace.
              </p>
              <p>
                We are committed to changing that. Through affordable web
                development packages for small and medium businesses, free
                digital audits for local enterprises, knowledge-sharing on SEO
                and digital marketing best practices, and active participation
                in the Vapi business community, we work to ensure that the
                digital divide does not hold back the region&apos;s economic
                potential.
              </p>
              <p>
                Our clients include manufacturing companies in Vapi GIDC,
                healthcare providers in Valsad, restaurants and hotels near
                Daman, real estate developers in Silvassa, schools and coaching
                institutes across Gujarat, and professional service firms from
                CA practices to interior design studios. Every project we
                deliver strengthens the digital fabric of this community — and
                that is a responsibility we take seriously.
              </p>
              <p>
                We also serve businesses in{" "}
                <span className="font-semibold text-on-surface">Navsari</span>{" "}
                and{" "}
                <span className="font-semibold text-on-surface">Surat</span>,
                extending our community commitment across south Gujarat and
                positioning Craftly Studio as the region&apos;s go-to digital
                growth partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Future Goals ───────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display text-4xl font-bold mb-4 text-center">
            Where We&apos;re Headed
          </h2>
          <p className="text-lg text-on-surface-variant text-center max-w-2xl mx-auto mb-16">
            Our roadmap is built around one idea: delivering more value, more
            innovation, and more measurable impact for every business we serve
            in Gujarat and across India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureGoals.map((goal) => (
              <div
                key={goal.title}
                className="p-8 bg-white rounded-2xl border border-outline"
              >
                <h3 className="font-display text-xl font-bold mb-4">
                  {goal.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Conclusion & CTA ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-8">
              Ready to Partner With a Mission-Driven Web Development Agency in
              Vapi?
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
              Craftly Studio is more than a web development company. We are a
              team of engineers, designers, and strategists based in Vapi,
              Gujarat, driven by a single mission: to build the digital
              infrastructure that helps ambitious businesses across south Gujarat
              — and India — thrive in the modern economy.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
              Whether you need a high-performance website, a custom web
              application, a local SEO strategy, AI-powered business automation,
              or a complete brand overhaul — our mission is to deliver digital
              solutions that generate real, measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                Start Your Project Today
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-outline hover:border-accent/30 text-on-surface px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5"
              >
                Learn More About Us
              </Link>
            </div>
            <p className="mt-8 text-sm text-on-surface-variant">
              Serving businesses in{" "}
              <span className="font-semibold">Vapi</span>,{" "}
              <span className="font-semibold">Daman</span>,{" "}
              <span className="font-semibold">Silvassa</span>,{" "}
              <span className="font-semibold">Valsad</span>,{" "}
              <span className="font-semibold">Umbergaon</span>,{" "}
              <span className="font-semibold">Pardi</span>,{" "}
              <span className="font-semibold">Bhilad</span>,{" "}
              <span className="font-semibold">
                Dadra and Nagar Haveli
              </span>
              , <span className="font-semibold">Navsari</span>, and{" "}
              <span className="font-semibold">Surat</span> — and businesses
              across Gujarat and India.
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
