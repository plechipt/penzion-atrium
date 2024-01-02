"use client";
import React, { useState } from "react";

const Dropdown = ({ value, onChange, options, divClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={divClass}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-300 rounded px-2 py-3 w-full justify-between text-sm flex items-center"
      >
        {value}
        <span className="ml-2">&#9660;</span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="z-10 absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="cursor-pointer text-sm z-10 px-2 py-2 hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
