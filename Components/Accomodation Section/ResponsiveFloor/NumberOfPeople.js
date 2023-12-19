"use client";
import { useState } from "react";

import { UserIcon2 } from "@/assets/icons";

import Dropdown from "@/Components/Other/Dropdown";

const options = [1, 2, 3, 4, 5, 6, 7, 8];

const NumberOfPeople = () => {
  const [dropdownValue, setDropdownValue] = useState(1);

  return (
    <div className="flex flex-col ">
      <p className="md:text-2xl text-base font-bold text-indigo-900 ">
        {dropdownValue} Bed Room
      </p>
      <div className="flex items-center mt-1">
        {/*<p className="md:text-2xl text-base  font-bold text-indigo-900">1</p>*/}
        <Dropdown
          options={options}
          value={dropdownValue}
          onChange={(value) => setDropdownValue(value)}
        />
        <UserIcon2 className="w-5 h-5 ml-1" />
      </div>
    </div>
  );
};

export default NumberOfPeople;
