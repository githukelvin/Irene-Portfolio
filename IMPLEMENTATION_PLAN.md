# Implementation Plan: Irene Portfolio

## Comprehensive Development Roadmap

**Version:** 1.0
**Date:** January 2026
**Reference:** DESIGN_APPROACH.md (v2.0)
**Brand:** Qoi_tec brands

---

## Overview

This document outlines the complete implementation plan for Wangari Irene's portfolio website. Each phase is broken down into specific tasks with file paths, dependencies, and acceptance criteria.

**Total Phases:** 9
**Estimated Files to Create/Modify:** 45+

---

## Phase 1: Foundation & Design System

**Objective:** Establish the core design system, install dependencies, and configure the base styling.

### 1.1 Install Required Dependencies

```bash
# Google Fonts (add to index.html)
# Montserrat for headings, Source Sans 3 for body

# shadcn-vue components
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card
npx shadcn-vue@latest add badge
npx shadcn-vue@latest add separator
npx shadcn-vue@latest add aspect-ratio
npx shadcn-vue@latest add navigation-menu
npx shadcn-vue@latest add sheet
npx shadcn-vue@latest add input
npx shadcn-vue@latest add textarea
npx shadcn-vue@latest add label
npx shadcn-vue@latest add avatar
npx shadcn-vue@latest add tooltip
npx shadcn-vue@latest add skeleton
npx shadcn-vue@latest add toast
```

### 1.2 Update index.html

**File:** `/var/www/Irene-Portfolio/index.html`

**Changes:**
- Add Google Fonts preconnect and stylesheet
- Update page title to "Wangari Irene | Graphic Designer & Digital Marketer"
- Add meta description
- Add Open Graph tags

```html
<!-- Add to <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet">

<title>Wangari Irene | Graphic Designer & Digital Marketer</title>
<meta name="description" content="Creative Designer & Digital Marketing Specialist based in Nairobi, Kenya. 500+ design projects, 280% campaign ROI. Two experts in one.">

<!-- Open Graph -->
<meta property="og:title" content="Wangari Irene | Graphic Designer & Digital Marketer">
<meta property="og:description" content="Creative Designer & Digital Marketing Specialist. Two experts in one.">
<meta property="og:type" content="website">
```

### 1.3 Update CSS Design Tokens

**File:** `/var/www/Irene-Portfolio/src/assets/styles/main.css`

**Changes:**
- Replace default shadcn colors with Qoi_tec brand colors
- Add custom font families
- Add animation utilities

```css
/* Brand Color System */
:root {
  /* Qoi_tec Brand Colors */
  --brand-navy: #1B194E;
  --brand-sky: #91D8F7;

  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Source Sans 3', sans-serif;

  /* Dark Mode (Default) - Navy based */
  --radius: 0.625rem;
  --background: oklch(0.12 0.04 280);
  --foreground: oklch(0.95 0 0);
  --card: oklch(0.18 0.06 280);
  --card-foreground: oklch(0.95 0 0);
  --popover: oklch(0.18 0.06 280);
  --popover-foreground: oklch(0.95 0 0);
  --primary: oklch(0.83 0.10 220);
  --primary-foreground: oklch(0.15 0.06 280);
  --secondary: oklch(0.24 0.06 280);
  --secondary-foreground: oklch(0.95 0 0);
  --muted: oklch(0.24 0.06 280);
  --muted-foreground: oklch(0.65 0 0);
  --accent: oklch(0.83 0.10 220);
  --accent-foreground: oklch(0.15 0.06 280);
  --destructive: oklch(0.65 0.20 25);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.83 0.10 220);
}

.light {
  --background: oklch(0.98 0.01 220);
  --foreground: oklch(0.18 0.06 280);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.06 280);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.06 280);
  --primary: oklch(0.22 0.08 280);
  --primary-foreground: oklch(0.95 0 0);
  --secondary: oklch(0.96 0.02 220);
  --secondary-foreground: oklch(0.18 0.06 280);
  --muted: oklch(0.96 0.02 220);
  --muted-foreground: oklch(0.45 0.04 280);
  --accent: oklch(0.22 0.08 280);
  --accent-foreground: oklch(0.95 0 0);
  --border: oklch(0.18 0.06 280 / 15%);
  --input: oklch(0.18 0.06 280 / 10%);
  --ring: oklch(0.22 0.08 280);
}

/* Custom utilities */
@layer base {
  body {
    font-family: var(--font-body);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }
}
```

