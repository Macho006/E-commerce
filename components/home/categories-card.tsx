import Image from 'next/image';
import Link from 'next/link';

interface CategoriesCardProps {
  title: string;
  image: string;
  link: string;
}

export const CategoriesCard = ({ image, title, link }: CategoriesCardProps) => {
  return (
    <Link href={link} className="flex flex-col items-center group transition-transform duration-200 hover:-translate-y-1">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-50 mb-3 group-hover:shadow-md transition-shadow duration-200">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 96px, 128px"
          />
        </div>
      </div>
      <h3 className="text-[13px] md:text-[14px] font-medium text-gray-800 text-center leading-tight">
        {title}
      </h3>
    </Link>
  );
};

export default CategoriesCard;