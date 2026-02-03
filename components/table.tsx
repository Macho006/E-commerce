import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface SpecItem {
  label: string;
  value: React.ReactNode;
}

export default function CustomTable({ data }: { data: SpecItem[] }) {
  return (
    <Table>
      <TableBody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            className="border-b border-gray-100 last:border-0 hover:bg-transparent"
          >
            <TableCell className="pl-0 py-4 text-gray-500 w-1/2 align-top text-sm">
              {item.label}
            </TableCell>
            <TableCell className="pr-0 py-4 text-gray-900 font-medium text-sm">
              {item.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
