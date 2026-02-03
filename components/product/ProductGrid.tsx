"use client"

import { useMemo, useState } from "react"
import { products } from "@/lib/products"
import { ProductCard } from "./ProductCard"
import { ProductSort } from "./ProductSort"

export function ProductGrid() {
  const [sort, setSort] = useState("new")

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
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Новинки</h2>
        <ProductSort value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
