"use client";
import { useState } from "react";

import RoomImage from "./RoomImage";
import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "../NumberOfPeople";
import DropdownButton from "../DropdownButton";

const CustomComponent = ({ heading, desc }) => {
  const [touristPrice, setTouristPrice] = useState(500);
  const [standardPrice, setStandardPrice] = useState(600);

  const [stayType, setStayType] = useState("short");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [peopleOptions, setPeopleOptions] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

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
          <RoomImage />

          {/* Element 2: Text with Icon */}
          <NumberOfPeople
            type="desktop"
            containerClass={"flex flex-col gap-4"}
            pClass={"text-2xl font-bold text-indigo-900"}
            divClass={"flex items-center gap-1"}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            peopleOptions={peopleOptions}
            stayType={stayType}
            setStayType={setStayType}
          />

          {/* Element 3: Vertical Line */}
          <div className="border h-36"></div>

          {/* Element 4 and 5: Text and Subtext */}
          <PriceOfRooms
            touristPrice={touristPrice}
            standardPrice={standardPrice}
          />

          {/* Element 6: Dropdown */}
          <DropdownButton
            buttonClass={
              "bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold w-full"
            }
            divClass={"flex flex-col gap-y-4 items-center"}
            setNumberOfPeople={setNumberOfPeople}
            numberOfPeople={numberOfPeople}
            peopleOptions={peopleOptions}
            setPeopleOptions={setPeopleOptions}
            stayType={stayType}
            setStayType={setStayType}
            setTouristPrice={setTouristPrice}
            setStandardPrice={setStandardPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
