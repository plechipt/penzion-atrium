"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { default as imgAPI } from "@/public/images/ImageApi";

import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "../NumberOfPeople";
import DropdownButton from "../DropdownButton";
import ImageEffect from "@/Components/Other/ImageEffect";

const CustomComponent = () => {
  const t = useTranslations("Accommodation");

  const [touristPrice, setTouristPrice] = useState(500);
  const [standardPrice, setStandardPrice] = useState(600);

  const [stayType, setStayType] = useState("short");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [pricePer, setPricePer] = useState(t("pricePerDayShortTerm"));
  const [peopleOptions, setPeopleOptions] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="container">
      <div className="w-full hidden lg:block">
        {/* Heading and Subtext */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6 mt-4">
            {t("chooseRoomTitle")}
          </h2>
          <p className="text-gray-500">{t("groundFloor")}</p>
          <p className="mt-1 text-gray-500">{t("firstFloor")}</p>
        </div>

        <div className="flex items-center w-full justify-between bg-floor p-6 rounded">
          {/* Element 1: Image */}
          <ImageEffect
            img={imgAPI.accom_img[numberOfPeople]}
            imgAlt={`${numberOfPeople} Room Image`}
            divClass={"relative w-60 h-3/4"}
            imgClass={"w-full max-w-[240px] h-[150px]"}
            iconClass={"w-9 h-9"}
          />

          {/* Element 2: Text with Icon */}
          <NumberOfPeople
            type="desktop"
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            peopleOptions={peopleOptions}
            containerClass={"flex flex-col gap-4"}
            pClass={"text-2xl font-bold text-indigo-900"}
            divClass={"flex items-center gap-1"}
          />

          {/* Element 3: Vertical Line */}
          <div className="border h-36"></div>

          {/* Element 4 and 5: Text and Subtext */}
          <PriceOfRooms
            touristPrice={touristPrice}
            standardPrice={standardPrice}
            pricePer={pricePer}
          />

          {/* Element 6: Dropdown */}
          <DropdownButton
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            peopleOptions={peopleOptions}
            setPeopleOptions={setPeopleOptions}
            stayType={stayType}
            setStayType={setStayType}
            setTouristPrice={setTouristPrice}
            setStandardPrice={setStandardPrice}
            setPricePer={setPricePer}
            divClass={"flex flex-col gap-y-4 items-center"}
            buttonClass={
              "bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold w-full"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
