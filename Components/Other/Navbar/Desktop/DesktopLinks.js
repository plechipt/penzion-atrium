import Link from "next/link";
import content from "@/public/text.json";

const DesktopLinks = () => {
  return (
    <nav className="hidden lg:flex gap-6">
      <Link className="text-base font-bold " href="/accomodation">
        {content.nav_accom}
      </Link>
      <Link className="text-base font-bold " href="/services">
        {content.nav_ser}
      </Link>
      <Link className="text-base font-bold " href="/surroundings">
        {content.nav_surr}
      </Link>
      <Link className="text-base font-bold " href="/contact">
        {content.nav_contact}
      </Link>
    </nav>
  );
};

export default DesktopLinks;
