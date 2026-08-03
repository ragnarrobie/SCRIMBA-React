import React from "react";

const Header = () => {
  const ingredients = ["Chicken", "Tomatoes", "Oregano"];
    function submit(event){
        event.preventDefault()
        const newList = event.target.ingredient.value
         ingredients.push(newList)
         console.log("pushed")
    }
const list = ingredients.map((ingredient)=>{
return <li key = {ingredient}>{ingredient}</li>
})

  return (
    <div className="my-12">
      {/* Form */}
      <form
        onSubmit={submit}
        className="flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-96 h-12 px-4 border border-gray-300 rounded-lg"
          name="indregient"
        />

        <button
          type="submit"
          className="h-12 w-32 flex items-center justify-center
                     bg-black text-white font-semibold rounded-lg
                     hover:bg-gray-500 cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* List */}
      <ul className="list-disc w-96 mx-auto mt-8 pl-6">{list}</ul>
    </div>
  );
};

export default Header;
