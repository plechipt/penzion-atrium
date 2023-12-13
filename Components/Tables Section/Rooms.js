import {
  BathtubIcon,
  FridgeIcon,
  TVSquareIcon,
  ToiletIcon,
} from "@/assets/icons";

const tourists = [
  {
    icon: <BathtubIcon className="w-5 h-5" />,
    title: "Shared",
  },
  {
    icon: <TVSquareIcon className="w-5 h-5" />,
    title: "Shared",
  },
  {
    icon: <ToiletIcon className="w-5 h-5" />,
    title: "Shared",
  },
  {
    icon: <FridgeIcon className="w-5 h-5" />,
    title: "Shared",
  },
];

const standards = [
  {
    icon: <BathtubIcon className="w-5 h-5" />,
    title: "Private",
  },
  {
    icon: <TVSquareIcon className="w-5 h-5" />,
    title: "Private",
  },
  {
    icon: <ToiletIcon className="w-5 h-5" />,
    title: "Private",
  },
  {
    icon: <FridgeIcon className="w-5 h-5" />,
    title: "Private",
  },
];

const Rooms = () => {
  return (
    <div className="p-6 w-full">
      <h4 className="text-center text-black text-xl font-bold leading-loose">
        Tourist
      </h4>
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

      <h4 className="text-center text-black text-xl font-bold leading-loose">
        Standard
      </h4>
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
