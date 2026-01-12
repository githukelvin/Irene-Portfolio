<script setup>
import { Card, CardContent } from '@/components/ui/card'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const testimonials = [
  {
    quote: "Wangari transformed our brand completely. Her ability to understand our vision and translate it into stunning visuals exceeded all expectations. The ROI on our marketing campaign was phenomenal.",
    author: 'James Mwangi',
    role: 'CEO',
    company: 'GoCare Educational Services',
    rating: 5
  },
  {
    quote: "Working with Irene was a game-changer for our startup. She delivered a brand identity that perfectly captures who we are. Her marketing insights helped us reach our target audience effectively.",
    author: 'Sarah Ochieng',
    role: 'Founder',
    company: 'TechStart Kenya',
    rating: 5
  },
  {
    quote: "Exceptional creativity combined with strategic thinking. Irene doesn't just design—she creates experiences. Our social media presence has never looked better, and engagement has skyrocketed.",
    author: 'Michael Kimani',
    role: 'Marketing Director',
    company: 'Aroma Coffee House',
    rating: 5
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
          title="Client Testimonials"
          subtitle="What clients say about working with me"
          centered
        />
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <Card
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          class="transition-all duration-500 ease-out hover:border-accent/50"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
        >
          <CardContent class="p-6">
            <!-- Rating Stars -->
            <div class="flex gap-1 mb-4">
              <svg
                v-for="star in testimonial.rating"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="text-accent"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>

            <!-- Quote -->
            <blockquote class="text-muted-foreground leading-relaxed mb-6 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="text-accent/20 absolute -top-2 -left-2"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p class="pl-4">{{ testimonial.quote }}</p>
            </blockquote>

            <!-- Author -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span class="text-accent font-semibold text-sm">
                  {{ testimonial.author.split(' ').map(n => n[0]).join('') }}
                </span>
              </div>
              <div>
                <p class="font-semibold text-sm">{{ testimonial.author }}</p>
                <p class="text-xs text-muted-foreground">
                  {{ testimonial.role }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
