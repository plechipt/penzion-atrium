import React from "react";

const PriceOfRooms = ({ touristPrice, standardPrice }) => {
  return (
    <>
      <div className="flex justify-center flex-col gap-5">
        <p className="text-indigo-900 text-3xl font-bold ">{touristPrice} Kč</p>
        <p className="text-black text-xl font-normal">Tourist</p>
      </div>
      {standardPrice !== undefined ? (
        <div className="flex justify-center flex-col gap-5">
          <p className="text-indigo-900 text-3xl font-bold ">
            {standardPrice} Kč
          </p>
          <p className="text-black text-xl font-normal">Standard</p>
        </div>
      ) : null}
    </>
  );
};

export default PriceOfRooms;
