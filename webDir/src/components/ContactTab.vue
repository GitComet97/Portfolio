<template>
  <div class="h-4"></div>
  <div class="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4 pb-4">Get in Touch</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-6 pb-4">
      I'd love to hear from you. Fill out the form below or reach out through any of the links.
    </p>

    <form @submit.prevent="submitForm" class="space-y-4">
      <input
        v-model="name"
        placeholder="Your Name"
        class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div class="h-4"></div>
      <input
        v-model="email"
        type="email"
        placeholder="Your Email"
        class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div class="h-4"></div>
      <textarea
        v-model="message"
        placeholder="Your Message"
        rows="5"
        class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      <div class="h-4"></div>
      <button
        type="submit"
        :disabled="!name || !email || !message"
        class="w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Send Message
      </button>

      <transition name="fade">
        <p v-if="successMessage" class="text-green-500 font-medium text-center mt-2">
          {{ successMessage }}
        </p>
      </transition>

      <transition name="fade">
        <p v-if="errorMessage" class="text-red-500 font-medium text-center mt-2">
          {{ errorMessage }}
        </p>
      </transition>
    </form>

    <!-- Optional extra contact info -->
    <div class="mt-8 pt-4 text-sm text-gray-600 dark:text-gray-400">
      <p>Email: <a href="mailto:mrngouws@gmail.com" class="underline">mrngouws@gmail.com</a></p>
      <div class="h-1"></div>
      <p>
        LinkedIn:
        <a href="https://www.linkedin.com/in/morne-gouws-2630b318a" class="underline"
          >/morne-gouws</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''
  try {
    const response = await fetch(
      'https://6b92x8bc25.execute-api.eu-north-1.amazonaws.com/contactFunc',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
      },
    )

    if (!response.ok) throw new Error('Failed to send message')

    successMessage.value = 'Message sent successfully!'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    errorMessage.value = 'Oops! Something went wrong.'
    console.error(err)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
