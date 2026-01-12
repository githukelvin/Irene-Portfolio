# Portfolio Design Approach: Wangari Irene

## Design Specification Document

**Version:** 2.0
**Date:** January 2026
**Subject:** Wangari Irene - Creative Designer & Digital Marketing Specialist
**Brand:** Qoi_tec brands
**Purpose:** Professional portfolio website that demonstrates graphic design skills through its own design

---

## Brand Assets Source

All brand guidelines and portfolio assets are located at:
- `/home/de-coder/Downloads/SUGAR-Portfolio/PORTFOLIO/` - Organized portfolio pieces (44 files)
- `/home/de-coder/Downloads/SUGAR-Portfolio/DesignWork -3-001/` - Design work samples (125 files)

**Key Brand Documents:**
- `COLOR CODE.pdf` - Brand colors: #1B194E (Navy) + #91D8F7 (Sky Blue)
- `FONTS USED.pdf` - Typography: Myriad Pro, Montserrat, Anthony Hunter, Taillor Amillate
- `Qoi Photo.jpg` - Professional portrait (grayscale)

---

## Table of Contents

1. [Strategic Foundation](#1-strategic-foundation)
2. [Visual Design Direction](#2-visual-design-direction)
3. [Typography System](#3-typography-system)
4. [Color System](#4-color-system)
5. [Layout & Grid System](#5-layout--grid-system)
6. [Information Architecture](#6-information-architecture)
7. [Component Strategy](#7-component-strategy)
8. [Interaction & Motion Design](#8-interaction--motion-design)
9. [Case Study Template](#9-case-study-template)
10. [Technical Implementation](#10-technical-implementation)
11. [Content Strategy](#11-content-strategy)
12. [Validation Criteria](#12-validation-criteria)

---

## 1. Strategic Foundation

### 1.1 Unique Value Proposition

Irene's differentiator is clear: **"Two Experts in One"** — a skilled graphic designer AND results-driven digital marketer in a single hire.

**This positioning must be reflected in the portfolio design by:**
- Demonstrating design excellence (proving design skills)
- Showing data/results literacy (proving marketing skills)
- Presenting work that bridges both disciplines
- Creating a site that is both beautiful AND strategic

### 1.2 Target Audience Analysis

| Audience Segment | What They Look For | How to Address |
|:-----------------|:-------------------|:---------------|
| **Startups** | All-rounder, cost-effective, fast | Show versatility, highlight efficiency gains |
| **SMEs** | Reliable, professional, local understanding | Show breadth of work, Kenyan market context |
| **Growing Companies** | Scalable skills, team player | Show process, mention training ability |
| **HR/Recruiters** | Quick assessment, clear skills | Scannable layout, prominent credentials |
| **Direct Clients** | Proof of capability, trustworthiness | Testimonials, real results, contact clarity |

### 1.3 Key Metrics to Showcase

These numbers establish credibility and must be prominently featured:

| Metric | Value | Context |
|:-------|:------|:--------|
| Design Projects | 500+ | Volume demonstrates experience |
| Client Satisfaction | 98% | Quality assurance |
| Brand Identities | 25+ | Specialization depth |
| Campaign ROI | 280% | Marketing effectiveness |
| Enrollment Increase | 35% | Measurable business impact |
| Instagram Growth | 325% | Social media expertise |
| Email Open Rate | 45% (from 18%) | Optimization skills |

### 1.4 Portfolio as Proof Principle

**The Meta-Design Requirement:**
> "If the UX work displayed in the projects is stellar but your portfolio website as a whole contains bad UX, that can be a red flag."

The portfolio must demonstrate:
- **Typography mastery** through intentional font choices and hierarchy
- **Color theory understanding** through cohesive, purposeful palette
- **Layout skills** through balanced composition and grid usage
- **Attention to detail** through pixel-perfect execution
- **User experience design** through intuitive navigation
- **Modern design awareness** through current trends (appropriately applied)

---

## 2. Visual Design Direction

### 2.1 Design Philosophy

**"Confident Minimalism with Strategic Warmth"**

This approach balances:
- **Professionalism** (clean, organized, trustworthy)
- **Creativity** (distinctive, memorable, expressive)
- **Approachability** (warm, human, Kenyan)

### 2.2 Visual Mood

| Attribute | Direction | Rationale |
|:----------|:----------|:----------|
| **Overall Feel** | Modern, sophisticated, confident | Establishes professional credibility |
| **Density** | Spacious, breathing room | Lets work shine, demonstrates restraint |
| **Energy** | Calm but not static | Subtle motion adds life without distraction |
| **Temperature** | Warm neutrals with accent | Approachable, not cold/corporate |
| **Complexity** | Simple surface, depth on interaction | Rewards engagement without overwhelming |

### 2.3 Dark Mode as Primary

**Decision:** Dark mode as the default experience.

**Justification:**
1. **2025 Trend Alignment** — Dark themes are sophisticated and modern
2. **Design Work Showcase** — Colors and designs pop against dark backgrounds
3. **Differentiation** — Most portfolios default to light; this stands out
4. **Professional Signal** — Dark mode signals technical/design awareness
5. **Eye Comfort** — Many users prefer dark interfaces

**Light mode** will be available via toggle for user preference.

### 2.4 Visual Signature Elements

To make the portfolio memorable and distinctly "Irene's" using her established Qoi_tec brand:

| Element | Implementation |
|:--------|:---------------|
| **Primary Color** | Deep Navy (#1B194E) - sophisticated, professional, trustworthy |
| **Accent Color** | Sky Blue (#91D8F7) - fresh, creative, approachable |
| **Typography Contrast** | Montserrat for headings, clean sans-serif for body |
| **Geometric Touches** | Curved elements echoing the Qoi_tec logo |
| **Photography Style** | High-quality mockups showing work in context |
| **Motion Signature** | Consistent ease-out timing, subtle reveals |

---

## 3. Typography System

### 3.1 Font Selection (Based on Qoi_tec Brand Guidelines)

**Primary Font (Headings):** Montserrat
- Geometric sans-serif from Google Fonts (free, web-optimized)
- Matches brand guidelines exactly
- Excellent variable font support (100-900 weights)
- Modern, professional appearance

**Body Font:** Source Sans Pro (web alternative to Myriad Pro)
- Adobe's open-source humanist sans-serif
- Closest match to Myriad Pro (brand guideline font)
- Excellent readability at all sizes
- Available on Google Fonts

**Display/Signature Font:** Script fonts for special elements
- Anthony Hunter / Taillor Amillate style for signature elements
- Used sparingly: logo, signature, special headings
- May implement as SVG/image for exact brand match

**Font Loading Strategy:**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### 3.2 Type Scale

Using a modular scale (1.25 ratio) for harmonious sizing:

```
--text-xs:    0.75rem   (12px)  — Captions, metadata
--text-sm:    0.875rem  (14px)  — Secondary text
--text-base:  1rem      (16px)  — Body text
--text-lg:    1.125rem  (18px)  — Lead paragraphs
--text-xl:    1.25rem   (20px)  — Small headings
--text-2xl:   1.5rem    (24px)  — Section headings
--text-3xl:   1.875rem  (30px)  — Page headings
--text-4xl:   2.25rem   (36px)  — Hero subheadings
--text-5xl:   3rem      (48px)  — Hero headings
--text-6xl:   3.75rem   (60px)  — Display (large screens)
--text-7xl:   4.5rem    (72px)  — Impact statements
```

### 3.3 Typography Hierarchy

| Level | Use Case | Weight | Size | Tracking |
|:------|:---------|:-------|:-----|:---------|
| **Display** | Hero headlines | 700/800 | 5xl-7xl | -0.02em (tight) |
| **H1** | Page titles | 700 | 4xl-5xl | -0.01em |
| **H2** | Section titles | 600 | 2xl-3xl | 0 |
| **H3** | Subsections | 600 | xl-2xl | 0 |
| **H4** | Card titles | 500 | lg-xl | 0 |
| **Body** | Main content | 400 | base | 0 |
| **Body Large** | Lead text | 400 | lg | 0.01em |
| **Caption** | Metadata | 400 | sm-xs | 0.02em |
| **Label** | UI elements | 500 | sm | 0.05em |

### 3.4 Line Heights

```
--leading-none:    1
--leading-tight:   1.25    (headings)
--leading-snug:    1.375   (large text)
--leading-normal:  1.5     (small text)
--leading-relaxed: 1.625   (body text)
--leading-loose:   2       (spacious body)
```

**Body text:** 1.625 (relaxed) for optimal readability
**Headings:** 1.1-1.25 (tight) for visual impact

---

## 4. Color System

### 4.1 Existing Foundation

The codebase uses **OKLch color space** — a modern, perceptually uniform color model. This is excellent for:
- Consistent perceived brightness across hues
- Predictable color mixing
- Better accessibility compliance
- Modern browser support

### 4.2 Qoi_tec Brand Color Palette

**Brand Colors (from COLOR CODE.pdf):**
```css
/* Primary Brand Colors */
--brand-navy:      #1B194E;              /* RGB: 27, 25, 78 */
--brand-sky:       #91D8F7;              /* RGB: 145, 216, 247 */

/* Converted to OKLch for modern CSS */
--brand-navy-oklch:  oklch(0.22 0.08 280);   /* Deep navy */
--brand-sky-oklch:   oklch(0.83 0.10 220);   /* Light sky blue */
```

**Dark Mode Implementation (Navy as primary):**
```css
/* Background layers using brand navy */
--background:      oklch(0.12 0.04 280);    /* Darker navy base */
--surface-1:       oklch(0.18 0.06 280);    /* Brand navy (#1B194E) */
--surface-2:       oklch(0.24 0.06 280);    /* Lighter navy */
--surface-3:       oklch(0.30 0.05 280);    /* Hover states */

/* Text */
--text-primary:    oklch(0.95 0 0);         /* White text */
--text-secondary:  oklch(0.75 0 0);         /* Muted text */
--text-muted:      oklch(0.55 0 0);         /* Disabled text */

/* Borders */
--border-subtle:   oklch(1 0 0 / 8%);       /* Subtle dividers */
--border-default:  oklch(1 0 0 / 15%);      /* Default borders */
--border-strong:   oklch(0.83 0.10 220 / 30%); /* Sky blue tint */
```

**Accent Color (Sky Blue):**
```css
/* Brand sky blue - fresh, creative, approachable */
--accent:           oklch(0.83 0.10 220);   /* #91D8F7 */
--accent-hover:     oklch(0.88 0.12 220);   /* Lighter on hover */
--accent-muted:     oklch(0.83 0.05 220);   /* Subtle accent */
--accent-foreground: oklch(0.15 0.06 280);  /* Navy text on sky */
```

**Why Sky Blue (#91D8F7) as accent:**
- **Fresh** — Conveys creativity and innovation
- **Contrast** — Pops beautifully against navy backgrounds
- **Established** — Part of Qoi_tec brand identity (consistency)
- **Trustworthy** — Blue family inspires confidence
- **Versatile** — Works for CTAs, highlights, links, and accents

**Semantic Colors:**
```css
/* Success - for positive results/metrics */
--success:         oklch(0.70 0.15 145);

/* Warning - for attention */
--warning:         oklch(0.80 0.15 85);

/* Error/Destructive */
--destructive:     oklch(0.65 0.20 25);
```

### 4.3 Light Mode Adaptation

When user toggles to light mode (brand colors inverted):

```css
.light {
  --background:      oklch(0.98 0.01 220);    /* Very light blue-white */
  --surface-1:       oklch(1 0 0);             /* Pure white cards */
  --surface-2:       oklch(0.96 0.02 220);    /* Subtle sky blue tint */
  --text-primary:    oklch(0.18 0.06 280);    /* Brand navy for text */
  --text-secondary:  oklch(0.35 0.04 280);    /* Lighter navy */
  --border-default:  oklch(0.18 0.06 280 / 15%); /* Navy borders */
  /* Navy becomes the accent on light backgrounds */
  --accent:          oklch(0.22 0.08 280);    /* Brand navy #1B194E */
  --accent-hover:    oklch(0.28 0.08 280);    /* Lighter navy on hover */
}
```

### 4.4 Color Usage Guidelines

| Element | Color Token | Rationale |
|:--------|:------------|:----------|
| Page background | `--background` | Base layer |
| Cards/containers | `--surface-1` | Slight elevation |
| Primary text | `--text-primary` | Maximum readability |
| Secondary text | `--text-secondary` | Hierarchy distinction |
| Primary buttons | `--accent` | High visibility CTAs |
| Links | `--accent` | Consistent interactivity signal |
| Metrics/numbers | `--accent` | Draws attention to achievements |
| Borders | `--border-default` | Subtle structure |

---

## 5. Layout & Grid System

### 5.1 Grid Foundation

**12-column grid** with responsive breakpoints:

```
Mobile (< 640px):     4 columns, 16px gutter, 16px margin
Tablet (640-1024px):  8 columns, 24px gutter, 32px margin
Desktop (1024-1280px): 12 columns, 24px gutter, 48px margin
Large (> 1280px):     12 columns, 32px gutter, auto margin (max 1280px)
```

### 5.2 Spacing Scale

Using an 8px base unit for consistency:

```
--space-1:   0.25rem  (4px)
--space-2:   0.5rem   (8px)
--space-3:   0.75rem  (12px)
--space-4:   1rem     (16px)
--space-5:   1.25rem  (20px)
--space-6:   1.5rem   (24px)
--space-8:   2rem     (32px)
--space-10:  2.5rem   (40px)
--space-12:  3rem     (48px)
--space-16:  4rem     (64px)
--space-20:  5rem     (80px)
--space-24:  6rem     (96px)
--space-32:  8rem     (128px)
```

### 5.3 Section Spacing

| Section Type | Top Padding | Bottom Padding |
|:-------------|:------------|:---------------|
| Hero | 0 (full viewport) | --space-24 |
| Standard section | --space-20 | --space-20 |
| Content section | --space-16 | --space-16 |
| Card grid | --space-12 | --space-12 |

### 5.4 Container Widths

```
--container-sm:   640px   (prose content)
--container-md:   768px   (narrow layouts)
--container-lg:   1024px  (standard layouts)
--container-xl:   1280px  (wide layouts)
--container-full: 100%    (edge-to-edge)
```

### 5.5 Layout Patterns

**Hero Section:**
- Full viewport height on home
- Centered content
- Prominent name and title
- Clear CTA

**Project Grid:**
- 2 columns on tablet, 3 columns on desktop
- Masonry optional for varied image ratios
- Generous gaps (--space-6 to --space-8)

**Case Study:**
- Single column for reading (max 768px)
- Full-width images breaking the column
- Alternating image/text sections

**About Page:**
- Split layout (image + bio) on desktop
- Skills as visual grid/chart
- Timeline for experience

---

## 6. Information Architecture

### 6.1 Site Map

```
Home (/)
├── Hero (name, title, value prop, CTA)
├── Featured Work (3-4 selected projects)
├── Services Overview (what I do)
├── Key Metrics (impact numbers)
├── Brief About (with link to full)
└── Contact CTA

Work (/work)
├── Filter bar (All, Brand, Print, Digital, Marketing)
├── Project grid (filterable)
└── Each project links to detail page

Work/[slug] (/work/gocare-campaign)
├── Hero (project name, client, date, role)
├── Overview (problem, solution, result)
├── Full case study content
├── Project gallery
├── Results/metrics
├── Testimonial (if available)
└── Next/Previous navigation

About (/about)
├── Personal introduction
├── Professional journey
├── Skills & tools (visual)
├── Certifications
├── What I'm looking for
└── Fun facts / personality

Contact (/contact)
├── Contact form
├── Direct contact info
├── Social links
├── Location (Nairobi, Kenya)
└── Availability status

Resume (/resume) [optional]
├── Downloadable PDF
├── Interactive timeline
└── Or: redirect to LinkedIn
```

### 6.2 Navigation Structure

**Primary Navigation (Header):**
```
[Logo/Name]                    [Work]  [About]  [Contact]  [Theme Toggle]
```

**Mobile Navigation:**
- Hamburger menu
- Full-screen overlay
- Large touch targets

**Footer:**
```
[Brief about/tagline]
[Quick links]
[Social icons]
[Copyright]
```

### 6.3 User Flows

**Flow 1: Employer Reviewing Candidate**
```
Home → Scan featured work → View 1-2 case studies → About → Contact
Expected time: 3-5 minutes
```

**Flow 2: Potential Client Evaluating**
```
Home → Work (filter by relevant category) → Case study → Contact
Expected time: 5-8 minutes
```

**Flow 3: Quick Assessment**
```
Home (see metrics, value prop) → About (skills/experience) → Contact
Expected time: 1-2 minutes
```

---

## 7. Component Strategy

### 7.1 shadcn-vue Components to Install

**Essential (Install First):**
```bash
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card
npx shadcn-vue@latest add badge
npx shadcn-vue@latest add separator
npx shadcn-vue@latest add aspect-ratio
```

**Navigation & Layout:**
```bash
npx shadcn-vue@latest add navigation-menu
npx shadcn-vue@latest add sheet          # Mobile menu
npx shadcn-vue@latest add scroll-area
```

**Form & Input:**
```bash
npx shadcn-vue@latest add input
npx shadcn-vue@latest add textarea
npx shadcn-vue@latest add label
npx shadcn-vue@latest add form
```

**Feedback & Display:**
```bash
npx shadcn-vue@latest add avatar
npx shadcn-vue@latest add tooltip
npx shadcn-vue@latest add skeleton      # Loading states
npx shadcn-vue@latest add toast         # Notifications
```

**Optional Enhancements:**
```bash
npx shadcn-vue@latest add tabs          # Project filtering
npx shadcn-vue@latest add carousel      # Project gallery
npx shadcn-vue@latest add dialog        # Image lightbox
npx shadcn-vue@latest add collapsible   # FAQ/expandable sections
```

### 7.2 Custom Components to Build

| Component | Purpose | Notes |
|:----------|:--------|:------|
| `TheHeader` | Site header with nav | Sticky, transparent on hero |
| `TheFooter` | Site footer | Links, social, copyright |
| `ThemeToggle` | Dark/light switch | Persist preference |
| `HeroSection` | Home hero | Animated, full-height |
| `ProjectCard` | Work grid item | Hover effects, image + info |
| `ProjectFilter` | Category filter | Tabs or buttons |
| `MetricCard` | Stats display | Animated count-up |
| `SkillBar` | Skill visualization | Progress or rating |
| `TimelineItem` | Experience timeline | Vertical timeline |
| `TestimonialCard` | Client quotes | Avatar, quote, attribution |
| `ContactForm` | Contact submission | Validation, success state |
| `ImageGallery` | Case study images | Lightbox capability |
| `SectionHeading` | Consistent headings | Title + optional subtitle |
| `CallToAction` | CTA sections | Prominent conversion points |

### 7.3 Component Design Principles

1. **Consistent Props Interface**
   - Use `variant` for visual variations
   - Use `size` for sizing options
   - Use `asChild` for composition

2. **Accessibility First**
   - All interactive elements keyboard accessible
   - Proper ARIA labels
   - Focus states visible
   - Color contrast compliant

3. **Responsive by Default**
   - Mobile-first CSS
   - Flexible layouts
   - Touch-friendly targets (min 44px)

4. **Animation Ready**
   - CSS custom properties for timing
   - Reduce motion respect
   - Consistent easing functions

---

## 8. Interaction & Motion Design

### 8.1 Motion Principles

**Philosophy:** Motion should feel natural, purposeful, and subtle.

| Principle | Application |
|:----------|:------------|
| **Purposeful** | Every animation serves UX (feedback, orientation, delight) |
| **Subtle** | Never distracting; enhances without demanding attention |
| **Consistent** | Same timing and easing throughout |
| **Performant** | 60fps, GPU-accelerated properties only |
| **Accessible** | Respects `prefers-reduced-motion` |

### 8.2 Timing & Easing

```css
/* Timing */
--duration-instant:  50ms    /* Immediate feedback */
--duration-fast:     150ms   /* Quick transitions */
--duration-normal:   250ms   /* Standard animations */
--duration-slow:     400ms   /* Emphasis animations */
--duration-slower:   600ms   /* Page transitions */

/* Easing */
--ease-out:          cubic-bezier(0.16, 1, 0.3, 1)    /* Default */
--ease-in-out:       cubic-bezier(0.65, 0, 0.35, 1)   /* Symmetric */
--ease-spring:       cubic-bezier(0.34, 1.56, 0.64, 1) /* Bouncy */
```

### 8.3 Animation Inventory

**Micro-interactions:**

| Element | Trigger | Animation |
|:--------|:--------|:----------|
| Buttons | Hover | Subtle scale (1.02) + color shift |
| Buttons | Click | Scale down (0.98) briefly |
| Links | Hover | Underline reveal or color shift |
| Cards | Hover | Lift (shadow + translateY) |
| Images | Hover | Subtle zoom (1.03) |
| Nav items | Hover | Background fade |

**Page Transitions:**

| Transition | Animation |
|:-----------|:----------|
| Page enter | Fade in + slight upward movement |
| Page exit | Fade out |
| Duration | 300-400ms |

**Scroll Animations:**

| Element | Animation | Trigger |
|:--------|:----------|:--------|
| Sections | Fade in + slide up | Scroll into view |
| Project cards | Staggered fade in | Scroll into view |
| Metrics | Count up animation | Scroll into view |
| Images | Subtle parallax (optional) | Scroll position |

### 8.4 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 8.5 Loading States

- Skeleton screens for content loading
- Subtle pulse animation on skeletons
- No spinners (feels dated)
- Optimistic UI where possible

---

## 9. Case Study Template

### 9.1 Structure

Each case study follows this proven structure:

```
1. HERO
   - Project title
   - Client name
   - Date/Duration
   - My role(s)
   - Hero image (full-width)

2. OVERVIEW (The Hook)
   - One-paragraph summary
   - Key result/metric (prominent)
   - Quick facts sidebar (deliverables, tools, timeline)

3. THE CHALLENGE
   - Client context
   - The problem to solve
   - Goals/objectives
   - Constraints (if relevant)

4. THE APPROACH
   - Strategy/thinking
   - Process overview
   - Key decisions made

5. THE SOLUTION
   - What was created
   - Visual showcase (multiple images)
   - Design decisions explained

6. THE RESULTS
   - Measurable outcomes
   - Before/after if applicable
   - Client feedback/testimonial

7. REFLECTION (Optional)
   - What I learned
   - What I'd do differently

8. NAVIGATION
   - Previous/Next project links
   - Back to all work
```

### 9.2 Visual Guidelines for Case Studies

| Element | Guideline |
|:--------|:----------|
| Hero image | Full-width, high-quality mockup |
| Body images | Max-width 900px, centered |
| Image captions | Below image, muted color |
| Text width | Max 680px for readability |
| Section spacing | Generous (--space-16 to --space-20) |
| Pull quotes | Large, styled distinctively |
| Metrics | Visually prominent, accent color |

### 9.3 Project Categories

Based on Irene's work, organize into:

| Category | Description | Example Projects |
|:---------|:------------|:-----------------|
| **Brand Identity** | Logos, brand systems, guidelines | Client rebrands, new brand creation |
| **Marketing Collateral** | Print materials, stationery | Flyers, brochures, business cards |
| **Digital Design** | Web, social, email | Social media graphics, email templates |
| **Campaigns** | Integrated marketing | GoCare enrollment, product launches |
| **Print Production** | Large format, merchandise | Banners, t-shirts, signage |

---

## 10. Technical Implementation

### 10.1 Project Structure

```
src/
├── assets/
│   ├── styles/
│   │   ├── main.css           # Tailwind + custom properties
│   │   └── fonts.css          # Font imports (if custom)
│   └── images/
│       ├── projects/          # Project images
│       ├── about/             # About page images
│       └── icons/             # Custom icons if needed
├── components/
│   ├── ui/                    # shadcn-vue components
│   ├── layout/
│   │   ├── TheHeader.vue
│   │   ├── TheFooter.vue
│   │   └── PageTransition.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── FeaturedWork.vue
│   │   ├── ServicesSection.vue
│   │   ├── MetricsSection.vue
│   │   └── ContactCTA.vue
│   ├── project/
│   │   ├── ProjectCard.vue
│   │   ├── ProjectFilter.vue
│   │   ├── ProjectGallery.vue
│   │   └── ProjectNav.vue
│   └── common/
│       ├── SectionHeading.vue
│       ├── MetricCard.vue
│       ├── SkillBar.vue
│       ├── TimelineItem.vue
│       └── ThemeToggle.vue
├── composables/
│   ├── useTheme.js            # Dark/light mode
│   ├── useScrollAnimation.js  # Intersection observer
│   ├── useCountUp.js          # Number animation
│   └── useProjectFilter.js    # Filter logic
├── data/
│   ├── projects.js            # Project data
│   ├── skills.js              # Skills data
│   └── experience.js          # Work history
├── pages/
│   ├── index.vue              # Home
│   ├── work.vue               # Work listing
│   ├── work/
│   │   └── [slug].vue         # Dynamic project pages
│   ├── about.vue              # About
│   └── contact.vue            # Contact
└── lib/
    └── utils.js               # cn() and utilities
```

### 10.2 Data Structure for Projects

```javascript
// src/data/projects.js
export const projects = [
  {
    slug: 'gocare-enrollment-campaign',
    title: 'GoCare Enrollment Campaign',
    client: 'GoCare Training Institute',
    date: '2025',
    duration: '6 months',
    category: ['campaigns', 'digital', 'brand'],
    featured: true,
    thumbnail: '/images/projects/gocare-thumb.jpg',
    heroImage: '/images/projects/gocare-hero.jpg',
    role: ['Creative Lead', 'Digital Marketing'],
    tools: ['Adobe Illustrator', 'Photoshop', 'Meta Ads', 'Google Analytics'],
    summary: 'Integrated marketing campaign that exceeded enrollment targets by 35%.',
    keyMetric: {
      value: '35%',
      label: 'Enrollment Increase'
    },
    challenge: '...',
    approach: '...',
    solution: '...',
    results: [
      { value: '280%', label: 'Campaign ROI' },
      { value: '500+', label: 'Monthly Leads' },
      { value: '325%', label: 'Instagram Growth' }
    ],
    gallery: [
      { src: '...', alt: '...', caption: '...' }
    ],
    testimonial: {
      quote: '...',
      author: '...',
      role: '...'
    }
  },
  // ... more projects
]
```

### 10.3 Performance Considerations

| Aspect | Implementation |
|:-------|:---------------|
| **Images** | WebP format, lazy loading, srcset for responsiveness |
| **Fonts** | Subset, preload critical, font-display: swap |
| **CSS** | Tailwind purge unused, critical CSS inline |
| **JS** | Code splitting per route, dynamic imports |
| **Animations** | GPU-accelerated only (transform, opacity) |

### 10.4 SEO Requirements

- Semantic HTML (proper heading hierarchy)
- Meta tags per page (title, description)
- Open Graph tags for social sharing
- Structured data for portfolio (optional)
- Alt text for all images
- Sitemap generation
- robots.txt

---

## 11. Content Strategy

### 11.1 Voice & Tone

| Attribute | Description |
|:----------|:------------|
| **Professional** | Competent, knowledgeable, reliable |
| **Confident** | Clear value, proven results, assured |
| **Approachable** | Warm, personable, not stiff |
| **Clear** | Plain language, no jargon, direct |

### 11.2 Key Messages

**Primary Message:**
> "I'm Irene — a graphic designer and digital marketer who delivers complete creative solutions. One hire, two skills, proven results."

**Supporting Messages:**
- "500+ designs. 280% campaign ROI. 98% satisfaction."
- "From brand strategy to design to marketing execution."
- "Based in Nairobi, serving businesses across Kenya."

### 11.3 Content Needs

| Page | Content Required |
|:-----|:-----------------|
| Home | Hero copy, value prop, service descriptions |
| Work | Project data (see data structure above) |
| About | Bio, story, skills list, experience details |
| Contact | Contact info, form labels, confirmation message |

### 11.4 Image Requirements

| Type | Specification |
|:-----|:--------------|
| Project thumbnails | 800x600px minimum, 4:3 or 16:9 |
| Project hero | 1920px wide minimum, 16:9 or wider |
| Gallery images | 1200px wide minimum |
| About photo | 800x800px minimum, professional |
| Mockups | High-quality, realistic context |

---

## 12. Validation Criteria

### 12.1 Design Quality Checklist

The portfolio design must pass these checks:

**Typography:**
- [ ] Clear hierarchy visible at a glance
- [ ] Consistent type scale throughout
- [ ] Readable body text (16px+, 1.5+ line height)
- [ ] Proper spacing between elements
- [ ] No orphans/widows in key text

**Color:**
- [ ] Consistent use of color tokens
- [ ] Sufficient contrast (WCAG AA minimum)
- [ ] Accent color used purposefully
- [ ] Dark/light modes both polished

**Layout:**
- [ ] Consistent spacing throughout
- [ ] Proper alignment (nothing "off")
- [ ] Responsive at all breakpoints
- [ ] Content readable on mobile
- [ ] No horizontal scroll

**Interaction:**
- [ ] All interactive elements have hover states
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Animations smooth (60fps)
- [ ] Reduced motion respected

**Content:**
- [ ] No placeholder text
- [ ] Images are high quality
- [ ] All links work
- [ ] Contact form functional
- [ ] Loading states for async content

### 12.2 Meta-Design Validation

**Does the portfolio demonstrate:**
- [ ] Typography mastery?
- [ ] Color theory understanding?
- [ ] Layout and composition skills?
- [ ] Attention to detail?
- [ ] Modern design awareness?
- [ ] User experience consideration?

### 12.3 Business Validation

**Does the portfolio effectively:**
- [ ] Communicate Irene's value proposition?
- [ ] Showcase best work prominently?
- [ ] Build trust through professionalism?
- [ ] Make contact/hiring easy?
- [ ] Differentiate from competitors?
- [ ] Work for target audiences?

---

## Summary

This design approach establishes a portfolio that:

1. **Is the proof** — The site itself demonstrates design skills
2. **Tells the story** — Clear narrative of capability and results
3. **Serves the audience** — Optimized for employer/client evaluation
4. **Stands out** — Distinctive through dark mode, warm accent, confident minimalism
5. **Performs** — Fast, accessible, mobile-friendly
6. **Converts** — Clear CTAs, easy contact

The next step is implementation, following this specification as the source of truth.

---

*Document prepared for: Irene Portfolio Project*
*Approach based on: Industry research, best practices, codebase analysis*
*To be implemented using: Vue 3, Tailwind CSS 4, shadcn-vue*
