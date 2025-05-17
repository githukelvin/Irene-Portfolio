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
