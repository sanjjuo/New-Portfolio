import FrontendIcon from "@/SVG/FrontendIcon";
import WebDesignIcon from "@/SVG/WebDesignIcon";
import WebDeveloperIcon from "@/SVG/WebDeveloperIcon";
import {
  FooterSection,
  NavLink,
  Service,
  Skill,
  Testimonial,
} from "@/Types/type";
import { MapPin, Phone, Mail } from "lucide-react";

export const navLinks: NavLink[] = [
  {
    title: "about",
    href: "/about-me",
  },
  {
    title: "works",
    href: "/my-works",
  },
  {
    title: "contact",
    href: "/contact-me",
  },
];

export const services: Service[] = [
  {
    icon: <FrontendIcon className="w-32 h-32" />,
    title: "Frontend Development",
  },
  {
    icon: <WebDesignIcon className="w-32 h-32" />,
    title: "Web Design",
  },
  {
    icon: <WebDeveloperIcon className="w-32 h-32" />,
    title: "Web Development",
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    title: "html",
    image: "/html.png",
  },
  {
    id: 2,
    title: "css",
    image: "/css.webp",
  },
  {
    id: 3,
    title: "react.js",
    image: "/react.png",
  },
  {
    id: 4,
    title: "next.js",
    image: "/nextjs.png",
  },
  {
    id: 5,
    title: "typescript",
    image: "/typescript.png",
  },
  {
    id: 6,
    title: "javascript",
    image: "/javascript.png",
  },
  {
    id: 7,
    title: "bootstrap",
    image: "/bootstrap.png",
  },
  {
    id: 8,
    title: "tailwind",
    image: "/tailwind.webp",
  },
  {
    id: 9,
    title: "react native",
    image: "/react-native.png",
  },
  {
    id: 10,
    title: "node.js",
    image: "/nodejs.png",
  },
  {
    id: 11,
    title: "mongoDB",
    image: "/mongo-db.png",
  },
  {
    id: 12,
    title: "express.js",
    image: "/express.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ajna Jasmin",
    image: "/client.webp",
    title: "Product Manager",
    comment:
      "Working with Sanjeed was a game-changer. He transformed our rough ideas into a responsive UI loved by users.",
  },
  {
    name: "Ziyad Kunheen",
    image: "/client.webp",
    title: "Founder of Codeedex Technologies",
    comment:
      "Reliable, fast, and skilled in React and Tailwind. Every component he built was clean and reusable.",
  },
  {
    name: "Abdallah Zaher",
    image: "/client.webp",
    title: "Startup Founder",
    comment:
      "He has a sharp eye for detail and design. Our outdated frontend became modern, fast, and user-friendly.",
  },
  {
    name: "Talal",
    image: "/client.webp",
    title: "Backend Developer",
    comment:
      "Testing was easy because of his organized code and smooth UI. He paid attention to every small detail.",
  },
  {
    name: "Omar",
    image: "/client.webp",
    title: "Frontend Developer",
    comment:
      "The integration process was seamless thanks to his clean code. A reliable developer with great skills.",
  },
  {
    name: "Samiuddin",
    image: "/client.webp",
    title: "Project Coordinator",
    comment:
      "His communication and feedback handling were excellent. It felt like working with a full-time teammate.",
  },
  {
    name: "Safwan",
    image: "/client.webp",
    title: "UI/UX Designer",
    comment:
      "He built the frontend exactly how we envisioned. Animations and responsiveness were buttery smooth.",
  },
  {
    name: "Ajwad",
    image: "/client.webp",
    title: "Backend Developer",
    comment:
      "Sanjeed understood the assignment perfectly. Refactoring boosted performance without breaking anything.",
  },
  {
    name: "Hafish Ali",
    image: "/client.webp",
    title: "Team Lead of Codeedex Technologies",
    comment:
      "He truly cared about user experience and code quality. His frontend work spoke volumes of his passion.",
  },
];

export const footerContents: FooterSection[] = [
  {
    section: "About Me",
    aboutContent: {
      description: "Frontend Developer, Web Designer, and Web Developer.",
    },
    linkContent: [],
    contactContent: [],
  },
  {
    section: "Links",
    aboutContent: {
      description: "",
    },
    linkContent: [
      { title: "Home", href: "/" },
      { title: "about", href: "/about-me" },
      { title: "work", href: "/my-works" },
      { title: "contact", href: "/contact-me" },
    ],
    contactContent: [],
  },
  {
    section: "have a question?",
    aboutContent: {
      description: "",
    },
    linkContent: [],
    contactContent: [
      {
        icon: <MapPin className="text-gray-400" />,
        description: "kerala, india",
        href: "#",
      },
      {
        icon: <Phone className="text-gray-400" />,
        description: "+971 50 880 2162",
        href: "#",
      },
      {
        icon: <Mail className="text-gray-400" />,
        description: "sanjeedofficial22@gmail.com",
        href: "#",
      },
    ],
  },
];
