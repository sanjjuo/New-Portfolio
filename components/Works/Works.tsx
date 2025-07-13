import React from "react";
import { projects } from "./data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import GithubIcon from "../CommonUi/SocialMediaIcons/svg/GithubIcon";
import { Link } from "lucide-react";

const Works = () => {
  return (
      <div className="p-5 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {projects.map((item, index) => (
          <Card
            key={index}
            className="w-auto flex flex-col justify-between h-full bg-black text-white rounded-3xl"
          >
            <CardContent className="p-0 flex-1 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/projectImage.jpg"
                    width={1000}
                    height={60}
                    alt=""
                    className="w-full h-60 rounded-3xl hover:scale-105 duration-700"
                  />
                  <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-black/70 to-transparent rounded-b-md"></div>
                </div>

                <div className="mt-2 p-5 pt-0">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p className="text-white mt-2 line-clamp-3">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap items-center gap-2 mt-2">
                    {item.technologies.map((tech, index) => (
                      <li key={index}>
                        <Badge
                          variant="outline"
                          className="h-8 rounded-full duration-700 text-white hover:scale-110 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-4 mt-auto">
              <span className="flex items-center gap-1 cursor-pointer">
                <Link className="w-4 h-4" />
                <span className="app-text-gradient">Live demo</span>
              </span>
              <span className="flex items-center gap-1 cursor-pointer">
                <GithubIcon strokeWidth={1.5} className="w-6 h-6 fill-white" />
                <span className="first-letter:uppercase app-text-gradient">
                  {item.github}
                </span>
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
  );
};

export default Works;
