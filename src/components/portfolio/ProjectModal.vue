<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
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

// Handle dialog close - prevent when zoomed
const handleDialogClose = () => {
  if (isZoomed.value) return
  emit('close')
}

const categoryLabels = {
  branding: 'Branding',
  marketing: 'Marketing',
  'social-media': 'Social Media'
}

// Gallery state
const currentImageIndex = ref(0)
const isZoomed = ref(false)
const isNavigating = ref(false)

// Get all gallery images
const allImages = computed(() => {
  if (!props.project) return []
  return props.project.images.gallery || []
})

const currentImage = computed(() => {
  return allImages.value[currentImageIndex.value] || ''
})

const totalImages = computed(() => allImages.value.length)

// Navigation functions
const nextImage = () => {
  isNavigating.value = true
  if (currentImageIndex.value < totalImages.value - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0 // Loop back to start
  }
  setTimeout(() => { isNavigating.value = false }, 100)
}

const prevImage = () => {
  isNavigating.value = true
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = totalImages.value - 1 // Loop to end
  }
  setTimeout(() => { isNavigating.value = false }, 100)
}

const goToImage = (index) => {
  currentImageIndex.value = index
}

// Zoom functions
const openZoom = () => {
  isZoomed.value = true
  // Hide dialog overlay to allow zoom interaction
  const overlay = document.querySelector('[data-slot="dialog-overlay"]')
  if (overlay) {
    overlay.style.opacity = '0'
    overlay.style.pointerEvents = 'none'
  }
}

const closeZoom = () => {
  // Don't close if we're navigating
  if (isNavigating.value) return

  isZoomed.value = false
  // Restore dialog overlay
  const overlay = document.querySelector('[data-slot="dialog-overlay"]')
  if (overlay) {
    overlay.style.opacity = ''
    overlay.style.pointerEvents = ''
  }
}

// Reset index when project changes
watch(() => props.project, () => {
  currentImageIndex.value = 0
  if (isZoomed.value) {
    closeZoom()
  }
})

// Keyboard navigation (only for modal, not zoom)
const handleKeydown = (e) => {
  if (!props.open || isZoomed.value) return

  // Navigate images in modal view only
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

// Global keyboard handler for zoom overlay
const handleGlobalKeydown = (e) => {
  if (!isZoomed.value) return

  if (e.key === 'Escape') {
    closeZoom()
    e.preventDefault()
  } else if (e.key === 'ArrowRight') {
    nextImage()
    e.preventDefault()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
    e.preventDefault()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
  // Clean up overlay styles if zoomed when unmounting
  const overlay = document.querySelector('[data-slot="dialog-overlay"]')
  if (overlay) {
    overlay.style.opacity = ''
    overlay.style.pointerEvents = ''
  }
})
</script>

<template>
  <Dialog :open="open" @update:open="handleDialogClose">
    <DialogContent
      class="w-full max-w-5xl max-h-[90vh] p-0 gap-0 overflow-hidden"
      :class="{ 'opacity-0 pointer-events-none': isZoomed }"
      :style="isZoomed ? { zIndex: -1 } : {}"
      @keydown="handleKeydown"
    >
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

          <!-- Interactive Image Gallery -->
          <div class="mb-8">
            <!-- Main Image with Navigation -->
            <div class="relative group rounded-lg overflow-hidden bg-muted">
              <!-- Main Image -->
              <div class="aspect-[16/10] relative">
                <img
                  :src="currentImage"
                  :alt="`${project.title} - Image ${currentImageIndex + 1}`"
                  class="w-full h-full object-contain bg-black/5 cursor-zoom-in"
                  @click="openZoom"
                  title="Click to view full size"
                />

                <!-- Image Counter -->
                <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {{ currentImageIndex + 1 }} / {{ totalImages }}
                </div>

                <!-- Previous Button -->
                <button
                  v-if="totalImages > 1"
                  @click="prevImage"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>

                <!-- Next Button -->
                <button
                  v-if="totalImages > 1"
                  @click="nextImage"
                  class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>

              <!-- Thumbnail Navigation -->
              <div v-if="totalImages > 1" class="flex gap-2 p-3 bg-muted/50 justify-center">
                <button
                  v-for="(image, index) in allImages"
                  :key="index"
                  @click="goToImage(index)"
                  class="relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all"
                  :class="index === currentImageIndex ? 'border-accent ring-2 ring-accent/30' : 'border-transparent hover:border-accent/50 opacity-60 hover:opacity-100'"
                  :aria-label="`Go to image ${index + 1}`"
                >
                  <img
                    :src="image"
                    :alt="`Thumbnail ${index + 1}`"
                    class="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>

            <!-- Navigation hint -->
            <p v-if="totalImages > 1" class="text-xs text-muted-foreground text-center mt-2">
              Use arrow keys to navigate | Click image to zoom
            </p>
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

          <!-- Footer Actions -->
          <div class="flex justify-end gap-3 pt-6 border-t">
            <Button variant="outline" @click="emit('close')">
              Close
            </Button>
            <Button class="bg-accent text-accent-foreground hover:bg-accent/90" as-child>
              <RouterLink to="/contact" @click="emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Start Similar Project
              </RouterLink>
            </Button>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>

  <!-- Fullscreen Zoom Overlay -->
  <Teleport to="body">
    <Transition name="zoom">
      <div
        v-if="isZoomed && project"
        class="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
        @click="closeZoom"
      >
        <!-- Close Button -->
        <button
          @click.stop="closeZoom"
          class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close zoom"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>

        <!-- Navigation in zoom mode -->
        <button
          v-if="totalImages > 1"
          @click.stop="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        <button
          v-if="totalImages > 1"
          @click.stop="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>

        <!-- Zoomed Image (actual size, scrollable) -->
        <div
          class="zoom-scroll-container overflow-auto z-10"
          @click.stop
        >
          <img
            :src="currentImage"
            :alt="`${project.title} - Image ${currentImageIndex + 1} (Full size)`"
            class="block cursor-zoom-out"
            @click="closeZoom"
          />
        </div>

        <!-- Image Counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
          {{ currentImageIndex + 1 }} / {{ totalImages }} - Click or press Esc to close
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Zoom scroll container */
.zoom-scroll-container {
  max-width: 90vw;
  max-height: 85vh;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.zoom-scroll-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.zoom-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.zoom-scroll-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.zoom-scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Zoom transition */
.zoom-enter-active,
.zoom-leave-active {
  transition: opacity 0.2s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
}

.zoom-enter-active img,
.zoom-leave-active img {
  transition: transform 0.2s ease;
}

.zoom-enter-from img,
.zoom-leave-to img {
  transform: scale(0.95);
}
</style>
