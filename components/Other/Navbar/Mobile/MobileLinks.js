"use client";
import { Link } from "@/navigation";
import { usePathname } from "@/navigation";

const MobileLinks = ({
  setIsMenuOpen,
  home,
  accommodation,
  services,
  surroundings,
  contact,
}) => {
  const pathname = usePathname();

  const notActiveLinkClass = "text-xl font-bold";
  const activeLinkClass = "text-xl font-bold text-indigo-900";

  return (
    <nav className="gap-6 flex flex-col">
      <Link
        className={pathname === "/" ? activeLinkClass : notActiveLinkClass}
        href="/"
        onClick={() => setIsMenuOpen(false)}
      >
        {home}
      </Link>
      <Link
        className={
          pathname === "/accommodation" || pathname === "/ubytovani"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/accommodation"
        onClick={() => setIsMenuOpen(false)}
      >
        {accommodation}
      </Link>
      <Link
        className={
          pathname === "/services" || pathname === "/sluzby"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/services"
        onClick={() => setIsMenuOpen(false)}
      >
        {services}
      </Link>
      <Link
        className={
          pathname === "/surroundings" || pathname === "/okoli"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/surroundings"
        onClick={() => setIsMenuOpen(false)}
      >
        {surroundings}
      </Link>
      <Link
        className={
          pathname === "/contact" || pathname === "/kontakt"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/contact"
        onClick={() => setIsMenuOpen(false)}
      >
        {contact}
      </Link>
    </nav>
  );
};

export default MobileLinks;
