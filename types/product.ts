
export interface SpecItem {
  label: string;
  value: string | number;
}

export interface DetailedSpecs {
  factory?: SpecItem[];
  screen?: SpecItem[];
  camera?: SpecItem[];
}

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
  specifications: Specifications;
  detailed_specs?: DetailedSpecs;
  description: string;
  category: string;
  discount?: number;
  isNew?: boolean;
}

export type ProductList = Product[];
