<template>
  <div class="w-screen h-screen mx-auto p-1 md:p-2 pr-4 md:pr-6 text-white overflow-y-auto">
    <!-- Heading -->
    <h2 class="text-3xl font-bold text-start mb-4 pb-4">{{ $t('about_heading') }}</h2>
    <!-- Image & Personal Info -->
    <div class="flex items-center gap-6 pb-4">
      <img
        src="../assets/Morne_headshot.jpg"
        alt="Your Name"
        class="bg-white w-48 h-64 rounded-full border-4 border-gray-700"
      />
      <div class="md:text-start md:w-1/3">
        <p class="text-lg">
          {{ $t('intro_greeting') }}
        </p>
        <p class="text-gray-300">
          {{ $t('intro_description') }}
        </p>
      </div>
    </div>
    <!-- Four-Box Grid -->
    <div class="md:flex md:flex-row gap-6 md:pb-6 pb-2">
      <!-- Work History Card -->
      <div class="bg-gray-800 md:p-6 p-2 rounded-lg shadow-lg h-fit md:w-1/4">
        <h3 class="text-xl font-semibold pb-2">{{ $t('work_history_title') }}</h3>
        <ul class="pl-2 space-y-2 text-gray-300">
          <li>
            <p class="font-medium">{{ $t('work_pelicad') }}</p>
            <p class="text-sm text-gray-400 pl-4">2023-2025</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              {{ $t('work_pelicad_desc1') }}
            </p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Vue; Firebase; Typescript</p>
          </li>
          <li>
            <p class="font-medium">Rooftop</p>
            <p class="text-sm text-gray-400 pl-4">2021-2023</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              {{ $t('work_rooftop_desc') }}
            </p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Unity; C#; DialogFlow; VR</p>
          </li>
          <li>
            <p class="font-medium">Loud Rabbits</p>
            <p class="text-sm text-gray-400 pl-4">2020-2021</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              {{ $t('work_loud_rabbits_desc') }}
            </p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Unity; C#; AR/VR</p>
          </li>
          <li>
            <p class="font-medium">{{ $t('work_freelance') }}</p>
            <p class="text-sm text-gray-400 pl-4">2019-2023</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">{{ $t('work_freelance_desc') }}</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Unity; C#; AR</p>
          </li>
          <li>
            <p class="font-medium">Academy of Digital Arts</p>
            <p class="text-sm text-gray-400 pl-4">2019-2020</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              {{ $t('work_academy_desc') }}
            </p>
          </li>
          <li>
            <p class="font-medium">Geeks4u</p>
            <p class="text-sm text-gray-400 pl-4">2016-2018</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              {{ $t('work_geeks4u_desc') }}
            </p>
          </li>
        </ul>
      </div>
      <!-- Education Card -->
      <div class="md:w-1/4 md:pt-0 pt-2">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit">
          <h3 class="text-xl font-semibold pb-2">{{ $t('certifications_title') }}</h3>

          <ul class="pl-2 space-y-2 text-gray-300">
            <li>
              <p class="font-medium">{{ $t('cert_aws_solutions') }}</p>
              <p class="text-sm text-gray-400 pl-4">{{ $t('cert_aws_solutions_date') }}</p>
            </li>
            <li>
              <p class="font-medium">{{ $t('cert_aws_cloud') }}</p>
              <p class="text-sm text-gray-400 pl-4">{{ $t('cert_aws_cloud_date') }}</p>
            </li>
            <li>
              <p class="font-medium">{{ $t('cert_game_dev') }}</p>
              <p class="text-sm text-gray-400 pl-4">Academy of Digital Arts, 2018</p>
            </li>
          </ul>
        </div>
        <div class="md:h-6 h-2"></div>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit">
          <h3 class="text-xl font-semibold pb-2">{{ $t('technical_skills') }}</h3>
          <ul class="pl-2 space-y-2 text-gray-300">
            <li>
              <p class="font-medium">Web stack</p>
              <p class="text-sm text-gray-400 pl-4">Vue; Typescript; Javascript</p>
            </li>
            <li>
              <p class="font-medium">Game stack</p>
              <p class="text-sm text-gray-400 pl-4">
                Unity; Unreal Engine; Blender; Substance Painter; C#; Photon; AR; VR
              </p>
            </li>
            <li>
              <p class="font-medium">Cloud stack</p>
              <p class="text-sm text-gray-400 pl-4">AWS; Firebase; Git</p>
            </li>
            <li>
              <p class="font-medium">Organisational</p>
              <p class="text-sm text-gray-400 pl-4">Jira; Trello; ClickUp</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:hidden h-2"></div>
      <!-- Skills Card -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit md:w-1/4">
        <h3 class="text-xl font-semibold pb-2">{{ $t('skills_title') }}</h3>
        <ul class="list-disc pl-4 text-gray-300">
          <li>{{ $t('skill_english') }}</li>
          <li>{{ $t('skill_afrikaans') }}</li>
          <li>{{ $t('skill_german') }}</li>
          <li>{{ $t('skill_team_lead') }}</li>
          <li>{{ $t('skill_project_org') }}</li>
          <li>{{ $t('skill_resource_alloc') }}</li>
          <li>{{ $t('skill_problem_solving') }}</li>
          <li>{{ $t('skill_adaptable') }}</li>
          <li>{{ $t('skill_communicator') }}</li>
          <li>{{ $t('skill_self_reliant') }}</li>
        </ul>
      </div>
      <div class="md:hidden h-2"></div>
      <!-- Personal Interests Card -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit md:w-1/4">
        <h3 class="text-xl font-semibold pb-2">{{ $t('personal_interests_title') }}</h3>
        <ul class="list-disc pl-4 text-gray-300">
          <li>
            <p class="font-medium">{{ $t('interest_games') }}</p>
            <p class="text-sm text-gray-400 pl-4">
              {{ $t('interest_games_desc') }}
            </p>
          </li>
          <li>
            <p class="font-medium">{{ $t('interest_airsoft') }}</p>
            <p class="text-sm text-gray-400 pl-4"></p>
          </li>
          <li>
            <p class="font-medium">{{ $t('interest_minipaint') }}</p>
            <p class="text-sm text-gray-400 pl-4"></p>
          </li>
          <li>
            <p class="font-medium">{{ $t('interest_films') }}</p>
            <p class="text-sm text-gray-400 pl-4"></p>
          </li>
          <li>
            <p class="font-medium">{{ $t('interest_reading') }}</p>
            <p class="text-sm text-gray-400 pl-4">{{ $t('interest_reading_desc') }}</p>
          </li>
          <li>
            <p class="font-medium">{{ $t('interest_cooking') }}</p>
            <p class="text-sm text-gray-400 pl-4">{{ $t('interest_cooking_desc') }}</p>
          </li>
          <li>
            <p class="font-medium">{{ $t('interest_reddit') }}</p>
            <p class="text-sm text-gray-400 pl-4">
              {{ $t('interest_reddit_desc') }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- Optional Bio Block -->
    <div class="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-full">
      <h3 class="text-2xl font-semibold mb-2">{{ $t('more_about_me_title') }}</h3>
      <p class="text-gray-300 leading-relaxed">
        {{ $t('more_about_me_paragraph1') }}
      </p>
      <p class="text-gray-300 leading-relaxed">
        {{ $t('more_about_me_paragraph2') }}
      </p>
      <p class="text-gray-300 leading-relaxed">
        {{ $t('more_about_me_paragraph3') }}
      </p>
      <p class="text-gray-300 leading-relaxed">
        {{ $t('more_about_me_paragraph4') }}
      </p>
    </div>
    <div class="h-12"></div>
  </div>
</template>
