import { UserIcon, UserIcon2 } from "@/assets/icons";

import Dropdown from "@/Components/Other/Dropdown";

const NumberOfPeople = ({
  type,
  containerClass,
  pClass,
  divClass,
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
  stayType,
  setStayType,
}) => {
  return (
    <div className={containerClass}>
      <p className={pClass}>{numberOfPeople} Bed Room</p>
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
