/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #5BBFFE
}

*/

export interface IProjectsData {
  id: number;
  name: string;
  description: string;
  date: string;
  demoLink: string;
}

export const projectsData: IProjectsData[] = [
  {
    id: 1,
    name: "Inja",
    description: "House Reservation",
    date: "2023-04-15",
    demoLink: "https://inja.homes/",
  },
  {
    id: 2,
    name: "Dev Overflow",
    description: "Stack overflow clone",
    date: "2024-03-27",
    demoLink: "https://next-js-training-henna.vercel.app/",
  },
  {
    id: 3,
    name: "OpenWChat",
    description: "WhatsApp clone",
    date: "2023-12-30",
    demoLink: "https://github.com/OpenWChat",
  },
  {
    id: 4,
    name: "Shoppe",
    description: "Mern Stack Shop",
    date: "2023-06-12",
    demoLink: "https://github.com/AliSabet81/Shoppe",
  },
  {
    id: 5,
    name: "Aora",
    description: "React Native Training",
    date: "2024-04-15",
    demoLink: "https://github.com/AliSabet81/React-native-crash-course",
  },
  {
    id: 6,
    name: "Open Twitch",
    description: "Twitch Clone",
    date: "2024-03-10",
    demoLink: "https://github.com/Open-Twitch",
  },
  {
    id: 7,
    name: "3D portofolio",
    description: "This portofolio Project",
    date: "2024-04-26",
    demoLink: "https://github.com/AliSabet81/creative-portofolio",
  },
];

export interface IBtnList {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

export const BtnList: IBtnList[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/AliSabet81",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ali-sabet-443227302",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/ali._sabet_",
    icon: "instagram",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
