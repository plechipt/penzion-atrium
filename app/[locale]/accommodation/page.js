import Floor from "@/components/Accommodation/Floor/Floor";
import Tables from "@/components/Accommodation/Tables/Tables";
import Information from "@/components/Accommodation/Information";
import ResponsiveFloor from "@/components/Accommodation/ResponsiveFloor/ResponsiveFloor";

import { NextIntlClientProvider } from "next-intl";

export default function Page() {
  return (
    <main>
      <Tables />
      <div className="w-full space-y-8 mt-20">
        <NextIntlClientProvider>
          <Floor />
          <ResponsiveFloor />
        </NextIntlClientProvider>
      </div>

      <Information />
    </main>
  );
}
