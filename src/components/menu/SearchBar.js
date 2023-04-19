import React from "react";

function SearchBar() {
  return <div>
         <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border border-black h-[30px] px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Recherher"/>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        </button>
      </div>
  </div>;
}

export default SearchBar;
