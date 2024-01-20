import { useTranslations } from "next-intl";
import { LocationIcon, PhoneIcon } from "@/public/vectors/getIcons";

const ContactInfo = () => {
  const tContact = useTranslations("Contact");

  return (
    <div className="space-y-3 lg:text-start text-center flex items-center flex-col lg:items-start">
      <h3 className="text-base font-bold">{tContact("contactInfo")}</h3>

      <div className="flex items-center gap-2">
        <LocationIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          {tContact("location")}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <PhoneIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          {tContact("telephone")}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
