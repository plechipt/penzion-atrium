import RoomImage from "./RoomImage";
import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "./NumberOfPeople";
import DropdownButton from "./DropdownButton";

const CustomComponent = ({ heading, desc }) => {
  return (
    <div className="container">
      <div className="w-full hidden lg:block">
        {/* Heading and Subtext */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6 mt-4">{heading}</h2>
          <p className="text-gray-500">{desc}</p>
        </div>

        <div className="flex items-center w-full justify-between bg-floor p-6 rounded">
          {/* Element 1: Image */}
          <RoomImage />

          {/* Element 2: Text with Icon */}
          <NumberOfPeople />

          {/* Element 3: Vertical Line */}
          <div className="border h-36"></div>

          {/* Element 4 and 5: Text and Subtext */}
          <PriceOfRooms />

          {/* Element 6: Dropdown */}
          <DropdownButton />
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
