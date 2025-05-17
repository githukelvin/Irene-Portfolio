import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    // File-based routing - Must come before Vue plugin
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      dts: 'src/typed-router.d.ts',
    }),

    // Vue plugin
    vue(),

    // JSX support
    vueJsx(),

    // Auto-import components
    Components({
      dirs: ['src/components'],
      dts: true,
    }),

    // Auto-import composables and utilities
    AutoImport({
      imports: ['vue', VueRouterAutoImports, '@vueuse/core', 'pinia'],
      dirs: ['./src/composables/', './src/utils/'],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },

  // Basic build configuration
  build: {
    chunkSizeWarningLimit: 2000,
  },
})
