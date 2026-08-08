/*
import React, { useState } from "react";
import { getRecipeFromMistral } from "../../ai";
import Recipee from "../Recipe1/Recipee";
import Ingre from "../ingre/ingre";

const Body = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  function from(formData) {
    const froms = formData.get("ingredient");

    setIngredients((prevs) => {
      return [...prevs, froms];
    });
  }

  function deleteIngredient(indexToDelete) {
    setIngredients((prev) =>
      prev.filter((_, index) => index !== indexToDelete),
    );
  }

  const list = ingredients.map((showIngredient, index) => {
    return (
      <li
        key={index}
        className="flex items-center justify-between text-gray-700"
      >
        <span>{showIngredient}</span>
        <button
          type="button"
          onClick={() => deleteIngredient(index)}
          className="ml-3 text-sm text-red-500 hover:text-red-700 cursor-pointer"
        >
          Delete
        </button>
      </li>
    );
  });

  async function getRecipe() {
    const rec = await getRecipeFromMistral(ingredients);
    setRecipe(rec);
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      
      <form action={from} className="flex w-full items-center gap-3">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. chicken"
          className="h-12 flex-1 rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />

        <button
          type="submit"
          className="h-12 w-40 shrink-0 cursor-pointer rounded-lg bg-black font-semibold text-white transition hover:bg-gray-700"
        >
          + Add ingredient
        </button>
      </form>

      
      <Ingre ingredients={ingredients} list={list} setIngredients={setIngredients} />

    
      <Recipee
        ingredients={ingredients}
        getRecipe={getRecipe}
        recipe={recipe}
      />
    </div>
  );
};

export default Body;

*/
import React, { useState } from "react";
import { getRecipeFromMistral } from "../../ai";
import Recipee from "../Recipe1/Recipee";
import Ingre from "../ingre/ingre";
import { useRef } from "react";
import { useEffect } from "react";

const Body = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  function from(formData) {
    const froms = formData.get("ingredient");
    if (!froms || froms.trim() === "") {
      return;
    }

    setIngredients((prevs) => {
      return [...prevs, froms];
    });
  }

  async function getRecipe() {
    const rec = await getRecipeFromMistral(ingredients);
    setRecipe(rec);
  }
  useEffect(() => {
    if (recipe !== "" && recipeSection.current != null) {
      return recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <form action={from} className="flex w-full items-center gap-3">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. chicken"
          className="h-12 flex-1 rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />

        <button
          type="submit"
          className="h-12 w-40 shrink-0 cursor-pointer rounded-lg bg-black font-semibold text-white transition hover:bg-gray-700"
        >
          + Add ingredient
        </button>
      </form>

      <Ingre ingredients={ingredients} setIngredients={setIngredients} />

      <Recipee
        ingredients={ingredients}
        getRecipe={getRecipe}
        recipe={recipe}
        ref={recipeSection}
      />
    </div>
  );
};

export default Body;
