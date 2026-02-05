"use client";

import React, { useState } from 'react';
import ProductCard from '../productcard';

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