<template>
  <div class="h-80 w-full">
    <div class="relative w-full h-full bg-gray-800 rounded-lg flex flex-col p-2">
      <!-- Placeholder for Image or Video -->
      <p class="text-white mt-2 pb-4">{{ title }}</p>
      <p class="text-gray-400">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  imageSrc: String,
})
</script>
