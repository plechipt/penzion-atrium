import Image from "next/image";

const RoomImage = ({ roomImage, roomIcon }) => {
  return (
    <div className="relative w-60 h-3/4">
      <Image
        width={240}
        height={150}
        sizes="100vw"
        src={roomImage}
        className="w-full max-w-[240px] h-[150px]"
        alt="Room Image"
      />

      {/* Icon at Bottom Left Corner */}
      <div className="absolute bottom-2 right-2 ">
        <a href={roomImage} target="_blank">
          <Image
            width={12}
            height={12}
            sizes="100vw"
            src={roomIcon}
            alt="Icon Image"
            className="w-9 h-9"
          />
        </a>
      </div>
    </div>
  );
};

export default RoomImage;
