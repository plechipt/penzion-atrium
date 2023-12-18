import { UserIcon } from "@/assets/icons";

const NumberOfPeople = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="text-2xl font-bold text-indigo-900 ">1 Bed Room</p>
      <div className="flex items-center gap-1">
        <p className="text-2xl font-bold text-indigo-900">1</p>
        <UserIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default NumberOfPeople;
