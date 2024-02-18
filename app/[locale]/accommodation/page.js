import Floor from "@/components/Accommodation/Floor/Floor";
import Tables from "@/components/Accommodation/Tables/Tables";
import Information from "@/components/Accommodation/Information";
import ResponsiveFloor from "@/components/Accommodation/ResponsiveFloor/ResponsiveFloor";
import { MotionDiv } from "@/components/Other/MotionComponents";

import { useMessages, NextIntlClientProvider } from "next-intl";

export default function Page() {
  const messages = useMessages();

  return (
    <main>
      <Tables />
      <div className="w-full space-y-8 mt-20">
        <NextIntlClientProvider messages={messages}>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.25,
              ease: "easeInOut",
            }}
          >
            <Floor />
            <ResponsiveFloor />
          </MotionDiv>
        </NextIntlClientProvider>
      </div>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          ease: "easeInOut",
        }}
      >
        <Information />
      </MotionDiv>
    </main>
  );
}
