import { cn } from "@/lib/utils";
import Image from "next/image";

const WhoAmI = ({ image }: { image: string }) => {
  return (
    <>
      <div id="who-am-i" className="grid grid-cols-1 lg:grid-cols-3 p-5 lg:py-20 gap-5 lg:gap-20">
        <div
          className={cn(
            "w-full h-[450px]",
            image === "homeImage" ? "hidden lg:block" : "block"
          )}
        >
          <Image
            src="/my-image.jpg"
            width={1000}
            height={100}
            alt="my-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 space-y-3 flex flex-col items-center justify-center">
          <p className="app-text text-4xl text-center lg:text-start lg:text-7xl">
            Frontend Developer, Web Designer, Web Developer, and the Footballer.
          </p>
          <p>
            Frontend Developer with 1.2 year of experience in React.js
            development. Skilled in the MERN stack, React Native, HTML, CSS, and
            JavaScript. Proficient in building scalable, efficient, and
            user-friendly applications. Passionate about learning and applying
            the latest technologies and best practices to deliver high-quality
            solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
