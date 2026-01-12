/**
 * Scroll animation composable using Intersection Observer
 *
 * Provides reactive state for triggering animations when elements enter the viewport.
 * Respects prefers-reduced-motion for accessibility.
 */

import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

/**
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin, default '0px 0px -50px 0px'
 * @param {boolean} options.once - Only trigger once, default true
 * @returns {Object} { elementRef, isVisible }
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  const elementRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  // Check for reduced motion preference
  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const setupObserver = () => {
    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion()) {
      isVisible.value = true
      return
    }

    if (!elementRef.value || !(elementRef.value instanceof Element)) return

    // Disconnect existing observer if any
    if (observer) {
      observer.disconnect()
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(elementRef.value)
  }

  onMounted(() => {
    nextTick(() => {
      setupObserver()
    })
  })

  // Watch for ref changes in case element is conditionally rendered
  watch(elementRef, (newVal) => {
    if (newVal) {
      nextTick(() => {
        setupObserver()
      })
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible
  }
}

/**
 * Staggered animation for lists of elements
 *
 * @param {number} index - Item index in the list
 * @param {number} baseDelay - Base delay in ms, default 100
 * @returns {Object} CSS transition delay style
 */
export function useStaggerDelay(index, baseDelay = 100) {
  return {
    transitionDelay: `${index * baseDelay}ms`
  }
}
