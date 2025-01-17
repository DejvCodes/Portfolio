// Icons
import { FaGithub } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

// Images
import reesutCutImg from "../images/project-ReesutCut.jpg"
import sneakersAppImg from "../images/project-SneakersApp.png"
import nexaYonderImg from "../images/project-NexaYonder.jpg"
import rentUpImg from "../images/project-RentUp.png"
import dejvCodesImg from "../images/project-DejvCodes.png"
import travelIsLifeImg from "../images/project-TravelIsLife.png"

export const nav = [
  {
    id: 1,
    path: "#home",
    text: "Home",
  },
  {
    id: 2,
    path: "#about-me",
    text: "About me",
  },
  {
    id: 3,
    path: "#skills",
    text: "Skills",
  },
  {
    id: 4,
    path: "#projects",
    text: "Projects",
  },
  {
    id: 5,
    path: "#contact",
    text: "Contact",
  },
]

export const socials = [
  {
    link: "https://github.com/DejvCodes",
    icon: <FaGithub />,
  },
  {
    link: "https://www.facebook.com/david.kalmus.90/",
    icon: <FaFacebook />,
  },
  {
    link: "https://www.instagram.com/iam_dejv_k/",
    icon: <FaInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/david-kalmus-5b6b99299/",
    icon: <FaLinkedin />,
  },
  {
    link: "mailto:dejvcodes@gmail.com",
    icon: <FaEnvelope />,
  },
]

export const icons = [
  {
    icon: "devicon-html5-plain",
    language: "HTML5",
  },
  {
    icon: "devicon-css3-plain",
    language: "CSS3",
  },
  {
    icon: "devicon-javascript-plain",
    language: "JavaScript",
  },
  {
    icon: "devicon-react-original",
    language: "React",
  },
  {
    icon: "devicon-wordpress-plain",
    language: "WordPress",
  },
  { 
    icon: "devicon-sass-original",
    language: "SASS",
  },
  {
    icon: "devicon-bootstrap-plain",
    language: "Bootstrap"
  },
  {
    icon: "devicon-mysql-plain",
    language: "MySQL",
  },
  {
    icon: "devicon-firebase-plain",
    language: "Firebase",
  },
  {
    icon: "devicon-figma-plain",
    language: "Figma",
  },
  {
    icon: "devicon-vscode-plain",
    language: "VS Code",
  },
  {
    icon: "devicon-github-original",
    language: "GitHub",
  }
]

export const allProjects = [
  {
    id: 0,
    image: reesutCutImg,
    cardTitle: "ReesutCut",
    typeOfProject: "Website",
    link: "https://reesutcut.cz",
    githubLink: false,
  },
  {
    id: 1,
    image: sneakersAppImg,
    cardTitle: "Sneakers App",
    typeOfProject: "E-shop",
    link: "https://sneakers-eshop-dejvcodes.netlify.app",
    githubLink: "https://github.com/DejvCodes/Sneakers-App-2",
  },
  {
    id: 2,
    image: nexaYonderImg,
    cardTitle: "Nexa Yonder",
    typeOfProject: "Website",
    link: "https://nexa-yonder.netlify.app",
    githubLink: "https://github.com/DejvCodes/Nexa-Yonder",
  },
  {
    id: 3,
    image: rentUpImg,
    cardTitle: "Rent Up",
    typeOfProject: "Website",
    link: "https://rentup-dejvcodes.netlify.app/",
    githubLink: "https://github.com/DejvCodes/RentUp",
  },
  {
    id: 4,
    image: dejvCodesImg,
    cardTitle: "DejvCodes",
    typeOfProject: "Website",
    link: "https://dejvcodes.netlify.app/",
    githubLink: "https://github.com/DejvCodes/Portfolio-DejvCodes",
  },
  {
    id: 5,
    image: travelIsLifeImg,
    cardTitle: "Travel Is Life",
    typeOfProject: "Website",
    link: "https://travel-is-life-dejvcodes.netlify.app/",
    githubLink: false,
  }
]

export const contacts = [
  {
    icon: <FaLinkedin />,
    network: "LinkedIn",
    link: "https://www.linkedin.com/in/david-kalmus-5b6b99299/",
    text: "David Kalmus",
  },
  {
    icon: <FaEnvelope />,
    network: "E-mail",
    link: "mailto:dejvcodes@gmail.com",
    text: "dejvcodes@gmail.com",
  },
  {
    icon: <FaGithub />,
    network: "GitHub",
    link: "https://github.com/DejvCodes",
    text: "DejvCodes",
  },
]