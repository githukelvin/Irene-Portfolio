/**
 * Count-up animation composable
 *
 * Animates a number from 0 to a target value when triggered.
 * Respects prefers-reduced-motion for accessibility.
 */

import { ref, watch } from 'vue'

/**
 * @param {number|string} endValue - Target value (can include suffix like '+' or '%')
 * @param {Object} options - Animation options
 * @param {number} options.duration - Animation duration in ms, default 2000
 * @param {boolean} options.startOnMount - Start immediately, default false
 * @returns {Object} { displayValue, start, reset }
 */
export function useCountUp(endValue, options = {}) {
  const {
    duration = 2000,
    startOnMount = false
  } = options

  // Parse the numeric value and suffix
  const parseValue = (val) => {
    const str = String(val)
    const match = str.match(/^([\d.]+)(.*)$/)
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2] || ''
      }
    }
    return { number: 0, suffix: '' }
  }

  const { number: targetNumber, suffix } = parseValue(endValue)

  const displayValue = ref(startOnMount ? String(endValue) : `0${suffix}`)
  const isAnimating = ref(false)
  let animationFrame = null

  // Check for reduced motion preference
  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  // Easing function (ease-out)
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

  /**
   * Start the count-up animation
   */
  const start = () => {
    // If reduced motion, show final value immediately
    if (prefersReducedMotion()) {
      displayValue.value = String(endValue)
      return
    }

    if (isAnimating.value) return
    isAnimating.value = true

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)

      const currentNumber = Math.floor(easedProgress * targetNumber)

      // Format the display value
      if (targetNumber >= 100) {
        displayValue.value = `${currentNumber}${suffix}`
      } else if (targetNumber >= 10) {
        displayValue.value = `${currentNumber}${suffix}`
      } else {
        // For small numbers or percentages, show decimal
        const decimalPlaces = String(targetNumber).includes('.') ? 1 : 0
        displayValue.value = `${(easedProgress * targetNumber).toFixed(decimalPlaces)}${suffix}`
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        displayValue.value = String(endValue)
        isAnimating.value = false
      }
    }

    animationFrame = requestAnimationFrame(animate)
  }

  /**
   * Reset the counter to 0
   */
  const reset = () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
    isAnimating.value = false
    displayValue.value = `0${suffix}`
  }

  return {
    displayValue,
    start,
    reset,
    isAnimating
  }
}

/**
 * Hook to trigger count-up when element becomes visible
 *
 * @param {Ref<boolean>} isVisible - Visibility ref from useScrollAnimation
 * @param {number|string} endValue - Target value
 * @param {Object} options - Count-up options
 */
export function useCountUpOnVisible(isVisible, endValue, options = {}) {
  const countUp = useCountUp(endValue, options)

  watch(isVisible, (visible) => {
    if (visible) {
      countUp.start()
    }
  }, { immediate: true })

  return countUp
}
