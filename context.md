# Craftly Studio — Repository Context

## Project Overview

**Craftly Studio** is a full-stack digital agency website with an integrated CMS (Content Management System). It serves as the online presence for a digital studio that offers custom website development, local SEO, AI automation, website maintenance, and website redesign services.

The platform has two primary purposes:

1. **Generate qualified business leads** from small and medium businesses (manufacturing, healthcare, restaurants, hotels, real estate, professional services, education).
2. **Provide an internal CMS** so non-technical admin staff can manage website content — services, blog posts, portfolio case studies, and testimonials — without developer involvement.

**Core positioning:**

> "Not another template website. A digital experience crafted for your business."

The project is currently in **early development** — the codebase is an unmodified Next.js scaffold with extensive planning documentation but no custom components, routes, or business logic implemented yet.

---

## Why This Project Exists

Many small and medium businesses struggle with generic template websites, poor online visibility, lack of customer trust, and difficulty maintaining their web presence. Most need a digital partner who understands their goals, not just a website vendor.

Craftly Studio solves this by providing:

- Custom-designed, high-performance agency websites
- A CMS that lets admins publish and manage content independently
- SEO-optimized architecture for organic growth
- A scalable foundation for future AI-powered features

**Business goals:** Generate leads, build credibility as a premium studio, rank for local search terms, convert visitors into consultation requests, and create recurring revenue through maintenance services.

---

## Key Features

### Public Website (Visitor-Facing)

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, problem statement, services, industries, portfolio preview, process, testimonials, CTA |
| About | `/about` | Story, mission, values, team, approach |
| Service Detail | `/services/[slug]` | Dynamic pages with hero, benefits, process, FAQ, CTA |
| Portfolio Listing | `/portfolio` | Grid of project cards with industry, challenge, solution, result |
| Case Study | `/portfolio/[slug]` | Detailed project walkthrough: client, challenge, solution, implementation, result |
| Blog Listing | `/blog` | Featured article, categories, article cards |
| Blog Article | `/blog/[slug]` | Full article with author, date, content, related posts, CTA |
| Contact | `/contact` | Lead form, WhatsApp button, email, location, FAQ |

### Admin CMS (Authenticated)

| Feature | Route | Description |
|---------|-------|-------------|
| Login | `/admin/login` | Firebase Authentication (email/password, optional Google) |
| Dashboard | `/admin` | Stats cards for services, blogs, portfolio, leads |
| Service Management | `/admin/services` | CRUD with title, description, images, features, SEO fields |
| Blog Management | `/admin/blogs` | Rich text editor, cover image, categories, tags, SEO, draft/publish |
| Portfolio Management | `/admin/portfolio` | Client name, project description, industry, images, results |
| Testimonial Management | `/admin/testimonials` | Client name, review, company, image, rating |
| Media Management | `/admin/media` | Firebase Storage upload, delete, preview |
| SEO Settings | `/admin/seo` | Page title, meta description, OG image, keywords, structured data |

### Planned Future Features (v2)

- AI chatbot for website visitors
- AI content assistant for admins (blog drafts, SEO descriptions)
- Lead management dashboard (internal CRM)
- Client portal, project tracking, invoice management

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.10 | App Router, SSR, SSG, routing, performance |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety, maintainability |
| Tailwind CSS | ^4 | Utility-first styling via `@tailwindcss/postcss` |
| shadcn/ui | (planned) | Accessible, customizable component library |
| Framer Motion | (planned) | Animations and transitions |

### Backend

| Technology | Purpose |
|-----------|---------|
| Firebase Firestore | NoSQL database for content, leads, settings |
| Firebase Authentication | Admin auth (email/password, optional Google) |
| Firebase Storage | Image and media file storage |

### Forms & Validation

| Technology | Purpose |
|-----------|---------|
| React Hook Form | Form state management |
| Zod | Schema validation |

### Testing (Planned)

| Technology | Purpose |
|-----------|---------|
| Vitest | Unit testing (utilities, validation, data handling) |
| React Testing Library | Component testing (forms, interactive components) |
| Playwright | End-to-end testing (user journeys, admin workflows) |

### Deployment & Analytics

| Technology | Purpose |
|-----------|---------|
| Vercel | Frontend hosting and deployment |
| Firebase Cloud | Backend services |
| Google Analytics | Traffic tracking |
| Google Search Console | SEO monitoring |
| Vercel Analytics | Performance monitoring |

### Build Tools

