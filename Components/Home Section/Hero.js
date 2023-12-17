// Hero.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BookNowIcon } from "@/assets/icons";

import { Button } from "@/Components/ui/button";
import { DatePicker } from "@/Components/Other/DatePicker";

import text from "@/public/text.json";
import Img from "@/public/images/ImageApi";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="flex flex-col items-center justify-between lg:flex-row container py-10">
      {/* Left side */}
      <div className=" w-full max-w-[580px] space-y-6 lg:space-y-8">
        <h2 className="lg:text-5xl text-center text-4xl lg:text-start font-bold">
          <span>Discover </span>
          <span className="bg-primary-gradient inline-block text-transparent bg-clip-text">
            Trutnov
          </span>
          <span>&apos;s Hidden Gem</span>
        </h2>
        <p className="text-neutral-700 text-base text-center lg:text-start lg:text-xl font-light">
          {text.hero_subtext}
        </p>

        <div>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Check-in section */}
            <div className="mb-4 flex-1">
              <DatePicker
                label="Check In:"
                placeholder="Check-in Date"
                date={checkInDate}
                setDate={setCheckInDate}
              />
            </div>

            {/* Check-out section */}
            <div className="mb-4 flex-1">
              <DatePicker
                label="Check Out:"
                placeholder="Check-out Date"
                date={checkOutDate}
                setDate={setCheckOutDate}
              />
            </div>
          </div>
          <Button className="w-full bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
            <BookNowIcon className="w-4 h-4" />
            Book Now
          </Button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full max-w-[609px] p-4">
        <Image
          width={570}
          height={564}
          src={Img.home_vectors[3]}
          alt="card"
          className="rounded h-full w-full "
        />
      </div>
    </div>
  );
};

export default Hero;
