import React, { useState } from "react";

const Header = () => {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Tomatoes",
    "Oregano",
  ]);

  function submit(formData) {
    const formDatas = formData.get("ingredient");
    setIngredients((newIngri) => {
      return [...newIngri, formDatas];
    });
  }
  const list = ingredients.map((ingredient) => {
    return (
      <li className="text-gray-400" key={ingredient}>
        {ingredient}
      </li>
    );
  });

  return (
    <div className="my-12">
      <form action={submit} className="flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="e.g Milk"
          className="w-96 h-12 px-4 border border-gray-300 rounded-lg"
          name="ingredient"
        />

        <button
          type="submit"
          className="h-12 w-40 flex items-center justify-center
                     bg-black text-white font-semibold rounded-lg
                     hover:bg-gray-500 cursor-pointer"
        >
          + Add ingredient
        </button>
      </form>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="list-disc w-96 mx-auto mt-8 pl-6">{list}</ul>
        <div className="">
            <div>
              <h3>
                Ready for a recipe?
              </h3>
              <p> generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>

        </div>
      </section>
    </div>
  );
};

export default Header;
/**
 app

{products.map(product)=>(
  <card key={product.title} product = {product} /> 
  )}

import {Fragment} from "react"
card
{
product.career.map((spec,index)=>{
  < Fragment key={index}>
  <hr />
  {spec} </Fragment>

  })
}


 */
