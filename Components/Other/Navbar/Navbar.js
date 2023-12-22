import { useTranslations } from "next-intl";

import BookNow from "./BookNow";
import MainIcon from "./MainIcon";
import LanguageSwitcher from "./LanguageSwitcher";

// Desktop
import DesktopLinks from "./Desktop/DesktopLinks";

// Mobile
import MobileSection from "./Mobile/MobileSection";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <header className="container flex items-center justify-between pb-6 pt-8">
      {/* Left side with icon */}
      <MainIcon />

      <MobileSection
        accommodation={t("accommodation")}
        services={t("services")}
        surroundings={t("surroundings")}
        contact={t("contact")}
        bookNow={t("bookNow")}
      />

      <div className="hidden lg:flex items-center gap-8 ">
        {/*  Links */}
        <DesktopLinks
          accommodation={t("accommodation")}
          services={t("services")}
          surroundings={t("surroundings")}
          contact={t("contact")}
          bookNow={t("bookNow")}
        />

        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <LanguageSwitcher triggerClassName="w-[101px] border-0 border-transparent bg-neutral-50 rounded-lg" />

          {/* Button */}
          <BookNow
            bookNow={t("bookNow")}
            buttonClassName="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
