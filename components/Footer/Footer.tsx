import React from "react";
import Link from "next/link";
import { footerContents } from "@/Data/data";

const Footer = () => {
  return (
    <div className="bg-black p-5 lg:py-20 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 xl:gap-20">
        {/* About Section */}
        <div className="col-span-1 lg:col-span-1 xl:col-span-2 space-y-10">
          <h2 className="uppercase text-base tracking-widest font-bold">
            {footerContents[0].section}
          </h2>
          <p className="text-gray-400 text-sm lg:text-base">
            {footerContents[0].aboutContent?.description}
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-10">
          <h2 className="uppercase text-base tracking-widest font-bold">
            {footerContents[1].section}
          </h2>
          <ul className="space-y-3">
            {footerContents[1].linkContent?.map((link, index) => (
              <li key={index} className="capitalize">
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-appColor-primary cursor-pointer text-sm lg:text-base"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-10">
          <h2 className="uppercase text-base tracking-widest font-bold">
            {footerContents[2].section}
          </h2>
          <div className="space-y-5">
            {footerContents[2].contactContent?.map((item, index) => (
              <div key={index} className="flex items-center gap-5 md:gap-2">
                <span className="w-5 h-5">{item.icon}</span>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="text-gray-400 hover:text-appColor-primary text-sm lg:text-base"
                >
                  {item.description}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
