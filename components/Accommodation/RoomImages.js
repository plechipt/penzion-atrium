"use client";
import { useState } from "react";
import Image from "next/image";

import AccommodationData from "@/data/AccommodationData";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const RoomImages = ({ numberOfPeople, divClass }) => {
  const { rooms } = AccommodationData();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImages = rooms[numberOfPeople - 1];
  const roomsImages = [
    { src: currentImages["tourist"].src, label: "Tourist" },
    { src: currentImages["standard"].src, label: "Standard" },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? roomsImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === roomsImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={divClass}>
      <Image
        src={roomsImages[currentIndex].src}
        alt="ImageDescription"
        width={"0"}
        height={"0"}
        sizes="100vw"
      />

      <div
        style={{ backgroundImage: `url(${roomsImages[currentIndex].src})` }}
        className="w-full h-full rounded bg-center bg-cover duration-500"
      ></div>
      <div className="absolute top-0 left-0 right-0 p-0 text-white text-center font-bold bg-black bg-opacity-50">
        {roomsImages[currentIndex].label}
      </div>
      {/* Left Arrow */}
      <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-0 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-0 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default RoomImages;
