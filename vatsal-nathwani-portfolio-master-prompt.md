# MASTER PROMPT — Vatsal Nathwani Personal Brand Portfolio (MERN)

> Copy everything below the line into Claude Code / Cursor / any AI coding agent. Replace every `[[FILL: ...]]` with real content (or let the seed file hold placeholders you edit later from the Admin Panel).

---

## 0. ROLE & GOAL

You are a senior full-stack engineer + award-winning creative developer (think Awwwards / FWA level). Build a **production-ready, dynamic personal-brand portfolio website** for **Vatsal Nathwani**, Founder & CEO of **VXR Media Pvt Ltd**, a well-known face in the market and on social media. He operates multiple ventures: **VXR Experiences, KhabarBhejo, VXR Properties** and others (list is editable from admin).

The site must feel **premium, cinematic, elegant, and unforgettable**: a founder's digital home, not a template. Every piece of content must be **dynamic (MongoDB Atlas)** and editable from a secure Admin Dashboard, with no code changes needed.

Reference (existing company site, for brand continuity only, do not copy): https://vxrmedia.in/

## 1. TECH STACK (STRICT)

**Frontend:** React 18 + Vite, React Router v6, Tailwind CSS + CSS variables for design tokens, **Framer Motion** (UI/page transitions), **GSAP + ScrollTrigger** (scroll storytelling), **Lenis** (smooth scroll), **Three.js / React Three Fiber + drei** (hero 3D/particle scene, lightweight), Lottie (micro-animations), Zustand (state), React Query / TanStack Query (data fetching + caching), React Hook Form + Zod (forms), react-helmet-async (SEO), react-hot-toast.

**Backend:** Node.js 20 + Express.js, Mongoose ODM, MongoDB Atlas, JWT (access + refresh in httpOnly cookies), bcrypt, Zod/Joi validation, Helmet, CORS (whitelist), express-rate-limit, express-mongo-sanitize, hpp, compression, morgan, Multer + **Cloudinary** (images/video upload), Nodemailer (contact + newsletter emails), node-cron (optional scheduled tasks).

**Tooling:** ESLint + Prettier, dotenv, concurrently, Vitest/Jest basics, Docker optional.

**Deployment target:** Frontend → Vercel/Netlify; Backend → Render/Railway; DB → MongoDB Atlas; media → Cloudinary.

## 2. MONOREPO STRUCTURE

```
vatsal-portfolio/
├─ client/
│  ├─ src/
│  │  ├─ assets/ (fonts, lottie, textures)
│  │  ├─ components/
│  │  │  ├─ layout/ (Navbar, Footer, PageTransition, Cursor, Preloader, SmoothScroll)
│  │  │  ├─ ui/ (Button, MagneticButton, Card, Modal, Tag, SectionHeading, Marquee, Counter)
│  │  │  ├─ three/ (HeroScene, ParticleField)
│  │  │  ├─ sections/ (Hero, About, Ventures, Timeline, Stats, MediaGallery, Press, Testimonials, SocialWall, CTA)
│  │  │  └─ admin/ (Sidebar, DataTable, RichEditor, ImageUploader, StatCard, Forms)
│  │  ├─ pages/ (public + admin)
│  │  ├─ hooks/ ├─ services/ (axios API layer) ├─ store/ ├─ utils/ ├─ styles/
│  │  ├─ App.jsx └─ main.jsx
│  └─ vite.config.js, tailwind.config.js
├─ server/
│  ├─ src/
│  │  ├─ config/ (db.js, cloudinary.js, env.js)
│  │  ├─ models/ ├─ controllers/ ├─ routes/ ├─ middleware/ (auth, role, error, upload, validate)
│  │  ├─ services/ (mail, cloudinary) ├─ utils/ ├─ seed/seed.js
│  │  └─ app.js, server.js
└─ README.md, .env.example
```

## 3. DESIGN DIRECTION

**Concept:** "The Visionary's Stage": cinematic, dark-luxury, editorial. Think premium magazine cover meets film title sequence.

