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
    title: 'Study Club',
    company_name: 'Plug-In',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Ags 2020 - Ags 2021',
  },
  {
    title: 'Bootcamp',
    company_name: 'Dicoding',
    icon: microverse,
    iconBg: '#333333',
    date: 'Ags 2022 - Des 2022',
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
    description: 'Projek Aplikasi Android untuk Penilaian Siswa TK',
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
    description: `Sebuah Design Mobile app untuk Mengetahui Penyakit Berdasarkan Keluhaa.`,
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
