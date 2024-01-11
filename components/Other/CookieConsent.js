"use client";
import { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";

const CookieConsent = ({ translation }) => {
  const [consent, setConsent] = useState(true);
  const { cookieNotice, cookieText, accept, deny } = translation;

  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    console.log("accepting cookies");
  };
  const closeP = () => {
    setConsent(true);
    console.log("closing");
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("denying cookie");
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`${
        consent ? "hidden" : ""
      }fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 m-auto left-0 bottom-5 ml-[5%] w-[90%] md:ml-0 md:w-[100%] md:left-5 md:bottom-5 md:w-[100%] dark:border-gray-700 rounded-2xl`}
    >
      <div className="flex justify-between">
        <h2 className="font-semibold text-gray-800 dark:text-white">
          {cookieNotice}
        </h2>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        {cookieText}
      </p>

      <div className="flex items-center  mt-4 gap-x-4 shrink-0">
        <button
          onClick={acceptCookie}
          className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
        >
          {accept}
        </button>
        <button
          onClick={denyCookie}
          className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
        >
          {deny}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
