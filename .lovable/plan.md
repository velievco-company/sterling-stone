## Plan

This plan covers all requested changes to the Veliev & Co website.

### 1. Remove "Our Packages" section from Home

Delete the entire Packages section (lines 321-386) from `src/pages/Index.tsx`.

### 2. Hero button → Reputation Health Check

Change the first hero button from linking to `/contact` to scrolling down to the calculator section. Change text from "Schedule a Consultation" to "Быстрый чек репутации" (or the English equivalent "Quick Reputation Check"). Add an `id` to the calculator section and use anchor scroll or `scrollIntoView`.

### 3. Move FAQ to a separate page

- Create new page `src/pages/FAQ.tsx` with the FAQ data and `FaqItem` component.
- Add route `/faq` in `src/App.tsx`.
- Add "FAQ" to nav links in Header and Footer.
- Remove FAQ section from `src/pages/Index.tsx`.

### 4. Mobile optimization (performance)

- Remove unused `src/App.css` (leftover Vite boilerplate).
- Add `loading="lazy"` to images.
- Reduce font imports in `index.html` — only load needed weights.
- Add `font-display: swap` hint.
- Optimize ScrollReveal to use `IntersectionObserver` efficiently.
- Consider reducing CSS complexity for mobile.

### 5. Favicon

Waiting for user to upload an image — will handle in implementation.

### 6. SEO meta title/description

Update `index.html` with refined title and description for indexing. Already has good meta — will refine wording.

### 7. Mobile-only beige text color

Add a responsive utility: on mobile (`max-md:`), apply beige/primary text color to body text. Use Tailwind's responsive prefix or a CSS media query in `index.css`.

### 8. Add "reputation management" subtitle under company name

In Footer, add small text "reputation management" below the logo/company name.

### 9. Change heading font to Copperplate

The project uses Cinzel as the heading font. Copperplate is a system font on macOS but not available on all platforms. Will add Copperplate with Cinzel as fallback to the `h1, h2` CSS rule and tailwind config.  еще фон текста в подзаголовках текста удлини на всю ширину сайта, там где текст с синим фоном удлини фон как тонкая 

полоска на которой находится

### 10. Move "Reputation Growth" stat to center of "By the Numbers"

The stats array has 5 items; "+40% Reputation Growth" is last. Reorder it to index 2 (middle position in a 5-column grid).

### Files to change

- `src/pages/Index.tsx` — remove packages, remove FAQ, change hero button, reorder stats
- `src/pages/FAQ.tsx` — new file
- `src/App.tsx` — add FAQ route
- `src/components/layout/Header.tsx` — add FAQ nav link
- `src/components/layout/Footer.tsx` — add FAQ link, add "reputation management" subtitle
- `src/index.css` — mobile beige text, Copperplate font
- `tailwind.config.ts` — add copperplate font family
- `index.html` — optimize font loading, update meta
- `src/App.css` — delete (unused boilerplate)