# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a portfolio website for **Wangari Irene** (brand: **Qoi_tec brands**), a Graphic Designer & Digital Marketing Specialist based in Nairobi, Kenya. Her unique value proposition is "Two Experts in One" - combining design and marketing skills.

**Key Documents:**
- `DESIGN_APPROACH.md` - Comprehensive design specification (colors, typography, layout, components)
- `resumes/` - Source content for the portfolio (skills, experience, achievements)
- `/home/de-coder/Downloads/SUGAR-Portfolio/` - Brand assets, portfolio images, and guidelines

**Brand Identity (from Qoi_tec brand guidelines):**
- **Primary Color:** #1B194E (Deep Navy)
- **Accent Color:** #91D8F7 (Sky Blue)
- **Fonts:** Montserrat (headings), Source Sans Pro (body - web alternative to Myriad Pro)
- Dark mode primary (navy background) with light mode option
- The portfolio itself must demonstrate design skills (meta-design principle)

## Build & Development Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start Vite dev server with hot reload
pnpm build            # Production build
pnpm preview          # Preview production build locally
pnpm lint             # Run both Oxlint and ESLint with fixes
pnpm format           # Format code with Prettier
pnpm test             # Run Playwright e2e tests
pnpm test:ui          # Run tests with Playwright UI (devtools)
pnpm test:debug       # Run tests in debug mode
```

## Architecture

This is a Vue 3 portfolio application built with Vite, using the Composition API.

### File-Based Routing

Routes are auto-generated from `src/pages/`. Add a `.vue` file there to create a new route:
- `src/pages/index.vue` → `/`
- `src/pages/about.vue` → `/about`

### Auto-Import System

The following are auto-imported globally (no manual imports needed):
- Components from `src/components/`
- Composables from `src/composables/`
- Utilities from `src/utils/`
- Vue 3, Vue Router, VueUse, and Pinia APIs

### Path Aliases

- `@` → `./src`
- `@components` → `./src/components`
- `@composables` → `./src/composables`
- `@pages` → `./src/pages`
- `@assets` → `./src/assets`
- `@lib` → `./src/lib`

### Key Directories

- `src/pages/` - File-based routes
- `src/components/` - Reusable Vue components
- `src/composables/` - Vue 3 composables
- `src/stores/` - Pinia state stores
- `src/utils/` - Utility functions
- `e2e/` - Playwright end-to-end tests

### Tech Stack

- Vue 3 + Vite + Vue Router + Pinia
- Tailwind CSS 4 for styling
- VueUse for composition utilities
- shadcn-vue for UI components
- Playwright for e2e testing

### shadcn-vue Components

Add components with:
```bash
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card dialog
```

Components are installed to `src/components/ui/`. Use the `cn()` utility from `@/lib/utils` for conditional class merging.

### MCP Servers

Configured in `.mcp.json`. Run `/mcp` in Claude Code to verify connections.

- **shadcn** - Add and manage shadcn-vue UI components
- **playwright** - Browser automation for testing and interactions
- **chrome-devtools** - Debug pages, inspect DOM/CSS, check performance (LCP, network, console)
