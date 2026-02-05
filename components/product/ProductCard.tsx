import Image from "next/image";
import { Heart, BarChart2, ChevronDown } from "lucide-react";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col bg-[#F6F7FA] p-5 rounded-2xl h-full transition-shadow hover:shadow-md">
      <div className="relative w-full aspect-square flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain max-h-full max-w-full mix-blend-multiply"
        />
      </div>

      <div className="grow">
        <p className="text-[13px] text-gray-400 mb-1">{product.category}</p>
        <h3 className="text-[15px] font-medium leading-tight text-gray-800 line-clamp-2">
          {product.title}
        </h3>
      </div>

      {/* Narx va Tugmalar - Har doim pastda turishi uchun */}
      <div className="mt-4">
        <div className="flex items-end justify-between">
          <div className="text-[18px] font-bold text-gray-900">
            <div className="flex items-center gap-2">
              <span className="text-[16px] text-[#7E8794] font-normal leading-5 tracking-[0%]">
                Цена
              </span>
              {product.discount && (
                <div className="flex items-center text-emerald-500 font-medium text-xs">
                  <span
                    className="flex items-center cursor-pointer
                  "
                  >
                    <ChevronDown size={18} /> {product.discount}%
                  </span>
                </div>
              )}
            </div>
            {product.price.toLocaleString("ru-RU")} ₽
          </div>

          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm hover:text-red-500 transition-colors cursor-pointer">
              <Heart size={20} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm hover:text-blue-500 transition-colors cursor-pointer">
              <BarChart2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
