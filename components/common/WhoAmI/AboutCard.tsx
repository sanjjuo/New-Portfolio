import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ExperienceIcon from "./svg/ExperienceIcon";
import ProjectIcon from "./svg/ProjectIcon";
import { cn } from "@/lib/utils";

const AboutCard = ({type} : {type:string}) => {
  return (
    <Card className={cn(type === "experience" ? "hover:shadow-red-500" : "hover:shadow-blue-500", "w-60 mt-5 cursor-pointer duration-500 ease-in-out")}>
      <CardContent className="p-5">
        <div className="flex flex-col items-center justify-center">
          {type === 'experience' ? <ExperienceIcon className="w-20 h-20" /> : <ProjectIcon className="w-20 h-20" />}
          <div className="text-center">
            <h1 className="font-bold">{type === 'experience' ? "Experience" : "Projects"}</h1>
            <p>{type === "experience" ? "1+ Years" : "10+ Completed"}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
