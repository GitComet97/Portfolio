<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Work from './components/WorkTab.vue'
import AboutMe from './components/AboutMeTab.vue'
import Contact from './components/ContactTab.vue'

const currentTab = ref('AboutMe')
const { locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'de' : 'en'
}
</script>

<template>
  <div class="h-screen w-screen bg-black text-white flex flex-col pl-2 md:pl-4">
    <nav class="flex gap-2 p-3 items-center">
      <!-- Existing tab buttons -->
      <button
        @click="currentTab = 'AboutMe'"
        :class="{ 'font-bold underline': currentTab === 'AboutMe' }"
      >
        {{ $t('about') }}
      </button>
      <button
        @click="currentTab = 'Work'"
        :class="{ 'font-bold underline': currentTab === 'Work' }"
      >
        {{ $t('projects') }}
      </button>
      <button
        @click="currentTab = 'Contact'"
        :class="{ 'font-bold underline': currentTab === 'Contact' }"
      >
        {{ $t('contact') }}
      </button>

      <!-- Language toggle button -->
      <button class="ml-auto px-2 py-1 rounded" @click="toggleLanguage">
        {{ locale === 'en' ? 'Deutsch' : 'English' }}
      </button>
    </nav>

    <div class="flex-grow w-screen">
      <Work v-if="currentTab === 'Work'" />
      <AboutMe v-if="currentTab === 'AboutMe'" />
      <Contact v-if="currentTab === 'Contact'" />
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
