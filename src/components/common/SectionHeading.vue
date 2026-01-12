<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['small', 'default', 'large'].includes(value)
  }
})
</script>

<template>
  <div
    class="mb-8 md:mb-12"
    :class="{ 'text-center': centered }"
  >
    <h2
      class="font-bold tracking-tight"
      :class="[
        size === 'small' ? 'text-2xl md:text-3xl' : '',
        size === 'default' ? 'text-3xl md:text-4xl' : '',
        size === 'large' ? 'text-4xl md:text-5xl' : ''
      ]"
      style="font-family: var(--font-heading)"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-3 text-muted-foreground"
      :class="[
        size === 'small' ? 'text-base' : '',
        size === 'default' ? 'text-lg' : '',
        size === 'large' ? 'text-xl' : ''
      ]"
    >
      {{ subtitle }}
    </p>
    <slot />
  </div>
</template>
