<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const services = [
  {
    title: 'Brand Identity',
    description: 'Logo design, brand guidelines, and complete visual identity systems that make your business memorable.',
    icon: 'palette'
  },
  {
    title: 'Marketing Collateral',
    description: 'Print materials, business cards, brochures, and promotional items that elevate your brand presence.',
    icon: 'layout'
  },
  {
    title: 'Digital Design',
    description: 'Social media graphics, web assets, email templates, and digital campaigns that engage your audience.',
    icon: 'monitor'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns, social media management, and analytics-driven marketing that delivers measurable ROI.',
    icon: 'trending'
  }
]

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6 bg-card/30">
    <div class="container-wide mx-auto">
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeading
          title="What I Do"
          subtitle="Design and marketing expertise, combined"
          centered
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          v-for="(service, index) in services"
          :key="service.title"
          class="group hover:border-accent/50 transition-all duration-500 ease-out hover:-translate-y-1"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
        >
          <CardHeader>
            <!-- Icon -->
            <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <!-- Palette Icon -->
              <svg
                v-if="service.icon === 'palette'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
              </svg>
              <!-- Layout Icon -->
              <svg
                v-if="service.icon === 'layout'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="3" x2="21" y1="9" y2="9" />
                <line x1="9" x2="9" y1="21" y2="9" />
              </svg>
              <!-- Monitor Icon -->
              <svg
                v-if="service.icon === 'monitor'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <rect width="20" height="14" x="2" y="3" rx="2" />
                <line x1="8" x2="16" y1="21" y2="21" />
                <line x1="12" x2="12" y1="17" y2="21" />
              </svg>
              <!-- Trending Icon -->
              <svg
                v-if="service.icon === 'trending'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <CardTitle class="text-lg group-hover:text-accent transition-colors">
              {{ service.title }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ service.description }}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
