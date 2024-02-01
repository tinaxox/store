import { ProductHeader } from "@/Components/ProductHeader";
import { ArrowIcon } from "../../Components/Icons";
import { items } from "@/dummy/items";
import { ProductInformation } from "@/Components/ProductInformation";

export default function ProductPage() {
  return (
    <main className="flex flex-col min-h-screen items-center relative overflow-y-auto max-w-[400px]">
      <ProductHeader />
      <ProductInformation />
    </main>
  );
}
