import React, { useState } from "react";

const Header = () => {
  const [ingredients, setIngredients] = useState([]);

  function submit(formData) {
    const formDatas = formData.get("ingredient");

    setIngredients((newIngri) => {
      return [...newIngri, formDatas];
    });
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

        {ingredients.length > 0 ? (
          <section className="mt-12 rounded-xl bg-white p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900">
              Ingredients on hand:
            </h2>

            <ul className="mt-6 list-disc space-y-2 pl-6">{list}</ul>
            {ingredients.length > 3 ? <div className="mt-10 flex items-center justify-between gap-6 rounded-lg bg-gray-100 p-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Ready for a recipe?
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>

              <button
                type="button"
                onClick=""
                className="shrink-0 cursor-pointer rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Get a recipe
              </button>
            </div> : null}
          </section>
        ) : null}
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
