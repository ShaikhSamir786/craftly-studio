# AI Agent Instructions — Craftly Studio

<!-- BEGIN:nextjs-agent-rules -->
## ⚠️ Next.js Version Warning

This is NOT the Next.js you know.

This version (16.2.10) has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project Overview

Craftly Studio is a **digital agency website + CMS platform** built with Next.js (App Router). It has two sides:

- **Public website** — marketing pages for services, portfolio, blog, and contact
- **Admin CMS** — authenticated dashboard for managing content (services, blogs, portfolio, testimonials)

Core positioning: *"Not another template website. A digital experience crafted for your business."*

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui |
| Backend | Firebase (Firestore, Auth, Storage) |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Testing | Vitest, React Testing Library, Playwright |
| Deployment | Vercel (frontend) + Firebase Cloud (backend) |

---

## Key Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## Folder Structure

```
agents/              # AI agent definitions
src/
├── app/             # Next.js App Router (routes and pages)
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui base components
│   ├── layout/      # Navbar, Footer, Container, Section
│   ├── sections/    # Hero, CTA, ServiceCard, etc.
│   └── forms/       # Input, Textarea, ContactForm, etc.
├── features/        # Feature-specific modules (admin, auth, blog, portfolio)
├── lib/             # Shared libraries
│   └── firebase/    # Firebase config (firebase.ts, auth.ts, firestore.ts, storage.ts)
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── config/          # Configuration constants
```

---

## Coding Rules

### TypeScript
- Use TypeScript everywhere. Never use `any` — prefer `unknown` with validation.
- Create dedicated type files in `src/types/` (e.g., `service.ts`, `blog.ts`).

### Components
- Small, reusable, single-responsibility.
- PascalCase naming: `ServiceCard.tsx`, **not** `service-card.tsx`.
- Use Server Components by default. Only add `"use client"` when required (forms, interactive UI, auth).
- Never use raw `<img>` — always use Next.js `<Image>` with alt text.

### Styling
- Tailwind CSS only. No inline styles, no CSS modules, no additional CSS libraries.
- Follow shadcn/ui patterns for component styling.
- Responsive-first approach.

### Forms
- React Hook Form + Zod for all forms.
- Always include: validation, error messages, loading states, success states.

### Firebase
- Initialize Firebase once in `src/lib/firebase/firebase.ts`.
- Never create duplicate Firebase clients.
- Firestore documents must have `createdAt` and `updatedAt` timestamps.
- Never expose unrestricted writes. Only authenticated admins can modify data.

### Security
- Never store passwords manually, expose API keys, trust client input, or skip validation.
- Environment variables go in `.env.local` — never commit credentials.
- All `/admin/*` routes require Firebase Auth + role verification.

### SEO
- Every public page must have metadata (title, description, OG data).
- Dynamic pages use `generateMetadata()`.
- Use JSON-LD structured data (Organization, Service, Article, LocalBusiness).

### Error Handling
- Never silently fail. Always log errors and show user-friendly messages.
- Every async operation needs: loading indicator, disabled action button, user feedback.

### Git
- Branch naming: `feature/service-cms`, `fix/auth-error`, `docs/readme-update`
- Commit format: `type(scope): description` (e.g., `feat(blog): add blog CMS`)

---

## Documentation

| File | Purpose |
|------|---------|
| `context.md` | Full repository context (overview, architecture, schema, setup) |
| `docs/01_PRD.md` | Product Requirements Document |
| `docs/02_TECHNICAL_DESIGN.md` | Technical Design Document |
| `docs/03_UI_UX.md` | UI/UX Specification |
| `docs/04_AI_RULES.md` | Detailed AI Coding Guidelines |
| `docs/05_TASKS.md` | Development Roadmap (33 tasks, 7 phases) |
| `docs/DESIGN.md` | Visual Design Specification |
| `agents/` | AI agent definitions directory |

---

## Definition of Done

A feature is complete only when:

- Code is implemented and works
- TypeScript has no errors
- UI is responsive across all breakpoints
- Form validation is in place
- Security has been reviewed
- Tests are added where required
- Documentation is updated
