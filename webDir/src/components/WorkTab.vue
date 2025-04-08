<template>
  <div class="mx-auto p-4 h-full">
    <!-- Title -->
    <h2 class="text-4xl text-start text-white mb-8 pb-8">My work</h2>
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
              title="UNICEF Multiplayer Board Game"
              description="A multiplayer board game used for training and other UNICEF events. It featured various play modes and was available on PC, Mac, and in-browser."
              imageSrc="https://via.placeholder.com/400x200"
            />

            <ProjectCard
              title="Pahola for PAHO"
              description="A digital assistant that provides information and guidance on the risks and abuse of tobacco and alcohol. I implemented its conversational capabilities using Dialogflow and developed a custom analytics system using webhooks. This solution was designed to bypass a limitation that prevented us from attaching analytics to the embedded agent on the website."
              imageSrc="https://via.placeholder.com/400x200"
            />

            <ProjectCard
              title="Iziko AR Museum Exhibit"
              description="My first client project, developed as a student. I led a team of fellow students to create an augmented reality museum exhibit. I developed the AR systems, created some of the 3D assets, and handled the full integration of 3D assets, animations, and systems."
              imageSrc="https://via.placeholder.com/400x200"
            />

            <ProjectCard
              title="Petal"
              description="A game developed in collaboration with an artist. We challenged ourselves to build it in one week, using only our spare time after work. The project was a personal experiment with Unity’s then-new rendering pipeline and 2D particle system. No external art assets or packages were used—everything was created using only the base Unity engine."
              imageSrc="https://via.placeholder.com/400x200"
            />

            <ProjectCard
              title="Mogau's Kingdom"
              description="A mobile educational game designed to encourage young children to read. It began as a hackathon demo in collaboration with a South African NPO, which later secured funding for me to fully develop and publish the project on Android and iOS. I handled the entire pipeline—from inception to publication. I also had the privilege of testing the game with children in community centers, accompanied by book donations to their libraries from the NPO."
              imageSrc="https://via.placeholder.com/400x200"
            />

            <ProjectCard
              title="Reset Earth Simulation for WHO"
              description="A web-based educational game developed for a WHO program aimed at raising climate change awareness among children and teens. I worked alongside educators creating accompanying learning modules, and together the materials were used in school workshops."
              imageSrc="https://via.placeholder.com/400x200"
            />

            <ProjectCard
              title="Timothee"
              description="A short 2D horror game developed with an artist during a game jam. We were the only two-person team and built the game in 48 hours using no third-party assets—just the base Unity engine."
              imageSrc="https://via.placeholder.com/400x200"
            />
          </div>
        </div>
      </div>
      <!-- Right Column: Conventional Software Work -->
      <div class="w-1/2 h-full pr-4">
        <h3 class="text-xl text-white mb-4">Conventional Software Work</h3>
        <p class="text-gray-400 mb-2 pb-4">
          The first entry is this portfolio website. All other projects listed below were completed
          in a professional capacity for a commercial product.
        </p>
        <div class="flex flex-col h-full gap-2 overflow-y-auto pr-2">
          <!-- Project 1 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">This Website!</h4>
            <p class="text-gray-400">
              This website uses a CI/CD pipeline powered by AWS Amplify. It is hosted on Route 53
              and built with Vue. Deployment is fully automated, triggering on updates to the main
              branch of my Git repository!
            </p>
            <p class="text-gray-500">Amplify; Git; Vue; TypeScript; Tailwind</p>
          </div>

          <!-- Project 2 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Website Scaffolding</h4>
            <p class="text-gray-400">
              Bootstrapped the web application for the product. Set up routes, pages, and structured
              the app for future development. Also integrated a localization system for multilingual
              support.
            </p>
            <p class="text-gray-500">Vue; TypeScript; Tailwind</p>
          </div>

          <!-- Project 3 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">RESTful API for Materials and Metadata</h4>
            <p class="text-gray-400">
              Developed an API used in the web product to serve materials as GLTF files along with
              their metadata. The API supported search parameters, filters, and uploading of new
              materials and metadata.
            </p>
            <p class="text-gray-500">
              Firebase Cloud Functions; Firestore; Firebase Realtime Storage
            </p>
          </div>

          <!-- Project 4 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Database Migration and Conversion System</h4>
            <p class="text-gray-400">
              Built an internal tool that migrated materials from partner open-source databases and
              converted them to match the product’s expected format. It also generated metadata,
              enabled tagging, and performed automated health checks on materials.
            </p>
            <p class="text-gray-500">Node.js; Firebase Cloud Functions; Firestore</p>
          </div>

          <!-- Project 5 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Database Maintenance</h4>
            <p class="text-gray-400">
              Created a repository of command-line tools for applying database-wide patches, checks,
              and maintenance tasks. Also developed a web-based internal tool for easier database
              management, item inspection, and task-specific functions.
            </p>
            <p class="text-gray-500">Vue; Node.js; Firebase Cloud Functions; Firestore</p>
          </div>

          <!-- Project 6 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">User Management System</h4>
            <p class="text-gray-400">
              Integrated an existing user database with the new web app using Firebase
              Authentication. Implemented user account management flows, configured security rules,
              and developed user management interfaces.
            </p>
            <p class="text-gray-500">Vue; Firebase Authentication; Firebase Cloud Functions</p>
          </div>

          <!-- Project 7 -->
          <div class="bg-gray-800 p-4 m-6 rounded-lg h-36">
            <h4 class="text-white text-lg">Frontend Architecture and Component Development</h4>
            <p class="text-gray-400">
              Built various pages and reusable components for the web app. Developed dynamic
              components supporting features like resizing, floating, and flexible reuse across
              different parts of the application.
            </p>
            <p class="text-gray-500">Vue; Typescript; Tailwind</p>
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
