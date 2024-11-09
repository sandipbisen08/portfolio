import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "Restaurant App",
    description:
      "A restaurant web application developed using HTML, CSS, JavaScript, Firebase Notifications and Hive.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/sandipbisen/social-media-app-flutter",
    url: "https://grilli-git-main-sandips-projects-d8740d41.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "e-commerce-app-mern",
    title: "Salon App",
    description:
      "A Salon web application developed using React.js, Material UI, Redux, and Stripe.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/sandipbisen/ecommerce-web-reactjs",
    url: "https://vercel.com/sandips-projects-d8740d41/ginger-next",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Personal Portfolio",
    description:
      "Experienced inbuilding multi-platform websites using Responsive Web Design/RWD.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/sandipbisen/video-calling-app-flutter",
    url: "https://bisensons.framer.ai",
    tags: ["Framer"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Developer Portfolio",
    description:
      "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/sandipbisen/social-media-api-nodejs",
    url: "https://sandipport.framer.ai/",
    tags: ["Framer"],
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "Grocery List Maker App",
    description:
      "A grocery list maker mobile application developed using Flutter, BloC, Hive DB, and PDF.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sandipbisen/grocery-list-maker-flutter",
    url: "https://github.com/sandipbisen/grocery-list-maker-flutter/releases/latest",
    tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sandipbisen/ecommerce-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
  {
    id: "flutter-carousel-widget-package",
    title: "Flutter Carousel Widget Package",
    description:
      "A customizable carousel widget for Flutter, offering features such as infinite scrolling, auto-scrolling, custom child widgets, pre-built indicators, expandable child widgets, auto-sized child support, and enlarged center page.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sandipbisen/flutter-carousel-widget-package",
    tags: ["Flutter", "Dart", "Carousel"],
  },
  {
    id: "get-time-ago-package",
    title: "GetTimeAgo Package",
    description:
      "A Dart package that converts and formats DateTime objects into human-readable 'time ago' strings, such as '20 seconds ago', 'a minute ago', or '7 hours ago'.",
    icon: "/skills/dart.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sandipbisen/gettimeago",
    tags: ["Dart", "DateTime", "Formatting"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sandipbisen/portfolio-website",
    url: "https://sandipbisen.dev",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  {
    id: "bus-reservation-system-management",
    title: "Bus Reservation System Management",
    description:
      "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
    icon: "/skills/cpp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sandipbisen/bus-reservation-system",
    tags: ["C++", "OOP", "File Handling"],
  },
];
export default projects;
