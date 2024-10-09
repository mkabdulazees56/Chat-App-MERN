import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="h-[12vh]">
      <div className="py-3 px-3">
      <form action="">
        <div className="flex space-x-3">
        <label className="input input-bordered flex items-center gap-2 w-[80%]">
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Search;
