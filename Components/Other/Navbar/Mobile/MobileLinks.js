import Link from "next/link";

const MobileLinks = ({
  setIsMenuOpen,
  accommodation,
  services,
  surroundings,
  contact,
}) => {
  return (
    <nav className="gap-6 flex flex-col">
      <Link
        className="text-xl font-bold"
        href="/accommodation"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {accommodation}
      </Link>
      <Link
        className="text-xl font-bold"
        href="/services"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {services}
      </Link>
      <Link
        className="text-xl font-bold"
        href="/surroundings"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {surroundings}
      </Link>
      <Link
        className="text-xl font-bold"
        href="/contact"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {contact}
      </Link>
    </nav>
  );
};

export default MobileLinks;
