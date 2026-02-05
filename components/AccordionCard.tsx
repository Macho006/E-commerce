import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/types/product";

type SpecRow = { label: string; value: React.ReactNode };

export function AccordionCard({ product }: { product: Product }) {
  const specs = product?.detailed_specs ?? {};
  const factoryRows: SpecRow[] = Array.isArray(specs.factory)
    ? specs.factory
    : [];
  const screenRows: SpecRow[] = Array.isArray(specs.screen) ? specs.screen : [];
  const cameraRows: SpecRow[] = Array.isArray(specs.camera) ? specs.camera : [];

  const topTags = [
    { label: "Камера", val: product?.specifications?.camera ?? "-" },
    { label: "Система", val: product?.specifications?.os ?? "-" },
    {
      label: "Диагональ",
      val: product?.specifications?.display_diagonal ?? "-",
    },
    { label: "Зарядка", val: product?.specifications?.charging ?? "-" },
  ];

  const renderSpecTable = (rows: SpecRow[]) => {
    if (!rows || rows.length === 0) {
      return (
        <div className="text-sm text-gray-500">Информация отсутствует</div>
      );
    }
    return (
      <table className="w-full text-sm">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50"}>
              <td className="py-2 pr-4 align-top text-gray-500 w-40">
                {r.label}
              </td>
              <td className="py-2">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const cameraResolution = cameraRows.find((r) =>
    /Разрешение|Разрешение камеры/i.test(String(r.label)),
  )?.value;

  return (
    <div className="w-full max-w-2xl bg-white p-6 border border-gray-100 rounded-xl">
      <h1 className="font-semibold text-2xl mb-5">
        Характеристики {product?.title ?? "товара"}
      </h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {topTags.map((tag, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-md px-3 py-1.5 text-xs text-gray-700 font-medium"
          >
            <span className="text-gray-400 mr-1">{tag.label}</span>
            {tag.val}
          </div>
        ))}
      </div>

      <Accordion className="w-full border-none">
        <AccordionItem value="item-1" className="border-none">
          <AccordionContent>
            <div className="pt-2 pb-6 space-y-8">
              <section>
                <h3 className="text-lg font-bold mb-2">Заводские данные</h3>
                {renderSpecTable(factoryRows)}
              </section>

              <section>
                <h3 className="text-lg font-bold mb-2">Камера</h3>

                {cameraResolution && (
                  <div className="mb-3 text-sm text-gray-500">
                    Разрешение: {cameraResolution}
                  </div>
                )}

                {renderSpecTable(cameraRows)}
              </section>

              <section>
                <h3 className="text-lg font-bold mb-2">Экран</h3>
                {renderSpecTable(screenRows)}
              </section>
            </div>
          </AccordionContent>

          <AccordionTrigger className="justify-start gap-1 py-2 hover:no-underline group cursor-pointer">
            <span className="text-primary text-sm font-medium group-data-[state=open]:hidden flex gap-1">
              Полный список характеристик
            </span>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
