import text from "@/public/text.json";
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

const MealsText = () => {
  return (
    <div className=" w-full space-y-6 max-w-[720px]">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
        Meals
      </h2>
      <p className="text-gray-600">{text.meal_1}</p>

      <div className="mt-6 space-y-3 w-full max-w-[200px]">
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

      <div className="mt-2">
        <p className="text-gray-600 mb-2">{text.meal_2}</p>
        <p className="text-gray-600 mb-2">{text.meal_3}</p>
        <p className="text-gray-600 mb-2">{text.meal_4}</p>
      </div>
    </div>
  );
};

export default MealsText;
