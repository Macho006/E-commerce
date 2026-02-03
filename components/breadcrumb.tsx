import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function CustomBreadcrumb() {
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
            render={<Link href="/phones">Смартфоны</Link>}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>iPhone 17 Pro Max</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
