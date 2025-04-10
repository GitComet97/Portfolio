<template>
  <div class="w-full h-80 perspective overflow-hidden group pr-4 md:pr-0">
    <div
      class="relative w-full h-full duration-500 transform-style-preserve-3d group-hover:rotate-y-180 will-change-transform"
    >
      <!-- Front Side -->
      <div
        class="absolute inset-0 bg-[#1f2937] rounded-lg p-4 flex flex-col justify-start backface-hidden"
      >
        <p class="text-white text-lg mb-2 pb-2 pointer-events-none">{{ title }}</p>
        <p class="text-gray-400 text-sm pointer-events-none">{{ description }}</p>
      </div>

      <!-- Back Side -->
      <div
        class="absolute inset-0 bg-gray-900 rounded-lg p-2 flex items-center justify-center rotate-y-180 backface-hidden"
      >
        <!-- VIDEO -->
        <video
          v-if="videoSrc"
          :src="videoSrc"
          controls
          class="w-full h-full object-cover rounded-lg"
        ></video>

        <!-- SINGLE IMAGE -->
        <img
          v-else-if="Array.isArray(imageSrc) === false"
          :src="imageSrc"
          class="w-full h-full object-cover rounded-lg pointer-events-none"
          alt="project image"
        />

        <!-- MULTIPLE IMAGES -->
        <div v-else class="relative w-full h-full flex items-center justify-center">
          <img
            :src="imageSrc[currentIndex]"
            class="w-full h-full object-cover rounded-lg pointer-events-none"
            :alt="`Project image ${currentIndex + 1}`"
          />
          <!-- Left Arrow -->
          <button
            class="absolute left-2 text-white bg-black/40 p-1 rounded-full hover:bg-black/60"
            @click.stop="prevImage"
          >
            ‹
          </button>
          <!-- Right Arrow -->
          <button
            class="absolute right-2 text-white bg-black/40 p-1 rounded-full hover:bg-black/60"
            @click.stop="nextImage"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  title: string
  description: string
  imageSrc?: string | string[]
  videoSrc?: string
}>()

const currentIndex = ref(0)

const nextImage = () => {
  if (Array.isArray(props.imageSrc)) {
    currentIndex.value = (currentIndex.value + 1) % props.imageSrc.length
  }
}

const prevImage = () => {
  if (Array.isArray(props.imageSrc)) {
    currentIndex.value = (currentIndex.value - 1 + props.imageSrc.length) % props.imageSrc.length
  }
}

// Reset image index if image list changes
watch(
  () => props.imageSrc,
  () => {
    currentIndex.value = 0
  },
)
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
.will-change-transform {
  will-change: transform;
}
</style>