### 1.4 Create Theme Composable

**File:** `/var/www/Irene-Portfolio/src/composables/useTheme.js`

```javascript
// Theme toggle composable with localStorage persistence
export function useTheme() {
  const isDark = ref(true)

  const toggle = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    }
    updateTheme()
  })

  return { isDark, toggle }
}
```

### 1.5 Acceptance Criteria - Phase 1

- [ ] Google Fonts loading correctly
- [ ] shadcn-vue components installed
- [ ] Brand colors applied (navy background, sky blue accents)
- [ ] Dark/light mode toggle working
- [ ] Typography using Montserrat/Source Sans

---

## Phase 2: Layout Components

**Objective:** Create the core layout components that will be used across all pages.

### 2.1 Create Header Component

**File:** `/var/www/Irene-Portfolio/src/components/layout/TheHeader.vue`

**Features:**
- Sticky header with backdrop blur
- Logo/brand name (Qoi_tec or "Irene")
- Navigation links (Work, About, Contact)
- Theme toggle button
- Mobile hamburger menu
- Transparent on hero, solid on scroll

### 2.2 Create Footer Component

**File:** `/var/www/Irene-Portfolio/src/components/layout/TheFooter.vue`

**Features:**
- Brand tagline
- Quick links
- Social media icons (from SUGAR-Portfolio assets)
- Contact info
- Copyright with current year

### 2.3 Create Mobile Menu Component

**File:** `/var/www/Irene-Portfolio/src/components/layout/MobileMenu.vue`

**Features:**
- Full-screen overlay
- Animated menu items
- Close on navigation
- Focus trap for accessibility

### 2.4 Create Page Layout Wrapper

**File:** `/var/www/Irene-Portfolio/src/components/layout/PageLayout.vue`

**Features:**
- Slot for page content
- Optional hero mode (transparent header)
- Consistent padding/margins

### 2.5 Create Section Components

**Files:**
- `/var/www/Irene-Portfolio/src/components/common/SectionHeading.vue`
- `/var/www/Irene-Portfolio/src/components/common/SectionWrapper.vue`

**Features:**
- Consistent section styling
- Title + optional subtitle
- Configurable spacing

### 2.6 Update App.vue

**File:** `/var/www/Irene-Portfolio/src/App.vue`

**Changes:**
- Add TheHeader
- Add TheFooter
- Wrap RouterView in PageLayout

### 2.7 Acceptance Criteria - Phase 2

- [ ] Header displays correctly with navigation
- [ ] Mobile menu works on small screens
- [ ] Footer displays with all links
- [ ] Theme toggle in header
- [ ] Consistent layout across pages

---

## Phase 3: Home Page

**Objective:** Build the complete home page with all sections.

### 3.1 Create Hero Section

**File:** `/var/www/Irene-Portfolio/src/components/sections/HeroSection.vue`

**Content:**
- Name: "Wangari Irene"
- Title: "Creative Designer & Digital Marketing Specialist"
- Tagline: "Two experts in one. Design + Marketing."
- CTA buttons: "View My Work" + "Get in Touch"
- Background: Subtle gradient or pattern
- Optional: Animated elements

### 3.2 Create Featured Work Section

**File:** `/var/www/Irene-Portfolio/src/components/sections/FeaturedWork.vue`

**Features:**
- 3-4 highlighted projects
- ProjectCard components
- "View All Work" link
- Grid layout (responsive)

### 3.3 Create Metrics Section

**File:** `/var/www/Irene-Portfolio/src/components/sections/MetricsSection.vue`

**Content (from resume):**
- 500+ Design Projects
- 98% Client Satisfaction
- 280% Campaign ROI
- 25+ Brand Identities

**Features:**
- Count-up animation on scroll
- Grid of MetricCard components
- Visual icons or illustrations

### 3.4 Create Services Section

**File:** `/var/www/Irene-Portfolio/src/components/sections/ServicesSection.vue`

**Content:**
- Brand Identity & Logo Design
- Marketing Collateral (Print)
- Digital Design (Social/Web)
- Digital Marketing Campaigns

