<script setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const highlights = [
  { icon: 'location', text: 'Nairobi, Kenya' },
  { icon: 'experience', text: '5+ Years Experience' },
  { icon: 'projects', text: '500+ Projects Completed' }
]
</script>

<template>
  <section ref="sectionRef" class="px-6 py-12">
    <div class="container-wide mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div
          class="relative transition-all duration-700 ease-out order-2 lg:order-1"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <div class="aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-card rounded-2xl overflow-hidden relative border border-border">
            <img
              src="/images/profile/irene-portrait.jpg"
              alt="Wangari Irene - Graphic Designer & Digital Marketer"
              class="w-full h-full object-cover object-top"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

            <!-- Decorative badge -->
            <div class="absolute bottom-6 left-6 right-6">
              <div class="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                <p class="text-sm font-medium text-accent">Available for freelance work</p>
                <p class="text-xs text-muted-foreground mt-1">Let's create something amazing together</p>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/5 rounded-2xl -z-10 hidden lg:block" />
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full -z-10 hidden lg:block" />
        </div>

        <!-- Content Column -->
        <div
          class="order-1 lg:order-2 transition-all duration-700 ease-out delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <Badge variant="secondary" class="mb-4">About Me</Badge>

          <h1
            class="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style="font-family: var(--font-heading)"
          >
            Hi, I'm <span class="text-gradient">Wangari Irene</span>
          </h1>

          <p class="text-xl text-muted-foreground mb-6 leading-relaxed">
            A passionate <strong class="text-foreground">Graphic Designer</strong> and
            <strong class="text-foreground">Digital Marketing Specialist</strong> helping
            businesses stand out through compelling visuals and data-driven strategies.
          </p>

          <p class="text-muted-foreground mb-8 leading-relaxed">
            With over 5 years of experience in the creative industry, I've had the privilege of
            working with diverse clients ranging from startups to established brands. My unique
            combination of design skills and marketing expertise allows me to create work that
            doesn't just look good—it delivers measurable results.
          </p>

          <!-- Highlights -->
          <div class="flex flex-wrap gap-4 mb-8">
            <div
              v-for="highlight in highlights"
              :key="highlight.text"
              class="flex items-center gap-2 text-sm"
            >
              <!-- Location Icon -->
              <svg
                v-if="highlight.icon === 'location'"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <!-- Experience Icon -->
              <svg
                v-if="highlight.icon === 'experience'"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <!-- Projects Icon -->
              <svg
                v-if="highlight.icon === 'projects'"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              <span class="text-muted-foreground">{{ highlight.text }}</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <Button class="bg-accent text-accent-foreground hover:bg-accent/90" as-child>
              <RouterLink to="/contact">Let's Work Together</RouterLink>
            </Button>
            <Button variant="outline" as-child>
              <a href="/resumes/RESUME.pdf" target="_blank" class="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
