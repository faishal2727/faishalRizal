import {
  frontend,
  backend,
  ux,
  kotlin,
  java,
  flutter,
  dart,
  api,
  firebase,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  greevents,
  engkringan,
  siapaud,
  wikihealthy,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  android,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Mobile Developer',
    icon: frontend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },

];

const technologies = [
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Android',
    icon: android,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Dart',
    icon: dart,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
  {
    name: 'api',
    icon: api,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Greevents',
    description: 'Aplikasi untk mencari event lingkungan',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: greevents,
    repo: 'https://github.com/faishal2727/Capstone',
    demo: 'https://github.com/faishal2727/Capstone',
  },
  {
    id: 'project-2',
    name: 'E-ngkringan',
    description:
      'plikasi pemesanan tempat angkringan secara online.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: engkringan,
    repo: 'https://github.com/faishal2727/E-ngkringan',
    demo: 'https://github.com/faishal2727/E-ngkringan',
  },
  {
    id: 'project-3',
    name: 'Siap-Aud',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: siapaud,
    repo: 'https://github.com/Faizalilham/SIPAUD',
    demo: 'https://github.com/Faizalilham/SIPAUD',
  },
  {
    id: 'project-4',
    name: 'Wikihealthy',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: wikihealthy,
    repo: 'https://github.com/faishal2727',
    demo: 'https://www.figma.com/proto/PsPfAB9tdbtIvr2zSanURB/Inforsary?type=design&node-id=17-13&scaling=scale-down&page-id=0%3A1&starting-point-node-id=17%3A13&show-proto-sidebar=1',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
