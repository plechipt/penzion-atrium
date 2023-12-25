"use client";
import { useState } from "react";
import { Link } from "@/navigation";

import { BookNowIcon } from "@/public/vectors/getIcons";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/Other/DatePicker";

const DatePick = ({
  checkInTitle,
  checkInPlaceholder,
  checkOutTitle,
  checkOutPlaceholder,
  bookNow,
}) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Check-in section */}
        <div className="mb-4 flex-1">
          <DatePicker
            label={checkInTitle}
            placeholder={checkInPlaceholder}
            date={checkInDate}
            setDate={setCheckInDate}
          />
        </div>

        {/* Check-out section */}
        <div className="mb-4 flex-1">
          <DatePicker
            label={checkOutTitle}
            placeholder={checkOutPlaceholder}
            date={checkOutDate}
            setDate={setCheckOutDate}
          />
        </div>
      </div>
      <Link href="/contact">
        <Button className="w-full bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
          <BookNowIcon className="w-4 h-4" />
          {bookNow}
        </Button>
      </Link>
    </div>
  );
};

export default DatePick;
