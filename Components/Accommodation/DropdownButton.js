"use client";
import { useState, useEffect } from "react";
import { Link } from "@/navigation";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import Dropdown from "@/components/Other/Dropdown";

import { BookNowIcon } from "@/public/vectors/getIcons";
import { calculatePrice } from "@/utils/calculatePrice";

const shortTermPeople = [1, 2, 3, 4, 5, 6, 7, 8];
const mediumTermPeople = [1, 2, 3, 4];
const longTermPeople = [1, 2, 3];

const DropdownButton = ({
  divClass,
  buttonClass,
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
  setPeopleOptions,
  stayType,
  setStayType,
  setTouristPrice,
  setStandardPrice,
  setPricePer,
}) => {
  const t = useTranslations("Accommodation");
  const [dropdownValue, setDropdownValue] = useState(t("shortTermStay"));
  const options = [t("shortTermStay"), t("mediumTermStay"), t("longTermStay")];

  useEffect(() => {
    // Calculate the final price
    if (stayType !== undefined && numberOfPeople !== undefined) {
      setTouristPrice(calculatePrice(stayType, numberOfPeople, "TOURIST"));
      setStandardPrice(calculatePrice(stayType, numberOfPeople, "STANDARD"));
    }
  }, [
    peopleOptions,
    numberOfPeople,
    stayType,
    setStayType,
    setTouristPrice,
    setStandardPrice,
  ]);

  const onInputClick = (value) => {
    setDropdownValue(value);
    setNumberOfPeople(1);

    if (value == options[0]) {
      setStayType("short");
      setPricePer(t("pricePerDayShortTerm"));
      setPeopleOptions(shortTermPeople);
    }
    if (value == options[1]) {
      setStayType("medium");
      setPricePer(t("pricePerDayMediumTerm"));
      setPeopleOptions(mediumTermPeople);
    }
    if (value == options[2]) {
      setStayType("long");
      setPricePer(t("pricePerMonthLongTerm"));
      setPeopleOptions(longTermPeople);
    }
  };

  return (
    <div className={divClass}>
      <Dropdown
        options={options}
        value={dropdownValue}
        onChange={(value) => onInputClick(value)}
      />
      <Link className="w-full" href="/contact">
        <Button className={buttonClass}>
          <BookNowIcon className="w-4 h-4" />
          {t("bookNow")}
        </Button>
      </Link>
    </div>
  );
};

export default DropdownButton;
