import { useTranslations } from "next-intl";
import SportsElements from "./SportsIcons";

const SportsText = () => {
  const t = useTranslations("Services");

  return (
    <div className=" w-full space-y-6 max-w-[720px]">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
        {t("schoolTitle")}
      </h2>
      <p className="text-gray-600">{t("schoolDescription")}</p>

      <SportsElements />
    </div>
  );
};

export default SportsText;
