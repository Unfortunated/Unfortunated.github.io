import type { Project } from '../types/project'
import sniplyLogo from '../assets/sniplylogo.svg'
import capmooLogo from '../assets/capmoo.svg'
import bigdata from '../assets/bigdata.svg'
import portfolio from '../assets/portfolio.svg'
import fmm from '../assets/find-my-mines.svg'
import sa from '../assets/slottedaloha.svg'
export const recentProj: Project[] = [
  {
    title: 'Sniply (August 2025 - May 2026)',
    imgSrc: sniplyLogo,
    content: [
      'Built a cross-platform technical note-taking application with executable code blocks using Electron.',
      'Implemented 300 automated unit/component/backend test cases to validate frontend interactions and backend logic.',
      'Designed 13 end-to-end testing workflows to validate application reliability and user interactions.',
      'Achieved 90% statement coverage in tested files.',
      'Tech Stack: Electron, React, TypeScript, Jest, Playwright, SQLite',
    ],
    link: 'https://github.com/mukumikuu/tech-note-app',
    repoTitle: 'tech-note-app',
  },
  {
    title:
      'Predicting Diarrhea Outbreak in Bangkok using Random Forest Classifier (April 2026)',
    imgSrc: bigdata,
    content: [
      'Engineered temporal and statistical features from district-level diarrhea case data including lag variables, rolling averages, severity ratios, and seasonality indicators.',
      'Implemented a classification model to predict districts most likely to experience diarrhea outbreaks in the coming period.',
      'Implemented a regression model to forecast future diarrhea case counts for advance preparation and resource planning.',
    ],
    link: 'https://github.com/Unfortunated/2143488-Big-Data-AI-Final-Project',
    repoTitle: 'big-data-final-project',
  },
  {
    title: 'Portfolio (May 2026)',
    imgSrc: portfolio,
    content: [
      'Designed and implemented a multi-page portfolio website using React and TypeScript',
      'Designed responsive UI with a dark theme and cyan accent colour system',
      'Built reusable components including a carousel, content cards, and blurred background navigation',
      'Tech Stack: React, Vite, TypeScript, React-Router',
    ],
    link: 'https://github.com/Unfortunated/portfolio',
    repoTitle: 'portfolio',
  },
]
export const prevProj: Project[] = [
  {
    title: 'Slotted Aloha Simulation (Oct 2025)',
    imgSrc: sa,
    content: [
      'Developed simulation of slotted aloha protocol in data link layer',
      'Implemented Pseudo-Bayesian improvement to compare with original design',
      'Tech Stack: Python, matplotlib, numpy',
    ],
    link: 'https://github.com/Unfortunated/SlottedAlohaSimulation',
    repoTitle: 'slotted-aloha',
  },
  {
    title: 'Capmoo (Jan 2025 - May 2025)',
    imgSrc: capmooLogo,
    content: [
      'Managed a team of 12 members to develop a progressive web application for booking tours and activities.',
      'Led project planning and coordination as project manager using Agile methodologies.',
      'Tech Stack: React, TypeScript, Go',
    ],
    link: 'https://github.com/ice-106/capmoo',
    repoTitle: 'capmoo',
  },
  {
    title: 'Find my mines (Sep 2024 - Nov 2024)',
    imgSrc: fmm,
    content: [
      'Coordinated with a team of 7 to develop and deploy turn-based web game to find hidden mines',
      'Implemented an interactive browser-based game with real-time state management using React and TypeScript',
      'Tech Stack: MongoDB, Express.js, React, Next.js',
    ],
    link: 'https://github.com/Unfortunated/find-my-mines',
    repoTitle: 'find-my-mines',
  },
]
