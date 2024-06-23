import React from "react";
import { getCurrentDate } from "../utils/dateHelper";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // Call the imported function for use. basically storing it inside another variable
  const currentDate = getCurrentDate(); // we created ourselves
  // Call the imported hook or store it in a variable
  const location = useLocation(); // from a dependency
  return (
    <header>
      <nav className="">
        <div className="bg-footer_bg text-white px-[25px] lg:px-[40px] py-5 flex_center">
          <p>Welcome to Test & Get the best product</p>
          <span className="text-[11px] lg:text-base">{currentDate}</span>
        </div>
        <Link to="/">
          <div className="font-inconsolata font-bold text-3xl px-[40px] py-5 border-b border-footer_bg/50">
            Test<span className="text-alert_color">.</span>
          </div>
        </Link>
        <div className="">
          <ul className="px-[40px] border-b border-footer_bg/50 py-7 flex_start gap-5">
            <li>
              <Link
                to="/"
                className={`font-bold ${
                  location.pathname === "/"
                    ? "text-alert_color italic underline"
                    : "text-text_color"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`font-bold ${
                  location.pathname === "/about"
                    ? "text-alert_color italic underline"
                    : "text-text_color"
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
