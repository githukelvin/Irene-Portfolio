<script setup>
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const props = defineProps({
  project: {
    type: Object,
    default: null
  },
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const categoryLabels = {
  branding: 'Branding',
  marketing: 'Marketing',
  'social-media': 'Social Media'
}
</script>

<template>
  <Dialog :open="open" @update:open="emit('close')">
    <DialogContent class="max-w-3xl max-h-[90vh] p-0 gap-0 overflow-hidden">
      <ScrollArea class="max-h-[90vh]">
        <div v-if="project" class="p-6">
          <!-- Header -->
          <DialogHeader class="mb-6">
            <div class="flex items-center gap-2 mb-2">
              <Badge variant="secondary">
                {{ categoryLabels[project.category] }}
              </Badge>
              <span class="text-sm text-muted-foreground">{{ project.year }}</span>
            </div>
            <DialogTitle class="text-2xl md:text-3xl" style="font-family: var(--font-heading)">
              {{ project.title }}
            </DialogTitle>
            <DialogDescription class="text-base">
              {{ project.description }}
            </DialogDescription>
          </DialogHeader>

          <!-- Hero Image -->
          <div class="aspect-video rounded-lg bg-muted mb-8 relative overflow-hidden">
            <img
              :src="project.images.hero"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Project Details Grid -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Challenge -->
            <div>
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2" style="font-family: var(--font-heading)">
                <span class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </span>
                The Challenge
              </h3>
              <p class="text-muted-foreground leading-relaxed">
                {{ project.challenge }}
              </p>
            </div>

            <!-- Solution -->
            <div>
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2" style="font-family: var(--font-heading)">
                <span class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent">
                    <path d="M12 2v4" />
                    <path d="m6.8 14-3.5 2" />
                    <path d="m20.7 16-3.5-2" />
                    <path d="M6.8 10 3.3 8" />
                    <path d="m20.7 8-3.5 2" />
                    <path d="m9 22 3-8 3 8" />
                    <path d="M8 6c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4l-3 3-3-3V6Z" />
                  </svg>
                </span>
                The Solution
              </h3>
              <p class="text-muted-foreground leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>

          <!-- Results -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2" style="font-family: var(--font-heading)">
              <span class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </span>
              Results
            </h3>
            <div class="grid sm:grid-cols-3 gap-4">
              <div
                v-for="(result, index) in project.results"
                :key="index"
                class="p-4 rounded-lg bg-accent/5 border border-accent/10"
              >
                <div class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent mt-0.5 flex-shrink-0">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span class="text-sm">{{ result }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools Used -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-3" style="font-family: var(--font-heading)">
              Tools Used
            </h3>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="tool in project.tools"
                :key="tool"
                variant="outline"
              >
                {{ tool }}
              </Badge>
            </div>
          </div>

          <!-- Project Gallery -->
          <div>
            <h3 class="text-lg font-semibold mb-4" style="font-family: var(--font-heading)">
              Project Gallery
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(image, index) in project.images.gallery"
                :key="index"
                class="aspect-square rounded-lg bg-muted relative overflow-hidden"
              >
                <img
                  :src="image"
                  :alt="`${project.title} - Image ${index + 1}`"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="flex justify-end gap-3 mt-8 pt-6 border-t">
            <Button variant="outline" @click="emit('close')">
              Close
            </Button>
            <Button class="bg-accent text-accent-foreground hover:bg-accent/90">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" x2="12" y1="2" y2="15" />
              </svg>
              Start Similar Project
            </Button>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
</template>
