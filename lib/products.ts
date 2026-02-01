import { Product } from "@/types/product"
import { v4 as uuidv4 } from 'uuid';
import Watch from "@/assets/image/2272131 1.svg"
import Headphones from "@/assets/image/2272131 1 (1).svg"
import PS from "@/assets/image/2272131 1 (2).svg"
import Phones from "@/assets/image/2272131 1 (3).svg"
import Tablet from "@/assets/image/2272131 1 (4).svg"
import Accessory from "@/assets/image/2272131 1 (5).svg"
import Laptop from "@/assets/image/2272131 1 (6).svg"
import Speakers from "@/assets/image/2272131 1 (7).svg"


export const products: Product[] = [
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Умные часы",
    price: 114099,
    discount: 13,
    image: Watch,
    isNew: true,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Наушники",
    price: 114099,
    discount: 13,
    image: Headphones,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Умные часы",
    price: 114099,
    discount: 13,
    image: PS,
  },
  {
    id: "4",
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Смартфоны",
    price: 114099,
    discount: 13,
    image: Phones,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Планшеты",
    price: 114099,
    discount: 13,
    image: Tablet,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Смартфоны",
    price: 114099,
    discount: 13,
    image: Phones,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Аксессуары",
    price: 114099,
    discount: 13,
    image: Accessory,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Ноутбуки",
    price: 114099,
    discount: 23,
    image: Laptop,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Портативные колонки",
    price: 114099,
    discount: 13,
    image: Speakers,
  },
  {
    id: uuidv4(),
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    category: "Смартфоны",
    price: 114099,
    discount: 13,
    image: Phones,
  },
]
