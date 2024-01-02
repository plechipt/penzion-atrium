import { useTranslations, useLocale } from "next-intl";
import Dropdown from "@/components/Other/Dropdown";
import { UserIcon, UserIcon2 } from "@/public/vectors/getIcons";

const NumberOfPeople = ({
  type,
  containerClass,
  pClass,
  divClass,
  stayType,
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
  setNumberOfDays,
}) => {
  const locale = useLocale();
  const t = useTranslations("Accommodation");

  let numberText;
  if (stayType === "group") {
    numberText = t("people");
  } else {
    numberText =
      locale === "en" && numberOfPeople > 1 ? t("moreBedroom") : t("bedroom");
  }

  const handleOnChange = (value) => {
    setNumberOfDays("1-2");
    setNumberOfPeople(value);
  };

  return (
    <div className={containerClass}>
      <p className={pClass}>
        {numberOfPeople} {numberText}
      </p>
      <div className={divClass}>
        {/*<p className="text-2xl font-bold text-indigo-900">{dropdownValue}</p>*/}
        <Dropdown
          options={peopleOptions}
          value={numberOfPeople}
          onChange={(value) => handleOnChange(value)}
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
