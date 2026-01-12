<script setup>
import { Badge } from '@/components/ui/badge'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const experiences = [
  {
    period: '2022 - Present',
    title: 'Founder & Creative Director',
    company: 'Qoi_tec Brands',
    description: 'Leading a creative agency specializing in brand identity, digital marketing, and social media management for diverse clients across Kenya and beyond.',
    highlights: ['Brand Strategy', 'Team Leadership', 'Client Relations']
  },
  {
    period: '2020 - 2022',
    title: 'Senior Graphic Designer',
    company: 'Creative Agency Nairobi',
    description: 'Designed brand identities, marketing materials, and digital assets for local and international clients. Led design projects from concept to completion.',
    highlights: ['Brand Identity', 'Print Design', 'Art Direction']
  },
  {
    period: '2019 - 2020',
    title: 'Digital Marketing Specialist',
    company: 'GoCare Educational Services',
    description: 'Developed and executed digital marketing campaigns that achieved 280% ROI. Managed social media presence and content strategy.',
    highlights: ['Campaign Management', 'Social Media', 'Analytics']
  },
  {
    period: '2018 - 2019',
    title: 'Junior Graphic Designer',
    company: 'Design Studio Kenya',
    description: 'Started professional design career creating social media graphics, promotional materials, and assisting senior designers on brand projects.',
    highlights: ['Social Media Design', 'Print Materials', 'Collaboration']
  }
]
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6">
    <div class="container-wide mx-auto">
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in design and marketing"
          centered
        />
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <!-- Timeline items -->
          <div
            v-for="(experience, index) in experiences"
            :key="experience.period"
            class="relative mb-12 last:mb-0"
          >
            <div
              class="flex flex-col md:flex-row gap-8 transition-all duration-500 ease-out"
              :class="[
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              ]"
              :style="{ transitionDelay: `${200 + index * 150}ms` }"
            >
              <!-- Content -->
              <div
                class="flex-1 pl-8 md:pl-0"
                :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'"
              >
                <Badge variant="outline" class="mb-2">{{ experience.period }}</Badge>
                <h3 class="text-xl font-semibold mb-1" style="font-family: var(--font-heading)">
                  {{ experience.title }}
                </h3>
                <p class="text-accent font-medium mb-3">{{ experience.company }}</p>
                <p class="text-muted-foreground mb-4 leading-relaxed">
                  {{ experience.description }}
                </p>
                <div
                  class="flex flex-wrap gap-2"
                  :class="index % 2 === 0 ? 'md:justify-end' : ''"
                >
                  <Badge
                    v-for="highlight in experience.highlights"
                    :key="highlight"
                    variant="secondary"
                    class="text-xs"
                  >
                    {{ highlight }}
                  </Badge>
                </div>
              </div>

              <!-- Timeline dot -->
              <div class="absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 z-10" />

              <!-- Empty space for alternating layout -->
              <div class="hidden md:block flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
