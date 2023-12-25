const PriceOfRooms = ({ touristPrice, standardPrice, pricePer }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-3 flex justify-center gap-6">
        <div className="flex justify-center flex-col">
          <p className="md:text-2xl text-base text-indigo-900 font-bold">
            {touristPrice} Kč
          </p>
          <p className="text-black text-base">Tourist</p>
        </div>

        {standardPrice !== undefined && (
          <div className="flex justify-center flex-col">
            <p className="md:text-2xl text-base text-indigo-900 font-bold">
              {standardPrice} Kč
            </p>
            <p className="text-black text-base">Standard</p>
          </div>
        )}
      </div>
      <div className="mt-3 text-gray-500 text-sm">{pricePer}</div>
    </div>
  );
};

export default PriceOfRooms;
