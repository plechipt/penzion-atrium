"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MainIcon from "./MainIcon";

// Mobile
import MobileLinks from "./Mobile/MobileLinks";
import HamburgerMenu from "./Mobile/HamburgerMenu";
import MobileLanguageSwitcher from "./Mobile/MobileLanguageSwitcher";

// Desktop
import DesktopLinks from "./Desktop/DesktopLinks";
import DesktopLanguageSwitcher from "./Desktop/DesktopLanguageSwitcher";
import DesktopBookNow from "./Desktop/DesktopBookNow";
import MobileBookNow from "./Mobile/MobileBookNow";

const Navbar = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      ref={headerRef}
      className="container flex items-center justify-between pb-6 pt-8"
    >
      {/* Left side with icon */}
      <MainIcon />

      {/* Hamburger menu icon for mobile */}
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen ? (
          <motion.div
            className={`absolute top-[111px] left-0 w-full h-[calc(100vh-111px)] bg-white z-50 lg:hidden flex flex-col gap-16 items-center justify-center`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div className="mx-auto w-full max-w-[302px] flex flex-col gap-16">
              <MobileLinks setIsMenuOpen={setIsMenuOpen} />
              <div className="space-y-4">
                {/* Language Dropdown */}
                <MobileLanguageSwitcher />

                {/* Button */}
                <MobileBookNow />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="hidden lg:flex items-center gap-8 ">
        {/*  Links */}
        <DesktopLinks />

        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <DesktopLanguageSwitcher />

          {/* Button */}
          <DesktopBookNow />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
