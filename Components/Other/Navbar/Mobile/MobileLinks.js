import Link from "next/link";
import content from "@/public/text.json";

const MobileLinks = ({ setIsMenuOpen }) => {
  return (
    <nav className="gap-6 flex flex-col">
      <Link
        className="text-xl font-bold"
        href="/accommodation"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {content.nav_accom}
      </Link>
      <Link
        className="text-xl font-bold"
        href="/services"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {content.nav_ser}
      </Link>
      <Link
        className="text-xl font-bold"
        href="/surroundings"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {content.nav_surr}
      </Link>
      <Link
        className="text-xl font-bold"
        href="/contact"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {content.nav_contact}
      </Link>
    </nav>
  );
};

export default MobileLinks;
