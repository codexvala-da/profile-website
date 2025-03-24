import React from "react";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      // Adjust for fixed navbar height (adjust the value as needed)
      const navbarHeight = 80; // Approx 80px for navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
