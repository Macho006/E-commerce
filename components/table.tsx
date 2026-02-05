import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Product } from "@/types/product";

export default function CustomTable({ product }: { product: Product }) {
  return (
    <Table>
      <TableBody>
        <TableRow
          key={product?.id}
          className="border-b border-gray-100 last:border-0 hover:bg-transparent"
        >
          <TableCell className="pl-0 py-4 text-gray-500 w-1/2 align-top text-sm">
            {product?.category}
          </TableCell>
          <TableCell className="pr-0 py-4 text-gray-900 font-medium text-sm">
            {product?.category}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
