"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import imgAPI from "@/public/images/ImageApi";

import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "../NumberOfPeople";
import DropdownButton from "../DropdownButton";
import ImageEffect from "@/components/Other/ImageEffect";
import RoomImages from "../RoomImages";

const ResponsiveFloor = () => {
  const t = useTranslations("Accommodation");

  const [touristPrice, setTouristPrice] = useState(500);
  const [standardPrice, setStandardPrice] = useState(600);

  const [stayType, setStayType] = useState("short");
  const [pricePer, setPricePer] = useState(t("pricePerDayShortTerm"));
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [peopleOptions, setPeopleOptions] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="block lg:hidden mb-4 mx-4">
      {/* Heading and Subtext */}
      <div className="mb-4">
        <h2 className="text-2xl text-center font-bold mb-6 mt-4">
          {t("chooseRoomTitle")}
        </h2>
        <p className="text-gray-500 text-center">{t("groundFloor")}</p>
        <p className="mt-1 text-gray-500 text-center">{t("firstFloor")}</p>
      </div>

      <div className="mt-10 flex-col items-center bg-floor rounded">
        <div className="flex justify-between mb-4">
          {/* Element 1 */}
          <NumberOfPeople
            type="mobile"
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            peopleOptions={peopleOptions}
            containerClass={"flex flex-col"}
            pClass={"md:text-2xl text-base font-bold text-indigo-900"}
            divClass={"flex items-center mt-1"}
          />

          {/* Element 2 */}
          <PriceOfRooms
            touristPrice={touristPrice}
            standardPrice={standardPrice}
            pricePer={pricePer}
          />
        </div>

        {/* Element 3 */}
        <RoomImages
          numberOfPeople={numberOfPeople}
          divClass={
            "h-[300px] min-[500px]:h-[400px] sm:h-[500px] md:h-[600px] relative group"
          }
        />

        {/* Element 5 */}
        <DropdownButton
          setNumberOfPeople={setNumberOfPeople}
          numberOfPeople={numberOfPeople}
          peopleOptions={peopleOptions}
          setPeopleOptions={setPeopleOptions}
          stayType={stayType}
          setStayType={setStayType}
          setTouristPrice={setTouristPrice}
          setStandardPrice={setStandardPrice}
          setPricePer={setPricePer}
          divClass={"flex flex-col gap-2 mt-4 w-full"}
          buttonClass={
            "bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full"
          }
        />
      </div>
    </div>
  );
};

export default ResponsiveFloor;
