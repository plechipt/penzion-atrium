import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const MobileIcons = () => {
  return (
    <div className="flex lg:hidden items-center gap-3">
      <Link
        href="https://www.instagram.com/penzionatriumtrutnov"
        target="_blank"
        className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.facebook.com/penzionatriumtrutnov"
        target="_blank"
        className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
      >
        <FaFacebookF />
      </Link>
    </div>
  );
};

export default MobileIcons;