### 3.5 Create About Preview Section

**File:** `/var/www/Irene-Portfolio/src/components/sections/AboutPreview.vue`

**Features:**
- Brief intro text
- Professional photo (Qoi Photo.jpg)
- "Learn More" link to full about page

### 3.6 Create Contact CTA Section

**File:** `/var/www/Irene-Portfolio/src/components/sections/ContactCTA.vue`

**Content:**
- "Let's Work Together"
- Brief text about collaboration
- CTA button to contact page

### 3.7 Create Home Page

**File:** `/var/www/Irene-Portfolio/src/pages/index.vue`

**Structure:**
```vue
<template>
  <div>
    <HeroSection />
    <FeaturedWork />
    <MetricsSection />
    <ServicesSection />
    <AboutPreview />
    <ContactCTA />
  </div>
</template>
```

### 3.8 Supporting Components

**Files:**
- `/var/www/Irene-Portfolio/src/components/common/MetricCard.vue`
- `/var/www/Irene-Portfolio/src/components/common/ServiceCard.vue`

### 3.9 Acceptance Criteria - Phase 3

- [ ] Hero displays name, title, CTAs
- [ ] Featured work shows 3-4 projects
- [ ] Metrics animate on scroll
- [ ] Services section displays 4 categories
- [ ] About preview with photo
- [ ] Contact CTA prominent
- [ ] All sections responsive

---

## Phase 4: Work/Projects System

**Objective:** Create the work listing page and project data structure.

### 4.1 Create Project Data Structure

**File:** `/var/www/Irene-Portfolio/src/data/projects.js`

**Structure:**
```javascript
export const projects = [
  {
    slug: 'qoitec-brand-identity',
    title: 'Qoi_tec Brand Identity',
    client: 'Personal Brand',
    category: ['brand', 'business-cards'],
    featured: true,
    thumbnail: '/images/projects/qoitec-thumb.jpg',
    // ... full project data
  },
  // More projects organized from SUGAR-Portfolio
]

export const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'brand', label: 'Brand Identity' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'print', label: 'Print Design' },
  { id: 'marketing', label: 'Marketing' },
]
```

### 4.2 Copy Portfolio Images

**Task:** Copy images from SUGAR-Portfolio to project

**From:** `/home/de-coder/Downloads/SUGAR-Portfolio/PORTFOLIO/`
**To:** `/var/www/Irene-Portfolio/public/images/projects/`

**Files to organize:**
- BC 1-7 → business-cards/
- CE 1-10 → promotional/
- TP 1-10 → travel-promo/
- SM Pic 1-7 → social-media/

### 4.3 Create Project Card Component

**File:** `/var/www/Irene-Portfolio/src/components/project/ProjectCard.vue`

**Features:**
- Thumbnail image with aspect ratio
- Title and client
- Category badge(s)
- Hover effect (lift + overlay)
- Link to project detail

### 4.4 Create Project Filter Component

**File:** `/var/www/Irene-Portfolio/src/components/project/ProjectFilter.vue`

**Features:**
- Category buttons/tabs
- Active state styling
- Filter logic (via composable)

### 4.5 Create Filter Composable

**File:** `/var/www/Irene-Portfolio/src/composables/useProjectFilter.js`

**Features:**
- Active category state
- Filtered projects computed
- URL query param sync (optional)

### 4.6 Create Work Page

**File:** `/var/www/Irene-Portfolio/src/pages/work.vue`

**Structure:**
```vue
<template>
  <div>
    <SectionHeading title="My Work" subtitle="Selected projects" />
    <ProjectFilter />
    <div class="project-grid">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
```

### 4.7 Acceptance Criteria - Phase 4

- [ ] Work page displays all projects
- [ ] Filter buttons work correctly
- [ ] Project cards display thumbnails
- [ ] Hover effects working
- [ ] Cards link to detail pages
- [ ] Responsive grid layout

---

## Phase 5: Case Study Pages

**Objective:** Create dynamic project detail pages with full case studies.

### 5.1 Create Dynamic Route

**File:** `/var/www/Irene-Portfolio/src/pages/work/[slug].vue`

**Features:**
- Fetch project by slug
- 404 handling for invalid slugs
- SEO meta tags per project

