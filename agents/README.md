# Craftly Studio — AI Agent Definitions

Purpose-built agents for **Craftly Studio**, the digital-agency website + CMS platform built on Next.js 16 (App Router), TypeScript, Tailwind CSS 4, and Firebase.

These agents are tailored to this codebase and derive their context from `context.md` and the documents in `docs/`:

| Reference | Contents |
|-----------|----------|
| `context.md` | Repository context — architecture, schema, current state, roadmap |
| `docs/01_PRD.md` | Product Requirements Document |
| `docs/02_TECHNICAL_DESIGN.md` | Technical Design Document |
| `docs/03_UI_UX.md` | UI/UX Specification |
| `docs/04_AI_RULES.md` | AI Coding Guidelines |
| `docs/05_TASKS.md` | Development Roadmap (33 tasks, 7 phases) |
| `docs/DESIGN.md` | Visual Design Specification |

---

## Agents

| Agent | Location | Purpose |
|-------|----------|---------|
| `tech-lead` | `.opencode/agent/` · `generic/` | Architecture, conventions, planning, refactoring, code review |
| `frontend` | `.opencode/agent/` · `generic/` | Public website pages, sections, components, forms, animations |
| `admin-cms` | `.opencode/agent/` · `generic/` | Admin dashboard, blog/inquiries/media, future CMS CRUD |
| `backend` | `.opencode/agent/` · `generic/` | Firebase (Firestore/Auth/Storage), Cloudinary, API routes, email |
| `seo` | `.opencode/agent/` · `generic/` | Metadata, JSON-LD, sitemap, robots, analytics |
| `ui-ux` | `.opencode/agent/` · `generic/` | Design system compliance, accessibility, responsive behavior |
| `testing` | `.opencode/agent/` · `generic/` | Vitest, React Testing Library, Playwright |

---

## Locations

### `.opencode/agent/` — opencode subagents (source of truth)

Markdown files with `description` / `mode` frontmatter, loaded natively by opencode as project subagents. Edit files there directly — **no copying or scripts needed**. After editing, **quit and restart opencode** — config is loaded once at startup and is not hot-reloaded.

### `generic/` — tool-agnostic agents

Plain markdown agent definitions usable with any AI coding assistant (Cursor, Claude Code, GitHub Copilot, ChatGPT, etc.). Feed the relevant file as context, or paste its body as a custom prompt.

---

## Using an agent

Every agent prompt instructs the model to:

1. Read `AGENTS.md` and `context.md` for project conventions.
2. Check `node_modules/next/dist/docs/` before writing any Next.js code (this project runs **Next.js 16.2.10 — not the Next.js most models were trained on**).
3. Consult the specific `docs/` files relevant to the task.
4. Follow the project's Definition of Done (TypeScript clean, responsive, validated, secure, tested, documented).

Agents never modify files unless asked; they are specialized assistants, not autonomous workers.
