"use client";
import { useState } from "react";
import {
  CartIcon,
  FilterIcon,
  HeartIcon,
  HomeIcon,
  ProfileIcon,
  SearchIcon,
} from "./Icons";
import { Item, ListItem, Nav } from "../Types";
import Image from "next/image";
import AnimatedLink from "./AnimatedLink";

// interface BottomNavigationProps {
//   changePage: (nav: Nav) => void;
// }

export function BottomNavigation() {
  const [activeNav, setActiveNav] = useState<Nav>({ id: 1, active: true });

  const changeActive = (id: number) => {
    setActiveNav({ id: id, active: true });
  };

  return (
    <div className="flex justify-between max-w-[400px] items-center fixed bottom-0 mt-10 w-full px-7 py-3 bg-white">
      <AnimatedLink href="/">
        {" "}
        <button onClick={() => changeActive(1)}>
          <HomeIcon
            className={`w-7 h-7 ${
              activeNav.id === 1 ? "stroke-neutral-800" : "stroke-neutral-500"
            }`}
          />
        </button>
      </AnimatedLink>
      <AnimatedLink href="/favorites">
        <button onClick={() => changeActive(2)}>
          <HeartIcon
            className={`w-7 h-7 ${
              activeNav.id === 2 ? "stroke-neutral-800" : "stroke-neutral-500"
            }`}
          />
        </button>
      </AnimatedLink>
      <AnimatedLink href="/cart">
        <button onClick={() => changeActive(3)}>
          <CartIcon
            className={`w-7 h-7 ${
              activeNav.id === 3 ? "stroke-neutral-800" : "stroke-neutral-500"
            }`}
          />
        </button>
      </AnimatedLink>
      <AnimatedLink href="/profile">
        <button onClick={() => changeActive(4)}>
          <ProfileIcon
            className={`w-7 h-7 ${
              activeNav.id === 4 ? "stroke-neutral-800" : "stroke-neutral-500"
            }`}
          />
        </button>
      </AnimatedLink>
    </div>
  );
}
