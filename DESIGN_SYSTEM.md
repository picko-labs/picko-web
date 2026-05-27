# Picko Design System

Extracted from K-SPOT Map.html prototype for Next.js + Tailwind implementation.

## Cursor AI 연동

| 유형 | 경로 | 역할 |
|------|------|------|
| **Rule** | `.cursor/rules/routing.mdc` | App Router·프로토타입 매핑·컨텍스트 읽기 순서 |
| **Rule** | `.cursor/rules/design-system.mdc` | UI 작업 시 Tailwind·토큰·TDS 제약 (tsx/css) |
| **Rule** | `.cursor/rules/map-service-strategy.mdc` | Google Maps |
| **Skill** | `.cursor/skills/picko-design-system/` | 프로토타입→React 변환, 상세 워크플로 |
| **Doc** | `docs/ROUTING.md` | 라우팅 스펙 (source of truth) |

**원본 파일 역할**

| 파일 | 역할 |
|------|------|
| `DESIGN_SYSTEM.md` (이 문서) | 사람·AI 공통 스펙 (source of truth) |
| `lib/design-tokens.ts` | TypeScript 프로그램 토큰 |
| `app/globals.css` | CSS 변수 + 유틸리티 클래스 |
| `tailwind.config.ts` | Tailwind 테마 |
| `K-SPOT Map.html` | 인터랙티브 UI 프로토타입 |

---

## Overview

The Picko design system is built on **TDS (Toss Design System) principles** with **K-Culture brand colors**, optimized for a travel/lifestyle app targeting international users.

---

## Colors

### Brand Palette

Based on K-Culture official brand guidelines:

| Color | Token | Hex | Usage |
|-------|-------|-----|-------|
| **Primary** (Attraction Coral) | `primary` | `#F04040` | CTAs, active states, trending indicators |
| Primary Dark | `primary-dark` | `#8C1818` | Hover states, depth |
| Primary Light | `primary-light` | `#F56E6E` | Tints, backgrounds |
| Primary Tint | `primary-tint` | `#FDDEDE` | Light backgrounds |
| **Secondary** (Museum Light) | `secondary` | `#4A8FE0` | Info, links, curated content |
| Secondary Dark | `secondary-dark` | `#1A3580` | Depth |
| Secondary Light | `secondary-light` | `#7AB0EE` | Tints |
| Secondary Tint | `secondary-tint` | `#D6E8FA` | Light backgrounds |
| **Tertiary** (Festival Vivid) | `tertiary` | `#F5B820` | Highlights, "live" indicators |
| Tertiary Dark | `tertiary-dark` | `#965800` | Depth |
| Tertiary Light | `tertiary-light` | `#F8CE60` | Tints |
| Tertiary Tint | `tertiary-tint` | `#FEF3D6` | Light backgrounds |

### Neutral Palette

| Color | Token | Hex | Usage |
|-------|-------|-----|-------|
| Night | `neutral-night` | `#111318` | Primary text, headings |
| Dusk | `neutral-dusk` | `#4A4D55` | Secondary text, body |
| Paper | `neutral-paper` | `#E8E6E1` | Borders, dividers |
| Cream | `neutral-cream` | `#F7F5F2` | Secondary backgrounds |

### Gradients

Used for marker pins, cards, and visual interest:

```css
.bg-gradient-primary    /* Red: #F56E6E → #F04040 → #8C1818 */
.bg-gradient-secondary  /* Blue: #7AB0EE → #4A8FE0 → #1A3580 */
.bg-gradient-tertiary   /* Yellow: #F8CE60 → #F5B820 → #965800 */
.bg-gradient-neutral    /* Gray: #E8E6E1 → #6b7684 → #111318 */
```

---

## Typography

### Font Family

**Pretendard Variable** — Variable font optimized for Korean + English.

```tsx
import localFont from 'next/font/local'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})
```

