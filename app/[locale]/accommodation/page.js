import Floor from "@/Components/Accommodation Section/Floor/Floor";
import Tables from "@/Components/Accommodation Section/Tables/Tables";
import Information from "@/Components/Accommodation Section/Information";
import ResponsiveFloor from "@/Components/Accommodation Section/ResponsiveFloor/ResponsiveFloor";

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
