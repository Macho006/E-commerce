import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomTable from "./table";
import { products } from "@/lib/products";

export function AccordionCard() {
  const factoryData = [
    { label: "Тип", value: "смартфон" },
    { label: "Модель", value: "iPhone 17 Pro Max" },
    { label: "Год релиза", value: "2021" },
  ];

  const screenData = [
    { label: "Диагональ экрана (дюйм)", value: '6.1"' },
    { label: "Разрешение экрана", value: "2532×1170" },
    { label: "Плотность пикселей", value: "457 ppi" },
    { label: "Технология изготовления экрана", value: "OLED" },
    { label: "Количество цветов экрана", value: "16.7 млн" },
    {
      label: "Конструктивные особенности экрана",
      value: "безрамочный, вырез на экране",
    },
  ];

  const cameraData = [
    { label: "Разрешение камеры", value: "50 Мп" },
    {
      label: "Рейтинг DxOMark",
      value: (
        <div className="w-full mt-1">
          <div className="text-xs text-gray-500 mb-1">
            50 мегапикселей - это отличное значение...
          </div>
          <div className="relative h-1.5 w-full rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-green-500">
            <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-2.5 h-2.5 bg-black border-2 border-white rounded-full shadow-sm"></div>
            <div className="absolute -top-8 left-[45%] -translate-x-1/2 bg-orange-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              50 мг
            </div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>40 мг</span>
            <span>64 мг</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-2xl bg-white p-6">
      {products.length > 0 && (
        <h1 className="font-semibold text-2xl mb-5">
          Характеристики {products[0].title}
        </h1>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { label: "Камера", val: "48 MPx" },
          { label: "Система", val: "iOS" },
          { label: "Диагональ", val: '6,1"' },
          { label: "Зарядка", val: "Беспроводная" },
        ].map((tag, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-md px-3 py-1.5 text-xs text-gray-700 font-medium"
          >
            <span className="text-gray-400 mr-1">{tag.label}</span> {tag.val}
          </div>
        ))}
      </div>

      <Accordion className="w-full border-none">
        <AccordionItem value="item-1" className="border-none">
          <AccordionContent>
            <div className="pt-2 pb-6 space-y-8">
              <section>
                <h3 className="text-lg font-bold mb-2">Заводские данные</h3>
                <CustomTable data={factoryData} />
              </section>
              <section>
                <h3 className="text-lg font-bold mb-2">Камера</h3>
                <CustomTable data={cameraData} />
              </section>
              <section>
                <h3 className="text-lg font-bold mb-2">Экран</h3>
                <CustomTable data={screenData} />
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
