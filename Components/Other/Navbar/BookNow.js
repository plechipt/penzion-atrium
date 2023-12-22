import { BookNowIcon } from "@/assets/icons";
import { Button } from "@/Components/ui/button.jsx";

const BookNow = ({ buttonClassName, bookNow }) => {
  return (
    <Button className={buttonClassName}>
      <BookNowIcon className="w-4 h-4" />
      {bookNow}
    </Button>
  );
};

export default BookNow;
