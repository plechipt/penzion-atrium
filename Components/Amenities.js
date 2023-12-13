"use client";
import {
  BedsIcon,
  BusIcon,
  FreeParkingIcon,
  FreeWifiIcon,
  GardenWithPlaygroundIcon,
  GroupDiscountsIcon,
  TVIcon,
  WheelchairIcon
} from "@/assets/icons";

const Amenities = () => {
  const data = [
    { icon: <FreeWifiIcon className="w-20 h-14" />, text: "Free wi-fi" },
    {
      icon: <GardenWithPlaygroundIcon className="w-20 h-14" />,
      text: "Garden with playground",
    },
    {
      icon: <BedsIcon className="w-20 h-14" />,
      text: "Beds from 200 Kč (8 €) per night",
    },
    { icon: <FreeParkingIcon className="w-20 h-14" />, text: "Free parking" },
    {
      icon: <WheelchairIcon className="w-20 h-14" />,
      text: "Wheelchair accessible",
    },
    {
      icon: <BusIcon className="w-20 h-14" />,
      text: "Close to the bus terminal and train station.",
    },
    {
      icon: <GroupDiscountsIcon className="w-20 h-14" />,
      text: "Group discounts and long stay discounts",
    },
    {
      icon: <TVIcon className="w-20 h-14" />,
      text: "Kitchen and meeting room with TV",
    },
  ];

  return (
    <div className="container max-w-fit mx-auto mb-16 mt-10 lg:my-16 text-center">
      <h1 className="text-center text-black text-4xl font-bold mb-16">
        Our Amenities
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center place-content-center ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-full max-w-[140px]"
          >
            {item.icon}
            <p className="text-base text-neutral-700 text-center font-bold">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
