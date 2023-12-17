// components/Navbar.js
"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import USFlag from "@/assets/png/united-states-flag-icon.png";
import CzechFlag from "@/assets/png/czech-republic-flag-icon.png";
import {
  MainLogoIcon,
  BookNowIcon,
  CzechRIcon,
  USFlagIcon,
} from "@/assets/icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select.jsx";
import { Button } from "@/Components/ui/button.jsx";

import content from "@/public/text.json";
import images from "@/public/images/ImageApi.js";

const Navbar = () => {
  const headerRef = useRef(null);

  const languagesMobile = [
    { code: "en", name: "EN", flag: <USFlagIcon className="w-6" /> },
    { code: "cz", name: "CZ", flag: <CzechRIcon className="w-6" /> },
  ];

  const languagesDesktop = [
    {
      code: "en",
      name: "EN",
      flag: (
        <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden">
          <Image className="w-full h-full" src={USFlag} alt="US Flag" />
        </div>
      ),
    },
    {
      code: "cz",
      name: "CZ",
      flag: (
        <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden">
          <Image className="w-full h-full" src={CzechFlag} alt="US Flag" />
        </div>
      ),
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="container flex items-center justify-between pb-6 pt-8"
    >
      {/* Left side with icon */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={180}
            height={40}
            src={images.home_vectors[0]}
            alt="Icon"
          />
        </Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="lg:hidden relative">
        <button
          type="button"
          className="focus:outline-none  text-neutral-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

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
              <nav className="gap-6 flex flex-col">
                <Link
                  className="text-xl font-bold"
                  href="/accomodation"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_accom}
                </Link>
                <Link
                  className="text-xl font-bold"
                  href="/services"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_ser}
                </Link>
                <Link
                  className="text-xl font-bold"
                  href="/surroundings"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_surr}
                </Link>
                <Link
                  className="text-xl font-bold"
                  href="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_contact}
                </Link>
              </nav>

              <div className="space-y-4">
                <Select defaultValue={"en"}>
                  <SelectTrigger className="w-full border-0 border-transparent bg-neutral-50 rounded-lg">
                    <SelectValue
                      className="w-full flex items-center gap-2 font-bold"
                      placeholder="Select Language"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {languagesMobile.map((language, i) => (
                      <SelectItem
                        className="flex items-center pl-2"
                        key={i}
                        value={language.code}
                      >
                        <div className="flex items-center font-bold text-neutral-700 gap-2">
                          {language.flag}
                          {language.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="bg-primary-gradient w-full text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
                  <BookNowIcon className="w-4 h-4" />
                  {content.nav_btn}
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* Right side with language dropdown, links and button */}
      <div className="hidden lg:flex items-center gap-8 ">
        <nav className="hidden lg:flex gap-6">
          <Link className="text-base font-bold " href="/accomodation">
            {content.nav_accom}
          </Link>
          <Link className="text-base font-bold " href="/services">
            {content.nav_ser}
          </Link>
          <Link className="text-base font-bold " href="/surroundings">
            {content.nav_surr}
          </Link>
          <Link className="text-base font-bold " href="/contact">
            {content.nav_contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Your language dropdown code goes here */}
          <Select defaultValue="en">
            <SelectTrigger className="w-[101px] border-0 border-transparent bg-neutral-50 rounded-lg">
              <SelectValue
                className="w-full flex items-center gap-2 font-bold"
                placeholder="Select Language"
              />
            </SelectTrigger>
            <SelectContent>
              {languagesDesktop.map((language, i) => (
                <SelectItem
                  className="flex items-center pl-2"
                  key={i}
                  value={language.code}
                >
                  <div className="flex items-center font-bold text-neutral-700 gap-2">
                    {language.flag}
                    {language.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Button */}
          <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold">
            <BookNowIcon className="w-4 h-4" />
            {content.nav_btn}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
