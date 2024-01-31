"use client";
import { Item, ListItem, Nav } from "@/app/Types";
import { BottomNavigation } from "@/app//Components/BottomNavigation";
import { HomePage } from "@/app//Components/HomePage";
import { useState } from "react";

const listItems: ListItem[] = [
  { name: "All", active: true },
  { name: "Headphones", active: false, image: "./headphone.png" },
  { name: "Headset", active: false, image: "./headset.png" },
  { name: "Earphones", active: false, image: "./earphone.png" },
];

const items: Item[] = [
  {
    id: 1344345,
    name: "AK Wireless",
    image: "headphones1.png",
    price: 150,
    review: 5.0,
    type: "Headphones",
    active: false,
  },
  {
    id: 109893284,
    name: "Ipod Shuffle",
    image: "airpod.png",
    price: 170,
    review: 4.8,
    type: "Earphones",
    active: false,
  },
  {
    id: 304506335,
    name: "Headset",
    image: "headset1.png",
    price: 220,
    review: 4.0,
    type: "Headset",
    active: false,
  },
  {
    id: 39459580,
    name: "JBL Wireless",
    image: "headphones2.png",
    price: 50,
    review: 3.0,
    type: "Headphones",
    active: false,
  },
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
