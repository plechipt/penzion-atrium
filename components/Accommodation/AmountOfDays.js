import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Dropdown from "@/components/Other/Dropdown";
import { UserIcon, UserIcon2 } from "@/public/vectors/getIcons";

const AmountOfDays = ({
  type,
  containerClass,
  pClass,
  divClass,
  numberOfDays,
  setNumberOfDays,
  daysOptions,
}) => {
  return (
    <div className={containerClass}>
      <p className={pClass}>{numberOfDays}</p>
      <div className={divClass}>
        {/*<p className="text-2xl font-bold text-indigo-900">{dropdownValue}</p>*/}
        <Dropdown
          options={daysOptions}
          value={numberOfDays}
          onChange={(value) => setNumberOfDays(value)}
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

export default AmountOfDays;
