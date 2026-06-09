# Language reference (UI copy)

Full policy: [docs/LANGUAGE.md](../../../docs/LANGUAGE.md) · Rule: `.cursor/rules/localization.mdc`

## Default

**English** for all product-facing strings. Team may write comments/docs in Korean; the live UI does not.

## Audience

| | |
|--|--|
| **Core target** | **20s–30s** visiting **Korea** |
| **Supported range** | Teens through **40s** |
| **Mindset** | **잘파** — trend-aware, quality-conscious; discovers via culture & what’s hot |

They expect **Instagram/TikTok-era** clarity: fast scan, no corporate filler. Picko helps them **find and save spots**—copy should feel like a smart friend who knows Seoul (and Korea), not a manual.

## Voice checklist

- [ ] **English** only (user-visible)
- [ ] **Short** — fits sidebar / bottom sheet / map overlay
- [ ] **You** — direct address (`Save your picks`, not `User picks can be saved`)
- [ ] **Discovery words** — pick, spot, trending, near you, hot (align with prototype)
- [ ] **Travel context** — Korea trip, neighborhoods, worth the visit (when relevant)
- [ ] **No** stiff enterprise (`utilize`, `authentication required`, `items in list`)
- [ ] **No** heavy Gen-Z slang that ages badly or excludes 30s–40s
- [ ] Emoji only where UI already uses them (category chips, scope tabs)

**Litmus test:** Would a **26-year-old tourist in Hongdae** get it instantly without re-reading?

## Vocabulary (prefer → avoid)

| Prefer | Avoid in chrome |
|--------|------------------|
| pick / picks | favorite, bookmark, like (unless social feature) |
| spot | location, POI, venue (OK in long-form later) |
| trending, hot | popular entities, recommendations |
| near you | proximity-based, within radius |
| sign in | authenticate, access account |
| add a spot | create new entry, submit location |

## Copy patterns

| Context | Tone | Example |
|---------|------|---------|
| Guest My tab | Encourage, low friction | `Sign in to save your picks` |
| Empty Pick tab | Friendly nudge | `No picks yet` · `Star spots you love—they’ll show up here` |
| OAuth | Standard, clear | `Continue with Google` |
| Loading | Minimal | `Loading map…` |
| Nav back | Casual | `Back to map` |
| Nationwide scope | Energy (prototype) | `🔥` + `Nationwide` / `Trending in Korea` |
| Coming soon | Honest, light | `Sign in with Apple—coming soon` |

## Anti-patterns

```text
❌ "Your session has expired. Please re-authenticate."
✅ "You’re signed out. Sign in again to save picks."

❌ "No data available for the selected filter criteria."
✅ "Nothing here yet—try another area or category."

❌ "Successfully completed spot creation workflow."
✅ "Spot added" or "You’re on the map"
```

## OAuth registry

```typescript
// lib/auth/social-providers.ts
{ id: "google", label: "Continue with Google", enabled: true }
```

Apple (when enabled): `Continue with Apple`

## Porting prototype

`K-SPOT Map.html` already uses English map chrome (`Near you`, `Trending`, `Pick`, `Hot Place`). Keep that energy; tighten anything that reads like placeholder Lorem or admin UI.
