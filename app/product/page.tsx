import {
  ChartLine,
  ChartNoAxesColumn,
  ChevronDown,
  Crown,
  Heart,
  Star,
} from "lucide-react";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ChartAreaLinear } from "@/components/chartarea";
import { CustomBreadcrumb } from "@/components/breadcrumb";
import { AccordionCard } from "@/components/accordion";

export default function ProductPage() {
  return (
    <div className="container mx-auto mt-4">
      <CustomBreadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-5 container mx-auto my-8">
        <div className="max-size-[710px]">
          <div className="bg-gray-100 rounded-xl">
            <img
              className="object-fit w-full"
              src="/17promax.png"
              alt="17promax"
            />
          </div>
          <div className="grid grid-cols-3 w-fit gap-5 mt-5">
            <div className="flex justify-center bg-gray-100 rounded-xl">
              <img
                className="object-contain"
                src="/17promax.png"
                alt="17promax"
              />
            </div>
            <div className="flex justify-center bg-gray-100 rounded-xl">
              <img
                className="object-contain"
                src="/17promax1.png"
                alt="17promax"
              />
            </div>{" "}
            <div className="flex justify-center bg-gray-100 rounded-xl">
              <img
                className="object-contain"
                src="/17promax2.png"
                alt="17promax"
              />
            </div>
          </div>
          <AccordionCard />
          <div className="border border-gray-100 rounded-xl p-5 mt-5 space-y-3">
            {" "}
            <h3 className="font-semibold text-2xl">Описание</h3>
            <p>{products[0].description}</p>
          </div>
        </div>
        <div>
          <div className="border border-gray-100 rounded-xl p-5">
            {products.length > 0 && (
              <h1 className="font-semibold text-2xl">{products[0].title}</h1>
            )}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex gap-1 text-green-500 text-sm bg-gray-100 px-4 py-3.5 w-fit rounded-xl">
                {products.length > 0 && (
                  <p>{products[0].rating.expert_score}</p>
                )}{" "}
                Оценка экспертов
              </div>
              <div className="flex bg-gray-100 text-sm px-4 py-3.5 gap-2 text-gray-400 rounded-xl">
                {products.length > 0 && <p>{products[0].rating.user_score}</p>}
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
                {products.length > 0 && (
                  <p>{products[0].rating.reviews_count}</p>
                )}{" "}
                Отзывов
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <div>
                <div className="text-gray-400 text-sm mb-2">Дизайн</div>
                <div className="grid grid-cols-5 gap-0.5">
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-[#C3CAD4] rounded-[2px]"></div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Батарея</div>
                <div className="grid grid-cols-5 gap-0.5">
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-[#C3CAD4] rounded-[2px]"></div>
                  <div className="h-1 bg-[#C3CAD4] rounded-[2px]"></div>
                  <div className="h-1 bg-[#C3CAD4] rounded-[2px]"></div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Дисплей</div>
                <div className="grid grid-cols-5 gap-0.5">
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-[#C3CAD4] rounded-[2px]"></div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Камера</div>
                <div className="grid grid-cols-5 gap-0.5">
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Ответ</div>
                <div className="grid grid-cols-5 gap-0.5">
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Портативность</div>
                <div className="grid grid-cols-5 gap-0.5">
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-primary rounded-[2px]"></div>
                  <div className="h-1 bg-[#C3CAD4] rounded-[2px]"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <Crown stroke="oklch(0.61 0.11 222)" size={24} />
              <p className="text-800">Самый дешевый</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              {products.length > 0 && (
                <p className="text-2xl font-bold">
                  {products[0].price.toLocaleString("ru", {
                    style: "currency",
                    currency: "RUB",
                  })}{" "}
                </p>
              )}
              <img className="h-4" src="/restore.png" alt="re:store" />
            </div>
            <p className="text-green-500 mt-3">Доставка беслатная</p>
            <div className="flex items-center gap-3 mt-3">
              <ChartLine
                stroke="oklch(0.61 0.11 222)"
                className="rounded-full bg-gray-100 p-2 size-10"
              />
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
              {products.length > 0 && (
                <div className="flex gap-2">
                  {products[0].colors.map((color, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 p-1 rounded-lg"
                    >
                      <div
                        className="size-6 rounded-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <p>Память: </p>
              <div className="flex gap-3 text-gray-400">
                {products.length > 0 && (
                  <div className="flex gap-2">
                    {products[0].storage_options.map((storage, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 py-2 px-3 rounded-lg"
                      >
                        <div>{storage}</div>
                      </div>
                    ))}
                  </div>
                )}
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
          <div className="mt-5">
            <ChartAreaLinear />
          </div>
        </div>
      </div>
    </div>
  );
}
