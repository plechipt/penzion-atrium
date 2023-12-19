import { UserIcon } from "@/assets/icons";

import Dropdown from "@/Components/Other/Dropdown";

const NumberOfPeople = ({
  containerClass,
  pClass,
  divClass,
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
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
        <UserIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default NumberOfPeople;
