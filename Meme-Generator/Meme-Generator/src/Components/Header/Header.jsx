import React from "react";
import trollFace from "../../assets/react.svg"
const Header = () => {
  return (
    <div>
      <header className="flex items-center gap-3 px-6 py-4">
        <img src={trollFace} className="h-10 w-10" alt="Meme Generator logo" />
        <h1 className="text-2xl font-extrabold text-gray-900">
          Meme Generator
        </h1>
      </header>
    </div>
  );
};

export default Header;
