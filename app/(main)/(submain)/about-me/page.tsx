import React from "react";
import WhoAmI from "@/components/CommonUi/WhoAmI/WhoAmI";
import CustomerSays from "@/components/CustomerSays/CustomerSays";

const page = () => {
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

export default page;
