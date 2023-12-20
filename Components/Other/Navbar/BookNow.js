import { BookNowIcon } from "@/assets/icons";
import { Button } from "@/Components/ui/button.jsx";

import content from "@/public/text.json";

const BookNow = ({ buttonClassName }) => {
  return (
    <Button className={buttonClassName}>
      <BookNowIcon className="w-4 h-4" />
      {content.nav_btn}
    </Button>
  );
};

export default BookNow;
