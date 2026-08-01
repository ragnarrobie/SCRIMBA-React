import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" bg-orange-100 flex items-center mr-70 pl-2 pr-30 ml-64 mb-30 rounded-lg h-40">
        <div
          className="py-6 pl-15 ml-20 flex items-center"
        >
          <div className="flex flex-col">
            <h3 className="mb-1">Ready for a recipe?</h3>
            <p className="text-sm text-gray-500">
              Generate a recipe from your list of ingredients
            </p>
          </div>

          <button className="bg-amber-600 rounded-md ml-64 px-2 py-3 text-sm cursor-pointer hover:bg-amber-500">
            Get a recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
