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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-[1200px] mx-auto mt-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="w-full p-5 flex flex-col items-center justify-center
                        transition transform duration-700 ease-in-out hover:bg-appColor-primary rounded-full cursor-pointer space-y-2 group"
            >
              <Image
                src={skill.image}
                width={100}
                height={100}
                alt="skills-icons"
                className="transition transfor duration-300 ease-in-out group-hover:-rotate-12"
              />
              <h5 className="font-semibold tracking-wide capitalize">
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
