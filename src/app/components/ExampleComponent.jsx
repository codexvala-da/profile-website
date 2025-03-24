"use client";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Daxil",
        2000,
        "Software Engineer",
        1000,
        "Building Backends",
        1000,
        "Turning ☕ into Code",
        1000,
        "Hackathon Whisperer",
        1000,
        "Startup Enthusiast",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent;
