"use client";
import { ChartLine, ChartNoAxesColumn, Crown, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChartAreaLinear } from "@/components/chartarea";
import { CustomBreadcrumb } from "@/components/breadcrumb";
import { AccordionCard } from "@/components/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const colorImages = product.imagesByColor[selectedColor] || [];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedColor]);

  return (
    <div className="container mx-auto mt-4 px-3">
      <CustomBreadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 auto-rows-min container mx-auto my-8">
        <div className="space-y-5">
          {/* Gallery */}
          <div>
            <div className="bg-gray-100 rounded-xl w-full h-[710px] relative overflow-hidden">
              <Image
                fill
                key={activeImageIndex}
                src={colorImages[activeImageIndex]}
                className="object-contain transition-opacity duration-[2s] animate-in fade-in"
                alt={product.title}
                sizes="(max-width: 768px) 100vw, 710px"
              />
            </div>
            {colorImages.length > 3 ? (
              <Carousel className="w-full mt-5">
                <CarouselContent className="relative">
                  {colorImages.map((img, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                      <div
                        onClick={() => setActiveImageIndex(index)}
                        className={`bg-gray-50 flex items-center justify-center h-[200px] rounded-lg cursor-pointer border-2 transition-all ${activeImageIndex === index
                          ? "border-gray-200"
                          : "border-transparent"
                          }`}
                      >
                        <Image
                          width={200}
                          height={200}
                          src={img}
                          className="rounded-lg object-contain h-full"
                          alt="thumbnail"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                  <CarouselPrevious className="static translate-x-0 pointer-events-auto" />
                  <CarouselNext className="static translate-x-0 pointer-events-auto" />
                </div>
              </Carousel>
            ) : (
              <div className="grid grid-cols-3 w-fit gap-5 mt-5">
                {colorImages.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`bg-gray-50 flex items-center h-[200px] rounded-lg cursor-pointer border-2 transition-all ${activeImageIndex === index
                      ? "border-gray-200"
                      : "border-transparent"
                      }`}
                  >
                    <Image
                      width={200}
                      height={200}
                      src={img}
                      className="rounded-lg object-contain h-full"
                      alt="thumbnail"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <AccordionCard product={product} />
          <div className="border border-gray-100 rounded-xl p-5 space-y-3">
            {" "}
            <h3 className="font-semibold text-2xl">Описание</h3>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="space-y-5">
          {/* About*/}
          <div className="border border-gray-100 rounded-xl p-5">
            <h1 className="font-semibold text-2xl">{product.title}</h1>
            <div className="block items-center xl:flex space-y-5 xl:space-y-0 gap-5 mt-3">
              <div className="flex gap-1 text-green-500 text-sm bg-gray-100 px-4 py-3.5 w-fit rounded-xl">
                <p>{product.rating.expert_score}</p>
                Оценка экспертов
              </div>
              <div className="flex w-fit bg-gray-100 text-sm px-4 py-3.5 gap-2 text-gray-400 rounded-xl">
                <p>{product.rating.user_score}</p>
                <div className="flex gap-1">
                  <Star
                    stroke="oklch(0.61 0.11 222)"
                    fill="oklch(0.61 0.11 222)"
                    size={18}
                  />
                  <Star
                    stroke="oklch(0.61 0.11 222)"
                    fill="oklch(0.61 0.11 222)"
                    size={18}
                  />
                  <Star
                    stroke="oklch(0.61 0.11 222)"
                    fill="oklch(0.61 0.11 222)"
                    size={18}
                  />
                  <Star
                    stroke="oklch(0.61 0.11 222)"
                    fill="oklch(0.61 0.11 222)"
                    size={18}
                  />
                  <Star stroke="#C3CAD4" fill="#C3CAD4" size={18} />
                </div>
                <p>{product.rating.reviews_count}</p>
                Отзывов
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <div>
                {product.attributes.map((attr, i) => {
                  const atval = attr.value || 5;
                  return (
                    <div key={i}>
                      <h3 className="text-gray-400 text-sm mb-2">
                        {attr.title}
                      </h3>
                      <div className="grid grid-cols-5 gap-0.5 space-y-5">
                        {Array.from({ length: atval }).map((_, i) => (
                          <div
                            key={i}
                            className="h-1 bg-primary rounded-[2px]"
                          ></div>
                        ))}
                        {Array.from({ length: 5 - atval }).map((_, i) => (
                          <div
                            key={i}
                            className="h-1 bg-[#C3CAD4] rounded-[2px]"
                          ></div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <Crown stroke="oklch(0.61 0.11 222)" size={24} />
              <p className="text-800">Самый дешевый</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-2xl font-bold">
                {product.price.toLocaleString("ru", {
                  style: "currency",
                  currency: "RUB",
                })}{" "}
              </p>
              <Image width={20} height={20} src="/restore.png" alt="re:store" />
            </div>
            <p className="text-green-500 mt-3">Доставка беслатная</p>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center rounded-full bg-gray-100 p-2">
                <ChartLine size={20} stroke="oklch(0.61 0.11 222)" />
              </div>

              <div>
                <p className="text-gray-600 font-medium">Цена хорошая</p>
                <p className="text-gray-400 text-sm">
                  Исходя из последних 40 дней, сумма составляет близко к
                  среднему{" "}
                  <span className="text-gray-600 font-medium">80 000 ₽</span>
                </p>
              </div>
            </div>
            <div className="relative h-2 mt-4 rounded-2xl bg-linear-to-r from-[#D13030] via-white to-[#30D170] ">
              <div className="absolute border-solid border-t-black border-t-6 border-x-transparent border-x-6 border-b-0 -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bg-black rounded-full size-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <p>Цвет: </p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`border p-1 rounded-lg ${selectedColor === color
                      ? "border-primary"
                      : "border-transparent"
                      }`}
                  >
                    <div
                      className="size-6 rounded-sm"
                      style={{ backgroundColor: color }}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <p>Память: </p>
              <div className="flex gap-3 text-gray-400">
                <div className="flex gap-2">
                  {product.storage_options.map((storage, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 py-2 px-3 rounded-lg"
                    >
                      <div>{storage}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <Button className="flex px-5 py-5">
                <ChartNoAxesColumn className="size-5" />
                Сравнить
              </Button>
              <Button
                className="flex px-5 py-5 text-primary bg-primary/15"
                variant="secondary"
              >
                <Heart className="size-5" />В избранное
              </Button>
            </div>
          </div>
          <div className="">
            <ChartAreaLinear />
          </div>
        </div>
      </div>
    </div>
  );
}
