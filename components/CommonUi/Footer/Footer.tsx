import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black p-5 lg:py-20 text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 lg:gap-10 xl:gap-20">
          <div className="md:col-span-1 lg:col-span-1 xl:col-span-2 space-y-10">
            <h2 className="uppercase text-base tracking-widest font-bold">
              About me
            </h2>
            <p className="text-gray-400 text-sm lg:text-base">
              Frontend Developer, Web Designer, Web Developer, and the
              Footballer.
            </p>
          </div>
          <div className="space-y-10">
            <h2 className="uppercase text-base tracking-widest font-bold">
              links
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-appColor-primary cursor-pointer text-sm lg:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-appColor-primary cursor-pointer text-sm lg:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-400 hover:text-appColor-primary cursor-pointer text-sm lg:text-base"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-appColor-primary cursor-pointer text-sm lg:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-10">
            <h2 className="uppercase text-base tracking-widest font-bold">
              have a question?
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-5 md:gap-2">
                <span>
                  <MapPin />
                </span>
                <Link
                  href="/location"
                  className="text-gray-400 hover:text-appColor-primary text-sm lg:text-base"
                >
                  Kerala, India
                </Link>
              </div>
              <div className="flex items-center gap-5 md:gap-2">
                <span>
                  <Phone />
                </span>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-appColor-primary text-sm lg:text-base"
                >
                  +971 50 880 2162
                </Link>
              </div>
              <div className="flex items-center gap-5 md:gap-2">
                <span>
                  <Mail />
                </span>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-appColor-primary text-sm lg:text-base"
                >
                  sanjeedofficial22@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
