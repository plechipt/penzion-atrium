import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@/components/UI/button";
import { BookNowIcon } from "@/public/vectors/getIcons";
import { DatePicker } from "@/components/Other/DatePicker";
import CheckInAndOut from "@/components/Other/CheckInAndOut";

const DatePick = () => {
  const t = useTranslations("Home");

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Check-in section */}
        <CheckInAndOut
          checkInTitle={t("checkInTitle")}
          checkInPlaceholder={t("checkInPlaceholder")}
          checkOutTitle={t("checkOutTitle")}
          checkOutPlaceholder={t("checkOutPlaceholder")}
        />
      </div>
      <Link href="/contact">
        <Button className="w-full bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
          <BookNowIcon className="w-4 h-4" />
          {t("bookNow")}
        </Button>
      </Link>
    </div>
  );
};

export default DatePick;
