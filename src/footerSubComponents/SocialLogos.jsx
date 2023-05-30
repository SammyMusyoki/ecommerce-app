import React from "react";
import{ Logos }from '../footerSubComponents/Menus'

const SocialLogos = () => {
  return (
    <ul className="text-teal-500 pr-2">
      {Logos.map((logo, index) => (
        <li
          key={index}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          {logo.icon}
        </li>
      ))}
    </ul>
  );
};

export default SocialLogos;