### 5.2 Create Case Study Components

**Files:**
- `/var/www/Irene-Portfolio/src/components/project/ProjectHero.vue`
- `/var/www/Irene-Portfolio/src/components/project/ProjectOverview.vue`
- `/var/www/Irene-Portfolio/src/components/project/ProjectGallery.vue`
- `/var/www/Irene-Portfolio/src/components/project/ProjectResults.vue`
- `/var/www/Irene-Portfolio/src/components/project/ProjectNav.vue`

### 5.3 Case Study Structure

```vue
<template>
  <article>
    <ProjectHero :project="project" />
    <ProjectOverview :project="project" />

    <!-- Challenge Section -->
    <section v-if="project.challenge">
      <SectionHeading title="The Challenge" />
      <p>{{ project.challenge }}</p>
    </section>

    <!-- Solution Section -->
    <section v-if="project.solution">
      <SectionHeading title="The Solution" />
      <p>{{ project.solution }}</p>
      <ProjectGallery :images="project.gallery" />
    </section>

    <!-- Results Section -->
    <ProjectResults v-if="project.results" :results="project.results" />

    <!-- Testimonial -->
    <TestimonialCard v-if="project.testimonial" :testimonial="project.testimonial" />

    <!-- Navigation -->
    <ProjectNav :current="project.slug" />
  </article>
</template>
```

### 5.4 Create Supporting Components

**Files:**
- `/var/www/Irene-Portfolio/src/components/common/TestimonialCard.vue`
- `/var/www/Irene-Portfolio/src/components/common/ImageLightbox.vue`

### 5.5 Acceptance Criteria - Phase 5

- [ ] Project pages load by slug
- [ ] Hero shows project title and info
- [ ] Gallery displays images
- [ ] Results section with metrics
- [ ] Navigation to prev/next projects
- [ ] 404 for invalid slugs

---

## Phase 6: About Page

**Objective:** Create a comprehensive about page showcasing Irene's story and skills.

### 6.1 Create About Page

**File:** `/var/www/Irene-Portfolio/src/pages/about.vue`

**Sections:**
1. Hero with photo and intro
2. Professional story
3. Skills visualization
4. Experience timeline
5. Certifications
6. What I'm looking for
7. Contact CTA

### 6.2 Create Skills Data

**File:** `/var/www/Irene-Portfolio/src/data/skills.js`

**Content (from resume):**
```javascript
export const designSkills = [
  { name: 'Adobe Illustrator', level: 'Advanced', years: 5 },
  { name: 'Adobe Photoshop', level: 'Advanced', years: 5 },
  { name: 'CorelDRAW', level: 'Advanced', years: 4 },
  // ...
]

export const marketingSkills = [
  { name: 'Social Media Management', level: 'Advanced', years: 3 },
  { name: 'Google Ads', level: 'Intermediate', years: 2 },
  // ...
]
```

### 6.3 Create Experience Data

**File:** `/var/www/Irene-Portfolio/src/data/experience.js`

**Content (from resume):**
```javascript
export const experience = [
  {
    company: 'GoCare Training Institute',
    role: 'Creative & Digital Marketing Lead',
    period: 'July 2025 - December 2025',
    highlights: [
      '35% increase in student enrollment',
      '280% ROI on advertising campaigns',
      // ...
    ]
  },
  // ...
]
```

### 6.4 Create Supporting Components

**Files:**
- `/var/www/Irene-Portfolio/src/components/about/SkillsSection.vue`
- `/var/www/Irene-Portfolio/src/components/about/TimelineSection.vue`
- `/var/www/Irene-Portfolio/src/components/about/CertificationsSection.vue`
- `/var/www/Irene-Portfolio/src/components/common/SkillBar.vue`
- `/var/www/Irene-Portfolio/src/components/common/TimelineItem.vue`

### 6.5 Copy About Photo

**From:** `/home/de-coder/Downloads/SUGAR-Portfolio/PORTFOLIO/Qoi Photo.jpg`
**To:** `/var/www/Irene-Portfolio/public/images/about/irene-portrait.jpg`

### 6.6 Acceptance Criteria - Phase 6

