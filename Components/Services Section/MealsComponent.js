// components/MealComponent.js
import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";
import text from "../../public/text.json";
import { CupIcon, ImageIcon, SupperIcon } from "@/assets/icons";

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

const MealComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <div className="relative w-full lg:max-w-[440px] h-72 lg:h-[437px]">
        <div className="absolute bottom-2 right-2 w-12 h-12 rounded-lg flex items-center justify-center bg-white">
          <ImageIcon className="w-5 h-4" />
        </div>
        <Image
          width={440}
          height={437}
          className="w-full h-full object-cover rounded-[10px]"
          src={imgAPI.ser_img[3]}
          alt="Meals"
        />
      </div>

      {/* Right Part with Meal Details */}
      <div className=" w-full space-y-6 max-w-[720px]">
        <h2 className="text-2xl font-bold mb-2 text-center md:text-start">Meals</h2>
        <p className="text-gray-600">{text.meal_1}</p>

        <div className="mt-6 space-y-3 w-full max-w-[200px]">
          {meals.map((meal, i) => (
            <div key={i} className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4 even:ml-auto">
                {meal.icon}
                <p className=" text-neutral-700 text-base font-normal leading-relaxed ">
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
    </div>
  );
};

export default MealComponent;
