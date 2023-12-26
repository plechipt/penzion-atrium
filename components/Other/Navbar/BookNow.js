import { Link } from "@/navigation";
import { BookNowIcon } from "@/public/vectors/getIcons";
import { Button } from "@/components/UI/button.jsx";

const BookNow = ({ buttonClassName, bookNow, closeMenu }) => {
  return (
    <Link href="/contact">
      <Button onClick={closeMenu} className={buttonClassName}>
        <BookNowIcon className="w-4 h-4" />
        {bookNow}
      </Button>
    </Link>
  );
};

export default BookNow;
