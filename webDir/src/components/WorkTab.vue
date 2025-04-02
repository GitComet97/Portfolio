<template>
  <div class="mx-auto p-4 h-full">
    <!-- Title -->
    <h2 class="text-3xl text-center text-white mb-8">My Work</h2>
    <!-- Main Layout -->
    <div class="flex gap-8 w-full">
      <!-- Left Column: Game & Odd Projects -->
      <div class="w-1/2 h-[80vh]">
        <h3 class="text-xl text-white mb-4">Game & Odd Projects</h3>
        <div class="flex flex-col h-full">
          <div class="overflow-y-auto h-full">
            <!-- Project 1 -->
            <ProjectCard
              title="Project 1"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <!-- Project 2 -->
            <ProjectCard
              title="Project 2"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <!-- Project 3 -->
            <ProjectCard
              title="Project 3"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <!-- Project 4 -->
            <ProjectCard
              title="Project 4"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <!-- Project 5 -->
            <ProjectCard
              title="Project 5"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <!-- Project 6 -->
            <ProjectCard
              title="Project 6"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
          </div>
        </div>
      </div>

      <!-- Right Column: Conventional Software Work -->
      <div class="w-1/2 pr-4">
        <h3 class="text-xl text-white mb-4">Conventional Software Work</h3>
        <!-- Project 1 -->
        <div class="bg-gray-800 p-4 m-6 rounded-lg">
          <h4 class="text-white text-lg">Project 1</h4>
          <p class="text-gray-400">Short description of the software project.</p>
          <p class="text-gray-500">Tech Stack: React, Node.js, Firebase</p>
        </div>

        <!-- Project 2 -->
        <div class="bg-gray-800 p-4 m-6 rounded-lg">
          <h4 class="text-white text-lg">Project 2</h4>
          <p class="text-gray-400">Short description of the software project.</p>
          <p class="text-gray-500">Tech Stack: Vue, Express.js</p>
        </div>
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
  background-color: #4a90e2; /* Match this color to your theme */
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
