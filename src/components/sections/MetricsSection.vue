<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useCountUp } from '@/composables/useCountUp'

const metrics = [
  { value: '500+', label: 'Design Projects', description: 'Completed across brands' },
  { value: '98%', label: 'Client Satisfaction', description: 'Happy clients' },
  { value: '280%', label: 'Campaign ROI', description: 'Average return' },
  { value: '25+', label: 'Brand Identities', description: 'Created from scratch' }
]

// Scroll animation for the section
const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

// Count-up animations for each metric
const countUps = metrics.map(metric => useCountUp(metric.value, { duration: 2000 }))

// Start all count-ups when section becomes visible
watch(isVisible, (visible) => {
  if (visible) {
    countUps.forEach((countUp, index) => {
      setTimeout(() => countUp.start(), index * 150)
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6 bg-card/30">
    <div class="container-wide mx-auto">
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeading
          title="Proven Results"
          subtitle="Numbers that speak for themselves"
          centered
        />
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <Card
          v-for="(metric, index) in metrics"
          :key="metric.label"
          class="text-center border-border/50 transition-all duration-500 ease-out hover:border-accent/30"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
        >
          <CardHeader class="pb-2">
            <CardTitle class="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
              {{ countUps[index].displayValue.value }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="text-sm font-medium text-foreground/80">
              {{ metric.label }}
            </CardDescription>
            <p class="text-xs text-muted-foreground mt-1 hidden sm:block">
              {{ metric.description }}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
