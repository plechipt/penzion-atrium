const PriceOfRooms = ({ touristPrice, standardPrice, pricePer }) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex justify-center gap-28">
        <div className="flex flex-col gap-5">
          <p className="text-indigo-900 text-3xl font-bold ">
            {touristPrice} Kč
          </p>
          <p className="text-black text-xl font-normal">Tourist</p>
        </div>
        {standardPrice !== undefined && (
          <div className="flex flex-col gap-5">
            <p className="text-indigo-900 text-3xl font-bold ">
              {standardPrice} Kč
            </p>
            <p className="text-black text-xl font-normal">Standard</p>
          </div>
        )}
      </div>
      <div className="text-gray-500">{pricePer}</div>
    </div>
  );
};

export default PriceOfRooms;
