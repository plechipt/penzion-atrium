"use client";
import { UserIcon } from "@/assets/icons";
import { useState } from "react";
import imgAPI from "../public/images/ImageApi";
import Dropdown from "./Dropdown";
import ImageEffect from "./ImageEffect";
import { Button } from "./ui/button";
import { BookNowIcon } from "@/assets/icons";

const ResponsiveFloor = ({ heading, desc }) => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );

  return (
    <div className="block lg:hidden mb-4 mx-4">
      {/* Heading and Subtext */}
      <div className="mb-4">
        <h2 className="text-2xl text-center font-bold mb-6 mt-4">{heading}</h2>
        <p className="text-gray-500 text-center">{desc}</p>
      </div>

      <div className="flex-col items-center bg-floor  rounded">
        {/* Element 1: Image */}

        {/* Element 2: Text with Icon */}
        <div className="flex justify-between mb-4">
          <div className="flex flex-col ">
            <p className="md:text-2xl text-base font-bold text-indigo-900 ">
              1 Bed Room
            </p>
            <div className="flex items-center mt-1 ">
              <p className="md:text-2xl text-base  font-bold text-indigo-900">
                1
              </p>
              <UserIcon className="w-5 h-5" />
            </div>
          </div>

          {/* Element 4 : Text and Subtext */}
          <div className="flex justify-center gap-4">
            <div className="flex justify-center flex-col">
              <p className="md:text-2xl text-base text-indigo-900 font-bold">
                500 Kč
              </p>
              <p className="text-black text-base">Tourist</p>
            </div>
            {/* Element 5: Text and Subtext */}

            <div className="flex justify-center flex-col">
              <p className="md:text-2xl text-base text-indigo-900 font-bold">
                600 Kč
              </p>
              <p className="text-black text-base">Standard</p>
            </div>
          </div>
        </div>

        <ImageEffect
          img1={imgAPI.accom_img[1]}
          img2={imgAPI.accom_vectors[9]}
        />

        {/* Element 6: Dropdown */}
        <div className="flex flex-col gap-2 mt-4 w-full">
          <Dropdown
            value={dropdownValue}
            onChange={(value) => setDropdownValue(value)}
          />
          <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full">
            <BookNowIcon className="w-4 h-4" />
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFloor;
