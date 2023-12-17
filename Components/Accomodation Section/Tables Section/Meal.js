import { CupIcon, SupperIcon } from "@/assets/icons";

const meals = [
  {
    icon: <CupIcon className="w-5 h-5" />,
    title: "Breakfast",
    price: 80,
  },
  {
    icon: <SupperIcon className="w-5 h-5" />,
    title: "Half board",
    price: 160,
  },
  {
    icon: <SupperIcon className="w-5 h-5" />,
    title: "Full Board",
    price: 240,
  },
];

const Meal = ({ mealText }) => {
  return (
    <div className="p-6 w-full">
      <p className="text-center text-neutral-700 text-base font-normal leading-relaxed">
        {mealText}
      </p>

      <div className="mt-6 space-y-3">
        {meals.map((meal, i) => (
          <div key={i} className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4 even:ml-auto">
              {meal.icon}
              <p className="text-base font-normal leading-relaxed ">
                {meal.title}
              </p>
            </div>
            <p className="text-right text-indigo-900 text-base font-bold leading-relaxed">
              {meal.price} Kč
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
