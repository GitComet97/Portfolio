<template>
  <div class="w-screen h-screen mx-auto p-2 pr-6 text-white overflow-y-auto">
    <!-- Heading -->
    <h2 class="text-3xl font-bold text-start mb-4 pb-4">About Me</h2>
    <!-- Image & Personal Info -->
    <div class="flex items-center gap-6 pb-4">
      <img
        src="../assets/Morne_headshot.jpg"
        alt="Your Name"
        class="bg-white w-48 h-64 rounded-full border-4 border-gray-700"
      />
      <div class="text-center md:text-left">
        <p class="text-lg">
          👋 Hi, I'm Morne Gouws! I'm 27 years old and from Namibia, currently living in Germany
        </p>
        <p class="text-gray-300 max-w-1/3">
          Video games sparked my passion for technology at an early age, leading me to explore a
          wide range of roles across both professional and personal projects. From game development
          to IT solutions, I’ve enjoyed learning through hands-on experience and continuous
          curiosity. I'm always looking for new challenges and ways to apply my growing skill set
          within the ever-evolving tech space.
        </p>
      </div>
    </div>
    <!-- Four-Box Grid -->
    <div class="flex flex-row gap-6 pb-6">
      <!-- Work History Card -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit w-1/4">
        <h3 class="text-xl font-semibold pb-2">Work History</h3>
        <ul class="pl-2 space-y-2 text-gray-300">
          <li>
            <p class="font-medium">Pelicad (formerly Cityscaper)</p>
            <p class="text-sm text-gray-400 pl-4">2023-2025</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              Web development (front-end/backend), API development, Database management and
              development.
            </p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Vue; Firebase; Typescript</p>
          </li>
          <li>
            <p class="font-medium">Rooftop</p>
            <p class="text-sm text-gray-400 pl-4">2021-2023</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              Solutions architect and game developer/designer
            </p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Unity; C#; DialogFlow; VR</p>
          </li>
          <li>
            <p class="font-medium">Loud Rabbits</p>
            <p class="text-sm text-gray-400 pl-4">2020-2021</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              Solutions architect and game developer/designer
            </p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Unity; C#; AR/VR</p>
          </li>
          <li>
            <p class="font-medium">Free-lance game development</p>
            <p class="text-sm text-gray-400 pl-4">2019-2023</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Game developer/designer</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">Unity; C#; AR</p>
          </li>
          <li>
            <p class="font-medium">Academy of Digital Arts</p>
            <p class="text-sm text-gray-400 pl-4">2019-2020</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              Student representative, tutor, public speaker
            </p>
          </li>
          <li>
            <p class="font-medium">Geeks4u</p>
            <p class="text-sm text-gray-400 pl-4">2016-2018</p>
            <p class="text-sm text-gray-400 pl-8 pt-1">
              General IT, business IT, network technician, IT administrater
            </p>
          </li>
        </ul>
      </div>
      <!-- Education Card -->
      <div class="w-1/4">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit">
          <h3 class="text-xl font-semibold pb-2">Certifications</h3>

          <ul class="pl-2 space-y-2 text-gray-300">
            <li>
              <p class="font-medium">AWS Certified Solutions Architect - Associate</p>
              <p class="text-sm text-gray-400 pl-4">Issued: March 2025</p>
            </li>
            <li>
              <p class="font-medium">AWS Certified Cloud Practitioner</p>
              <p class="text-sm text-gray-400 pl-4">Issued: March 2025</p>
            </li>
            <li>
              <p class="font-medium">Game & Interactive Media Dev Certificate</p>
              <p class="text-sm text-gray-400 pl-4">Academy of Digital Arts, 2018</p>
            </li>
          </ul>
        </div>
        <div class="h-6"></div>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit">
          <h3 class="text-xl font-semibold pb-2">Technical skills</h3>
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

      <!-- Skills Card -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit w-1/4">
        <h3 class="text-xl font-semibold pb-2">Skills</h3>
        <ul class="list-disc pl-4 text-gray-300">
          <li>English (mother tongue)</li>
          <li>Afrikaans (mother tongue)</li>
          <li>German (intermediate)</li>
          <li>Team leadership & coordination</li>
          <li>Project organization & planning</li>
          <li>Resource allocation & prioritization</li>
          <li>Strategic problem-solving</li>
          <li>Adaptable under pressure</li>
          <li>Strong communicator & collaborator</li>
          <li>Self-reliant & self-driven</li>
        </ul>
      </div>
      <!-- Personal Interests Card -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg h-fit w-1/4">
        <h3 class="text-xl font-semibold pb-2">Personal Interests</h3>
        <ul class="list-disc pl-4 text-gray-300">
          <li>
            <p class="font-medium">Games</p>
            <p class="text-sm text-gray-400 pl-4">
              Strategy; Citybuilders; Milsims; Team-based games; RPGs; Tabletop; TTRPGS; Board
              games;
            </p>
          </li>
          <li>
            <p class="font-medium">Airsoft/Paintball</p>
            <p class="text-sm text-gray-400 pl-4"></p>
          </li>
          <li>
            <p class="font-medium">Minitaure painting</p>
            <p class="text-sm text-gray-400 pl-4"></p>
          </li>
          <li>
            <p class="font-medium">Films</p>
            <p class="text-sm text-gray-400 pl-4"></p>
          </li>
          <li>
            <p class="font-medium">Reading</p>
            <p class="text-sm text-gray-400 pl-4">Philosophy; Fantasy; Horror</p>
          </li>
          <li>
            <p class="font-medium">Cooking</p>
            <p class="text-sm text-gray-400 pl-4">I love curry</p>
          </li>
          <li>
            <p class="font-medium">Reddit</p>
            <p class="text-sm text-gray-400 pl-4">
              Moderate the Namibian subreddit to ensure content remains within subreddit rules
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- Optional Bio Block -->
    <div class="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-full">
      <h3 class="text-2xl font-semibold mb-2">More About Me</h3>
      <p class="text-gray-300 leading-relaxed">
        I was born and raised in Swakopmund, Namibia. I have been an avid gamer from a young age and
        was always keen to learn more about the IT world. I wrote and passed exams for CompTIA A+ as
        well as N+ in high school, but the institute was unfortunately unaccredited. Nevertheless, I
        leveraged the skills I had learned into an IT job straight out of high school. I
        administered businesses, set up local network infrastructures, and performed general IT work
        until I could afford to study further. I later studied game and multimedia development in
        Cape Town. With this skill set, I spent six years as a developer in many areas. I developed
        interactive VR videos that were used at a WHO convention in Montreal, educational
        multiplayer games used in UNICEF training, an interactive digital health assistant who
        advises on alcohol and tobacco abuse for PAHO, and a range of recreational games for clients
        — including Augmented Reality projects.
      </p>
      <p class="text-gray-300 leading-relaxed">
        I then decided to immigrate to Europe and began working with Pelicad, a start-up developing
        a web-based product for architectural visualisation. There, I further developed my web
        development skills using Vue and TypeScript. I built a RESTful API as well as a database
        management system using Firebase, Firestore, and Firebase Cloud Functions, which handled
        file conversions and tag management.
      </p>
      <p class="text-gray-300 leading-relaxed">
        Due to a personal loss at the end of 2024, I needed time away. After a brief sabbatical in
        January, I acquired two AWS certifications.
      </p>
      <p class="text-gray-300 leading-relaxed">
        I'm now looking to apply my experience across development, infrastructure, and cloud
        technologies in a role that values curiosity, versatility, and purpose-driven work. Whether
        it's building immersive experiences or crafting robust backend systems, I'm driven by a
        passion for solving real problems through tech — and excited for whatever challenge comes
        next.
      </p>
    </div>
    <div class="h-14"></div>
  </div>
</template>
