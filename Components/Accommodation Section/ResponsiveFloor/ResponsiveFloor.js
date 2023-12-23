"use client";
import { useState } from "react";

import imgAPI from "@/public/images/ImageApi";
import ImageEffect from "@/Components/Other/ImageEffect";

import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "../NumberOfPeople";
import DropdownButton from "../DropdownButton";

const ResponsiveFloor = ({
  heading,
  groundFloor,
  firstFloor,
  bedroom,
  moreBedroom,
  shortTermStay,
  mediumTermStay,
  longTermStay,
  bookNow,
}) => {
  const [touristPrice, setTouristPrice] = useState(500);
  const [standardPrice, setStandardPrice] = useState(600);

  const [stayType, setStayType] = useState("short");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [peopleOptions, setPeopleOptions] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="block lg:hidden mb-4 mx-4">
      {/* Heading and Subtext */}
      <div className="mb-4">
        <h2 className="text-2xl text-center font-bold mb-6 mt-4">{heading}</h2>
        <p className="text-gray-500 text-center">{groundFloor}</p>
        <p className="mt-1 text-gray-500 text-center">{firstFloor}</p>
      </div>

      <div className="flex-col items-center bg-floor  rounded">
        <div className="flex justify-between mb-4">
          {/* Element 1 */}
          <NumberOfPeople
            type="mobile"
            containerClass={"flex flex-col"}
            pClass={"md:text-2xl text-base font-bold text-indigo-900"}
            divClass={"flex items-center mt-1"}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            peopleOptions={peopleOptions}
            bedroom={bedroom}
            moreBedroom={moreBedroom}
          />

          {/* Element 2 */}
          <PriceOfRooms
            touristPrice={touristPrice}
            standardPrice={standardPrice}
          />
        </div>

        {/* Element 3 */}
        <ImageEffect
          img1={imgAPI.accom_img[1]}
          img2={imgAPI.accom_vectors[9]}
        />

        {/* Element 5 */}
        <DropdownButton
          buttonClass={
            "bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full"
          }
          divClass={"flex flex-col gap-2 mt-4 w-full"}
          setNumberOfPeople={setNumberOfPeople}
          numberOfPeople={numberOfPeople}
          peopleOptions={peopleOptions}
          setPeopleOptions={setPeopleOptions}
          stayType={stayType}
          setStayType={setStayType}
          setTouristPrice={setTouristPrice}
          setStandardPrice={setStandardPrice}
          shortTermStay={shortTermStay}
          mediumTermStay={mediumTermStay}
          longTermStay={longTermStay}
          bookNow={bookNow}
        />
      </div>
    </div>
  );
};

export default ResponsiveFloor;
