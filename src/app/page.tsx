"use client";
import { Item, ListItem, Nav } from "../Types";
import { BottomNavigation } from "@/components/BottomNavigation";
import { HomePage } from "@/app/home/HomePage";
import { useState } from "react";
import { items } from "@/dummy/items";

const listItems: ListItem[] = [
  { name: "All", active: true },
  { name: "Headphones", active: false, image: "./headphone.png" },
  { name: "Headset", active: false, image: "./headset.png" },
  { name: "Earphones", active: false, image: "./earphone.png" },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState<Nav>({ id: 0, active: true });

  const toggleActiveNav = (nav: Nav) => {
    setActiveNav(nav);
  };

  return (
    <main className="flex flex-col min-h-screen relative overflow-y-auto">
      {(activeNav.id == 1 || activeNav.id == 0) && (
        <HomePage items={items} listItems={listItems} />
      )}
      <div className="relative w-full h-[50px]">
        <BottomNavigation />
      </div>
    </main>
  );
}
