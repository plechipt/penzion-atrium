// components/FooterColumn.js
import React from 'react';
import Image from 'next/image';

const FooterColumn = ({ heading, row1Icon, row1Text, row2Icon, row2Text }) => {
  return (
    <div className="w-auto mx-auto  ">
      <div className="mb-4 text-center md:text-start">
        {/* Heading */}
        <h4 className="text-xl font-bold mb-2">{heading}</h4>
      </div>
      <div className="flex items-center mb-2">
        {/* Row 1 Icon */}
        <Image width={22} height={22} src={row1Icon} alt="Row 1 Icon" className="h-6 w-6  mr-2" />
        {/* Row 1 Text */}
        <p className="text-xl">{row1Text}</p>
      </div>
      <div className="flex items-center text-center md:text-start">
        {/* Row 2 Icon */}
        <Image width={22} height={22} src={row2Icon} alt="Row 2 Icon" className="h-6 w-6 mr-2" />
        {/* Row 2 Text */}
        <p className="text-xl">{row2Text}</p>
      </div>
    </div>
  );
};

export default FooterColumn;
