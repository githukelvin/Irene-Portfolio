#!/bin/bash

# This script sets up a minimal project structure for file-based routing

echo "Setting up minimal project structure..."

# 1. Create required directories
mkdir -p src/router
mkdir -p src/pages
mkdir -p src/composables
mkdir -p src/utils

# 2. Create pages
cat > src/pages/index.vue << 'EOL'
<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TheWelcome />
  </div>
</template>

<style scoped>
.home {
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
EOL

cat > src/pages/about.vue << 'EOL'
<template>
  <div class="about">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <h1>This is an about page</h1>
    <p>This page uses the file-based routing system.</p>
  </div>
</template>

<style scoped>
.about {
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
EOL

# 3. Create sample composable
cat > src/composables/useCounter.js << 'EOL'
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const reset = () => {
    count.value = initialValue
  }

  return {
    count,
    increment,
    decrement,
    reset
  }
}
EOL

# 4. Create sample utility
cat > src/utils/formatters.js << 'EOL'
/**
 * Format a date to a readable string
 * @param {Date|string|number} date - The date to format
 * @returns {string} The formatted date string
 */
export function formatDate(date) {
  const d = new Date(date)
  return d.toLocaleDateString()
}
EOL

# 5. Update App.vue
cat > src/App.vue << 'EOL'
<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
EOL

# # 6. Install dependencies
# echo "Installing required dependencies..."
# pnpm add -D unplugin-vue-router unplugin-auto-import unplugin-vue-components
# pnpm add @vueuse/core

# echo "✅ Setup complete! Your project is now configured with file-based routing and auto-imports."
