"use client";
import { useContext } from "react";
import Dropdown from "@/components/Other/Dropdown";

import { AppContext } from "@/app/[locale]/providers";

const shortTermPeople = [1, 2, 3, 4, 5, 6, 7, 8];
const mediumTermPeople = [1, 2, 3, 4];
const longTermPeople = [1, 2, 3];
const groupPeople = ["10-19", "20+"];

const RoomInputs = ({
  stays,
  groups,
  stay,
  group,
  people,
  setStay,
  setGroup,
  setPeople,
}) => {
  let { stayType, setStayType, peopleOptions, setPeopleOptions, set } =
    useContext(AppContext);

  const { shortStay, mediumStay, longStay, groupStay } = stays;
  const stayOptions = [shortStay, mediumStay, longStay, groupStay];

  const { oneDay, twoOrMoreDays, bedroom, moreBedroom, peoplet } = groups;
  const groupOptions = [oneDay, twoOrMoreDays];

  const handleStayOnChange = (value) => {
    setStay(value);
    setPeople(1);

    if (value === shortStay) {
      setStayType("short");
      setPeopleOptions(shortTermPeople);
    } else if (value === mediumStay) {
      setStayType("medium");
      setPeopleOptions(mediumTermPeople);
    } else if (value === longStay) {
      setPeopleOptions(longTermPeople);
      setStayType("long");
    } else if (value === groupStay) {
      setStayType("group");
      setGroup(oneDay);
      setPeople("10-19");
      setPeopleOptions(groupPeople);
    }
  };

  let peopleCondition;
  if (stayType === "group") {
    peopleCondition = peoplet;
  } else {
    peopleCondition = people === 1 ? bedroom : moreBedroom;
  }

  return (
    <div className="mb-3 flex flex-col sm:flex-row gap-0 sm:gap-4">
      <div className="flex flex-1 items-center gap-2 mb-2 sm:mb-0">
        {stayType === "group" ? (
          <>
            <Dropdown
              value={group}
              options={groupOptions}
              onChange={(value) => setGroup(value)}
              divClass={"relative flex-1"}
            />
          </>
        ) : null}
        <Dropdown
          className="flex flex-1"
          value={people + " " + peopleCondition}
          options={peopleOptions}
          onChange={(value) => setPeople(value)}
          divClass={"relative flex-1"}
        />
      </div>

      <div className="flex flex-1 items-center gap-y-4">
        <Dropdown
          value={stay === undefined ? shortStay : stay}
          options={stayOptions}
          onChange={(value) => handleStayOnChange(value)}
          divClass={"relative flex-1"}
        />
      </div>
    </div>
  );
};

export default RoomInputs;
