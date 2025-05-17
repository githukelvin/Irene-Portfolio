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
