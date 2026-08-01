import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center gap-3 my-12">
  <form>
    <input
      type="text"
      placeholder="Search..."
      className="w-200 h-12 px-2 ml-64 border border-gray-300 rounded-lg"
    />
  </form>

  <button
    className="h-12 w-54 px-6 flex items-center justify-center
               bg-black text-white font-semibold rounded-lg
               hover:bg-gray-500 cursor-pointer"
  >
    Search
  </button>
</div>
  )
}

export default Header
