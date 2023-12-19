import { LocationIcon, PhoneIcon, SMSIcon } from "@/assets/icons";

const ContactDetails = () => {
  return (
    <div className="mt-10 w-full lg:hidden">
      <h2 className="text-black text-base font-bold leading-relaxed mb-3 text-center">
        Contact info
      </h2>

      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <div className="flex justify-center gap-2">
            <LocationIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              541 01 - Trutnov, Žižkova 504
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <PhoneIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              tel.: (+420) 731 415 455
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-black text-base font-bold leading-relaxed mb-3 text-center">
            Emails
          </h2>
          <div className="flex justify-center gap-2">
            <SMSIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              penzionatrium@seznam.cz
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <SMSIcon className="w-5 h-5 text-[#253871]" />
            <p className="text-neutral-500 text-base font-normal leading-relaxed">
              plechac@zskomtu.cz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
