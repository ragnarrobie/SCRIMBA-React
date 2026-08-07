import React from "react";
import { Trash2 } from "lucide-react";

const Ingre = (props) => {
  function deleteIngredient(delData) {
    props.setIngredients((prev) => {
      return prev.filter((_, index) => {
        return index !== delData;
      });
    });
  }

  return (
    <div>
      {props.ingredients.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Ingredients on hand:
          </h2>

          <ul className="mt-5 space-y-3">
            {props.ingredients.map((showIngredients, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-gray-500"
                >
                  <span>{showIngredients}</span>
                  <button
                    type="button"
                    onClick={() => deleteIngredient(index)}
                    aria-label={`Delete ${showIngredients}`}
                    className="cursor-pointer text-black transition hover:text-gray-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
};

export default Ingre;