import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/product";

export function CustomBreadcrumb({ product }: { product: Product }) {
  if (!product) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-gray-300"
            render={<Link href="/">Home</Link>}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-300" />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-gray-300"
            render={<Link href="/phones">{product.category}</Link>}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{product.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
