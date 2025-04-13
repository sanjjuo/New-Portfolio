import Services from "@/components/CommonUi/Services/Services";
import WhoAmI from "@/components/CommonUi/WhoAmI/WhoAmI";
import CustomerSays from "@/components/CustomerSays/CustomerSays";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <div className="max-w-[1200px] mx-auto">
          <WhoAmI image='aboutImage'/>
          <Services />
        </div>
        <CustomerSays />
      </div>
    </>
  );
};

export default page;
