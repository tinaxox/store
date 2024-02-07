"use client";
import { useState } from "react";
import { FilterIcon, SearchIcon } from "./Icons";
import { SearchBox } from "./SearchBox";
import { Search } from "./Search";

export function Filter() {
  const [searchActive, setSearchActive] = useState(false);
  const handleSearchFocus = (change: boolean) => {
    setSearchActive(change);
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-8 px-7">
      {searchActive && <SearchBox handleSearchFocus={handleSearchFocus} />}
      <Search
        handleSearchFocus={handleSearchFocus}
        searchActive={searchActive}
      />
      <div className="bg-neutral-800 max-w-min max-h-min p-3 rounded-xl flex justify-center items-center">
        <FilterIcon className=" stroke-white w-6 h-6" />
      </div>
    </div>
  );
}
