// components/ResponsiveImage.js
"use client";
import React, { useState, useEffect } from "react";
import ImageEffect from "./ImageEffect";

const ResponsiveImage = ({ small, large, icon }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isWideScreen = windowWidth >= 1000;

  return (
    <div className={isWideScreen ? "lg:mr-4" : "mb-4 mx-4"}>
      {isWideScreen ? (
        <>
          <ImageEffect img1={small} img2={icon} />
        </>
      ) : (
        <>
          <ImageEffect img1={large} img2={icon} />
        </>
      )}
    </div>
  );
};

export default ResponsiveImage;
