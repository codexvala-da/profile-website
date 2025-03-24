import React from "react";
import Image from "next/image";
import ExampleComponent from "./ExampleComponent";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center size-auto sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold size-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
              Hello I'm {""}
            </span>
            <ExampleComponent />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-6">
            Hello, I'm Daxil Vala, a proficient and self-driven software
            engineer with a strong commitment to continuous learning and
            personal development. Started my career as a early engineer being a
            member of the founding team at @Elocity and everything upwards from
            then. The exposure to fast paced development and wearing multiple
            hats working at such an early age startup is something I am really
            grateful about and took me a long way in my career.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-900 text-white hover:text-white mt-3">
              Hire me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
              <span>Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250] h-[250] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/toon.png"
              alt="hero image"
              className="absolute transform -tranlate-x-1/2 -translate-y-0.5 -top-0.5 -left-0.5"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
