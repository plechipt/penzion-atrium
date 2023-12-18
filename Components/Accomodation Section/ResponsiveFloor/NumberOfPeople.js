import { UserIcon } from "@/assets/icons";

const NumberOfPeople = () => {
  return (
    <div className="flex flex-col ">
      <p className="md:text-2xl text-base font-bold text-indigo-900 ">
        1 Bed Room
      </p>
      <div className="flex items-center mt-1 ">
        <p className="md:text-2xl text-base  font-bold text-indigo-900">1</p>
        <UserIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default NumberOfPeople;
