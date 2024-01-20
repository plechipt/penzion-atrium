import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@/components/UI/button";
import { BookNowIcon } from "@/public/vectors/getIcons";
import CheckInAndOut from "@/components/Other/CheckInAndOut";

const DatePick = () => {
  const tHome = useTranslations("Home");

  return (
    <div>
      {/* Check-in section */}
      <CheckInAndOut
        translation={{
          checkInTitle: tHome("checkInTitle"),
          checkInPlaceholder: tHome("checkInPlaceholder"),
          checkOutTitle: tHome("checkOutTitle"),
          checkOutPlaceholder: tHome("checkOutPlaceholder"),
        }}
      />
      <Link href="/contact">
        <Button className="w-full bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
          <BookNowIcon className="w-4 h-4" />
          {tHome("bookNow")}
        </Button>
      </Link>
    </div>
  );
};

export default DatePick;
