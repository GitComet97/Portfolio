<template>
  <div class="mx-auto p-4 h-full">
    <!-- Title -->
    <h2 class="text-3xl text-start text-white mb-8 pb-8">My Work</h2>
    <!-- Main Layout -->
    <div class="flex h-7/8 gap-8 w-full">
      <!-- Left Column: Game & Odd Projects -->
      <div class="w-1/2 h-full">
        <h3 class="text-xl text-white mb-4 pb-4">Game & Odd Projects</h3>
        <div class="flex flex-col h-full">
          <div
            class="h-full grid gap-2 overflow-y-auto pr-2"
            style="
              grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
              grid-auto-rows: auto;
              grid-auto-flow: row dense;
              align-items: start;
            "
          >
            <!-- Project Cards -->
            <ProjectCard
              title="Project 1"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <ProjectCard
              title="Project 2"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <ProjectCard
              title="Project 3"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <ProjectCard
              title="Project 4"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <ProjectCard
              title="Project 5"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <ProjectCard
              title="Project 6"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
            <ProjectCard
              title="Project 7"
              description="Short description of the project."
              imageSrc="https://via.placeholder.com/400x200"
            />
          </div>
        </div>
      </div>
      <!-- Right Column: Conventional Software Work -->
      <div class="w-1/2 h-full pr-4">
        <h3 class="text-xl text-white mb-4 pb-4">Conventional Software Work</h3>
        <div class="flex flex-col h-full gap-2 overflow-y-auto pr-2">
          <!-- Project 1 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Project 1</h4>
            <p class="text-gray-400">Short description of the software project.</p>
            <p class="text-gray-500">Tech Stack: React, Node.js, Firebase</p>
          </div>

          <!-- Project 2 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Project 2</h4>
            <p class="text-gray-400">Short description of the software project.</p>
            <p class="text-gray-500">Tech Stack: Vue, Express.js</p>
          </div>

          <!-- Project 3 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Project 3</h4>
            <p class="text-gray-400">Short description of the software project.</p>
            <p class="text-gray-500">Tech Stack: React, Node.js, Firebase</p>
          </div>

          <!-- Project 4 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Project 4</h4>
            <p class="text-gray-400">Short description of the software project.</p>
            <p class="text-gray-500">Tech Stack: Vue, Express.js</p>
          </div>

          <!-- Project 5 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Project 5</h4>
            <p class="text-gray-400">Short description of the software project.</p>
            <p class="text-gray-500">Tech Stack: React, Node.js, Firebase</p>
          </div>

          <!-- Project 6 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Project 6</h4>
            <p class="text-gray-400">Short description of the software project.</p>
            <p class="text-gray-500">Tech Stack: Vue, Express.js</p>
          </div>

          <!-- Project 7 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Project 7</h4>
            <p class="text-gray-400">Short description of the software project.</p>
            <p class="text-gray-500">Tech Stack: Vue, Express.js</p>
          </div>
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
