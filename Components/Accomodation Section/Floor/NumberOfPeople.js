import { UserIcon } from "@/assets/icons";

import Dropdown from "@/Components/Other/Dropdown";

const NumberOfPeople = ({
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="text-2xl font-bold text-indigo-900 ">
        {numberOfPeople} Bed Room
      </p>
      <div className="flex items-center gap-1">
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
