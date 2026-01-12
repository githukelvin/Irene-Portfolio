<script setup>
import { Card, CardContent } from '@/components/ui/card'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const skillCategories = [
  {
    title: 'Design Skills',
    icon: 'palette',
    skills: [
      { name: 'Brand Identity Design', level: 95 },
      { name: 'Logo Design', level: 98 },
      { name: 'Print Design', level: 90 },
      { name: 'Social Media Graphics', level: 95 },
      { name: 'UI/UX Design', level: 75 }
    ]
  },
  {
    title: 'Marketing Skills',
    icon: 'trending',
    skills: [
      { name: 'Social Media Marketing', level: 92 },
      { name: 'Content Strategy', level: 88 },
      { name: 'Email Marketing', level: 85 },
      { name: 'SEO/SEM', level: 78 },
      { name: 'Analytics & Reporting', level: 85 }
    ]
  }
]
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6 bg-card/30">
    <div class="container-wide mx-auto">
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A blend of creative design and strategic marketing capabilities"
          centered
        />
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <Card
          v-for="(category, catIndex) in skillCategories"
          :key="category.title"
          class="transition-all duration-500 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + catIndex * 100}ms` }"
        >
          <CardContent class="p-6">
            <!-- Category Header -->
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <!-- Palette Icon -->
                <svg
                  v-if="category.icon === 'palette'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                <!-- Trending Icon -->
                <svg
                  v-if="category.icon === 'trending'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              <h3 class="text-lg font-semibold" style="font-family: var(--font-heading)">
                {{ category.title }}
              </h3>
            </div>

            <!-- Skills List -->
            <div class="space-y-4">
              <div
                v-for="(skill, skillIndex) in category.skills"
                :key="skill.name"
                class="transition-all duration-500"
                :style="{ transitionDelay: `${300 + catIndex * 100 + skillIndex * 50}ms` }"
              >
                <div class="flex justify-between mb-1.5">
                  <span class="text-sm font-medium">{{ skill.name }}</span>
                  <span class="text-sm text-muted-foreground">{{ skill.level }}%</span>
                </div>
                <div class="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    class="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
