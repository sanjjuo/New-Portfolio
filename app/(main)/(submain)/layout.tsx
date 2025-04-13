"use client";
import BreadCrumbPath from "@/components/CommonUi/BreadCrumbPath/BreadCrumbPath";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const pageName =
    pathname.split("/").filter(Boolean).pop()?.split("-").join(" ") || "/";

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative h-[300px] lg:h-[500px] w-full -mt-28">
          <Image
            src="/base-img.jpg"
            fill
            alt="sub-layout"
            className="object-cover bg-fixed bg-no-repeat"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/60 z-10" />
          <div className="absolute bottom-5 left-5 lg:bottom-20 lg:left-40 space-y-2 z-20">
            <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
              {pageName}
            </h1>
            <BreadCrumbPath pageName={pageName} path={pathname} />
          </div>
        </div>

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </>
  );
};

export default layout;
