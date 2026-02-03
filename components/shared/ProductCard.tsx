// components/shared/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export const ProductCard = ({ title, description, imageSrc, link }: ProductCardProps) => {
  return (
    <div className="rounded-lg border p-4 flex flex-col gap-2 shadow-sm">
      <Image src={imageSrc} alt={title} width={400} height={250} className="rounded-md object-cover" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Link href={link} className="text-red-500 font-medium mt-auto hover:underline">
        View
      </Link>
    </div>
  );
};