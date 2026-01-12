<script setup>
import { Badge } from '@/components/ui/badge'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const categoryColors = {
  branding: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  marketing: 'bg-green-500/10 text-green-400 border-green-500/20',
  'social-media': 'bg-blue-500/10 text-blue-400 border-blue-500/20'
}

const categoryLabels = {
  branding: 'Branding',
  marketing: 'Marketing',
  'social-media': 'Social Media'
}
</script>

<template>
  <article
    class="group cursor-pointer"
    @click="emit('select', project)"
  >
    <div class="relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <!-- Image Container -->
      <div class="aspect-[4/3] relative overflow-hidden bg-muted">
        <!-- Project Image -->
        <img
          :src="project.images.thumbnail"
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <!-- Category badge floating on image -->
        <div class="absolute top-4 left-4 z-10">
          <Badge
            variant="secondary"
            :class="categoryColors[project.category]"
            class="backdrop-blur-sm text-xs font-medium"
          >
            {{ categoryLabels[project.category] }}
          </Badge>
        </div>

        <!-- Hover overlay -->
        <div class="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span class="inline-flex items-center gap-2 text-accent font-medium">
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-5">
        <h3 class="text-lg font-semibold mb-2 group-hover:text-accent transition-colors" style="font-family: var(--font-heading)">
          {{ project.title }}
        </h3>

        <p class="text-sm text-muted-foreground mb-4 line-clamp-2">
          {{ project.description }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags.slice(0, 3)"
            :key="tag"
            class="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
