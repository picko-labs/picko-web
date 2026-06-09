# Language & copy

## Product default

| Audience | UI language |
|----------|-------------|
| Global users (primary) | **English** |
| Team / docs | Korean OK for internal notes; UI specs still say English |

Picko is Korean-built but global-first. Every user-visible string in the app should be English unless we ship explicit localization.

## Who we write for

| Segment | Role |
|---------|------|
| **Core** | **20s–30s** visiting **Korea** — discovery, trends, spots to hit IRL |
| **Breadth** | **Teens–40s** — same product, tone stays approachable for all |
| **Mindset** | **잘파 (well-informed / trend-conscious)** — cares what’s hot, authentic, worth the trip; low patience for fluff |

They use Picko like a **travel + culture compass**, not enterprise software. Copy should feel **current, light, and confident**—helping them find what’s worth picking, not lecturing them.

## Voice & tone

| Do | Avoid |
|----|--------|
| Short, scannable lines (mobile sidebar, map overlays) | Long paragraphs, legal tone |
| Friendly, direct **you** | Passive voice, “the user”, “please be advised” |
| Discovery language: **pick**, **spot**, **trending**, **near you** | Generic SaaS: “utilize”, “dashboard”, “items” |
| Light energy where the prototype does (emoji chips 🔥) | Stiff formality or heavy Gen-Z slang (“no cap”, “slay”) |
| Clear CTAs: **Save picks**, **Add a spot** | Vague: **Submit**, **Proceed**, **Learn more** (unless needed) |

**Sentence case** on buttons: `Continue with Google`, `Sign out`.

### Word choice hints

- **Pick** (noun/verb) — our brand action; prefer over “favorite” or “bookmark” in product chrome.
- **Spot** — a place on the map; not “location” or “POI” in UI.
- **Trending / hot** — fits trend-led discovery; match prototype (`Hot Place`, nationwide 🔥).
- **Near you** — traveler-friendly; better than “proximity-based results”.
- **Sign in** — warmer than “Log in” for social OAuth flows (either is OK; stay consistent).

When unsure, ask: *Would a 25-year-old in Seoul for the weekend skim this and get it in one second?*

## Examples

| ✅ | ❌ |
|----|-----|
| `Sign in to save your picks` | `로그인이 필요해요` |
| `Continue with Google` | `Google로 계속하기` |
| `Back to map` | `지도로 돌아가기` |
| `Nothing picked yet` | `No records found` |
| `Trending near you` | `Popular locations in your vicinity` |

## HTML

```html
<html lang="en">
```

## Future i18n

Not implemented yet. When added:

- Default locale: `en`
- User-facing keys in one place (e.g. `lib/i18n/en.ts`)
- Auth provider labels stay in the social provider registry
- Tone rules above apply to every locale’s **default** voice guide

## Cursor

- Rule: `.cursor/rules/localization.mdc` (always apply)
- Skill: `.cursor/skills/picko-design-system/language-reference.md`
