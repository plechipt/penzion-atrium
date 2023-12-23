"use client";
import { useState, useEffect } from "react";
import { Link } from "@/navigation";

import { Button } from "@/Components/ui/button";
import Dropdown from "@/Components/Other/Dropdown";

import { BookNowIcon } from "@/assets/icons";
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
  shortTermStay,
  mediumTermStay,
  longTermStay,
  bookNow,
}) => {
  const [dropdownValue, setDropdownValue] = useState(shortTermStay);
  const options = [shortTermStay, mediumTermStay, longTermStay];

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
      setPeopleOptions(shortTermPeople);
    }
    if (value == options[1]) {
      setStayType("medium");
      setPeopleOptions(mediumTermPeople);
    }
    if (value == options[2]) {
      setStayType("long");
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
          {bookNow}
        </Button>
      </Link>
    </div>
  );
};

export default DropdownButton;
