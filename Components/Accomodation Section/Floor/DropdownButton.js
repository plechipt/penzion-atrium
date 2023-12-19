"use client";
import { useState } from "react";

import { Button } from "@/Components/ui/button";
import Dropdown from "@/Components/Other/Dropdown";

import text from "@/public/text.json";
import { BookNowIcon } from "@/assets/icons";

const options = [
  "Short-term stay (1-6 days)",
  "Long-term stay (1-10 days)",
  "Long-term stay (1-20 days)",
];

const DropdownButton = () => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );

  return (
    <div className="flex flex-col gap-y-4 items-center">
      <Dropdown
        options={options}
        value={dropdownValue}
        onChange={(value) => setDropdownValue(value)}
      />
      <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold w-full">
        <BookNowIcon className="w-4 h-4" />
        {text.nav_btn}
      </Button>
    </div>
  );
};

export default DropdownButton;
