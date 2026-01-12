<script setup>
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { elementRef: formRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

// Web3Forms Access Key - Get yours free at https://web3forms.com
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null

const serviceOptions = [
  'Brand Identity Design',
  'Digital Marketing',
  'Social Media Management',
  'Marketing Campaign',
  'Other'
]

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validate = () => {
  errors.value = {}

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = 'Please enter a valid email'
  }

  if (!form.value.subject.trim()) {
    errors.value.subject = 'Please select a service'
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
  } else if (form.value.message.trim().length < 20) {
    errors.value.message = 'Message must be at least 20 characters'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true
  submitStatus.value = null

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: form.value.name,
        email: form.value.email,
        subject: `Portfolio Inquiry: ${form.value.subject}`,
        message: form.value.message,
        from_name: 'Qoi_tec Portfolio',
      })
    })

    const result = await response.json()

    if (result.success) {
      submitStatus.value = 'success'
      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const isFormValid = computed(() => {
  return form.value.name && form.value.email && form.value.subject && form.value.message
})
</script>

<template>
  <div
    ref="formRef"
    class="transition-all duration-700 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
  <Card>
    <CardContent class="p-6 md:p-8">
      <h2 class="text-2xl font-bold mb-2" style="font-family: var(--font-heading)">
        Send a Message
      </h2>
      <p class="text-muted-foreground mb-6">
        Fill out the form below and I'll get back to you within 24 hours.
      </p>

      <!-- Success Message -->
      <div
        v-if="submitStatus === 'success'"
        role="alert"
        aria-live="polite"
        class="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
      >
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span class="font-medium">Message sent successfully!</span>
        </div>
        <p class="text-sm mt-1 opacity-80">Thank you for reaching out. I'll respond as soon as possible.</p>
      </div>

      <!-- Error Message -->
      <div
        v-if="submitStatus === 'error'"
        role="alert"
        aria-live="assertive"
        class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
      >
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" x2="9" y1="9" y2="15" />
            <line x1="9" x2="15" y1="9" y2="15" />
          </svg>
          <span class="font-medium">Something went wrong</span>
        </div>
        <p class="text-sm mt-1 opacity-80">Please try again or email me directly.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
        <!-- Name -->
        <div class="space-y-2">
          <Label for="name" :class="{ 'text-red-500': errors.name }">
            Your Name <span aria-hidden="true">*</span>
            <span class="sr-only">(required)</span>
          </Label>
          <Input
            id="name"
            v-model="form.name"
            placeholder="John Doe"
            autocomplete="name"
            :aria-invalid="errors.name ? 'true' : undefined"
            :aria-describedby="errors.name ? 'name-error' : undefined"
            :class="{ 'border-red-500 focus-visible:ring-red-500': errors.name }"
          />
          <p v-if="errors.name" id="name-error" class="text-sm text-red-500" role="alert">{{ errors.name }}</p>
        </div>

        <!-- Email -->
        <div class="space-y-2">
          <Label for="email" :class="{ 'text-red-500': errors.email }">
            Email Address <span aria-hidden="true">*</span>
            <span class="sr-only">(required)</span>
          </Label>
          <Input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="john@example.com"
            autocomplete="email"
            :aria-invalid="errors.email ? 'true' : undefined"
            :aria-describedby="errors.email ? 'email-error' : undefined"
            :class="{ 'border-red-500 focus-visible:ring-red-500': errors.email }"
          />
          <p v-if="errors.email" id="email-error" class="text-sm text-red-500" role="alert">{{ errors.email }}</p>
        </div>

        <!-- Service/Subject -->
        <div class="space-y-2">
          <Label for="subject" :class="{ 'text-red-500': errors.subject }">
            Service Interested In <span aria-hidden="true">*</span>
            <span class="sr-only">(required)</span>
          </Label>
          <select
            id="subject"
            v-model="form.subject"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            :class="{ 'border-red-500 focus-visible:ring-red-500': errors.subject }"
            :aria-invalid="errors.subject ? 'true' : undefined"
            :aria-describedby="errors.subject ? 'subject-error' : undefined"
          >
            <option value="" disabled>Select a service</option>
            <option v-for="option in serviceOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          <p v-if="errors.subject" id="subject-error" class="text-sm text-red-500" role="alert">{{ errors.subject }}</p>
        </div>

        <!-- Message -->
        <div class="space-y-2">
          <Label for="message" :class="{ 'text-red-500': errors.message }">
            Your Message <span aria-hidden="true">*</span>
            <span class="sr-only">(required)</span>
          </Label>
          <Textarea
            id="message"
            v-model="form.message"
            placeholder="Tell me about your project, timeline, and budget..."
            rows="5"
            :aria-invalid="errors.message ? 'true' : undefined"
            :aria-describedby="errors.message ? 'message-error' : undefined"
            :class="{ 'border-red-500 focus-visible:ring-red-500': errors.message }"
          />
          <p v-if="errors.message" id="message-error" class="text-sm text-red-500" role="alert">{{ errors.message }}</p>
        </div>

        <!-- Submit Button -->
        <Button
          type="submit"
          class="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          :disabled="isSubmitting"
          :aria-busy="isSubmitting"
        >
          <svg
            v-if="isSubmitting"
            class="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span v-if="isSubmitting">
            <span class="sr-only">Sending message, please wait</span>
            <span aria-hidden="true">Sending...</span>
          </span>
          <span v-else>Send Message</span>
        </Button>
      </form>
    </CardContent>
  </Card>
  </div>
</template>