- [ ] About page displays all sections
- [ ] Photo displays correctly
- [ ] Skills show visual progress
- [ ] Timeline shows experience
- [ ] Certifications listed
- [ ] Contact CTA at bottom

---

## Phase 7: Contact Page

**Objective:** Create a functional contact page with form and contact information.

### 7.1 Create Contact Page

**File:** `/var/www/Irene-Portfolio/src/pages/contact.vue`

**Sections:**
1. Heading and intro text
2. Contact form
3. Direct contact info
4. Social links
5. Location info

### 7.2 Create Contact Form Component

**File:** `/var/www/Irene-Portfolio/src/components/contact/ContactForm.vue`

**Fields:**
- Name (required)
- Email (required, validated)
- Subject (optional)
- Message (required)
- Submit button

**Features:**
- Client-side validation
- Loading state
- Success/error messages
- Form submission (Formspree/Netlify Forms)

### 7.3 Create Contact Info Component

**File:** `/var/www/Irene-Portfolio/src/components/contact/ContactInfo.vue`

**Content (from resume):**
- Email: rj.wangari@gmail.com
- Phone: +254 741 134 643
- Location: Kasarani, Nairobi, Kenya
- LinkedIn, Behance links

### 7.4 Create Social Links Component

**File:** `/var/www/Irene-Portfolio/src/components/common/SocialLinks.vue`

**Links:**
- LinkedIn
- Behance
- Instagram (if applicable)
- TikTok (if applicable)

### 7.5 Acceptance Criteria - Phase 7

- [ ] Contact form displays all fields
- [ ] Validation works correctly
- [ ] Form submission works
- [ ] Contact info displayed
- [ ] Social links working
- [ ] Success message after submit

---

## Phase 8: Polish & Interactions

**Objective:** Add animations, transitions, and polish to the entire site.

### 8.1 Create Animation Composables

**Files:**
- `/var/www/Irene-Portfolio/src/composables/useScrollAnimation.js`
- `/var/www/Irene-Portfolio/src/composables/useCountUp.js`

### 8.2 Add Page Transitions

**File:** `/var/www/Irene-Portfolio/src/components/layout/PageTransition.vue`

**Features:**
- Fade in/out on route change
- Smooth scroll to top

### 8.3 Add Scroll Animations

**Apply to:**
- Section reveals (fade + slide up)
- Project cards (staggered reveal)
- Metrics (count up)
- Skills (bar animation)

### 8.4 Add Micro-interactions

**Implement:**
- Button hover effects
- Card lift on hover
- Link underline animations
- Focus states
- Loading skeletons

### 8.5 Add Loading States

**Files:**
- `/var/www/Irene-Portfolio/src/components/common/PageSkeleton.vue`
- `/var/www/Irene-Portfolio/src/components/common/CardSkeleton.vue`

### 8.6 Optimize Images

**Tasks:**
- Convert to WebP format
- Create responsive sizes
- Implement lazy loading
- Add blur placeholders

### 8.7 Acceptance Criteria - Phase 8

- [ ] Page transitions smooth
- [ ] Scroll animations working
- [ ] Hover effects on all interactive elements
- [ ] Loading states display
- [ ] Images optimized
- [ ] 60fps animations

---

## Phase 9: Testing & Validation

**Objective:** Ensure the site works correctly and meets all quality criteria.

### 9.1 Update E2E Tests

**File:** `/var/www/Irene-Portfolio/e2e/home.spec.js`

**Tests:**
- Home page loads
- Navigation works
- Theme toggle works
- Contact form validates
- Project filtering works

### 9.2 Add More Test Files

**Files:**
- `/var/www/Irene-Portfolio/e2e/navigation.spec.js`
- `/var/www/Irene-Portfolio/e2e/work.spec.js`
- `/var/www/Irene-Portfolio/e2e/contact.spec.js`

### 9.3 Accessibility Audit

**Checks:**
- Color contrast (WCAG AA)
- Keyboard navigation
- Screen reader compatibility
- Focus management
- Alt text on images

### 9.4 Performance Audit

**Checks:**
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Image optimization
- Code splitting

### 9.5 Cross-browser Testing

**Browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari
- Mobile Chrome

### 9.6 Responsive Testing

**Breakpoints:**
- Mobile: 320px, 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

### 9.7 Final Checklist

