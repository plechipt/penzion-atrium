"use client";
import { useContext } from "react";
import { DatePicker } from "@/components/Other/DatePicker";

import { AppContext } from "@/app/[locale]/providers";

const CheckInAndOut = ({ translation }) => {
  const {
    checkInTitle,
    checkInPlaceholder,
    checkOutTitle,
    checkOutPlaceholder,
  } = translation;
  let { checkInDate, setCheckInDate, checkOutDate, setCheckOutDate } =
    useContext(AppContext);

  return (
    <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
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
  );
};

export default CheckInAndOut;
