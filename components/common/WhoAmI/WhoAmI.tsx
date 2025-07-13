import Link from "next/link";
import AboutCard from "./AboutCard";

const WhoAmI = ({ readmore }: { readmore: string }) => {
  return (
    <>
      <div id="who-am-i" className="p-5 lg:py-20">
        <div className="space-y-3 flex flex-col items-center justify-center">
          <p className="app-text text-4xl text-center lg:text-7xl">
            Frontend Developer, Web Designer, and the Web Developer.
          </p>
          <p className="text-center">
            Frontend Developer with 1.2 year of experience in React.js
            development. Skilled in the MERN stack, React Native, HTML, CSS, and
            JavaScript. Proficient in building scalable, efficient, and
            user-friendly applications. Passionate about learning and applying
            the latest technologies and best practices to deliver high-quality
            solutions.
          </p>
          {readmore === "home" ? (
            <Link
              href="/about-me"
              className=" hover:underline hover:underline-offset-2"
            >
              Read More
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <AboutCard type="experience" />
              <AboutCard type="projects" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
