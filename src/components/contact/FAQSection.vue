<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I offer a comprehensive range of creative services including brand identity design (logos, brand guidelines, visual systems), digital marketing (social media marketing, content strategy, paid advertising), marketing collateral (business cards, brochures, flyers), and social media management. I can also provide combined design and marketing packages for complete brand solutions.'
  },
  {
    question: 'What is your typical project process?',
    answer: 'My process typically involves four phases: Discovery (understanding your business, goals, and target audience), Strategy (developing concepts and approaches), Creation (designing and refining deliverables with your feedback), and Launch (final delivery with guidelines and support). Throughout the process, I maintain open communication and provide regular updates.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A logo design typically takes 2-3 weeks, a complete brand identity 4-6 weeks, and marketing campaigns 2-4 weeks for setup and ongoing management. During our initial consultation, I\'ll provide a detailed timeline specific to your project.'
  },
  {
    question: 'What are your rates?',
    answer: 'My rates depend on the project scope and requirements. I offer both project-based pricing and retainer packages for ongoing work. After understanding your needs during our initial consultation, I\'ll provide a detailed quote. I believe in transparent pricing with no hidden fees.'
  },
  {
    question: 'Do you work with clients outside Kenya?',
    answer: 'Absolutely! I work with clients worldwide. Thanks to modern communication tools, I can collaborate effectively regardless of location. I\'ve successfully completed projects for clients across Africa, Europe, and North America. Time zone differences are easily managed with async communication and scheduled calls.'
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'To get started, I\'ll need to understand your business, target audience, and project goals. This usually involves a brief questionnaire and an initial consultation call. For design projects, any existing brand materials or inspiration references are helpful. For marketing projects, access to your current analytics and marketing platforms helps inform strategy.'
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
          title="Frequently Asked Questions"
          subtitle="Common questions about working with me"
          centered
        />
      </div>

      <div
        class="max-w-3xl mx-auto transition-all duration-700 ease-out delay-200"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem
            v-for="(faq, index) in faqs"
            :key="index"
            :value="`item-${index}`"
            class="border-b border-border"
          >
            <AccordionTrigger class="text-left hover:text-accent hover:no-underline py-4">
              {{ faq.question }}
            </AccordionTrigger>
            <AccordionContent class="text-muted-foreground pb-4">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <!-- Additional Help -->
      <div
        class="text-center mt-12 transition-all duration-700 ease-out delay-300"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="text-muted-foreground">
          Still have questions?
          <a href="mailto:rj.wangari@gmail.com" class="text-accent hover:underline">
            Send me an email
          </a>
          and I'll be happy to help.
        </p>
      </div>
    </div>
  </section>
</template>
