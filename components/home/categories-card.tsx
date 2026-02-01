import Image from 'next/image'
import Link from 'next/link';

interface CategoriesCardProps {
  id?: string,
  title: string,
  image: string,
  link: string
}

export const CategoriesCard = ({ image, title, link }: CategoriesCardProps) => {
  return (
    <Link href={link} className=''>
      <Image unoptimized src={image} width={164} height={164} alt={title} />
      <h2 className='text-center'>{title}</h2>
    </Link>
  )
}


export default CategoriesCard;