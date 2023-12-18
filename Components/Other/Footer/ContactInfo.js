import { LocationIcon, PhoneIcon } from "@/assets/icons";

const ContactInfo = () => {
  return (
    <div className="space-y-3 lg:text-start text-center flex items-center flex-col lg:items-start">
      <h3 className="text-base font-bold">Contact info</h3>

      <div className="flex items-center gap-2">
        <LocationIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          541 01 - Trutnov, Žižkova 504
        </p>
      </div>
      <div className="flex items-center gap-2">
        <PhoneIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          tel.: (+420) 731 415 455
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
