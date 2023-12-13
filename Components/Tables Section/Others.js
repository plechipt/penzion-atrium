import { LaundryIcon, TVRoundedIcon, TransportIcon } from "@/assets/icons";

const meals = [
  {
    icon: <TransportIcon className="w-5 h-5" />,
    title: "Transport",
    description: "VW Transporter, max. 8 people",
    price: "10 Kč/km",
  },
  {
    icon: <LaundryIcon className="w-5 h-5" />,
    title: "Laundry",
    description: "Max. 7kg",
    price: "150 Kč",
  },
  {
    icon: <TVRoundedIcon className="w-5 h-5" />,
    title: "Borrowing TV",
    description: "Only for Tourist Room",
    price: "50 Kč/day",
  },
];

const Others = () => {
  return (
    <div className="p-6 w-full">
      <div className="space-y-3">
        {meals.map((meal, i) => (
          <div key={i} className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4 even:ml-auto">
              {meal.icon}
              <div className="space-y-1">
                <div className="text-neutral-700 text-base font-semibold leading-relaxed">
                  {meal.title}
                </div>
                <p className=" text-neutral-700 text-sm font-normal">
                  {meal.description}
                </p>
              </div>
            </div>
            <p className="text-right text-indigo-900 text-base font-bold leading-relaxed">
              {meal.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