| Technology | Version | Purpose |
|-----------|---------|---------|
| ESLint | ^9 | Code linting (flat config, `eslint-config-next`) |
| PostCSS | — | CSS processing (`@tailwindcss/postcss` plugin) |
| React Compiler | (via `babel-plugin-react-compiler`) | Automatic memoization optimization |

---

## Folder Structure

### Current State (Scaffold)

```
craftly-studio/
├── .git/
├── .gitignore
├── .next/                    # Build output (minimal)
├── agents/                   # AI agent definitions (for AI coding assistants)
├── AGENTS.md                 # AI agent instructions for Next.js
├── CLAUDE.md                 # Pointer to AGENTS.md
├── context.md                # Repository context document
├── docs/                     # Project specification documents
│   ├── 01_PRD.md             # Product Requirements Document
│   ├── 02_TECHNICAL_DESIGN.md # Technical Design Document
│   ├── 03_UI_UX.md           # UI/UX Specification
│   ├── 04_AI_RULES.md        # AI Coding Guidelines
│   ├── 05_TASKS.md           # Development Roadmap (33 tasks, 7 phases)
│   └── DESIGN.md             # Visual Design Specification
├── eslint.config.mjs         # ESLint 9 flat config
├── next-env.d.ts             # Next.js TypeScript declarations
├── next.config.ts            # Next.js config (reactCompiler: true)
├── node_modules/
├── package.json
├── package-lock.json
├── postcss.config.mjs        # PostCSS config (Tailwind v4)
├── public/                   # Static assets (default SVGs)
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css       # Tailwind v4 import + CSS vars
│       ├── layout.tsx        # Root layout (Geist fonts, metadata)
│       └── page.tsx          # Home page (default create-next-app template)
└── tsconfig.json
```

### Planned Architecture

```
craftly-studio/
├── agents/                   # AI agent definitions (for AI coding assistants)
│   └── (agent config files to be added)
├── src/
├── app/                      # Next.js App Router (routes and pages)
│   ├── (public)/             # Public route group
│   │   ├── page.tsx          # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── (admin)/              # Admin route group
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Dashboard
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── blogs/
│   │   │   │   └── page.tsx
│   │   │   ├── portfolio/
│   │   │   │   └── page.tsx
│   │   │   ├── testimonials/
│   │   │   │   └── page.tsx
│   │   │   ├── media/
│   │   │   │   └── page.tsx
│   │   │   └── seo/
│   │   │       └── page.tsx
│   │   └── ...
│   ├── layout.tsx            # Root layout
│   ├── globals.css
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── ui/                   # shadcn/ui base components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Dialog.tsx
│   │   └── Form.tsx
│   ├── layout/               # Structural components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── Breadcrumb.tsx
│   ├── sections/             # Page section components
│   │   ├── Hero.tsx
│   │   ├── CTA.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── IndustryCard.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── ProcessTimeline.tsx
│   └── forms/                # Form components
│       ├── Input.tsx
│       ├── Textarea.tsx
│       ├── Select.tsx
│       ├── FileUpload.tsx
│       └── ContactForm.tsx
├── features/                 # Feature-specific modules
│   ├── admin/                # CMS dashboard logic
│   ├── auth/                 # Authentication logic
│   ├── blog/                 # Blog system logic
│   ├── portfolio/            # Portfolio system logic
│   ├── services/             # Services system logic
│   └── contact/              # Contact/lead form logic
├── lib/
│   ├── firebase/
│   │   ├── firebase.ts       # Firebase app initialization
│   │   ├── auth.ts           # Firebase Auth helpers
│   │   ├── firestore.ts      # Firestore helpers
│   │   └── storage.ts        # Firebase Storage helpers
│   └── utils.ts              # General utilities
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript type definitions
│   ├── service.ts
│   ├── blog.ts
│   ├── portfolio.ts
│   ├── testimonial.ts
│   ├── lead.ts
│   └── user.ts
├── utils/                    # Utility functions
│   ├── formatDate.ts
│   ├── uploadImage.ts
│   └── validation.ts
└── config/                   # Configuration constants
    ├── navigation.ts
    └── site.ts
```

---

## Database Schema (Firestore Collections)

### `users`
| Field | Type | Description |
|-------|------|-------------|
| id | string | Document ID |
| email | string | Admin email |
| name | string | Admin display name |
| role | string | `admin` or `editor` |
| createdAt | timestamp | Creation date |
| updatedAt | timestamp | Last update |

### `services`
| Field | Type | Description |
|-------|------|-------------|
| id | string | Document ID |
| title | string | Service name |
| slug | string | URL slug |
| shortDescription | string | Brief description |
| description | string | Full description |
| image | string | Cover image URL |
| features | string[] | Feature list |
| category | string | Service category |
| status | string | `published` or `draft` |
| seo | object | SEO metadata (title, description, keywords) |
| createdAt | timestamp | Creation date |
| updatedAt | timestamp | Last update |

