import { ProductHeader } from "@/components/ProductHeader";
import { ArrowIcon } from "@/components/Icons";
import { items } from "@/dummy/items";
import { ProductInformation } from "@/components/ProductInformation";

export default function ProductPage() {
  return (
    <main className="flex flex-col min-h-screen items-center relative overflow-y-auto max-w-[400px]">
      <ProductHeader />
      <ProductInformation />
    </main>
  );
}
