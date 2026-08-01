import React from "react";
import Chef from "../../assets/chef.png";
const Navbar = () => {
  return (
    <div className="w-full bg-gray-50 border-b border-gray-200 shadow-sm mx-auto ">
      <div className="flex justify-center mx-auto py-3">
        <img src={Chef} className="w-8 h-7 " />
        <h2 className="text-2xl px-2">Chef Robert</h2>
      </div>
    </div>
  );
};

export default Navbar;
