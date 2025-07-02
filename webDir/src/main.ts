import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// Define your translations
const messages = {
  en: {
    welcome: 'Welcome to my portfolio',
    about: 'About me',
    projects: 'Projects',
    contact: 'Contact',

    // About Me Page
    about_heading: 'About Me',
    intro_greeting:
      "👋 Hi, I'm Morne Gouws! I'm 27 years old and from Namibia, currently living in Germany",
    intro_description:
      "Video games sparked my passion for technology at an early age, leading me to explore a wide range of roles across both professional and personal projects. From game development to IT solutions, I’ve enjoyed learning through hands-on experience and continuous curiosity. I'm always looking for new challenges and ways to apply my growing skill set within the ever-evolving tech space.",

    work_history_title: 'Work History',
    work_pelicad: 'Pelicad (formerly Cityscaper)',
    work_pelicad_desc1:
      'Web development (front-end/backend), API development, Database management and development.',

    work_rooftop: 'Rooftop',
    work_rooftop_desc: 'Solutions architect and game developer/designer',

    work_loud_rabbits_desc: 'Solutions architect and game developer/designer',

    work_freelance: 'Free-lance game development',
    work_freelance_desc: 'Game developer/designer',

    work_academy_desc: 'Student representative, tutor, public speaker',

    work_geeks4u_desc: 'General IT, business IT, network technician, IT administrater',

    certifications_title: 'Certifications',
    cert_aws_solutions: 'AWS Certified Solutions Architect - Associate',
    cert_aws_solutions_date: 'Issued: March 2025',

    cert_aws_cloud: 'AWS Certified Cloud Practitioner',
    cert_aws_cloud_date: 'Issued: March 2025',

    cert_game_dev: 'Game & Interactive Media Dev Certificate',

    technical_skills: 'Technical skills',

    skills_title: 'Skills',
    skill_english: 'English (mother tongue)',
    skill_afrikaans: 'Afrikaans (mother tongue)',
    skill_german: 'German (intermediate)',
    skill_team_lead: 'Team leadership & coordination',
    skill_project_org: 'Project organization & planning',
    skill_resource_alloc: 'Resource allocation & prioritization',
    skill_problem_solving: 'Strategic problem-solving',
    skill_adaptable: 'Adaptable under pressure',
    skill_communicator: 'Strong communicator & collaborator',
    skill_self_reliant: 'Self-reliant & self-driven',

    personal_interests_title: 'Personal Interests',
    interest_games: 'Games',
    interest_games_desc:
      'Strategy; Citybuilders; Milsims; Team-based games; RPGs; Tabletop; TTRPGS; Board games;',
    interest_airsoft: 'Airsoft/Paintball',
    interest_minipaint: 'Minitaure painting',
    interest_films: 'Films',
    interest_reading: 'Reading',
    interest_reading_desc: 'Philosophy; Fantasy; Horror',
    interest_cooking: 'Cooking',
    interest_cooking_desc: 'I love curry',
    interest_reddit: 'Reddit',
    interest_reddit_desc:
      'Moderate the Namibian subreddit to ensure content remains within subreddit rules',

    more_about_me_title: 'More About Me',
    more_about_me_paragraph1:
      "I was born and raised in Swakopmund, Namibia. I've been an avid gamer from a young age and was always eager to learn more about the IT world. I wrote and passed the CompTIA A+ and N+ exams in high school, but unfortunately, the institute was unaccredited. Nevertheless, I leveraged the skills I had learned to land an IT job straight out of high school. I administered businesses, set up local network infrastructures, and performed general IT work until I could afford to study further. I later studied game and multimedia development in Cape Town. With this skill set, I spent six years as a developer across various domains. I developed interactive VR videos that were showcased at a WHO convention in Montreal, educational multiplayer games used in UNICEF training, an interactive digital health assistant that advises on alcohol and tobacco abuse for PAHO, and a range of recreational games for clients — including Augmented Reality projects.",
    more_about_me_paragraph2:
      'I then decided to immigrate to Europe and began working with Pelicad, a start-up developing a web-based product for architectural visualisation. There, I further developed my web development skills using Vue and TypeScript. I built a RESTful API as well as a database management system using Firebase, Firestore, and Firebase Cloud Functions, which handled file conversions and tag management.',
    more_about_me_paragraph3:
      "At the end of 2024, I decided to add additional tools to my skill set and obtained two AWS certifications. I'm very interested in using cloud-based tools and services to develop business solutions.",
    more_about_me_paragraph4:
      "I'm now looking to apply my experience across development, infrastructure, and cloud technologies in a role that values curiosity, versatility, and purpose-driven work. Whether it's building immersive experiences or crafting robust backend systems, I'm driven by a passion for solving real problems through tech — and excited for whatever challenge comes next.",

    title: 'My work',
    leftColumnTitle: 'Game & Odd Projects',
    project1Title: 'UNICEF Multiplayer Board Game',
    project1Description:
      'A multiplayer board game used for training and other UNICEF events. It featured various play modes and was available on PC, Mac, and in-browser. The game was a team-based, turn-based trivia game which had a normal mode, a faciliator mode (which allowed a facilitator more control over the experience and questions) and a group mode. It was, and is still, used in various events and workshops at UNICEF. (video is of an early development build, before sensitive content was included)',
    project2Title: 'Pahola for PAHO',
    project2Description:
      'A digital assistant that provides information and guidance on the risks and abuse of tobacco and alcohol. I implemented its conversational capabilities using Dialogflow and developed a custom analytics system using webhooks. This solution was designed to bypass a limitation that prevented us from attaching analytics to the embedded agent on the website. I saved weeks of project time by automating the export/import of the conversation for easier localisation to three additional languages.',
    project3Title: 'Iziko AR Museum Exhibit',
    project3Description:
      'My first client project, developed as a student. I led a team of fellow students to create an augmented reality museum exhibit following ancient egyptian burial rites and showcasing their after-death beliefs. I developed the AR systems, created some of the 3D assets, and handled the full integration of 3D assets, animations, and systems. I also built the physical model that has AR elements layered over it using a tablet attached to rails on the model. This exhibit is still open to the public in Cape Town at the Iziko Slave Lodge Museum.',
    project4Title: 'Petal',
    project4Description:
      'A game developed in collaboration with an artist. We challenged ourselves to build it in one week, using only our spare time after work. The project was a personal experiment with Unity’s then-new rendering pipeline and 2D particle system. No external art assets or packages were used—everything was created using only the base Unity engine.',
    project5Title: "Mogau's Kingdom",
    project5Description:
      'A mobile educational game designed to encourage young children to read. It began as a hackathon demo in collaboration with a South African NPO, which later secured funding for me to fully develop and publish the project on Android and iOS. I handled the entire pipeline—from inception to publication. I also had the privilege of testing the game with children in community centers, accompanied by book donations to their libraries from the NPO.',
    project6Title: 'Reset Earth Simulation for WHO',
    project6Description:
      'A web-based educational game developed for a WHO program aimed at raising climate change awareness among children and teens. I worked alongside educators creating accompanying learning modules, and together the materials were used in school workshops.',
    project7Title: 'Timothee',
    project7Description:
      'A short 2D horror game developed with an artist during a game jam. We were the only two-person team and built the game in 48 hours using no third-party assets—just the base Unity engine.',
    rightColumnTitle: 'Conventional Software Work',
    rightColumnIntro:
      'The first entry is this portfolio website. All other projects listed below were completed in a professional capacity for a commercial product.',
    rightProject1Title: 'This Website!',
    rightProject1Description:
      'This website uses a CI/CD pipeline powered by AWS Amplify. It is hosted on Route 53 and built with Vue. Deployment is fully automated, triggering on updates to the main branch of my Git repository!',
    rightProject1Tech: 'Amplify; Git; Vue; TypeScript; Tailwind',
    rightProject2Title: 'Website Scaffolding',
    rightProject2Description:
      'Bootstrapped the web application for the product. Set up routes, pages, and structured the app for future development. Also integrated a localization system for multilingual support.',
    rightProject2Tech: 'Vue; TypeScript; Tailwind',
    rightProject3Title: 'RESTful API for Materials and Metadata',
    rightProject3Description:
      'Developed an API used in the web product to serve materials as GLTF files along with their metadata. The API supported search parameters, filters, and uploading of new materials and metadata.',
    rightProject3Tech: 'Firebase Cloud Functions; Firestore; Firebase Realtime Storage',
    rightProject4Title: 'Database Migration and Conversion System',
    rightProject4Description:
      'Built an internal tool that migrated materials from partner open-source databases and converted them to match the product’s expected format. It also generated metadata, enabled tagging, and performed automated health checks on materials.',
    rightProject4Tech: 'Node.js; Firebase Cloud Functions; Firestore',
    rightProject5Title: 'Database Maintenance',
    rightProject5Description:
      'Created a repository of command-line tools for applying database-wide patches, checks, and maintenance tasks. Also developed a web-based internal tool for easier database management, item inspection, and task-specific functions.',
    rightProject5Tech: 'Vue; Node.js; Firebase Cloud Functions; Firestore',
    rightProject6Title: 'User Management System',
    rightProject6Description:
      'Integrated an existing user database with the new web app using Firebase Authentication. Implemented user account management flows, configured security rules, and developed user management interfaces.',
    rightProject6Tech: 'Vue; Firebase Authentication; Firebase Cloud Functions',
    rightProject7Title: 'Frontend Architecture and Component Development',
    rightProject7Description:
      'Built various pages and reusable components for the web app. Developed dynamic components supporting features like resizing, floating, and flexible reuse across different parts of the application.',
    rightProject7Tech: 'Vue; Typescript; Tailwind',

    contactTitle: 'Get in Touch',
    contactIntro:
      "I'd love to hear from you. Fill out the form below or reach out through any of the links.",
    contactPlaceholderName: 'Your Name',
    contactPlaceholderEmail: 'Your Email',
    contactPlaceholderMessage: 'Your Message',
    contactButtonSend: 'Send Message',
    contactSuccess: 'Message sent successfully!',
    contactError: 'Oops! Something went wrong.',
    contactExtraEmail: 'Email',
    contactExtraLinkedIn: 'LinkedIn',
  },
  de: {
    welcome: 'Willkommen in meinem Portfolio',
    about: 'Über mich',
    projects: 'Projekte',
    contact: 'Kontakt',

    about_heading: 'Über mich',
    intro_greeting:
      '👋 Hallo, ich bin Morne Gouws! Ich bin 27 Jahre alt, komme aus Namibia und lebe derzeit in Deutschland.',
    intro_description:
      'Videospiele weckten schon früh meine Leidenschaft für Technologie, was mich dazu brachte, verschiedene Rollen in professionellen und persönlichen Projekten zu erkunden. Von der Spieleentwicklung bis zu IT-Lösungen habe ich es genossen, durch praktische Erfahrung und ständige Neugier zu lernen. Ich suche immer nach neuen Herausforderungen und Möglichkeiten, mein wachsendes Können im sich ständig weiterentwickelnden Technologiebereich einzusetzen.',

    work_history_title: 'Berufserfahrung',
    work_pelicad: 'Pelicad (ehemals Cityscaper)',
    work_pelicad_desc1:
      'Webentwicklung (Frontend/Backend), API-Entwicklung, Datenbankverwaltung und -entwicklung.',

    work_rooftop_desc: 'Lösungsarchitekt und Spieleentwickler/-designer',

    work_loud_rabbits_desc: 'Lösungsarchitekt und Spieleentwickler/-designer',

    work_freelance: 'Freiberufliche Spieleentwicklung',
    work_freelance_desc: 'Spieleentwickler/-designer',

    work_academy_desc: 'Studentenvertreter, Tutor, Redner',

    work_geeks4u_desc: 'Allgemeine IT, Business-IT, Netzwerktechniker, IT-Administrator',

    certifications_title: 'Zertifikate',
    cert_aws_solutions: 'AWS Certified Solutions Architect - Associate',
    cert_aws_solutions_date: 'Ausgestellt: März 2025',

    cert_aws_cloud: 'AWS Certified Cloud Practitioner',
    cert_aws_cloud_date: 'Ausgestellt: März 2025',

    cert_game_dev: 'Game & Interactive Media Dev Zertifikat',

    technical_skills: 'Technische Fähigkeiten',

    skills_title: 'Fähigkeiten',
    skill_english: 'Englisch (Muttersprache)',
    skill_afrikaans: 'Afrikaans (Muttersprache)',
    skill_german: 'Deutsch (mittelstufig)',
    skill_team_lead: 'Teamleitung & Koordination',
    skill_project_org: 'Projektorganisation & Planung',
    skill_resource_alloc: 'Ressourcenzuweisung & Priorisierung',
    skill_problem_solving: 'Strategische Problemlösung',
    skill_adaptable: 'Anpassungsfähig unter Druck',
    skill_communicator: 'Starker Kommunikator & Teamplayer',
    skill_self_reliant: 'Selbstständig & eigenmotiviert',

    personal_interests_title: 'Persönliche Interessen',
    interest_games: 'Spiele',
    interest_games_desc:
      'Strategie; Citybuilder; Milsims; Team-basierte Spiele; RPGs; Tabletop; TTRPGs; Brettspiele;',
    interest_airsoft: 'Airsoft/Paintball',
    interest_minipaint: 'Miniaturmalerei',
    interest_films: 'Filme',
    interest_reading: 'Lesen',
    interest_reading_desc: 'Philosophie; Fantasy; Horror',
    interest_cooking: 'Kochen',
    interest_cooking_desc: 'Ich liebe Curry',
    interest_reddit: 'Reddit',
    interest_reddit_desc:
      'Moderation des Namibian Subreddits, um sicherzustellen, dass die Inhalte den Regeln entsprechen',

    more_about_me_title: 'Mehr über mich',
    more_about_me_paragraph1:
      'Ich wurde in Swakopmund, Namibia geboren und bin dort aufgewachsen. Ich war von klein auf ein leidenschaftlicher Gamer und wollte immer mehr über die IT-Welt lernen. Ich habe die CompTIA A+ und N+ Prüfungen in der Schule bestanden, obwohl das Institut nicht akkreditiert war. Trotzdem konnte ich die erlernten Fähigkeiten nutzen, um direkt nach der Schule eine IT-Stelle zu bekommen. Ich verwaltete Unternehmen, baute lokale Netzwerkinfrastrukturen auf und erledigte allgemeine IT-Arbeiten, bis ich mir ein weiteres Studium leisten konnte. Später studierte ich Spiele- und Multimediaentwicklung in Kapstadt. Mit diesem Skillset arbeitete ich sechs Jahre lang als Entwickler in verschiedenen Bereichen. Ich entwickelte interaktive VR-Videos, die bei einer WHO-Konferenz in Montreal vorgestellt wurden, Multiplayer-Bildungsspiele, die bei UNICEF-Trainings eingesetzt wurden, einen interaktiven digitalen Gesundheitsassistenten zur Beratung bei Alkohol- und Tabakmissbrauch für PAHO und eine Reihe von Freizeitspielen für Kunden – darunter auch Augmented Reality-Projekte.',
    more_about_me_paragraph2:
      'Dann entschied ich mich, nach Europa auszuwandern, und begann bei Pelicad zu arbeiten, einem Start-up, das ein web-basiertes Produkt für architektonische Visualisierung entwickelt. Dort vertiefte ich meine Webentwicklungskenntnisse mit Vue und TypeScript. Ich entwickelte eine RESTful API sowie ein Datenbankverwaltungssystem mit Firebase, Firestore und Firebase Cloud Functions, das Dateikonvertierungen und Tag-Management abwickelt.',
    more_about_me_paragraph3:
      'Ende 2024 entschied ich mich, meinen Werkzeugkasten zu erweitern und absolvierte zwei AWS-Zertifizierungen. Ich bin sehr daran interessiert, cloud-basierte Tools und Services zur Entwicklung von Geschäftslösungen einzusetzen.',
    more_about_me_paragraph4:
      'Jetzt suche ich eine Rolle, in der ich meine Erfahrung in Entwicklung, Infrastruktur und Cloud-Technologien einsetzen kann und die Neugier, Vielseitigkeit und zielgerichtete Arbeit schätzt. Ob beim Aufbau immersiver Erlebnisse oder robuster Backend-Systeme – ich werde von der Leidenschaft angetrieben, echte Probleme mit Technologie zu lösen, und freue mich auf jede neue Herausforderung.',
    title: 'Meine Arbeit',
    leftColumnTitle: 'Spiel- & Sonstige Projekte',
    project1Title: 'UNICEF Multiplayer Brettspiel',
    project1Description:
      'Ein Multiplayer-Brettspiel, das für Schulungen und andere UNICEF-Veranstaltungen verwendet wird. Es bietet verschiedene Spielmodi und ist für PC, Mac und im Browser verfügbar. Das Spiel ist ein Team-basiertes, rundenbasiertes Trivia-Spiel mit einem normalen Modus, einem Moderator-Modus (der einem Moderator mehr Kontrolle über das Erlebnis und die Fragen gibt) und einem Gruppenmodus. Es wird noch immer bei verschiedenen Veranstaltungen und Workshops von UNICEF genutzt. (Video zeigt eine frühe Entwicklungsfassung, bevor sensible Inhalte enthalten waren.)',
    project2Title: 'Pahola für PAHO',
    project2Description:
      'Ein digitaler Assistent, der Informationen und Beratung zu Risiken und Missbrauch von Tabak und Alkohol bietet. Ich implementierte die Konversationsfähigkeiten mit Dialogflow und entwickelte ein benutzerdefiniertes Analysesystem mit Webhooks. Diese Lösung umging eine Einschränkung, die uns daran hinderte, Analysen an den eingebetteten Agenten auf der Website anzuhängen. Ich sparte wochenlange Projektzeit durch die Automatisierung des Exports/Imports der Konversation für eine einfachere Lokalisierung in drei weitere Sprachen.',
    project3Title: 'Iziko AR Museums-Exponat',
    project3Description:
      'Mein erstes Kundenprojekt, entwickelt als Student. Ich leitete ein Team von Kommilitonen zur Erstellung eines Augmented Reality Museums-Exponats, das alten ägyptischen Bestattungsriten folgt und ihre Vorstellungen vom Leben nach dem Tod zeigt. Ich entwickelte die AR-Systeme, erstellte einige der 3D-Assets und sorgte für die vollständige Integration von 3D-Assets, Animationen und Systemen. Ich baute auch das physische Modell, über das AR-Elemente mittels eines Tablets auf Schienen gelegt werden. Dieses Exponat ist in Kapstadt im Iziko Slave Lodge Museum noch öffentlich zugänglich.',
    project4Title: 'Petal',
    project4Description:
      'Ein Spiel, das in Zusammenarbeit mit einem Künstler entwickelt wurde. Wir forderten uns heraus, es in einer Woche nur in unserer Freizeit nach der Arbeit zu bauen. Das Projekt war ein persönliches Experiment mit Unitys damals neuer Rendering-Pipeline und 2D-Partikelsystem. Es wurden keine externen Kunst-Assets oder Pakete verwendet – alles wurde mit der Basisversion der Unity-Engine erstellt.',
    project5Title: 'Mogaus Königreich',
    project5Description:
      'Ein mobiles Lernspiel, das junge Kinder zum Lesen animieren soll. Es begann als Hackathon-Demo in Zusammenarbeit mit einer südafrikanischen NPO, die später Mittel bereitstellte, damit ich das Projekt vollständig entwickeln und auf Android und iOS veröffentlichen konnte. Ich übernahm die gesamte Pipeline – von der Konzeption bis zur Veröffentlichung. Ich hatte auch die Möglichkeit, das Spiel mit Kindern in Gemeinschaftszentren zu testen, begleitet von Buchspenden der NPO an deren Bibliotheken.',
    project6Title: 'Reset Earth Simulation für WHO',
    project6Description:
      'Ein webbasiertes Lernspiel, entwickelt für ein WHO-Programm, das das Bewusstsein für den Klimawandel bei Kindern und Jugendlichen fördern soll. Ich arbeitete mit Pädagogen zusammen, um begleitende Lernmodule zu erstellen, die zusammen in Schulworkshops verwendet wurden.',
    project7Title: 'Timothee',
    project7Description:
      'Ein kurzes 2D-Horrorspiel, das ich mit einem Künstler während eines Game Jams entwickelte. Wir waren das einzige Zweierteam und bauten das Spiel in 48 Stunden ohne Drittanbieter-Assets – nur mit der Basis-Unity-Engine.',
    rightColumnTitle: 'Konventionelle Software-Arbeit',
    rightColumnIntro:
      'Der erste Eintrag ist diese Portfolio-Website. Alle anderen unten aufgeführten Projekte wurden in professionellem Rahmen für ein kommerzielles Produkt abgeschlossen.',
    rightProject1Title: 'Diese Website!',
    rightProject1Description:
      'Diese Website verwendet eine CI/CD-Pipeline, die von AWS Amplify betrieben wird. Sie ist auf Route 53 gehostet und mit Vue gebaut. Die Bereitstellung ist vollautomatisiert und wird bei Updates des Hauptbranches meines Git-Repositories ausgelöst!',
    rightProject1Tech: 'Amplify; Git; Vue; TypeScript; Tailwind',
    rightProject2Title: 'Website-Grundgerüst',
    rightProject2Description:
      'Ich habe die Webanwendung für das Produkt aufgesetzt. Routen, Seiten und die Struktur für zukünftige Entwicklung wurden eingerichtet. Zudem wurde ein Lokalisierungssystem für mehrsprachige Unterstützung integriert.',
    rightProject2Tech: 'Vue; TypeScript; Tailwind',
    rightProject3Title: 'RESTful API für Materialien und Metadaten',
    rightProject3Description:
      'Ich entwickelte eine API, die im Webprodukt verwendet wird, um Materialien als GLTF-Dateien mit deren Metadaten bereitzustellen. Die API unterstützt Suchparameter, Filter sowie das Hochladen neuer Materialien und Metadaten.',
    rightProject3Tech: 'Firebase Cloud Functions; Firestore; Firebase Realtime Storage',
    rightProject4Title: 'Datenbank-Migrations- und Konvertierungssystem',
    rightProject4Description:
      'Ich baute ein internes Tool, das Materialien aus Partner-Datenbanken migrierte und an das erwartete Format des Produkts anpasste. Es generierte Metadaten, ermöglichte Tagging und führte automatische Gesundheitschecks der Materialien durch.',
    rightProject4Tech: 'Node.js; Firebase Cloud Functions; Firestore',
    rightProject5Title: 'Datenbank-Wartung',
    rightProject5Description:
      'Ich erstellte eine Sammlung von Kommandozeilen-Tools für datenbankweite Patches, Prüfungen und Wartungsaufgaben. Außerdem entwickelte ich ein webbasiertes internes Tool für einfachere Datenbankverwaltung, Objektdurchsicht und aufgabenspezifische Funktionen.',
    rightProject5Tech: 'Vue; Node.js; Firebase Cloud Functions; Firestore',
    rightProject6Title: 'Benutzerverwaltungssystem',
    rightProject6Description:
      'Ich integrierte eine bestehende Benutzerdatenbank mit der neuen Web-App über Firebase Authentication. Implementierte Benutzerkonten-Management-Flows, konfigurierte Sicherheitsregeln und entwickelte Benutzerverwaltungsoberflächen.',
    rightProject6Tech: 'Vue; Firebase Authentication; Firebase Cloud Functions',
    rightProject7Title: 'Frontend-Architektur und Komponentenentwicklung',
    rightProject7Description:
      'Ich baute verschiedene Seiten und wiederverwendbare Komponenten für die Web-App. Entwickelte dynamische Komponenten mit Funktionen wie Größenänderung, Floating und flexibler Wiederverwendung in unterschiedlichen Bereichen der Anwendung.',
    rightProject7Tech: 'Vue; Typescript; Tailwind',

    contactTitle: 'Kontakt aufnehmen',
    contactIntro:
      'Ich würde mich freuen, von Ihnen zu hören. Füllen Sie das untenstehende Formular aus oder kontaktieren Sie mich über einen der Links.',
    contactPlaceholderName: 'Ihr Name',
    contactPlaceholderEmail: 'Ihre E-Mail',
    contactPlaceholderMessage: 'Ihre Nachricht',
    contactButtonSend: 'Nachricht senden',
    contactSuccess: 'Nachricht erfolgreich gesendet!',
    contactError: 'Hoppla! Etwas ist schiefgelaufen.',
    contactExtraEmail: 'E-Mail',
    contactExtraLinkedIn: 'LinkedIn',
  },
}

// Create the i18n instance
const i18n = createI18n({
  locale: 'en', // default language
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)

// Tell Vue to use the i18n plugin
app.use(i18n)

app.mount('#app')
