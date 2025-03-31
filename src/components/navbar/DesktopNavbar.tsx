import React, { useState } from "react";
import navLogo from "@/assets/svgs/nav_logo.svg";
import { destkopNavLinks } from "@/constants";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  visible: boolean;
  hideLinks?: string[];
  hideNav: () => void;
};

const MobileNav = ({ visible, hideLinks, hideNav }: MobileNavProps) => {
  return (
    <>
      <div
        className={cn(
          "lg:hidden w-full h-[0px] bg-white border-t border-gray-100 transition-all overflow-hidden",
          { "h-[400px]": visible }
        )}
      >
        <ul className="h-full flex flex-col mt-4 px-3">
          {destkopNavLinks.map(({ path, name }) => {
            if (hideLinks?.includes(name)) return <></>;
            return (
              <li
                className="font-eudoxus-medium text-black-100 py-4 px-5"
                onClick={() => {
                  let tmo = setTimeout(() => {
                    hideNav();
                    clearTimeout(tmo);
                  }, 1500);
                }}
              >
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

type Props = {
  hideLinks?: string[];
};

export const DesktopNavbar = ({ hideLinks }: Props) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleOpenState = () => setMobileNavVisible((prev) => !prev);

  return (
    <div>
      <nav className="h-[125px] bg-white flex items-center justify-center">
        <div className="max-w-7xl w-[90%] flex justify-between items-center">
          <div>
            <img src={navLogo} alt="Cartwey" />
          </div>

          {/* Navigation links */}
          <ul className="hidden lg:flex items-center gap-10">
            {destkopNavLinks.map(({ path, name }) => {
              if (hideLinks?.includes(name)) return <></>;
              return (
                <li className="font-eudoxus-medium text-black-100">
                  <a href={path}>{name}</a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-6">
            {/* Get started */}
            <a
              className="text-white font-inter font-medium px-9 py-5 bg-[#0A4434] rounded-2xl hidden sm:flex justify-center items-center hover:opacity-85 duration-300 transition-colors"
              href={"#get-started"}
            >
              Get Started
            </a>

            {/* Menu button */}
            <button
              className="block lg:hidden py-3 px-3 bg-main"
              onClick={toggleOpenState}
            >
              {mobileNavVisible ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <MobileNav
        visible={mobileNavVisible}
        hideLinks={hideLinks}
        hideNav={() => setMobileNavVisible(false)}
      />
    </div>
  );
};
