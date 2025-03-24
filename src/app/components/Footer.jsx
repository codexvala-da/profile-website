import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image
            src="/images/logo.png" // Path to your image
            alt="Logo"
            width={500} // Adjust the width
            height={500} // Adjust the height
            className="md:w-[200px] md:h-[80px]" // Adjust responsive sizes if needed
          />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
