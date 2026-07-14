# AI_RULES.md

# AI Coding Guidelines

````md id="r4x91"
# Craftly Studio
## AI Coding Guidelines

Version: 1.0  
Purpose: Guidelines for AI coding assistants

Supported AI Tools:

- Cursor
- Claude Code
- GitHub Copilot
- ChatGPT
- Other AI development assistants

---

# 1. Core Development Principles

AI-generated code must follow:

- Production-quality standards
- Clean architecture
- Maintainable patterns
- Security-first development
- Performance optimization
- Reusable components

The AI must not generate quick prototypes unless explicitly requested.

---

# 2. Technology Rules

## Frontend Stack

Required:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui


Do not introduce:

- jQuery
- Bootstrap
- Unnecessary UI libraries
- Duplicate dependencies


---

# 3. TypeScript Rules

Always use TypeScript.

Avoid:

```ts
any
````

unless there is a strong reason.

Prefer:

```ts
unknown
```

with proper validation.

---

## Interfaces and Types

Create dedicated types.

Example:

```
types/

service.ts

blog.ts

portfolio.ts
```

---

# 4. Folder Organization

Follow:

```
src/

app/

components/

features/

lib/

hooks/

types/

utils/

config/
```

---

# 5. Component Rules

## Components Must Be:

* Small
* Reusable
* Single responsibility

Avoid:

Large components:

```
HomePage.tsx
1000+ lines
```

Prefer:

```
HeroSection.tsx

ServicesSection.tsx

PortfolioSection.tsx
```

---

# 6. Component Naming

Use PascalCase.

Correct:

```
ServiceCard.tsx

BlogEditor.tsx
```

Incorrect:

```
servicecard.tsx

service-card.tsx
```

---

# 7. File Naming

Components:

```
PascalCase
```

Utilities:

```
camelCase
```

Examples:

```
formatDate.ts

uploadImage.ts
```

---

# 8. Server and Client Components

Default:

Use Server Components.

Only use:

```tsx
"use client"
```

when required.

Examples:

Client Components:

* Forms
* Interactive dashboards
* Rich editors
* Authentication UI

---

# 9. Firebase Rules

## Database Access

Never expose unrestricted writes.

Bad:

```
allow write: if true;
```

---

Good:

```
Only authenticated admins can modify data.
```

---

# 10. Firebase Architecture Rules

Use:

```
lib/firebase/

firebase.ts

auth.ts

firestore.ts

storage.ts
```

---

Do not:

* Initialize Firebase repeatedly.
* Create duplicate Firebase clients.

---

# 11. Database Rules

Firestore documents must:

* Have timestamps.
* Validate required fields.
* Follow consistent naming.

Use:

```
createdAt

updatedAt
```

for all collections.

---

# 12. Authentication Rules

Admin routes:

```
/admin/*
```

must require authentication.

AI must implement:

* Auth checks
* Role verification
* Redirect handling

---

# 13. Security Rules

Never:

* Store passwords manually.
* Expose API keys.
* Trust client input.
* Skip validation.

---

Environment variables:

```
.env.local
```

must contain:

* Firebase credentials
* API keys
* External service keys

---

# 14. Form Handling Rules

All forms require:

* Validation
* Error messages
* Loading states
* Success states

Preferred:

* React Hook Form
* Zod validation

---

# 15. Error Handling

Never silently fail.

Bad:

```ts
catch(error){

}
```

---

Good:

```ts
catch(error){

logError(error)

showUserMessage()

}
```

---

# 16. Loading States

Every async operation requires:

* Loading indicator
* Disabled action button
* User feedback

Examples:

* Form submission
* File upload
* Data fetching

---

# 17. SEO Rules

Every public page must include:

* Metadata
* Title
* Description
* Open Graph data

Dynamic pages require:

```
generateMetadata()
```

---

# 18. Image Rules

Images must:

* Use Next Image component.
* Have alt text.
* Be optimized.

Never:

```html
<img>
```

unless required.

---

# 19. Performance Rules

AI-generated code should optimize:

* Bundle size
* Rendering
* Images
* Database queries

Avoid:

* Unnecessary client rendering
* Large dependencies
* Duplicate API calls

---

# 20. UI Rules

Follow:

* shadcn/ui components
* Design system consistency
* Responsive-first approach

Avoid:

* Random colors
* Inconsistent spacing
* Hardcoded styles everywhere

---

# 21. Accessibility Rules

Every UI must support:

* Keyboard navigation
* Proper labels
* ARIA attributes where required
* Screen readers

---

# 22. Testing Requirements

Required:

## Unit Testing

For:

* Utility functions
* Data transformations

---

## Component Testing

For:

* Forms
* Interactive components

---

## End-to-End Testing

For:

* Authentication flow
* CMS workflow
* Lead submission

Recommended:

* Vitest
* React Testing Library
* Playwright

---

# 23. Documentation Rules

Every major feature requires:

Documentation:

```
docs/features/

feature-name.md
```

Include:

* Purpose
* Architecture
* Usage
* Limitations

---

# 24. Git Standards

## Branch Naming

Use:

```
feature/service-cms

feature/blog-editor

fix/auth-error
```

---

# Commit Messages

Follow:

```
type(scope): description
```

Examples:

```
feat(blog): add blog CMS

fix(auth): handle expired session

docs(readme): update setup guide
```

---

# 25. Code Review Rules

Before accepting AI-generated code:

Check:

✓ Security
✓ Performance
✓ Type safety
✓ Error handling
✓ Accessibility
✓ Maintainability

---

# 26. AI Behavior Rules

AI assistant must:

* Ask before changing architecture.
* Explain major decisions.
* Avoid unnecessary dependencies.
* Follow existing patterns.
* Reuse existing components.
* Prefer simple solutions.

---

# 27. Feature Development Workflow

For every feature:

Step 1:

Understand requirements.

↓

Step 2:

Design data model.

↓

Step 3:

Create components.

↓

Step 4:

Implement logic.

↓

Step 5:

Add validation.

↓

Step 6:

Test.

↓

Step 7:

Document.

---

# 28. Definition of Done

A feature is complete only when:

✓ Code implemented
✓ TypeScript errors resolved
✓ Responsive UI completed
✓ Validation added
✓ Security reviewed
✓ Tests added where required
✓ Documentation updated

---

# End of Document


