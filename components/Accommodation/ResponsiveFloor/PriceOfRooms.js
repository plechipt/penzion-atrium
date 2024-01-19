import { useTranslations } from "next-intl";

const PriceOfRooms = ({ stayType, touristPrice, standardPrice, pricePer }) => {
  const tGeneral = useTranslations("General");

  return (
    <div className="flex flex-col items-center">
      <div className="mt-3 flex justify-center gap-6">
        <div className="flex justify-center flex-col">
          <p className="md:text-2xl text-base text-indigo-900 font-bold">
            {touristPrice} Kč
          </p>
          <p className="text-black text-base">{tGeneral("tourist")}</p>
        </div>

        {standardPrice !== undefined && stayType !== "group" ? (
          <div className="flex justify-center flex-col">
            <p className="md:text-2xl text-base text-indigo-900 font-bold">
              {standardPrice} Kč
            </p>
            <p className="text-black text-base">Standard</p>
          </div>
        ) : null}
      </div>
      <div className="mt-3 text-gray-500 text-sm">{pricePer}</div>
    </div>
  );
};

export default PriceOfRooms;
