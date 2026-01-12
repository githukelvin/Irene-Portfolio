<script setup>
import ProfileHero from '@/components/about/ProfileHero.vue'
import SkillsSection from '@/components/about/SkillsSection.vue'
import ExperienceTimeline from '@/components/about/ExperienceTimeline.vue'
import ToolsSection from '@/components/about/ToolsSection.vue'
import TestimonialsSection from '@/components/about/TestimonialsSection.vue'
import ContactCTA from '@/components/sections/ContactCTA.vue'
import { useSEO, getPersonSchema } from '@/composables/useSEO'

useSEO({
  title: 'About Me',
  description: 'Learn about Wangari Irene - a passionate Graphic Designer and Digital Marketing Specialist with 5+ years of experience based in Nairobi, Kenya.',
  url: '/about',
  schema: getPersonSchema()
})
</script>

<template>
  <div class="pt-20">
    <ProfileHero />
    <SkillsSection />
    <ExperienceTimeline />
    <ToolsSection />
    <TestimonialsSection />
    <ContactCTA />
  </div>
</template>
