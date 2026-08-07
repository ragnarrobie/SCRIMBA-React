import React from "react";
import ReactMarkdown from "react-markdown";

const Recipe = (props) => {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Your Recipe</h2>

        <p className="mt-1 text-sm text-gray-500">
          A recipe generated from your ingredients.
        </p>
      </div>

      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 text-3xl font-bold text-gray-900">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-4 leading-7 text-gray-600">{children}</p>
          ),

          ul: ({ children }) => (
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-6 list-decimal space-y-3 pl-6 text-gray-600">
              {children}
            </ol>
          ),

          li: ({ children }) => <li className="leading-7">{children}</li>,

          strong: ({ children }) => (
            <strong className="font-bold text-gray-900">{children}</strong>
          ),
        }}
      >
        {props.recipe}
      </ReactMarkdown>
    </section>
  );
};

export default Recipe;
