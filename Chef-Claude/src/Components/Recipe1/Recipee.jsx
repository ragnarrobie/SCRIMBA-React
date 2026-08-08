import React,{forwardRef} from "react";
import ReactMarkDown from "react-markdown";

const Recipee = forwardRef((props,ref) => {
  return (
    <div>
      <section>
        {props.ingredients.length > 3 ? (
          <section className="mt-10 flex items-center justify-between gap-6 rounded-xl bg-gray-100 p-6">
            <div ref={ref}>
              <p className="text-lg font-bold text-gray-900">
                Ready for a recipe?
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Generate a recipe from the list of ingredients.
              </p>
            </div>

            <button
              type="button"
              onClick={props.getRecipe}
              className="shrink-0 cursor-pointer rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Get recipe
            </button>
          </section>
        ) : null}

        {props.recipe ? (
          <article className="mt-10 rounded-xl bg-white p-8 shadow-md">
            <ReactMarkDown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold text-gray-900">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-6 text-xl font-bold text-gray-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mt-3 leading-6 text-gray-700">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-gray-900">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-700">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
              }}
            >
              {props.recipe}
            </ReactMarkDown>
          </article>
        ) : null}
      </section>
    </div>
  );
});

export default Recipee;
