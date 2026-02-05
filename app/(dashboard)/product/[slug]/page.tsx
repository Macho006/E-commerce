import { products } from "@/lib/products";
import ProductDetail from "./ProductDetailClient";
import { notFound } from "next/navigation";

// Next.js 15+ требует await для params, если это SSR.
// Если у вас версия ниже, можно без async/await.
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
