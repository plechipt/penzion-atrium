import React from "react";

const PriceOfRooms = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-5">
        <p className="text-indigo-900 text-3xl font-bold ">500 Kč</p>
        <p className="text-black text-xl font-normal">Tourist</p>
      </div>
      <div className="flex justify-center flex-col gap-5">
        <p className="text-indigo-900 text-3xl font-bold ">600 Kč</p>
        <p className="text-black text-xl font-normal">Standard</p>
      </div>
    </>
  );
};

export default PriceOfRooms;
