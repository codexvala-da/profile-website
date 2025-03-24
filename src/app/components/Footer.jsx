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
        <p className="text-slate-600">
          Crafted with <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Next.js</span>, and{" "}
          <span className="font-medium">Tailwind CSS</span> and{" "}
          <span className=" font-medium">caffeine-powered focus</span>
          .
          <br />© {new Date().getFullYear()} All rights reserved. (Bug-free
          guarantee not included.)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
