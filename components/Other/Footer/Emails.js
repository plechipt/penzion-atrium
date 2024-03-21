import { useTranslations } from "next-intl";
import { SMSIcon } from "@/public/vectors/getIcons";

const Emails = () => {
  const tContact = useTranslations("Contact");

  return (
    <div className="space-y-3 lg:text-start text-center flex items-center flex-col lg:items-start">
      <p className="text-base font-bold">{tContact("emails")}</p>

      <div className="flex items-center gap-2">
        <SMSIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          {tContact("primaryEmail")}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <SMSIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          penzionatrium@seznam.cz
        </p>
      </div>
    </div>
  );
};

export default Emails;
