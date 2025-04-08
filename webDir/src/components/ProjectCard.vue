<template>
  <div class="w-full h-80 perspective group">
    <div
      class="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180"
    >
      <!-- Front (Text Side) -->
      <div
        class="absolute inset-0 bg-gray-800 rounded-lg p-4 flex flex-col justify-center backface-hidden"
      >
        <p class="text-white text-lg mb-2 pointer-events-none">{{ title }}</p>
        <p class="text-gray-400 text-sm pointer-events-none">{{ description }}</p>
      </div>

      <!-- Back (Media Side) -->
      <div
        class="absolute inset-0 bg-gray-900 rounded-lg p-2 flex items-center justify-center rotate-y-180 backface-hidden"
      >
        <img
          v-if="imageSrc"
          :src="imageSrc"
          alt="project image"
          class="object-cover w-full h-full rounded-lg"
        />
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

<style scoped>
.perspective {
  perspective: 1000px;
}
.backface-hidden {
  backface-visibility: hidden;
}
.transform-style-preserve-3d {
  transform-style: preserve-3d;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
