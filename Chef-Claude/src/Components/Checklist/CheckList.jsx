import React from "react";

const TrainingForms = () => {
  function hSubmit(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const status = formData.get("employmentStatus");
    const check = formData.getAll("employmentStatuse");
    const color = formData.get("favColor");

    console.log(password);
    console.log(email);
    console.log(status);
    console.log(check);
    console.log(color);
  }

  return (
    <div>
      <section className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">Signup form</h1>

          <form action={hSubmit}>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email:
            </label>

            <input
              id="email"
              type="email"
              name="email"
              defaultValue="joe@schmoe.com"
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
            />

            <label
              htmlFor="password"
              className="mb-2 mt-4 block text-sm font-medium text-gray-700"
            >
              Password:
            </label>

            <input
              id="password"
              type="password"
              name="password"
              defaultValue="Rob@1576"
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
            />

            <label
              htmlFor="description"
              className="mb-2 mt-4 block text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              className="h-32 w-full resize-none rounded-md border border-gray-300 px-4 py-2 text-gray-800 outline-none focus:border-black focus:ring-1 focus:ring-black"
              defaultValue="This is a description"
            ></textarea>

            <fieldset className="mt-6 space-y-3">
              <legend className="mb-3 text-sm font-semibold text-gray-700">
                Employment Status
              </legend>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="radio"
                  name="employmentStatus"
                  className="h-4 w-4 cursor-pointer accent-black"
                  value="Unemployed"
                />
                Unemployed
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="radio"
                  name="employmentStatus"
                  className="h-4 w-4 cursor-pointer accent-black"
                  value="Employed"
                />
                Employed
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="radio"
                  name="employmentStatus"
                  className="h-4 w-4 cursor-pointer accent-black"
                  value="student"
                  defaultChecked={true}
                />
                Student
              </label>
            </fieldset>

            <fieldset className="mt-6 space-y-3">
              <legend className="mb-3 text-sm font-semibold text-gray-700">
                Dietary restrictions
              </legend>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="employmentStatuse"
                  className="h-4 w-4 cursor-pointer accent-black"
                  value="Vegan"
                />
                Vegan
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="employmentStatuse"
                  className="h-4 w-4 cursor-pointer accent-black"
                  value="Kosher"
                />
                Kosher
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="employmentStatuse"
                  className="h-4 w-4 cursor-pointer accent-black"
                  value="GlutenFree"
                />
                Gluten-free
              </label>
            </fieldset>

            <label
              htmlFor="favColor"
              className="mb-2 mt-6 block text-sm font-medium text-gray-700"
            >
              What is your favorite color?
            </label>

            <select
              id="favColor"
              name="favColor"
              className="w-full cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            >
              <option value="red" className="bg-white text-gray-700">
                Red
              </option>

              <option value="blue" className="bg-white text-gray-700">
                Blue
              </option>

              <option value="green" className="bg-white text-gray-700">
                Green
              </option>

              <option value="violet" className="bg-white text-gray-700">
                Violet
              </option>

              <option value="yellow" className="bg-white text-gray-700">
                Yellow
              </option>

              <option value="pink" className="bg-white text-gray-700">
                Pink
              </option>
            </select>

            <button
              className="mt-4 w-full cursor-pointer rounded-md bg-black px-4 py-2 font-medium text-white transition hover:bg-gray-800"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TrainingForms;
