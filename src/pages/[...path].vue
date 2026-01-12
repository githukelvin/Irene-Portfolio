<script setup>
import { Button } from '@/components/ui/button'
import { useSEO } from '@/composables/useSEO'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useSEO({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.'
})

const { elementRef: contentRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center px-6 py-20">
    <div
      ref="contentRef"
      class="text-center max-w-lg transition-all duration-700 ease-out"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <!-- 404 Graphic -->
      <div class="mb-8 relative">
        <div class="text-[150px] md:text-[200px] font-bold text-accent/10 leading-none select-none" style="font-family: var(--font-heading)">
          404
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-accent"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
              <path d="M11 8v2" />
              <path d="M11 14h.01" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Content -->
      <h1 class="text-3xl md:text-4xl font-bold mb-4" style="font-family: var(--font-heading)">
        Page Not Found
      </h1>
      <p class="text-muted-foreground mb-8 leading-relaxed">
        Oops! The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button class="bg-accent text-accent-foreground hover:bg-accent/90" as-child>
          <RouterLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </RouterLink>
        </Button>
        <Button variant="outline" as-child>
          <RouterLink to="/contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contact Me
          </RouterLink>
        </Button>
      </div>

      <!-- Quick Links -->
      <div class="mt-12 pt-8 border-t border-border">
        <p class="text-sm text-muted-foreground mb-4">Or explore these pages:</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <RouterLink
            to="/work"
            class="text-sm text-accent hover:underline"
          >
            View My Work
          </RouterLink>
          <span class="text-muted-foreground">•</span>
          <RouterLink
            to="/about"
            class="text-sm text-accent hover:underline"
          >
            About Me
          </RouterLink>
          <span class="text-muted-foreground">•</span>
          <RouterLink
            to="/contact"
            class="text-sm text-accent hover:underline"
          >
            Get in Touch
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
