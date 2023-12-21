import { useTranslations } from "next-intl";

import Form from "./Form";
import Details from "./Details";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const ContactUs = () => {
  const t = useTranslations("Contact");

  return (
    <div className="py-8 lg:py-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-8 text-center">
        {t("title")}
      </h1>

      <div className="flex flex-col-reverse lg:flex-row justify-center mb-20 items-stretch">
        {/* Left side with Google Map */}
        <div className="flex-1 h-80 lg:h-auto w-full mt-6 lg:mt-0 lg:w-4/5 lg:p-4">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4262.595207075822!2d15.90133930628101!3d50.56105849335532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e8c9a9b403f85%3A0xe0962272e4103b7f!2sPension%20Atrium!5e0!3m2!1sen!2scz!4v1702919545773!5m2!1sen!2scz"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <Details />
        </div>

        {/* Right side with contact form */}
        <div className="flex-1 w-full lg:w-1/2 lg:p-4 px-4">
          <Form />

          <div className="mt-20 lg:grid grid-cols-2 w-full hidden">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
