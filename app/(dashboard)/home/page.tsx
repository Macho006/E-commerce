import React from 'react'
import Hero from '@/components/shared/hero'
import CategoriesCard from '@/components/home/categories-card'
import { v4 as uuidv4 } from 'uuid';
import Products from "@/components/product/NewArrivalsSection"
import Stats from '@/components/Stats';
import Hero2 from '@/components/Hero2';


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
      <Products />
      <Stats />
      <Hero2 />
    </div>
  )
}
