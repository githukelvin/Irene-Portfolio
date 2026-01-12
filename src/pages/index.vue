<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturedWork from '@/components/sections/FeaturedWork.vue'
import MetricsSection from '@/components/sections/MetricsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AboutPreview from '@/components/sections/AboutPreview.vue'
import ContactCTA from '@/components/sections/ContactCTA.vue'
import { useSEO, getBusinessSchema } from '@/composables/useSEO'

useSEO({
  url: '/',
  schema: getBusinessSchema()
})
</script>

<template>
  <div>
    <HeroSection
      name="Wangari Irene"
      title="Graphic Designer & Digital Marketer"
      description="Creative Designer & Digital Marketing Specialist based in Nairobi, Kenya. Two experts in one — delivering complete creative solutions with proven results."
    />

    <FeaturedWork />

    <MetricsSection />

    <ServicesSection />

    <AboutPreview />

    <ContactCTA />
  </div>
</template>
