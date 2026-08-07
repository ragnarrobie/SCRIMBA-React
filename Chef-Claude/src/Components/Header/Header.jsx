import React, { useState } from "react";
import Footer from "../Footer/Recipe";
import Ingredients from "../ingredients/Ingredients";
const Header = () => {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipe, setRecipe] = useState(false);

  function submit(formData) {
    const formDatas = formData.get("ingredient");

    setIngredients((newIngri) => {
      return [...newIngri, formDatas];
    });
  }
  function turn() {
    setRecipe((pre) => !pre);
  }
  const list = ingredients.map((ingredient) => {
    return (
      <li className="py-1 text-gray-700" key={ingredient}>
        {ingredient}
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <form
          action={submit}
          className="flex items-center justify-center gap-3"
        >
          <input
            type="text"
            placeholder="e.g Milk"
            className="h-12 w-96 rounded-lg border border-gray-300 bg-white px-4 text-gray-700 shadow-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            name="ingredient"
          />

          <button
            type="submit"
            className="flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-black font-semibold text-white transition hover:bg-gray-700"
          >
            + Add ingredient
          </button>
        </form>
        <Ingredients ingredients={ingredients} turn={turn} list={list} />

        {recipe && <Footer />}
      </div>
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
