<script setup lang="ts">
import { ref } from 'vue'
import Work from './components/WorkTab.vue'
import AboutMe from './components/AboutMeTab.vue'
import Contact from './components/ContactTab.vue'

const currentTab = ref('AboutMe')
</script>

<template>
  <div class="h-screen w-screen bg-black text-white flex flex-col pl-4">
    <nav class="flex gap-4 p-4">
      <button
        @click="currentTab = 'AboutMe'"
        :class="{ 'font-bold underline': currentTab === 'AboutMe' }"
      >
        About me
      </button>
      <button
        @click="currentTab = 'Work'"
        :class="{ 'font-bold underline': currentTab === 'Work' }"
      >
        Work
      </button>
      <button
        @click="currentTab = 'Contact'"
        :class="{ 'font-bold underline': currentTab === 'Contact' }"
      >
        Contact
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
