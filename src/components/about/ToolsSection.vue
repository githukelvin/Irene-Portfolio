<script setup>
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const toolCategories = [
  {
    category: 'Design Tools',
    tools: [
      { name: 'Adobe Illustrator', icon: 'Ai' },
      { name: 'Adobe Photoshop', icon: 'Ps' },
      { name: 'Adobe InDesign', icon: 'Id' },
      { name: 'Figma', icon: 'Fig' },
      { name: 'Canva', icon: 'Ca' }
    ]
  },
  {
    category: 'Marketing Tools',
    tools: [
      { name: 'Google Analytics', icon: 'GA' },
      { name: 'Meta Ads Manager', icon: 'Meta' },
      { name: 'Google Ads', icon: 'Ads' },
      { name: 'Mailchimp', icon: 'MC' },
      { name: 'Hootsuite', icon: 'HS' }
    ]
  },
  {
    category: 'Productivity',
    tools: [
      { name: 'Notion', icon: 'No' },
      { name: 'Slack', icon: 'Sl' },
      { name: 'Trello', icon: 'Tr' },
      { name: 'Google Workspace', icon: 'GW' },
      { name: 'Zoom', icon: 'Zm' }
    ]
  }
]
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6 bg-card/30">
    <div class="container-wide mx-auto">
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeading
          title="Tools & Technologies"
          subtitle="Software and platforms I use daily"
          centered
        />
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(category, catIndex) in toolCategories"
          :key="category.category"
          class="transition-all duration-500 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + catIndex * 100}ms` }"
        >
          <h3 class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 text-center">
            {{ category.category }}
          </h3>

          <div class="space-y-3">
            <div
              v-for="(tool, toolIndex) in category.tools"
              :key="tool.name"
              class="group flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-accent/50 transition-all duration-300"
              :style="{ transitionDelay: `${300 + catIndex * 100 + toolIndex * 50}ms` }"
            >
              <!-- Tool Icon -->
              <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                {{ tool.icon }}
              </div>
              <span class="font-medium group-hover:text-accent transition-colors">
                {{ tool.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
