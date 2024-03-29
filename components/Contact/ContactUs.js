import {
  useTranslations,
  useMessages,
  NextIntlClientProvider,
} from "next-intl";
import { MotionH1, MotionDiv } from "@/components/Other/MotionComponents";

import Form from "./Form/Form";
import Details from "./Details";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import GoogleMaps from "./GoogleMaps";

const ContactUs = () => {
  const messages = useMessages();
  const tContact = useTranslations("Contact");

  return (
    <div className="mt-10">
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="md:text-5xl text-4xl font-bold mb-8 lg:mb-10 text-center"
      >
        {tContact("title")}
      </MotionH1>

      <div className="flex flex-col-reverse gap-8 lg:flex-row justify-center mb-20 items-stretch">
        {/* Left side with Google Map */}
        <div className="flex-1 lg:h-auto w-full mt-6 lg:mt-0 lg:w-4/5 lg:p-4">
          <MotionDiv
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <GoogleMaps className="h-50" />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.75,
              ease: "easeInOut",
            }}
          >
            <Details />
          </MotionDiv>
        </div>
        {/* Right side with contact form */}
        <div className="flex-1 w-full lg:w-1/2 lg:p-4 px-4">
          {/*
          <NextIntlClientProvider messages={messages}>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
                ease: "easeInOut",
              }}
            >
              <Form />
            </MotionDiv>
          </NextIntlClientProvider>
          */}
          <div className="lg:grid grid-cols-2 w-full hidden">
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <LeftSide />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25 }}
            >
              <RightSide />
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
