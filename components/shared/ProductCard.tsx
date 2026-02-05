import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
}

export const ProductCard = ({ title, description, imageSrc, link = "#" }: ProductCardProps) => {
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square w-full">
        <div className="absolute inset-0 bg-gray-200">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
        >
          Смотреть <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};