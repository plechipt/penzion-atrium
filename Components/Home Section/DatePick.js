"use client";
import React, { useState } from "react";

import { BookNowIcon } from "@/assets/icons";

import { Button } from "@/Components/ui/button";
import { DatePicker } from "@/Components/Other/DatePicker";

const DatePick = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Check-in section */}
        <div className="mb-4 flex-1">
          <DatePicker
            label="Check In:"
            placeholder="Check-in Date"
            date={checkInDate}
            setDate={setCheckInDate}
          />
        </div>

        {/* Check-out section */}
        <div className="mb-4 flex-1">
          <DatePicker
            label="Check Out:"
            placeholder="Check-out Date"
            date={checkOutDate}
            setDate={setCheckOutDate}
          />
        </div>
      </div>
      <Button className="w-full bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
        <BookNowIcon className="w-4 h-4" />
        Book Now
      </Button>
    </div>
  );
};

export default DatePick;
