<template>
  <div
    class="mx-auto pl-1 md:p-2 h-screen w-screen overflow-x-hidden overflow-y-scroll md:overflow-y-none"
  >
    <!-- Title -->
    <h2 class="text-3xl text-start text-white mb-8 pb-4 md:pb-8">{{ $t('title') }}</h2>
    <!-- Main Layout -->
    <div class="flex flex-col md:flex-row md:h-7/8 md:gap-8 w-full">
      <!-- Left Column: Game & Odd Projects -->
      <div class="md:w-1/2 md:h-9/10">
        <h3 class="text-xl text-white mb-4 pb-4">{{ $t('leftColumnTitle') }}</h3>
        <div class="flex flex-col h-full">
          <div
            class="h-full grid gap-2 md:overflow-y-auto pr-1 md:pr-2"
            style="
              grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
              grid-auto-rows: auto;
              grid-auto-flow: row dense;
              align-items: start;
            "
          >
            <!-- Project Cards -->
            <ProjectCard
              :title="$t('project1Title')"
              :description="$t('project1Description')"
              videoSrc="https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/UNICEF_vid.mp4"
            />

            <ProjectCard
              :title="$t('project2Title')"
              :description="$t('project2Description')"
              videoSrc="https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/Pahola_vid.mp4"
            />

            <ProjectCard
              :title="$t('project3Title')"
              :description="$t('project3Description')"
              :imageSrc="[
                'https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/Iziko/Iziko_1.JPG',
                'https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/Iziko/Iziko_2.JPG',
                'https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/Iziko/Iziko_3.JPG',
              ]"
            />

            <ProjectCard
              :title="$t('project4Title')"
              :description="$t('project4Description')"
              videoSrc="https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/Petal_vid.mp4"
            />

            <ProjectCard
              :title="$t('project5Title')"
              :description="$t('project5Description')"
              videoSrc="https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/Mogau_vid.mp4"
            />

            <ProjectCard
              :title="$t('project6Title')"
              :description="$t('project6Description')"
              :imageSrc="[
                'https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/ResetEarth/ResetEarth_1.png',
                'https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/ResetEarth/ResetEarth_2.png',
                'https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/ResetEarth/ResetEarth_3.png',
                'https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/ResetEarth/ResetEarth_4.png',
              ]"
            />

            <ProjectCard
              :title="$t('project7Title')"
              :description="$t('project7Description')"
              videoSrc="https://morne-portfolio-media.s3.eu-north-1.amazonaws.com/Timothee_vid.mp4"
            />
          </div>
        </div>
      </div>
      <!-- Right Column: Conventional Software Work -->
      <div class="md:w-1/2 md:h-9/10 pr-1 md:pr-4">
        <h3 class="text-xl text-white pt-4 md:pt-0 mb-4">{{ $t('rightColumnTitle') }}</h3>
        <p class="text-gray-400 mb-1 md:pb-1 pb-4">
          {{ $t('rightColumnIntro') }}
        </p>
        <div class="flex flex-col h-full gap-1 md:overflow-y-auto pr-2">
          <!-- Project 1 -->
          <div class="bg-gray-800 p-3 m-4 rounded-lg md:h-36">
            <h4 class="text-white md:text-lg">{{ $t('rightProject1Title') }}</h4>
            <p class="text-gray-400">
              {{ $t('rightProject1Description') }}
            </p>
            <p class="text-gray-500">Amplify; Git; Vue; TypeScript; Tailwind</p>
          </div>

          <!-- Project 2 -->
          <div class="bg-gray-800 p-3 m-6 rounded-lg md:h-36">
            <h4 class="text-white md:text-lg">{{ $t('rightProject2Title') }}</h4>
            <p class="text-gray-400">
              {{ $t('rightProject2Description') }}
            </p>
            <p class="text-gray-500">Vue; TypeScript; Tailwind</p>
          </div>

          <!-- Project 3 -->
          <div class="bg-gray-800 p-3 m-6 rounded-lg md:h-36">
            <h4 class="text-white md:text-lg">{{ $t('rightProject3Title') }}</h4>
            <p class="text-gray-400">
              {{ $t('rightProject3Description') }}
            </p>
            <p class="text-gray-500">
              Firebase Cloud Functions; Firestore; Firebase Realtime Storage
            </p>
          </div>

          <!-- Project 4 -->
          <div class="bg-gray-800 p-3 m-6 rounded-lg md:h-36">
            <h4 class="text-white md:text-lg">{{ $t('rightProject4Title') }}</h4>
            <p class="text-gray-400">
              {{ $t('rightProject4Description') }}
            </p>
            <p class="text-gray-500">Node.js; Firebase Cloud Functions; Firestore</p>
          </div>

          <!-- Project 5 -->
          <div class="bg-gray-800 p-3 m-6 rounded-lg md:h-36">
            <h4 class="text-white md:text-lg">{{ $t('rightProject5Title') }}</h4>
            <p class="text-gray-400">
              {{ $t('rightProject5Description') }}
            </p>
            <p class="text-gray-500">Vue; Node.js; Firebase Cloud Functions; Firestore</p>
          </div>

          <!-- Project 6 -->
          <div class="bg-gray-800 p-3 m-6 rounded-lg md:h-36">
            <h4 class="text-white md:text-lg">{{ $t('rightProject6Title') }}</h4>
            <p class="text-gray-400">
              {{ $t('rightProject6Description') }}
            </p>
            <p class="text-gray-500">Vue; Firebase Authentication; Firebase Cloud Functions</p>
          </div>

          <!-- Project 7 -->
          <div class="bg-gray-800 p-3 m-6 rounded-lg md:h-36">
            <h4 class="text-white md:text-lg">{{ $t('rightProject7Title') }}</h4>
            <p class="text-gray-400">
              {{ $t('rightProject7Description') }}
            </p>
            <p class="text-gray-500">Vue; Typescript; Tailwind</p>
          </div>
        </div>
        <div class="h-14 md:h-0"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style scoped>
.left-column {
  height: 80vh;
}

::-webkit-scrollbar {
  width: 8px; /* Set width of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #333435; /* Match this color to your theme */
  border-radius: 50px; /* Pill shape */
  transition: background-color 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #3b7d9e; /* Darker shade on hover */
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
