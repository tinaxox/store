"use client";
import { Item, ListItem, Nav } from "@/Types";
import { BottomNavigation } from "@/Components/BottomNavigation";
import { HomePage } from "@/Components/HomePage";
import { useState } from "react";
import { ArrowIcon, HeartIcon } from "../../Components/Icons";
import { items } from "@/dummy/items";
import { FavoritesProvider } from "@/context/FavoritesProvider";
import { FavoritesItemList } from "./FavoriteItemList";

export default function FavoritesPage() {
  return (
    <main className="flex justify-between items-center min-h-screen relative overflow-y-auto">
      <FavoritesProvider>
        <FavoritesItemList />
      </FavoritesProvider>
    </main>
  );
}
