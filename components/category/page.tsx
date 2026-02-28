"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import ProductCard from '../productcard';

const CATEGORIES = [
  { name: 'Смартфоны', icon: '/iphone2.svg' },
  { name: 'Ноутбуки', icon: '/laptop.svg' },
  { name: 'Планшеты', icon: '/tablet.svg' },
  { name: 'Умные часы', icon: '/watch.svg' },
  { name: 'Игровые приставки', icon: '/gamepad.svg' },
  { name: 'Наушники', icon: '/naushnik.svg' },
  { name: 'Портативные колонки', icon: '/jbl.svg' },
  { name: 'Аксессуары', icon: '/iphone-17-pro-sil.png' },
];

const FILTERS = ['Дизайн', 'Портативность', 'Камера', 'Ответ', 'Дисплей', 'Батарея'];

export default function BestChoiceSection() {
  const [selectedFilters, setSelectedFilters] = useState(['Дизайн', 'Портативность']);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <section className="container mx-auto md:px-8 sm:px-4 px-2 mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Лучший выбор</h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center group cursor-pointer transition-all duration-200"
          >
            <div className="w-24 h-24 md:w-full aspect-square bg-white rounded-3xl flex items-center justify-center p-4 shadow-sm border border-gray-50 group-hover:shadow-md group-hover:border-gray-100 transition-all">
              <div className="relative w-full h-full">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="mt-3 text-[13px] font-medium text-gray-700 text-center leading-tight group-hover:text-[#f04d3c] transition-colors">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((filter) => {
          const isActive = selectedFilters.includes(filter);
          return (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-5 py-2.5 rounded-2xl text-sm transition-all flex items-center gap-2 border shadow-sm ${isActive
                  ? 'bg-white text-[#f04d3c] border-[#f04d3c]/20'
                  : 'bg-white text-gray-400 border-gray-100 opacity-60'
                }`}
            >
              {filter}
              {isActive && <X size={14} />}
            </button>
          );
        })}
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </section>
  );
}