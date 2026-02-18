"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Brand } from "@/types/product";

const brands: Brand[] = [
  { id: uuidv4(), name: "Apple" },
  { id: uuidv4(), name: "Asus" },
  { id: uuidv4(), name: "Samsung" },
  { id: uuidv4(), name: "Xiaomi" },
  { id: uuidv4(), name: "Huawei" },
  { id: uuidv4(), name: "Realme" },
  { id: uuidv4(), name: "Oneplus" },
  { id: uuidv4(), name: "Oppo" },
  { id: uuidv4(), name: "Vivo" },
  { id: uuidv4(), name: "Nothing" },
];

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([12511, 99511]);

  const handlePriceChange = (value: number | readonly number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value as number[]);
    }
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setPriceRange([val, priceRange[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setPriceRange([priceRange[0], val]);
  };

  return (
    <div className="p-6 bg-gray-50/50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Фильтрация</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6">
        <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-8">

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Бренды</h3>
            <ToggleGroup
              multiple
              size="sm"
              spacing={2}
              variant="outline"
              className="flex flex-wrap justify-start gap-2"
            >
              {brands.map((brand) => (
                <ToggleGroupItem
                  key={brand.id}
                  value={brand.name}
                  className="rounded-full px-4 h-8 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                  aria-label={`Select ${brand.name}`}
                >
                  {brand.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Диапазон цен</h3>
            <div className="flex gap-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                  От
                </span>
                <Input
                  type="number"
                  placeholder="12 511"
                  className="pl-8 bg-white"
                  value={priceRange[0]}
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                  До
                </span>
                <Input
                  type="number"
                  placeholder="99 511"
                  className="pl-8 bg-white"
                  value={priceRange[1]}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              max={150000}
              step={100}
              className="mt-6"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Дополнительно</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <Label htmlFor={`option-${item}`} className="font-normal text-base">
                    Есть
                  </Label>
                  <Switch id={`option-${item}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 lg:col-span-3 space-y-6">
          <Card className="border-none shadow-sm">
            <Accordion defaultValue={["battery"]} className="w-full">
              <AccordionItem value="battery" className="border-none px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-lg font-semibold">Батарея</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 space-y-6">

                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Общий рейтинг</span>
                    <div className="flex gap-2">
                      <div className="h-2 w-full max-w-[60px] bg-slate-200 rounded-sm"></div>
                      <div className="h-2 w-full max-w-[60px] bg-slate-200 rounded-sm"></div>
                      <div className="h-2 w-full max-w-[60px] bg-slate-200 rounded-sm"></div>
                      <div className="h-2 w-full max-w-[60px] bg-emerald-500 rounded-sm"></div>
                      <div className="h-2 w-full max-w-[60px] bg-emerald-500 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Память</span>
                    <ToggleGroup className="flex flex-wrap justify-start gap-2" multiple
                      size="sm"
                      spacing={2}
                      variant="outline"
                    >
                      {Array.from({ length: 6 }).map((_, i) => (
                        <ToggleGroupItem
                          key={i}
                          value={`memory-${i}`}
                          className="rounded-full px-4 h-7 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        >
                          4 ГБ
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Экран</span>
                    <ToggleGroup className="flex flex-wrap justify-start gap-2" multiple
                      size="sm"
                      spacing={2}
                      variant="outline"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <ToggleGroupItem
                          key={i}
                          value={`screen-${i}`}
                          className="rounded-full px-4 h-7 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        >
                          4 ГБ
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Время</span>
                    <ToggleGroup className="flex flex-wrap justify-start gap-2" multiple
                      size="sm"
                      spacing={2}
                      variant="outline"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <ToggleGroupItem
                          key={i}
                          value={`time-${i}`}
                          className="rounded-full px-4 h-7 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        >
                          4 ГБ
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="border-none shadow-sm p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Экран</h3>
              </div>
              <div className="flex gap-2">
                <div className="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 w-full"></div>
                </div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 w-full"></div>
                </div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 w-full"></div>
                </div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full"></div>
                </div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full"></div>
                </div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">1920 x 1080, ips, яркость</span>
              </div>

            </div>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-3 lg:col-span-3 space-y-6">
          <Card className="border-none shadow-sm">
            <Accordion defaultValue={["screen"]} className="w-full">
              <AccordionItem value="screen" className="border-none px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-lg font-semibold">Экран</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 space-y-6">

                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Общий рейтинг</span>
                    <div className="flex gap-2">
                      <div className="h-10 w-full bg-slate-200 rounded-md"></div>
                      <div className="h-10 w-full bg-slate-200 rounded-md"></div>
                      <div className="h-10 w-full bg-slate-200 rounded-md"></div>
                      <div className="h-10 w-full bg-slate-200 rounded-md"></div>
                      <div className="h-10 w-full bg-slate-200 rounded-md"></div>
                    </div>
                  </div>


                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Время</span>
                    <ToggleGroup className="flex flex-wrap justify-start gap-2" multiple
                      size="sm"
                      spacing={2}
                      variant="outline"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <ToggleGroupItem
                          key={i}
                          value={`time-right-${i}`}
                          className="rounded-full px-4 h-7 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        >
                          4 ГБ
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Экран</span>
                    <ToggleGroup className="flex flex-wrap justify-start gap-2" multiple
                      size="sm"
                      spacing={2}
                      variant="outline"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <ToggleGroupItem
                          key={i}
                          value={`screen-right-${i}`}
                          className="rounded-full px-4 h-7 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        >
                          4 ГБ
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="border-none shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Экран</h3>
              </div>
              <div className="flex gap-2 mb-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-0.5 bg-slate-200 flex-1"></div>
                ))}
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
