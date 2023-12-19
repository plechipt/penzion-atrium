"use client";
import React, { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import imgAPI from "@/public/images/ImageApi";

const LanguageDrop = ({ containerClassName, className }) => {
  const languages = [
    { code: "en", name: "English", flag: imgAPI.home_vectors[22] },
    { code: "cz", name: "CZECH", flag: imgAPI.home_vectors[23] },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={cn("relative", containerClassName)}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className={cn(
          "bg-neutral-50 border border-gray-300 rounded px-2 py-3 w-full justify-between text-xs flex items-center",
          className
        )}
      >
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={selectedLanguage.flag}
          alt="icon"
          className="w-4 h-4 mr-2"
        />
        <span>{selectedLanguage.code}</span>
        <span className="ml-2">&#9660;</span>
      </button>

      {/* Dropdown Options */}
      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded">
          {languages.map((languages) => (
            <div
              key={languages.code}
              onClick={() => handleLanguageChange(languages)}
              className="block pr-2 pl-1 py-2 text-xs leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              <div className="flex items-center ">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  src={languages.flag}
                  alt={`Flag for ${languages.name}`}
                  className="w-4 h-4 mr-2"
                />
                <span>{languages.code}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDrop;
