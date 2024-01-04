"use client";
import { useState, useContext } from "react";
import { useTranslations } from "next-intl";

import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "../NumberOfPeople";
import DropdownButton from "../DropdownButton";
import RoomImages from "../RoomImages";
import AmountOfDays from "../AmountOfDays";

import { AppContext } from "@/app/[locale]/providers";

const CustomComponent = () => {
  const t = useTranslations("Accommodation");

  let {
    people: numberOfPeople,
    setPeople: setNumberOfPeople,
    stayType,
    setStayType,
    peopleOptions,
    setPeopleOptions,
  } = useContext(AppContext);

  const [touristPrice, setTouristPrice] = useState(500);
  const [standardPrice, setStandardPrice] = useState(600);

  const [numberOfDays, setNumberOfDays] = useState("1-2");
  const [daysOptions, setDaysOptions] = useState(["1-2", "3"]); // 3 and more days
  const [pricePer, setPricePer] = useState(t("pricePerDayShortTerm"));

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
          {/* If stay type is group disable the image and show amount of days input */}
          {stayType === "group" ? (
            <AmountOfDays
              numberOfDays={numberOfDays}
              setNumberOfDays={setNumberOfDays}
              daysOptions={daysOptions}
              containerClass={"flex flex-col gap-4"}
              pClass={"text-2xl font-bold text-indigo-900"}
              divClass={"flex items-center gap-1"}
            />
          ) : (
            <RoomImages
              numberOfPeople={numberOfPeople}
              divClass={"max-w-[240px] h-[150px] w-full relative group"}
            />
          )}

          {/* Element 2: Text with Icon */}
          <NumberOfPeople
            type="desktop"
            stayType={stayType}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            peopleOptions={peopleOptions}
            setNumberOfDays={setNumberOfDays}
            containerClass={"flex flex-col gap-4"}
            pClass={"text-2xl font-bold text-indigo-900"}
            divClass={"flex items-center gap-1"}
          />

          {/* Element 3: Vertical Line */}
          <div className="border h-36"></div>

          {/* Element 4 and 5: Text and Subtext */}
          <PriceOfRooms
            stayType={stayType}
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
            numberOfDays={numberOfDays}
            setNumberOfDays={setNumberOfDays}
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
