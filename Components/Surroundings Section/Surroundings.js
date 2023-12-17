"use client";
import React, { useEffect, useState } from "react";
import SurroundingElement from "./SurroundingElement";

import text from "@/public/text.json";
import imgAPI from "@/public/images/ImageApi";

const Surroundings = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for resizing
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container py-10 lg:py-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-8 text-center">
        Surroundings
      </h1>
      <SurroundingElement
        heading="Trutnov city Center"
        text={text.surr_1}
        large_img={imgAPI.surr_img[6]}
        small_img={imgAPI.surr_img[0]}
        reverse={false}
      />

      <SurroundingElement
        heading="The Krkonoše Mountains National Park"
        text={text.surr_2}
        large_img={imgAPI.surr_img[7]}
        small_img={imgAPI.surr_img[1]}
        reverse={true}
      />

      <SurroundingElement
        heading="Adršpach-Teplice rocks"
        text={text.surr_3}
        large_img={imgAPI.surr_img[8]}
        small_img={imgAPI.surr_img[2]}
        reverse={false}
      />

      <SurroundingElement
        heading="Kuks"
        text={text.surr_4}
        large_img={imgAPI.surr_img[9]}
        small_img={imgAPI.surr_img[3]}
        reverse={true}
      />

      <SurroundingElement
        heading="ZOO Dvůr Králové"
        text={text.surr_5}
        large_img={imgAPI.surr_img[10]}
        small_img={imgAPI.surr_img[4]}
        reverse={false}
      />

      {!isMobile && (
        <SurroundingElement
          heading="Dolce Pond"
          text={text.surr_6}
          large_img={imgAPI.surr_img[10]}
          small_img={imgAPI.surr_img[5]}
          reverse={true}
        />
      )}
    </div>
  );
};

export default Surroundings;
