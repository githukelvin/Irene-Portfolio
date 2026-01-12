<script setup>
import { Button } from '@/components/ui/button'

defineProps({
  name: {
    type: String,
    default: 'Wangari Irene'
  },
  title: {
    type: String,
    default: 'Graphic Designer & Digital Marketer'
  },
  description: {
    type: String,
    default: 'Creative Designer & Digital Marketing Specialist based in Nairobi, Kenya. Two experts in one — delivering complete creative solutions with proven results.'
  }
})

// Animate elements on mount
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <!-- Decorative circles -->
      <div
        class="absolute top-20 right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl transition-all duration-1000"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
      />
      <div
        class="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl transition-all duration-1000 delay-300"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
      />

      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>

    <div class="container-wide mx-auto px-6 lg:px-8 py-32 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Text Content -->
        <div class="order-2 lg:order-1 text-center lg:text-left">
          <!-- Greeting -->
          <div
            class="transition-all duration-700 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <div class="inline-flex items-center gap-2 mb-6">
              <span class="w-12 h-px bg-accent" />
              <span class="text-accent font-medium text-sm tracking-wider uppercase">Hello, I'm</span>
            </div>
          </div>

          <!-- Name -->
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 ease-out delay-100"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="font-family: var(--font-heading)"
          >
            <span class="block">{{ name.split(' ')[0] }}</span>
            <span class="block text-accent">{{ name.split(' ').slice(1).join(' ') }}</span>
          </h1>

          <!-- Title -->
          <p
            class="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 transition-all duration-700 ease-out delay-200"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="font-family: var(--font-heading)"
          >
            {{ title }}
          </p>

          <!-- Description -->
          <p
            class="text-base sm:text-lg text-muted-foreground/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-700 ease-out delay-300"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            {{ description }}
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 ease-out delay-400"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <Button size="lg" class="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300" as-child>
              <RouterLink to="/work">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </RouterLink>
            </Button>
            <Button variant="outline" size="lg" class="rounded-full px-8 border-2 hover:bg-foreground/5" as-child>
              <RouterLink to="/contact">Get in Touch</RouterLink>
            </Button>
          </div>

          <!-- Stats -->
          <div
            class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 transition-all duration-700 ease-out delay-500"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl font-bold text-accent" style="font-family: var(--font-heading)">500+</div>
              <div class="text-xs sm:text-sm text-muted-foreground">Projects Done</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl font-bold text-accent" style="font-family: var(--font-heading)">280%</div>
              <div class="text-xs sm:text-sm text-muted-foreground">Campaign ROI</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl font-bold text-accent" style="font-family: var(--font-heading)">5+</div>
              <div class="text-xs sm:text-sm text-muted-foreground">Years Exp.</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div
          class="order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'"
        >
          <div class="relative">
            <!-- Background shape -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-[2rem] transform rotate-6 scale-105" />

            <!-- Image container -->
            <div class="relative w-[280px] sm:w-[340px] lg:w-[400px] xl:w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-accent/10">
              <!-- Main image -->
              <img
                src="/images/profile/irene-portrait.jpg"
                alt="Wangari Irene - Graphic Designer & Digital Marketer"
                class="w-full h-full object-cover object-top"
              />

              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            <!-- Floating badge -->
            <div class="absolute -bottom-4 -left-4 sm:-left-8 bg-card border border-border rounded-2xl p-4 shadow-xl">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-sm">Available Now</div>
                  <div class="text-xs text-muted-foreground">Taking new projects</div>
                </div>
              </div>
            </div>

            <!-- Floating tools badge -->
            <div class="absolute -top-4 -right-4 sm:-right-8 bg-card border border-border rounded-2xl p-3 shadow-xl">
              <div class="flex items-center gap-2">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-xs font-bold text-[#FF0000]">Ai</div>
                  <div class="w-8 h-8 rounded-full bg-[#31A8FF]/10 flex items-center justify-center text-xs font-bold text-[#31A8FF]">Ps</div>
                  <div class="w-8 h-8 rounded-full bg-[#FF9A00]/10 flex items-center justify-center text-xs font-bold text-[#FF9A00]">Id</div>
                </div>
                <span class="text-xs text-muted-foreground">+5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      <div class="flex flex-col items-center gap-2">
        <span class="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
        <div class="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div class="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </div>
  </section>
</template>
