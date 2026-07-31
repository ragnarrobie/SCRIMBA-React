import React from "react";
import react from "../../assets/react.svg"

const Navbar = () => {
  return (
    <div className="bg-red-400 w-full h-12 flex justify-center">
      <ul className="text-white flex items-center ">
        <img src = {react} className="w-8"/>
        <li>My travel Journal</li>
      </ul>
    </div>
  );
};

export default Navbar;
