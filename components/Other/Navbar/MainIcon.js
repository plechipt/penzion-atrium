import { Link } from "@/navigation";

import { MainIcon as MainIconIC } from "@/public/vectors/getIcons";

const MainIcon = ({ setIsMenuOpen }) => {
  return (
    <div className="flex items-center">
      <Link
        onClick={() => setIsMenuOpen(false)}
        href="/"
        aria-label="Switch language"
      >
        <MainIconIC className="w-40 h-14" />
      </Link>
    </div>
  );
};

export default MainIcon;
