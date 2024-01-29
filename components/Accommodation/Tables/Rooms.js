import { useTranslations } from "next-intl";
import AccommodationData from "@/data/AccommodationData";

const Rooms = () => {
  const tGeneral = useTranslations("General");
  const { tourists, standards } = AccommodationData();

  return (
    <div className="p-6 w-full">
      <h3 className="text-center text-black text-xl font-bold leading-loose">
        {tGeneral("tourist")}
      </h3>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-2.5 mt-2">
        {tourists.map((tourist, i) => (
          <div key={i} className="flex items-center gap-4 even:ml-auto">
            {tourist.icon}
            <p className=" text-neutral-700 text-base font-normal leading-relaxed ">
              {tourist.title}
            </p>
          </div>
        ))}
      </div>

      <hr className="bg-black/10 my-3" />

      <h3 className="text-center text-black text-xl font-bold leading-loose">
        Standard
      </h3>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-2.5 mt-2">
        {standards.map((standard, i) => (
          <div key={i} className="flex items-center gap-4 even:ml-auto">
            {standard.icon}
            <p className=" text-neutral-700 text-base font-normal leading-relaxed ">
              {standard.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
