import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  carrent1,
  jobit,
  tripguide,
  tripguide1,
  tripguide2,
  threejs,
  infosys,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Microsoft web developer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "oct 2019 - dec 2020",
    points: [
      "Developing and maintaining web applications using .net framework and other related technologies.",
      "Collaborating with cross-functional teams including designers, tester, and other developers to create high-quality products.",
      "Given live release support for many sprint releases.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing aAPIs for the a legacy web application.",
      "Familiar with deploying Node.js applications on servers and scaling them for performance.",
      "Understanding of security best practices in Node.js development, such as data validation, authentication, and protection against common vulnerabilities.",
      "Experience in creating RESTful APIs for client-server communication.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "INFOSYS",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Full-stack developer experienced in building end-to-end web applications using the MERN stack.",
      "Building interactive and dynamic user interfaces using React.js.",
      "Data base management using MongoDB and integrating with Node.js",
      "Quality testing and fixing bugs and working togetner with other teams for seamless integration",
    ],
  },

  {
    title: "Freelance Web Developer",
    company_name: "Self Employed",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Responside web desiging to give a cross platform website",
      "Building interactive and dynamic user interfaces using React.js and otheer tools",
      "Firebase integration with react app for quick secure small scale websites",
      "Providing maintaince service and scaling sites for new requirements",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto App",
    description:
      "Web-based platform that allows users to search and tract differnet crypto currency",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent1,
    source_code_link: "https://github.com/pro8tick/Crypto-Hunter",
  },
  {
    name: "Admin Application",
    description:
      "Admin Dashboard for differnet view format of your data. Includes tables ,graph, map and charts features",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: tripguide2,
    source_code_link: "https://github.com/pro8tick/admin_application",
  },
  {
    name: "Natours",
    description:
      "A  tour booking platform that allows users to book different adventure sports around India ,under different terrains.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide1,
    source_code_link: "https://github.com/pro8tick/Natours",
  },
  {
    name: "Booking.com",
    description: "A  tour booking.com clone. A website for hotel booking",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/pro8tick/Bookings_app",
  },
];

export { services, technologies, experiences, testimonials, projects };
