import { useTranslations } from "next-intl";
import { LocationIcon, PhoneIcon, SMSIcon } from "@/assets/icons";

const ContactDetails = () => {
  const t = useTranslations("Contact");

  return (
    <div className="mt-10 w-full lg:hidden">
      <h2 className="text-black text-base font-bold leading-relaxed mb-3 text-center">
        {t("contactInfo")}
      </h2>

      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <div className="flex justify-center gap-2">
            <LocationIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              {t("location")}
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <PhoneIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              {t("telephone")}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-black text-base font-bold leading-relaxed mb-3 text-center">
            {t("emails")}
          </h2>
          <div className="flex justify-center gap-2">
            <SMSIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              {t("primaryEmail")}
            </p>
          </div>
          {/*
          <div className="flex justify-center gap-2">
            <SMSIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              plechac@zskomtu.cz
            </p>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
