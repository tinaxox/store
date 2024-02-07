"use client";
import { useState } from "react";
import { SearchIcon } from "./Icons";

interface SearchProps {
  handleSearchFocus: (change: boolean) => void;
  searchActive: boolean;
}
export function Search({ handleSearchFocus, searchActive }: SearchProps) {
  return (
    <div className={`flex gap-4 max-w-[300px] relative`}>
      <input
        className={`p-3 rounded-xl flex w-[70vw]`}
        type="text"
        onFocus={() => handleSearchFocus(true)}
      />
      {!searchActive && (
        <div className="flex gap-3 absolute top-[25%] left-[3%] z-40 justify-center items-center">
          <SearchIcon className="w-6 h-6 stroke-2 stroke-neutral-300" />
          <p className="text-zinc-400">Search</p>
        </div>
      )}
    </div>
  );
}