### `blogs`
| Field | Type | Description |
|-------|------|-------------|
| id | string | Document ID |
| title | string | Article title |
| slug | string | URL slug |
| content | string | Article content (rich text) |
| excerpt | string | Short summary |
| coverImage | string | Cover image URL |
| category | string | Article category |
| tags | string[] | Tag list |
| author | string | Author name |
| status | string | `published` or `draft` |
| seo | object | SEO metadata |
| publishedAt | timestamp | Publish date |
| createdAt | timestamp | Creation date |

### `portfolio`
| Field | Type | Description |
|-------|------|-------------|
| id | string | Document ID |
| title | string | Project title |
| clientName | string | Client name |
| slug | string | URL slug |
| industry | string | Industry category |
| problem | string | Challenge description |
| solution | string | Solution description |
| result | string | Outcome description |
| images | string[] | Image URLs |
| technologies | string[] | Tech stack used |
| testimonial | string | Client testimonial |
| createdAt | timestamp | Creation date |

### `testimonials`
| Field | Type | Description |
|-------|------|-------------|
| id | string | Document ID |
| name | string | Client name |
| company | string | Company name |
| message | string | Testimonial text |
| image | string | Client photo URL |
| rating | number | Rating (1-5) |
| status | string | `active` or `inactive` |

### `leads`
| Field | Type | Description |
|-------|------|-------------|
| id | string | Document ID |
| name | string | Contact name |
| email | string | Contact email |
| phone | string | Phone number |
| company | string | Company name |
| message | string | Inquiry message |
| source | string | Lead source (contact form, WhatsApp, etc.) |
| status | string | `new`, `contacted`, `converted` |
| createdAt | timestamp | Submission date |

### `pages`
Used for CMS-managed page content and SEO metadata.

### `settings`
Global site settings (site name, description, social links, etc.).

---

