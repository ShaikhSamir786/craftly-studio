# Google Search Console Analysis — Craftly Studio

Queries found for the agency website, exported from Google Search Console.

## Raw Query Data

| Query | Impressions | Clicks |
|---|---|---|
| branding company in vapi | 3 | 0 |
| best branding services vapi | 2 | 0 |
| seo company vapi | 1 | 0 |
| seo company in vapi | 1 | 0 |
| software company near me | — | — |

## Related Queries to Target (not yet tracked)

Expanded versions of the found queries — same intent, different phrasing. Add these to GSC monitoring after the fixes ship.

### Branding
- branding company in vapi
- branding agency vapi
- branding companies in vapi
- brand identity services vapi
- logo design company vapi
- best branding agency in vapi
- branding company near me
- brand design company vapi
- corporate branding company vapi
- rebranding agency vapi
- branding services for manufacturers vapi
- top branding companies in vapi

### SEO
- seo company vapi
- seo company in vapi
- best seo company in vapi
- seo agency vapi
- seo company near me
- digital marketing company vapi
- top seo companies in vapi
- seo services near me
- google ads company vapi
- local seo company vapi
- seo consultant vapi
- affordable seo company in vapi
- seo agency for manufacturers vapi

### Software / IT
- software company vapi
- software company in vapi
- software company near me
- software development company vapi
- it company vapi
- it services company vapi
- software development near me
- it company in vapi
- custom software company vapi
- software developer company vapi
- it company near me
- software agency vapi
- best software company in vapi
- software consulting vapi

### Company-intent variants (any service)
- web development company vapi
- website design company vapi
- digital agency vapi
- it company in gidc vapi
- website company near me
- app development company vapi
- ecommerce development company vapi

## Key Finding

Low impressions + zero clicks = the site is **barely visible** AND **not compelling** enough to click when shown. Fix visibility first, then CTR.

## The Core Problem

The pages rank under **"Services in Vapi"** phrasing, but searchers type **"company in Vapi"** / **"company near me"**. Google treats these as different intents. The site's titles/descriptions never contain the exact words users typed.

| Query | Gap | Where it lives today |
|---|---|---|
| branding company in vapi | Title says "Branding & UI/UX Design Services" — no "company" phrase; slug is `branding-ui-ux` not `branding` | `/services/branding-ui-ux` |
| best branding services vapi | No "best" modifier anywhere in metadata | same page |
| seo company vapi / in vapi | Title says "SEO Services in Vapi" — searchers use "SEO company" | `/services/seo-services` |
| software company near me | No page targets software/IT company positioning at all | homepage keywords only, not on-page |

## Why 0 Clicks Despite Impressions

Titles/descriptions don't contain the search phrase, so:
- They don't **bold-match** in the SERP → the site looks irrelevant to the searcher.
- Searchers only click results that contain their exact words.

## Targeting "Company" Without Losing "Services"

Don't replace "services" with "company". Google reads the whole page, not just the title — a single page can rank for both "seo services vapi" AND "seo company vapi" if both phrases appear on it.

### Where each phrase lives

| Element | Role | Example |
|---|---|---|
| Title | Higher-intent primary variant, still includes the other | `SEO Company in Vapi \| SEO Services & Local SEO Agency` |
| H1 | One variant | `SEO Company in Vapi, Gujarat` |
| Body copy | The other variant | "...provides SEO services in Vapi..." |
| URL slug | Unchanged — the word "services" is already in the path, which Google weighs | `/services/seo-services` |
| FAQs | Add the second variant | "Why choose a local SEO company in Vapi?" |

### Worked example — branding page

| Location | Text |
|---|---|
| Title | `Branding Company in Vapi \| Branding Services, Logo & Identity` |
| H1 | `Branding Company in Vapi` |
| Intro | "...branding services in Vapi..." |
| Slug | `/services/branding-ui-ux` (unchanged) |

### The general rule

- **Company** queries → won via title, H1, GMB profile, and FAQs.
- **Services** queries → won via URL slug, body copy, and "services" in the description.

Each page keeps its `/services/*` URL, which by itself preserves the "services" intent.

## Recommended Fixes

### 1. On-page SEO (metadata & content)
- **Titles & H1s** — use the dual-signal strategy above; keep "services" in the slug/body while adding "company" to title and H1:
  - SEO: *"SEO Company in Vapi | SEO Services & Local SEO Agency"*
  - Branding: *"Branding Company in Vapi | Branding Services, Logo & Identity"*
  - Work "best branding services Vapi" into the branding page H1/intro.
- **Descriptions** — rewrite meta descriptions to contain the exact query phrase + a benefit + a CTA (e.g. "Get a free SEO audit today") to lift CTR.
- **Body copy** — add the "company" variant as natural sentences in intro paragraphs, not just keyword stuffing.
- **FAQs** — add question/answer pairs using the exact query phrasing (e.g. "Why choose a local SEO company in Vapi?", "What makes Craftly the best branding company in Vapi?").
- **Image alt text & headings** — use location-targeted alt text and H2/H3 subheadings containing "in Vapi" phrases.

### 2. Create dedicated pages
- **Software Company / Software Development page** — no page currently owns "software company near me"; it cannot rank without it. Create `/services/software-development` with:
  - Title/H1 targeting *"Software Company in Vapi"* + *"software company near me"*.
  - Content: custom software, CRMs, ERPs, apps for Vapi GIDC businesses.
  - FAQ, service schema, JSON-LD, related industries.
- **Consider a dedicated "Branding" page** — split `branding-ui-ux` into a standalone `/services/branding` page to own "branding company in Vapi" cleanly.
- **Local landing pages** — for surrounding areas ("SEO company in Valsad / Daman / Silvassa") to win nearby "company in ___" searches.

### 3. Google Business Profile (GMB)
- Update business description to say "SEO company in Vapi" and "branding company in Vapi" verbatim.
- Set the primary category to reflect agency/company, add service listings.
- Post regular updates; this is how "near me" queries are won (map pack), not title tags alone.

### 4. Content & link building
- Publish blog posts targeting the exact queries (e.g. "Best SEO company in Vapi — how we rank local businesses", "Top branding services in Vapi for manufacturers").
- Internal links from homepage/services page to the new dedicated pages with descriptive anchor text.
- Get local backlinks/citations from Vapi & Gujarat directories, local news, and industry partners to strengthen "in Vapi" relevance.

### 5. Technical SEO
- Re-submit sitemap in GSC after any title/content change so Google re-crawls.
- Request indexing for changed URLs via GSC URL inspection.
- Keep schema markup (Service, LocalBusiness, FAQ) updated on every changed page.
