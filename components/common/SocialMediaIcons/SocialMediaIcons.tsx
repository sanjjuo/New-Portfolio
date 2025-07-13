import React from "react";
import { socialMediaIcons } from "./data";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      {socialMediaIcons.map((item) => (
        <Link href='' key={item.id}>
          <div>{item.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
