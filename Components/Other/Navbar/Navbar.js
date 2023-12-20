"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BookNow from "./BookNow";
import MainIcon from "./MainIcon";
import LanguageSwitcher from "./LanguageSwitcher";

// Mobile
import MobileLinks from "./Mobile/MobileLinks";
import HamburgerMenu from "./Mobile/HamburgerMenu";

// Desktop
import DesktopLinks from "./Desktop/DesktopLinks";

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
                <LanguageSwitcher triggerClassName="w-full border-0 border-transparent bg-neutral-50 rounded-lg" />

                {/* Button */}
                <BookNow buttonClassName="bg-primary-gradient w-full text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold" />
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
          <LanguageSwitcher triggerClassName="w-[101px] border-0 border-transparent bg-neutral-50 rounded-lg" />

          {/* Button */}
          <BookNow buttonClassName="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
