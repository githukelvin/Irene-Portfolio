<script setup>
import { Separator } from '@/components/ui/separator'

const currentYear = new Date().getFullYear()

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/wangari-irene',
    icon: 'linkedin'
  },
  {
    name: 'Behance',
    url: 'https://behance.net/wangari-irene',
    icon: 'behance'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/qoi_tec',
    icon: 'instagram'
  }
]
</script>

<template>
  <footer class="border-t border-border bg-card/50">
    <div class="container-wide mx-auto px-6 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Brand Section -->
        <div class="space-y-4">
          <RouterLink
            to="/"
            class="text-2xl font-bold tracking-tight inline-block"
            style="font-family: var(--font-heading)"
          >
            Qoi_tec
          </RouterLink>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Creative Designer & Digital Marketing Specialist based in Nairobi, Kenya.
            Two experts in one.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
            Navigation
          </h4>
          <nav class="flex flex-col gap-2">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="text-foreground/70 hover:text-accent transition-colors text-sm w-fit"
            >
              {{ link.name }}
            </RouterLink>
          </nav>
        </div>

        <!-- Contact & Social -->
        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
            Get in Touch
          </h4>
          <div class="space-y-2 text-sm">
            <a
              href="mailto:rj.wangari@gmail.com"
              class="text-foreground/70 hover:text-accent transition-colors block"
            >
              rj.wangari@gmail.com
            </a>
            <p class="text-foreground/70">
              Nairobi, Kenya
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4 pt-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-foreground/50 hover:text-accent transition-colors"
              :aria-label="social.name"
            >
              <!-- LinkedIn -->
              <svg
                v-if="social.icon === 'linkedin'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <!-- Behance -->
              <svg
                v-if="social.icon === 'behance'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
              <!-- Instagram -->
              <svg
                v-if="social.icon === 'instagram'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-8" />

      <!-- Copyright -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {{ currentYear }} Wangari Irene / Qoi_tec brands. All rights reserved.</p>
        <p class="text-xs">
          Designed & Built with Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>
