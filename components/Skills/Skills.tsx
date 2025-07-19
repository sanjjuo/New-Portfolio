import { skills } from "@/Data/data";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="p-5 lg:py-10">
        <h1 className="uppercase text-appColor-secondary text-3xl text-center font-bold">
          Skills & Technologies
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-5 max-w-[1200px] mx-auto mt-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="w-full p-2 lg:p-5 flex flex-col items-center justify-center
                        transition transform duration-700 ease-in-out cursor-pointer space-y-2 group"
            >
              {skill.image ? (
                <Image
                  src={skill?.image}
                  width={100}
                  height={100}
                  alt="skills-icons"
                  className="transition h-14 w-14 md:h-24 md:w-24 transform duration-300 ease-in-out group-hover:-rotate-12"
                />
              ) : (
                <div className="h-14 w-14 md:h-24 md:w-24 flex items-center justify-center transition transform duration-300 ease-in-out group-hover:-rotate-12">
                  {skill.icon}
                </div>
              )}
              <h5 className="font-semibold text-xs md:text-base tracking-wide capitalize">
                {skill.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
