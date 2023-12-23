import Floor from "@/Components/Accommodation Section/Floor/Floor";
import Tables from "@/Components/Accommodation Section/Tables/Tables";
import Information from "@/Components/Accommodation Section/Information";
import ResponsiveFloor from "@/Components/Accommodation Section/ResponsiveFloor/ResponsiveFloor";

import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Accommodation");

  return (
    <main>
      <Tables />
      <div className="w-full space-y-8 mt-20">
        <Floor
          heading={t("chooseRoomTitle")}
          groundFloor={t("groundFloor")}
          firstFloor={t("firstFloor")}
          bedroom={t("bedroom")}
          moreBedroom={t("moreBedroom")}
          shortTermStay={t("shortTermStay")}
          mediumTermStay={t("mediumTermStay")}
          longTermStay={t("longTermStay")}
          bookNow={t("bookNow")}
        />

        <ResponsiveFloor
          heading={t("chooseRoomTitle")}
          groundFloor={t("groundFloor")}
          firstFloor={t("firstFloor")}
          bedroom={t("bedroom")}
          moreBedroom={t("moreBedroom")}
          shortTermStay={t("shortTermStay")}
          mediumTermStay={t("mediumTermStay")}
          longTermStay={t("longTermStay")}
          bookNow={t("bookNow")}
        />
      </div>
      <Information />
    </main>
  );
}
