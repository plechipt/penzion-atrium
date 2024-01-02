import { useTranslations } from "next-intl";

import { Label } from "@/components/UI/label";
import { Button } from "@/components/UI/button";
import CheckInAndOut from "@/components/Other/CheckInAndOut";

import FormInput from "./FormInput";
import RoomInputs from "./RoomInputs";

const ContactForm = () => {
  const tAcc = useTranslations("Accommodation");
  const tHome = useTranslations("Home");
  const tContact = useTranslations("Contact");

  const translation = {
    shortStay: tAcc("shortTermStay"),
    mediumStay: tAcc("mediumTermStay"),
    longStay: tAcc("longTermStay"),
    groupStay: tAcc("groupStay"),
  };

  return (
    <div className="lg:border lg:rounded-lg lg:shadow lg:px-9 lg:py-10">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-center hidden lg:block md:text-start lg:text-center">
          {tContact("formTitle")}
        </h2>
      </div>

      <form className="h-full flex flex-col justify-between" id="form">
        <FormInput
          label={tContact("nameLabel")}
          inputType={"text"}
          type={"text"}
          placeholder={tContact("namePlaceholder")}
        />
        <FormInput
          label={tContact("emailLabel")}
          inputType={"email"}
          type={"email"}
          placeholder={tContact("emailPlaceholder")}
        />

        <div className="mb-2">
          <Label className="text-base font-bold pb-2" htmlFor="message">
            {tContact("messageLabel")}
          </Label>
          <textarea
            className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline resize-none"
            rows={4}
            id="message"
            required
            placeholder={tContact("messagePlaceholder")}
          ></textarea>
        </div>

        <div className="">
          <CheckInAndOut
            checkInTitle={tHome("checkInTitle")}
            checkInPlaceholder={tHome("checkInPlaceholder")}
            checkOutTitle={tHome("checkOutTitle")}
            checkOutPlaceholder={tHome("checkOutPlaceholder")}
          />
        </div>

        <RoomInputs
          stays={{
            shortStay: tAcc("shortTermStay"),
            mediumStay: tAcc("mediumTermStay"),
            longStay: tAcc("longTermStay"),
            groupStay: tAcc("groupStay"),
          }}
        />

        <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full">
          {tContact("send")}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