## Setup & Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- pnpm (recommended), npm, or yarn
- Firebase project (for backend services)
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd craftly-studio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase credentials
```

### Environment Variables (`.env.local`)

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Analytics (optional, added post-launch)
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## Architecture Notes

### Rendering Strategy

The application uses **hybrid rendering**:

- **Static pages** (`/about`, `/contact`, `/privacy`, `/terms`): Generated at build time via static generation.
- **Dynamic content pages** (`/services/[slug]`, `/blog/[slug]`, `/portfolio/[slug]`): Data fetched from Firestore at request time or revalidated via ISR.

### Server vs. Client Components

- **Server Components (default):** Used for pages, data fetching, and layout. No `"use client"` directive needed.
- **Client Components (`"use client"`):** Used only when required — forms, interactive dashboards, rich editors, authentication UI, animations.

### Data Flow

**Public Website:**
```
User → Next.js Server Component → Firestore Query → Rendered HTML → Browser
```

**Admin Content Creation:**
```
Admin → Firebase Auth → Admin Dashboard → Firestore Write → Website Updated
```

### Authentication & Authorization

- Firebase Authentication for admin access.
- Role-based access control: `admin` (full CRUD) and `editor` (limited permissions).
- All `/admin/*` routes are protected and require valid Firebase Auth token + role verification.

### Security Rules

- Only authenticated admins can write to Firestore.
- Public users can only read published content.
- All forms require validation (Zod schemas).
- File uploads restricted by size and allowed formats.
- API keys and credentials stored in `.env.local`, never committed.

### Performance Targets

- Lighthouse score above 90
- Image optimization via Next.js `<Image>` component
- Server-side rendering for dynamic content
- Static generation where possible
- Lazy loading for below-the-fold content
- Firestore query optimization

---

## Development Guidelines

### Code Conventions

- **Language:** TypeScript everywhere. Avoid `any` — prefer `unknown` with validation.
- **Components:** Small, reusable, single-responsibility. PascalCase naming (e.g., `ServiceCard.tsx`).
- **Utilities:** camelCase naming (e.g., `formatDate.ts`).
- **Imports:** Use `@/*` path alias mapping to `./src/*`.
- **Styling:** Tailwind CSS classes. Follow shadcn/ui patterns. Responsive-first.
- **Images:** Always use Next.js `<Image>` component with alt text. Never use raw `<img>`.

### Folder Organization

- Components go in `src/components/` (ui, layout, sections, forms).
- Feature-specific logic goes in `src/features/`.
- Firebase configuration goes in `src/lib/firebase/`.
- Custom hooks go in `src/hooks/`.
- TypeScript types go in `src/types/`.
- Utility functions go in `src/utils/`.
- Config constants go in `src/config/`.

### Form Handling

All forms must include:
- Zod validation schemas
- Error messages for each field
- Loading states during submission
- Success/error feedback after submission
- React Hook Form for state management

### SEO Requirements

Every public page must include:
- Custom `<title>` and meta description
- Open Graph data (og:title, og:description, og:image)
- Structured data (JSON-LD) for Organization, Service, Article, LocalBusiness
- Dynamic `generateMetadata()` for dynamic pages
- Canonical URLs
- Auto-generated sitemap

### Git Workflow

- **Branch naming:** `feature/service-cms`, `fix/auth-error`, `docs/readme-update`
- **Commit messages:** `type(scope): description` format (e.g., `feat(blog): add blog CMS`, `fix(auth): handle expired session`)

### Definition of Done

A feature is complete only when:
- Code is implemented and works correctly
- TypeScript has no errors
- UI is responsive across all breakpoints
- Form validation is in place
- Security has been reviewed
- Tests are added where required (unit, component, or E2E)
- Documentation is updated

---

## Development Roadmap

The project follows a 7-phase incremental build strategy:

### Phase 1: Project Foundation (Tasks 001–005)
- Initialize Next.js project with TypeScript and App Router
- Install and configure shadcn/ui (Button, Card, Input, Dialog, Form)
- Create scalable folder architecture
- Configure Firebase (Firestore, Auth, Storage)
- Set up environment variables

### Phase 2: Public Website (Tasks 006–012)
- Build global layout (Navbar, Footer, Container, Section)
- Create homepage with all sections (Hero, Problem, Services, Industries, Portfolio, Process, Testimonials, CTA)
- Create About, Services, Portfolio, Blog, and Contact pages

### Phase 3: Admin CMS (Tasks 013–019)
- Build admin authentication with Firebase Auth
- Create admin dashboard with sidebar navigation
- Implement CRUD for services, blogs, portfolio, and testimonials
- Set up media management with Firebase Storage

### Phase 4: SEO & Growth (Tasks 020–023)
- Implement dynamic metadata system
- Generate dynamic sitemap
- Add JSON-LD structured data
- Integrate Google Analytics, Search Console, conversion tracking

### Phase 5: Advanced Features (Tasks 024–026)
- AI chatbot for website visitors
- AI content assistant for admin CMS
- Lead management dashboard

### Phase 6: Testing (Tasks 027–029)
- Unit tests with Vitest
- Component tests with React Testing Library
- End-to-end tests with Playwright

### Phase 7: Deployment (Tasks 030–033)
- Production configuration (Vercel + Firebase)
- Security review (Firebase rules, auth, validation, permissions)
- Performance optimization (images, bundle, speed, queries)
- Final launch checklist (SEO, analytics, security, mobile, forms, error pages, backups)

**Current status:** No tasks started. The project is ready to begin Phase 1.

---

## Documentation Index

| File | Description |
|------|-------------|
| `agents/` | AI agent definitions directory — populated manually with agent configurations for AI coding assistants |
| `docs/01_PRD.md` | Product Requirements Document — vision, goals, personas, user stories, functional/non-functional requirements |
| `docs/02_TECHNICAL_DESIGN.md` | Technical Design Document — architecture, technology decisions, database design, API architecture, security |
| `docs/03_UI_UX.md` | UI/UX Specification — design principles, page layouts, component system, responsive behavior, animations |
| `docs/04_AI_RULES.md` | AI Coding Guidelines — rules for AI assistants: TypeScript, components, Firebase, security, testing, git |
| `docs/05_TASKS.md` | Development Roadmap — 33 tasks across 7 phases with priorities and dependencies |
| `docs/DESIGN.md` | Visual Design Specification — brand personality, typography, colors, layout philosophy, component design |
| `AGENTS.md` | Agent instructions — warns about Next.js breaking changes, directs to docs in `node_modules/next/dist/docs/` |

---

## Current State Summary

| Aspect | Status |
|--------|--------|
| Project scaffolding | Complete (Next.js 16 + TypeScript + Tailwind v4) |
| Custom code | None (default create-next-app template) |
| Components | None created |
| Routes | Only `/` (default template) |
| Firebase | Not configured |
| shadcn/ui | Not installed |
| Testing | Not set up |
| AI agents | Directory created (`agents/`), no agent files added yet |
| Documentation | Comprehensive (6 spec documents) |
| Git history | 2 commits (scaffolding + documentation) |
| Development tasks started | 0 of 33 |
