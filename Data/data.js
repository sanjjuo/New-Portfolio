import FrontendDesign from "@/SVG/FrontendIcon";
import WebDesignIcon from "@/SVG/WebDesignIcon";
import WebDeveloperIcon from "@/SVG/WebDeveloperIcon";

export const navLinks = [
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

export const services = [
  {
    icon: <FrontendDesign className="w-32 h-32" />,
    title: "Frontend Development",
    bgColor: "#000000",
    color: "#FFFFFF",
    hoverBgColor: "#FDCB6E",
  },
  {
    icon: <WebDesignIcon className="w-32 h-32" />,
    title: "Web Design",
    bgColor: "#FFFFFF",
    hoverBgColor: "#FDCB6E",
  },
  {
    icon: <WebDeveloperIcon className="w-32 h-32" />,
    title: "Web Development",
    bgColor: "#FDCB6E",
    hoverBgColor: "#FDCB6E",
  },
];

export const skills = [
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

export const testimonials = [
  {
    name: "Ajna Jasmin",
    image: "/client.webp",
    title: "Product Manager",
    comment:
      "Working with Sanjeed was a game-changer. He turned our rough ideas into a beautiful, responsive UI that our users absolutely love.",
  },
  {
    name: "Abdallah Zaher",
    image: "/client.webp",
    title: "Startup Founder",
    comment:
      "He has a real eye for detail and an amazing sense of design. Our frontend went from outdated to outstanding.",
  },
  {
    name: "Ziyad Kunheen",
    image: "/client.webp",
    title: "Founder of Codeedex Technologies",
    comment:
      "Reliable, fast, and extremely skilled in React and Tailwind. Every component he built was clean and reusable.",
  },
  {
    name: "Samiuddin",
    image: "/client.webp",
    title: "Project Coordinator",
    comment:
      "What impressed me most was his communication and how well he handled feedback. It felt like working with a team member, not just a freelancer.",
  },
  {
    name: "Safwan",
    image: "/client.webp",
    title: "UI/UX Designer",
    comment:
      "He built a perfect frontend designs. Everything was smooth, from animations to responsiveness.",
  },
  {
    name: "Ajwad",
    image: "/client.webp",
    title: "Backend Developer",
    comment:
      "Sanjeed understood the assignment. The performance of our app improved significantly after his refactoring work.",
  },
  {
    name: "Hafish Ali",
    image: "/client.webp",
    title: "Team Lead of Codeedex Technologies",
    comment:
      "I appreciated how he cared about user experience as much as the code. A true frontend craftsman.",
  },
];
