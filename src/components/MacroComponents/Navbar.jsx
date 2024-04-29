import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      {/* Top Nav */}
      <div className="bg-footer_bg text-white flex items-center justify-between px-14 py-8 text-sm">
        <p>Welcome To Our Simple E-commerce Website & Get The Best Products</p>
        <p>April 28, 2024</p>
      </div>
      <div className="font-inconsolata text-4xl font-bold px-14 py-8 border-b-[1px] border-footer_bg">
        Test<span className="text-alert_clr">.</span>
      </div>
      <ul className="flex items-start justify-start gap-8 px-14 pt-8 pb-5 border-b-[1px] border-footer_bg">
        <li className="hover:italic hover:underline hover:text-alert_clr duration-150 transition-all ease-linear">
          <a href="#">Home</a>
        </li>
        <li className="hover:italic hover:underline hover:text-alert_clr duration-150 transition-all ease-linear">
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
