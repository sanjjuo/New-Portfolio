import { ChevronsDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* first col */}
        <div className="relative">
          <Image
            src="/my-image.jpg"
            width={200}
            height={100}
            alt="my-image"
            className="w-full h-[110vh] lg:h-[100vh] object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50"></div>
        </div>
        {/* second col */}
        <div className="hidden lg:block bg-black h-[100vh] w-full"></div>
        {/* large text */}
        <h1
          className="absolute inset-0 app-text text-[70px] lg:text-[180px] xl:text-[260px] tracking-widest uppercase text-transparent stroke-white stroke-[4.5px] flex items-center justify-center pointer-events-none"
          style={{
            WebkitTextStroke: "3px white",
          }}
        >
          sanjeed
        </h1>
        <div>
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
    </>
  );
};

export default Hero;
