import React from "react";
import navLogo from "@/assets/svgs/nav_logo.svg";
import { destkopNavLinks } from "@/constants";
import { Link } from "react-router-dom";

export const DesktopNavbar = () => {
  return (
    <nav className="h-[125px] bg-white flex items-center justify-center">
      <div className="max-w-7xl w-[90%] flex justify-between items-center">
        <div>
          <img src={navLogo} alt="Cartwey" />
        </div>

        {/* Navigation links */}
        <ul className="hidden sm:flex items-center gap-10">
          {destkopNavLinks.map(({ path, name }) => (
            <li className="font-eudoxus-medium text-black-100">
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>

        {/* Get started */}
        <Link
          className="text-white font-inter font-medium px-9 py-5 bg-[#0A4434] rounded-2xl flex justify-center items-center hover:opacity-85 duration-300 transition-colors"
          to={"/"}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};
