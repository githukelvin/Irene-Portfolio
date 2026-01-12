<script setup>
import SectionHeading from '@/components/common/SectionHeading.vue'
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import CategoryFilter from '@/components/portfolio/CategoryFilter.vue'
import ProjectModal from '@/components/portfolio/ProjectModal.vue'
import { useProjects } from '@/composables/useProjects'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: 'Work & Portfolio',
  description: 'Explore my portfolio of brand identity, digital marketing, and social media projects. See case studies with measurable results.',
  url: '/work'
})

const {
  categories,
  activeCategory,
  filteredProjects,
  selectedProject,
  setCategory,
  selectProject,
  closeProject
} = useProjects()

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
</script>

<template>
  <div class="pt-24 pb-16">
    <section ref="sectionRef" class="px-6">
      <div class="container-wide mx-auto">
        <!-- Header -->
        <div
          class="transition-all duration-700 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <SectionHeading
            title="My Work"
            subtitle="A selection of projects showcasing design and marketing expertise"
            size="large"
          />
        </div>

        <!-- Filter -->
        <div
          class="mb-12 transition-all duration-700 ease-out delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <CategoryFilter
            :categories="categories"
            :active-category="activeCategory"
            @change="setCategory"
          />
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="transition-all duration-500 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${200 + index * 100}ms` }"
          >
            <ProjectCard
              :project="project"
              @select="selectProject"
            />
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredProjects.length === 0"
          class="text-center py-16"
        >
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-2">No projects found</h3>
          <p class="text-muted-foreground">
            Try selecting a different category
          </p>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <ProjectModal
      :project="selectedProject"
      :open="!!selectedProject"
      @close="closeProject"
    />
  </div>
</template>
