import { useTranslations } from "next-intl";
import SportsElements from "./SportsIcons";

const SportsText = () => {
  const tServices = useTranslations("Services");

  return (
    <div className=" w-full space-y-6 max-w-[720px]">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
        {tServices("schoolTitle")}
      </h2>
      <p className="text-gray-600">{tServices("schoolDescription")}</p>

      <SportsElements />
    </div>
  );
};

export default SportsText;
