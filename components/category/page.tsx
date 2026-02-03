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
      <h1 className="text-2xl font-bold mb-8">Лучший выбор</h1>

      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar mb-10">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all border border-transparent group-hover:border-purple-200 text-3xl">
              {cat.icon}
            </div>
            <span className="text-xs font-medium text-gray-600">{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {['Дизайн', 'Портативность', 'Камера', 'Ответ', 'Дисплей', 'Батарея'].map((filter) => {
          const isActive = selectedFilters.includes(filter);
          return (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2 border ${
                isActive 
                ? 'bg-white text-red-500 border-red-100 shadow-sm' 
                : 'bg-white text-gray-400 border-gray-100'
              }`}
            >
              {filter}
              {isActive && <X size={14} />}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
}