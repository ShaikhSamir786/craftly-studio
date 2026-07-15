// Central source of truth for all SEO data

export const SITE_URL = "https://craftlystudio.com";
export const SITE_NAME = "Craftly Studio";
export const SITE_TAGLINE = "Digital Experiences Crafted for Business";

export const BUSINESS_INFO = {
  name: "Craftly Studio",
  legalName: "Craftly Studio",
  description:
    "Craftly Studio is a web development and digital solutions agency based in Vapi, Gujarat, India. We design and develop custom websites, web applications, and AI-powered solutions for manufacturing companies, clinics, restaurants, hotels, real estate agencies, and local businesses.",
  shortDescription:
    "We design and develop custom websites that help businesses build trust, attract customers, and grow online.",
  email: "hello@craftlystudio.com",
  phone: "+91 98765 43210",
  foundingYear: 2024,
  address: {
    streetAddress: "Vapi",
    addressLocality: "Vapi",
    addressRegion: "Gujarat",
    postalCode: "396191",
    addressCountry: "IN",
  },
  geo: {
    latitude: 20.3714,
    longitude: 72.9005,
  },
  openingHours: "Mo-Sa 09:00-18:00",
  socialLinks: {
    linkedin: "https://linkedin.com/company/craftlystudio",
    instagram: "https://instagram.com/craftlystudio",
    twitter: "https://twitter.com/craftlystudio",
    facebook: "https://facebook.com/craftlystudio",
  },
  priceRange: "$$",
} as const;

export const NEARBY_LOCATIONS = [
  "Vapi",
  "Daman",
  "Silvassa",
  "Valsad",
  "Umbergaon",
  "Pardi",
  "Bhilad",
  "Dadra and Nagar Haveli",
  "Navsari",
  "Surat",
] as const;

export interface ServiceData {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
}

export const SERVICES: ServiceData[] = [
  {
    id: "website-development",
    name: "Website Development",
    slug: "website-development",
    shortDescription:
      "High-performance, SEO-friendly websites built with React and Next.js for businesses in Vapi and Gujarat.",
    metaTitle: "Website Development Services in Vapi, Gujarat",
    metaDescription:
      "Professional website development services in Vapi, Gujarat. Custom React & Next.js websites for manufacturing, healthcare, and local businesses. Fast, SEO-friendly & mobile-first.",
    h1: "Website Development Services in Vapi, Gujarat",
    keywords: [
      "website development Vapi",
      "web development company Vapi",
      "website designer Vapi",
      "website development Gujarat",
      "best website development company Vapi",
    ],
  },
  {
    id: "ecommerce-development",
    name: "E-commerce Development",
    slug: "ecommerce-development",
    shortDescription:
      "Custom e-commerce solutions with secure payments, inventory management, and seamless user experience.",
    metaTitle: "E-commerce Website Development in Vapi, Gujarat",
    metaDescription:
      "Custom e-commerce website development in Vapi. Secure online stores with payment integration, inventory management, and mobile-first design for Gujarat businesses.",
    h1: "E-commerce Website Development in Vapi, Gujarat",
    keywords: [
      "ecommerce development Vapi",
      "online store development Gujarat",
      "ecommerce website Vapi",
      "shopping website development",
      "custom ecommerce solutions",
    ],
  },
  {
    id: "custom-web-applications",
    name: "Custom Web Applications",
    slug: "custom-web-applications",
    shortDescription:
      "Tailored web applications including CRMs, dashboards, portals, and business management systems.",
    metaTitle: "Custom Web Application Development in Vapi, Gujarat",
    metaDescription:
      "Custom web application development in Vapi, Gujarat. CRM systems, business portals, dashboards & workflow tools built with modern full-stack technologies.",
    h1: "Custom Web Application Development in Vapi, Gujarat",
    keywords: [
      "custom web application Vapi",
      "web app development Gujarat",
      "CRM development Vapi",
      "business software development",
      "custom software Vapi",
    ],
  },
  {
    id: "seo-services",
    name: "SEO Services",
    slug: "seo-services",
    shortDescription:
      "Technical SEO, local SEO, and content optimization to help your business rank higher on Google and AI search engines.",
    metaTitle: "SEO Services in Vapi, Gujarat - Local SEO Experts",
    metaDescription:
      "Expert SEO services in Vapi, Gujarat. Local SEO, technical SEO & content optimization to help your business rank #1 on Google. Proven results for Vapi businesses.",
    h1: "SEO Services in Vapi - Local SEO Experts",
    keywords: [
      "SEO services Vapi",
      "local SEO Vapi",
      "SEO company Gujarat",
      "Google ranking Vapi",
      "SEO expert Vapi",
    ],
  },
  {
    id: "ai-solutions",
    name: "AI Solutions",
    slug: "ai-solutions",
    shortDescription:
      "AI-powered chatbots, content generation, workflow automation, and intelligent business solutions.",
    metaTitle: "AI Solutions & Integration Services in Vapi, Gujarat",
    metaDescription:
      "AI solutions and integration services in Vapi, Gujarat. Chatbots, AI automation, content generation & intelligent workflows for manufacturing and local businesses.",
    h1: "AI Solutions & Business Automation in Vapi, Gujarat",
    keywords: [
      "AI solutions Vapi",
      "AI automation Gujarat",
      "chatbot development Vapi",
      "AI integration services",
      "business AI solutions",
    ],
  },
  {
    id: "business-automation",
    name: "Business Automation",
    slug: "business-automation",
    shortDescription:
      "Streamline operations with custom CRM systems, automated workflows, and process digitization.",
    metaTitle: "Business Automation & CRM Development in Vapi, Gujarat",
    metaDescription:
      "Business automation and CRM development in Vapi. Automate workflows, digitize processes & build custom management systems for manufacturing and service businesses.",
    h1: "Business Automation & CRM Development in Vapi, Gujarat",
    keywords: [
      "business automation Vapi",
      "CRM development Gujarat",
      "workflow automation Vapi",
      "process digitization",
      "manufacturing automation",
    ],
  },
  {
    id: "branding-ui-ux",
    name: "Branding & UI/UX Design",
    slug: "branding-ui-ux",
    shortDescription:
      "Strategic branding and user experience design that builds trust and converts visitors into customers.",
    metaTitle: "Branding & UI/UX Design Services in Vapi, Gujarat",
    metaDescription:
      "Professional branding and UI/UX design services in Vapi, Gujarat. Logo design, brand identity, user interface design & user experience optimization for businesses.",
    h1: "Branding & UI/UX Design Services in Vapi, Gujarat",
    keywords: [
      "branding services Vapi",
      "UI UX design Gujarat",
      "logo design Vapi",
      "brand identity design",
      "user experience design Vapi",
    ],
  },
  {
    id: "landing-pages-portfolio",
    name: "Landing Pages & Portfolio Websites",
    slug: "landing-pages-portfolio",
    shortDescription:
      "Conversion-focused landing pages and stunning portfolio websites for professionals and businesses.",
    metaTitle: "Landing Page & Portfolio Website Design in Vapi, Gujarat",
    metaDescription:
      "High-converting landing pages and portfolio websites in Vapi, Gujarat. Perfect for freelancers, agencies, interior designers & professionals. Mobile-first design.",
    h1: "Landing Page & Portfolio Website Design in Vapi, Gujarat",
    keywords: [
      "landing page design Vapi",
      "portfolio website Vapi",
      "single page website Gujarat",
      "conversion-focused landing page",
      "professional portfolio website",
    ],
  },
];

