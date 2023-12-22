import { useTranslations } from "next-intl";
import AccommodationData from "@/data/AccommodationData";

const MealsText = () => {
  const { meals } = AccommodationData();
  const t = useTranslations("Services");

  return (
    <div className=" w-full space-y-6 max-w-[720px]">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
        {t("mealsTitle")}
      </h2>
      <p className="text-gray-600">{t("mealsDescription0")}</p>

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
        <p className="text-gray-600 mb-2">{t("mealsDescription1")}</p>
        <p className="text-gray-600 mb-2">{t("mealsDescription2")}</p>
        <p className="text-gray-600 mb-2">{t("mealsDescription3")}</p>
      </div>
    </div>
  );
};

export default MealsText;
