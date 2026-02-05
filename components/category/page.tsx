"use client";

import React, { useState } from 'react';
import { Heart, BarChart2, X } from 'lucide-react';
import ProductCard from '../productcard';
import Iphone from '@/public/Iphone.svg';
import laptop from '@/public/laptop.svg';
import tablet from '@/public/tablet.svg';
import watch from '@/public/watch.svg';
import gamepad from '@/public/gamepad.svg';
import naushniki from '@/public/naushnik.svg';
import jbl from '@/public/jbl.svg';
import iphone2 from '@/public/iphone2.svg';

interface Stat {
  label: string;
  value: number;
}

const CATEGORIES = [
  { name: 'Смартфоны', icon: <img src={Iphone.src} alt="iPhone" /> },
  { name: 'Ноутбуки', icon: <img src={laptop.src} alt="Laptop" /> },
  { name: 'Планшеты', icon: <img src={tablet.src} alt="Tablet" /> },
  { name: 'Умные часы', icon: <img src={watch.src} alt="Watch" /> },
  { name: 'Игровые приставки', icon: <img src={gamepad.src} alt="Gamepad" /> },
  { name: 'Наушники', icon: <img src={naushniki.src} alt="Naushniki" /> },
  { name: 'Колонки', icon: <img src={jbl.src} alt="JBL" /> },
  { name: 'Аксессуары', icon: <img src={iphone2.src} alt="iPhone 2" /> },
];

export default function CatalogPage() {
  const [selectedFilters, setSelectedFilters] = useState(['Дизайн', 'Портативность']);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
}