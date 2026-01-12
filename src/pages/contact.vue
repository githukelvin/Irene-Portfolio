<script setup>
import SectionHeading from '@/components/common/SectionHeading.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
import FAQSection from '@/components/contact/FAQSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: 'Contact',
  description: 'Get in touch with Wangari Irene for brand identity design, digital marketing, and creative services. Based in Nairobi, Kenya - available worldwide.',
  url: '/contact'
})

const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 })
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section ref="heroRef" class="px-6 py-12">
      <div class="container-wide mx-auto">
        <div
          class="text-center max-w-2xl mx-auto transition-all duration-700 ease-out"
          :class="heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <SectionHeading
            title="Let's Create Something Amazing"
            subtitle="Ready to start your project? Get in touch and let's discuss how I can help bring your vision to life."
            size="large"
            centered
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="px-6 pb-16">
      <div class="container-wide mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <!-- Contact Form - Takes 3 columns -->
          <div class="lg:col-span-3">
            <ContactForm />
          </div>

          <!-- Contact Info - Takes 2 columns -->
          <div class="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection />
  </div>
</template>
