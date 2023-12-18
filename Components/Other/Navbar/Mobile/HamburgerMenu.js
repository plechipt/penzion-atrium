import { Menu, X } from "lucide-react";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden relative">
      <button
        type="button"
        className="focus:outline-none  text-neutral-700"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>
    </div>
  );
};

export default HamburgerMenu;
