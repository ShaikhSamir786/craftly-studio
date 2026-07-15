# Design System — Craftly Studio

> This document is the single source of truth for the visual design language, component patterns, animation conventions, and layout rules used across the Craftly Studio site (public marketing pages + admin CMS). All new UI work — human or AI-generated — should follow these guidelines.

---

## Table of Contents

1. [Project Context & Documentation](#1-project-context--documentation)
2. [Design Philosophy](#2-design-philosophy)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Spacing & Layout](#5-spacing--layout)
6. [Borders & Shadows](#6-borders--shadows)
7. [Animation & Motion](#7-animation--motion)
8. [Component Patterns](#8-component-patterns)
9. [Page Patterns](#9-page-patterns)
10. [Admin Dashboard Theme](#10-admin-dashboard-theme)
11. [Responsive Breakpoints](#11-responsive-breakpoints)
12. [Accessibility](#12-accessibility)
13. [Icon System](#13-icon-system)
14. [Do / Don't Summary](#14-do--dont-summary)

---

## 1. Project Context & Documentation

This design system is part of the **Craftly Studio** repository. AI agents and developers should reference these project-level files for full context:

| File | Purpose |
|------|---------|
| `AGENTS.md` | AI agent instructions — project overview, tech stack, coding rules, folder structure, conventions |
| `context.md` | Full repository context — architecture, database schema, setup, development roadmap, current state |
| `agents/` | AI agent definitions directory — populated manually with agent configurations for AI coding assistants |
| `docs/01_PRD.md` | Product Requirements Document |
| `docs/02_TECHNICAL_DESIGN.md` | Technical Design Document |
| `docs/03_UI_UX.md` | UI/UX Specification |
| `docs/04_AI_RULES.md` | Detailed AI Coding Guidelines |
| `docs/05_TASKS.md` | Development Roadmap (33 tasks, 7 phases) |
| `docs/DESIGN.md` | This document — Visual Design Specification |

> **Note:** Before writing any code, AI agents must read `AGENTS.md` and `context.md` for project conventions, and check `node_modules/next/dist/docs/` for Next.js 16 breaking changes.

---

## 2. Design Philosophy

Craftly Studio's site follows a **premium, editorial, boutique-agency** aesthetic — the visual opposite of a template marketplace.

- **Brand promise:** "Not another template website. A digital experience crafted for your business." Every screen must visually earn that line.
- **Fewer, larger sections** over dense feature grids. Whitespace is a design decision, not empty space.
- **Outcome-first copy** — services and portfolio entries describe business results, not tech stack.
- **Dark, confident hero/footer** bookending **soft, readable content sections** — this contrast *is* the brand's visual signature.
- Decoration is functional: animation communicates state (load, hover, transition) rather than existing for its own sake.
- Mobile-first by default. Design mobile layouts first, then layer `md:` / `lg:` / `xl:` overrides.

---

## 3. Color System

All colors are CSS custom properties defined in `app/globals.css` and mapped into the Tailwind v4 theme via `@theme {}`. Never hardcode raw hex values in components — always use the token.

### 3.1 CSS Custom Properties

```css
:root {
  /* Base */
  --bg-primary:        #ffffff;   /* content section background */
  --bg-inverse:         #0a0a0a;  /* hero / footer / premium sections */
  --text-primary:       #0a0a0a;  /* headings on light bg */
  --text-inverse:       #f5f5f5;  /* headings on dark bg */
  --text-secondary:     #374151;  /* gray-700 — body copy */
  --text-muted:         #6b7280;  /* gray-500 — captions, meta */
  --text-muted-inverse: #9ca3af;  /* gray-400 — captions on dark bg */

  /* Surfaces */
  --surface-card:       #ffffff;
  --surface-soft:       #f7f7f5;  /* neutral warm-gray section bg */
  --border-primary:     #e5e7eb;  /* gray-200 — card borders */
  --border-inverse:     rgba(255,255,255,0.12);

  /* Nav */
  --nav-bg:             rgba(255,255,255,0.8);  /* frosted glass */
  --nav-border:         transparent;

  /* Brand accent — "creative technology highlight" */
  --accent:             #ff6a3d;  /* warm amber-orange — CTAs, highlights */
  --accent-hover:       #e6552a;
  --accent-foreground:  #0a0a0a;  /* text on accent bg */

  /* Semantic */
  --success:            #22c55e;
  --error:              #ef4444;
}
```

> **Note on accent color:** Deliberately warm (amber/orange), not blue. Design spec explicitly flags "corporate blue-only" as a failure mode — the accent should feel human and craft-driven, not generic SaaS.

### 3.2 Tailwind Color Tokens

| Token | Maps to | Use |
|---|---|---|
| `bg-background` | `--bg-primary` | Default page/content background |
| `bg-inverse` | `--bg-inverse` | Hero, footer, premium/dark sections |
| `text-foreground` | `--text-primary` | Headings on light background |
| `text-inverse` | `--text-inverse` | Headings on dark background |
| `text-secondary` | `--text-secondary` | Body copy |
| `text-muted` | `--text-muted` | Captions, labels, meta text |
| `bg-surface-soft` | `--surface-soft` | Alternating section backgrounds |
| `border-primary` | `--border-primary` | Card borders (light sections) |
| `border-inverse` | `--border-inverse` | Card borders (dark sections) |
| `bg-accent` / `text-accent` | `--accent` | Primary CTA, key highlights only |

> **Rule:** Accent color is reserved for conversion moments (primary CTA buttons, active nav indicator, key stat highlight). Do not use it decoratively — spec explicitly prohibits "excessive gradients" and visual noise.

---

## 4. Typography

### 4.1 Font Families

Loaded via `next/font/google` in `src/lib/fonts.ts`, applied as CSS variables on `<html>`:

| Variable | Font | Use |
|---|---|---|
| `--font-sans` | Plus Jakarta Sans | Default UI, body, nav, cards |
| `--font-display` | Manrope (weight 700–800) | Hero & section headlines only |
| `--font-mono` | Geist Mono | Code snippets, stat numbers (optional tabular feel) |

```tsx
// src/app/layout.tsx
className={`${plusJakarta.variable} ${manrope.variable} ${geistMono.variable}`}
```

### 4.2 Type Scale

| Element | Size | Weight | Notes |
|---|---|---|---|
| Hero H1 | `text-4xl sm:text-6xl` | 800 | `font-display`, `tracking-tight`, max-width ~14 characters/line |
| Section H2 | `text-3xl sm:text-4xl` | 700 | `font-display`, `tracking-tight` |
| Card / Service H3 | `text-lg` | 600 | `font-sans` |
| Eyebrow / label | `text-xs` | 600 | `uppercase tracking-widest text-muted` |
| Body copy | `text-base sm:text-lg` | 400 | `text-secondary`, `leading-relaxed` |
| Caption / meta | `text-sm` | 400 | `text-muted` |
| Nav links | `text-sm` | 500 | — |
| Button label | `text-sm` | 600 | — |

### 4.3 Prose (Blog Content)

Blog content rendered from Firestore rich text is wrapped in `.prose`. Custom overrides in `globals.css` — do not rely on default `@tailwindcss/typography` styling.

```
font-size:   1.0625rem
line-height: 1.75
color:       var(--text-secondary)

h1: 1.875rem / fw 700 / font-display
h2: 1.5rem   / fw 700 / font-display
h3: 1.25rem  / fw 600
```

---

## 5. Spacing & Layout

### 5.1 Page Gutter

```
px-6      (24px)  — mobile
md:px-10  (40px)  — md+
lg:px-16  (64px)  — lg+ (marketing pages only, not admin)
```

### 5.2 Max Widths

| Context | Max Width |
|---|---|
| Marketing content sections | `max-w-6xl` (72rem) |
| Hero headline text block | `max-w-3xl` |
| Footer inner | `max-w-7xl` |
| Blog/case-study prose | `max-w-3xl` |
| Admin content area | `max-w-full` (fluid within sidebar layout) |

### 5.3 Vertical Rhythm

Per the design philosophy principle "less sections, more impact" — sections are generously spaced, not stacked tightly:

```
Section padding:      py-24 md:py-32
Hero padding:         py-32 md:py-40
Card grid gap:        gap-8
Admin section gap:    gap-6 (tighter — density is appropriate in CMS)
```

### 5.4 Navbar Height

```css
--navbar-h: 88px;    /* mobile */
--navbar-h: 96px;    /* md+ */
```

Fixed navbar, frosted-glass background (`bg-nav-bg backdrop-blur-md`). Content offset via spacer `<div>` immediately following `<nav>`.

---

## 6. Borders & Shadows

### 6.1 Border Radius

| Component | Radius |
|---|---|
| Service / portfolio cards | `rounded-2xl` (16px) |
| Buttons | `rounded-full` (pill) — matches "strong contrast, rounded corners" spec |
| Testimonial cards | `rounded-2xl` |
| Admin table containers | `rounded-lg` (8px) |
| Tags / badges | `rounded-full` |
| Input fields | `rounded-lg` |

### 6.2 Card Borders

Cards use `border border-border-primary` on light sections, `border border-border-inverse` on dark sections. Per spec: **avoid heavy borders** — always `border` (1px), never `border-2` or thicker.

### 6.3 Shadows

| Use | Class |
|---|---|
| Resting card | `shadow-none` (border does the work) |
| Card hover | `shadow-lg` via `hover:shadow-lg transition-shadow duration-300` |
| Primary CTA button | `shadow-md shadow-accent/20` |
| Admin modal / dialog | `shadow-xl` |

> Spec explicitly prohibits "excessive shadows." Default to borders for definition; reserve shadow for hover/elevation feedback only.

---

## 7. Animation & Motion

### 7.1 Duration & Easing Reference

| Use | Duration | Easing |
|---|---|---|
| Color / opacity transitions | `200ms` | `ease` |
| Card hover (shadow/lift) | `300ms` | `ease-out` |
| Nav underline expand | `250ms` | `ease-out` |
| Mobile menu open/close | `300ms` | `ease-in-out` |
| Section fade-in on scroll | `600ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Button hover fill | `200ms` | `ease-out` |

### 7.2 `fadeInUp` Entrance Animation

Used for scroll-triggered section reveals (via `IntersectionObserver` or a lightweight library — no heavy animation dependency):

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### 7.3 Rules

- Micro-interactions only: hover states, fade-ins, one page-load entrance per section.
- **No** scroll-jacking, parallax, or multi-second loading animations — spec explicitly says avoid "long loading animations" and "excessive movement."
- Card hover = shadow + border color shift only. Do not use `scale` or `translateY` transforms on cards (keeps the "premium, calm" feel rather than "bouncy SaaS demo" feel).

---

## 8. Component Patterns

### 8.1 Navbar

- `fixed top-0 z-50 w-full h-[88px] md:h-[96px] bg-nav-bg backdrop-blur-md border-b border-nav-border`
- Logo left, links center/right, CTA button far right.
- Links: `text-sm font-medium text-muted hover:text-foreground transition-colors`, active state adds `text-foreground` + 2px underline.
- CTA button: `"Start Your Project"` — see Button spec below.
- Mobile: hamburger → full-screen overlay `fixed inset-0 z-40 bg-background`, links stagger in with `50ms` delay increments.

### 8.2 Hero

```jsx
<section className="bg-inverse text-inverse py-32 md:py-40 px-6 md:px-10">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
      Not another template website.
      <br />A digital experience crafted for your business.
    </h1>
    <p className="mt-6 text-lg text-muted-inverse max-w-xl mx-auto">
      We design and develop custom websites that help businesses build trust,
      attract customers, and grow online.
    </p>
    <div className="mt-10 flex justify-center gap-4">
      <Button variant="accent">Start Your Project</Button>
      <Button variant="ghost-inverse">See Our Work</Button>
    </div>
  </div>
  {/* Visual: browser mockup / device showcase — never stock photography */}
</section>
```

### 8.3 Buttons

```jsx
// Primary (accent)
className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-sm
  shadow-md shadow-accent/20 hover:bg-accent-hover transition-colors duration-200"

// Secondary (ghost, light section)
className="border border-border-primary text-foreground px-6 py-3 rounded-full font-semibold text-sm
  hover:bg-surface-soft transition-colors duration-200"

// Secondary (ghost, dark section)
className="border border-border-inverse text-inverse px-6 py-3 rounded-full font-semibold text-sm
  hover:bg-white/5 transition-colors duration-200"
```

Copy: `"Start Your Project"` (primary site-wide CTA), `"Get Free Website Audit"` (lead-gen secondary CTA on Contact/Services pages).

### 8.4 Service Card

```jsx
<div className="bg-surface-card border border-border-primary rounded-2xl p-8
  hover:shadow-lg transition-shadow duration-300">
  <span className="text-xs uppercase tracking-widest text-muted font-semibold">
    Custom Website Development
  </span>
  <h3 className="mt-3 text-lg font-semibold text-foreground">
    Unique websites designed around your business.
  </h3>
  <Link href="/services/website-development" className="mt-4 inline-flex items-center gap-1
    text-sm font-medium text-accent hover:gap-2 transition-all">
    Learn more →
  </Link>
</div>
```

Five services, outcome-first labels: **Custom Website Development** → "Unique websites designed around your business." · **Local SEO** → "Help customers discover your business." · **AI Automation** → "Use intelligent systems to save time." · **Maintenance** → "Keep your website secure and improving." · **Website Redesign** → "Transform outdated sites into modern, high-converting experiences."

### 8.5 Portfolio Card

Never a bare screenshot + title. Always structured as problem → solution → result:

```jsx
<div className="bg-surface-card border border-border-primary rounded-2xl overflow-hidden
  hover:shadow-lg transition-shadow duration-300">
  <Image src={coverImage} alt={title} className="w-full aspect-video object-cover" />
  <div className="p-6">
    <span className="text-xs uppercase tracking-widest text-muted font-semibold">
      {industry} {/* e.g. "Restaurant" */}
    </span>
    <h3 className="mt-2 text-lg font-semibold">{clientTitle}</h3>
    <dl className="mt-4 space-y-2 text-sm text-secondary">
      <div><dt className="font-medium text-foreground">Challenge</dt><dd>{problem}</dd></div>
      <div><dt className="font-medium text-foreground">Solution</dt><dd>{solution}</dd></div>
      <div><dt className="font-medium text-foreground">Result</dt><dd>{result}</dd></div>
    </dl>
  </div>
</div>
```

### 8.6 Testimonial Card

```jsx
<div className="bg-surface-soft rounded-2xl p-8">
  <p className="text-lg text-secondary leading-relaxed">"{message}"</p>
  <div className="mt-6 flex items-center gap-3">
    <Image src={avatar} className="w-10 h-10 rounded-full object-cover" alt={name} />
    <div>
      <div className="text-sm font-semibold text-foreground">{name}</div>
      <div className="text-xs text-muted">{company}</div>
    </div>
  </div>
</div>
```

### 8.7 Footer

- `bg-inverse text-inverse border-t border-border-inverse`
- Columns: Logo + tagline | Services | Company (About/Blog) | Contact. Bottom bar: copyright + social icons.
- Footer links: `text-sm text-muted-inverse hover:text-inverse transition-colors`.

---

## 9. Page Patterns

### 9.1 Homepage (`/`)

Fixed section order per brand spec — do not add sections beyond this list without revisiting the "less sections, more impact" principle:

```
Hero → Trust Indicators → Problem Statement → Services →
Industries → Portfolio (preview, 3 items) → Process →
Testimonials → Final CTA → Footer
```

### 9.2 Service Detail (`/services/[slug]`)

`Hero (service-specific headline) → Benefits (3-4, outcome-framed) → Process → FAQ → CTA`

### 9.3 Portfolio (`/portfolio`, `/portfolio/[slug]`)

Listing: grid of Portfolio Cards (§7.5). Detail page: full narrative — Client → Challenge → Solution → Implementation → Result → Testimonial (if available) → CTA to start a similar project.

### 9.4 Blog (`/blog`, `/blog/[slug]`)

Listing: featured article (large card) + grid of remaining articles. Detail: `PageHeader` → cover image → prose content → author/date meta → related posts → CTA.

### 9.5 Contact (`/contact`)

Two-column on desktop: lead form (React Hook Form + Zod) left, WhatsApp CTA + email + location + FAQ right. Single column, form-first on mobile.

### 9.6 Empty States

```
No projects yet:
  Message: "No projects added yet."
  Action:  "Create your first project." (admin) — or nothing shown publicly, section omitted.
```

### 9.7 Error States

```
Message: "Unable to load content. Please try again."
```
Clear, human-friendly, always paired with a retry action — never a raw error code shown to visitors.

---

## 10. Admin Dashboard Theme

The CMS is visually **distinct** from the public site — a "modern SaaS dashboard" personality, not the editorial marketing aesthetic. Do not apply hero/dark-section styling here.

### 10.1 Layout

- Fixed left sidebar (`w-64`, `bg-surface-card border-r border-border-primary`) with nav: Dashboard, Services, Blogs, Portfolio, Testimonials, Media, SEO.
- Top bar: page title + primary action button (e.g. "+ New Service").
- Content area: `bg-surface-soft` with `max-w-full px-8 py-6`.

### 10.2 Dashboard Cards

```jsx
<div className="bg-surface-card border border-border-primary rounded-lg p-6">
  <div className="text-xs uppercase tracking-wide text-muted font-medium">Leads</div>
  <div className="mt-2 text-3xl font-bold text-foreground">{count}</div>
</div>
```

Cards: Services · Blog Posts · Projects · Leads (new/contacted/converted breakdown).

### 10.3 Data Tables

`bg-surface-card border border-border-primary rounded-lg` container. Row hover: `hover:bg-surface-soft`. Standard columns: title/name, status badge, updated date, actions (edit/delete icon buttons). Search + status filter above every table.

### 10.4 Forms / Editors

Clean, grouped fields with clear section labels. Rich text via a WYSIWYG editor for blog/service descriptions. Image fields open the shared Media Library modal rather than raw URL input. Every create/edit form has a live preview toggle where feasible (blog, service).

---

## 11. Responsive Breakpoints

Standard Tailwind breakpoints.

| Breakpoint | Key Changes |
|---|---|
| `sm` (640px) | Footer becomes multi-column, testimonial cards go 2-up |
| `md` (768px) | Desktop nav appears, hamburger hidden, service/portfolio grids go 2–3 col, section padding increases |
| `lg` (1024px) | Hero visual and text can go side-by-side on service pages, admin sidebar always visible |
| `xl` (1280px) | Max page gutter (`lg:px-16`) applies, portfolio grid goes 3-col |

Mobile priority requirements (marketing pages): clear typography at base size, single large CTA button always visible without scrolling on hero, fast image loading (`next/image` with priority on hero visual only).

---

## 12. Accessibility

- WCAG 2.1 AA minimum across public and admin surfaces.
- All interactive elements have visible focus states: `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`.
- Icon-only buttons (hamburger, close, admin table actions) require `aria-label`.
- Color contrast: dark hero/footer use `--text-inverse` (near-white) on `--bg-inverse` (near-black) — verify AA+ before shipping any accent-on-dark text combination.
- Forms: every input has an associated `<label>`, error messages are programmatically linked via `aria-describedby`.
- Keyboard navigation: full tab order through nav → hero CTA → content → footer; admin tables/forms fully operable without a mouse.

---

## 13. Icon System

Use a single icon set for consistency — `lucide-react` (already available in the project's dependency set) for both public site and admin.

| Context | Size |
|---|---|
| Inline with text / nav links | `w-4 h-4` |
| Service/portfolio card icons | `w-5 h-5` |
| Admin sidebar icons | `w-5 h-5` |
| Admin dashboard stat card icons | `w-5 h-5`, `text-muted` |
| Social/footer icons | `w-4 h-4` |

Do not mix icon libraries (no `react-icons` + `lucide-react` in the same view) — pick one per surface and stay consistent.

---

## 14. Do / Don't Summary

| ✅ DO | ❌ DON'T |
|---|---|
| Use `bg-inverse` / `text-inverse` tokens for hero/footer | Hardcode `bg-black text-white` |
| Use `border border-border-primary` on all cards | Use `border-2` or heavy borders |
| Reserve `--accent` for CTAs and key highlights | Use accent color decoratively across a page |
| Use `rounded-2xl` for content cards, `rounded-full` for buttons | Mix border radii inconsistently across similar components |
| Use `hover:shadow-lg transition-shadow` for card hover | Use `hover:scale-105` or `translateY` on cards |
| Structure portfolio entries as Challenge → Solution → Result | Show a bare screenshot + title |
| Write service copy as outcomes ("Help customers discover your business") | Write service copy as tech features ("SEO meta tag optimization") |
| Keep homepage to the fixed 10-section order | Add extra sections without revisiting "less sections, more impact" |
| Use stock-free visuals: mockups, browser previews, device shots | Use generic office/stock business photography |
| Style the admin CMS as a distinct "SaaS dashboard" surface | Bleed marketing-page dark/editorial styling into `/admin/*` |