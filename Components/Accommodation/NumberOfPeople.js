import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Dropdown from "@/components/Other/Dropdown";
import { UserIcon, UserIcon2 } from "@/public/vectors/getIcons";

const NumberOfPeople = ({
  type,
  containerClass,
  pClass,
  divClass,
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
}) => {
  const locale = useLocale();
  const t = useTranslations("Accommodation");

  const bedroomCondition =
    locale === "en" && numberOfPeople > 1 ? t("moreBedroom") : t("bedroom");

  return (
    <div className={containerClass}>
      <p className={pClass}>
        {numberOfPeople} {bedroomCondition}
      </p>
      <div className={divClass}>
        {/*<p className="text-2xl font-bold text-indigo-900">{dropdownValue}</p>*/}
        <Dropdown
          options={peopleOptions}
          value={numberOfPeople}
          onChange={(value) => setNumberOfPeople(value)}
        />
        {type === "desktop" ? (
          <UserIcon className="w-5 h-5" />
        ) : (
          <UserIcon2 className="w-5 h-5 ml-1" />
        )}
      </div>
    </div>
  );
};

export default NumberOfPeople;
