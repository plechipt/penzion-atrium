import { useTranslations } from "next-intl";
import Dropdown from "@/components/Other/Dropdown";
import { Calendar as CalendarIcon } from "lucide-react";

const AmountOfDays = ({
  containerClass,
  pClass,
  divClass,
  numberOfDays,
  setNumberOfDays,
  daysOptions,
}) => {
  console.log(numberOfDays);

  const tAcc = useTranslations("Accommodation");
  const daysText =
    numberOfDays === "1" ? tAcc("daysText") : tAcc("moreDaysText");

  return (
    <div className={containerClass}>
      <p className={pClass}>
        {numberOfDays} {daysText}
      </p>
      <div className={divClass}>
        {/*<p className="text-2xl font-bold text-indigo-900">{dropdownValue}</p>*/}
        <Dropdown
          options={daysOptions}
          value={numberOfDays}
          onChange={(value) => setNumberOfDays(value)}
          divClass={"relative"}
        />
        <CalendarIcon className="w-5 h-5 text-indigo-900" />
      </div>
    </div>
  );
};

export default AmountOfDays;
