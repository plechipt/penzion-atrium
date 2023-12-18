"use client";
import { useState } from "react";
import Image from "next/image";
import { BookNowIcon, UserIcon } from "@/assets/icons";

import { Button } from "@/Components/ui/button";
import Dropdown from "@/Components/Other/Dropdown";

import text from "@/public/text.json";
import { default as imgAPI } from "@/public/images/ImageApi";

const CustomComponent = ({ heading, desc }) => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );

  return (
    <div className="container">
      <div className="w-full hidden lg:block">
        {/* Heading and Subtext */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6 mt-4">{heading}</h2>
          <p className="text-gray-500">{desc}</p>
        </div>

        <div className="flex items-center w-full justify-between bg-floor p-6 rounded">
          {/* Element 1: Image */}

          <div className="relative w-60 h-3/4">
            <Image
              width={240}
              height={150}
              sizes="100vw"
              src={imgAPI.accom_img[0]}
              className="w-full max-w-[240px] h-[150px]"
              alt="Room Image"
            />

            {/* Icon at Bottom Left Corner */}
            <div className="absolute bottom-3 right-3 ">
              <a href={imgAPI.accom_img[0]} target="_blank">
                <Image
                  width={12}
                  height={12}
                  sizes="100vw"
                  src={imgAPI.accom_vectors[9]}
                  alt="Icon Image"
                  className="w-9 h-9"
                />
              </a>
            </div>
          </div>
          {/* Element 2: Text with Icon */}
          <div className="flex flex-col gap-4 ">
            <p className="text-2xl font-bold text-indigo-900 ">1 Bed Room</p>
            <div className="flex items-center gap-1">
              <p className="text-2xl font-bold text-indigo-900">1</p>
              <UserIcon className="w-5 h-5" />
            </div>
          </div>

          {/* Element 3: Vertical Line */}
          <div className="border h-36"></div>

          {/* Element 4 and 5: Text and Subtext */}
          <div className="flex justify-center flex-col gap-5">
            <p className="text-indigo-900 text-3xl font-bold ">500 Kč</p>
            <p className="text-black text-xl font-normal">Tourist</p>
          </div>
          <div className="flex justify-center flex-col gap-5">
            <p className="text-indigo-900 text-3xl font-bold ">600 Kč</p>
            <p className="text-black text-xl font-normal">Standard</p>
          </div>

          {/* Element 6: Dropdown */}
          <div className="flex flex-col gap-y-4 items-center">
            <Dropdown
              value={dropdownValue}
              onChange={(value) => setDropdownValue(value)}
            />
            <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold w-full">
              <BookNowIcon className="w-4 h-4" />
              {text.nav_btn}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
