import Floor from "@/components/Accommodation Section/Floor/Floor";
import Tables from "@/components/Accommodation Section/Tables/Tables";
import Information from "@/components/Accommodation Section/Information";
import ResponsiveFloor from "@/components/Accommodation Section/ResponsiveFloor/ResponsiveFloor";

import { useMessages, NextIntlClientProvider } from "next-intl";

export default function Page() {
  const messages = useMessages();

  return (
    <main>
      <Tables />
      <div className="w-full space-y-8 mt-20">
        <NextIntlClientProvider messages={messages}>
          <Floor />
          <ResponsiveFloor />
        </NextIntlClientProvider>
      </div>
      <Information />
    </main>
  );
}
