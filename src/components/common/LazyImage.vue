<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Skeleton } from '@/components/ui/skeleton'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: String,
    default: '16/9'
  },
  placeholder: {
    type: String,
    default: null
  },
  eager: {
    type: Boolean,
    default: false
  }
})

const imageRef = ref(null)
const containerRef = ref(null)
const isLoaded = ref(false)
const isInView = ref(false)
const hasError = ref(false)

let observer = null

const handleLoad = () => {
  isLoaded.value = true
}

const handleError = () => {
  hasError.value = true
  isLoaded.value = true
}

onMounted(() => {
  if (props.eager) {
    isInView.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView.value = true
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '100px 0px',
      threshold: 0
    }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div
    ref="containerRef"
    class="relative overflow-hidden bg-muted"
    :style="{ aspectRatio }"
  >
    <!-- Skeleton loader -->
    <Skeleton
      v-if="!isLoaded"
      class="absolute inset-0 w-full h-full"
    />

    <!-- Actual image -->
    <img
      v-if="isInView && !hasError"
      ref="imageRef"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-opacity duration-300"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      loading="lazy"
      @load="handleLoad"
      @error="handleError"
    />

    <!-- Error state -->
    <div
      v-if="hasError"
      class="absolute inset-0 flex items-center justify-center bg-muted"
    >
      <div class="text-center text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mx-auto mb-2 opacity-50"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <span class="text-xs">Image unavailable</span>
      </div>
    </div>
  </div>
</template>
