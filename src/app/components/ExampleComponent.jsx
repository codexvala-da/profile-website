"use client";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Daxil",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "Backend Engineer",
        1000,
        "Startup head",
        1000,
        "Hustler",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent;