- **Palette (CSS variables, themeable):** Deep black `#07070A`, rich charcoal `#0F1014`, warm ivory `#F4EFE6`, signature accent **electric gold/amber gradient** (`#F5C26B → #D4883A`) with a secondary accent (violet or crimson) for VXR highlights. `[[FILL: align with VXR logo colors]]`. Provide optional light "ivory" theme toggle.
- **Typography:** Display: a high-contrast serif or bold grotesk (e.g., *Playfair Display / Clash Display / Cabinet Grotesk*); Body: *Inter / General Sans*; Mono accents: *JetBrains Mono / Space Mono* for numbers/labels. Oversized hero type (clamp 6–14vw), tight tracking, mix of outline and solid text.
- **Visual language:** film grain overlay, subtle noise, glassmorphism cards with gradient borders, large cinematic photography (duotone/mask reveals), thin lines, grid-lines background, spotlight/glow following cursor.
- **Layout:** asymmetrical editorial grids, generous whitespace, full-bleed sections, sticky storytelling sections.
- Fully **responsive** (mobile-first), 60fps, respects `prefers-reduced-motion`.

## 4. ANIMATION & EFFECTS SPEC (THE WOW FACTOR)

Implement all of these tastefully, with performance in mind (lazy-load heavy ones, disable 3D on low-end/mobile):

1. **Preloader:** cinematic intro, the "VXR" monogram draws via SVG stroke, a counter 0→100, then a curtain split reveals the site.
2. **Custom cursor:** dot + trailing ring, morphs to "View / Play / Drag" labels on hover, magnetic effect on buttons/links.
3. **Smooth scroll** (Lenis) synced with GSAP ScrollTrigger.
4. **Hero:** full-screen with Vatsal's cut-out portrait layered between giant outlined text ("VATSAL NATHWANI") and solid text (depth/parallax effect), mouse-reactive parallax, floating particle/gold dust field (R3F), rotating role ticker ("Founder · Media Mogul · Entrepreneur · Visionary" `[[FILL]]`), scroll indicator.
5. **Text animations:** split-text line/word/char reveals (masked slide-up), scramble-text on nav hover, gradient text sweep.
6. **Scroll storytelling:** pinned sections, horizontal-scroll venture showcase, scrubbed timeline, parallax images, clip-path / mask image reveals, number counters that count up on enter.
7. **Ventures section:** large interactive cards: hover expands, image distorts with WebGL ripple/displacement shader (or CSS fallback), tilt (3D) effect, brand logo glow.
8. **Page transitions:** Framer Motion route transitions (colored wipe/curtain with brand mark), `AnimatePresence`.
9. **Marquee strips:** infinite scrolling brand/press/keywords with velocity-based speed on scroll.
10. **Gallery/Media:** masonry with lightbox, smooth zoom, video hover-preview, drag-to-scroll carousel.
11. **Testimonials:** stacked cards swiping with depth, auto-play pause on hover.
12. **Micro-interactions:** magnetic buttons, ripple on click, animated underline links, toggle theme with circular reveal, form field floating labels, success confetti/gold sparks on form submit.
13. **Background effects:** subtle animated gradient mesh, grid lines that light up near cursor, noise/grain overlay.
14. **Footer:** giant outlined "LET'S BUILD SOMETHING ICONIC" text with reveal and an interactive hover-fill effect; "Back to top" with a progress ring.
15. **Easter egg (optional):** pressing `V` toggles a "spotlight mode".

## 5. PUBLIC PAGES & SECTIONS (ALL DYNAMIC FROM DB)

### 5.1 Home `/`
1. Preloader → Hero (as above) with CTAs: *Explore Ventures* and *Work With Me / Let's Talk*.
2. Intro strip/marquee: "VXR Media · VXR Experiences · KhabarBhejo · VXR Properties · …" (from Ventures collection).
3. **About teaser:** short bio, signature quote, portrait, "Read full story" link.
4. **Ventures showcase (horizontal scroll):** each venture card = logo, tagline, 1-line description, image, "Visit / Learn more".
5. **Impact stats (animated counters):** Years of experience, Ventures, Team members, Events, Followers/Audience reach, Clients `[[FILL real numbers]]` (admin-editable).
6. **Timeline / Journey** (scroll-scrubbed milestones).
7. **Featured media & press:** videos, interviews, news features.
8. **Social proof wall:** Instagram/YouTube/LinkedIn/X follower counts + latest posts/embeds (admin-curated or via API when keys provided).
9. **Testimonials** (clients, partners, celebrities, team).
10. **Latest blog / insights** (3 cards).
11. **CTA banner** + newsletter signup.

