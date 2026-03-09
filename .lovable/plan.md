

# Premium Corporate Website — Implementation Plan

## Brand Identity
- **Placeholder brand name**: "Ashworth & Sterling" (can be changed anytime)
- **Tagline**: "Discreet Excellence. Measurable Results."
- **Aesthetic**: Old money, private banking, London law firm feel

---

## 🎨 Design System Setup

**Color Palette**
- Dark navy background: `#0B1C2D`
- Deep navy sections: `#13283F`
- Beige accents: `#E7D8C9`
- Soft cream: `#F2E9E1`
- White text: `#F5F6F7`

**Typography**
- Headings & navigation: **Playfair Display** (Copperplate-style serif from Google Fonts)
- Hero slogans & quotes: **EB Garamond** or **Cormorant Garamond** (elegant premium serif)
- Body text: **Inter** (clean sans-serif)

**Layout Principles**
- Very spacious with generous padding and margins
- Rounded corners (16–24px)
- Soft shadows, subtle navy-to-darker gradients
- Smooth scroll behavior and refined fade-in animations on scroll

---

## 📄 Pages & Content

### 1. Home Page
- **Hero section**: Full-width dark navy with subtle gradient overlay, elegant serif slogan, cream CTA button with hover animation
- **Value proposition**: 3 concise pillars in a spacious grid
- **Services preview**: 4 premium cards with icons, soft shadows, beige accent borders
- **Case results preview**: Key metrics (e.g., "+340% organic growth") in an elegant grid
- **Final CTA**: Dark section with centered headline and button

### 2. About Page
- **Company story**: Split layout with text and decorative accent lines
- **Mission & philosophy**: Elegant quote block with serif typography
- **Professional positioning**: Clean statement of expertise
- **Timeline/milestones**: Vertical timeline with subtle animations, beige accent dots

### 3. Our Services Page
- **Lead Generation** — premium card with description
- **Reputation Management** — premium card with description
- **Paid Advertising** — premium card with description
- **Strategy & Consulting** — premium card with description
- Each card: dark navy background, beige accent line, icon, hover lift effect

### 4. Demo-Cases Page
- **Before/After results**: Side-by-side comparison cards
- **Reputation improvements**: Visual metric displays
- **Traffic & leads growth**: Animated charts using Recharts (already installed) with the navy/beige/cream palette
- **Case study layout**: Clean editorial cards with results highlighted

### 5. CEO Insights Page
- **Blog/articles listing**: Clean editorial grid
- **Article cards**: Date, title, excerpt, "Read more" link
- **Thought leadership feel**: Large serif headlines, generous whitespace
- Static content (no backend CMS needed)

### 6. Contact Page
- **Minimal contact form**: Name, email, subject, message fields
- **Visual-only form** (shows success toast on submit, no backend)
- **Email display + CTA button**
- **Dark elegant layout** with centered content

---

## 🧭 Navigation & Layout

- **Top header**: Fixed/sticky, transparent on hero, dark navy on scroll
- Logo on the left, navigation links on the right
- Links: Home · About · Our Services · Demo-Cases · CEO Insights · Contact
- **Mobile**: Hamburger menu with elegant slide-out drawer
- **Footer**: Minimal, dark navy, copyright + subtle links

---

## ✨ Micro-Animations & Polish

- Smooth scroll behavior across all pages
- Fade-in-up animations on scroll for sections and cards
- Subtle hover effects on buttons (scale + shadow)
- Card hover: gentle lift with shadow deepening
- Navigation link underline animation
- Page transitions feel calm and refined

---

## 📱 Responsive Design

- Fully responsive across desktop, tablet, and mobile
- Spacious desktop layout gracefully collapses
- Mobile navigation with premium slide-out menu
- Touch-friendly tap targets

---

## Technical Approach

- Multi-page with React Router (6 routes)
- Shared layout component (Header + Footer)
- Google Fonts loaded for Playfair Display, Cormorant Garamond, and Inter
- Recharts for Demo-Cases charts styled in brand palette
- All content is static (no backend needed)
- Tailwind CSS with custom brand colors

и обязательно Privacy page с текстом для агенств по управлению репутации

и пару кнопок с соц сетями Linkedln, Whatsapp, Inst , светло коричневый цвет при наведение на иконки везде

