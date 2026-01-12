<script setup>
import { Button } from '@/components/ui/button'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    default: 'all'
  }
})

const emit = defineEmits(['change'])
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button
      v-for="category in categories"
      :key="category.id"
      :variant="activeCategory === category.id ? 'default' : 'outline'"
      size="sm"
      :class="[
        'transition-all duration-300',
        activeCategory === category.id
          ? 'bg-accent text-accent-foreground hover:bg-accent/90'
          : 'hover:border-accent/50 hover:text-accent'
      ]"
      @click="emit('change', category.id)"
    >
      {{ category.label }}
      <span
        class="ml-1.5 text-xs opacity-70"
        :class="activeCategory === category.id ? 'text-accent-foreground/70' : 'text-muted-foreground'"
      >
        ({{ category.count }})
      </span>
    </Button>
  </div>
</template>
