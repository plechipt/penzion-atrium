import Dropdown from "@/components/Other/Dropdown";
import { UserIcon } from "@/public/vectors/getIcons";

const peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];

const RoomInputs = ({ stays }) => {
  const { shortStay, mediumStay, longStay, groupStay } = stays;
  const stayOptions = [shortStay, mediumStay, longStay, groupStay];

  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-0 sm:gap-4">
      <div className="flex flex-1 items-center gap-1">
        <Dropdown className="flex flex-1" value={1} options={peopleOptions} />
        <UserIcon className="w-5 h-5" />
      </div>

      <div className="flex flex-1 items-center gap-y-4">
        <Dropdown value={"Nice"} options={stayOptions} />
      </div>
    </div>
  );
};

export default RoomInputs;
