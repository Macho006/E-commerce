// components/product/NewArrivalsSection.tsx
"use client"

import { useMemo, useState } from "react"
import { ChevronRight } from "lucide-react"
import { products } from "@/lib/products"
import { ProductCard } from "./ProductCard"
import { Button } from "@base-ui/react"

export default function NewArrivalsSection() {
  const [sort, setSort] = useState<string>("new")

  const sortedProducts = useMemo(() => {
    const list = [...products]

    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price)
      case "price-desc":
        return list.sort((a, b) => b.price - a.price)
      case "discount":
        return list.sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0))
      default:
        return list
    }
  }, [sort])

  return (
    <section className="w-full py-10">
      <div className="container mx-auto md:px-8 sm:px-4 px-2">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-semibold text-2xl leading-8 tracking-[0%]">Новинки</h2>


            <Button className="inline-flex items-center font-medium text-base text-[#FF4D4D] leading-5 tracking-[0%] cursor-pointer">
              К новинкам
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>

        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
