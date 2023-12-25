import Link from "next/link";
import { FooterLogoIcon } from "@/public/vectors/getIcons";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const LogoWithSocials = () => {
  return (
    <div className="lg:space-y-6">
      <div className="flex flex-col items-center gap-2">
        <FooterLogoIcon className="w-[214px] h-[168px] lg:w-[168px] lg:h-[76px]" />
      </div>

      <div className="lg:flex hidden items-center gap-3">
        <Link
          className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
          href="#"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
          href="#"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default LogoWithSocials;
