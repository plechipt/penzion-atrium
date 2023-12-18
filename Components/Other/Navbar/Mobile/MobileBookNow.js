import { BookNowIcon } from "@/assets/icons";
import { Button } from "@/Components/ui/button.jsx";

import content from "@/public/text.json";

const MobileBookNow = () => {
  return (
    <Button className="bg-primary-gradient w-full text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
      <BookNowIcon className="w-4 h-4" />
      {content.nav_btn}
    </Button>
  );
};

export default MobileBookNow;