export interface IndustryData {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
  relatedServices: string[];
}

export const INDUSTRIES: IndustryData[] = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    slug: "manufacturing",
    shortDescription:
      "Digital solutions for manufacturing companies in Vapi industrial area. Product catalogs, B2B portals, and ERP systems.",
    metaTitle: "Website Development for Manufacturing Companies in Vapi",
    metaDescription:
      "Professional website development for manufacturing & industrial companies in Vapi, Gujarat. Product catalogs, B2B portals, ERP integration & digital transformation.",
    h1: "Website Development for Manufacturing Companies in Vapi",
    keywords: [
      "manufacturing website development",
      "industrial website Vapi",
      "factory website design",
      "B2B website development",
      "manufacturing company website",
    ],
    relatedServices: [
      "website-development",
      "custom-web-applications",
      "business-automation",
    ],
  },
  {
    id: "healthcare-clinics",
    name: "Healthcare & Clinics",
    slug: "healthcare-clinics",
    shortDescription:
      "HIPAA-conscious websites for clinics and hospitals with online appointment booking and patient portals.",
    metaTitle: "Clinic & Hospital Website Development in Vapi, Gujarat",
    metaDescription:
      "Clinic and hospital website development in Vapi. Online appointment booking, patient portals & healthcare websites for doctors, dentists & medical practices in Gujarat.",
    h1: "Clinic & Hospital Website Development in Vapi, Gujarat",
    keywords: [
      "clinic website development",
      "doctor website design",
      "hospital website Vapi",
      "medical website development",
      "online appointment website",
    ],
    relatedServices: [
      "website-development",
      "custom-web-applications",
      "seo-services",
    ],
  },
  {
    id: "restaurants-cafes",
    name: "Restaurants & Cafes",
    slug: "restaurants-cafes",
    shortDescription:
      "Appetizing websites for restaurants and cafes with online menus, ordering systems, and table reservations.",
    metaTitle: "Restaurant & Cafe Website Development in Vapi, Gujarat",
    metaDescription:
      "Restaurant and cafe website development in Vapi, Gujarat. Online menus, food ordering systems, table reservations & Google Maps integration for local eateries.",
    h1: "Restaurant & Cafe Website Development in Vapi, Gujarat",
    keywords: [
      "restaurant website design",
      "cafe website development Vapi",
      "online food ordering website",
      "restaurant online menu",
      "food ordering website Gujarat",
    ],
    relatedServices: [
      "website-development",
      "ecommerce-development",
      "seo-services",
    ],
  },
  {
    id: "hotels-resorts",
    name: "Hotels & Resorts",
    slug: "hotels-resorts",
    shortDescription:
      "Premium hospitality websites with booking engines, virtual tours, and revenue management integration.",
    metaTitle: "Hotel & Resort Website Development in Vapi, Gujarat",
    metaDescription:
      "Hotel and resort website development in Vapi, Gujarat. Online booking engines, virtual tours, room showcases & revenue management for hospitality businesses near Daman.",
    h1: "Hotel & Resort Website Development in Vapi, Gujarat",
    keywords: [
      "hotel website development",
      "resort website design Vapi",
      "online hotel booking website",
      "hospitality website development",
      "hotel booking system Gujarat",
    ],
    relatedServices: [
      "website-development",
      "ecommerce-development",
      "seo-services",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Builders",
    slug: "real-estate",
    shortDescription:
      "Property listing websites for real estate agencies and builders with advanced search and virtual tours.",
    metaTitle: "Real Estate Website Development in Vapi, Gujarat",
    metaDescription:
      "Real estate and builder website development in Vapi, Gujarat. Property listings, advanced search, virtual tours & lead management for realtors and construction companies.",
    h1: "Real Estate Website Development in Vapi, Gujarat",
    keywords: [
      "real estate website development",
      "property listing website Vapi",
      "builder website Gujarat",
      "realtor website development",
      "property management software",
    ],
    relatedServices: [
      "website-development",
      "custom-web-applications",
      "seo-services",
    ],
  },
  {
    id: "education",
    name: "Schools & Education",
    slug: "education",
    shortDescription:
      "Modern school, college, and coaching institute websites with LMS, student portals, and parent communication tools.",
    metaTitle: "School & College Website Development in Vapi, Gujarat",
    metaDescription:
      "School, college & coaching institute website development in Vapi, Gujarat. LMS platforms, student portals, admission systems & parent communication tools.",
    h1: "School & College Website Development in Vapi, Gujarat",
    keywords: [
      "school website development",
      "college website Vapi",
      "coaching institute website",
      "LMS development Gujarat",
      "education ERP Vapi",
    ],
    relatedServices: [
      "website-development",
      "custom-web-applications",
      "business-automation",
    ],
  },
  {
    id: "ca-firms",
    name: "CA Firms & Accountants",
    slug: "ca-firms",
    shortDescription:
      "Professional websites for chartered accountants and tax consultants with client portals and document management.",
    metaTitle: "CA Firm & Accounting Website Development in Vapi, Gujarat",
    metaDescription:
      "CA firm and accounting practice website development in Vapi, Gujarat. Professional websites with client portals, document management & service showcase for CAs.",
    h1: "CA Firm & Accounting Website Development in Vapi, Gujarat",
    keywords: [
      "CA firm website",
      "chartered accountant website Vapi",
      "tax consultant website",
      "accounting firm website Gujarat",
      "CA website development",
    ],
    relatedServices: [
      "website-development",
      "seo-services",
      "landing-pages-portfolio",
    ],
  },
  {
    id: "interior-designers",
    name: "Interior Designers",
    slug: "interior-designers",
    shortDescription:
      "Stunning portfolio websites for interior designers and architects with project galleries and client testimonials.",
    metaTitle: "Interior Designer Portfolio Website in Vapi, Gujarat",
    metaDescription:
      "Interior designer and architect portfolio website development in Vapi, Gujarat. Stunning project galleries, before/after showcases & client testimonial pages.",
    h1: "Interior Designer Portfolio Website in Vapi, Gujarat",
    keywords: [
      "interior designer website",
      "interior design portfolio Vapi",
      "architect website Gujarat",
      "design portfolio website",
      "interior designer website development",
    ],
    relatedServices: [
      "website-development",
      "branding-ui-ux",
      "landing-pages-portfolio",
    ],
  },
];

export const KEYWORDS = {
  primary: [
    "website development Vapi",
    "web development company Vapi",
    "website designer Vapi",
    "web design company Vapi",
    "website development Gujarat",
    "best website development company Vapi",
    "custom software development Vapi",
  ],
  secondary: [
    "digital agency Vapi",
    "web agency Gujarat",
    "full stack development Vapi",
    "React developer Vapi",
    "Next.js development India",
    "responsive website design",
    "mobile-first web development",
  ],
  local: [
    "website developer near me",
    "website company near Vapi",
    "best website developer in Vapi",
    "web agency Vapi",
    "Gujarat website development",
    "web design in Vapi Gujarat",
    "Vapi web developer",
  ],
  commercial: [
    "hire website developer Vapi",
    "hire web developer Gujarat",
    "affordable website development",
    "professional website design",
    "corporate website development",
    "business website development",
  ],
  voice: [
    "who builds websites near me",
    "best website developer near Vapi",
    "website company near me",
    "affordable website designer near me",
    "website developer for factory",
    "website developer for clinic",
  ],
} as const;
