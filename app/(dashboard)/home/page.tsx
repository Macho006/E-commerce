import React from 'react'
import Hero from '@/components/shared/hero'
import CategoriesCard from '@/components/home/categories-card'
import { v4 as uuidv4 } from 'uuid';
import { ProductCard } from "@/components/shared/ProductCard";
import { Footer } from "@/components/shared/Footer";
import Products from "@/components/product/NewArrivalsSection"
import Stats from '@/components/Stats';
import Hero2 from '@/components/Hero2';
import Category from '@/components/category/page';


let categories = [
  {
    id: uuidv4(),
    title: 'Смартфоны',
    image: 'https://placehold.co/164x164',
    link: '/categories/phones'
  },
  {
    id: uuidv4(),
    title: 'Смартфоны',
    image: 'https://placehold.co/164x164',
    link: '/categories/phones'
  },
  {
    id: uuidv4(),
    title: 'Смартфоны',
    image: 'https://placehold.co/164x164',
    link: '/categories/phones'

  },
  {
    id: uuidv4(),
    title: 'Смартфоны',
    image: 'https://placehold.co/164x164',
    link: '/categories/phones'

  },
  {
    id: uuidv4(),
    title: 'Смартфоны',
    image: 'https://placehold.co/164x164',
    link: '/categories/phones'

  },
  {
    id: uuidv4(),
    title: 'Смартфоны',
    image: 'https://placehold.co/164x164',
    link: '/categories/phones'
  },
  {
    id: uuidv4(),
    title: 'Смартфоны',
    image: 'https://placehold.co/164x164',
    link: '/categories/phones'
  },
]

const products = [
  {
    title: "Review of outdated smartphones",
    description: "Lorem ipsum dolor sit amet consectetur. Rhoncus risus a viverra enim nunc.",
    imageSrc: "/17promax.png",
    link: "#",
  },
  {
    title: "Review of desktop computers",
    description: "Lorem ipsum dolor sit amet consectetur. Rhoncus risus a viverra enim nunc.",
    imageSrc: "/laptop.svg",
    link: "#",
  },
  {
    title: "Review of Marshall amplifiers",
    description: "Lorem ipsum dolor sit amet consectetur. Rhoncus risus a viverra enim nunc.",
    imageSrc: "/jbl.svg",
    link: "#",
  },
  {
    title: "Review of headphones",
    description: "Lorem ipsum dolor sit amet consectetur. Rhoncus risus a viverra enim nunc.",
    imageSrc: "/naushnik.svg",
    link: "#",
  },
];


export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className='container mx-auto md:px-8 sm:px-4 px-2 flex items-center justify-between mt-12'>
        {categories.map((category) => (
          <CategoriesCard
            id={category.id}
            title={category.title}
            image={category.image}
            key={category.id}
            link={category.link}
          />
        ))}
      </section>
      <main className="w-full mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Reviews</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-6 text-right">
          <a href="#" className="text-blue-600 hover:underline">To all reviews &gt;</a>
        </div>

        <Products />
        <Stats />
        <Hero2 />
        <Category />

        <Footer />
      </main>
    </div>
  )
}
