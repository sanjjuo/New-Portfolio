import Link from "next/link";
import SocialMediaIcons from "../common/SocialMediaIcons/SocialMediaIcons";

const Hero = () => {
  return (
    <div className="h-[60vh] pb-10 lg:p-0 lg:h-screen w-full bg-black flex flex-col items-center justify-end lg:justify-center space-y-10">
      <div className="text-center border-b-4 border-blue-300 py-5">
        <h1 className="app-text-gradient text-[var(--font-poppins)] text-7xl lg:text-9xl tracking-widest uppercase pointer-events-none font-extrabold">
          sanjeed
        </h1>
        <p className="text-white text-2xl lg:text-4xl">Frontend Developer</p>
      </div>
      <div className="space-y-5">
        <p className="text-white text-sm lg:text-xl max-w-[400px] lg:max-w-[650px] text-center">
          Delivering powerful frontend systems driven by a passion for solving
          real-world challenges.
        </p>
        <SocialMediaIcons />
      </div>
      <div className="hidden lg:block">
        <Link
          href="#who-am-i"
          scroll
          className="absolute bottom-5 left-1/2 -translate-x-1/2 
        uppercase text-white text-sm tracking-widest animate-pulse cursor-pointer"
        >
          scroll down
        </Link>
      </div>
    </div>
  );
};

export default Hero;
