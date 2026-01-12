<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

// Initialize theme on app mount
const { isDark } = useTheme()
const route = useRoute()

// Determine if current page should have transparent header (home page hero)
const isHomePage = computed(() => route.path === '/')

// Scroll to top on route change
const router = useRouter()
router.beforeEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader :transparent="isHomePage" />

    <main id="main-content" class="flex-1" tabindex="-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <TheFooter />
  </div>
</template>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
