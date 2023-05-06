import {
  shristi,
  abhinav,
  aditya,
  mobile,
  weather,
  sneakgeek,
  backend,
  creator,
  web,
  javascript,
  typescript,
  certified,
  webdev,
  full,
  professional,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kioku,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "App Dev",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Skills",
    _name: "Starbucks",
    icon: professional,
    iconBg: "#383E56",
    date: "Sept 2020 - Present",
    points: [
      "Java, Python, Cloud Computing, HTML, CSS, JavaScript, MERN, SQL",
    ],
  },
  {
    title: "Certification",
    _name: "Starbucks",
    icon: certified,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Dec 2022",
    points: [
      "Applied Machine Learning in Python- Coursera " ,"Azure Cloud Computing - Teachnook",
    ],
  },
  {
    title: "Web Developer",
    _name: "Starbucks",
    icon: webdev,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      
    ],
  },
  {
    title: "Full stack Developer",
    _name: "Starbucks",
    icon: full,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Upcoming skilled full stack developer." ,"Building responsive website front end using React.","Swimming across different tech stacks and developing & maintaining web applications using Node.js and other related technologies.",
    ],
  },
];

const reviews = [
  {
    reviews:
      "I thought it was impossible to make a website as beautiful as this.",
    name: "shristi",
    designation: "student",
    company: "VIT",
    image: shristi,
  },
  {
    reviews:
      "I've never met a web developer who truly cares about detailing in their work.",
    name: "abhinav",
    designation: "student",
    company: "MMM",
    image: abhinav,
  },
  {
    reviews:
      "Great portfolio and motivating work",
    name: "aditya",
    designation: "student",
    company: "DU",
    image: aditya,
  },
];

const projects = [
  {
    name: "sneakgeek",
    description:
      "sneakgeek is an application/platform that brings sneaker heads together to buy, sell, and show off their collection without the hassle of a middleman!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: sneakgeek,
    source_code_link: "https://github.com/itzmeutkarshh/sneakgeek.github.io.git",
  },
  {
    name: "kioku",
    description: 
      " A well refined project to store your valuable memories in a digital Diary.Help to improve the user Experience...inspired by Anime: KIMI NO NA WA ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: kioku,
    source_code_link: "https://github.com/itzmeutkarshh/kioku.git",
  },
  {
    name: "Weather App",
    description:
      "Weather App Using React.js With Current Location & Search City. The app also comes with animated sunrise, sunset,wind and pressure modules. Gives current location with day,date and time",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/itzmeutkarshh/Weather_App.git",
  },
];

export { services, technologies, experiences, reviews, projects };