### Type Scale

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| **Display** | 28px | 1.2 | 600 | Hero headlines |
| **Title** | 22px | 1.3 | 600 | Section headers, card titles |
| **Headline** | 17px | 1.4 | 600 | Subsections, prominent labels |
| **Body** | 15px | 1.5 | 400 | Paragraph text, descriptions |
| **Caption** | 13px | 1.4 | 500 | Metadata, distance, time |
| **Label** | 11px | 1.4 | 500 | Form labels, tiny text |

### Tailwind Utilities

```tsx
<h1 className="text-display">Display</h1>
<h2 className="text-title">Title</h2>
<h3 className="text-headline">Headline</h3>
<p className="text-body">Body text</p>
<span className="text-caption">Caption</span>
<label className="text-label">Label</label>
```

---

## Spacing

8px base unit system:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight gaps, icon spacing |
| `sm` | 8px | Compact layouts, chip padding |
| `md` | 12px | Default gaps |
| `lg` | 16px | Section spacing, card padding |
| `xl` | 20px | Panel padding |
| `2xl` | 24px | Large gaps |
| `3xl` | 32px | Section breaks |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 8px | Small chips, tags |
| `md` | 12px | Cards, inputs |
| `lg` | 16px | Panels, modals |
| `xl` | 20px | Pills, large containers |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | `0 2px 8px rgba(0,0,0,0.08)` | Small cards, chips |
| `md` | `0 4px 16px rgba(0,0,0,0.1)` | Default cards |
| `lg` | `0 8px 32px rgba(0,0,0,0.12)` | Floating panels |
| `floating` | `0 4px 16px rgba(0,0,0,0.08)` | Sidebar, search bar |

---

## Components

### Button Sizes

```tsx
// Primary button
<button className="px-xl py-md bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-base">
  Button
</button>

// Chip (category filter)
<button className="px-lg py-sm bg-white rounded-xl text-caption font-semibold shadow-sm hover:shadow-md transition-base">
  🔥 Hot Place
</button>
```

### Card

```tsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="aspect-square bg-gradient-primary" />
  <div className="p-lg">
    <h3 className="text-headline">Seongsu-dong</h3>
    <p className="text-caption text-neutral-dusk">0.8km · Seongdong-gu</p>
  </div>
</div>
```

### Sidebar Panel

```tsx
<aside className="w-[400px] bg-white rounded-lg shadow-panel">
  {/* Content */}
</aside>
```

---

## Transitions

| Duration | Value | Usage |
|----------|-------|-------|
| `fast` | 0.15s | Hover, small state changes |
| `base` | 0.2s | Default transitions |
| `slow` | 0.3s | Panel slide, page transitions |

**Timing function:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)

---

## Z-Index Scale

| Layer | Value | Usage |
|-------|-------|-------|
| `base` | 1 | Default stacking |
| `marker` | 5 | Map pins |
| `sidebar` | 20 | Floating sidebar |
| `toggle` | 25 | Sidebar toggle button |
| `modal` | 50 | Overlays, dialogs |
| `toast` | 100 | Notifications |

---

## Design Principles (TDS-inspired)

1. **Clarity First** — Clear information hierarchy, no ambiguity
2. **Minimal Friction** — Instant feedback, no unnecessary steps
3. **Visual Consistency** — Unified spacing, typography, color usage
4. **Accessible** — WCAG AA compliant, touch targets ≥44px
5. **Performance** — Optimized for mobile, fast load times

---

## Usage in Next.js

### Install Dependencies

```bash
npm install tailwindcss-animate
npm install @radix-ui/react-* # for shadcn components
```

### Import Pretendard Font

```tsx
// app/layout.tsx
import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    {
      path: './fonts/PretendardVariable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

### Use Design Tokens

```tsx
import { colors, spacing, typography } from '@/lib/design-tokens'

// Or use Tailwind classes directly
<div className="bg-primary text-white px-lg py-md rounded-md">
  Content
</div>
```

---

## Files Generated

- `tailwind.config.ts` — Full Tailwind config with shadcn/ui conventions
- `app/globals.css` — CSS variables + utility classes
- `lib/design-tokens.ts` — TypeScript design tokens
- `DESIGN_SYSTEM.md` — This documentation
