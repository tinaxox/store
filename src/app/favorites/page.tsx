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
    <main className="flex min-h-screen flex-col overflow-y-auto py-8 px-8">
      <FavoritesProvider>
        <h1 className="text-2xl font-bold"> Favorite items</h1>
        <FavoritesItemList />
      </FavoritesProvider>
    </main>
  );
}
