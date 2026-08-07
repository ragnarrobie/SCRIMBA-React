import React, { useState } from "react";
import Recipe from "../Footer/Recipe";
import Ingredients from "../ingredients/Ingredients";
import { getRecipeFromMistral } from "../../ai.js";
const Header = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  function submit(formData) {
    const formDatas = formData.get("ingredient");

    setIngredients((newIngri) => {
      return [...newIngri, formDatas];
    });
  }
  async function turn() {
    const getRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(getRecipe);
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

        {recipe && <Recipe recipe={recipe} />}
      </div>
    </div>
  );
};

export default Header;
