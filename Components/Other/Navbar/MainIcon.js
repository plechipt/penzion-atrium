import Image from "next/image";
import { Link } from "@/navigation";

import images from "@/public/images/ImageApi.js";

const MainIcon = ({ setIsMenuOpen }) => {
  return (
    <div className="flex items-center">
      <Link onClick={() => setIsMenuOpen(false)} href="/">
        <Image
          width={180}
          height={40}
          src={images.home_vectors[0]}
          alt="Main Icon"
        />
      </Link>
    </div>
  );
};

export default MainIcon;
