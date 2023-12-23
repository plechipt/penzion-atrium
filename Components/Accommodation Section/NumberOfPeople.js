import { useLocale } from "next-intl";
import Dropdown from "@/Components/Other/Dropdown";
import { UserIcon, UserIcon2 } from "@/assets/icons";

const NumberOfPeople = ({
  type,
  containerClass,
  pClass,
  divClass,
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
  bedroom,
  moreBedroom,
}) => {
  const locale = useLocale();
  const bedroomCondition =
    locale === "en" && numberOfPeople > 1 ? moreBedroom : bedroom;

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