**Design Quality:**
- [ ] Typography hierarchy clear
- [ ] Colors consistent with brand
- [ ] Spacing consistent
- [ ] Images high quality
- [ ] Animations smooth

**Functionality:**
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Filters work
- [ ] Theme toggle persists
- [ ] No console errors

**SEO:**
- [ ] Meta tags on all pages
- [ ] Open Graph tags
- [ ] Semantic HTML
- [ ] Sitemap generated

### 9.8 Acceptance Criteria - Phase 9

- [ ] All E2E tests pass
- [ ] Lighthouse score > 90
- [ ] No accessibility errors
- [ ] Works on all browsers
- [ ] Responsive at all sizes
- [ ] Final checklist complete

---

## File Summary

### New Files to Create (45+)

**Composables (4):**
- `src/composables/useTheme.js`
- `src/composables/useProjectFilter.js`
- `src/composables/useScrollAnimation.js`
- `src/composables/useCountUp.js`

**Data (3):**
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/experience.js`

**Layout Components (4):**
- `src/components/layout/TheHeader.vue`
- `src/components/layout/TheFooter.vue`
- `src/components/layout/MobileMenu.vue`
- `src/components/layout/PageLayout.vue`

**Section Components (7):**
- `src/components/sections/HeroSection.vue`
- `src/components/sections/FeaturedWork.vue`
- `src/components/sections/MetricsSection.vue`
- `src/components/sections/ServicesSection.vue`
- `src/components/sections/AboutPreview.vue`
- `src/components/sections/ContactCTA.vue`

**Project Components (6):**
- `src/components/project/ProjectCard.vue`
- `src/components/project/ProjectFilter.vue`
- `src/components/project/ProjectHero.vue`
- `src/components/project/ProjectOverview.vue`
- `src/components/project/ProjectGallery.vue`
- `src/components/project/ProjectNav.vue`

**About Components (3):**
- `src/components/about/SkillsSection.vue`
- `src/components/about/TimelineSection.vue`
- `src/components/about/CertificationsSection.vue`

**Contact Components (2):**
- `src/components/contact/ContactForm.vue`
- `src/components/contact/ContactInfo.vue`

**Common Components (10):**
- `src/components/common/SectionHeading.vue`
- `src/components/common/SectionWrapper.vue`
- `src/components/common/MetricCard.vue`
- `src/components/common/ServiceCard.vue`
- `src/components/common/SkillBar.vue`
- `src/components/common/TimelineItem.vue`
- `src/components/common/TestimonialCard.vue`
- `src/components/common/SocialLinks.vue`
- `src/components/common/ImageLightbox.vue`
- `src/components/common/ThemeToggle.vue`

**Pages (4):**
- `src/pages/index.vue` (update)
- `src/pages/work.vue` (create)
- `src/pages/work/[slug].vue` (create)
- `src/pages/about.vue` (update)
- `src/pages/contact.vue` (create)

**Tests (4):**
- `e2e/home.spec.js` (update)
- `e2e/navigation.spec.js`
- `e2e/work.spec.js`
- `e2e/contact.spec.js`

### Files to Modify (5)

- `index.html`
- `src/App.vue`
- `src/assets/styles/main.css`
- `src/pages/index.vue`
- `src/pages/about.vue`

---

## Dependencies Between Phases

```
Phase 1 (Foundation) ─┬─► Phase 2 (Layout)
                      │
                      └─► Phase 3 (Home) ──► Phase 8 (Polish)
                          │
Phase 4 (Work) ◄─────────┤
    │                     │
    └─► Phase 5 (Case Studies)
                          │
Phase 6 (About) ◄────────┤
                          │
Phase 7 (Contact) ◄──────┘
                          │
                          ▼
                    Phase 9 (Testing)
```

**Critical Path:** 1 → 2 → 3 → 4 → 5 → 8 → 9

---

## Quick Start Commands

```bash
# Phase 1: Install dependencies
npx shadcn-vue@latest add button card badge separator aspect-ratio navigation-menu sheet input textarea label avatar tooltip skeleton toast

# Development
npm run dev

# Testing
npm run test

# Build
npm run build
```

---

*Implementation Plan v1.0*
*Reference: DESIGN_APPROACH.md v2.0*
*Last Updated: January 2026*
