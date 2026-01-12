<script setup>
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
</script>

<template>
  <section ref="sectionRef" class="py-24 px-6 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

    <div class="container-wide mx-auto text-center relative z-10">
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeading
          title="Let's Work Together"
          subtitle="Ready to bring your vision to life?"
          centered
          size="large"
        />
      </div>

      <p
        class="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-100"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        Whether you need a complete brand identity, marketing campaign, or digital presence,
        I'm here to help you stand out and achieve your goals.
      </p>

      <div
        class="flex flex-wrap gap-4 justify-center transition-all duration-700 ease-out delay-200"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <Button size="lg" class="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent" as-child>
          <RouterLink to="/contact">Start a Project</RouterLink>
        </Button>
        <Button variant="outline" size="lg" as-child>
          <RouterLink to="/about">Learn About Me</RouterLink>
        </Button>
      </div>

      <!-- Contact info hint -->
      <p
        class="mt-8 text-sm text-muted-foreground transition-all duration-700 ease-out delay-300"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        Or email me directly at
        <a href="mailto:rj.wangari@gmail.com" class="text-accent hover:underline">
          rj.wangari@gmail.com
        </a>
      </p>
    </div>
  </section>
</template>
