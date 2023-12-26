import { useTranslations } from "next-intl";

import { Label } from "@/components/UI/label";
import { Button } from "@/components/UI/button";

const ContactForm = () => {
  const t = useTranslations("Contact");

  return (
    <div className="lg:border lg:rounded-lg lg:shadow lg:px-9 lg:py-10">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-center hidden lg:block md:text-start lg:text-center">
          {t("formTitle")}
        </h2>
      </div>

      <form className="h-full flex flex-col justify-between" id="form">
        <div className="mb-4">
          <Label className="text-base font-medium pb-2" htmlFor="name">
            {t("nameLabel")}
          </Label>
          <input
            className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline"
            id="name"
            required
            type="text"
            placeholder={t("namePlaceholder")}
          />
        </div>

        <div className="mb-4">
          <Label className="text-base font-medium pb-2" htmlFor="email">
            {t("emailLabel")}
          </Label>
          <input
            className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
          />
        </div>

        <div className="mb-6">
          <Label
            className="text-gray-700 text-base font-medium pb-2"
            htmlFor="message"
          >
            {t("messageLabel")}
          </Label>
          <textarea
            className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline resize-none"
            rows={4}
            id="message"
            required
            placeholder={t("messagePlaceholder")}
          ></textarea>
        </div>

        <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full">
          {t("send")}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
