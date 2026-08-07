import React from "react";

const Ingredients = (props) => {
  return (
    <div>
      {props.ingredients.length > 0 ? (
        <section className="mt-12 rounded-xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">
            Ingredients on hand:
          </h2>

          <ul className="mt-6 list-disc space-y-2 pl-6">{props.list}</ul>
          {props.ingredients.length > 3 ? (
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
                onClick={props.turn}
                className="shrink-0 cursor-pointer rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Get a recipe
              </button>
            </div>
          ) : null}
        </section>
      ) : null}
    </div>
  );
};

export default Ingredients;
