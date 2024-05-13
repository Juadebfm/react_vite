import React from "react";
import { getCurrentDate } from "../utils/dateHelper";

const Footer = () => {
  // Call the imported function for use. BAsically storing it inside another variable
  const currentDate = getCurrentDate();
  return (
    <div className="h-[20vh] bg-footer_bg text-white flex_center">
      <span>JuadebDesigns</span>
      &copy;<span>{currentDate}</span>
    </div>
  );
};

export default Footer;