### 5.2 About `/about`
Full story: early life, founding of VXR Media Pvt Ltd, vision/mission, values, leadership philosophy, achievements, awards, a rich photo gallery, pull-quotes, and "Beyond business" (passions, causes). `[[FILL: bio, hometown, education, milestones]]`

### 5.3 Ventures `/ventures` and `/ventures/:slug`
Listing of all ventures with filters. Each detail page includes hero, overview, services/offerings, stats, gallery, key projects, related ventures, and CTA to the venture's own site/enquiry. Seed with:
- **VXR Media**: parent media company `[[FILL]]`
- **VXR Experiences**: events/experiential marketing `[[FILL]]`
- **KhabarBhejo**: news/media platform `[[FILL]]`
- **VXR Properties**: real estate `[[FILL]]`
- *Add more via admin.*

### 5.4 Journey / Achievements `/journey`
Interactive vertical timeline + awards & recognitions grid + certifications.

### 5.5 Media & Press `/media`
Tabs: Press Features · Interviews/Podcasts · Videos · Photo Gallery · Events. Filters, search, lightbox, YouTube embed support.

### 5.6 Blog / Insights `/blog` and `/blog/:slug`
Markdown/rich-text posts, categories, tags, reading time, share buttons, related posts, SEO meta, view counter.

### 5.7 Contact / Collaborate `/contact`
Form (name, email, phone, company, interest dropdown: Brand Collaboration / Event / Media / Property / Speaking / Other, budget range, message) → saved in DB + email notification to admin + auto-reply to sender. Includes office address, map (Leaflet/Google embed), social links, WhatsApp click-to-chat, "Book a call" (Calendly link optional).

### 5.8 Extra
`/speaking` (optional: talks/keynotes + enquiry), `404` page (animated), `/privacy`, `/terms`.

### Global
Navbar (transparent → blurred on scroll, fullscreen animated menu overlay on mobile and desktop "Menu" button), Footer (links, socials, newsletter, copyright), cookie/consent bar, WhatsApp floating button, scroll progress bar, theme toggle.

## 6. ADMIN DASHBOARD `/admin` (PROTECTED)

JWT-protected, roles: `superadmin`, `editor`. Features:
- Login page (rate-limited), forgot/reset password via email.
- Dashboard: stats cards (visits, enquiries, subscribers, posts), recent enquiries, charts (Recharts).
- **CRUD with image/video upload (Cloudinary), drag-to-reorder, publish/draft toggle** for: Site Settings, Hero content, About, Ventures, Stats, Timeline, Achievements, Media/Press, Gallery, Testimonials, Blog (rich text editor, e.g., TipTap), Social links, SEO per page.
- Enquiries inbox (status: new / in-progress / closed, notes, CSV export).
- Newsletter subscribers (export, delete).
- Activity log (basic audit trail).

## 7. DATABASE SCHEMAS (MONGOOSE)

All with `timestamps: true`, `isPublished`, `order` where relevant.

- **User**: name, email (unique), passwordHash, role, lastLogin.
- **SiteSettings** (singleton): siteTitle, logo, favicon, tagline, contact{email, phone, whatsapp, address, mapUrl}, socials[{platform, url, followers}], theme{accent}, seoDefaults{title, description, ogImage}, footerText.
- **Hero**: headline, subHeadline, roles[], portraitImage, backgroundVideo/Image, ctaPrimary{label, link}, ctaSecondary{label, link}.
- **About**: shortBio, fullStory(rich), quote{text, author}, values[{title, desc, icon}], portraitImages[], resumeUrl.
- **Venture**: name, slug, tagline, shortDesc, longDesc(rich), logo, coverImage, gallery[], services[{title, desc}], stats[{label, value}], websiteUrl, color, category, order, isFeatured, isPublished, seo{}.
- **Stat**: label, value, suffix, icon, order.
- **TimelineItem**: year, title, description, image, order.
- **Achievement**: title, issuer, year, image, link, description.
- **MediaItem**: type (press/video/interview/podcast/event), title, source, url, thumbnail, date, description, tags[].
- **GalleryImage**: image, caption, category, order.
- **Testimonial**: name, designation, company, avatar, quote, rating, order.
- **BlogPost**: title, slug, excerpt, content, coverImage, category, tags[], author, readingTime, views, status, publishedAt, seo{}.
- **Enquiry**: name, email, phone, company, interest, budget, message, status, notes, ipAddress.
- **Subscriber**: email (unique), isActive, source.
- **Visit/Analytics (lightweight)**: path, referrer, device, country, date. (Aggregate for the dashboard.)

