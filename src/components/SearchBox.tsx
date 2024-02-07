"use client";
import { items } from "@/dummy/items";
import AnimatedLink from "./AnimatedLink";
import { ArrowIcon } from "./Icons";
import { Search } from "./Search";
import { useState } from "react";
import { ItemBoxHorizontal } from "./ItemBoxHorizontal";
import { FavoritesProvider } from "@/context/FavoritesProvider";
import { ArrowButton } from "./ArrowButton";
import { AddToCartProvider } from "@/context/AddToCartProvider";

interface SearchBoxProps {
  handleSearchFocus: (change: boolean) => void;
}

export function SearchBox({ handleSearchFocus }: SearchBoxProps) {
  const [input, setInput] = useState<string>("");
  const insertInput = (input: string) => {
    setInput(input);
  };
  return (
    <div className="flex flex-col items-center w-full py-5 h-full bg-white fixed top-0 left-0 z-30 w-[400px]">
      <div className="flex gap-10 justify-start items-center w-full ">
        <AnimatedLink href="/">
          <button
            onClick={() => handleSearchFocus(false)}
            className="flex rounded-full text-neutral-500 rotate-180 ml-3"
          >
            <ArrowIcon className="w-7 h-7 stroke-2" />
          </button>
        </AnimatedLink>
        <input
          autoFocus={true}
          onChange={(e) => insertInput(e.target.value)}
          className={`p-2 pr-5 rounded-xl flex  bg-neutral-100 z-40`}
          placeholder="Search"
          type="text"
        />
      </div>
      <ul className="flex flex-col w-full px-5">
        {input != "" &&
          items.map((item) => {
            if (
              item.name.toLowerCase().includes(input.toLowerCase()) === true
            ) {
              return (
                <li key={item.id} className="flex flex-col w-full relative ">
                  <FavoritesProvider>
                    <ItemBoxHorizontal item={item} className={"shadow-none"} />
                  </FavoritesProvider>
                  <AnimatedLink href="/product">
                    <ArrowButton
                      className="absolute bg-black text-white bottom-4 right-0"
                      item={item}
                    />
                  </AnimatedLink>
                  <hr className="w-full mt-3" />
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}
