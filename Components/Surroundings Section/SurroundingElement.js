// components/SurroundingElement.js
"use client";

import Image from "next/image";

const SurroundingElement = ({
  reverse,
  small_img,
  large_img,
  heading,
  text,
}) => {
  const flexDirectionClass = reverse
    ? "flex-col lg:flex-row-reverse"
    : " lg:flex-row flex-col";

  return (
    <div
      className={` flex ${flexDirectionClass} gap-4 lg:gap-12 items-center justify-between py-6 lg:py-4`}
    >
      {/* Left Part with Image */}

      <Image
        width={573}
        height={310}
        className="w-full lg:w-1/2 max-h-[310px] object-cover rounded-lg"
        src={large_img}
        alt={heading}
      />

      {/* Right Part with Heading and Text */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-2 text-center md:text-start">{heading}</h2>
        <p className="text-gray-600 text-base">{text}</p>
      </div>
    </div>
  );
};

export default SurroundingElement;