## 8. REST API (VERSIONED `/api/v1`)

Public (GET, cached where possible): `/settings`, `/hero`, `/about`, `/ventures`, `/ventures/:slug`, `/stats`, `/timeline`, `/achievements`, `/media`, `/gallery`, `/testimonials`, `/blog`, `/blog/:slug`.
Public (POST): `/enquiries`, `/subscribers`, `/track` (analytics beacon).
Auth: `POST /auth/login`, `/auth/logout`, `/auth/refresh`, `/auth/forgot-password`, `/auth/reset-password`, `GET /auth/me`.
Admin (protected): full CRUD for every resource above, `POST /upload` (Cloudinary), `PATCH /reorder`, `GET /admin/dashboard-stats`, `GET /admin/enquiries/export`.

Use consistent response shape `{ success, data, message, meta }`, pagination (`page`, `limit`), search/filter/sort, centralized error handler, async wrapper, input validation on every route.

## 9. SECURITY, PERFORMANCE & SEO

- Helmet, CORS whitelist, rate limits (stricter on auth/forms), Mongo sanitize, XSS clean, hpp, bcrypt cost ≥ 12, httpOnly + Secure + SameSite cookies, file type/size validation, honeypot/reCAPTCHA on forms, no secrets in repo.
- Frontend: code-splitting per route, lazy-loaded 3D/Lottie, image optimization (Cloudinary transforms, WebP/AVIF, `loading="lazy"`, blur-up placeholders), font preloading, Lighthouse target ≥ 90 on all metrics (3D scene gracefully degraded).
- SEO: per-page meta via Helmet, Open Graph/Twitter cards, JSON-LD (`Person`, `Organization`), sitemap.xml + robots.txt generated from DB, semantic HTML, alt text, canonical URLs. (If SSR is needed later, note migration path to Next.js.)
- Accessibility: keyboard navigable, focus states, ARIA, sufficient contrast, reduced-motion fallbacks.

## 10. CONTENT SEED (`server/src/seed/seed.js`)

Seed an admin user (from env), SiteSettings, Hero, About, 4 ventures (VXR Media, VXR Experiences, KhabarBhejo, VXR Properties), 6 stats, 6–8 timeline items, 3 achievements, 6 gallery items, 4 testimonials, 3 blog posts, with clearly marked `[[FILL]]` placeholder copy written in an elegant, confident founder-brand tone. **Do not invent factual claims, numbers, or awards**: use obvious placeholders until real data is provided.

## 11. DELIVERABLES & WORKFLOW

Work in phases and confirm each before moving on:
1. Project scaffolding, env setup, DB connection, auth, base models.
2. Design system, layout, preloader, cursor, smooth scroll, page transitions.
3. Home page with all animated sections wired to the API.
4. Remaining public pages.
5. Admin dashboard with CRUD + uploads.
6. Security hardening, SEO, performance pass, accessibility pass.
7. Seed script, README (setup, env vars, deploy steps), `.env.example`.

Output complete, runnable code with comments only where non-obvious. Provide `npm run dev` (concurrently runs client + server), `npm run seed`, and `npm run build`. Environment variables: `MONGO_URI, JWT_SECRET, JWT_REFRESH_SECRET, CLIENT_URL, CLOUDINARY_*, SMTP_*, ADMIN_EMAIL, ADMIN_PASSWORD`.

## 12. QUALITY BAR

If any section feels like a generic template, redo it. Every screen should have one memorable interaction. Prioritize smoothness over quantity: a few flawless animations beat many janky ones. Keep the brand tone: **confident, refined, visionary.**

---

## CONTENT CHECKLIST (collect before/while building)

- Vatsal's high-res portraits (transparent-background cut-out for hero), a logo pack for every venture
- Bio, founding story, vision/mission, milestones with years
- Real numbers (years, events, team size, reach, clients)
- Venture descriptions, services, website links
- Press links, interview/video links, awards
- Testimonials with permission
- Social handles + follower counts
- Contact email/phone/address
