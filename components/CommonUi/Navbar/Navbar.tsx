import React from "react";
import SideBar from "./SideBar";
import Link from "next/link";
import { navLinks } from "@/Data/data";
const Navbar = () => {
 
  return (
    <>
      <nav className="relative bg-transparent z-50">
        <div className="flex app-width items-center justify-between p-5 lg:py-10">
          <span>
            <Link
              href="/"
              className="text-xl text-white tracking-widest flex items-center gap-1 cursor-pointer font-extrabold uppercase"
            >
              sanjeed
            </Link>
          </span>
          <div>
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="uppercase tracking-widest text-xs text-white font-bold
                             hover:text-appColor-primary cursor-pointer"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              <SideBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
