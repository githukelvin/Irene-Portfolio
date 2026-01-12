<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useProjects } from '@/composables/useProjects'

const { featuredProjects, selectProject } = useProjects()
const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const categoryLabels = {
  branding: 'Brand Identity',
  marketing: 'Digital Marketing',
  'social-media': 'Social Media'
}
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6">
    <div class="container-wide mx-auto">
      <div
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeading
          title="Featured Work"
          subtitle="Selected projects showcasing design & marketing expertise"
          class="mb-0"
        />
        <Button variant="outline" as-child class="w-fit">
          <RouterLink to="/work">View All Work</RouterLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="group cursor-pointer overflow-hidden transition-all duration-500 ease-out hover:border-accent/50 hover:-translate-y-1"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
          as-child
        >
          <RouterLink :to="'/work'" class="block">
            <!-- Project Image -->
            <div class="aspect-[4/3] bg-muted/30 relative overflow-hidden">
              <img
                :src="project.images.thumbnail"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
            </div>

            <CardHeader class="pb-2">
              <Badge variant="secondary" class="w-fit mb-2 text-xs">
                {{ categoryLabels[project.category] }}
              </Badge>
              <CardTitle class="text-lg group-hover:text-accent transition-colors">
                {{ project.title }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground line-clamp-2">
                {{ project.description }}
              </p>
            </CardContent>
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
