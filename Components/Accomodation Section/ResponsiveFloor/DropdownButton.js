"use client";
import { useState } from "react";
import { BookNowIcon } from "@/assets/icons";

import { Button } from "@/Components/ui/button";
import Dropdown from "@/Components/Other/Dropdown";

const options = [
  "Short-term stay (1-6 days)",
  "Medium-term stay (1 or more weeks; price per day)",
  "Long-term stay (1 or more months; price per month)",
];

const DropdownButton = () => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );
  return (
    <div className="flex flex-col gap-2 mt-4 w-full">
      <Dropdown
        options={options}
        value={dropdownValue}
        onChange={(value) => setDropdownValue(value)}
      />
      <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full">
        <BookNowIcon className="w-4 h-4" />
        Book Now
      </Button>
    </div>
  );
};

export default DropdownButton;
