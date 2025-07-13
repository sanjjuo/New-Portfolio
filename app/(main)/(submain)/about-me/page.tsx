import React from "react";
import CustomerSays from "@/components/CustomerSays/CustomerSays";
import WhoAmI from "@/components/common/WhoAmI/WhoAmI";

const AboutPage = () => {
  return (
    <>
      <div>
        <div className="app-width">
          <WhoAmI readmore="about" />
        </div>
        <CustomerSays />
      </div>
    </>
  );
};

export default AboutPage;
