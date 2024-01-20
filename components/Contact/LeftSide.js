import { useTranslations } from "next-intl";
import { LocationIcon, PhoneIcon } from "@/public/vectors/getIcons";

const ContactLeftSide = () => {
  const tContact = useTranslations("Contact");

  return (
    <div>
      <h2 className="text-black text-base font-bold leading-relaxed mb-3">
        {tContact("contactInfo")}
      </h2>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <LocationIcon className="w-5 h-5 text-[#253871]" />
          <p className="text-neutral-500 text-base font-normal leading-relaxed">
            {tContact("location")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon className="w-5 h-5 text-[#253871]" />
          <p className="text-neutral-500 text-base font-normal leading-relaxed">
            {tContact("telephone")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactLeftSide;
