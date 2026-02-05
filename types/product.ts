import { ReactNode } from "react";

// 1. Универсальный тип для одной строки характеристики
export interface SpecItem {
  label: string;
  value: string | number | ReactNode; // Поддержка текста, чисел и JSX
}

// 2. Группировка детальных характеристик
export interface DetailedSpecs {
  factory?: SpecItem[]; // Опционально, т.к. может не быть у некоторых товаров
  screen?: SpecItem[];
  camera?: SpecItem[];
  // Можно добавлять другие группы: battery, processor и т.д.
}

// Существующие интерфейсы...
export interface Rating {
  expert_score: number;
  user_score: number;
  reviews_count: number;
}

export interface Attribute {
  title: string;
  value: number;
}

export interface Specifications {
  camera: string;
  os: string;
  display_diagonal: string;
  charging: string;
}

// 3. Обновленный Product
export interface Product {
  id: string;
  title: string;
  slug: string;
  rating: Rating;
  attributes: Attribute[];
  price: number;
  colors: string[];
  image: string;
  imagesByColor: Record<string, string[]>;
  storage_options: string[];
  specifications: Specifications; // Краткие спеки (для карточки)
  detailed_specs?: DetailedSpecs; // Новое поле: Полные спеки (для детальной страницы)
  description: string;
  category: string;
  discount?: number;
  isNew?: boolean;
}

export type ProductList = Product[];
