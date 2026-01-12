/**
 * Theme composable for dark/light mode management
 *
 * Features:
 * - Persists preference in localStorage
 * - Respects system preference as fallback
 * - Dark mode is the default (Qoi_tec brand)
 * - Provides reactive theme state
 */

import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'qoitec-theme'

// Global reactive state (singleton pattern)
const isDark = ref(true)
const isInitialized = ref(false)

/**
 * Get the user's preferred theme from storage or system preference
 * Default to dark mode per brand guidelines
 */
function getPreferredTheme() {
  // Check localStorage first
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light') return false
    if (stored === 'dark') return true
  }

  // Check system preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDark.matches) return true
    // If user explicitly prefers light, respect that
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)')
    if (prefersLight.matches) return false
  }

  // Default to dark mode (brand default)
  return true
}

/**
 * Apply theme to the document
 */
function applyTheme(dark) {
  if (typeof document === 'undefined') return

  const root = document.documentElement

  if (dark) {
    root.classList.remove('light')
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
}

/**
 * Save theme preference to localStorage
 */
function saveTheme(dark) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
}

/**
 * useTheme composable
 *
 * @returns {Object} Theme state and controls
 * @property {Ref<boolean>} isDark - Whether dark mode is active
 * @property {Function} toggleTheme - Toggle between dark and light
 * @property {Function} setDark - Set dark mode explicitly
 * @property {Function} setLight - Set light mode explicitly
 */
export function useTheme() {
  // Initialize theme on first use
  onMounted(() => {
    if (!isInitialized.value) {
      isDark.value = getPreferredTheme()
      applyTheme(isDark.value)
      isInitialized.value = true

      // Listen for system preference changes
      if (typeof window !== 'undefined' && window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', (e) => {
          // Only auto-switch if user hasn't set a preference
          const stored = localStorage.getItem(STORAGE_KEY)
          if (!stored) {
            isDark.value = e.matches
          }
        })
      }
    }
  })

  // Watch for changes and apply
  watch(isDark, (newValue) => {
    applyTheme(newValue)
    saveTheme(newValue)
  })

  /**
   * Toggle between dark and light mode
   */
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  /**
   * Set dark mode
   */
  function setDark() {
    isDark.value = true
  }

  /**
   * Set light mode
   */
  function setLight() {
    isDark.value = false
  }

  return {
    isDark,
    toggleTheme,
    setDark,
    setLight
  }
}
