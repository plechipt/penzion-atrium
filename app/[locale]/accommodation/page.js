import Floor from "@/Components/Accomodation Section/Floor/Floor";
import Tables from "@/Components/Accomodation Section/Tables/Tables";
import Information from "@/Components/Accomodation Section/Information";
import ResponsiveFloor from "@/Components/Accomodation Section/ResponsiveFloor/ResponsiveFloor";

import text from "@/public/text.json";

export default function Page() {
  return (
    <main>
      <Tables />
      <div className="w-full space-y-8 mt-20">
        <Floor heading="Choose a room" desc={text.first_floor} />

        <ResponsiveFloor heading="Choose a room" desc={text.first_floor} />
      </div>
      <Information />
    </main>
  );
}
