<script setup>
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: infoRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const contactMethods = [
  {
    icon: 'email',
    label: 'Email',
    value: 'rj.wangari@gmail.com',
    href: 'mailto:rj.wangari@gmail.com',
    description: 'Best for project inquiries'
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+254 700 000 000',
    href: 'tel:+254700000000',
    description: 'Mon-Fri, 9am-6pm EAT'
  },
  {
    icon: 'location',
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
    description: 'Available for remote work worldwide'
  }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/wangari-irene',
    icon: 'linkedin'
  },
  {
    name: 'Behance',
    href: 'https://behance.net/wangari-irene',
    icon: 'behance'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/qoi_tec',
    icon: 'instagram'
  }
]
</script>

<template>
  <div
    ref="infoRef"
    class="space-y-6 transition-all duration-700 ease-out delay-100"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold mb-2" style="font-family: var(--font-heading)">
        Get in Touch
      </h2>
      <p class="text-muted-foreground">
        Have a project in mind? Let's discuss how I can help bring your vision to life.
      </p>
    </div>

    <!-- Contact Methods -->
    <div class="space-y-4">
      <Card
        v-for="(method, index) in contactMethods"
        :key="method.label"
        class="transition-all duration-300 hover:border-accent/50"
        :style="{ transitionDelay: `${200 + index * 100}ms` }"
      >
        <CardContent class="p-4">
          <component
            :is="method.href ? 'a' : 'div'"
            :href="method.href"
            class="flex items-start gap-4"
            :class="{ 'hover:text-accent transition-colors': method.href }"
          >
            <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <!-- Email Icon -->
              <svg
                v-if="method.icon === 'email'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <!-- Phone Icon -->
              <svg
                v-if="method.icon === 'phone'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <!-- Location Icon -->
              <svg
                v-if="method.icon === 'location'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-accent"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">{{ method.label }}</p>
              <p class="font-medium">{{ method.value }}</p>
              <p class="text-xs text-muted-foreground mt-1">{{ method.description }}</p>
            </div>
          </component>
        </CardContent>
      </Card>
    </div>

    <!-- Social Links -->
    <Card>
      <CardContent class="p-4">
        <p class="text-sm text-muted-foreground mb-4">Connect with me on social media</p>
        <div class="flex gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            :aria-label="social.name"
          >
            <!-- LinkedIn Icon -->
            <svg
              v-if="social.icon === 'linkedin'"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <!-- Behance Icon (using 'Be') -->
            <svg
              v-if="social.icon === 'behance'"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 9h6a3 3 0 1 1 0 6H2V9Z" />
              <path d="M2 15h7a3 3 0 1 1 0 6H2v-6Z" />
              <path d="M22 12h-8" />
              <path d="M14 12a4 4 0 1 1 8 0" />
              <path d="M16 6h4" />
            </svg>
            <!-- Instagram Icon -->
            <svg
              v-if="social.icon === 'instagram'"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>

    <!-- Availability Card -->
    <Card class="bg-accent/5 border-accent/20">
      <CardContent class="p-4">
        <div class="flex items-center gap-3">
          <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <div>
            <p class="font-medium">Currently Available</p>
            <p class="text-sm text-muted-foreground">Taking on new projects for Q1 2026</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
