const PriceOfRooms = () => {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex justify-center flex-col">
        <p className="md:text-2xl text-base text-indigo-900 font-bold">
          500 Kč
        </p>
        <p className="text-black text-base">Tourist</p>
      </div>

      <div className="flex justify-center flex-col">
        <p className="md:text-2xl text-base text-indigo-900 font-bold">
          600 Kč
        </p>
        <p className="text-black text-base">Standard</p>
      </div>
    </div>
  );
};

export default PriceOfRooms;
