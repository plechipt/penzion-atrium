"use client";
import { useState } from "react";
import { UserIcon } from "@/assets/icons";

import Dropdown from "@/Components/Other/Dropdown";

const options = [1, 2, 3, 4, 5, 6, 7, 8];

const NumberOfPeople = () => {
  const [dropdownValue, setDropdownValue] = useState(1);

  return (
    <div className="flex flex-col gap-4 ">
      <p className="text-2xl font-bold text-indigo-900 ">
        {dropdownValue} Bed Room
      </p>
      <div className="flex items-center gap-1">
        {/*<p className="text-2xl font-bold text-indigo-900">{dropdownValue}</p>*/}
        <Dropdown
          options={options}
          value={dropdownValue}
          onChange={(value) => setDropdownValue(value)}
        />
        <UserIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default NumberOfPeople;
