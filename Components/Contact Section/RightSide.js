import { SMSIcon } from "@/assets/icons";

const ContactRightSide = () => {
  return (
    <div>
      <h2 className="text-black text-base font-bold leading-relaxed mb-3">
        Emails
      </h2>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <SMSIcon className="w-5 h-5 text-[#253871]" />
          <p className="text-neutral-500 text-base font-normal leading-relaxed">
            penzionatrium@seznam.cz
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SMSIcon className="w-5 h-5 text-[#253871]" />
          <p className="text-neutral-500 text-base font-normal leading-relaxed">
            plechac@zskomtu.cz
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactRightSide;
