<template>
  <div class="mb-6 pb-4 pr-4">
    <div class="relative w-full h-56 bg-gray-800 rounded-lg">
      <!-- Placeholder for Image or Video -->
      <div class="absolute inset-0 flex items-center justify-start text-white text-lg p-2">
        <p class="text-white mt-2">{{ title }}</p>
        <div>
          <img :src="imageSrc" alt="Project Image" class="object-cover w-1/4 h-full" />
          <div class="h-full w-full">
            <p class="text-gray-400 p-2">{{ description }}</p>
          </div>
        </div>
      </div>
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
