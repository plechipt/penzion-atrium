import Link from "next/link";
import content from "@/public/text.json";

const DesktopLinks = ({ accommodation, services, surroundings, contact }) => {
  return (
    <nav className="hidden lg:flex gap-6">
      <Link className="text-base font-bold " href="/accommodation">
        {accommodation}
      </Link>
      <Link className="text-base font-bold " href="/services">
        {services}
      </Link>
      <Link className="text-base font-bold " href="/surroundings">
        {surroundings}
      </Link>
      <Link className="text-base font-bold " href="/contact">
        {contact}
      </Link>
    </nav>
  );
};

export default DesktopLinks;
