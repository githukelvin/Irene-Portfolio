<script setup>
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

const highlights = [
  'Adobe Creative Suite Expert',
  'Digital Marketing Specialist',
  '5+ Years Experience',
  'Based in Nairobi, Kenya'
]
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6">
    <div class="container-wide mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div
          class="relative transition-all duration-700 ease-out"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <div class="aspect-[4/5] bg-card rounded-2xl overflow-hidden relative">
            <img
              src="/images/profile/irene-portrait.jpg"
              alt="Wangari Irene - Graphic Designer & Digital Marketer"
              class="w-full h-full object-cover object-top"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          </div>

          <!-- Decorative element -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
        </div>

        <!-- Content Column -->
        <div
          class="transition-all duration-700 ease-out delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <Badge variant="secondary" class="mb-4">About Me</Badge>

          <h2
            class="text-3xl md:text-4xl font-bold mb-4"
            style="font-family: var(--font-heading)"
          >
            Creative Designer &<br />
            <span class="text-gradient">Marketing Specialist</span>
          </h2>

          <p class="text-muted-foreground mb-6 leading-relaxed">
            I'm Wangari Irene, a passionate creative professional with a unique combination
            of graphic design and digital marketing expertise. I help businesses stand out
            through compelling visuals and data-driven marketing strategies.
          </p>

          <p class="text-muted-foreground mb-8 leading-relaxed">
            With over 500 design projects and proven marketing results including 280% campaign ROI,
            I bring both creativity and strategic thinking to every project.
          </p>

          <!-- Highlights -->
          <div class="flex flex-wrap gap-2 mb-8">
            <Badge
              v-for="highlight in highlights"
              :key="highlight"
              variant="outline"
              class="text-xs"
            >
              {{ highlight }}
            </Badge>
          </div>

          <Button as-child>
            <RouterLink to="/about">Learn More About Me</RouterLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
