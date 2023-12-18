import Link from "next/link";
import Image from "next/image";

import images from "@/public/images/ImageApi.js";

const MainIcon = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
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
