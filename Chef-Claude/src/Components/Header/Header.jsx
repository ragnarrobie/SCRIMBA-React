import React, { useState } from "react";

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

        {ingredients.length > 0 ? (
          <section className="mt-12 rounded-xl bg-white p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900">
              Ingredients on hand:
            </h2>

            <ul className="mt-6 list-disc space-y-2 pl-6">{list}</ul>
            {ingredients.length > 3 ? (
              <div className="mt-10 flex items-center justify-between gap-6 rounded-lg bg-gray-100 p-6">
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
                  onClick={turn}
                  className="shrink-0 cursor-pointer rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Get a recipe
                </button>
              </div>
            ) : null}
          </section>
        ) : null}
        {recipe && (
          <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
              <p>
                Based on the ingredients you have available, I would recommend
                making a simple a delicious{" "}
                <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
              </p>
              <h3>Beef Bolognese Pasta</h3>
              <strong>Ingredients:</strong>
              <ul>
                <li>1 lb. ground beef</li>
                <li>1 onion, diced</li>
                <li>3 cloves garlic, minced</li>
                <li>2 tablespoons tomato paste</li>
                <li>1 (28 oz) can crushed tomatoes</li>
                <li>1 cup beef broth</li>
                <li>1 teaspoon dried oregano</li>
                <li>1 teaspoon dried basil</li>
                <li>Salt and pepper to taste</li>
                <li>
                  8 oz pasta of your choice (e.g., spaghetti, penne, or
                  linguine)
                </li>
              </ul>
              <strong>Instructions:</strong>
              <ol>
                <li>
                  Bring a large pot of salted water to a boil for the pasta.
                </li>
                <li>
                  In a large skillet or Dutch oven, cook the ground beef over
                  medium-high heat, breaking it up with a wooden spoon, until
                  browned and cooked through, about 5-7 minutes.
                </li>
                <li>
                  Add the diced onion and minced garlic to the skillet and cook
                  for 2-3 minutes, until the onion is translucent.
                </li>
                <li>Stir in the tomato paste and cook for 1 minute.</li>
                <li>
                  Add the crushed tomatoes, beef broth, oregano, and basil.
                  Season with salt and pepper to taste.
                </li>
                <li>
                  Reduce the heat to low and let the sauce simmer for 15-20
                  minutes, stirring occasionally, to allow the flavors to meld.
                </li>
                <li>
                  While the sauce is simmering, cook the pasta according to the
                  package instructions. Drain the pasta and return it to the
                  pot.
                </li>
                <li>
                  Add the Bolognese sauce to the cooked pasta and toss to
                  combine.
                </li>
                <li>
                  Serve hot, garnished with additional fresh basil or grated
                  Parmesan cheese if desired.
                </li>
              </ol>
            </article>
          </section>
        )}
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
