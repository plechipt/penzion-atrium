import {
  Room1TImage,
  Room1SImage,
  Room2TImage,
  Room2SImage,
  Room3TImage,
  Room3TImage2,
  Room4TImage,
  Room4SImage,
  Room5TImage,
  Room6TImage,
  Room7TImage,
} from "@/public/images/getImages";

import {
  BottomKitchenImage,
  UpperKitchenImage,
} from "@/public/images/getImages";

import {
  WC1Image,
  WC2Image,
  WC3Image,
  WC4Image,
  WC5Image,
  WC6Image,
} from "@/public/images/getImages";

import {
  FrontImage,
  FrontMainImage,
  PlaygroundImage,
  EntranceImage,
} from "@/public/images/getImages";

const GalleryData = () => {
  const roomImages = [
    {
      src: Room1TImage,
      alt: "Room1SImage",
      index: 0,
    },
    {
      src: Room1SImage,
      alt: "Room1TImage",
      index: 1,
    },
    {
      src: Room2TImage,
      alt: "Room2TImage",
      index: 2,
    },
    {
      src: Room2SImage,
      alt: "Room2SImage",
      index: 3,
    },
    {
      src: Room3TImage,
      alt: "Room3TImage",
      index: 4,
    },
    {
      src: Room3TImage2,
      alt: "Room3TImage2",
      index: 5,
    },
    {
      src: Room4TImage,
      alt: "Room4TImage",
      index: 6,
    },
    {
      src: Room4SImage,
      alt: "Room4SImage",
      index: 7,
    },
  ];

  const kitchenImages = [
    {
      src: BottomKitchenImage,
      alt: "BottomKitchenImage",
      index: 8,
    },
    {
      src: UpperKitchenImage,
      alt: "UpperKitchenImage",
      index: 9,
    },
  ];

  const outsideImages = [
    {
      src: FrontImage,
      alt: "FrontImage",
      index: 10,
    },
    {
      src: FrontMainImage,
      alt: "FrontMainImage",
      index: 11,
    },
    {
      src: PlaygroundImage,
      alt: "PlaygroundImage",
      index: 12,
    },
    {
      src: EntranceImage,
      alt: "EntranceImage",
      index: 13,
    },
  ];

  const toiletImages = [
    {
      src: WC1Image,
      alt: "WC1Image",
      index: 14,
    },
    {
      src: WC2Image,
      alt: "WC2Image",
      index: 15,
    },
    {
      src: WC3Image,
      alt: "WC3Image",
      index: 16,
    },
   
    {
      src: WC5Image,
      alt: "WC5Image",
      index: 17,
    },
    {
      src: WC6Image,
      alt: "WC6Image",
      index: 18,
    },
  ];

  return { roomImages, kitchenImages, outsideImages, toiletImages };
};

export default GalleryData;
